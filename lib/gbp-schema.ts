// Google Business Profile Schema Data
// NAP / hours / socials MUST match GBP exactly (Affordable Homes Las Vegas)

import {
  officeInfo,
  agentInfo,
  siteConfig,
  socialProfiles,
  serviceAreas,
} from "./site-config";

export const businessInfo = {
  // NAP - Must match GBP exactly
  name: "Affordable Homes Las Vegas",
  address: {
    streetAddress: officeInfo.address.street,
    addressLocality: officeInfo.address.city,
    addressRegion: officeInfo.address.state,
    postalCode: officeInfo.address.zip,
    addressCountry: "US",
  },
  phone: {
    display: agentInfo.phone,
    tel: "+17025001942",
  },
  email: agentInfo.email,
  url: siteConfig.url,
  sms: siteConfig.sms,

  // Business Details
  license: agentInfo.license,
  priceRange: "$$",

  // Hours - Match GBP exactly (8:00 AM–8:00 PM daily)
  hours: {
    monday: "08:00-20:00",
    tuesday: "08:00-20:00",
    wednesday: "08:00-20:00",
    thursday: "08:00-20:00",
    friday: "08:00-20:00",
    saturday: "08:00-20:00",
    sunday: "08:00-20:00",
  },

  // Geo coordinates for distance ranking
  geo: {
    latitude: officeInfo.coordinates.lat,
    longitude: officeInfo.coordinates.lng,
  },

  // Service areas from GBP
  serviceAreas: [...serviceAreas],

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
        "Payment-first MLS search for entry-level condos, townhomes, and single-family homes",
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
      description: "Introductions to participating lenders",
    },
    {
      name: "First-Time Home Buyer Guidance",
      description: "FHA, VA, and low-down-payment paths",
    },
    {
      name: "Private Tours & Consultations",
      description: "Book a consultation or private tour",
    },
    {
      name: "Mountain's Edge Home Search",
      description:
        "Hyperlocal affordable inventory in Enterprise / SW Las Vegas",
    },
    {
      name: "Southern Highlands Home Search",
      description: "Condos, townhomes, and SFR by price and HOA dues",
    },
    {
      name: "Rhodes Ranch Home Search",
      description: "Spring Valley entry and mid-band homes",
    },
  ],

  // Attributes for GBP - Fill out ALL available
  attributes: {
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible restroom",
      "Wheelchair accessible seating",
    ],
    serviceOptions: [
      "Online appointments",
      "Onsite services",
      "Appointment not required",
    ],
    highlights: [
      "Identifies as women-owned",
      "Identifies as veteran-owned",
      "LGBTQ+ friendly",
      "Transgender safespace",
    ],
    offerings: ["Free consultation", "Private tours"],
    amenities: ["Gender-neutral restroom"],
    planning: ["Appointment not required", "Accepts new clients"],
    payments: ["Credit cards", "Checks", "Wire transfer"],
  },

  // Social profiles for sameAs schema (GBP exact)
  socialProfiles: Object.values(socialProfiles),

  // Languages spoken (GBP)
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

  // Year established — GBP opening date September 2013
  foundingDate: "2013-09",
};

export const gbpDescription = {
  whoWeAre: siteConfig.description,

  whatWeDo: `Dr. Jan Duffy, REALTOR® (License S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties, helps buyers compare condos, townhomes, and single-family homes by price, square footage, and HOA dues. Guidance includes Nevada down payment assistance through participating lenders. New-construction buyers get representation paid by the builder. Sellers get pricing built on recent nearby sales. Book a consultation or a private tour by calling (702) 500-1942, texting the same number, or scheduling on Calendly.`,

  whereWeServe: `Affordable Homes Las Vegas focuses on southwest Las Vegas — Mountain's Edge, Southern Highlands, and Rhodes Ranch — and serves Las Vegas, Enterprise, Summerlin South, Summerlin West, Spring Valley, Queensridge, Clark County, and nearby ZIP codes including 89148, 89139, 89141, 89135, 89144, and 89134. Office: 8850 W. Sunset, Suite 200, Las Vegas, NV 89148. Open daily 8:00 AM–8:00 PM. Visit ${siteConfig.url}.`,
};

export const gbpFAQs = [
  {
    question: "What areas does Affordable Homes Las Vegas serve?",
    answer:
      "Primary focus is southwest Las Vegas including Mountain's Edge, Southern Highlands, and Rhodes Ranch, plus Las Vegas, Enterprise, Summerlin South/West, Spring Valley, and Clark County.",
  },
  {
    question: "Where is the Affordable Homes Las Vegas office?",
    answer: `8850 W. Sunset, Suite 200, Las Vegas, NV 89148. Open daily 8:00 AM–8:00 PM. Call or text (702) 500-1942. Appointment not required.`,
  },
  {
    question: "How do I schedule a consultation with Dr. Jan Duffy?",
    answer: `Call or text (702) 500-1942, email ${agentInfo.email}, book on Calendly, or visit ${siteConfig.url}. Online appointments and private tours available.`,
  },
  {
    question: "Do you help with Nevada down payment assistance?",
    answer:
      "Yes. Dr. Jan Duffy guides buyers on Nevada down payment assistance programs through participating lenders and compares homes by price, square footage, and HOA dues.",
  },
  {
    question: "Is new-construction representation free for buyers?",
    answer:
      "New-construction buyers get representation paid by the builder. Dr. Jan works for you—not the builder—on upgrades, contracts, and timing.",
  },
  {
    question: "When did Affordable Homes Las Vegas open?",
    answer:
      "The business opening date is September 2013. Dr. Jan Duffy continues to serve entry-level and value-focused buyers across southwest Las Vegas.",
  },
];

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${siteConfig.url}#business`,
    name: businessInfo.name,
    alternateName: [
      siteConfig.alternateName,
      "Dr. Jan Duffy",
      "BHHS Nevada Properties",
    ],
    image: `${siteConfig.url}/images/agent/dr-jan-duffy-portrait.png`,
    url: businessInfo.url,
    telephone: businessInfo.phone.tel,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    foundingDate: businessInfo.foundingDate,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
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
    knowsLanguage: businessInfo.languages,
  };
}

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
