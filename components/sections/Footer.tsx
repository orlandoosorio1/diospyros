import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { footer } from "@/content/siteContent";
import { FEATURE_IMAGE_QUALITY } from "@/lib/images";

export function Footer() {
  return (
    <Section
      as="footer"
      backgroundImage={footer.backgroundImage}
      overlay
      tone="dark"
      className="pt-20 md:pt-28"
      parallax
      quality={FEATURE_IMAGE_QUALITY}
    >
      <Container>
        <Reveal className="mb-16 md:mb-20">
          <Heading size="xl">{footer.heading}</Heading>
        </Reveal>

        <div className="grid gap-10 border-t border-white/15 pt-12 md:grid-cols-2 md:gap-16">
          <Reveal index={1}>
            <Kicker className="mb-4">{footer.contactHeading}</Kicker>
            <p className="max-w-md text-base leading-relaxed opacity-90 md:text-lg">
              {footer.contactBody}
            </p>
          </Reveal>
          <Reveal
            index={2}
            className="flex flex-col gap-2 text-base md:text-lg"
          >
            <a
              href={`mailto:${footer.email}`}
              className="link-underline relative w-fit opacity-90 hover:opacity-100 focus-visible:opacity-100"
            >
              {/* Invisible, out-of-flow hit-area expansion — grows the tap
                  target to a comfortable size without affecting layout. */}
              <span className="absolute -inset-x-3 -inset-y-3" aria-hidden="true" />
              {footer.email}
            </a>
            <p className="opacity-90">{footer.company}</p>
            <p className="opacity-90">{footer.location}</p>
          </Reveal>
        </div>

        <Reveal
          index={3}
          className="mt-16 flex flex-col items-start gap-6 border-t border-white/15 py-8 md:mt-20 md:flex-row md:items-center md:justify-between"
        >
          <Image
            src={footer.logo}
            alt="Diospyros"
            width={663}
            height={115}
            className="h-6 w-auto"
          />
          <p className="text-xs opacity-70">{footer.copyright}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
