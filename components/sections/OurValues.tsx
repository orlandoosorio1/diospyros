import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { TraitItem } from "@/components/ui/TraitItem";
import { ourValues } from "@/content/siteContent";
import { FEATURE_IMAGE_QUALITY } from "@/lib/images";

export function OurValues() {
  return (
    <Section backgroundColor="bg-dusty-orange" tone="dark" padding="default">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <Kicker className="mb-4">{ourValues.kicker}</Kicker>
            <Heading size="lg">{ourValues.heading}</Heading>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-90 md:text-lg">
              {ourValues.intro}
            </p>
          </Reveal>
          <div className="mt-10 divide-y divide-white/15">
            {ourValues.traits.map((trait, i) => (
              <TraitItem key={trait.title} index={i + 1} {...trait} />
            ))}
          </div>
        </div>
        <div className="relative min-h-[320px] w-full overflow-hidden md:min-h-full">
          <RevealImage
            src={ourValues.backgroundImage}
            alt="Persimmons ripening on a branch"
            sizes="(min-width: 768px) 40vw, 100vw"
            parallax
            quality={FEATURE_IMAGE_QUALITY}
          />
        </div>
      </Container>
    </Section>
  );
}
