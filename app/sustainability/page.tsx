import type { Metadata } from "next";
import { Certification } from "@/components/home/Certification";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PillarsGrid } from "@/components/sustainability/PillarsGrid";
import { SustainabilityHero } from "@/components/sustainability/SustainabilityHero";

export const metadata: Metadata = {
  title: "Sustainability",
};

export default function SustainabilityPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SustainabilityHero />
        <PillarsGrid />
        <Certification />
      </main>
      <Footer />
    </>
  );
}
