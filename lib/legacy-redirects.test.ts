import { describe, expect, it } from "vitest";
import { isApexSearchHost, resolveLegacyDestination } from "./legacy-redirects";

describe("resolveLegacyDestination", () => {
  it("maps retired map search URLs to /listings", () => {
    expect(resolveLegacyDestination("/property-search-map")).toBe("/listings");
    expect(
      resolveLegacyDestination(
        "/property-search-map/newlistings/status-active;Active Under Contract",
      ),
    ).toBe("/listings");
  });

  it("maps MLS listing shapes to living inventory pages", () => {
    expect(
      resolveLegacyDestination(
        "/single-family/glv/2655152/8225-taos-paseo-avenue-las-vegas-nv-89128",
      ),
    ).toBe("/affordable-homes");
    expect(
      resolveLegacyDestination(
        "/rental/glv/2670800/600-n-carriage-hill-drive-1008-las-vegas-nv-89138",
      ),
    ).toBe("/listings");
    expect(resolveLegacyDestination("/vacant-land/nnr/1/lot")).toBe(
      "/listings",
    );
  });

  it("maps legacy agent-portal and ASP.NET URLs", () => {
    expect(resolveLegacyDestination("/my-featured-listings")).toBe("/listings");
    expect(resolveLegacyDestination("/my-sold-properties")).toBe("/listings");
    expect(resolveLegacyDestination("/my-home-value")).toBe("/home-valuation");
    expect(resolveLegacyDestination("/default.aspx")).toBe("/");
    expect(resolveLegacyDestination("/Default.aspx")).toBe("/");
  });

  it("ignores current living pages", () => {
    expect(resolveLegacyDestination("/")).toBeNull();
    expect(resolveLegacyDestination("/listings")).toBeNull();
    expect(resolveLegacyDestination("/affordable-homes")).toBeNull();
    expect(resolveLegacyDestination("/home-valuation")).toBeNull();
  });
});

describe("isApexSearchHost", () => {
  it("detects apex with or without port", () => {
    expect(isApexSearchHost("searchforaffordablehomes.com")).toBe(true);
    expect(isApexSearchHost("searchforaffordablehomes.com:443")).toBe(true);
    expect(isApexSearchHost("www.searchforaffordablehomes.com")).toBe(false);
  });
});
