"use client";

import { CheckCircle2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 bg-champagne/20 p-10 text-center">
        <CheckCircle2 className="size-8 text-gold" strokeWidth={1.5} />
        <h3 className="font-serif text-xl text-navy">Message Sent</h3>
        <p className="max-w-sm font-sans text-sm leading-relaxed text-navy/60">
          Thank you for reaching out — our concierge team will respond
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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

      <div>
        <label
          htmlFor={subjectId}
          className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
        >
          Subject *
        </label>
        <input
          id={subjectId}
          type="text"
          required
          className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor={messageId}
          className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
        >
          Message *
        </label>
        <textarea
          id={messageId}
          required
          rows={5}
          className="mt-2 w-full resize-none border border-navy/20 bg-ivory px-3 py-2 font-sans text-sm text-navy focus:border-gold focus:outline-none"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Send Message
      </Button>
    </form>
  );
}
