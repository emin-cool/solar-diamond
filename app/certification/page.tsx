import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InfoHero } from "@/components/info/InfoHero";
import { InfoSection } from "@/components/info/InfoSection";
import { CertificateBadge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Certification",
};

export default function CertificationPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero
          kicker="Transparency"
          title="Certification"
          subcopy="Every Solar Diamond above 0.3 carats is independently graded and laser-inscribed."
        />
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
          <div className="flex items-center justify-center gap-4">
            <CertificateBadge certificate="GIA" variant="solid" verbose />
            <CertificateBadge certificate="HRD" variant="outline" verbose />
          </div>

          <div className="mt-10">
            <InfoSection title="Who Grades Our Diamonds">
              <p>
                The Gemological Institute of America (GIA) and the
                Hoge Raad voor Diamant (HRD Antwerp) are the two most
                trusted independent grading laboratories in the world. Every
                Solar Diamond over 0.3 carats is submitted to one of these
                institutes before it ever reaches our atelier.
              </p>
            </InfoSection>
            <InfoSection title="What the Report Covers">
              <p>
                Your certificate documents the 4Cs — carat weight, cut,
                color, and clarity — along with a unique report number and,
                for larger stones, a laser inscription on the girdle that
                matches the physical stone to its digital record.
              </p>
            </InfoSection>
            <InfoSection title="Finding Your Certificate">
              <p>
                A digital copy of your certificate is emailed with your
                order confirmation and is also linked from your product
                page under &ldquo;View Digital Certificate.&rdquo; Physical
                certificates ship alongside your piece.
              </p>
            </InfoSection>
            <InfoSection title="Lab-Grown, Independently Verified">
              <p>
                Our diamonds are grown in solar-powered laboratories, then
                graded by the same institutes that certify natural stones —
                using the identical 4Cs standard, with no distinction in
                rigor.
              </p>
            </InfoSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
