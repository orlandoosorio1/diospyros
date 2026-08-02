import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { hero } from "@/content/siteContent";
import { FEATURE_IMAGE_QUALITY } from "@/lib/images";

export function Hero() {
  return (
    <Section
      id="top"
      backgroundImage={hero.backgroundImage}
      overlay
      tone="dark"
      parallax
      preload
      quality={FEATURE_IMAGE_QUALITY}
    >
      <Container className="flex min-h-[92dvh] flex-col justify-between py-10 md:py-14">
        <Reveal>
          <Image
            src={hero.logo}
            alt="Diospyros"
            width={663}
            height={115}
            className="h-8 w-auto md:h-10"
            priority
          />
        </Reveal>

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <Reveal index={1}>
            <Heading as="h1" size="xl">
              {hero.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Heading>
          </Reveal>

          <Reveal
            index={2}
            className="flex max-w-xs flex-col gap-4 text-sm md:text-right md:text-base"
          >
            {hero.paragraphs.map((paragraph) => (
              <p key={paragraph} className="opacity-90">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
