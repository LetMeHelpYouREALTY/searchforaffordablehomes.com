/**
 * Legacy IDX / ASP.NET / agent-portal URL → living page map.
 * Used by middleware for single-hop apex+path redirects (avoids www then path chains).
 * Keep next.config.js / vercel.json in sync for platform-level fallbacks.
 */
export const PRIMARY_ORIGIN = "https://www.searchforaffordablehomes.com";

export type LegacyRedirect = {
  /** Path prefixes or exact paths (lowercase comparison for .aspx). */
  sources: readonly string[];
  destination: string;
  /** When true, only exact path match (case-insensitive). */
  exact?: boolean;
};

export const LEGACY_REDIRECTS: readonly LegacyRedirect[] = [
  // Old agent portal / IDX soft surfaces still earning GSC impressions
  { sources: ["/my-featured-listings"], destination: "/listings", exact: true },
  { sources: ["/my-sold-properties"], destination: "/listings", exact: true },
  { sources: ["/my-home-value"], destination: "/home-valuation", exact: true },
  { sources: ["/default.aspx"], destination: "/", exact: true },

  // Retired map/search URL shapes (GSC "Page with redirect" / 404 examples)
  { sources: ["/property-search-map"], destination: "/listings" },

  // Retired MLS detail URL shapes
  { sources: ["/rental"], destination: "/listings" },
  { sources: ["/vacant-land"], destination: "/listings" },
  { sources: ["/homes/sale"], destination: "/listings" },
  { sources: ["/homes"], destination: "/listings" },
  { sources: ["/single-family"], destination: "/affordable-homes" },
  { sources: ["/condo-townhouse"], destination: "/affordable-homes" },
] as const;

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

/**
 * Resolve a legacy path to its final destination path, or null if not legacy.
 */
export function resolveLegacyDestination(pathname: string): string | null {
  const path = normalizePathname(pathname);
  const lower = path.toLowerCase();

  for (const rule of LEGACY_REDIRECTS) {
    for (const source of rule.sources) {
      const sourceNorm = source.toLowerCase();
      if (rule.exact) {
        if (lower === sourceNorm) return rule.destination;
        continue;
      }
      if (lower === sourceNorm || lower.startsWith(`${sourceNorm}/`)) {
        return rule.destination;
      }
    }
  }

  return null;
}

export function isApexSearchHost(host: string): boolean {
  const hostname = host.split(":")[0]?.toLowerCase() ?? "";
  return hostname === "searchforaffordablehomes.com";
}
