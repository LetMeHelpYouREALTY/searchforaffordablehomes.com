import Navbar from "@/components/layouts/Navbar";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layouts/Footer";
import BrandPortrait from "@/components/brand/BrandPortrait";
import SectionExtras from "@/components/brand/SectionExtras";
import CalendlyBookingSection from "@/components/calendly/CalendlyBookingSection";
import SchemaScript from "@/components/SchemaScript";
import Link from "next/link";
import { Phone, Home as HomeIcon, TrendingUp, Shield, Users, MapPin } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import {
  combineSchemas,
  generateFAQSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

const homeFaqs = [
  {
    question: "What counts as an affordable home in Las Vegas?",
    answer:
      "On this site, affordable homes usually means MLS listings that fit a buyer’s payment comfort—often $200K–$550K depending on down payment, rate, and HOA. Dr. Jan Duffy filters for payment fit, not just list price.",
  },
  {
    question: "Can I search for affordable homes without a huge down payment?",
    answer:
      "Yes. FHA, VA, and some conventional programs start with low down payments. Dr. Jan connects buyers with trusted local lenders and matches inventory to the payment you can sustain.",
  },
  {
    question: "Where are affordable homes in Las Vegas right now?",
    answer:
      "Value inventory commonly shows up in North Las Vegas, Centennial Hills, Mountain’s Edge, and select Henderson corridors. Listings change daily—use the live RealScout office listings below the hero on every page.",
  },
  {
    question: "How do I schedule a tour with Dr. Jan Duffy?",
    answer:
      "Book instantly on Calendly, call (702) 222-1964, or use the schedule section on any page. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
  },
];

export default async function Home() {
  const config = await getPageDomainConfig();

  const pageSchemas = combineSchemas(
    generateWebPageSchema({
      name: "Search for Affordable Homes in Las Vegas",
      description: config.description,
      url: "/",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Affordable Homes", url: "/affordable-homes" },
    ]),
    generateFAQSchema(homeFaqs)
  );

  return (
    <>
      <SchemaScript schema={pageSchemas} id="home-schema" />
      <Navbar />
      <main>
        {/* Hero — brand first, one headline, one CTA group, full-bleed image */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Image/hero_bg_1.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90" />
          <div className="relative z-10 container mx-auto flex min-h-[88vh] flex-col items-center justify-center px-4 py-24 text-center md:py-28">
            <BrandPortrait size="xl" priority className="mb-6 ring-offset-slate-950" />
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Search for Affordable Homes
            </p>
            <h1 className="mb-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {config.heroHeadline}
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/85 md:text-xl">
              {config.heroSubheadline}
            </p>

            <div className="mb-8 flex w-full max-w-xl justify-center">
              <div
                className="w-full"
                dangerouslySetInnerHTML={{
                  __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
                }}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center rounded-md bg-[#1e4fd6] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (702) 222-1964
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Schedule on Calendly
              </a>
            </div>
          </div>
        </section>

        {/* RealScout office listings under hero on every page pattern */}
        <OfficeListingsUnderHero />

        {/* Value Proposition */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <div className="mb-5 flex justify-center">
                <BrandPortrait size="md" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Luxury Representation for Affordable Homes
              </h2>
              <p className="text-lg text-slate-600">
                Top 1% Las Vegas REALTOR® Dr. Jan Duffy helps buyers who want
                payment comfort without cutting corners on negotiation or due diligence.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Shield,
                  title: "Trusted Agent",
                  desc: "Integrity-first advice for every offer and inspection",
                },
                {
                  icon: Users,
                  title: "Referral Network",
                  desc: "Nationwide referrals for seamless moves into Nevada",
                },
                {
                  icon: TrendingUp,
                  title: "$127M+ Sold",
                  desc: "Proven results across every Las Vegas price band",
                },
                {
                  icon: HomeIcon,
                  title: "Affordable Focus",
                  desc: "MLS filters tuned to value and payment fit",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 p-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto max-w-6xl">
              <SectionExtras headline="Get a payment-fit home shortlist this week" />
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="bg-slate-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <div className="mb-5 flex justify-center">
                <BrandPortrait size="md" className="ring-offset-slate-900" />
              </div>
              <h2 className="mb-3 text-3xl font-bold">
                Las Vegas Affordable Homes Snapshot
              </h2>
              <p className="text-slate-400">Current market context — updated regularly</p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: "$450K", label: "Valley Median", sub: "+4.2% YoY" },
                { value: "28", label: "Avg Days on Market", sub: "" },
                { value: "4,850", label: "Active Listings", sub: "" },
                { value: "2.1", label: "Months Inventory", sub: "" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="mb-1 text-4xl font-bold text-blue-400">{value}</div>
                  <div className="text-sm text-slate-300">{label}</div>
                  {sub && <div className="mt-1 text-xs text-emerald-400">{sub}</div>}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/affordable-homes"
                className="inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Affordable Homes Guide
              </Link>
            </div>
            <div className="mx-auto max-w-4xl">
              <SectionExtras
                tone="dark"
                headline="Want numbers for your ZIP and budget?"
              />
            </div>
          </div>
        </section>

        {/* Neighborhood value corridors */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <div className="mb-5 flex justify-center">
                <BrandPortrait size="md" />
              </div>
              <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Where Affordable Homes Still Show Up
              </h2>
              <p className="text-lg text-slate-600">
                Explore value corridors with square footage, amenities, and commute context—not
                vague lifestyle claims.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
              {[
                {
                  href: "/neighborhoods/north-las-vegas",
                  name: "North Las Vegas",
                  note: "Often the strongest entry-price inventory",
                },
                {
                  href: "/neighborhoods/centennial-hills",
                  name: "Centennial Hills",
                  note: "Mountain proximity with mid-range pricing",
                },
                {
                  href: "/neighborhoods/mountains-edge",
                  name: "Mountain's Edge",
                  note: "Southwest master-planned value options",
                },
                {
                  href: "/neighborhoods/henderson",
                  name: "Henderson",
                  note: "Master-planned communities across price bands",
                },
                {
                  href: "/affordable-homes/under-400k",
                  name: "Under $400K",
                  note: "Payment-first shortlist for first-time buyers",
                },
                {
                  href: "/buyers/first-time-buyers",
                  name: "First-Time Buyers",
                  note: "Programs, timelines, and offer strategy",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <div className="mb-2 flex items-center gap-2 text-[#1e4fd6]">
                    <MapPin className="h-4 w-4" />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <p className="text-sm text-slate-600">{item.note}</p>
                </Link>
              ))}
            </div>
            <div className="mx-auto max-w-5xl">
              <SectionExtras headline="Tour the corridor that matches your commute" />
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection
          faqs={homeFaqs}
          title="Affordable Homes FAQ"
          subtitle="Direct answers for buyers searching Las Vegas value inventory"
        />

        <CalendlyBookingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
