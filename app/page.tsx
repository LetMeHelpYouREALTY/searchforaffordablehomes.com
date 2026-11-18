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
import ScheduleConsultSection from "@/components/sections/ScheduleConsultSection";
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
    title: `${config.heroHeadline} | ${SITE_BRAND.name} — Dr. Jan Duffy`,
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical: SITE_BRAND.url },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      url: SITE_BRAND.url,
      type: "website",
      images: [
        {
          url: `${SITE_BRAND.url}/images/hero/luxury-representation-under-500k.jpg`,
          width: 1920,
          height: 1080,
          alt: "Modern Las Vegas home exterior — luxury representation for homes under $500K",
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
        {/* Hero — brand-first luxury composition: brand, H1, one line, one CTA, full-bleed */}
        <section className="relative flex min-h-[88vh] items-end overflow-hidden text-white md:items-center">
          <Image
            src="/images/hero/luxury-representation-under-500k.jpg"
            alt="Modern Las Vegas home at golden hour — luxury representation for homes under $500K"
            fill
            priority
            className="object-cover motion-safe:animate-ken-slow"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/25" />
          <div className="relative z-10 container mx-auto px-4 pb-16 pt-32 md:py-28">
            <p className="mb-3 font-display text-3xl font-semibold tracking-tight text-champagne-soft motion-safe:animate-fade-up md:text-4xl lg:text-5xl">
              {SITE_BRAND.name}
            </p>
            <h1 className="mb-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] motion-safe:animate-fade-up-delay md:text-5xl lg:text-6xl">
              {config.heroHeadline}
            </h1>
            <p className="aeo-answer mb-8 max-w-xl text-lg leading-relaxed text-white/85 motion-safe:animate-fade-up-delay-2 md:text-xl">
              {config.heroSubheadline}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row motion-safe:animate-fade-up-delay-2">
              <a
                href="#listings"
                className="inline-flex items-center justify-center bg-champagne px-7 py-3.5 font-semibold text-ink no-underline transition-colors hover:bg-champagne-soft"
              >
                Browse Homes
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center border border-white/60 px-7 py-3.5 font-semibold text-white no-underline transition-colors hover:bg-white/10"
              >
                Schedule a Showing
              </a>
            </div>
          </div>
        </section>

        <RealScoutListings agentEncodedId={config.realscoutAgentId} />

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
                  {SITE_BRAND.name}
                </p>
                <p>{SITE_BRAND.address.full}</p>
                <p>Open daily 8:00 AM–8:00 PM · {SITE_BRAND.agent}</p>
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
                src="/images/agent/dr-jan-duffy-portrait.png"
                alt="Dr. Jan Duffy — Las Vegas Affordable Homes by Dr. Jan Duffy"
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
                Affordable deals still need sharp negotiation. {SITE_BRAND.name}{" "}
                helps you compare price, square footage, and HOA dues across
                Mountain&apos;s Edge, Southern Highlands, and Rhodes Ranch so
                you do not overpay, miss credits, or waive protections that
                matter at closing.
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
        <section className="relative overflow-hidden py-16 text-white">
          <Image
            src="/images/sections/market-affordable-valley.jpg"
            alt="Aerial view of Las Vegas Valley rooftops illustrating the under-$500K housing band"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="relative z-10 container mx-auto px-4">
            <h2 className="mb-3 max-w-3xl font-display text-3xl font-semibold md:text-4xl">
              What does affordable mean in Las Vegas right now?
            </h2>
            <p className="aeo-answer mb-10 max-w-3xl text-lg text-white/85">
              As of {MARKET_SNAPSHOT.asOf}, most affordable-home shoppers target
              under $500,000 — the valley’s deepest inventory band. Valley
              median list context sits near {MARKET_SNAPSHOT.valleyMedianList},
              with {MARKET_SNAPSHOT.daysOnMarket} typical market time on
              well-priced homes.
            </p>
            <div className="grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {AFFORDABLE_NEIGHBORHOODS.map((n) => (
                <article key={n.name} className="group">
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                    <Image
                      src={n.image}
                      alt={n.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-ink">
                    {n.name}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-champagne-deep">
                    {n.priceBand}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {n.description}
                  </p>
                  <Link
                    href={
                      `/neighborhoods/${n.slug === "neighborhoods" ? "" : n.slug}`.replace(
                        /\/$/,
                        "",
                      ) || "/neighborhoods"
                    }
                    className="text-sm font-semibold text-ink underline underline-offset-4"
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
                <div className="relative mb-6 aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/affordable/buy-process-keys-closing.jpg"
                    alt="House keys and closing documents for buying an affordable Las Vegas home"
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
                {SITE_BRAND.name} is at {SITE_BRAND.address.full}. Hours: 8:00
                AM–8:00 PM daily. Call or text {SITE_BRAND.phoneDisplay}.
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
            <div className="grid gap-4">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/sections/office-sunset-corporate.jpg"
                  alt="Las Vegas corporate office exterior near Sunset Road for Affordable Homes Las Vegas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="aspect-video w-full overflow-hidden bg-slate-200">
                <iframe
                  title="Map to Affordable Homes Las Vegas at 8850 W. Sunset Suite 200"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE_BRAND.address.full)}&z=15&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 text-white overflow-hidden">
          <Image
            src="/images/sections/schedule-private-showing.jpg"
            alt="Open front door inviting a private Las Vegas home showing"
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
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#listings"
                className="inline-flex items-center justify-center bg-champagne px-8 py-4 text-lg font-bold text-ink no-underline transition-colors hover:bg-champagne-soft"
              >
                Click a Home Photo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center border border-white/70 px-8 py-4 text-lg font-bold text-white no-underline transition-colors hover:bg-white/10"
              >
                Book on Calendly
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">
              {SITE_BRAND.name} · {SITE_BRAND.agent}, REALTOR® ·{" "}
              {SITE_BRAND.address.full} ·{" "}
              <a
                href={`tel:${SITE_BRAND.phoneTel}`}
                className="text-white underline underline-offset-2"
              >
                {SITE_BRAND.phoneDisplay}
              </a>
            </p>
          </div>
        </section>

        <ScheduleConsultSection
          heading="Schedule a private showing"
          subheading={`Pick a time with ${SITE_BRAND.agent} on Calendly — tour homes under $500K or review your offer plan.`}
          calendlyUrl={SITE_BRAND.calendlyShowingUrl}
        />
      </main>
      <Footer />
    </>
  );
}
