import type { Trait } from "@/content/siteContent";

export function TraitItem({ title, body }: Trait) {
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <h3 className="mb-2 font-sans text-base font-bold md:text-lg">
        {title}
      </h3>
      <p className="max-w-prose text-sm leading-relaxed opacity-80 md:text-base">
        {body}
      </p>
    </div>
  );
}
