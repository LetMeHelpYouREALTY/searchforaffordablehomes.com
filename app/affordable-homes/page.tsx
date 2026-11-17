import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, MapPin, DollarSign, Home } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import BrandPortrait from "@/components/brand/BrandPortrait";
import SectionExtras from "@/components/brand/SectionExtras";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import CalendlyBookingSection from "@/components/calendly/CalendlyBookingSection";
import SchemaScript from "@/components/SchemaScript"; // schema.org JSON-LD
import InternalLinkHub from "@/components/seo/InternalLinkHub";
import AuthorityLinks from "@/components/seo/AuthorityLinks";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  generateServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Affordable Homes Las Vegas | Search Value MLS Listings",
  description:
    "Search for affordable homes in Las Vegas, Henderson, and Summerlin. Dr. Jan Duffy filters MLS inventory by payment fit. Call (702) 500-1942.",
  keywords: [
    "affordable homes",
    "affordable homes Las Vegas",
    "search for affordable homes",
    "homes under 500k Las Vegas",
    "value homes Henderson",
  ],
};

const faqs = [
  {
    question: "What is an affordable home in Las Vegas in 2026?",
    answer:
      "Most buyers searching for affordable homes target roughly $200,000–$550,000 depending on rate, down payment, and HOA dues. Dr. Jan Duffy builds a payment-first shortlist from live MLS data.",
  },
  {
    question: "Which areas have more affordable homes?",
    answer:
      "North Las Vegas, Centennial Hills, Mountain’s Edge, and select Henderson corridors often list more payment-friendly inventory. Availability changes daily.",
  },
  {
    question: "Do I need 20% down for an affordable home?",
    answer:
      "No. FHA, VA, and some conventional loans allow lower down payments. Dr. Jan introduces trusted lenders and keeps your offer strategy aligned with your payment comfort.",
  },
];

const pageSchemas = combineSchemas(
  generateWebPageSchema({
    name: "Affordable Homes Las Vegas",
    description:
      "Pillar guide to searching for affordable homes in Las Vegas with Dr. Jan Duffy.",
    url: "/affordable-homes",
  }),
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Affordable Homes", url: "/affordable-homes" },
  ]),
  generateServiceSchema({
    name: "Affordable Homes Search Las Vegas",
    description:
      "Buyer representation focused on affordable homes and payment-fit MLS search.",
    url: "/affordable-homes",
  }),
  generateFAQSchema(faqs),
);

export default function AffordableHomesPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="affordable-homes-schema" />
      <Navbar />
      <main className="pb-16 pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <BrandPortrait size="lg" priority />
            </div>
            <p className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              Affordable Homes
            </p>
            <p className="mb-4 text-sm font-medium text-slate-600">
              By Dr. Jan Duffy, REALTOR®
            </p>
            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Affordable Homes in Las Vegas Without Cutting Corners
            </h1>
            <p className="mb-6 text-xl text-slate-600">
              Luxury-level representation from Dr. Jan Duffy — MLS access,
              payment planning, and negotiation that protects your equity from
              day one.
            </p>
            <p className="text-sm text-slate-500">
              Berkshire Hathaway HomeServices Nevada Properties · 9406 W Lake
              Mead Blvd, Suite 100, Las Vegas, NV 89134 ·{" "}
              <a href="tel:+17025001942" className="font-medium text-[#1e4fd6]">
                (702) 500-1942
              </a>
            </p>
          </div>
        </div>

        <OfficeListingsUnderHero
          title="Live Affordable Homes Inventory"
          subtitle="Office listings filtered for value-focused buyers across the Las Vegas Valley."
        />

        <div className="container mx-auto px-4">
          <section className="mx-auto mb-16 max-w-5xl py-12">
            <div className="mb-6 flex items-center gap-3">
              <BrandPortrait size="sm" />
              <h2 className="text-3xl font-bold text-slate-900">
                How We Define Affordable Homes
              </h2>
            </div>
            <p className="mb-6 text-lg text-slate-600">
              Affordable means payment fit. Sticker price alone can mislead when
              HOA, taxes, insurance, and rate stack up. Dr. Jan maps your
              monthly target to real MLS homes you can actually close.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: DollarSign,
                  title: "Payment First",
                  text: "We reverse-engineer list price from the payment you can sustain.",
                },
                {
                  icon: Home,
                  title: "MLS + Off-Market",
                  text: "Full RealScout access plus quiet opportunities when they appear.",
                },
                {
                  icon: MapPin,
                  title: "Corridor Matching",
                  text: "Square footage, amenities, and commute times—not vague labels.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <Icon className="mb-3 h-6 w-6 text-[#1e4fd6]" />
                  <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <SectionExtras headline="Get your payment-fit shortlist" />
          </section>

          <section className="mx-auto mb-16 max-w-5xl rounded-2xl bg-slate-900 p-8 text-white md:p-12">
            <div className="mb-6 flex items-center gap-3">
              <BrandPortrait size="sm" className="ring-offset-slate-900" />
              <h2 className="text-3xl font-bold">Start With These Guides</h2>
            </div>
            <ul className="space-y-3">
              {[
                {
                  href: "/affordable-homes/under-400k",
                  label: "Homes under $400K in Las Vegas",
                },
                {
                  href: "/affordable-homes/first-time-buyers",
                  label: "First-time buyers: affordable path",
                },
                {
                  href: "/neighborhoods/north-las-vegas",
                  label: "North Las Vegas value inventory",
                },
                {
                  href: "/buyers/first-time-buyers",
                  label: "Full first-time buyer playbook",
                },
              ].map((item) => (
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
            <SectionExtras
              tone="dark"
              headline="Prefer a live walkthrough? Book Calendly"
            />
          </section>

          <section className="mx-auto mb-16 max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <BrandPortrait size="sm" />
              <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <h3 className="mb-2 font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <SectionExtras headline="Ask Dr. Jan your budget question live" />
          </section>

          <section className="mx-auto mb-8 max-w-4xl rounded-2xl bg-[#1e4fd6] p-8 text-center text-white md:p-12">
            <BrandPortrait
              size="md"
              className="mx-auto mb-4 ring-offset-[#1e4fd6]"
            />
            <h2 className="mb-3 text-3xl font-bold">Ready to Search?</h2>
            <p className="mb-6 text-blue-100">
              Call or text Dr. Jan Duffy — she answers her own phone.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 font-semibold text-[#1e4fd6]"
            >
              <Phone className="mr-2 h-5 w-5" />
              (702) 500-1942
            </a>
            <SectionExtras
              tone="dark"
              headline="Or grab a calendar slot below"
            />
          </section>
        </div>

        <InternalLinkHub
          title="Related affordable homes guides"
          subtitle="Keep exploring payment-fit neighborhoods, programs, and live MLS inventory."
        />
        <AuthorityLinks />
        <CalendlyBookingSection />
      </main>
      <Footer />
    </>
  );
}
