import { CalendarCheck, Hammer, PenTool, Truck } from "lucide-react";
import type { ReactNode } from "react";

const STEPS: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <CalendarCheck className="size-6" strokeWidth={1.25} />,
    title: "Consultation",
    description:
      "Meet with our design team — in person, by video, or in writing — to share your vision, budget, and inspiration.",
  },
  {
    icon: <PenTool className="size-6" strokeWidth={1.25} />,
    title: "Design",
    description:
      "We translate your ideas into detailed renderings and a 3D model, refined together until every detail feels right.",
  },
  {
    icon: <Hammer className="size-6" strokeWidth={1.25} />,
    title: "Crafting",
    description:
      "Master artisans hand-set your stones and finish the piece in our atelier, inspected at every stage of fabrication.",
  },
  {
    icon: <Truck className="size-6" strokeWidth={1.25} />,
    title: "Delivery",
    description:
      "Your finished piece arrives fully insured, accompanied by its certification and a lifetime craftsmanship guarantee.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <header className="text-center">
        <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">
          The Journey
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
          From Vision to Heirloom
        </h2>
      </header>

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STEPS.map((step, index) => (
          <div
            key={step.title}
            className="border-t border-navy/10 pt-6 lg:border-t-0 lg:pt-0"
          >
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl text-champagne">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-gold">{step.icon}</span>
            </div>
            <h3 className="mt-3 font-serif text-xl text-navy">
              {step.title}
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-navy/60">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
