import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { originOfDiospyros } from "@/content/siteContent";

export function OriginOfDiospyros() {
  return (
    <Section backgroundColor="bg-green" tone="dark" className="py-24 md:py-32">
      <Container>
        <Kicker className="mb-8">{originOfDiospyros.kicker}</Kicker>
        <Heading size="xl" className="max-w-4xl">
          {originOfDiospyros.quote}
        </Heading>
      </Container>
    </Section>
  );
}
