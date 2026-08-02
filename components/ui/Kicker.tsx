import type { ReactNode } from "react";

export function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-sans text-xs font-bold uppercase tracking-[0.2em] opacity-70 md:text-sm ${className}`}
    >
      {children}
    </p>
  );
}
