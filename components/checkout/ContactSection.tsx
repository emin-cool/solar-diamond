import { FormField } from "@/components/checkout/FormField";

export function ContactSection() {
  return (
    <section>
      <h2 className="font-serif text-2xl text-navy">Contact Information</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 border-b border-navy/10 pb-8 sm:grid-cols-2">
        <FormField
          label="Email Address"
          type="email"
          name="email"
          required
          placeholder="jane@example.com"
        />
        <FormField
          label="Phone Number"
          type="tel"
          name="phone"
          required
          placeholder="+1 (555) 000-0000"
        />
      </div>
    </section>
  );
}
