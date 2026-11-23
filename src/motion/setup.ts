// Global motion for Flamingo. One driver: scroll progress → --glow (sand to sunset pink).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, onScroll, setTransition, scrollToTarget, ease, isTouch, prefersReducedMotion } from '../engine';

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
  onPage(() => { shown = -1; applyGlow(0); });
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

// ── Menu chips: jump to a section, mark the one being read ──
function startChips() {
  onPage(() => {
    const bar = document.querySelector<HTMLElement>('[data-chips]');
    if (!bar) return;
    const list = bar.querySelector('ul')!;
    const offset = () => (parseFloat(getComputedStyle(root()).getPropertyValue('--hdr')) || 4) * 16 + bar.offsetHeight - 1;
    const setCurrent = (id: string) => {
      bar.querySelectorAll('a[aria-current]').forEach((a) => a.removeAttribute('aria-current'));
      const a = bar.querySelector<HTMLElement>(`[data-chip="${id}"]`);
      if (!a) return;
      a.setAttribute('aria-current', 'true');
      list.scrollTo({ left: a.offsetLeft - list.clientWidth / 2 + a.offsetWidth / 2, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    };
    // Current = the last section whose top passed 45% of the viewport (fast scrolls can't skip one).
    const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
    let cur = '';
    const track = () => {
      const line = innerHeight * 0.45;
      let id = sections[0]?.id ?? '';
      for (const s of sections) if (s.getBoundingClientRect().top <= line) id = s.id;
      if (id !== cur) setCurrent((cur = id));
    };
    const offTrack = onScroll(track);
    track();
    const click = (e: Event) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-chip]');
      if (!a) return;
      e.preventDefault();
      scrollToTarget(`#${a.dataset.chip}`, { offset: offset() });
      history.replaceState(history.state, '', `#${a.dataset.chip}`);
    };
    bar.addEventListener('click', click);
    // Arriving from the home index with a hash: land on that section under the sticky bars.
    if (location.hash && document.querySelector(location.hash)) {
      requestAnimationFrame(() => scrollToTarget(location.hash, { offset: offset(), immediate: true }));
    }
    return () => { bar.removeEventListener('click', click); offTrack(); };
  });
}

// ── Home index: the plate follows the pointer (fine pointers); touch rows carry inline thumbs ──
function startPreview() {
  onPage(() => {
    const list = document.querySelector('[data-index]');
    const box = document.querySelector<HTMLElement>('.preview');
    if (!list || !box || isTouch()) return;
    const img = box.querySelector('img')!;
    const x = gsap.quickTo(box, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(box, 'y', { duration: 0.6, ease: 'power3.out' });
    const rot = gsap.quickTo(box, 'rotate', { duration: 0.8, ease: 'power3.out' });
    let lastX = 0, px = 0, py = 0;
    const move = (e: PointerEvent) => {
      px = e.clientX; py = e.clientY;
      x(px); y(py); rot(gsap.utils.clamp(-10, 10, (px - lastX) * 0.5)); lastX = px;
    };
    // The plate dips in from below the waterline, like everything else here.
    let moved = false;
    list.addEventListener('pointermove', () => { moved = true; }, { passive: true });
    const show = (e: PointerEvent) => {
      if (!moved) return; // a scroll under a still pointer fires pointerenter too: wait for a real move
      px = e.clientX; py = e.clientY; gsap.set(box, { x: px, y: py });
      img.src = (e.currentTarget as HTMLElement).dataset.preview!;
      gsap.fromTo(box, { autoAlpha: 1, clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6, ease: ease.out, overwrite: true });
    };
    const hide = () => gsap.to(box, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.45, ease: ease.soft, overwrite: true, onComplete: () => gsap.set(box, { autoAlpha: 0 }) });
    const links = [...list.querySelectorAll<HTMLAnchorElement>('a[data-preview]')];
    links.forEach((a) => { a.addEventListener('pointerenter', show); a.addEventListener('pointerleave', hide); });
    list.addEventListener('pointerleave', hide);
    addEventListener('pointermove', move);
    links.forEach((a) => { const i = new Image(); i.src = a.dataset.preview!; });
    const off = onScroll(() => { moved = false; hide(); });
    ScrollTrigger.create({ trigger: list, start: 'top bottom', end: 'bottom top', onLeave: hide, onLeaveBack: hide });
    return () => {
      removeEventListener('pointermove', move); off();
      links.forEach((a) => { a.removeEventListener('pointerenter', show); a.removeEventListener('pointerleave', hide); });
      list.removeEventListener('pointerleave', hide);
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

export function setupMotion() {
  startFeed();
  startGlow();
  startReflection();
  startChips();
  startPreview();
  startTide();
}
