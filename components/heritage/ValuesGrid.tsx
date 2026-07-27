import { Hammer, ShieldCheck, Sun } from "lucide-react";
import type { ReactNode } from "react";

const VALUES: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Sun className="size-6" strokeWidth={1.25} />,
    title: "Radiance",
    description:
      "Solar-grown diamonds with a clarity and fire that rival the rarest natural stones.",
  },
  {
    icon: <Hammer className="size-6" strokeWidth={1.25} />,
    title: "Craftsmanship",
    description:
      "Every piece is hand-finished in our atelier by jewellers trained in traditional technique.",
  },
  {
    icon: <ShieldCheck className="size-6" strokeWidth={1.25} />,
    title: "Integrity",
    description:
      "Independently certified, fully insured, and transparently sourced from first cut to final polish.",
  },
];

export function ValuesGrid() {
  return (
    <section className="border-t border-navy/10 bg-champagne/20 py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
        {VALUES.map((value) => (
          <div key={value.title} className="text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-ivory text-gold">
              {value.icon}
            </span>
            <h3 className="mt-4 font-serif text-xl text-navy">
              {value.title}
            </h3>
            <p className="mx-auto mt-2 max-w-xs font-sans text-sm leading-relaxed text-navy/60">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
