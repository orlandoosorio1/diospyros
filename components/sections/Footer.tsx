import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { footer } from "@/content/siteContent";

export function Footer() {
  return (
    <Section
      as="footer"
      backgroundImage={footer.backgroundImage}
      overlay
      tone="dark"
      className="pt-20 md:pt-28"
    >
      <Container>
        <Heading size="xl" className="mb-16 md:mb-20">
          {footer.heading}
        </Heading>

        <div className="grid gap-10 border-t border-white/15 pt-12 md:grid-cols-2 md:gap-16">
          <div>
            <Kicker className="mb-4">{footer.contactHeading}</Kicker>
            <p className="max-w-md text-base leading-relaxed opacity-90 md:text-lg">
              {footer.contactBody}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-base md:text-lg">
            <a
              href={`mailto:${footer.email}`}
              className="w-fit opacity-90 underline-offset-4 hover:underline"
            >
              {footer.email}
            </a>
            <p className="opacity-90">{footer.company}</p>
            <p className="opacity-90">{footer.location}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-white/15 py-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <Image
            src={footer.logo}
            alt="Diospyros"
            width={140}
            height={24}
            className="h-6 w-auto"
          />
          <p className="text-xs opacity-70">{footer.copyright}</p>
        </div>
      </Container>
    </Section>
  );
}
