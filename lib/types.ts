/** Gemological certification bodies Solar Diamond works with. */
export type Certificate = "GIA" | "HRD";

export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Amount in major units (e.g. 4250 = $4,250.00). */
  price: number;
  currency?: string;
  image: string;
  imageAlt?: string;
  /** Short spec chips shown under the name, e.g. ["1.5 CT", "D COLOR", "VVS1"]. */
  specs?: string[];
  certificate?: Certificate;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}
