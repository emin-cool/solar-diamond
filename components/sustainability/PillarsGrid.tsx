import { BadgeCheck, Sprout, Sun } from "lucide-react";
import type { ReactNode } from "react";

/** Mirrors the homepage trust bar's iconography for visual continuity. */
const PILLARS: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Sprout className="size-6" strokeWidth={1.25} />,
    title: "Ethical Sourcing",
    description:
      "Every diamond is conflict-free and traceable, grown in controlled environments rather than mined from the earth.",
  },
  {
    icon: <Sun className="size-6" strokeWidth={1.25} />,
    title: "Renewable Energy",
    description:
      "Our labs run on 100% renewable power, using a fraction of the energy and land footprint of traditional mining.",
  },
  {
    icon: <BadgeCheck className="size-6" strokeWidth={1.25} />,
    title: "Certified Process",
    description:
      "Independently graded by GIA and HRD at every stage, with full documentation from creation to delivery.",
  },
];

export function PillarsGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid grid-cols-1 gap-10 divide-navy/10 sm:grid-cols-3 sm:divide-x">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="text-center sm:px-6">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-champagne/30 text-gold">
              {pillar.icon}
            </span>
            <h2 className="mt-4 font-serif text-xl text-navy">
              {pillar.title}
            </h2>
            <p className="mx-auto mt-2 max-w-xs font-sans text-sm leading-relaxed text-navy/60">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
