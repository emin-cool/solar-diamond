import type { Metadata } from "next";
import { BrandStory } from "@/components/heritage/BrandStory";
import { HeritageHero } from "@/components/heritage/HeritageHero";
import { ValuesGrid } from "@/components/heritage/ValuesGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Heritage",
};

export default function HeritagePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeritageHero />
        <BrandStory />
        <ValuesGrid />
      </main>
      <Footer />
    </>
  );
}
