"use client";

import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import AgentPortrait from "@/components/brand/AgentPortrait";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

type ScheduleConsultSectionProps = {
  heading?: string;
  subheading?: string;
  calendlyUrl?: string;
};

/**
 * Calendly booking block — place once per page in the schedule/CTA section.
 */
export default function ScheduleConsultSection({
  heading = "Schedule a Buyer Consult",
  subheading = `Book a time with ${SITE_BRAND.agent} to tour affordable Las Vegas homes or review your offer strategy.`,
  calendlyUrl = "https://calendly.com/drjanduffy/showing",
}: ScheduleConsultSectionProps) {
  return (
    <section
      className="border-t border-slate-200 bg-white py-16 md:py-20"
      aria-labelledby="schedule-consult-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6">
          <AgentPortrait size={96} className="mx-auto md:mx-0" />
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.15em] text-amber-700">
              {SITE_BRAND.name}
            </p>
            <h2
              id="schedule-consult-heading"
              className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl"
            >
              {heading}
            </h2>
            <p className="text-lg text-slate-600">{subheading}</p>
            <p className="mt-3 text-sm text-slate-500">
              Prefer to call?{" "}
              <a
                href={`tel:${SITE_BRAND.phoneTel}`}
                className="font-semibold text-blue-700 underline-offset-2 hover:underline"
              >
                {SITE_BRAND.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
          <CalendlyWidget url={calendlyUrl} height="700px" />
        </div>
      </div>
    </section>
  );
}
