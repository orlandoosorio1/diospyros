"use client";

import { useEffect, useRef } from "react";
import {
  PARALLAX_MAX_OFFSET_PX,
  PARALLAX_STRENGTH,
  prefersReducedMotion,
} from "@/lib/motion";

/**
 * Nudges an element's translateY based on its position relative to the
 * viewport center. Intended for oversized background-image wrappers
 * (see RevealImage) so the shift never reveals empty edges.
 */
export function useParallax<T extends HTMLElement>(
  enabled: boolean,
  strength: number = PARALLAX_STRENGTH,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || prefersReducedMotion()) return;

    let frame: number;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const rawOffset = (viewportCenter - elementCenter) * strength;
      const offset = Math.max(
        -PARALLAX_MAX_OFFSET_PX,
        Math.min(PARALLAX_MAX_OFFSET_PX, rawOffset),
      );
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [enabled, strength]);

  return ref;
}
