"use client";

import Image from "next/image";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import AgentPortrait from "@/components/brand/AgentPortrait";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

type ScheduleConsultSectionProps = {
  heading?: string;
  subheading?: string;
  calendlyUrl?: string;
};

/**
 * Calendly booking block — second primary conversion path (with RealScout clicks).
 */
export default function ScheduleConsultSection({
  heading = "Schedule a private showing",
  subheading = `Book a time with ${SITE_BRAND.agent} on Calendly to tour homes or review your offer strategy.`,
  calendlyUrl = SITE_BRAND.calendlyShowingUrl,
}: ScheduleConsultSectionProps) {
  return (
    <section
      id="schedule"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-16 md:py-20"
      aria-labelledby="schedule-consult-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
          <AgentPortrait size={96} className="mx-auto md:mx-0" />
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.15em] text-champagne-deep">
              {SITE_BRAND.name} · Calendly
            </p>
            <h2
              id="schedule-consult-heading"
              className="mb-3 font-display text-3xl font-semibold text-ink md:text-4xl"
            >
              {heading}
            </h2>
            <p className="text-lg text-slate-600">{subheading}</p>
            <p className="mt-3 text-sm text-slate-500">
              Prefer the phone?{" "}
              <a
                href={`tel:${SITE_BRAND.phoneTel}`}
                className="font-semibold text-ink underline underline-offset-2"
              >
                {SITE_BRAND.phoneDisplay}
              </a>
              {" · "}
              <a href="#listings" className="font-semibold text-ink underline">
                Or click a listing photo above
              </a>
            </p>
          </div>
        </div>
        <div className="relative mx-auto mb-8 aspect-[21/9] max-w-4xl overflow-hidden">
          <Image
            src="/images/sections/schedule-private-showing.jpg"
            alt="Open front door ready for a private Las Vegas home showing"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
        <div className="mx-auto max-w-4xl overflow-hidden border border-slate-200 bg-[var(--luxury-surface)]">
          <CalendlyWidget url={calendlyUrl} height="700px" />
        </div>
      </div>
    </section>
  );
}
