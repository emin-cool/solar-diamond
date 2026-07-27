import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InfoHero } from "@/components/info/InfoHero";
import { InfoSection } from "@/components/info/InfoSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero kicker="Legal" title="Privacy Policy" />
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
          <InfoSection title="What We Collect">
            <p>
              We collect the information you provide directly to us —
              contact details, shipping addresses, and order history — along
              with limited technical data (device and browser type) needed
              to keep the site secure and functioning correctly.
            </p>
          </InfoSection>
          <InfoSection title="How We Use It">
            <p>
              Your information is used to process orders, coordinate
              shipping and certification, respond to enquiries, and — with
              your consent — send updates about new collections. We never
              sell your personal data to third parties.
            </p>
          </InfoSection>
          <InfoSection title="Payment & Security">
            <p>
              Card payments are processed through PCI-compliant providers;
              we do not store full card numbers on our servers. All
              transactions are protected with 256-bit encryption.
            </p>
          </InfoSection>
          <InfoSection title="Your Rights">
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting{" "}
              <a
                href="mailto:privacy@solardiamond.com"
                className="text-gold underline underline-offset-2 hover:text-navy"
              >
                privacy@solardiamond.com
              </a>
              .
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
