import { Calendar, Globe, Video } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InfoHero } from "@/components/info/InfoHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Store Locator",
};

const OPTIONS = [
  {
    icon: Globe,
    title: "Shop Online, Worldwide",
    description:
      "Every collection is available at solardiamond.com, with fully insured delivery to over 40 countries.",
  },
  {
    icon: Video,
    title: "Virtual Consultation",
    description:
      "Meet a specialist by video to view pieces up close, discuss sizing, or design a bespoke commission.",
  },
  {
    icon: Calendar,
    title: "Private Appointment",
    description:
      "Book a one-on-one viewing at our atelier, by appointment only, in select cities.",
  },
];

export default function StoresPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero
          kicker="Visit Us"
          title="Store Locator"
          subcopy="Solar Diamond is an online-first atelier — no walk-in boutiques, just more personal ways to shop."
        />
        <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
          <div className="flex flex-col gap-8">
            {OPTIONS.map((option) => (
              <div key={option.title} className="flex items-start gap-4 text-left">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-champagne/30 text-gold">
                  <option.icon className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h2 className="font-serif text-lg text-navy">
                    {option.title}
                  </h2>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-navy/60">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button href="/bespoke" variant="primary" size="lg" className="mt-10">
            Book a Private Appointment
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
