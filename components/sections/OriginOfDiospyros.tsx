import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { originOfDiospyros } from "@/content/siteContent";

export function OriginOfDiospyros() {
  return (
    <Section backgroundColor="bg-green" tone="dark" padding="loose">
      <Container>
        <Reveal className="mb-8">
          <Kicker>{originOfDiospyros.kicker}</Kicker>
        </Reveal>
        <Reveal index={1}>
          <Heading size="xl" className="max-w-4xl">
            {originOfDiospyros.quote}
          </Heading>
        </Reveal>
      </Container>
    </Section>
  );
}
