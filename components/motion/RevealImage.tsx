"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useInView } from "./useInView";
import { useParallax } from "./useParallax";

interface RevealImageProps {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  imageClassName?: string;
  /** Light scroll-linked drift. Only use on large, full-bleed imagery. */
  parallax?: boolean;
  quality?: number;
  preload?: boolean;
}

export function RevealImage({
  src,
  alt,
  sizes,
  imageClassName = "object-cover",
  parallax = false,
  quality,
  preload = false,
}: RevealImageProps) {
  const { ref: revealRef, inView } = useInView<HTMLDivElement>();
  const parallaxRef = useParallax<HTMLDivElement>(parallax);

  return (
    <div
      ref={parallaxRef}
      className={
        parallax
          ? "absolute -inset-y-[6%] inset-x-0 will-change-transform"
          : "absolute inset-0"
      }
    >
      <div
        ref={revealRef}
        className={[
          "reveal-image relative h-full w-full",
          inView && "is-visible",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={preload}
          placeholder={typeof src === "string" ? undefined : "blur"}
          className={imageClassName}
        />
      </div>
    </div>
  );
}
