import { BadgeCheck, Globe, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

const ITEMS: { icon: ReactNode; label: string; note: string }[] = [
  {
    icon: <BadgeCheck className="size-5" strokeWidth={1.5} />,
    label: "GIA & HRD Certified",
    note: "Every stone graded",
  },
  {
    icon: <Globe className="size-5" strokeWidth={1.5} />,
    label: "Worldwide Delivery",
    note: "Shipped to your door",
  },
  {
    icon: <ShieldCheck className="size-5" strokeWidth={1.5} />,
    label: "Insured Shipping",
    note: "Fully covered in transit",
  },
];

export function TrustBar() {
  return (
    <section className="border-b border-navy/10 bg-champagne/25">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-navy/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-3 py-6 text-navy sm:flex-col sm:gap-2 sm:py-10 sm:text-center"
          >
            <span className="text-gold">{item.icon}</span>
            <span>
              <span className="block font-sans text-[11px] tracking-[0.14em] uppercase">
                {item.label}
              </span>
              <span className="mt-0.5 block font-sans text-[10px] text-navy/50">
                {item.note}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
