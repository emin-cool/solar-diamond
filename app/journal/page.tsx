import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Newsletter } from "@/components/home/Newsletter";
import { InfoHero } from "@/components/info/InfoHero";

export const metadata: Metadata = {
  title: "Journal",
};

export default function JournalPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero
          kicker="The Journal"
          title="Stories in Light"
          subcopy="Essays on craftsmanship, sustainability, and the making of a Solar Diamond — coming soon."
        />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
