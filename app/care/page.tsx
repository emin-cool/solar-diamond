import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InfoHero } from "@/components/info/InfoHero";
import { InfoSection } from "@/components/info/InfoSection";

export const metadata: Metadata = {
  title: "Care Guide",
};

export default function CarePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero
          kicker="Assistance"
          title="Care Guide"
          subcopy="Simple habits to keep your piece as brilliant as the day it arrived."
        />
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
          <InfoSection title="Everyday Wear">
            <p>
              Remove your piece before swimming, exercising, or applying
              lotions and perfumes — chemicals and impacts are the most
              common causes of damage to both metal and stone.
            </p>
          </InfoSection>
          <InfoSection title="Cleaning at Home">
            <p>
              Soak briefly in warm water with a drop of mild dish soap,
              gently brush with a soft toothbrush, then rinse and dry with a
              lint-free cloth. Avoid ultrasonic cleaners on pavé settings.
            </p>
          </InfoSection>
          <InfoSection title="Storage">
            <p>
              Store each piece separately in a soft pouch or lined box to
              prevent stones from scratching one another or the metal.
            </p>
          </InfoSection>
          <InfoSection title="Professional Servicing">
            <p>
              We recommend an annual inspection to check prong settings and
              re-polish the metal. Solar Diamond offers complimentary
              cleaning and inspection for the lifetime of your piece —{" "}
              <a
                href="/bespoke"
                className="text-gold underline underline-offset-2 hover:text-navy"
              >
                book a consultation
              </a>{" "}
              to arrange a visit.
            </p>
          </InfoSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
