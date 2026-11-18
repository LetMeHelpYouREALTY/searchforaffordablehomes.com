import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import { Phone, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import CalendlyBookingSection from "@/components/calendly/CalendlyBookingSection";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import BrandPortrait from "@/components/brand/BrandPortrait";
import SectionExtras from "@/components/brand/SectionExtras";
import SchemaScript from "@/components/SchemaScript";
import InternalLinkHub from "@/components/seo/InternalLinkHub";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import { agentInfo, officeInfo, marketStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Las Vegas Homes for Sale | Click MLS Photos or Book a Tour",
  description:
    "Browse live Las Vegas and Henderson MLS listings. Click a RealScout photo for details, or schedule a showing with Dr. Jan Duffy on Calendly. Call (702) 500-1942.",
  keywords: [
    "Las Vegas homes for sale",
    "Henderson real estate",
    "MLS listings Las Vegas",
    "Summerlin homes",
    "houses for sale Las Vegas",
  ],
};

const listingFaqs = [
  {
    question: "How do I see full details for a Las Vegas listing on this site?",
    answer:
      "Click any photo in the RealScout office listings widget. That opens the live MLS listing with the gallery, price, beds, baths, square footage, and map.",
  },
  {
    question: "How do I schedule a showing with Dr. Jan Duffy?",
    answer:
      "Use Calendly on this page (https://calendly.com/drjanduffy/showing). Paste addresses from RealScout into the booking notes so access can be requested before you arrive.",
  },
  {
    question: "How competitive is the Las Vegas housing market in 2026?",
    answer: `As of ${marketStats.lastUpdated}, Las Vegas median pricing is about ${marketStats.lasVegas.medianPriceFormatted} with roughly ${marketStats.lasVegas.daysOnMarket} average days on market and ${marketStats.lasVegas.inventoryMonths} months of inventory. Well-priced homes still move; pre-approval plus fast tour booking helps.`,
  },
  {
    question: "How much do I need for a down payment in Las Vegas?",
    answer:
      "Down payment requirements vary by loan type: FHA loans require 3.5%, conventional loans typically 3-20%, VA loans 0% for eligible veterans. Nevada also offers down payment assistance programs for first-time buyers. Dr. Jan can connect you with lenders who specialize in various loan programs.",
  },
];

const listingsSchemas = combineSchemas(
  generateWebPageSchema({
    name: "Las Vegas Homes for Sale",
    description:
      "Live MLS property listings for Las Vegas, Henderson, and Summerlin — click RealScout photos or book Calendly.",
    url: "/listings",
  }),
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Listings", url: "/listings" },
  ]),
  generateFAQSchema(listingFaqs),
);

const popularSearches = [
  {
    name: "Single-family homes",
    href: "/listings/single-family",
    blurb: "Click SFR photos → book tour",
  },
  {
    name: "Homes under $500K",
    href: "/listings/under-500k",
    blurb: "Payment-band MLS filter",
  },
  {
    name: "Newest listings",
    href: "/listings/newest",
    blurb: "Just listed, newest first",
  },
  {
    name: "Condos & townhomes",
    href: "/listings/condos-townhomes",
    blurb: "MF/TC inventory + Calendly",
  },
  {
    name: "Henderson homes",
    href: "/listings/henderson",
    blurb: "Henderson-focused search",
  },
  {
    name: "Summerlin guide",
    href: "/neighborhoods/summerlin",
    blurb: "Neighborhood context + MLS",
  },
];

const priceRanges = [
  {
    range: "Under $400K",
    description: "Condos, townhomes, entry single-family",
    href: "/affordable-homes/under-400k",
  },
  {
    range: "Under $500K",
    description: "Payment-friendly valley inventory",
    href: "/listings/under-500k",
  },
  {
    range: "Single-family focus",
    description: "Detached homes with live MLS photos",
    href: "/listings/single-family",
  },
  {
    range: "Newest on market",
    description: "Fresh MLS listings, sorted newest first",
    href: "/listings/newest",
  },
  {
    range: "$600K+ / luxury",
    description: "Premium corridors and larger footprints",
    href: "/luxury-homes",
  },
];

const neighborhoodLinks = [
  {
    name: "Summerlin",
    href: "/neighborhoods/summerlin",
    description:
      "Master-planned living with parks, trails, and Red Rock access",
    medianPrice: marketStats.summerlin.medianPriceFormatted,
  },
  {
    name: "Henderson",
    href: "/listings/henderson",
    description: "City inventory with live MLS photos and Calendly tours",
    medianPrice: marketStats.henderson.medianPriceFormatted,
  },
  {
    name: "North Las Vegas",
    href: "/neighborhoods/north-las-vegas",
    description: "Payment-friendly inventory and new construction corridors",
    medianPrice: "$385,000",
  },
  {
    name: "Green Valley",
    href: "/neighborhoods/green-valley",
    description: "Henderson golf, shopping, and mature landscaping",
    medianPrice: "$520,000",
  },
  {
    name: "Centennial Hills",
    href: "/neighborhoods/centennial-hills",
    description: "Northwest Las Vegas with mountain proximity",
    medianPrice: "$495,000",
  },
  {
    name: "Mountain’s Edge",
    href: "/neighborhoods/mountains-edge",
    description: "Southwest master-planned value inventory",
    medianPrice: "$475,000",
  },
];

export default function ListingsPage() {
  return (
    <>
      <SchemaScript schema={listingsSchemas} id="listings-hub-schema" />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              Live MLS · Click a photo or book a tour
            </div>
            <div className="mb-6 flex justify-center">
              <BrandPortrait size="lg" priority />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
              Las Vegas Homes for Sale
            </h1>
            <p className="mb-4 text-xl text-slate-600">
              Click any RealScout listing photo for live MLS details—or schedule
              a showing with Dr. Jan Duffy on Calendly.
            </p>
            <p className="mb-6 text-sm text-slate-500">
              {agentInfo.brokerage} · {officeInfo.address.full} ·{" "}
              <a
                href={agentInfo.phoneTel}
                className="font-medium text-[#1e4fd6]"
              >
                {agentInfo.phoneFormatted}
              </a>
            </p>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#live-listings"
                className="inline-flex items-center justify-center rounded-md bg-[#1e4fd6] px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Browse live listing photos
              </a>
              <CalendlyButton
                url="https://calendly.com/drjanduffy/showing"
                text="Schedule a showing"
              />
              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Phone className="mr-2 h-4 w-4" />
                {agentInfo.phoneFormatted}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-green-500" /> Live MLS
                photos
              </span>
              <span className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-green-500" /> Calendly
                tour booking
              </span>
              <span className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-green-500" /> No fake
                detail pages
              </span>
            </div>
          </div>
        </div>

        <div id="live-listings">
          <OfficeListingsUnderHero
            title="Click a listing photo for MLS details"
            subtitle="Live office listings for Las Vegas, Henderson, and Summerlin across a wide price band. Ready to walk through? Book Calendly with Berkshire Hathaway HomeServices Nevada Properties agent Dr. Jan Duffy."
            priceMin="100000"
            priceMax="2500000"
          />
        </div>

        <div className="container mx-auto px-4">
          {/* Popular Searches Section */}
          <section className="mx-auto mb-16 max-w-6xl pt-12">
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
              Focused searches that lead to tours
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600">
              Each guide opens live RealScout photos for that intent. Click an
              image for the listing, then book Calendly when you want inside.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {popularSearches.map((search) => (
                <Link
                  key={search.name}
                  href={search.href}
                  className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-lg"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600">
                      {search.name}
                    </h3>
                    <span className="text-sm text-slate-500">
                      {search.blurb}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </section>

          {/* Price Range Guide */}
          <section className="mx-auto mb-16 max-w-6xl rounded-2xl bg-slate-50 p-8 md:p-12">
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
              Start by payment band
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600">
              Open a band, click RealScout photos that fit, then schedule on
              Calendly. Market snapshot ({marketStats.lastUpdated}): Las Vegas
              median about {marketStats.lasVegas.medianPriceFormatted}.
            </p>
            <div className="space-y-4">
              {priceRanges.map((price) => (
                <Link
                  key={price.range}
                  href={price.href}
                  className="flex flex-col items-start justify-between rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 md:flex-row md:items-center"
                >
                  <div className="mb-2 flex items-center md:mb-0">
                    <DollarSign className="mr-3 h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {price.range}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {price.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-blue-600">
                    Open live photos →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Neighborhood Overview */}
          <section className="mx-auto mb-16 max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
              Browse by area, then book the tour
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600">
              Open a neighborhood guide for context, click live RealScout photos
              on that page, and schedule showings on Calendly when a home fits.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {neighborhoodLinks.map((neighborhood) => (
                <Link
                  key={neighborhood.name}
                  href={neighborhood.href}
                  className="rounded-lg border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {neighborhood.name}
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    {neighborhood.description}
                  </p>
                  <p className="text-sm text-slate-500">
                    Median:{" "}
                    <strong className="text-slate-900">
                      {neighborhood.medianPrice}
                    </strong>
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/neighborhoods"
                className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
              >
                Explore all neighborhoods{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mx-auto mb-16 max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
              Las Vegas market snapshot
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600">
              Figures as of {marketStats.lastUpdated}. Use them to set a payment
              target, then click live photos above—not a static count.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-blue-50 p-6 text-center">
                <div className="mb-1 text-3xl font-bold text-blue-600">
                  {marketStats.lasVegas.medianPriceFormatted.replace(
                    ",000",
                    "K",
                  )}
                </div>
                <div className="text-sm text-slate-600">Median home price</div>
              </div>
              <div className="rounded-lg bg-blue-50 p-6 text-center">
                <div className="mb-1 text-3xl font-bold text-blue-600">
                  {marketStats.lasVegas.daysOnMarket}
                </div>
                <div className="text-sm text-slate-600">Avg days on market</div>
              </div>
              <div className="rounded-lg bg-blue-50 p-6 text-center">
                <div className="mb-1 text-3xl font-bold text-blue-600">
                  {marketStats.lasVegas.activeListings.toLocaleString()}
                </div>
                <div className="text-sm text-slate-600">Active listings</div>
              </div>
              <div className="rounded-lg bg-blue-50 p-6 text-center">
                <div className="mb-1 text-3xl font-bold text-blue-600">
                  {marketStats.lasVegas.yearOverYearChange}
                </div>
                <div className="text-sm text-slate-600">Year-over-year</div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mx-auto mb-16 max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
              FAQ — listings, photos, and tours
            </h2>
            <div className="space-y-4">
              {listingFaqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-slate-50 p-6">
                  <h3 className="mb-2 font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mx-auto max-w-4xl rounded-2xl bg-blue-600 p-8 text-center text-white md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to tour a home you clicked?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Book Calendly with Dr. Jan Duffy and paste the RealScout addresses
              in the notes—or call to line up same-day access.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <CalendlyButton
                url="https://calendly.com/drjanduffy/showing"
                text="Schedule on Calendly"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 hover:bg-blue-50"
              />
              <a
                href="#live-listings"
                className="inline-flex items-center justify-center rounded-md bg-blue-500 px-8 py-4 text-lg font-bold text-white hover:bg-blue-400"
              >
                Back to listing photos
              </a>
              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-4 text-lg font-bold text-white hover:bg-blue-500"
              >
                <Phone className="mr-2 h-5 w-5" />
                {agentInfo.phoneFormatted}
              </a>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          Last updated: {marketStats.lastUpdated}
        </div>
      </main>
      <div className="container mx-auto px-4">
        <SectionExtras headline="Talk affordable homes with Dr. Jan" />
      </div>
      <InternalLinkHub />
      <CalendlyBookingSection
        title="Schedule your showing or buyer consult"
        subtitle="Pick a time. Bring RealScout addresses from the photos above—or ask Dr. Jan to build a payment-fit shortlist first."
      />
      <Footer />
    </>
  );
}
