import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { enduringMaterial } from "@/content/siteContent";
import { FEATURE_IMAGE_QUALITY } from "@/lib/images";

export function EnduringMaterial() {
  return (
    <Section
      backgroundImage={enduringMaterial.backgroundImage}
      overlay
      tone="dark"
      padding="default"
      parallax
      quality={FEATURE_IMAGE_QUALITY}
    >
      <Container className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
        <Reveal>
          <Kicker>
            {enduringMaterial.kicker.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </Kicker>
        </Reveal>
        <Reveal
          index={1}
          className="flex flex-col gap-5 text-base leading-relaxed md:border-l md:border-white/15 md:pl-8 md:text-lg"
        >
          {enduringMaterial.paragraphs.map((paragraph) => (
            <p key={paragraph} className="opacity-90">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
