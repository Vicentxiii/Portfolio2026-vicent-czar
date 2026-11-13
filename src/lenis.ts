import Lenis from 'lenis';

export const lenis = new Lenis({
  duration: 0.8,
});

export function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
