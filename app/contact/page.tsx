import { AtSign, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InfoHero } from "@/components/info/InfoHero";

export const metadata: Metadata = {
  title: "Contact Us",
};

const DIRECT_CONTACT = [
  {
    icon: AtSign,
    label: "Email",
    value: "concierge@solardiamond.com",
    href: "mailto:concierge@solardiamond.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Concierge",
    value: "Message us",
    href: "https://wa.me/",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 9am–7pm GMT",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InfoHero
          kicker="Assistance"
          title="Contact Us"
          subcopy="Questions about an order, a bespoke piece, or a large transfer? We're here to help."
        />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_320px]">
          <ContactForm />

          <div className="flex flex-col gap-6">
            {DIRECT_CONTACT.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon
                  className="mt-0.5 size-5 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-sans text-sm text-navy hover:text-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-sans text-sm text-navy">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
