import type { Metadata } from "next";
import { AppointmentForm } from "@/components/bespoke/AppointmentForm";
import { BespokeHero } from "@/components/bespoke/BespokeHero";
import { ProcessTimeline } from "@/components/bespoke/ProcessTimeline";
import { SampleCreations } from "@/components/bespoke/SampleCreations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Bespoke",
};

export default function BespokePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BespokeHero />
        <ProcessTimeline />
        <AppointmentForm />
        <SampleCreations />
      </main>
      <Footer />
    </>
  );
}
