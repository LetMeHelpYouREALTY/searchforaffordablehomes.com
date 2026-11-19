/**
 * Shared legacy redirect table for next.config.js (CJS) and documentation.
 * Keep middleware `lib/legacy-redirects.ts` aligned with these rules.
 */
const PRIMARY_ORIGIN = "https://www.searchforaffordablehomes.com";
const APEX_HOST = "searchforaffordablehomes.com";

/** @type {ReadonlyArray<{ sourceExact?: string, sourcePrefix?: string, destination: string }>} */
const LEGACY_RULES = [
  { sourceExact: "/my-featured-listings", destination: "/listings" },
  { sourceExact: "/my-sold-properties", destination: "/listings" },
  { sourceExact: "/my-home-value", destination: "/home-valuation" },
  { sourceExact: "/default.aspx", destination: "/" },
  { sourceExact: "/Default.aspx", destination: "/" },
  { sourcePrefix: "/property-search-map", destination: "/listings" },
  { sourcePrefix: "/rental", destination: "/listings" },
  { sourcePrefix: "/vacant-land", destination: "/listings" },
  { sourcePrefix: "/homes/sale", destination: "/listings" },
  { sourcePrefix: "/homes", destination: "/listings" },
  { sourcePrefix: "/single-family", destination: "/affordable-homes" },
  { sourcePrefix: "/condo-townhouse", destination: "/affordable-homes" },
];

/**
 * Next.js / vercel-style redirects.
 * Apex+legacy rules come first with absolute www destinations so Next.js
 * (which applies redirects before middleware) does not create www-then-path chains.
 */
function buildNextRedirects() {
  /** @type {Array<Record<string, unknown>>} */
  const redirects = [
    {
      source: "/:path*",
      has: [{ type: "host", value: "heyberkshire.com" }],
      destination: "https://www.heyberkshire.com/:path*",
      permanent: true,
    },
  ];

  // 1) Apex host + legacy path → final www URL (single hop)
  for (const rule of LEGACY_RULES) {
    if (rule.sourceExact) {
      redirects.push({
        source: rule.sourceExact,
        has: [{ type: "host", value: APEX_HOST }],
        destination: `${PRIMARY_ORIGIN}${rule.destination}`,
        permanent: true,
      });
      continue;
    }
    if (rule.sourcePrefix) {
      redirects.push({
        source: rule.sourcePrefix,
        has: [{ type: "host", value: APEX_HOST }],
        destination: `${PRIMARY_ORIGIN}${rule.destination}`,
        permanent: true,
      });
      redirects.push({
        source: `${rule.sourcePrefix}/:path*`,
        has: [{ type: "host", value: APEX_HOST }],
        destination: `${PRIMARY_ORIGIN}${rule.destination}`,
        permanent: true,
      });
    }
  }

  // 2) Remaining apex traffic → www same path
  redirects.push({
    source: "/:path*",
    has: [{ type: "host", value: APEX_HOST }],
    destination: `${PRIMARY_ORIGIN}/:path*`,
    permanent: true,
  });

  // 3) www (any host) legacy path → relative final path
  for (const rule of LEGACY_RULES) {
    if (rule.sourceExact) {
      redirects.push({
        source: rule.sourceExact,
        destination: rule.destination,
        permanent: true,
      });
      continue;
    }
    if (rule.sourcePrefix) {
      redirects.push({
        source: rule.sourcePrefix,
        destination: rule.destination,
        permanent: true,
      });
      redirects.push({
        source: `${rule.sourcePrefix}/:path*`,
        destination: rule.destination,
        permanent: true,
      });
    }
  }

  return redirects;
}

module.exports = {
  PRIMARY_ORIGIN,
  APEX_HOST,
  LEGACY_RULES,
  buildNextRedirects,
};
