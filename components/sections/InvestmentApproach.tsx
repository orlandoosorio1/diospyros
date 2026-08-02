import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { TraitItem } from "@/components/ui/TraitItem";
import { investmentApproach } from "@/content/siteContent";

export function InvestmentApproach() {
  return (
    <Section
      backgroundImage="/images/diospyros-light-ebony-1.jpg"
      backgroundImageClassName="object-cover opacity-25 mix-blend-multiply"
      backgroundColor="bg-warm-gray"
      tone="light"
      className="py-20 md:py-28"
    >
      <Container>
        <Kicker className="mb-4">{investmentApproach.kicker}</Kicker>
        <Heading size="lg" className="max-w-2xl">
          {investmentApproach.heading}
        </Heading>
        <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">
          {investmentApproach.intro}
        </p>

        <div className="mt-12 max-w-3xl divide-y divide-black/15">
          {investmentApproach.traits.map((trait) => (
            <TraitItem key={trait.title} {...trait} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
