import { Certification } from "@/components/home/Certification";
import { CollectionsGrid } from "@/components/home/CollectionsGrid";
import { Hero } from "@/components/home/Hero";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { Newsletter } from "@/components/home/Newsletter";
import { Philosophy } from "@/components/home/Philosophy";
import { TrustBar } from "@/components/home/TrustBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <TrustBar />
        <CollectionsGrid />
        <Philosophy />
        <Certification />
        <InstagramStrip />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
