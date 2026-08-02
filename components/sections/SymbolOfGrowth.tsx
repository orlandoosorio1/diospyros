import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { symbolOfGrowth } from "@/content/siteContent";

export function SymbolOfGrowth() {
  return (
    <Section
      backgroundImage={symbolOfGrowth.backgroundImage}
      backgroundImageClassName="object-cover opacity-25 mix-blend-multiply"
      backgroundColor="bg-warm-gray"
      tone="light"
      padding="default"
    >
      <Container className="flex flex-col gap-20 md:gap-28">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-16">
          <Reveal>
            <Kicker className="mb-4">{symbolOfGrowth.kicker}</Kicker>
            <Heading size="md" className="max-w-xl">
              {symbolOfGrowth.heading}
            </Heading>
            <div className="mt-6 flex max-w-xl flex-col gap-4 text-base leading-relaxed opacity-90 md:text-lg">
              {symbolOfGrowth.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal index={1} className="flex justify-center md:justify-end">
            <Image
              src={symbolOfGrowth.symbol}
              alt="Diospyros symbol"
              width={180}
              height={180}
              className="h-32 w-32 md:h-44 md:w-44"
            />
          </Reveal>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-16">
          <Reveal>
            <Image
              src={symbolOfGrowth.logotype}
              alt="Diospyros"
              width={516}
              height={47}
              className="h-10 w-auto md:h-14"
            />
          </Reveal>
          <Reveal index={1}>
            <Heading size="sm" className="mb-4">
              {symbolOfGrowth.nameHeading}
            </Heading>
            <div className="flex flex-col gap-4 text-base leading-relaxed opacity-90 md:text-lg">
              {symbolOfGrowth.nameParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
