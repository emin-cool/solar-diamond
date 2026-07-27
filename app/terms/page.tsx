import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InfoHero } from "@/components/info/InfoHero";
import { InfoSection } from "@/components/info/InfoSection";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero kicker="Legal" title="Terms of Service" />
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
          <InfoSection title="Orders & Pricing">
            <p>
              All prices are listed in USD unless otherwise noted and
              include applicable certification. Orders are confirmed once
              payment — by card or bank transfer — has cleared.
            </p>
          </InfoSection>
          <InfoSection title="Shipping & Risk of Loss">
            <p>
              Every shipment is fully insured until it is signed for at the
              delivery address. Risk of loss transfers to you only upon
              confirmed delivery.
            </p>
          </InfoSection>
          <InfoSection title="Returns & Cancellations">
            <p>
              Standard pieces may be returned within 30 days of delivery,
              unworn and in original packaging. Bespoke and engraved pieces
              are made to order and are final sale, except in the case of a
              manufacturing defect.
            </p>
          </InfoSection>
          <InfoSection title="Intellectual Property">
            <p>
              All designs, imagery, and content on this site are the
              property of Solar Diamond and may not be reproduced without
              written permission.
            </p>
          </InfoSection>
          <p className="mt-8 font-sans text-xs text-navy/40">
            Last updated July 2026. This is placeholder policy text for the
            Solar Diamond MVP and should be reviewed by legal counsel before
            launch.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
