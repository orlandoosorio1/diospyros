import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { TraitItem } from "@/components/ui/TraitItem";
import { investmentApproach, lightEbony1 } from "@/content/siteContent";

export function InvestmentApproach() {
  return (
    <Section
      backgroundImage={lightEbony1}
      backgroundImageClassName="object-cover opacity-25 mix-blend-multiply"
      backgroundColor="bg-warm-gray"
      tone="light"
      padding="default"
    >
      <Container>
        <Reveal>
          <Kicker className="mb-4">{investmentApproach.kicker}</Kicker>
          <Heading size="lg" className="max-w-2xl">
            {investmentApproach.heading}
          </Heading>
        </Reveal>
        <Reveal index={1} className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed opacity-80 md:text-lg">
            {investmentApproach.intro}
          </p>
        </Reveal>

        <div className="mt-12 max-w-3xl divide-y divide-black/15">
          {investmentApproach.traits.map((trait, i) => (
            <TraitItem key={trait.title} index={i + 2} {...trait} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
