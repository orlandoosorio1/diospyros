// Stagger step for Reveal — mirrored as a plain number since CSS custom
// properties can't be read by transition-delay math on the JS side.
// Keep in sync with the duration tokens in app/globals.css.
export const STAGGER_STEP_MS = 90;

export const PARALLAX_STRENGTH = 0.1;

// Caps the parallax translateY so it can never outrun the oversized
// background wrapper (RevealImage adds a 6% buffer on each edge) and
// expose empty space at a section's top/bottom edge.
export const PARALLAX_MAX_OFFSET_PX = 40;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
