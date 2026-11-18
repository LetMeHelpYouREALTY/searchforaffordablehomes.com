"use client";

import BrandPortrait from "@/components/brand/BrandPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { Button } from "@/components/ui/button";

type OfficeListingsUnderHeroProps = {
  title?: string;
  subtitle?: string;
  /** Affordable band defaults for this site's primary keyword */
  priceMin?: string;
  priceMax?: string;
};

/**
 * RealScout office listings placed directly under every page hero.
 * Tuned for affordable homes search intent.
 */
export default function OfficeListingsUnderHero({
  title = "Affordable Homes on the Market Now",
  subtitle = "Live MLS listings for value-focused buyers across Las Vegas, Henderson, and Summerlin.",
  priceMin = "200000",
  priceMax = "550000",
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
                Dr. Jan Duffy · Affordable Homes
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

        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              property-types=",SFR,MF,TC" 
              price-min="${priceMin}" 
              price-max="${priceMax}"
            ></realscout-office-listings>`,
          }}
        />
      </div>
    </section>
  );
}
