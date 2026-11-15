/**
 * Hyperlocal AEO/GEO content for SearchForAffordableHomes.com
 * Answer-first copy for AI citation + classic SEO.
 * Market figures date-stamped Nov 2026 from Parallel CLI research
 * (GLVAR / local MLS public reports via Parallel web search).
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
  /** Trailing GLVAR closed median context from Parallel research (Aug–Sep 2026 reports) */
  valleyMedianList: "$470,000–$490,000",
  valleyMedianNote:
    "Las Vegas metro single-family closed medians ran roughly $470K–$490K in mid-to-late 2026 public GLVAR summaries (near $486K trailing-90-day). Under-$500K remains the deepest buyer inventory band; condos/townhomes often list near the high-$200Ks.",
  daysOnMarket: "about 28–45 days to close after acceptance",
  inventoryBand:
    "Hundreds of single-family actives under $400K in North Las Vegas and East Valley ZIPs (MLS snapshots Sep 2026); valley-wide under-$500K is still the primary entry band",
};

export const AFFORDABLE_NEIGHBORHOODS = [
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    priceBand: "$280,000–$450,000",
    medianHint: "Most affordable major sub-market; ~$425K 90-day sold median (Jul 2026 NLV reports)",
    description:
      "Entry floor near Eldorado and older 89031/89032 stock, starter sweet spot around Craig Ranch and Aliante, and new-build entry in Tule Springs — often with builder incentives and rate buydowns.",
    highlights: ["446+ actives under $400K reported mid-2026", "Aliante & Tule Springs", "215 Beltway access"],
  },
  {
    name: "East Las Vegas / Sunrise Manor / Whitney",
    slug: "neighborhoods",
    priceBand: "$280,000–$380,000",
    medianHint: "ZIPs 89121 / 89122 / 89142 hold many of the valley’s under-$400K listings",
    description:
      "Established east and central corridors with the densest under-$400K single-family selection and lower price-per-square-foot than west-valley master plans.",
    highlights: ["Lowest price-per-sq-ft clusters", "Established stock", "Strip / airport commute corridors"],
  },
  {
    name: "Mountain's Edge",
    slug: "mountains-edge",
    priceBand: "$350,000–$500,000",
    medianHint: "Southwest corridor value; metro southwest entry near ~$390K in 2026 guides",
    description:
      "Master-planned southwest Las Vegas with HOA amenities and 215 Beltway commute access below Summerlin premiums.",
    highlights: ["HOA amenities", "Newer inventory", "Southwest 215 access"],
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    priceBand: "$340,000–$480,000",
    medianHint: "89131 mid-$300Ks list medians in Sep 2026 MLS ZIP snapshots",
    description:
      "Northwest Las Vegas with mountain proximity, parks, shopping corridors, and established floor plans below comparable Summerlin pricing.",
    highlights: ["Northwest location", "Parks & trails nearby", "Resale + newer stock"],
  },
  {
    name: "Cadence (Henderson)",
    slug: "henderson",
    priceBand: "$350,000–$500,000",
    medianHint: "Henderson entry points near ~$360K; city medians higher than NLV",
    description:
      "Henderson master-planned new construction with multiple builders and mid-$300Ks entry points reported in 2026 buyer guides.",
    highlights: ["New construction", "Henderson location", "Multiple builders"],
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    priceBand: "$355,000–$550,000",
    medianHint: "89166 mid-$350Ks list medians in Sep 2026 ZIP snapshots; mixes new + resale",
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
      "Most buyers searching for affordable Las Vegas homes target under $500,000. Mid-to-late 2026 GLVAR summaries put the metro single-family closed median near $470K–$490K, so under-$500K is still the main entry band — with North Las Vegas and East Valley ZIPs holding most of the under-$400K stock.",
  },
  {
    question: "Which Las Vegas neighborhoods have more affordable homes?",
    answer:
      "North Las Vegas (Eldorado, Craig Ranch, Aliante, Tule Springs), East Las Vegas corridors (including 89121–89122–89142), Mountain’s Edge, Centennial Hills, Henderson’s Cadence, and Skye Canyon show the strongest under-$500K selection versus Summerlin or The Ridges.",
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
