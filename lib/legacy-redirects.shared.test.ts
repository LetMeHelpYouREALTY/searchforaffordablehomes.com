import { describe, expect, it } from "vitest";
import { buildNextRedirects } from "./legacy-redirects.shared.js";

describe("buildNextRedirects", () => {
  it("places apex+legacy absolute destinations before the apex catch-all", () => {
    const redirects = buildNextRedirects();

    const apexCatchAllIndex = redirects.findIndex(
      (r) =>
        r.source === "/:path*" &&
        Array.isArray(r.has) &&
        (r.has as Array<{ value?: string }>).some(
          (h) => h.value === "searchforaffordablehomes.com",
        ) &&
        String(r.destination).endsWith("/:path*"),
    );

    const apexLegacyIndex = redirects.findIndex(
      (r) =>
        r.source === "/property-search-map/:path*" &&
        Array.isArray(r.has) &&
        String(r.destination) ===
          "https://www.searchforaffordablehomes.com/listings",
    );

    expect(apexLegacyIndex).toBeGreaterThanOrEqual(0);
    expect(apexCatchAllIndex).toBeGreaterThan(apexLegacyIndex);
  });

  it("includes www-relative fallbacks for legacy paths", () => {
    const redirects = buildNextRedirects();
    expect(
      redirects.some(
        (r) =>
          r.source === "/my-home-value" &&
          r.destination === "/home-valuation" &&
          !r.has,
      ),
    ).toBe(true);
  });
});
