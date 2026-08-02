"use client";

import type { CSSProperties, ReactNode } from "react";
import { STAGGER_STEP_MS } from "@/lib/motion";
import { useInView } from "./useInView";

interface RevealProps {
  children: ReactNode;
  /** Position in a staggered group; each step adds STAGGER_STEP_MS of delay. */
  index?: number;
  className?: string;
  style?: CSSProperties;
}

export function Reveal({ children, index = 0, className = "", style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={["reveal", inView && "is-visible", className]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${index * STAGGER_STEP_MS}ms`, ...style }}
    >
      {children}
    </div>
  );
}
