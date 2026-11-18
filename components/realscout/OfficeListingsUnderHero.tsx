"use client";

import RealScoutListings from "@/components/realscout/RealScoutListings";

type OfficeListingsUnderHeroProps = {
  title?: string;
  subtitle?: string;
  /** Affordable band defaults for this site's primary keyword */
  priceMin?: string;
  priceMax?: string;
};

/**
 * Alias for RealScout office listings under every page hero.
 * Prefer placing <RealScoutListings /> directly after the hero section.
 */
export default function OfficeListingsUnderHero({
  title = "Click a home to open details",
  subtitle = "Under-$500K listings across Las Vegas, Henderson, and North Las Vegas. Tap any photo to view the full RealScout listing.",
}: OfficeListingsUnderHeroProps) {
  // title/subtitle kept for call-site compatibility; RealScoutListings owns the UI.
  void title;
  void subtitle;
  return <RealScoutListings />;
}
