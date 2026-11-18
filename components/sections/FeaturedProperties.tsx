"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import { listingGuides } from "@/lib/listings-guides";

/**
 * Conversion hub — live RealScout photos + Calendly — not fake property cards.
 */
export default function FeaturedProperties() {
  return (
    <section
      className="bg-slate-50 py-16 md:py-24"
      aria-labelledby="featured-search-heading"
    >
      <div className="container mx-auto mb-10 px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2
              id="featured-search-heading"
              className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl"
            >
              Live homes you can click or tour
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              Click a RealScout listing photo for MLS details, or schedule a
              showing with Dr. Jan Duffy on Calendly. No placeholder homes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CalendlyButton
              url="https://calendly.com/drjanduffy/showing"
              text="Schedule a showing"
            />
            <Button asChild variant="outline">
              <Link href="/listings">
                All listing searches <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {listingGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/listings/${guide.slug}`}
                className="flex h-full items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-[#1e4fd6]/50"
              >
                <span>
                  <span className="block font-medium text-slate-900">
                    {guide.title}
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">
                    Live photos → Calendly tour
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-[#1e4fd6]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <OfficeListingsUnderHero
        title="Featured MLS inventory"
        subtitle="Click any photo for the live listing. Ready to walk through? Book Calendly."
      />
    </section>
  );
}
