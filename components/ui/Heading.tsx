import type { ElementType, ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "xl";

// Fluid scale: each clamp() interpolates continuously between the previous
// mobile size (floor, reached at ~375px viewport) and the previous md: size
// (ceiling, reached at ~1536px) — same rendered sizes at both ends as
// before, just no hard jump at the md: breakpoint in between.
const sizes: Record<Size, string> = {
  sm: "text-[clamp(1.5rem,1.379rem_+_0.517vw,1.875rem)]",
  md: "text-[clamp(1.875rem,1.512rem_+_1.55vw,3rem)]",
  lg: "text-[clamp(2.25rem,1.765rem_+_2.067vw,3.75rem)] tracking-[-0.01em]",
  xl: "text-[clamp(3rem,2.515rem_+_2.067vw,4.5rem)] leading-[1.05] tracking-[-0.015em]",
};

interface HeadingProps {
  children: ReactNode;
  size?: Size;
  as?: ElementType;
  className?: string;
}

export function Heading({
  children,
  size = "md",
  as: Tag = "h2",
  className = "",
}: HeadingProps) {
  return (
    <Tag
      className={`font-display font-medium leading-[1.1] text-balance ${sizes[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
