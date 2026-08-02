import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { hero } from "@/content/siteContent";

export function Hero() {
  return (
    <Section
      id="top"
      backgroundImage={hero.backgroundImage}
      overlay
      tone="dark"
    >
      <Container className="flex min-h-[92vh] flex-col justify-between py-10 md:py-14">
        <Image
          src={hero.logo}
          alt="Diospyros"
          width={220}
          height={38}
          className="h-8 w-auto md:h-10"
          priority
        />

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <Heading as="h1" size="xl">
            {hero.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </Heading>

          <div className="flex max-w-xs flex-col gap-4 text-sm md:text-right md:text-base">
            {hero.paragraphs.map((paragraph) => (
              <p key={paragraph} className="opacity-90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
