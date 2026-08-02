import Image from "next/image";
import type { ReactNode } from "react";

type Tone = "light" | "dark";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundImageClassName?: string;
  backgroundColor?: string;
  tone?: Tone;
  overlay?: boolean;
  as?: "section" | "footer";
}

export function Section({
  id,
  children,
  className = "",
  backgroundImage,
  backgroundImageClassName = "object-cover",
  backgroundColor = "",
  tone = "dark",
  overlay = false,
  as: Tag = "section",
}: SectionProps) {
  const textTone = tone === "dark" ? "text-white" : "text-black";

  return (
    <Tag
      id={id}
      className={`relative overflow-hidden ${backgroundColor} ${textTone} ${className}`}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className={backgroundImageClassName}
        />
      )}
      {overlay && <div className="absolute inset-0 bg-black/35" />}
      <div className="relative">{children}</div>
    </Tag>
  );
}
