// Site Configuration — mirrors Google Business Profile
// https://share.google/BQPiVVuYidhVW5iAD
// Berkshire Hathaway + license appear in the site footer only.

import { SITE_BRAND } from "./affordable-homes-content";

export const siteConfig = {
  name: SITE_BRAND.name,
  fullName: SITE_BRAND.name,
  tagline: "Entry-level Las Vegas homes — private tours & buyer guidance",
  brandLine: `${SITE_BRAND.name} | ${SITE_BRAND.agent}`,
  brandName: SITE_BRAND.name,
  shortName: SITE_BRAND.shortName,
  url: SITE_BRAND.url,
  description: SITE_BRAND.gbpDescription,
};

export const agentInfo = {
  name: SITE_BRAND.agent,
  title: "REALTOR®",
  license: SITE_BRAND.license,
  phone: SITE_BRAND.phoneDisplay,
  phoneFormatted: SITE_BRAND.phoneDisplay,
  phoneTel: `tel:${SITE_BRAND.phoneTel}`,
  email: SITE_BRAND.email,
  brokerage: SITE_BRAND.brokerage,
};

export const officeInfo = {
  name: SITE_BRAND.name,
  address: {
    street: SITE_BRAND.address.street,
    city: SITE_BRAND.address.city,
    state: SITE_BRAND.address.state,
    zip: SITE_BRAND.address.zip,
    full: SITE_BRAND.address.full,
  },
  coordinates: {
    lat: SITE_BRAND.geo.lat,
    lng: SITE_BRAND.geo.lng,
  },
  phone: SITE_BRAND.phoneDisplay,
  phoneTel: `tel:${SITE_BRAND.phoneTel}`,
};

// Market Statistics (Updated January 2026)
export const marketStats = {
  lastUpdated: "January 2026",
  lasVegas: {
    medianPrice: 450000,
    medianPriceFormatted: "$450,000",
    yearOverYearChange: "+4.2%",
    daysOnMarket: 28,
    activeListings: 4850,
    closedSales: 2340,
    inventoryMonths: 2.1,
  },
  henderson: {
    medianPrice: 485000,
    medianPriceFormatted: "$485,000",
    yearOverYearChange: "+5.1%",
    daysOnMarket: 24,
    activeListings: 1280,
  },
  summerlin: {
    medianPrice: 625000,
    medianPriceFormatted: "$625,000",
    yearOverYearChange: "+6.8%",
    daysOnMarket: 22,
    luxuryMedian: 1200000,
    luxuryMedianFormatted: "$1.2M",
  },
  luxury: {
    medianPrice: 1200000,
    medianPriceFormatted: "$1.2M",
    activeListings: 890,
    daysOnMarket: 45,
    pricePerSqFt: 385,
  },
};

export const testimonials = [
  {
    quote:
      "Dr. Jan made our first purchase under $500K feel organized — we compared HOA dues and square footage the right way.",
    author: "First-time buyers",
    location: "Mountain's Edge",
  },
  {
    quote:
      "Builder registration saved us money on new construction. Clear guidance from day one.",
    author: "New-construction buyers",
    location: "Southwest Las Vegas",
  },
  {
    quote:
      "Pricing on our sale matched recent nearby comps. Fast, professional process.",
    author: "Home sellers",
    location: "Rhodes Ranch",
  },
];

export const agentStats = {
  servingSince: 2013,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
  averageRating: 4.9,
  reviewCount: 200,
};

export const valuePropositions = {
  main: "Affordable Homes Las Vegas helps buyers find entry-level priced homes across southwest Las Vegas — Mountain's Edge, Southern Highlands, Rhodes Ranch, and beyond — with clear comparisons of price, square footage, and HOA dues.",
  trust:
    "Guidance on Nevada down payment assistance through participating lenders, builder-paid representation on new construction, and seller pricing built on recent nearby sales.",
  expertise:
    "Led by Dr. Jan Duffy. Book a consultation or private tour — office hours 8:00 AM–8:00 PM daily at 8850 W. Sunset, Suite 200.",
};

export const neighborhoods = [
  {
    name: "Mountain's Edge",
    slug: "mountains-edge",
    description: "Southwest Las Vegas master-planned community",
    medianPrice: "$475,000",
    highlights: [
      "Entry-level inventory",
      "Parks",
      "Mountain views",
      "HOA comparison",
    ],
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    description: "Master-planned community with championship golf",
    medianPrice: "$750,000",
    highlights: ["Golf community", "89141", "Mountain views", "Amenities"],
  },
  {
    name: "Rhodes Ranch",
    slug: "neighborhoods",
    description: "Southwest corridor near the W. Sunset office",
    medianPrice: "$420,000",
    highlights: ["Near office", "Condos & townhomes", "SFH options"],
  },
  {
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Master-planned community with parks, trails, and nearby public schools",
    medianPrice: "$625,000",
    highlights: [
      "Red Rock views",
      "150+ parks",
      "Nearby public schools",
      "Golf courses",
    ],
  },
  {
    name: "Henderson",
    slug: "henderson",
    description:
      "Nevada's second-largest city with master-planned neighborhoods",
    medianPrice: "$485,000",
    highlights: [
      "Public crime maps",
      "Nearby public schools",
      "Lake Las Vegas",
      "Green Valley",
    ],
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description: "Established Henderson community with mature landscaping",
    medianPrice: "$520,000",
    highlights: ["Golf courses", "Walking trails", "Shopping", "Parks"],
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    description: "Ultra-luxury guard-gated community in Summerlin",
    medianPrice: "$2.5M",
    highlights: [
      "Celebrity homes",
      "Custom estates",
      "Bear's Best Golf",
      "Strip views",
    ],
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description: "Rapidly growing area with affordable new construction",
    medianPrice: "$385,000",
    highlights: ["New construction", "Affordable", "Growing area"],
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    description: "Newer master-planned community in northwest Las Vegas",
    medianPrice: "$550,000",
    highlights: [
      "New homes",
      "Mountain views",
      "Modern amenities",
      "Nearby public schools",
    ],
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description: "Northwest Las Vegas community with mountain proximity",
    medianPrice: "$495,000",
    highlights: ["Mountain access", "Parks", "Shopping"],
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    description: "Henderson master-planned community with resort-style living",
    medianPrice: "$525,000",
    highlights: [
      "Resort pools",
      "Walking trails",
      "New construction",
      "Nearby public schools",
    ],
  },
];

export const services = [
  {
    name: "Home Buying",
    slug: "buyers",
    description:
      "Expert guidance through every step of the home buying process",
    icon: "Home",
  },
  {
    name: "Home Selling",
    slug: "sellers",
    description:
      "Maximize your home's value with professional marketing and negotiation",
    icon: "TrendingUp",
  },
  {
    name: "Luxury Homes",
    slug: "luxury-homes",
    description: "Specialized expertise in Las Vegas luxury real estate",
    icon: "Star",
  },
  {
    name: "New Construction",
    slug: "new-construction",
    description: "Free buyer representation for new home purchases",
    icon: "Building",
  },
  {
    name: "Investment Properties",
    slug: "investment-properties",
    description: "Strategic consulting for rental and investment opportunities",
    icon: "DollarSign",
  },
  {
    name: "Relocation",
    slug: "relocation",
    description: "Comprehensive relocation assistance for moves to Las Vegas",
    icon: "Truck",
  },
  {
    name: "Home Valuation",
    slug: "home-valuation",
    description: "Free property valuations using current market data",
    icon: "Calculator",
  },
  {
    name: "Market Analysis",
    slug: "market-report",
    description: "In-depth Las Vegas real estate market insights",
    icon: "BarChart",
  },
];

export const expertQuotes = {
  market: `"The Las Vegas market remains strong heading into 2026. We're seeing continued demand from California relocators and remote workers, but the days of 20 offers on every listing are behind us. Buyers finally have some negotiating power."`,
  buyers: `"My job isn't just to show you houses—it's to make sure you don't overpay, that you understand what you're buying, and that you're protected through every step of the transaction."`,
  sellers: `"Pricing your home correctly from day one is the single most important factor in getting top dollar. Overpriced homes sit, and every day on market costs you money."`,
  luxury: `"Luxury buyers expect discretion, market expertise, and flawless execution. In this price range, one wrong move can cost hundreds of thousands of dollars."`,
  investment: `"Las Vegas rental yields are among the best in the country right now. But you need to know which neighborhoods are appreciating and which have peaked."`,
  relocation: `"Moving to a new city is stressful enough. I handle everything from neighborhood tours to school research to contractor referrals so you can focus on your new beginning."`,
  newConstruction: `"Builders have sales agents who work for them, not you. Having your own representation costs you nothing but can save you tens of thousands in upgrades and negotiations."`,
  valueProposition: `"Affordable Homes Las Vegas is about clear numbers — price, square footage, HOA dues — and getting you into the right southwest Las Vegas home without guesswork."`,
};

export const commonFAQs = {
  general: [
    {
      question: "What is Affordable Homes Las Vegas?",
      answer:
        "Affordable Homes Las Vegas helps buyers find homes at entry-level prices across southwest Las Vegas, including Mountain's Edge, Southern Highlands, and Rhodes Ranch. Compare condos, townhomes, and single-family homes by price, square footage, and HOA dues.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "Service areas include Las Vegas, Enterprise, Winchester, Clark County, Summerlin South/West, Rhodes Ranch, Mountain's Edge, Southern Highlands, and nearby ZIPs such as 89134, 89135, 89144, 89148, 89139, and 89141.",
    },
    {
      question: "How do I book a consultation or private tour?",
      answer:
        "Call or text (702) 500-1942, book online, or visit 8850 W. Sunset, Suite 200, Las Vegas, NV 89148. Open 8:00 AM–8:00 PM daily.",
    },
    {
      question: "Who is Dr. Jan Duffy?",
      answer:
        "Dr. Jan Duffy leads Affordable Homes Las Vegas, helping buyers and sellers with entry-level pricing, new-construction representation paid by the builder, and seller pricing based on recent nearby sales.",
    },
  ],
  buying: [
    {
      question: "How long does the home buying process take in Las Vegas?",
      answer:
        "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days. The timeline depends on financing, inspections, and other contingencies.",
    },
    {
      question: "Do I need a pre-approval before looking at homes?",
      answer:
        "Yes. A pre-approval letter shows sellers you're serious and clarifies budget. We can connect you with participating lenders familiar with Nevada down payment assistance programs.",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "Requirements vary: FHA often 3.5%, conventional 3–20%, and VA/USDA may allow 0% down. Ask about Nevada down payment assistance through participating lenders.",
    },
  ],
  selling: [
    {
      question: "What is my home worth in today's Las Vegas market?",
      answer:
        "Pricing is built on recent nearby sales. Call (702) 500-1942 for a free comparative market analysis.",
    },
    {
      question: "How long will it take to sell my home?",
      answer:
        "Well-priced homes in Las Vegas often sell in roughly 28 days on average. Overpriced homes can sit longer — day-one pricing matters.",
    },
    {
      question: "What do I need to do to prepare my home for sale?",
      answer:
        "Expect a personalized prep checklist. Decluttering, minor repairs, fresh paint, and professional photography are usually the highest-ROI steps.",
    },
  ],
};
