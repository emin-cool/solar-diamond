import { useId } from "react";
import { FormField } from "@/components/checkout/FormField";
import { COUNTRIES } from "@/lib/countries";

export function ShippingSection() {
  const countryId = useId();

  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl text-navy">Shipping Destination</h2>
      <div className="mt-6 flex flex-col gap-6 border-b border-navy/10 pb-8">
        <div>
          <label
            htmlFor={countryId}
            className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
          >
            Country / Region *
          </label>
          <select
            id={countryId}
            name="country"
            required
            defaultValue="United States"
            className="mt-2 h-10 w-full border-0 border-b border-navy/20 bg-transparent px-0 font-sans text-sm text-navy focus:border-gold focus:outline-none"
          >
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField label="First Name" name="firstName" required />
          <FormField label="Last Name" name="lastName" required />
        </div>

        <FormField
          label="Street Address"
          name="address"
          required
          placeholder="123 Luxury Avenue"
        />
        <FormField label="Apt, Suite (optional)" name="address2" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <FormField label="City" name="city" required />
          <FormField label="State / Province" name="state" />
          <FormField label="Postal Code" name="postalCode" required />
        </div>
      </div>
    </section>
  );
}
