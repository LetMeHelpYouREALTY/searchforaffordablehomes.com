import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Shield,
  Key,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import SchemaScript from "@/components/SchemaScript";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import {
  SITE_BRAND,
  MARKET_SNAPSHOT,
  AFFORDABLE_NEIGHBORHOODS,
  BUYER_SERVICE_STEPS,
  AFFORDABLE_HOME_FAQS,
} from "@/lib/affordable-homes-content";
import { homepageSectionGraph } from "@/lib/section-schemas";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  return {
    title:
      "Buy an Affordable Home in Las Vegas | Luxury Buyer Representation — Dr. Jan Duffy",
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical: SITE_BRAND.url },
    openGraph: {
      title: "Buy an Affordable Home in Las Vegas",
      description: config.description,
      url: SITE_BRAND.url,
      type: "website",
      images: [
        {
          url: `${SITE_BRAND.url}/images/hero/luxury-vegas-estate.jpg`,
          width: 1920,
          height: 1280,
          alt: "Luxury Las Vegas home exterior — affordable home buying with white-glove realtor service",
        },
      ],
    },
  };
}

export default async function Home() {
  const config = await getPageDomainConfig();
  const schemas = homepageSectionGraph();

  return (
    <>
      <SchemaScript schema={schemas} id="homepage-section-schemas" />
      <Navbar />
      <main>
        {/* Hero — brand + one H1 + one answer + one CTA + full-bleed luxury image */}
        <section className="relative min-h-[88vh] flex items-end md:items-center text-white overflow-hidden">
          <Image
            src="/images/hero/luxury-vegas-estate.jpg"
            alt="Luxury Las Vegas estate exterior representing white-glove realtor service for affordable home buyers"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-slate-900/30" />
          <div className="relative z-10 container mx-auto px-4 pb-16 pt-32 md:py-28">
            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-amber-200/90 mb-4 font-medium">
              {SITE_BRAND.agent} · {SITE_BRAND.brokerage}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl leading-[1.1] mb-5">
              {config.heroHeadline}
            </h1>
            <p className="aeo-answer text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              Under-$500K Las Vegas homes with luxury-level buyer representation
              — private tours, comps before every offer, and closing advocacy
              from Dr. Jan Duffy. {MARKET_SNAPSHOT.valleyMedianNote}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 px-7 py-3.5 font-semibold transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 222-1964
              </a>
              <Link
                href="/buyers"
                className="inline-flex items-center justify-center border border-white/70 hover:bg-white/10 px-7 py-3.5 font-semibold transition-colors"
              >
                How Buying Works
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div className="mb-4 max-w-xl">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
                }}
              />
            </div>
          </div>
        </section>

        {/* NAP / GEO strip */}
        <section
          className="bg-slate-100 border-b border-slate-200 py-6"
          aria-label="Office location and contact"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-slate-700 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">
                  {SITE_BRAND.agent}
                </p>
                <p>{SITE_BRAND.address.full}</p>
                <p>License {SITE_BRAND.license}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${SITE_BRAND.phoneTel}`}
                className="underline font-medium text-slate-900"
              >
                Call {SITE_BRAND.phoneDisplay}
              </a>
              <a
                href={SITE_BRAND.gbpShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium text-slate-900"
              >
                View Google Business Profile
              </a>
              <Link
                href="/contact"
                className="underline font-medium text-slate-900"
              >
                Get Directions / Contact
              </Link>
            </div>
          </div>
        </section>

        {/* Why luxury service on affordable buys */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/agent/luxury-realtor-professional.jpg"
                alt="Professional luxury realtor ready to represent affordable Las Vegas home buyers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
                Why use a luxury realtor to buy an affordable Las Vegas home?
              </h2>
              <p className="aeo-answer text-lg text-slate-700 mb-6 leading-relaxed">
                Affordable deals still need sharp negotiation. Dr. Jan Duffy
                brings Berkshire Hathaway–backed process discipline to
                under-$500K purchases so you do not overpay, miss credits, or
                waive protections that matter at closing.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Private showings scheduled around your workday",
                  "Offer strategy built from current comps — not guesswork",
                  "Inspection and repair advocacy before you fund",
                  "Typically $0 buyer-side fee when seller pays commission",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-slate-700"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center font-semibold text-amber-800 hover:text-amber-950"
              >
                Meet Dr. Jan Duffy <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Market snapshot — answer-first H2 */}
        <section className="py-16 bg-slate-950 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3 max-w-3xl">
              What does affordable mean in Las Vegas right now?
            </h2>
            <p className="aeo-answer text-lg text-slate-300 max-w-3xl mb-10">
              As of {MARKET_SNAPSHOT.asOf}, most affordable-home shoppers target
              under $500,000 — the valley’s deepest inventory band. Valley
              median list context sits near {MARKET_SNAPSHOT.valleyMedianList},
              with {MARKET_SNAPSHOT.daysOnMarket} typical market time on
              well-priced homes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
              {[
                {
                  value: MARKET_SNAPSHOT.valleyMedianList,
                  label: "Valley median list context",
                },
                { value: "Under $500K", label: "Primary search band" },
                { value: "~28–31", label: "Days on market (priced right)" },
                {
                  value: "5,500+",
                  label: "Under-$500K listings reported mid-2026",
                },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl md:text-4xl font-semibold text-amber-400 mb-1">
                    {value}
                  </div>
                  <div className="text-slate-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-slate-500 max-w-3xl">
              Figures synthesize early–mid 2026 public market reports. Always
              verify current MLS numbers before writing an offer.
            </p>
          </div>
        </section>

        {/* Neighborhoods ItemList section */}
        <section className="py-16 md:py-20 bg-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
              Which Las Vegas areas have more affordable homes?
            </h2>
            <p className="aeo-answer text-lg text-slate-600 max-w-3xl mb-10">
              North Las Vegas, Mountain’s Edge, Centennial Hills, East Valley
              corridors, and Henderson’s Cadence consistently show stronger
              under-$500K selection than Summerlin or The Ridges.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AFFORDABLE_NEIGHBORHOODS.map((n) => (
                <article
                  key={n.name}
                  className="border-t-2 border-amber-700 pt-5"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {n.name}
                  </h3>
                  <p className="text-amber-800 font-medium text-sm mb-2">
                    {n.priceBand}
                  </p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {n.description}
                  </p>
                  <Link
                    href={
                      `/neighborhoods/${n.slug === "neighborhoods" ? "" : n.slug}`.replace(
                        /\/$/,
                        "",
                      ) || "/neighborhoods"
                    }
                    className="text-sm font-semibold text-slate-900 underline underline-offset-4"
                  >
                    Explore {n.name.split("/")[0].trim()} homes
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How-to / Service steps */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
                  How do you buy an affordable home in Las Vegas?
                </h2>
                <p className="aeo-answer text-lg text-slate-600 mb-8">
                  Pre-approve, match neighborhoods to your commute and budget,
                  tour with intent, then write a comps-backed offer — typically
                  closing in 30–45 days.
                </p>
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <Image
                    src="/images/affordable/vegas-starter-home.jpg"
                    alt="Affordable Las Vegas single-family home with curb appeal for first-time buyers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="space-y-8">
                {BUYER_SERVICE_STEPS.map((step, i) => (
                  <div key={step.heading} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {step.heading}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: "MLS + RealScout alerts",
                  desc: "See matches the day they list",
                },
                {
                  icon: Shield,
                  title: "Buyer protection focus",
                  desc: "Inspections, contingencies, credits",
                },
                {
                  icon: Key,
                  title: "Closing coordination",
                  desc: "Lender, title, and key handoff",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="h-6 w-6 text-amber-700 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RealScoutListings />
        <ReviewsSection />

        <FAQSection
          faqs={AFFORDABLE_HOME_FAQS}
          title="Affordable Las Vegas home buying FAQs"
          subtitle="Direct answers AI and buyers can cite — verified against what appears on this page."
        />

        {/* Map + reviews CTA */}
        <section className="py-16 bg-stone-100">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Where is Dr. Jan Duffy’s Las Vegas office?
              </h2>
              <p className="aeo-answer text-slate-700 mb-4">
                Berkshire Hathaway HomeServices Nevada Properties is at{" "}
                {SITE_BRAND.address.full}. Hours: Mon–Fri 9am–6pm, Sat 10am–4pm,
                Sunday by appointment.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${SITE_BRAND.phoneTel}`}
                  className="inline-flex items-center bg-slate-900 text-white px-5 py-3 font-semibold"
                >
                  <Phone className="h-4 w-4 mr-2" /> Call
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_BRAND.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-slate-900 px-5 py-3 font-semibold"
                >
                  Directions
                </a>
                <a
                  href={SITE_BRAND.gbpShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-slate-900 px-5 py-3 font-semibold"
                >
                  Google Reviews
                </a>
              </div>
            </div>
            <div className="aspect-video w-full overflow-hidden bg-slate-200">
              <iframe
                title="Map to Dr. Jan Duffy office at 9406 W Lake Mead Blvd Las Vegas"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE_BRAND.address.full)}&z=15&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 text-white overflow-hidden">
          <Image
            src="/images/hero/luxury-modern-home.jpg"
            alt="Modern luxury Las Vegas home — book a buyer consultation with Dr. Jan Duffy"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {config.ctaHeadline}
            </h2>
            <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">
              {config.ctaSubheadline}
            </p>
            <a
              href={`tel:${SITE_BRAND.phoneTel}`}
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {SITE_BRAND.phoneDisplay}
            </a>
            <p className="mt-6 text-white/70 text-sm">
              {SITE_BRAND.agent} | REALTOR® | License {SITE_BRAND.license} |{" "}
              {SITE_BRAND.address.full}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
