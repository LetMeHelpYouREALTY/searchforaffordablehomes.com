/**
 * Schema.org Structured Data Generators for heyberkshire.com
 * Following Google's 2025 Structured Data Guidelines
 *
 * @see https://schema.org
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

import { siteConfig, agentInfo, officeInfo, agentStats } from "./site-config";
import { sameAsProfiles } from "./seo-links";

// ============================================================================
// Types
// ============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

export interface NeighborhoodData {
  name: string;
  slug: string;
  description: string;
  medianPrice?: string;
  latitude?: number;
  longitude?: number;
  containedIn?: string;
}

export interface CommunityAmenity {
  name: string;
  description?: string;
}

export interface SeniorCommunityData {
  name: string;
  description: string;
  priceRange: string;
  numberOfHomes: number;
  yearBuilt?: string;
  amenities: CommunityAmenity[];
  latitude?: number;
  longitude?: number;
  hoaFees?: string;
  ageRestriction?: string;
}

// ============================================================================
// Constants
// ============================================================================

const BASE_URL = siteConfig.url;

// Social media profiles (to be updated with actual URLs)
export const socialProfiles = {
  facebook: "https://www.facebook.com/DrJanDuffyLasVegasStrip/",
  instagram: "https://www.instagram.com/drjanduffy/",
  linkedin: "https://www.linkedin.com/company/drjanduffy/",
  youtube: "https://www.youtube.com/@DrDuffy",
  twitter: "https://twitter.com/DrJanDuffy",
  pinterest: "https://www.pinterest.com/DrJanDuffy/",
};

// ============================================================================
// Core Schema Generators
// ============================================================================

/**
 * Generate RealEstateAgent schema (LocalBusiness subtype)
 * Used site-wide in the root layout
 */
export function generateRealEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${BASE_URL}#business`,
    name: siteConfig.name,
    alternateName: [
      "Search for Affordable Homes",
      "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
      "BHHS Nevada Properties",
      "Berkshire Hathaway HomeServices",
    ],
    url: BASE_URL,
    logo: `${BASE_URL}/images/agent/dr-jan-duffy-portrait.png`,
    image: `${BASE_URL}/images/agent/dr-jan-duffy-portrait.png`,
    description: siteConfig.description,
    telephone: "+1-702-500-1942",
    email: agentInfo.email,
    foundingDate: officeInfo.foundingDate,
    employee: {
      "@type": "Person",
      "@id": `${BASE_URL}#person`,
      name: "Dr. Jan Duffy",
      jobTitle: "REALTOR®",
      image: `${BASE_URL}/images/agent/dr-jan-duffy-portrait.png`,
      telephone: "+1-702-500-1942",
      email: agentInfo.email,
      url: `${BASE_URL}/about`,
      worksFor: { "@id": `${BASE_URL}#business` },
    },
    founder: { "@id": `${BASE_URL}#person` },
    brand: {
      "@type": "Brand",
      "@id": `${BASE_URL}#agent`,
      name: siteConfig.name,
      logo: `${BASE_URL}/images/agent/dr-jan-duffy-portrait.png`,
    },
    priceRange: "$385K - $10M+",
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: officeInfo.coordinates.lat,
      longitude: officeInfo.coordinates.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Las Vegas",
        sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
      },
      { "@type": "Place", name: "Mountain's Edge" },
      { "@type": "Place", name: "Southern Highlands" },
      { "@type": "Place", name: "Rhodes Ranch" },
      { "@type": "Place", name: "Enterprise" },
      { "@type": "Place", name: "Summerlin South" },
      { "@type": "Place", name: "Clark County" },
    ],
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
        opens: officeInfo.hours.opens,
        closes: officeInfo.hours.closes,
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      validIn: {
        "@type": "State",
        name: "Nevada",
      },
      identifier: agentInfo.license,
    },
    sameAs: Array.from(
      new Set([...sameAsProfiles, ...Object.values(socialProfiles)]),
    ),
    parentOrganization: {
      "@type": "Organization",
      "@id": `${BASE_URL}#parent-organization`,
      name: "Berkshire Hathaway HomeServices Nevada Properties",
      url: "https://www.bhhsnv.com/",
      parentOrganization: {
        "@type": "Organization",
        name: "Berkshire Hathaway HomeServices",
        url: "https://www.bhhs.com",
        sameAs: "https://en.wikipedia.org/wiki/Berkshire_Hathaway_HomeServices",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: agentStats.averageRating.toString(),
      reviewCount: agentStats.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    knowsAbout: [
      "Affordable homes Las Vegas",
      "Las Vegas real estate",
      "Henderson homes",
      "Summerlin properties",
      "Luxury homes",
      "New construction",
      "Investment properties",
      "Relocation services",
      "55+ communities",
      "First-time homebuyers",
      "Budget-friendly MLS search",
    ],
    slogan: "Affordable Homes Las Vegas — book a consultation or private tour",
  };
}

/**
 * Generate Organization schema for BHHS brand
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}#parent-organization`,
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    url: "https://www.bhhsnv.com/",
    logo: `${BASE_URL}/favicon-32x32.png`,
    parentOrganization: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices",
      url: "https://www.bhhs.com",
      sameAs: [
        "https://en.wikipedia.org/wiki/Berkshire_Hathaway_HomeServices",
        "https://www.linkedin.com/company/berkshire-hathaway-homeservices/",
      ],
    },
  };
}

// ============================================================================
// Navigation Schema Generators
// ============================================================================

/**
 * Generate BreadcrumbList schema for navigation trails
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}#website`,
    name: siteConfig.name,
    url: BASE_URL,
    description: siteConfig.description,
    publisher: {
      "@id": `${BASE_URL}#business`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/listings?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ============================================================================
// Content Schema Generators
// ============================================================================

/**
 * Generate FAQPage schema from FAQ items
 */
export function generateFAQSchema(faqs: FAQItem[]) {
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

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating = 5,
  worstRating = 1,
) {
  return {
    "@type": "AggregateRating",
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: bestRating.toString(),
    worstRating: worstRating.toString(),
  };
}

/**
 * Generate Review schema for individual testimonials.
 * Emits an @graph so each Review is a first-class node with required
 * itemReviewed (fixes GSC “Missing field itemReviewed”).
 */
export function generateReviewSchema(reviews: ReviewItem[]) {
  const businessId = `${BASE_URL}#business`;
  const business = {
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": businessId,
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    url: BASE_URL,
    image: `${BASE_URL}/images/agent/dr-jan-duffy-portrait.png`,
    telephone: "+1-702-500-1942",
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    aggregateRating: generateAggregateRatingSchema(
      agentStats.averageRating,
      agentStats.reviewCount,
    ),
  };

  const reviewNodes = reviews.map((review, index) => {
    const reviewId = `${BASE_URL}#review-${index + 1}`;
    return {
      "@type": "Review",
      "@id": reviewId,
      itemReviewed: {
        "@type": "RealEstateAgent",
        "@id": businessId,
        name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
        url: BASE_URL,
      },
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.reviewBody,
      datePublished:
        review.datePublished || new Date().toISOString().split("T")[0],
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...business,
        review: reviewNodes.map((node) => ({ "@id": node["@id"] })),
      },
      ...reviewNodes,
    ],
  };
}

// ============================================================================
// Location Schema Generators
// ============================================================================

/**
 * Generate Place schema for neighborhoods
 */
export function generateNeighborhoodSchema(neighborhood: NeighborhoodData) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${BASE_URL}/neighborhoods/${neighborhood.slug}#place`,
    name: `${neighborhood.name}, Las Vegas`,
    description: neighborhood.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: neighborhood.containedIn || "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  };

  if (neighborhood.latitude && neighborhood.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: neighborhood.latitude,
      longitude: neighborhood.longitude,
    };
  }

  if (neighborhood.containedIn) {
    schema.containedInPlace = {
      "@type": "City",
      name: neighborhood.containedIn,
      addressRegion: "NV",
    };
  }

  return schema;
}

/**
 * Generate Residence schema for 55+ communities
 * Uses ResidentialComplex with amenityFeature
 */
export function generateSeniorCommunitySchema(community: SeniorCommunityData) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    name: community.name,
    description: community.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Henderson",
      addressRegion: "NV",
      addressCountry: "US",
    },
    numberOfAccommodationUnits: community.numberOfHomes,
    petsAllowed: true,
  };

  if (community.latitude && community.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: community.latitude,
      longitude: community.longitude,
    };
  }

  if (community.yearBuilt) {
    schema.yearBuilt = community.yearBuilt;
  }

  // Add amenity features
  if (community.amenities.length > 0) {
    schema.amenityFeature = community.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity.name,
      value: true,
      ...(amenity.description && { description: amenity.description }),
    }));
  }

  // Add price range as offers
  if (community.priceRange) {
    schema.additionalProperty = [
      {
        "@type": "PropertyValue",
        name: "Price Range",
        value: community.priceRange,
      },
      {
        "@type": "PropertyValue",
        name: "Age Restriction",
        value: community.ageRestriction || "55+",
      },
    ];

    if (community.hoaFees) {
      (schema.additionalProperty as Array<Record<string, unknown>>).push({
        "@type": "PropertyValue",
        name: "HOA Fees",
        value: community.hoaFees,
      });
    }
  }

  return schema;
}

/**
 * Generate RealEstateListing schema for property pages
 */
export function generateRealEstateListingSchema(listing: {
  name: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  images?: string[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: listing.name,
    description: listing.description,
    url: listing.url.startsWith("http")
      ? listing.url
      : `${BASE_URL}${listing.url}`,
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "USD",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.address.street,
      addressLocality: listing.address.city,
      addressRegion: listing.address.state,
      postalCode: listing.address.zip,
      addressCountry: "US",
    },
    ...(listing.bedrooms && { numberOfBedrooms: listing.bedrooms }),
    ...(listing.bathrooms && { numberOfBathroomsTotal: listing.bathrooms }),
    ...(listing.sqft && {
      floorSize: {
        "@type": "QuantitativeValue",
        value: listing.sqft,
        unitCode: "FTK",
      },
    }),
    ...(listing.images &&
      listing.images.length > 0 && {
        image: listing.images.map((img) =>
          img.startsWith("http") ? img : `${BASE_URL}${img}`,
        ),
      }),
  };
}

// ============================================================================
// Page-Specific Schema Generators
// ============================================================================

/**
 * Generate Service schema for services pages
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url.startsWith("http")
      ? service.url
      : `${BASE_URL}${service.url}`,
    provider: {
      "@id": `${BASE_URL}#business`,
    },
    areaServed: service.areaServed || [
      "Las Vegas",
      "Henderson",
      "Summerlin",
      "North Las Vegas",
    ],
    serviceType: "Real Estate Services",
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.url.startsWith("http") ? page.url : `${BASE_URL}${page.url}`}#webpage`,
    name: page.name,
    description: page.description,
    url: page.url.startsWith("http") ? page.url : `${BASE_URL}${page.url}`,
    isPartOf: {
      "@id": `${BASE_URL}#website`,
    },
    about: {
      "@id": `${BASE_URL}#business`,
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Combine multiple schemas into a single JSON-LD script
 */
export function combineSchemas(...schemas: Record<string, unknown>[]) {
  if (schemas.length === 1) {
    return schemas[0];
  }

  const graph: Record<string, unknown>[] = [];
  for (const schema of schemas) {
    const { "@context": _ctx, ...rest } = schema;
    if (Array.isArray(rest["@graph"])) {
      for (const node of rest["@graph"] as Record<string, unknown>[]) {
        graph.push(node);
      }
    } else {
      graph.push(rest);
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/**
 * Convert schema object to JSON-LD string
 */
export function schemaToJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
