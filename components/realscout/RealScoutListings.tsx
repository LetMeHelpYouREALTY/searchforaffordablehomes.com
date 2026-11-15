"use client";

import { Button } from "@/components/ui/button";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

/**
 * RealScout office listings — place immediately below the hero on every page.
 */
export default function RealScoutListings() {
  return (
    <section
      className="border-b border-slate-200 bg-slate-50 py-12 md:py-16"
      aria-labelledby="office-listings-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-10 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.15em] text-amber-700">
              {SITE_BRAND.shortName} · Live MLS
            </p>
            <h2
              id="office-listings-heading"
              className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl"
            >
              Affordable Homes for Sale
            </h2>
            <p className="text-base text-slate-600 md:text-lg">
              Under-$500K listings across Las Vegas, Henderson, and North Las
              Vegas — updated from the MLS via RealScout.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <a
              href="http://drjanduffy.realscout.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Properties
            </a>
          </Button>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              property-types=",SFR,MF,TC" 
              price-min="200000" 
              price-max="500000"
            ></realscout-office-listings>`,
          }}
        />
      </div>
    </section>
  );
}
