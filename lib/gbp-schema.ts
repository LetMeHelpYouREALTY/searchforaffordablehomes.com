// Google Business Profile Schema Data
// Must match GBP exactly: https://share.google/BQPiVVuYidhVW5iAD
// Berkshire Hathaway + license appear in the site footer only (not GBP name).

import { SITE_BRAND } from "./affordable-homes-content";

export const businessInfo = {
  name: SITE_BRAND.name,
  address: {
    streetAddress: SITE_BRAND.address.street,
    addressLocality: SITE_BRAND.address.city,
    addressRegion: SITE_BRAND.address.state,
    postalCode: SITE_BRAND.address.zip,
    addressCountry: "US",
  },
  phone: {
    display: SITE_BRAND.phoneDisplay,
    tel: SITE_BRAND.phoneTel,
    sms: SITE_BRAND.smsHref,
  },
  email: SITE_BRAND.email,
  url: SITE_BRAND.url,
  gbpShareUrl: SITE_BRAND.gbpShareUrl,

  license: SITE_BRAND.license,
  priceRange: "$$",

  hours: {
    sunday: "08:00-20:00",
    monday: "08:00-20:00",
    tuesday: "08:00-20:00",
    wednesday: "08:00-20:00",
    thursday: "08:00-20:00",
    friday: "08:00-20:00",
    saturday: "08:00-20:00",
  },

  specialHours: [...SITE_BRAND.specialHours],

  geo: {
    latitude: SITE_BRAND.geo.lat,
    longitude: SITE_BRAND.geo.lng,
  },

  serviceAreas: [...SITE_BRAND.serviceAreas],

  categories: {
    primary: SITE_BRAND.categories.primary,
    secondary: [...SITE_BRAND.categories.secondary],
  },

  services: [
    {
      name: "Buyer Representation",
      description:
        "Entry-level home search with price, sq ft, and HOA comparisons",
    },
    {
      name: "Seller Representation",
      description: "Pricing built on recent nearby sales",
    },
    {
      name: "New Construction Representation",
      description: "Builder-paid buyer representation when registered early",
    },
    {
      name: "Down Payment Assistance Guidance",
      description: "Nevada programs through participating lenders",
    },
    {
      name: "Private Tours & Consultations",
      description: "Book online or call — appointment not required",
    },
    {
      name: "Southwest Las Vegas Specialization",
      description: "Mountain's Edge, Southern Highlands, Rhodes Ranch",
    },
  ],

  attributes: {
    accessibility: [...SITE_BRAND.attributes.accessibility],
    serviceOptions: [...SITE_BRAND.attributes.serviceOptions],
    highlights: [...SITE_BRAND.attributes.highlights],
    amenities: [...SITE_BRAND.attributes.amenities],
    crowd: [...SITE_BRAND.attributes.crowd],
    planning: [...SITE_BRAND.attributes.planning],
    offerings: ["Free consultation", "Online appointments"],
    payments: ["Credit cards", "Checks", "Wire transfer"],
  },

  socialProfiles: [...SITE_BRAND.socialProfiles],

  languages: [...SITE_BRAND.languages],

  paymentAccepted: ["Credit Card", "Check", "Wire Transfer"],

  foundingDate: SITE_BRAND.foundingDate,
};

export const gbpDescription = {
  whoWeAre: SITE_BRAND.gbpDescription,
  whatWeDo: `Buyers compare condos, townhomes, and single-family homes by price, square footage, and HOA dues. Guidance on Nevada down payment assistance programs is available through participating lenders. New-construction buyers get representation paid by the builder. Sellers get pricing built on recent nearby sales.`,
  whereWeServe: `Primary focus: southwest Las Vegas — Mountain's Edge, Southern Highlands, and Rhodes Ranch — plus service areas across Las Vegas, Enterprise, Winchester, Clark County, Summerlin South/West, and ZIPs including 89134, 89135, 89144, 89148, 89139, and 89141. Office: ${SITE_BRAND.address.full}. Open 8:00 AM–8:00 PM daily. Call ${SITE_BRAND.phoneDisplay}.`,
};

export const gbpFAQs = [
  {
    question: "What areas does Affordable Homes Las Vegas serve?",
    answer:
      "Southwest Las Vegas focus areas include Mountain's Edge, Southern Highlands, and Rhodes Ranch, plus Las Vegas, Enterprise, Winchester, Clark County, Summerlin South/West, and nearby ZIPs such as 89134, 89135, 89144, 89148, 89139, and 89141.",
  },
  {
    question: "Do you help with Nevada down payment assistance?",
    answer: `Yes. Buyers get guidance on Nevada down payment assistance programs through participating lenders. Call or text ${SITE_BRAND.phoneDisplay}.`,
  },
  {
    question: "Is new-construction buyer representation free?",
    answer:
      "For most builders, buyer representation is paid by the builder when you register your agent before the first visit. Book a consultation or private tour to get registered.",
  },
  {
    question: "Where is the office and what are the hours?",
    answer: `${SITE_BRAND.address.full}. Open 8:00 AM–8:00 PM every day. Closed Veterans Day (Nov 11, 2026), Thanksgiving (Nov 26, 2026), and Black Friday (Nov 27, 2026). Call or text ${SITE_BRAND.phoneDisplay}, or book online.`,
  },
  {
    question: "How do sellers get pricing?",
    answer:
      "Sellers get pricing built on recent nearby sales, then a marketing plan matched to the property.",
  },
  {
    question: "How do I schedule a consultation or private tour?",
    answer: `Call or text ${SITE_BRAND.phoneDisplay}, book online at ${SITE_BRAND.url}, or visit the office at ${SITE_BRAND.address.full}. Appointment not required.`,
  },
];

export function generateLocalBusinessSchema() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_BRAND.url}/#organization`,
    name: businessInfo.name,
    description: SITE_BRAND.gbpDescription,
    image: `${SITE_BRAND.url}${SITE_BRAND.portraitSrc}`,
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
    openingHoursSpecification: days.map((dayOfWeek) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek,
      opens: "08:00",
      closes: "20:00",
    })),
    specialOpeningHoursSpecification: businessInfo.specialHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      validFrom: h.date,
      validThrough: h.date,
      ...(h.closed
        ? {}
        : {
            opens: "08:00",
            closes: "20:00",
          }),
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
    sameAs: [...businessInfo.socialProfiles, businessInfo.gbpShareUrl],
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
