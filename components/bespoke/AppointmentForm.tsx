"use client";

import { CheckCircle2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const dateId = useId();
  const messageId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-champagne/20 py-20 lg:py-28">
      <div className="mx-auto max-w-xl px-5 sm:px-8">
        <header className="text-center">
          <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">
            Begin Your Piece
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
            Request a Consultation
          </h2>
        </header>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-3 bg-ivory p-10 text-center">
            <CheckCircle2 className="size-8 text-gold" strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-navy">
              Your Request Has Been Received
            </h3>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-navy/60">
              A member of our design team will reach out within 1–2 business
              days to schedule your consultation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={nameId}
                  className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
                >
                  Full Name *
                </label>
                <input
                  id={nameId}
                  type="text"
                  required
                  className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor={emailId}
                  className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
                >
                  Email Address *
                </label>
                <input
                  id={emailId}
                  type="email"
                  required
                  className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={phoneId}
                  className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
                >
                  Phone Number
                </label>
                <input
                  id={phoneId}
                  type="tel"
                  className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor={dateId}
                  className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
                >
                  Preferred Date
                </label>
                <input
                  id={dateId}
                  type="date"
                  className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor={messageId}
                className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
              >
                Tell Us About Your Vision
              </label>
              <textarea
                id={messageId}
                rows={4}
                placeholder="Occasion, inspiration, stone preferences…"
                className="mt-2 w-full resize-none border border-navy/20 bg-ivory px-3 py-2 font-sans text-sm text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Request Consultation
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
