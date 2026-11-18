"use client";

import BrandPortrait from "@/components/brand/BrandPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";

type SectionExtrasProps = {
  /** Short section-specific schedule prompt */
  headline?: string;
  /** Visual tone for dark sections */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Brand portrait + Calendly CTA for every major page section.
 * Keeps scheduling one click away without stacking full embeds.
 */
export default function SectionExtras({
  headline = "Talk affordable homes with Dr. Jan",
  tone = "light",
  className = "",
}: SectionExtrasProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`mt-10 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row ${
        isDark ? "border-white/15" : "border-slate-200"
      } ${className}`}
    >
      <div className="flex items-center gap-3 text-left">
        <BrandPortrait size="sm" />
        <div>
          <p
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Dr. Jan Duffy
          </p>
          <p
            className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}
          >
            {headline}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <a
          href="#affordable-homes-listings"
          className={
            isDark
              ? "inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              : "inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
          }
        >
          Browse MLS photos
        </a>
        <CalendlyButton
          url="https://calendly.com/drjanduffy/showing"
          text="Schedule on Calendly"
          className={
            isDark
              ? "inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#1e4fd6] transition-colors hover:bg-blue-50"
              : "inline-flex items-center justify-center rounded-md bg-[#1e4fd6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          }
        />
      </div>
    </div>
  );
}
