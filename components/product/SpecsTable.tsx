import type { Product } from "@/lib/types";

export interface SpecsTableProps {
  product: Product;
}

export function SpecsTable({ product }: SpecsTableProps) {
  const rows: { label: string; value: string }[] = [
    { label: "Shape", value: product.shape ?? "—" },
    { label: "Carat", value: product.carat ? `${product.carat.toFixed(2)} CT` : "—" },
    { label: "Cut", value: product.cut ?? "—" },
    { label: "Color", value: product.color ?? "—" },
    { label: "Clarity", value: product.clarity ?? "—" },
    { label: "Metal", value: product.metal ?? "—" },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-y border-navy/10 py-5">
      {rows.map((row) => (
        <div key={row.label} className="flex items-baseline justify-between gap-3">
          <dt className="font-sans text-[10px] tracking-[0.14em] text-navy/45 uppercase">
            {row.label}
          </dt>
          <dd className="font-sans text-sm text-navy">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
