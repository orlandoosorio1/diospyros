import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { originOfCapital } from "@/content/siteContent";

export function OriginOfCapital() {
  return (
    <Section backgroundColor="bg-dusty-orange" tone="dark" className="py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
        <div>
          <Kicker className="mb-4">{originOfCapital.kicker}</Kicker>
          <Heading size="lg">{originOfCapital.heading}</Heading>
        </div>
        <div className="flex flex-col gap-5 text-base leading-relaxed md:text-lg">
          {originOfCapital.paragraphs.map((paragraph) => (
            <p key={paragraph} className="opacity-90">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
