/**
 * Hyperlocal AEO/GEO content for SearchForAffordableHomes.com
 * NAP / hours / brand MUST mirror Google Business Profile:
 * https://share.google/BQPiVVuYidhVW5iAD
 * Fair Housing: describe sq ft, amenities, commute — never protected-class proxies.
 */

export const SITE_BRAND = {
  domain: "searchforaffordablehomes.com",
  url: "https://www.searchforaffordablehomes.com",
  /** GBP business name — primary brand everywhere except footer brokerage line */
  name: "Affordable Homes Las Vegas",
  shortName: "Affordable Homes Las Vegas",
  agent: "Dr. Jan Duffy",
  /** Footer-only disclosures */
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  /** GBP phone + SMS */
  phoneDisplay: "(702) 500-1942",
  phoneTel: "+17025001942",
  smsHref: "sms:+17025001942",
  email: "homes@heyberkshire.com",
  portraitSrc: "/images/agent/dr-jan-duffy-portrait.png",
  logoSrc: "/images/logos/brand-mark-affordable-homes.jpg",
  /** GBP business location */
  address: {
    street: "8850 W. Sunset, Suite 200",
    city: "Las Vegas",
    state: "NV",
    zip: "89148",
    full: "8850 W. Sunset, Suite 200, Las Vegas, NV 89148",
  },
  /** Corona Del Mar Corporate Center / 8850 W Sunset Rd */
  geo: { lat: 36.07166, lng: -115.28462 },
  /** GBP main hours: daily 8:00 AM–8:00 PM */
  hours: [
    {
      days: "Sunday-Saturday",
      opens: "08:00",
      closes: "20:00",
    },
  ],
  /** GBP special hours (closed) — keep in sync with Google Business Profile */
  specialHours: [
    {
      date: "2026-11-11",
      label: "Veterans Day",
      closed: true,
    },
    {
      date: "2026-11-26",
      label: "Thanksgiving",
      closed: true,
    },
    {
      date: "2026-11-27",
      label: "Black Friday",
      closed: true,
    },
  ] as const,
  foundingDate: "2013-09",
  gbpShareUrl: "https://share.google/BQPiVVuYidhVW5iAD",
  calendlyShowingUrl: "https://calendly.com/drjanduffy/showing",
  calendlyAppointmentUrl: "https://calendly.com/drjanduffy/appointment",
  categories: {
    primary: "Real estate agent",
    secondary: [
      "Real estate agency",
      "Real estate consultant",
      "Property management company",
    ],
  },
  /** Official GBP description (verbatim for NAP/content alignment) */
  gbpDescription:
    "Affordable Homes Las Vegas helps buyers find homes at entry-level prices across southwest Las Vegas, including Mountain's Edge, Southern Highlands, and Rhodes Ranch. Buyers compare condos, townhomes, and single-family homes by price, square footage, and HOA dues, and get guidance on Nevada down payment assistance programs through participating lenders. New-construction buyers get representation paid by the builder. Sellers get pricing built on recent nearby sales. Book a consultation or a private tour.",
  socialProfiles: [
    "https://www.linkedin.com/company/drjanduffy/",
    "https://www.facebook.com/DrJanDuffyLasVegasStrip/",
    "https://twitter.com/DrJanDuffy",
    "https://www.youtube.com/@DrDuffy",
    "https://www.pinterest.com/DrJanDuffy/",
    "https://www.instagram.com/drjanduffy/",
  ] as const,
  serviceAreas: [
    "Nevada, USA",
    "Las Vegas, NV, USA",
    "Enterprise, NV, USA",
    "Winchester, NV, USA",
    "Clark County, NV, USA",
    "Desert Hills, NV, USA",
    "Las Vegas, NV 89134, USA",
    "Las Vegas, NV 89135, USA",
    "Las Vegas, NV 89144, USA",
    "Las Vegas, NV 89148, USA",
    "Summerlin South, NV, USA",
    "Sovana, Spring Valley, NV, USA",
    "Arden, Enterprise, NV 89139, USA",
    "Summerlin West, Las Vegas, NV, USA",
    "Rhodes Ranch, Spring Valley, NV, USA",
    "Queensridge, Las Vegas, NV 89145, USA",
    "Boulder Junction, Paradise, NV 89118, USA",
    "Mountain's Edge, Enterprise, NV 89139, USA",
    "Canyon Gate Master, Las Vegas, NV 89117, USA",
    "Southern Highlands, Enterprise, NV 89141, USA",
  ] as const,
  languages: [
    "English",
    "Spanish",
    "Arabic",
    "Mandarin",
    "Romanian",
    "Vietnamese",
    "American Sign Language",
    "Filipino",
    "Ukrainian",
    "Russian",
  ] as const,
  attributes: {
    accessibility: [
      "Wheelchair accessible seating",
      "Wheelchair accessible restroom",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible entrance",
    ],
    amenities: ["Gender-neutral restroom"],
    crowd: ["LGBTQ+ friendly", "Transgender safespace"],
    highlights: ["Identifies as veteran-owned", "Identifies as women-owned"],
    planning: ["Appointment not required"],
    serviceOptions: ["Onsite services available", "Offers online appointments"],
  },
} as const;

export const MARKET_SNAPSHOT = {
  asOf: "November 2026",
  /** Trailing GLVAR closed median context from Parallel research (Aug–Sep 2026 reports) */
  valleyMedianList: "$470,000–$490,000",
  valleyMedianNote:
    "Las Vegas metro single-family closed medians ran roughly $470K–$490K in mid-to-late 2026 public GLVAR summaries (near $486K trailing-90-day). Under-$500K remains the deepest buyer inventory band; condos/townhomes often list near the high-$200Ks.",
  daysOnMarket: "about 28–45 days to close after acceptance",
  inventoryBand:
    "Hundreds of single-family actives under $400K in North Las Vegas and East Valley ZIPs (MLS snapshots Sep 2026); southwest corridors (Mountain's Edge, Southern Highlands, Rhodes Ranch) remain core entry-level search areas",
};

export const AFFORDABLE_NEIGHBORHOODS = [
  {
    name: "Mountain's Edge",
    slug: "mountains-edge",
    priceBand: "$320,000–$480,000",
    medianHint: "Southwest Enterprise entry band near 89139",
    description:
      "Primary GBP focus area for entry-level single-family and townhome inventory with parks, schools, and Beltway access.",
    image: "/images/neighborhoods/mountains-edge.jpg",
    imageAlt:
      "Mountain's Edge Las Vegas southwest neighborhood street with newer stucco homes",
    highlights: [
      "Southwest Las Vegas entry prices",
      "Condos, townhomes & SFH",
      "Compare HOA dues before you buy",
    ],
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    priceBand: "$380,000–$500,000+",
    medianHint: "Enterprise 89141 — golf-community edge of the affordable band",
    description:
      "Buyers weigh golf-community amenities against price, square footage, and HOA dues while staying in southwest Las Vegas.",
    image: "/images/neighborhoods/southern-highlands.jpg",
    imageAlt: "Southern Highlands Las Vegas homes with desert mountains beyond",
    highlights: ["Resort-style amenities", "89141 ZIP", "New & resale mix"],
  },
  {
    name: "Rhodes Ranch",
    slug: "neighborhoods",
    priceBand: "$350,000–$490,000",
    medianHint: "Spring Valley / southwest corridor near Sunset",
    description:
      "Close to the Affordable Homes Las Vegas office on W. Sunset — strong for comparing condos, townhomes, and single-family by price and HOA.",
    image: "/images/neighborhoods/rhodes-ranch.jpg",
    imageAlt: "Rhodes Ranch Las Vegas residential street with tile-roof homes",
    highlights: [
      "Near 8850 W. Sunset office",
      "HOA comparison friendly",
      "Southwest commute corridors",
    ],
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    priceBand: "$280,000–$450,000",
    medianHint:
      "Most affordable major sub-market; ~$425K 90-day sold median (Jul 2026 NLV reports)",
    description:
      "Entry floor near Eldorado and older 89031/89032 stock, starter sweet spot around Craig Ranch and Aliante, and new-build entry in Tule Springs — often with builder incentives and rate buydowns.",
    image: "/images/neighborhoods/north-las-vegas.jpg",
    imageAlt:
      "North Las Vegas affordable single-family homes on a quiet street",
    highlights: [
      "446+ actives under $400K reported mid-2026",
      "Aliante & Tule Springs",
      "215 Beltway access",
    ],
  },
  {
    name: "East Las Vegas / Sunrise Manor / Whitney",
    slug: "neighborhoods",
    priceBand: "$280,000–$380,000",
    medianHint:
      "ZIPs 89121 / 89122 / 89142 hold many of the valley’s under-$400K listings",
    description:
      "Established east and central corridors with the densest under-$400K single-family selection and lower price-per-square-foot than west-valley master plans.",
    image: "/images/neighborhoods/east-las-vegas.jpg",
    imageAlt: "East Las Vegas established neighborhood with ranch-style homes",
    highlights: [
      "Lowest price-per-sq-ft clusters",
      "Established stock",
      "Strip / airport commute corridors",
    ],
  },
  {
    name: "Henderson (entry)",
    slug: "henderson",
    priceBand: "$375,000–$500,000",
    medianHint:
      "Citywide medians run higher; under-$500K focuses on condos/townhomes and older SFH",
    description:
      "City services and master-plan pockets; under-$500K often means attached product or smaller lots versus Summerlin west pricing.",
    image: "/images/neighborhoods/henderson-entry.jpg",
    imageAlt: "Henderson Nevada entry-level townhomes with desert landscaping",
    highlights: ["City amenities", "Green Valley adjacent", "Attached options"],
  },
];

export const BUYER_SERVICE_STEPS = [
  {
    heading: "How do I get pre-approved to buy an affordable Las Vegas home?",
    answer:
      "Start with a local lender pre-approval so your budget is clear before tours. FHA can start at 3.5% down, VA may offer 0% down for eligible buyers, and Nevada down-payment assistance programs can reduce cash to close through participating lenders.",
    h3: "Loan programs that keep payments realistic",
  },
  {
    heading: "Where should I search for affordable homes in Las Vegas?",
    answer:
      "Focus first on Mountain's Edge, Southern Highlands, Rhodes Ranch, North Las Vegas, and southwest corridors. Affordable Homes Las Vegas filters MLS + RealScout alerts by price, square footage, and HOA dues.",
    h3: "Hyperlocal search, not generic listings",
  },
  {
    heading:
      "What does buyer representation look like on an affordable purchase?",
    answer:
      "Private showings, comps before every offer, inspection advocacy, and closing coordination. New-construction buyers get representation paid by the builder when registered early.",
    h3: "Clear process, entry-level price point",
  },
] as const;

export const HOW_TO_BUY_STEPS = [
  {
    name: "Get pre-approved",
    text: "Confirm budget with a Nevada lender who knows down payment assistance programs. Affordable Homes Las Vegas can introduce participating lenders.",
  },
  {
    name: "Compare homes by the numbers",
    text: "Filter Mountain's Edge, Southern Highlands, Rhodes Ranch, and valley-wide inventory by price, square footage, and HOA dues — not just photos.",
  },
  {
    name: "Tour with a plan",
    text: "Book a private tour or consultation. New-construction buyers should register representation first so the builder pays the buyer-agent fee.",
  },
  {
    name: "Write a competitive offer",
    text: "Use recent nearby sales for pricing. Sellers get CMA-based pricing; buyers get negotiation grounded in the same comps.",
  },
  {
    name: "Inspect and close",
    text: "Complete inspections, negotiate credits, clear title, and collect keys in about 30–45 days with financing.",
  },
] as const;

export const AFFORDABLE_HOME_FAQS: Array<{ question: string; answer: string }> =
  [
    {
      question: "What does Affordable Homes Las Vegas help buyers find?",
      answer:
        "Entry-level priced homes across southwest Las Vegas — including Mountain's Edge, Southern Highlands, and Rhodes Ranch — plus valley-wide condos, townhomes, and single-family homes. Compare by price, square footage, and HOA dues.",
    },
    {
      question: "Do you help with Nevada down payment assistance?",
      answer:
        "Yes. Buyers get guidance on Nevada down payment assistance programs through participating lenders. Call or text (702) 500-1942 to start.",
    },
    {
      question: "Is new-construction buyer representation free to me?",
      answer:
        "For most builders, buyer representation is paid by the builder when you register your agent before the first visit. Book a consult or private tour to get registered.",
    },
    {
      question: "Where is the Affordable Homes Las Vegas office?",
      answer:
        "8850 W. Sunset, Suite 200, Las Vegas, NV 89148. Hours are 8:00 AM–8:00 PM daily. Call (702) 500-1942 or book online.",
    },
    {
      question: "How do sellers get pricing?",
      answer:
        "Sellers get pricing built on recent nearby sales (comparative market analysis), then a marketing plan matched to the property.",
    },
    {
      question: "Who is Dr. Jan Duffy?",
      answer:
        "Dr. Jan Duffy leads Affordable Homes Las Vegas. Call or text (702) 500-1942, or visit 8850 W. Sunset, Suite 200, Las Vegas, NV 89148 (open daily 8:00 AM–8:00 PM).",
    },
  ];
