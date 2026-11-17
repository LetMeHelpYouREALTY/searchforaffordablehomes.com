import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import BrandPortrait from "@/components/brand/BrandPortrait";
import SectionExtras from "@/components/brand/SectionExtras";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import CalendlyBookingSection from "@/components/calendly/CalendlyBookingSection";
import SchemaScript from "@/components/SchemaScript"; // schema.org JSON-LD
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Homes Under $400K Las Vegas | Affordable Homes",
  description:
    "Find affordable homes under $400K in Las Vegas and Henderson. Live MLS office listings with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 500-1942.",
  keywords: [
    "homes under 400k Las Vegas",
    "affordable homes under 400000",
    "cheap houses Las Vegas",
    "first time buyer homes Las Vegas",
  ],
};

const faqs = [
  {
    question: "Are there still homes under $400K in Las Vegas?",
    answer:
      "Yes—inventory fluctuates, but North Las Vegas and select valley corridors regularly list single-family homes, townhomes, and condos under $400K. Use the live RealScout office listings on this page for current MLS results.",
  },
  {
    question: "What should my payment look like under $400K?",
    answer:
      "Payment depends on rate, down payment, taxes, insurance, and HOA. Dr. Jan Duffy builds a payment model before you tour so you do not fall in love with a home outside your comfort zone.",
  },
];

const pageSchemas = combineSchemas(
  generateWebPageSchema({
    name: "Homes Under $400K Las Vegas",
    description:
      "Affordable homes under $400K with live MLS listings and buyer guidance from Dr. Jan Duffy.",
    url: "/affordable-homes/under-400k",
  }),
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Affordable Homes", url: "/affordable-homes" },
    { name: "Under $400K", url: "/affordable-homes/under-400k" },
  ]),
  generateFAQSchema(faqs),
);

export default function Under400kPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="under-400k-schema" />
      <Navbar />
      <main className="pb-16 pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <BrandPortrait size="lg" priority />
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#1e4fd6]">
              Affordable Homes · Under $400K
            </p>
            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Las Vegas Homes Under $400,000
            </h1>
            <p className="text-xl text-slate-600">
              Payment-first search for buyers who need entry pricing without
              sacrificing representation quality.
            </p>
          </div>
        </div>

        <OfficeListingsUnderHero
          title="MLS Homes Under $400K"
          subtitle="Live office listings capped at $400,000 for affordable homes shoppers."
          priceMin="150000"
          priceMax="400000"
        />

        <div className="container mx-auto px-4 py-12">
          <section className="mx-auto mb-12 max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <BrandPortrait size="sm" />
              <h2 className="text-3xl font-bold text-slate-900">
                What Buyers Should Know
              </h2>
            </div>
            <p className="mb-4 text-lg text-slate-600">
              Under-$400K homes can include townhomes, smaller single-family
              footprints, and homes needing light updates. Dr. Jan Duffy helps
              you price repairs, compare HOA costs, and write offers that still
              win.
            </p>
            <p className="text-slate-600">
              Explore related guides:{" "}
              <Link
                href="/affordable-homes"
                className="text-[#1e4fd6] underline"
              >
                affordable homes hub
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/north-las-vegas"
                className="text-[#1e4fd6] underline"
              >
                North Las Vegas
              </Link>
              , and{" "}
              <Link
                href="/affordable-homes/first-time-buyers"
                className="text-[#1e4fd6] underline"
              >
                first-time buyers
              </Link>
              .
            </p>
            <SectionExtras headline="Tour under-$400K options this week" />
          </section>

          <section className="mx-auto mb-12 max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">FAQ</h2>
            {faqs.map((faq) => (
              <div key={faq.question} className="mb-4 rounded-xl border p-5">
                <h3 className="mb-2 font-semibold">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
            <SectionExtras headline="Confirm what $400K buys in your ZIP" />
          </section>

          <section className="mx-auto max-w-3xl rounded-2xl bg-slate-900 p-8 text-center text-white">
            <BrandPortrait
              size="md"
              className="mx-auto mb-4 ring-offset-slate-900"
            />
            <h2 className="mb-3 text-2xl font-bold">Call Dr. Jan Duffy</h2>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center text-lg font-semibold text-blue-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              (702) 500-1942
            </a>
            <SectionExtras tone="dark" headline="Or schedule below" />
          </section>
        </div>

        <CalendlyBookingSection title="Book an Under-$400K Strategy Call" />
      </main>
      <Footer />
    </>
  );
}
