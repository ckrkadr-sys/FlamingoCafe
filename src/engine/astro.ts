// Astro adapter (ClientRouter). The leave animation runs in parallel with fetching the next page.
// Links marked data-quick (the language switcher) skip the curtain: the scroll stays, <main> fades out and in.
import { boot, cleanup, enter, leave, syncFlags } from './index';
import { prefersReducedMotion } from './env';

let navigating = false;
let quick = false;

const fade = (to: 0 | 1, ms: number) => {
  const main = document.querySelector('main');
  if (!main) return Promise.resolve();
  const a = main.animate([{ opacity: 1 - to }, { opacity: to }], { duration: prefersReducedMotion() ? 0 : ms, easing: 'ease-out', fill: 'forwards' });
  return a.finished.then(() => { if (to === 1) { a.cancel(); main.style.removeProperty('opacity'); } });
};

export function start(setup?: () => void) {
  document.addEventListener('astro:before-preparation', (e) => {
    navigating = true;
    quick = !!(e.sourceElement as HTMLElement | undefined)?.closest?.('[data-quick]');
    const load = e.loader;
    e.loader = async () => { await Promise.all([quick ? Promise.all([leave({ transition: false }), fade(0, 70)]) : leave(), load()]); };
  });
  document.addEventListener('astro:before-swap', (e) => {
    if (quick) {
      // Keep the live state on <html> (scroll flags, --glow), so the header and the page colour do not flash.
      const html = e.newDocument.documentElement;
      html.className = document.documentElement.className;
      html.style.cssText = document.documentElement.style.cssText;
      e.newDocument.querySelector('main')?.style.setProperty('opacity', '0');
    }
    cleanup();
  });
  document.addEventListener('astro:after-swap', () => syncFlags());
  document.addEventListener('astro:page-load', () => {
    if (!navigating) return void boot(setup);
    navigating = false;
    if (!quick) return void enter();
    enter({ transition: false, scrollTop: false, playIntro: false });
    // After the page code has jumped to the #section (it does so on the next frame).
    requestAnimationFrame(() => fade(1, 130));
  });
  boot(setup);
}
