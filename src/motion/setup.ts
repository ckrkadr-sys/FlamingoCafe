// Global motion for Flamingo. One driver: scroll progress → --glow (sand to sunset pink).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, onScroll, scrollState, setTransition, scrollToTarget, stopScroll, startScroll, ease, isTouch, prefersReducedMotion } from '../engine';

const root = () => document.documentElement;

// ── The driver: the page eats its way to pink ──
let shown = -1;
function applyGlow(p: number) {
  const pinned = root().dataset.glow;
  const g = pinned != null ? +pinned : gsap.utils.clamp(0, 1, p * 1.08);
  if (Math.abs(g - shown) < 0.004) return; // repaints the whole page: only when it visibly changes
  shown = g;
  root().style.setProperty('--glow', g.toFixed(3));
}

function startGlow() {
  onScroll(({ progress, y }) => {
    applyGlow(progress);
    root().classList.toggle('scrolled', y > 8);
  });
  onPage(() => { shown = -1; applyGlow(scrollState().progress); }); // 0 after a normal page change; kept on a language switch
}

// ── Idle: the reflection under the bird ripples (pointer leans it a little) ──
function startReflection() {
  if (prefersReducedMotion()) return;
  const aim = { x: 0 }, cur = { x: 0 };
  const move = (e: PointerEvent) => { aim.x = e.clientX / innerWidth - 0.5; };
  if (!isTouch()) addEventListener('pointermove', move, { passive: true });
  onPage(() => {
    const el = document.querySelector<HTMLElement>('[data-reflect] .mark');
    if (!el) return;
    const tick = (t: number) => {
      cur.x += (aim.x - cur.x) * (1 - Math.pow(0.94, gsap.ticker.deltaRatio()));
      gsap.set(el, { skewX: Math.sin(t * 0.7) * 2.2 + cur.x * 6, scaleX: 1 + Math.sin(t * 0.45) * 0.015 });
      el.style.setProperty('mask-position', `center, 0 ${(t * 6) % 8}px`);
      el.style.setProperty('-webkit-mask-position', `center, 0 ${(t * 6) % 8}px`);
    };
    const st = ScrollTrigger.create({
      trigger: el.closest('[data-reflect]')!, start: 'top bottom', end: 'bottom top',
      onToggle: (s) => (s.isActive ? gsap.ticker.add(tick) : gsap.ticker.remove(tick)),
    });
    if (st.isActive) gsap.ticker.add(tick);
    return () => { gsap.ticker.remove(tick); st.kill(); };
  });
}

// ── Menu bar: groups on top, the active group's sections below; jump to a section, mark the one being read ──
function startChips() {
  onPage(() => {
    const bar = document.querySelector<HTMLElement>('[data-chips]');
    if (!bar) return;
    const rows = [...bar.querySelectorAll<HTMLElement>('[data-row]')];
    const lists = [...bar.querySelectorAll<HTMLElement>('ul')];
    // Sticky offsets (photo top, scroll-margin) follow the bar's real height.
    const sizeObs = new ResizeObserver(() => root().style.setProperty('--nav', `${bar.offsetHeight}px`));
    sizeObs.observe(bar);
    const offset = () => (parseFloat(getComputedStyle(root()).getPropertyValue('--hdr')) || 4) * 16 + bar.offsetHeight - 1;
    // Right-edge fade only while a row has more to scroll.
    const fade = (ul: HTMLElement) => ul.toggleAttribute('data-more', ul.scrollLeft + ul.clientWidth < ul.scrollWidth - 2);
    const onListScroll = (e: Event) => fade(e.currentTarget as HTMLElement);
    lists.forEach((ul) => ul.addEventListener('scroll', onListScroll, { passive: true }));
    const center = (ul: HTMLElement, a: HTMLElement) =>
      ul.scrollTo({ left: a.offsetLeft - ul.clientWidth / 2 + a.offsetWidth / 2, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    const setCurrent = (s: HTMLElement) => {
      const group = s.dataset.in!;
      bar.querySelectorAll('a[aria-current]').forEach((a) => a.removeAttribute('aria-current'));
      rows.forEach((ul) => (ul.hidden = ul.dataset.row !== group));
      const g = bar.querySelector<HTMLElement>(`[data-group="${group}"]`)!;
      const a = bar.querySelector<HTMLElement>(`[data-chip="${s.id}"]`)!;
      // New group: its chip row starts from the left before the active chip is centred.
      if (group !== bar.dataset.active) { a.closest('ul')!.scrollLeft = 0; bar.dataset.active = group; }
      g.setAttribute('aria-current', 'true');
      a.setAttribute('aria-current', 'true');
      center(g.closest('ul')!, g);
      center(a.closest('ul')!, a);
      lists.forEach(fade);
    };
    // Current = the last section whose top passed 45% of the viewport; the observer fires on each crossing.
    const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
    let cur: HTMLElement | undefined;
    const track = () => {
      const line = innerHeight * 0.45;
      let s = sections[0];
      for (const el of sections) if (el.getBoundingClientRect().top <= line) s = el;
      if (s && s !== cur) setCurrent((cur = s));
    };
    const io = new IntersectionObserver(track, { rootMargin: '0px 0px -55% 0px' });
    sections.forEach((s) => io.observe(s));
    track();
    const click = (e: Event) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      const hash = a.getAttribute('href')!;
      scrollToTarget(hash, { offset: offset() });
      history.replaceState(history.state, '', hash);
    };
    bar.addEventListener('click', click);
    // Arriving from the home index with a hash: land on that section under the sticky bars.
    if (location.hash && document.querySelector(location.hash)) {
      requestAnimationFrame(() => scrollToTarget(location.hash, { offset: offset(), immediate: true }));
    }
    return () => {
      bar.removeEventListener('click', click); io.disconnect(); sizeObs.disconnect();
      lists.forEach((ul) => ul.removeEventListener('scroll', onListScroll));
    };
  });
}

// ── Menu thumbnails: open the whole photo in a native dialog (the full file loads only on open) ──
function startZoom() {
  onPage(() => {
    const dlg = document.querySelector<HTMLDialogElement>('[data-zoom]');
    if (!dlg) return;
    const img = dlg.querySelector('img')!;
    const open = (e: Event) => {
      const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-full]');
      if (!b) return;
      img.width = +b.dataset.w!; img.height = +b.dataset.h!;
      img.alt = b.dataset.alt!; img.src = b.dataset.full!;
      stopScroll();
      dlg.showModal();
    };
    // Esc closes natively; the X and a click on the backdrop (the dialog box itself, outside the photo) close too.
    const click = (e: Event) => { if (e.target === dlg || (e.target as HTMLElement).closest('[data-zoom-close]')) dlg.close(); };
    const closed = () => startScroll();
    document.addEventListener('click', open);
    dlg.addEventListener('click', click);
    dlg.addEventListener('close', closed);
    return () => {
      document.removeEventListener('click', open); dlg.removeEventListener('click', click); dlg.removeEventListener('close', closed);
      if (dlg.open) dlg.close();
    };
  });
}

// ── Page transition: a pink tide comes in, the bird rides it, the tide goes out ──
function startTide() {
  setTransition({
    leave: (c) => {
      const panel = c.querySelector('.curtain__panel');
      const bird = c.querySelector('.curtain__bird');
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .fromTo(panel, { yPercent: 112 }, { yPercent: 0, duration: 0.85, ease: ease.inOut })
        .fromTo(bird, { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: ease.out }, 0.4);
    },
    enter: (c) => {
      const panel = c.querySelector('.curtain__panel');
      const bird = c.querySelector('.curtain__bird');
      return gsap.timeline()
        .to(bird, { yPercent: -60, autoAlpha: 0, duration: 0.45, ease: ease.soft })
        .to(panel, { yPercent: -112, duration: 0.85, ease: ease.inOut }, 0.1)
        .set(c, { autoAlpha: 0 });
    },
  });
}

function startFeed() {
  onPage(({ intro }) => {
    const bird = document.querySelector<HTMLElement>('[data-bird]');
    if (!bird || prefersReducedMotion()) return;
    gsap.set(bird, { '--fill': '0%' });
    intro.add(gsap.to(bird, { '--fill': '100%', duration: 1.6, ease: ease.inOut }), 0.45);
  });
}

// ── Language switcher: land on the same section in the other language (anchor ids are the same in every language) ──
function startLangs() {
  // Capture phase, so the href is set before the router reads it. Same rule as the scroll-spy: the last section past 45%.
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('[data-lang]');
    if (!a) return;
    let id = '';
    if (scrollY > 2) for (const s of document.querySelectorAll<HTMLElement>('[data-section]')) if (s.getBoundingClientRect().top <= innerHeight * 0.45) id = s.id;
    a.hash = id; // above the first section: no anchor, the page opens at the top
  }, true);
}

export function setupMotion() {
  startFeed();
  startGlow();
  startReflection();
  startChips();
  startZoom();
  startLangs();
  startTide();
}
