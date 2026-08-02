"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      easing: easeOutCubic,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
