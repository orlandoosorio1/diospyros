import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { TraitItem } from "@/components/ui/TraitItem";
import { ourValues } from "@/content/siteContent";

export function OurValues() {
  return (
    <Section backgroundColor="bg-dusty-orange" tone="dark" className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Kicker className="mb-4">{ourValues.kicker}</Kicker>
          <Heading size="lg">{ourValues.heading}</Heading>
          <p className="mt-6 max-w-md text-base leading-relaxed opacity-90 md:text-lg">
            {ourValues.intro}
          </p>
          <div className="mt-10 divide-y divide-white/15">
            {ourValues.traits.map((trait) => (
              <TraitItem key={trait.title} {...trait} />
            ))}
          </div>
        </div>
        <div className="relative min-h-[320px] w-full overflow-hidden md:min-h-full">
          <Image
            src={ourValues.backgroundImage}
            alt="Persimmons ripening on a branch"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </Section>
  );
}
