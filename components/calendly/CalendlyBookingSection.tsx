"use client";

import BrandPortrait from "@/components/brand/BrandPortrait";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";

type CalendlyBookingSectionProps = {
  title?: string;
  subtitle?: string;
  url?: string;
};

/**
 * Full Calendly embed for page-level scheduling — place once near mid/end of page.
 */
export default function CalendlyBookingSection({
  title = "Book a Free Affordable Homes Consultation",
  subtitle = "Pick a time that works. Dr. Jan Duffy will map your budget to real Las Vegas listings.",
  url = "https://calendly.com/drjanduffy/showing",
}: CalendlyBookingSectionProps) {
  return (
    <section
      id="schedule"
      className="bg-white py-16 md:py-24"
      aria-labelledby="calendly-booking-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-5 flex justify-center">
            <BrandPortrait size="lg" />
          </div>
          <h2
            id="calendly-booking-heading"
            className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl"
          >
            {title}
          </h2>
          <p className="text-lg text-slate-600">{subtitle}</p>
          <p className="mt-3 text-sm text-slate-500">
            Dr. Jan Duffy · Berkshire Hathaway HomeServices Nevada Properties ·
            9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134 ·{" "}
            <a href="tel:+17022221964" className="font-medium text-[#1e4fd6]">
              (702) 222-1964
            </a>
          </p>
        </div>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <CalendlyWidget url={url} height="700px" />
        </div>
      </div>
    </section>
  );
}
