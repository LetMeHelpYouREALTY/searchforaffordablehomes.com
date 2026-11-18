import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import BrandPortrait from "@/components/brand/BrandPortrait";
import SectionExtras from "@/components/brand/SectionExtras";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import CalendlyBookingSection from "@/components/calendly/CalendlyBookingSection";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import SchemaScript from "@/components/SchemaScript";
import InternalLinkHub from "@/components/seo/InternalLinkHub";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  generateServiceSchema,
} from "@/lib/schema";
import { agentInfo, officeInfo } from "@/lib/site-config";
import type { ListingGuide } from "@/lib/listings-guides";
import { Button } from "@/components/ui/button";

type ListingGuidePageProps = {
  guide: ListingGuide;
};

/**
 * Conversion page: RealScout office listing clicks + Calendly booking.
 * No fake MLS detail HTML — photos open live RealScout/MLS records.
 */
export default function ListingGuidePage({ guide }: ListingGuidePageProps) {
  const path = `/listings/${guide.slug}`;
  const schemas = combineSchemas(
    generateWebPageSchema({
      name: guide.title,
      description: guide.metaDescription,
      url: path,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Listings", url: "/listings" },
      { name: guide.title, url: path },
    ]),
    generateServiceSchema({
      name: guide.title,
      description: guide.directAnswer,
      url: path,
    }),
    generateFAQSchema(guide.faqs),
  );

  return (
    <>
      <SchemaScript schema={schemas} id={`listings-${guide.slug}-schema`} />
      <Navbar />
      <main className="pb-16 pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <BrandPortrait size="lg" priority />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#1e4fd6]">
              {guide.eyebrow}
            </p>
            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {guide.h1}
            </h1>
            <p className="mb-4 text-xl text-slate-600">{guide.intro}</p>
            <p className="mb-6 text-base text-slate-700">
              {guide.directAnswer}
            </p>
            <p className="mb-8 text-sm text-slate-500">
              {agentInfo.brokerage} · {officeInfo.address.full} ·{" "}
              <a
                href={agentInfo.phoneTel}
                className="font-medium text-[#1e4fd6]"
              >
                {agentInfo.phoneFormatted}
              </a>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild className="bg-[#1e4fd6] hover:bg-blue-700">
                <a href="#live-listings">Browse live listings</a>
              </Button>
              <CalendlyButton
                url="https://calendly.com/drjanduffy/showing"
                text="Schedule a showing"
              />
              <Button asChild variant="outline">
                <a href={agentInfo.phoneTel}>
                  <Phone className="mr-2 h-4 w-4" />
                  {agentInfo.phoneFormatted}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div id="live-listings">
          <OfficeListingsUnderHero
            title={guide.widgetTitle}
            subtitle={guide.widgetSubtitle}
            priceMin={guide.priceMin}
            priceMax={guide.priceMax}
            propertyTypes={guide.propertyTypes}
          />
        </div>

        <div className="container mx-auto px-4">
          <section className="mx-auto mb-14 max-w-5xl py-12">
            <div className="mb-6 flex items-center gap-3">
              <BrandPortrait size="sm" />
              <h2 className="text-3xl font-bold text-slate-900">
                Two ways to move forward
              </h2>
            </div>
            <ol className="mb-8 grid gap-4 md:grid-cols-2">
              <li className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#1e4fd6]">
                  1 · Click a RealScout photo
                </p>
                <p className="text-slate-600">
                  Open the live MLS listing—gallery, price, beds, baths, and
                  map. That is the real detail page; this site does not invent
                  placeholder homes.
                </p>
              </li>
              <li className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#1e4fd6]">
                  2 · Book Calendly
                </p>
                <p className="text-slate-600">
                  Schedule a consult or showing. Paste any addresses you liked
                  into the booking notes so Dr. Jan can request access.
                </p>
              </li>
            </ol>
            <div className="grid gap-4 md:grid-cols-3">
              {guide.bullets.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <h3 className="mb-2 font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CalendlyButton
                url="https://calendly.com/drjanduffy/showing"
                text="Book on Calendly"
              />
              <Button asChild variant="outline">
                <a href="#live-listings">Back to listing photos</a>
              </Button>
            </div>
            <SectionExtras headline="Prefer a live walkthrough? Book Calendly" />
          </section>

          <section className="mx-auto mb-14 max-w-5xl rounded-2xl bg-slate-900 p-8 text-white md:p-12">
            <h2 className="mb-6 text-3xl font-bold">Related searches</h2>
            <ul className="space-y-3">
              {guide.related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-blue-300 hover:text-white"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mx-auto mb-14 max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <BrandPortrait size="sm" />
              <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
            </div>
            <div className="space-y-4">
              {guide.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="mb-2 font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <CalendlyBookingSection
          title="Schedule your showing or buyer consult"
          subtitle="Pick a time. Bring addresses from the RealScout photos above—or ask Dr. Jan to pull a payment-fit shortlist first."
        />

        <InternalLinkHub
          title="Keep searching Las Vegas inventory"
          subtitle="More guides that lead back to live MLS photos and booking."
        />
      </main>
      <Footer />
    </>
  );
}
