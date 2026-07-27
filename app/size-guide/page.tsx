import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InfoHero } from "@/components/info/InfoHero";

export const metadata: Metadata = {
  title: "Ring Size Guide",
};

const SIZES: { us: string; mm: string; uk: string }[] = [
  { us: "4", mm: "14.9", uk: "H" },
  { us: "4.5", mm: "15.3", uk: "I" },
  { us: "5", mm: "15.7", uk: "J½" },
  { us: "5.5", mm: "16.1", uk: "K½" },
  { us: "6", mm: "16.5", uk: "L½" },
  { us: "6.5", mm: "16.9", uk: "M½" },
  { us: "7", mm: "17.3", uk: "N½" },
  { us: "7.5", mm: "17.7", uk: "O½" },
  { us: "8", mm: "18.1", uk: "P½" },
];

export default function SizeGuidePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero
          kicker="Assistance"
          title="Ring Size Guide"
          subcopy="Not sure of your size? Measure an existing ring's inner diameter and match it below, or visit a local jeweller for a professional measurement."
        />
        <div className="mx-auto max-w-xl px-5 py-16 sm:px-8">
          <table className="w-full border-collapse font-sans text-sm">
            <thead>
              <tr className="border-b border-navy/15 text-left">
                <th className="py-3 font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase">
                  US Size
                </th>
                <th className="py-3 font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase">
                  Diameter (mm)
                </th>
                <th className="py-3 font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase">
                  UK Size
                </th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((row) => (
                <tr key={row.us} className="border-b border-navy/8">
                  <td className="py-3 text-navy">{row.us}</td>
                  <td className="py-3 text-navy">{row.mm}</td>
                  <td className="py-3 text-navy">{row.uk}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-8 font-sans text-sm leading-relaxed text-navy/60">
            Between sizes? We recommend sizing up — rings can always be
            resized down more easily than up. Every Solar Diamond piece
            includes one complimentary resizing within 60 days of delivery.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
