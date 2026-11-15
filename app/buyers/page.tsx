import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Search,
  FileText,
  Home,
  Key,
  CheckCircle,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import ScheduleConsultSection from "@/components/sections/ScheduleConsultSection";
import FAQSection from "@/components/sections/FAQSection";
import SchemaScript from "@/components/SchemaScript";
import {
  SITE_BRAND,
  AFFORDABLE_HOME_FAQS,
  AFFORDABLE_NEIGHBORHOODS,
  BUYER_SERVICE_STEPS,
  HOW_TO_BUY_STEPS,
} from "@/lib/affordable-homes-content";
import {
  pageSectionGraph,
  buyerServiceSchema,
  howToBuySchema,
} from "@/lib/section-schemas";

export const metadata: Metadata = {
  title: "Buy an Affordable Home in Las Vegas | Buyer Guide — Dr. Jan Duffy",
  description:
    "Luxury-level buyer representation for affordable Las Vegas homes. Pre-approval, neighborhood matching, offers, and closing. Call (702) 500-1942.",
  keywords: [
    "buy affordable home Las Vegas",
    "Las Vegas home buyer agent",
    "homes under 500000 Las Vegas",
    "first time home buyer Las Vegas",
    "buyer representation Las Vegas",
  ],
  alternates: { canonical: `${SITE_BRAND.url}/buyers` },
};

const buyingSteps = [
  {
    icon: DollarSign,
    title: HOW_TO_BUY_STEPS[0].name,
    description: HOW_TO_BUY_STEPS[0].text,
  },
  {
    icon: Search,
    title: HOW_TO_BUY_STEPS[1].name,
    description: HOW_TO_BUY_STEPS[1].text,
  },
  {
    icon: FileText,
    title: HOW_TO_BUY_STEPS[2].name,
    description: HOW_TO_BUY_STEPS[2].text,
  },
  {
    icon: Home,
    title: HOW_TO_BUY_STEPS[3].name,
    description: HOW_TO_BUY_STEPS[3].text,
  },
  {
    icon: Key,
    title: HOW_TO_BUY_STEPS[4].name,
    description: HOW_TO_BUY_STEPS[4].text,
  },
];

export default function BuyersPage() {
  const schemas = pageSectionGraph({
    path: "/buyers",
    name: "Buy an Affordable Home in Las Vegas | Buyer Guide",
    description:
      "Step-by-step buyer representation for affordable Las Vegas homes under $500K with Dr. Jan Duffy.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Buyers", path: "/buyers" },
    ],
    faqs: AFFORDABLE_HOME_FAQS,
    extra: [buyerServiceSchema(), howToBuySchema()],
  });

  return (
    <>
      <SchemaScript schema={schemas} id="buyers-section-schemas" />
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-end text-white overflow-hidden">
          <Image
            src="/images/hero/luxury-modern-home.jpg"
            alt="Luxury modern Las Vegas home — affordable home buyer representation by Dr. Jan Duffy"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
            <p className="text-sm tracking-[0.2em] uppercase text-amber-200/90 mb-3">
              Buyer Representation · Affordable Homes Las Vegas
              Properties
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl mb-5 leading-tight">
              Buy Your Affordable Las Vegas Home with Confidence
            </h1>
            <p className="aeo-answer text-lg md:text-xl text-white/90 max-w-2xl mb-8">
              When you hire Dr. Jan Duffy as your buyer’s agent, you get
              luxury-level process on under-$500K purchases — and in typical
              seller-paid commission structures, that representation costs you
              nothing at the closing table.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-8">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-amber-400 mr-1" /> Free
                buyer representation*
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-amber-400 mr-1" /> Full MLS
                + RealScout
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-amber-400 mr-1" /> Offer &
                inspection advocacy
              </span>
            </div>
            <a
              href={`tel:${SITE_BRAND.phoneTel}`}
              className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-slate-950 px-7 py-3.5 font-semibold"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {SITE_BRAND.phoneDisplay}
            </a>
          </div>
        </section>

        <RealScoutListings />

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
              How do you buy an affordable home in Las Vegas?
            </h2>
            <p className="aeo-answer text-lg text-slate-600 max-w-3xl mb-12">
              Pre-approve, define criteria, tour matched homes, write a
              comps-backed offer, then inspect and close — usually 30–45 days
              from acceptance to keys.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {buyingSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.title}
                    className="border-t-2 border-amber-700 pt-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-amber-800 font-semibold">
                        {i + 1}
                      </span>
                      <Icon className="h-5 w-5 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 capitalize">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
              What does luxury buyer service look like on an affordable
              purchase?
            </h2>
            <p className="aeo-answer text-lg text-slate-600 max-w-3xl mb-10">
              White-glove representation means private showings, data before
              every offer, and closing coordination — the same standard used on
              higher-priced deals.
            </p>
            <div className="space-y-8 max-w-4xl">
              {BUYER_SERVICE_STEPS.map((step) => (
                <div key={step.heading}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {step.heading}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {step.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
              Where should first-time and budget buyers look in Las Vegas?
            </h2>
            <p className="aeo-answer text-lg text-slate-600 max-w-3xl mb-10">
              Start with North Las Vegas, Mountain’s Edge, Centennial Hills,
              East Valley corridors, and Henderson’s Cadence for the strongest
              under-$500K selection.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AFFORDABLE_NEIGHBORHOODS.map((n) => (
                <Link
                  key={n.name}
                  href={
                    n.slug === "neighborhoods"
                      ? "/neighborhoods"
                      : `/neighborhoods/${n.slug}`
                  }
                  className="group border border-slate-200 p-5 hover:border-amber-700 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-amber-900 mb-1">
                    {n.name}
                  </h3>
                  <p className="text-sm text-amber-800 mb-2">{n.priceBand}</p>
                  <p className="text-sm text-slate-600 mb-3">{n.description}</p>
                  <span className="text-sm font-semibold inline-flex items-center text-slate-900">
                    View area guide <ArrowRight className="h-3 w-3 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <FAQSection
          faqs={AFFORDABLE_HOME_FAQS}
          title="Buyer FAQs for affordable Las Vegas homes"
          subtitle="Answer-first responses for search, maps, and AI assistants."
        />

        <section className="py-16 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to write your first offer?
            </h2>
            <p className="aeo-answer text-slate-300 max-w-xl mx-auto mb-8">
              Call {SITE_BRAND.phoneDisplay} for a buyer consult with Dr. Jan
              Duffy at {SITE_BRAND.address.full}.
            </p>
            <a
              href={`tel:${SITE_BRAND.phoneTel}`}
              className="inline-flex items-center bg-amber-500 text-slate-950 px-8 py-4 font-bold"
            >
              <Phone className="h-5 w-5 mr-2" />
              {SITE_BRAND.phoneDisplay}
            </a>
            <p className="mt-6 text-xs text-slate-500">
              *Buyer representation is typically covered by seller-paid
              commission structures; confirm current terms before writing.
            </p>
          </div>
        </section>
      </main>
      <ScheduleConsultSection />
      <Footer />
    </>
  );
}
