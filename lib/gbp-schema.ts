// Google Business Profile Schema Data
// NAP / hours / categories must match GBP exactly (Affordable Homes Las Vegas)

export const businessInfo = {
  // NAP - Must match GBP exactly
  name: "Affordable Homes Las Vegas",
  address: {
    streetAddress: "8850 W. Sunset, Suite 200",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89148",
    addressCountry: "US",
  },
  phone: {
    display: "(702) 500-1942",
    tel: "+17025001942",
    sms: "sms:+17025001942",
  },
  email: "homes@heyberkshire.com",
  url: "https://www.searchforaffordablehomes.com",

  // Business Details
  license: "S.0197614.LLC",
  priceRange: "$$",
  foundingDate: "2013-09",

  // Hours - Match GBP exactly (daily 8 AM–8 PM)
  hours: {
    monday: "08:00-20:00",
    tuesday: "08:00-20:00",
    wednesday: "08:00-20:00",
    thursday: "08:00-20:00",
    friday: "08:00-20:00",
    saturday: "08:00-20:00",
    sunday: "08:00-20:00",
  },

  // Geo coordinates for 8850 W Sunset Rd, Las Vegas NV 89148
  geo: {
    latitude: 36.071662,
    longitude: -115.284632,
  },

  // Service areas from GBP
  serviceAreas: [
    "Las Vegas, NV",
    "Enterprise, NV",
    "Winchester, NV",
    "Clark County, NV",
    "Desert Hills, NV",
    "Summerlin South, NV",
    "Summerlin West, NV",
    "Rhodes Ranch, NV",
    "Mountain's Edge, NV",
    "Southern Highlands, NV",
    "Queensridge, NV",
    "Sovana, Spring Valley, NV",
    "Canyon Gate, NV",
    "Boulder Junction, Paradise, NV",
    "Arden, Enterprise, NV",
  ],

  // Categories - Primary + Secondary for GBP
  categories: {
    primary: "Real Estate Agent",
    secondary: [
      "Real Estate Agency",
      "Real Estate Consultant",
      "Property Management Company",
    ],
  },

  // Services - Each creates searchable fields in GBP
  services: [
    {
      name: "Buyer Representation",
      description:
        "Help buyers compare condos, townhomes, and single-family homes by price, square footage, and HOA dues",
    },
    {
      name: "Seller Representation",
      description: "Pricing built on recent nearby sales",
    },
    {
      name: "New Construction Representation",
      description: "Buyer representation paid by the builder",
    },
    {
      name: "Nevada Down Payment Assistance Guidance",
      description: "Guidance through participating lenders",
    },
    {
      name: "Private Tours & Consultations",
      description: "Book a consultation or a private tour",
    },
    {
      name: "First-Time Home Buyer Guidance",
      description: "FHA, VA, and entry-level purchase paths",
    },
    {
      name: "Southwest Las Vegas Home Search",
      description:
        "Mountain's Edge, Southern Highlands, Rhodes Ranch, and nearby corridors",
    },
    {
      name: "California Relocation Services",
      description: "Helping CA buyers transition to Las Vegas",
    },
    {
      name: "Investment Property Consulting",
      description: "Rental properties and investment analysis",
    },
  ],

  // Attributes for GBP - mirror profile selections
  attributes: {
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible restroom",
      "Wheelchair accessible seating",
    ],
    serviceOptions: ["Online appointments", "Onsite services"],
    highlights: [
      "Identifies as women-owned",
      "Identifies as veteran-owned",
      "LGBTQ+ friendly",
      "Transgender safespace",
    ],
    amenities: ["Gender-neutral restroom"],
    planning: ["Appointment not required", "Accepts new clients"],
  },

  // Social profiles from GBP
  socialProfiles: [
    "https://www.linkedin.com/company/drjanduffy/",
    "https://www.facebook.com/DrJanDuffyLasVegasStrip/",
    "https://twitter.com/DrJanDuffy",
    "https://www.youtube.com/@DrDuffy",
    "https://www.pinterest.com/DrJanDuffy/",
    "https://www.instagram.com/drjanduffy/",
  ],

  // Languages from GBP
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
  ],

  paymentAccepted: ["Credit Card", "Check", "Wire Transfer"],
};

/** Official GBP business description */
export const gbpProfileDescription = `Affordable Homes Las Vegas helps buyers find homes at entry-level prices across southwest Las Vegas, including Mountain's Edge, Southern Highlands, and Rhodes Ranch. Buyers compare condos, townhomes, and single-family homes by price, square footage, and HOA dues, and get guidance on Nevada down payment assistance programs through participating lenders. New-construction buyers get representation paid by the builder. Sellers get pricing built on recent nearby sales. Book a consultation or a private tour.`;

// 750-word GBP Description (3 sections) — aligned to profile copy
export const gbpDescription = {
  whoWeAre: `Affordable Homes Las Vegas is Dr. Jan Duffy's buyer- and seller-focused practice with Berkshire Hathaway HomeServices Nevada Properties. Since September 2013, the office has helped shoppers find entry-level priced homes across southwest Las Vegas—Mountain's Edge, Southern Highlands, Rhodes Ranch, and nearby corridors—with luxury-level representation.

Clients work with a licensed Nevada REALTOR® (S.0197614.LLC) who filters live MLS inventory by payment fit, square footage, and HOA dues—not vague marketing labels. The office is open daily 8:00 AM–8:00 PM at 8850 W. Sunset, Suite 200, Las Vegas, NV 89148. Call or text (702) 500-1942, or book online.`,

  whatWeDo: `Buyers compare condos, townhomes, and single-family homes side by side, then get clear guidance on Nevada down payment assistance programs through participating lenders. New-construction buyers receive representation paid by the builder. Sellers get pricing built on recent nearby sales so list price matches what the market will support.

Appointments are available online; walk-up consults are welcome when the schedule allows (appointment not required). Tours and consultations can be booked on Calendly or by calling the office. Languages available through the practice and partners include English, Spanish, Arabic, Mandarin, Romanian, Vietnamese, Filipino, Ukrainian, Russian, and American Sign Language.`,

  whereWeServe: `Primary focus is southwest Las Vegas and Clark County service areas listed on Google Business Profile—including Enterprise, Summerlin South and West, Rhodes Ranch, Mountain's Edge, Southern Highlands, Queensridge, and related ZIPs such as 89148, 89139, 89141, 89134, 89135, and 89144.

Office: Affordable Homes Las Vegas, 8850 W. Sunset, Suite 200, Las Vegas, NV 89148. Hours: Sunday–Saturday 8:00 AM–8:00 PM. Phone/SMS: (702) 500-1942. Website: https://www.searchforaffordablehomes.com/. Book a consultation or a private tour today.`,
};

// FAQ Schema for GBP Q&A section
export const gbpFAQs = [
  {
    question: "What areas does Affordable Homes Las Vegas serve?",
    answer:
      "Southwest Las Vegas corridors including Mountain's Edge, Southern Highlands, and Rhodes Ranch, plus broader Clark County areas listed on our Google Business Profile such as Enterprise, Summerlin South/West, Queensridge, and related Las Vegas ZIPs.",
  },
  {
    question: "Where is the Affordable Homes Las Vegas office?",
    answer:
      "8850 W. Sunset, Suite 200, Las Vegas, NV 89148. Open daily 8:00 AM–8:00 PM. Call or text (702) 500-1942.",
  },
  {
    question: "How do I book a consultation or private tour?",
    answer:
      "Book online at https://calendly.com/drjanduffy/showing, call or text (702) 500-1942, or visit https://www.searchforaffordablehomes.com/. Appointment is not required when the schedule allows.",
  },
  {
    question: "Do you help with Nevada down payment assistance?",
    answer:
      "Yes. Buyers get guidance on Nevada down payment assistance programs through participating lenders while comparing homes by price, square footage, and HOA dues.",
  },
  {
    question: "Do new-construction buyers pay for representation?",
    answer:
      "New-construction buyers get representation paid by the builder. Dr. Jan Duffy still works for the buyer on upgrades, contracts, and closing timing.",
  },
  {
    question: "How do sellers get pricing?",
    answer:
      "Sellers get pricing built on recent nearby sales so the list price reflects what comparable homes actually closed for—not a guess.",
  },
  {
    question: "What types of homes can I compare?",
    answer:
      "Condos, townhomes, and single-family homes filtered by price, square footage, and HOA dues across southwest Las Vegas inventory.",
  },
  {
    question: "What are your business hours?",
    answer:
      "Open daily Sunday through Saturday, 8:00 AM–8:00 PM. Special holiday closures are posted on Google Business Profile.",
  },
];

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.searchforaffordablehomes.com#business",
    name: businessInfo.name,
    alternateName: [
      "Search for Affordable Homes",
      "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    ],
    image:
      "https://www.searchforaffordablehomes.com/images/agent/dr-jan-duffy-portrait.png",
    url: businessInfo.url,
    telephone: businessInfo.phone.tel,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    foundingDate: businessInfo.foundingDate,
    description: gbpProfileDescription,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: weekdays.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: "08:00",
      closes: "20:00",
    })),
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    knowsLanguage: businessInfo.languages,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    sameAs: businessInfo.socialProfiles,
  };
}

// Generate FAQPage Schema
export function generateFAQSchema(faqs = gbpFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
