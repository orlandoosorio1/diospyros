import { Reveal } from "@/components/motion/Reveal";
import type { Trait } from "@/content/siteContent";

interface TraitItemProps extends Trait {
  /** Position within the list, for staggered reveal timing. */
  index?: number;
}

export function TraitItem({ title, body, index = 0 }: TraitItemProps) {
  return (
    <Reveal index={index} className="py-6 first:pt-0 last:pb-0">
      <h3 className="mb-2 font-sans text-base font-bold md:text-lg">
        {title}
      </h3>
      <p className="max-w-prose text-sm leading-relaxed opacity-90 md:text-base">
        {body}
      </p>
    </Reveal>
  );
}
