"use client";

import { Button } from "@/components/ui/button";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

/**
 * RealScout office listings — primary conversion path: click a listing image.
 * Place immediately below the hero on every page.
 */
export default function RealScoutListings({
  agentEncodedId = "QWdlbnQtMjI1MDUw",
}: {
  agentEncodedId?: string;
}) {
  return (
    <section
      id="listings"
      className="scroll-mt-24 border-b border-slate-200 bg-[var(--luxury-surface)] py-14 md:py-20"
      aria-labelledby="office-listings-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-champagne-deep">
              {SITE_BRAND.shortName} · Live MLS
            </p>
            <h2
              id="office-listings-heading"
              className="mb-2 font-display text-3xl font-semibold text-ink md:text-4xl"
            >
              Click a home to open details
            </h2>
            <p className="text-base text-slate-600 md:text-lg">
              Under-$500K listings across Las Vegas, Henderson, and North Las
              Vegas. Tap any photo to view the full RealScout listing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="shrink-0 rounded-none bg-ink text-white hover:bg-ink-soft"
            >
              <a href="#schedule" className="no-underline">
                Schedule a Showing
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="shrink-0 rounded-none border-ink text-ink hover:bg-ink hover:text-white"
            >
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                Open Full Search
              </a>
            </Button>
          </div>
        </div>

        <div className="mb-10 max-w-2xl">
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="${agentEncodedId}"></realscout-simple-search>`,
            }}
          />
        </div>

        <div
          className="realscout-listings-clickable"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings 
              agent-encoded-id="${agentEncodedId}" 
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
