import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import BrandPortrait from "@/components/brand/BrandPortrait";
import SectionExtras from "@/components/brand/SectionExtras";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import CalendlyBookingSection from "@/components/calendly/CalendlyBookingSection";
import SchemaScript from "@/components/SchemaScript"; // schema.org JSON-LD
import InternalLinkHub from "@/components/seo/InternalLinkHub";
import AnswerBlock from "@/components/seo/AnswerBlock";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  generateHowToSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "First-Time Buyers Affordable Homes Las Vegas",
  description:
    "First-time buyers: search for affordable homes in Las Vegas with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Pre-approval path, MLS shortlists, and Calendly booking. Call (702) 500-1942.",
  keywords: [
    "first time buyer affordable homes",
    "first time home buyer Las Vegas",
    "affordable homes Las Vegas first time",
  ],
};

const faqs = [
  {
    question:
      "What is the first step for first-time buyers seeking affordable homes?",
    answer:
      "Get a lender pre-approval that states a payment comfort zone, then let Dr. Jan Duffy filter MLS inventory to that payment—not a wish-list price.",
  },
  {
    question: "How long does it take to buy an affordable home in Las Vegas?",
    answer:
      "Most financed purchases close in 30–45 days after offer acceptance. Cash can close faster. Timeline depends on inspections, appraisal, and loan conditions.",
  },
];

const steps = [
  "Confirm payment comfort with a trusted lender",
  "Map commute and square-footage must-haves",
  "Tour a shortlist of affordable homes that fit",
  "Write a clean offer with inspection protection",
  "Close with coordinated title, lender, and escrow",
];

const pageSchemas = combineSchemas(
  generateWebPageSchema({
    name: "First-Time Buyers Affordable Homes Las Vegas",
    description:
      "Step-by-step path for first-time buyers searching for affordable homes in Las Vegas.",
    url: "/affordable-homes/first-time-buyers",
    dateModified: "2026-11-17",
    speakableCssSelectors: ["h1", ".aeo-answers h3", ".aeo-answers p"],
  }),
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Affordable Homes", url: "/affordable-homes" },
    {
      name: "First-Time Buyers",
      url: "/affordable-homes/first-time-buyers",
    },
  ]),
  generateFAQSchema(faqs),
  generateHowToSchema({
    name: "How first-time buyers find affordable homes in Las Vegas",
    description:
      "Payment-first process with Dr. Jan Duffy for first-time buyers searching affordable Las Vegas MLS inventory.",
    url: "/affordable-homes/first-time-buyers",
    totalTime: "P45D",
    steps: [
      {
        name: "Confirm payment comfort with a trusted lender",
        text: "Get a pre-approval that states a sustainable monthly payment, not just a max purchase price.",
      },
      {
        name: "Map commute and square-footage must-haves",
        text: "List non-negotiables (beds, commute, HOA) so MLS filtering stays payment-fit.",
      },
      {
        name: "Tour a shortlist of affordable homes that fit",
        text: "Dr. Jan Duffy schedules tours of homes that match payment comfort and location needs.",
      },
      {
        name: "Write a clean offer with inspection protection",
        text: "Negotiate with inspection contingencies and clear timelines that protect first-time buyers.",
      },
      {
        name: "Close with coordinated title, lender, and escrow",
        text: "Most financed purchases close in 30–45 days after offer acceptance.",
      },
    ],
  }),
);

export default function AffordableFirstTimeBuyersPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="affordable-ftb-schema" />
      <Navbar />
      <main className="pb-16 pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <BrandPortrait size="lg" priority />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              First-Time Buyers: Affordable Homes Path
            </h1>
            <p className="text-xl text-slate-600">
              Clear steps, live MLS listings, and luxury-level advocacy from Dr.
              Jan Duffy so your first purchase starts with payment confidence.
            </p>
          </div>
        </div>

        <OfficeListingsUnderHero
          title="Starter Inventory for First-Time Buyers"
          subtitle="Affordable homes currently listed for sale — filtered for value-focused buyers."
        />

        <div className="container mx-auto px-4 py-10">
          <AnswerBlock title="First-time buyer quick answers" items={faqs} />
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mx-auto mb-12 max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <BrandPortrait size="sm" />
              <h2 className="text-3xl font-bold text-slate-900">
                Your 5-Step Path
              </h2>
            </div>
            <ol className="space-y-3">
              {steps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1e4fd6] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-slate-600">
              Also see the full{" "}
              <Link
                href="/buyers/first-time-buyers"
                className="text-[#1e4fd6] underline"
              >
                first-time buyer guide
              </Link>{" "}
              and{" "}
              <Link
                href="/affordable-homes/under-400k"
                className="text-[#1e4fd6] underline"
              >
                homes under $400K
              </Link>
              .
            </p>
            <SectionExtras headline="Walk the path on a live call" />
          </section>

          <section className="mx-auto mb-12 max-w-4xl rounded-2xl bg-slate-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">FAQ</h2>
            {faqs.map((faq) => (
              <div key={faq.question} className="mb-4">
                <h3 className="mb-1 flex items-center gap-2 font-semibold">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  {faq.question}
                </h3>
                <p className="pl-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
            <SectionExtras headline="Bring your pre-approval questions" />
          </section>

          <section className="mx-auto max-w-3xl text-center">
            <BrandPortrait size="md" className="mx-auto mb-4" />
            <a
              href="tel:+17025001942"
              className="inline-flex items-center text-lg font-semibold text-[#1e4fd6]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (702) 500-1942
            </a>
            <SectionExtras headline="Book your first-time buyer consult" />
          </section>
        </div>

        <InternalLinkHub title="Next steps for first-time buyers" />
        <CalendlyBookingSection title="Schedule Your First-Time Buyer Consult" />
      </main>
      <Footer />
    </>
  );
}
