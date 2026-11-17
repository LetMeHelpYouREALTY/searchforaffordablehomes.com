"use client";

import BrandPortrait from "@/components/brand/BrandPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { Button } from "@/components/ui/button";

/** Official RealScout agent encoding for Dr. Jan Duffy */
export const REALSCOUT_AGENT_ENCODED_ID = "QWdlbnQtMjI1MDUw";

type OfficeListingsUnderHeroProps = {
  title?: string;
  subtitle?: string;
  /** Optional price floor (official embed default: 3500) */
  priceMin?: string;
  /** Optional price ceiling — omit for open-ended office listings */
  priceMax?: string;
};

/**
 * RealScout office listings placed directly under every page hero.
 * Embed matches RealScout dashboard snippet (UMD web components).
 */
export default function OfficeListingsUnderHero({
  title = "Homes for Sale — Live MLS Listings",
  subtitle = "Current for-sale single-family homes from Dr. Jan Duffy’s office inventory across Las Vegas, Henderson, and Summerlin.",
  priceMin = "3500",
  priceMax,
}: OfficeListingsUnderHeroProps) {
  return (
    <section
      id="affordable-homes-listings"
      className="border-y border-slate-200 bg-slate-50 py-14 md:py-20"
      aria-labelledby="office-listings-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <BrandPortrait size="md" priority />
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#1e4fd6]">
                Dr. Jan Duffy · Live MLS
              </p>
              <h2
                id="office-listings-heading"
                className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl"
              >
                {title}
              </h2>
              <p className="max-w-2xl text-lg text-slate-600">{subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <CalendlyButton
              url="https://calendly.com/drjanduffy/showing"
              text="Tour These Homes"
            />
            <Button asChild variant="outline">
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Full Search
              </a>
            </Button>
          </div>
        </div>

        <realscout-office-listings
          agent-encoded-id={REALSCOUT_AGENT_ENCODED_ID}
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
          listing-status=",For Sale"
          property-types="SFR"
          price-min={priceMin}
          {...(priceMax ? { "price-max": priceMax } : {})}
        />
      </div>
    </section>
  );
}
