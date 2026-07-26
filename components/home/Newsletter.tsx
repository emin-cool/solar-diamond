import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="bg-champagne/35 py-20 lg:py-24">
      <div className="mx-auto max-w-lg px-5 text-center sm:px-8">
        <Mail className="mx-auto size-6 text-gold" strokeWidth={1.5} />
        <h2 className="mt-5 font-serif text-2xl text-navy sm:text-3xl">
          Join The Solar Circle
        </h2>
        <p className="mt-4 font-sans text-sm leading-relaxed text-navy/65">
          Be the first to preview new collections, receive invitations to
          exclusive trunk shows, and explore the world of sustainable luxury.
        </p>

        <form className="mt-8 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Email Address"
            className="h-12 flex-1 border border-navy/20 bg-ivory px-4 font-sans text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none"
          />
          <Button type="submit" variant="primary" size="md">
            Subscribe
          </Button>
        </form>

        <p className="mt-4 font-sans text-[10px] tracking-[0.1em] text-navy/45 uppercase">
          Privacy respected — unsubscribe any time
        </p>
      </div>
    </section>
  );
}
