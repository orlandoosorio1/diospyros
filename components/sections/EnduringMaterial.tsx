import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { enduringMaterial } from "@/content/siteContent";

export function EnduringMaterial() {
  return (
    <Section
      backgroundImage={enduringMaterial.backgroundImage}
      overlay
      tone="dark"
      className="py-20 md:py-28"
    >
      <Container className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
        <div>
          <Kicker>
            {enduringMaterial.kicker.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </Kicker>
        </div>
        <div className="flex flex-col gap-5 text-base leading-relaxed md:text-lg">
          {enduringMaterial.paragraphs.map((paragraph) => (
            <p key={paragraph} className="opacity-90">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
