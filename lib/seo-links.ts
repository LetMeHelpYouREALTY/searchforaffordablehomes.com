/**
 * Curated internal + external links for SEO / GEO / AEO crawl paths.
 * Prefer www (primary host); keep paths relative for internal Next.js Link usage.
 */

export type SeoLink = {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
};

export const PRIMARY_HOST = "https://www.searchforaffordablehomes.com";

/** High-priority internal crawl targets for affordable-homes intent */
export const pillarInternalLinks: SeoLink[] = [
  {
    href: "/affordable-homes",
    label: "Affordable Homes",
    description: "Pillar guide for Las Vegas value MLS search",
  },
  {
    href: "/affordable-homes/under-400k",
    label: "Homes Under $400K",
    description: "Payment-first shortlist under $400,000",
  },
  {
    href: "/affordable-homes/first-time-buyers",
    label: "First-Time Buyers",
    description: "Affordable path for first-time Las Vegas buyers",
  },
  {
    href: "/listings",
    label: "Live MLS Listings",
    description: "Current office listings via RealScout",
  },
  {
    href: "/buyers/first-time-buyers",
    label: "Buyer Programs Guide",
    description: "FHA, VA, and low-down-payment options",
  },
  {
    href: "/neighborhoods/north-las-vegas",
    label: "North Las Vegas",
    description: "Value-focused inventory corridor",
  },
  {
    href: "/neighborhoods/centennial-hills",
    label: "Centennial Hills",
    description: "Northwest Las Vegas payment-friendly homes",
  },
  {
    href: "/neighborhoods/mountains-edge",
    label: "Mountain’s Edge",
    description: "Southwest Las Vegas master-planned value",
  },
  {
    href: "/neighborhoods/henderson",
    label: "Henderson",
    description: "Affordable pockets in Nevada’s second-largest city",
  },
  {
    href: "/faq",
    label: "Affordable Homes FAQ",
    description: "Direct answers for AI and search snippets",
  },
  {
    href: "/contact",
    label: "Contact Dr. Jan",
    description: "Call, email, or book on Calendly",
  },
  {
    href: "/about",
    label: "About Dr. Jan Duffy",
    description: "License, brokerage, and local experience",
  },
];

/** Authoritative external citations for E-E-A-T / GEO */
export const authorityExternalLinks: SeoLink[] = [
  {
    href: "https://www.bhhsnv.com/",
    label: "Berkshire Hathaway HomeServices Nevada Properties",
    description: "Official brokerage site",
    external: true,
  },
  {
    href: "https://red.nv.gov/",
    label: "Nevada Real Estate Division",
    description: "License and consumer protection",
    external: true,
  },
  {
    href: "https://www.nar.realtor/",
    label: "National Association of REALTORS®",
    description: "REALTOR® Code of Ethics",
    external: true,
  },
  {
    href: "https://www.hud.gov/buying",
    label: "HUD Homebuying Resources",
    description: "Federal first-time buyer guidance",
    external: true,
  },
  {
    href: "https://www.consumerfinance.gov/owning-a-home/",
    label: "CFPB Owning a Home",
    description: "Mortgage shopping tools",
    external: true,
  },
  {
    href: "https://www.glvar.org/",
    label: "Greater Las Vegas Association of REALTORS®",
    description: "Local MLS / market association",
    external: true,
  },
  {
    href: "https://calendly.com/drjanduffy/showing",
    label: "Schedule a Showing",
    description: "Calendly booking with Dr. Jan Duffy",
    external: true,
  },
  {
    href: "http://drjanduffy.realscout.com/",
    label: "RealScout MLS Search",
    description: "Live property search powered by RealScout",
    external: true,
  },
];

export const sameAsProfiles = [
  "https://www.bhhsnv.com/",
  "https://calendly.com/drjanduffy/showing",
  "http://drjanduffy.realscout.com/",
  "https://www.linkedin.com/in/drjanduffy",
  "https://www.facebook.com/drjanduffy",
  "https://www.instagram.com/drjanduffy",
  "https://www.youtube.com/@drjanduffy",
];
