/**
 * Section-level JSON-LD builders for SEO / GEO / AEO.
 * Each page section that answers a distinct intent gets matching schema
 * that mirrors visible content (Google structured-data guidelines).
 */

import {
  SITE_BRAND,
  AFFORDABLE_HOME_FAQS,
  AFFORDABLE_NEIGHBORHOODS,
  HOW_TO_BUY_STEPS,
  MARKET_SNAPSHOT,
} from "./affordable-homes-content";

const BASE = SITE_BRAND.url;

export function agentOrganizationSchema() {
  return {
    "@type": "RealEstateAgent",
    "@id": `${BASE}#organization`,
    name: `${SITE_BRAND.agent} - ${SITE_BRAND.brokerage}`,
    alternateName: [
      SITE_BRAND.name,
      "Dr. Jan Duffy",
      "Search for Affordable Homes",
    ],
    url: BASE,
    telephone: SITE_BRAND.phoneTel,
    email: SITE_BRAND.email,
    image: `${BASE}/images/agent/luxury-realtor-professional.jpg`,
    logo: `${BASE}/images/agent/luxury-realtor-professional.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_BRAND.address.street,
      addressLocality: SITE_BRAND.address.city,
      addressRegion: SITE_BRAND.address.state,
      postalCode: SITE_BRAND.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_BRAND.geo.lat,
      longitude: SITE_BRAND.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Las Vegas" },
      { "@type": "City", name: "Henderson" },
      { "@type": "City", name: "North Las Vegas" },
      { "@type": "Place", name: "Summerlin" },
      { "@type": "AdministrativeArea", name: "Clark County" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      identifier: SITE_BRAND.license,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    sameAs: [
      "https://www.facebook.com/drjanduffy",
      "https://www.instagram.com/drjanduffy",
      "https://www.linkedin.com/in/drjanduffy",
      SITE_BRAND.gbpShareUrl,
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${BASE}#website`,
    url: BASE,
    name: SITE_BRAND.name,
    publisher: { "@id": `${BASE}#organization` },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  speakableCssSelectors?: string[];
}) {
  const url = `${BASE}${opts.path === "/" ? "" : opts.path}`;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${BASE}#website` },
    about: { "@id": `${BASE}#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BASE}/images/hero/luxury-vegas-estate.jpg`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: opts.speakableCssSelectors ?? [
        "h1",
        ".aeo-answer",
        ".faq-answer",
      ],
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${BASE}${items[items.length - 1]?.path ?? ""}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function buyerServiceSchema() {
  return {
    "@type": "Service",
    "@id": `${BASE}/buyers#service`,
    name: "Affordable Home Buyer Representation — Las Vegas",
    serviceType: "Buyer Representation",
    description:
      "Luxury-level buyer representation for affordable Las Vegas homes under $500,000, including pre-approval guidance, neighborhood matching, offer strategy, and closing coordination.",
    provider: { "@id": `${BASE}#organization` },
    areaServed: [
      "Las Vegas",
      "North Las Vegas",
      "Henderson",
      "Summerlin",
      "Clark County NV",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "Buyer representation is typically covered by seller-paid commission structures; confirm terms before writing an offer.",
    },
  };
}

export function howToBuySchema() {
  return {
    "@type": "HowTo",
    "@id": `${BASE}/#howto-buy`,
    name: "How to Buy an Affordable Home in Las Vegas",
    description: `Step-by-step process to buy under the ${MARKET_SNAPSHOT.valleyMedianList} Las Vegas market median with Dr. Jan Duffy.`,
    totalTime: "P45D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "450000",
    },
    step: HOW_TO_BUY_STEPS.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function faqSchema(faqs = AFFORDABLE_HOME_FAQS) {
  return {
    "@type": "FAQPage",
    "@id": `${BASE}/#faq`,
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

export function neighborhoodItemListSchema() {
  return {
    "@type": "ItemList",
    "@id": `${BASE}/#affordable-neighborhoods`,
    name: "Affordable Las Vegas Neighborhoods for Home Buyers",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: AFFORDABLE_NEIGHBORHOODS.length,
    itemListElement: AFFORDABLE_NEIGHBORHOODS.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: n.name,
      url:
        n.slug === "neighborhoods"
          ? `${BASE}/neighborhoods`
          : `${BASE}/neighborhoods/${n.slug}`,
      description: `${n.priceBand}. ${n.description}`,
    })),
  };
}

export function localBusinessNapSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${BASE}#localbusiness`,
    name: `${SITE_BRAND.agent} | ${SITE_BRAND.brokerage}`,
    telephone: SITE_BRAND.phoneTel,
    email: SITE_BRAND.email,
    url: BASE,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_BRAND.address.street,
      addressLocality: SITE_BRAND.address.city,
      addressRegion: SITE_BRAND.address.state,
      postalCode: SITE_BRAND.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_BRAND.geo.lat,
      longitude: SITE_BRAND.geo.lng,
    },
  };
}

export function contactPointSchema() {
  return {
    "@type": "ContactPoint",
    "@id": `${BASE}#contact`,
    telephone: SITE_BRAND.phoneTel,
    contactType: "customer service",
    areaServed: "US-NV",
    availableLanguage: ["English", "Spanish"],
  };
}

/** Homepage @graph: one JSON-LD for every major section intent */
export function homepageSectionGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      agentOrganizationSchema(),
      websiteSchema(),
      webPageSchema({
        path: "/",
        name: "Buy an Affordable Home in Las Vegas | Luxury Buyer Representation",
        description:
          "Search affordable Las Vegas homes under $500K with luxury-level buyer representation from Dr. Jan Duffy. North Las Vegas, Mountain's Edge, Centennial Hills, and more.",
        speakableCssSelectors: ["h1", ".aeo-answer", "h2"],
      }),
      breadcrumbSchema([{ name: "Home", path: "/" }]),
      buyerServiceSchema(),
      howToBuySchema(),
      faqSchema(),
      neighborhoodItemListSchema(),
      localBusinessNapSchema(),
      contactPointSchema(),
    ],
  };
}

export function pageSectionGraph(opts: {
  path: string;
  name: string;
  description: string;
  breadcrumbs: Array<{ name: string; path: string }>;
  extra?: Record<string, unknown>[];
  faqs?: typeof AFFORDABLE_HOME_FAQS;
}) {
  const graph: Record<string, unknown>[] = [
    agentOrganizationSchema(),
    websiteSchema(),
    webPageSchema({
      path: opts.path,
      name: opts.name,
      description: opts.description,
    }),
    breadcrumbSchema(opts.breadcrumbs),
    localBusinessNapSchema(),
  ];
  if (opts.faqs?.length) {
    graph.push(faqSchema(opts.faqs));
  }
  if (opts.extra?.length) {
    graph.push(...opts.extra);
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
