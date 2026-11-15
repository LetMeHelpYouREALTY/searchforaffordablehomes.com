/**
 * Hyperlocal AEO/GEO content for SearchForAffordableHomes.com
 * Answer-first copy for AI citation + classic SEO.
 * Market figures date-stamped Nov 2026 from Parallel research (Zillow / local MLS reports).
 * Fair Housing: describe sq ft, amenities, commute — never protected-class proxies.
 */

export const SITE_BRAND = {
  domain: "searchforaffordablehomes.com",
  url: "https://www.searchforaffordablehomes.com",
  name: "Search for Affordable Homes Las Vegas",
  agent: "Dr. Jan Duffy",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  /** Client-facing CTA line */
  phoneDisplay: "(702) 222-1964",
  phoneTel: "+17022221964",
  email: "homes@heyberkshire.com",
  address: {
    street: "9406 W Lake Mead Blvd, Suite 100",
    city: "Las Vegas",
    state: "NV",
    zip: "89134",
    full: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
  },
  geo: { lat: 36.1941, lng: -115.2678 },
  hours: [
    { days: "Monday-Friday", opens: "09:00", closes: "18:00" },
    { days: "Saturday", opens: "10:00", closes: "16:00" },
  ],
  gbpShareUrl: "https://share.google/EKseIMipYVhXaSKRc",
} as const;

export const MARKET_SNAPSHOT = {
  asOf: "November 2026",
  /** Valley-wide median list context from early-2026 public reports */
  valleyMedianList: "$450,000",
  valleyMedianNote:
    "Las Vegas Valley median list prices clustered near $450K in early 2026 public reports; under-$500K remains the deepest inventory band.",
  daysOnMarket: "about 28–31 days",
  inventoryBand: "5,500+ active homes under $500,000 valley-wide in mid-2026 listing reports",
};

export const AFFORDABLE_NEIGHBORHOODS = [
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    priceBand: "$280,000–$450,000",
    medianHint: "Often 10–24% below Summerlin medians in 2026 close data",
    description:
      "Newer single-family stock, Aliante and Tule Springs master plans, and builder incentives that frequently include rate buydowns.",
    highlights: ["New construction options", "Aliante & Tule Springs", "215 Beltway access"],
  },
  {
    name: "Mountain's Edge",
    slug: "mountains-edge",
    priceBand: "$350,000–$500,000",
    medianHint: "Southwest corridor value below Summerlin/Henderson premiums",
    description:
      "Master-planned southwest Las Vegas with HOA amenities and 215 Beltway commute access.",
    highlights: ["HOA amenities", "Newer inventory", "Southwest 215 access"],
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    priceBand: "$380,000–$480,000",
    medianHint: "Typically 10–15% below comparable Summerlin pricing",
    description:
      "Northwest Las Vegas with mountain proximity, parks, shopping corridors, and established floor plans.",
    highlights: ["Northwest location", "Parks & trails nearby", "Resale + newer stock"],
  },
  {
    name: "East Las Vegas / Sunrise Manor / Whitney",
    slug: "neighborhoods",
    priceBand: "$319,000–$360,000 list medians (early 2026)",
    medianHint: "Among the valley’s lower list-price clusters",
    description:
      "Established housing stock with lower entry prices than master-planned west-valley communities.",
    highlights: ["Lower entry prices", "Established neighborhoods", "Strip commute corridors"],
  },
  {
    name: "Cadence (Henderson)",
    slug: "henderson",
    priceBand: "$350,000–$500,000",
    medianHint: "Active Henderson new-construction value band",
    description:
      "Henderson master-planned new construction with multiple builders and mid-$300Ks entry points reported in 2026 buyer guides.",
    highlights: ["New construction", "Henderson location", "Multiple builders"],
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    priceBand: "$400,000–$550,000",
    medianHint: "Northwest master plan with new and resale mix",
    description:
      "Northwest master-planned community with mountain views, modern amenities, and mixed new/resale inventory.",
    highlights: ["Master-planned amenities", "Mountain views", "New + resale"],
  },
] as const;

export const BUYER_SERVICE_STEPS = [
  {
    heading: "How do I get pre-approved to buy an affordable Las Vegas home?",
    answer:
      "Start with a local lender pre-approval so your budget is clear before tours. FHA can start at 3.5% down, VA may offer 0% down for eligible buyers, and Nevada down-payment assistance programs can reduce cash to close.",
    h3: "Loan programs that keep payments realistic",
  },
  {
    heading: "Where should I search for affordable homes in Las Vegas?",
    answer:
      "Focus first on North Las Vegas, Mountain’s Edge, Centennial Hills, East Valley corridors, and Henderson’s Cadence for the strongest under-$500K selection. Dr. Jan Duffy filters MLS + RealScout alerts to your price, beds, and commute.",
    h3: "Hyperlocal search, not generic listings",
  },
  {
    heading: "What does luxury-level buyer representation look like on an affordable purchase?",
    answer:
      "You get the same white-glove process used on higher-priced deals: private showings, comps before every offer, inspection advocacy, and closing coordination — at no buyer-side fee in typical seller-paid commission structures.",
    h3: "White-glove process, entry-level price point",
  },
] as const;

export const AFFORDABLE_HOME_FAQS: Array<{ question: string; answer: string }> = [
  {
    question: "What is an affordable home price in Las Vegas in 2026?",
    answer:
      "Most buyers searching for affordable Las Vegas homes target under $500,000 — the valley’s deepest inventory band. Early-2026 public reports showed valley median list prices near $450,000, with North Las Vegas and East Valley corridors often listing below that median.",
  },
  {
    question: "Which Las Vegas neighborhoods have more affordable homes?",
    answer:
      "North Las Vegas (including Aliante and Tule Springs), Mountain’s Edge, Centennial Hills, East Las Vegas, Sunrise Manor, Whitney, and Henderson’s Cadence consistently show stronger under-$500K selection than Summerlin or The Ridges.",
  },
  {
    question: "Do I need a large down payment to buy in Las Vegas?",
    answer:
      "Not always. FHA loans can require 3.5% down, many conventional programs start near 3%, and eligible VA buyers may finance with 0% down. Dr. Jan Duffy connects buyers with lenders who also review Nevada assistance options.",
  },
  {
    question: "Is buyer representation free when I buy an affordable home?",
    answer:
      "In most Las Vegas transactions, the seller pays the listing-side commission structure that covers buyer representation. Confirm current offer terms with Dr. Jan before you write — you’ll know the cost picture before you commit.",
  },
  {
    question: "How long does it take to buy a home in Las Vegas?",
    answer:
      "From accepted offer to keys usually takes 30–45 days with financing. Cash closings can finish in about 7–14 days. Well-priced affordable homes often move in roughly a month of market time.",
  },
  {
    question: "Who is Dr. Jan Duffy?",
    answer:
      "Dr. Jan Duffy is a REALTOR® (license S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Call (702) 222-1964 for a buyer consult.",
  },
];

export const HOW_TO_BUY_STEPS = [
  {
    name: "Get pre-approved",
    text: "Confirm budget with a Las Vegas lender and collect your pre-approval letter.",
  },
  {
    name: "Define search criteria",
    text: "Set max price, beds/baths, commute corridors, and must-have amenities with Dr. Jan.",
  },
  {
    name: "Tour matched homes",
    text: "Tour MLS and off-market matches in North Las Vegas, southwest, northwest, and Henderson value bands.",
  },
  {
    name: "Write a data-backed offer",
    text: "Use fresh comps, inspection strategy, and terms that protect your deposit.",
  },
  {
    name: "Inspect and close",
    text: "Complete inspections, negotiate credits, clear title, and collect keys in 30–45 days typical.",
  },
] as const;
