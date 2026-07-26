/** Static facet definitions for the collection listing page (build-order step 4).
 * UI-only for now — selections don't yet filter MOCK_PRODUCTS. */
export interface FilterOption {
  label: string;
  count: number;
}

export interface FilterFacet {
  id: string;
  label: string;
  options: FilterOption[];
}

export const FILTER_FACETS: FilterFacet[] = [
  {
    id: "carat-weight",
    label: "Carat Weight",
    options: [
      { label: "Under 1.0 CT", count: 24 },
      { label: "1.0 – 1.5 CT", count: 41 },
      { label: "1.5 – 2.0 CT", count: 33 },
      { label: "2.0 CT & Above", count: 30 },
    ],
  },
  {
    id: "diamond-cut",
    label: "Diamond Cut",
    options: [
      { label: "Round", count: 52 },
      { label: "Oval", count: 28 },
      { label: "Emerald", count: 19 },
      { label: "Pear", count: 15 },
      { label: "Cushion", count: 9 },
      { label: "Radiant", count: 5 },
    ],
  },
  {
    id: "color-grade",
    label: "Color Grade",
    options: [
      { label: "D", count: 12 },
      { label: "E", count: 27 },
      { label: "F", count: 34 },
      { label: "G", count: 40 },
      { label: "H", count: 15 },
    ],
  },
  {
    id: "clarity",
    label: "Clarity",
    options: [
      { label: "IF", count: 8 },
      { label: "VVS1", count: 22 },
      { label: "VVS2", count: 31 },
      { label: "VS1", count: 44 },
      { label: "VS2", count: 23 },
    ],
  },
  {
    id: "metal-type",
    label: "Metal Type",
    options: [
      { label: "Platinum", count: 30 },
      { label: "18K White Gold", count: 38 },
      { label: "18K Yellow Gold", count: 36 },
      { label: "18K Rose Gold", count: 24 },
    ],
  },
  {
    id: "certificate",
    label: "Certificate",
    options: [
      { label: "GIA", count: 82 },
      { label: "HRD", count: 46 },
    ],
  },
  {
    id: "price-range",
    label: "Price Range",
    options: [
      { label: "Under $5,000", count: 21 },
      { label: "$5,000 – $10,000", count: 47 },
      { label: "$10,000 – $20,000", count: 39 },
      { label: "$20,000 & Above", count: 21 },
    ],
  },
];

export const SORT_OPTIONS = [
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
  "Carat: High to Low",
] as const;
