"use client";

import BrandPortrait from "@/components/brand/BrandPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";

type OfficeListingsUnderHeroProps = {
  title?: string;
  subtitle?: string;
  /** Affordable band defaults for this site's primary keyword */
  priceMin?: string;
  priceMax?: string;
};

/**
 * RealScout office listings placed directly under every page hero.
 * Primary buyer actions: click a listing photo, or schedule on Calendly.
 */
export default function OfficeListingsUnderHero({
  title = "Affordable Homes on the Market Now",
  subtitle = "Click any home photo to open details. Ready to tour? Schedule with Dr. Jan Duffy on Calendly.",
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
              text="Schedule a showing"
              className="inline-flex items-center justify-center rounded-md bg-[#1e4fd6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1840b0]"
            />
            <a
              href="#schedule"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              Or book below
            </a>
          </div>
        </div>

        <p className="mb-4 text-sm font-medium text-slate-700">
          Tap a listing image to view the home → then schedule a tour on
          Calendly when you find one you want to see.
        </p>

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

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-6 sm:flex-row">
          <div>
            <p className="font-semibold text-slate-900">
              Found a home in the photos?
            </p>
            <p className="text-sm text-slate-600">
              Schedule a showing or buyer consult with Dr. Jan Duffy — free, no
              obligation.
            </p>
          </div>
          <CalendlyButton
            url="https://calendly.com/drjanduffy/showing"
            text="Schedule on Calendly"
            className="inline-flex items-center justify-center rounded-md bg-[#1e4fd6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1840b0]"
          />
        </div>
      </div>
    </section>
  );
}
