import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { RevealImage } from "@/components/motion/RevealImage";

type Tone = "light" | "dark";
type Padding = "default" | "loose";

// Shared vertical rhythm for content sections — see components/sections/*.
// "loose" is reserved for single, standalone moments (e.g. a pull quote)
// that warrant more breathing room. Hero/Footer are structurally bespoke
// (full-viewport frame / top-only) and set their own padding directly.
const paddingVariants: Record<Padding, string> = {
  default: "py-20 md:py-28",
  loose: "py-24 md:py-32",
};

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  backgroundImage?: string | StaticImageData;
  backgroundImageClassName?: string;
  backgroundColor?: string;
  tone?: Tone;
  overlay?: boolean;
  as?: "section" | "footer";
  /** Shared spacing scale for this section's vertical padding. */
  padding?: Padding;
  /** Light scroll-linked drift — reserve for large, full-bleed photography. */
  parallax?: boolean;
  /** Set on the section whose background image is the LCP element (e.g. Hero). */
  preload?: boolean;
  quality?: number;
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
  padding,
  parallax = false,
  preload = false,
  quality,
}: SectionProps) {
  const textTone = tone === "dark" ? "text-white" : "text-black";
  const paddingClassName = padding ? paddingVariants[padding] : "";

  return (
    <Tag
      id={id}
      className={`relative overflow-hidden ${backgroundColor} ${textTone} ${paddingClassName} ${className}`}
    >
      {backgroundImage && (
        <RevealImage
          src={backgroundImage}
          alt=""
          sizes="100vw"
          imageClassName={backgroundImageClassName}
          parallax={parallax}
          preload={preload}
          quality={quality}
        />
      )}
      {overlay && <div className="section-overlay absolute inset-0" />}
      <div className="relative">{children}</div>
    </Tag>
  );
}
