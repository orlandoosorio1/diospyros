import type { ElementType, ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-5xl",
  lg: "text-4xl md:text-6xl",
  xl: "text-5xl leading-[1.05] md:text-7xl",
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
      className={`font-display font-medium leading-[1.1] ${sizes[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
