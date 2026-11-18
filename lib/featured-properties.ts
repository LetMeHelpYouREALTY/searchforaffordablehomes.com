/**
 * Hyperlocal affordable-home service pages for Dr. Jan Duffy.
 * Live MLS inventory remains on RealScout / OfficeListingsUnderHero.
 */

export type AffordableAreaPage = {
  id: string;
  slug: string;
  name: string;
  neighborhood: string;
  city: string;
  priceBand: string;
  image: string;
  bedrooms: string;
  bathrooms: string;
  squareFeet: string;
  heroEyebrow: string;
  headline: string;
  summary: string;
  janServices: string[];
  buyerOutcomes: string[];
  localFocus: string[];
  searchHref: string;
};

export const featuredProperties: AffordableAreaPage[] = [
  {
    id: "1",
    slug: "north-las-vegas-starter",
    name: "Affordable Homes in North Las Vegas",
    neighborhood: "North Las Vegas",
    city: "North Las Vegas, NV",
    priceBand: "Under $400K focus",
    image: "/images/properties/affordable-home-north-vegas.jpg",
    bedrooms: "3–4 bed",
    bathrooms: "2–3 bath",
    squareFeet: "1,400–2,000 sq ft",
    heroEyebrow: "Dr. Jan Duffy · Buyer representation",
    headline: "Payment-fit affordable homes in North Las Vegas",
    summary:
      "Dr. Jan Duffy helps buyers lock a monthly payment first, then filters North Las Vegas MLS inventory to homes that clear inspection, appraisal, and commute realities. Berkshire Hathaway HomeServices Nevada Properties representation with direct access to showings and offer strategy.",
    janServices: [
      "Payment-first MLS shortlist for North Las Vegas and Centennial Hills",
      "Same-day tour coordination when inventory hits the market",
      "Offer, appraisal, and inspection guidance through closing",
      "Trusted lender introductions matched to your down payment",
      "BHHS Nevada Properties negotiation and contract management",
    ],
    buyerOutcomes: [
      "Know your max payment before you fall for a listing photo",
      "Compete with clean terms instead of overpaying on emotion",
      "Avoid HOA and repair surprises that blow the budget",
    ],
    localFocus: [
      "North Las Vegas starter ranches and newer tracts",
      "Centennial Hills payment comparisons",
      "Aliante and I-215 commute tradeoffs",
    ],
    searchHref: "/affordable-homes/under-400k",
  },
  {
    id: "2",
    slug: "henderson-value",
    name: "Affordable Homes in Henderson",
    neighborhood: "Henderson",
    city: "Henderson, NV",
    priceBand: "$400K–$550K focus",
    image: "/images/properties/affordable-home-henderson.jpg",
    bedrooms: "3–4 bed",
    bathrooms: "2–3 bath",
    squareFeet: "1,800–2,400 sq ft",
    heroEyebrow: "Dr. Jan Duffy · Buyer representation",
    headline: "Henderson affordable homes with luxury-level representation",
    summary:
      "Henderson buyers often need more finished space without jumping into luxury pricing. Dr. Jan Duffy maps HOA dues, taxes, and repair scope into one monthly number, then runs a tight MLS search across Green Valley and surrounding Henderson corridors.",
    janServices: [
      "Henderson and Green Valley MLS search tuned to payment fit",
      "HOA document review before you waste a weekend touring",
      "Competitive offer packages that still protect contingencies",
      "Walk-throughs focused on cost-to-own, not just curb appeal",
      "Full-service representation from first call to keys",
    ],
    buyerOutcomes: [
      "Compare Henderson vs North Las Vegas on true monthly cost",
      "Move from condo/townhome into SFR without payment shock",
      "Win listings with strategy, not blind escalation",
    ],
    localFocus: [
      "Henderson value two-story homes",
      "Green Valley resale liquidity",
      "Stephanie Street and I-215 access patterns",
    ],
    searchHref: "/neighborhoods/henderson",
  },
  {
    id: "3",
    slug: "summerlin-entry",
    name: "Affordable Homes in Summerlin",
    neighborhood: "Summerlin",
    city: "Las Vegas, NV",
    priceBand: "$500K–$650K focus",
    image: "/images/properties/affordable-home-summerlin.jpg",
    bedrooms: "3–4 bed",
    bathrooms: "2–3 bath",
    squareFeet: "1,700–2,200 sq ft",
    heroEyebrow: "Dr. Jan Duffy · Buyer representation",
    headline: "Summerlin entry homes without the luxury premium",
    summary:
      "Summerlin still has payment-reachable homes when buyers stay disciplined on vintage, lot, and HOA. Dr. Jan Duffy finds the entry band, pressures the numbers, and represents you with Berkshire Hathaway HomeServices Nevada Properties through a competitive offer process.",
    janServices: [
      "Summerlin entry-band MLS search with HOA fee transparency",
      "Ranch and smaller-footprint options for payment control",
      "Showing routes that cover multiple villages in one block",
      "Offer strategy for contested Summerlin listings",
      "Relocation-friendly timelines from out of state",
    ],
    buyerOutcomes: [
      "Reach Summerlin amenities without overextending payment",
      "See total monthly cost including master-plan HOA",
      "Move faster with a ready lender and clear must-haves",
    ],
    localFocus: [
      "Summerlin entry ranches and compact two-stories",
      "Downtown Summerlin and village retail access",
      "Red Rock commute and weekend lifestyle fit",
    ],
    searchHref: "/neighborhoods/summerlin",
  },
];

export function getFeaturedProperty(
  idOrSlug: string,
): AffordableAreaPage | undefined {
  return featuredProperties.find(
    (p) => p.id === idOrSlug || p.slug === idOrSlug,
  );
}

export function getFeaturedPropertyParams() {
  return featuredProperties.map((p) => ({ id: p.slug }));
}
