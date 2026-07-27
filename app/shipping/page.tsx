import { ShieldCheck, Truck } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InfoHero } from "@/components/info/InfoHero";
import { InfoSection } from "@/components/info/InfoSection";

export const metadata: Metadata = {
  title: "Shipping & Returns",
};

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero
          kicker="Assistance"
          title="Shipping & Returns"
          subcopy="Every piece is insured from our atelier to your door."
        />
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
          <InfoSection title="Delivery Methods">
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
              <p>
                <span className="font-medium text-navy">
                  Standard Insured Shipping
                </span>{" "}
                — complimentary, 3–5 business days, fully insured transit.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
              <p>
                <span className="font-medium text-navy">
                  White-Glove Courier
                </span>{" "}
                — $250, 1–2 business days, hand-delivered by private armored
                courier with signature required.
              </p>
            </div>
          </InfoSection>
          <InfoSection title="International Orders">
            <p>
              We ship worldwide. Import duties and taxes, where applicable,
              are calculated at checkout so there are no surprises at your
              door.
            </p>
          </InfoSection>
          <InfoSection title="Returns">
            <p>
              Standard pieces may be returned within 30 days of delivery,
              unworn and in original packaging, for a full refund.
              Personalized engraving and bespoke commissions are made to
              order and are final sale.
            </p>
          </InfoSection>
          <InfoSection title="Need Help?">
            <p>
              Our concierge team is available to assist with any shipping
              or return enquiry —{" "}
              <a
                href="/contact"
                className="text-gold underline underline-offset-2 hover:text-navy"
              >
                contact us
              </a>{" "}
              any time.
            </p>
          </InfoSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
