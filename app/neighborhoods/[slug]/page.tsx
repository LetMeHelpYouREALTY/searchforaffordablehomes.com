import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SchemaScript from "@/components/SchemaScript";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone, MapPin, Home, TrendingUp, ArrowRight } from "lucide-react";
import { siteConfig, agentInfo } from "@/lib/site-config";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateNeighborhoodSchema,
  generateWebPageSchema,
  combineSchemas,
} from "@/lib/schema";
import {
  neighborhoods,
  getNeighborhood,
  estimateMonthlyPI,
  formatUSD,
  formatDate,
  MORTGAGE_RATE,
  VALLEY_STATS,
  DATA_REVIEWED,
  type Neighborhood,
} from "@/lib/neighborhoods";

export const dynamicParams = false;

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const n = getNeighborhood(params.slug);
  if (!n) return {};
  const url = `${siteConfig.url}/neighborhoods/${n.slug}`;
  const title = `${n.name} Homes for Sale | Prices & Guide | Dr. Jan Duffy`;
  const description = `${n.name} homes sold for a ${formatUSD(n.market.medianSold)} median over the last 12 months (LVR MLS, ${formatDate(n.market.asOf)}). Prices, payments, housing types and local guide.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
  };
}

function buildFaqs(n: Neighborhood) {
  const payment = formatUSD(estimateMonthlyPI(n.market.medianSold));
  const valleyGap = n.market.medianSold - VALLEY_STATS.medianSingleFamily;
  return [
    {
      question: `What is the median home price in ${n.name}?`,
      answer: `${n.name} homes sold for a median of ${formatUSD(n.market.medianSold)} over the 12 months through ${formatDate(n.market.asOf)} (${n.market.scope}, Las Vegas REALTORS® MLS data). That is ${formatUSD(Math.abs(valleyGap))} ${valleyGap >= 0 ? "above" : "below"} the Southern Nevada single-family median of ${formatUSD(VALLEY_STATS.medianSingleFamily)} for ${VALLEY_STATS.month}.`,
    },
    {
      question: `What would a monthly payment be on a median-priced ${n.name} home?`,
      answer: `About ${payment} a month in principal and interest, with 10% down on a 30-year fixed loan at ${MORTGAGE_RATE.rate30yr}% (Freddie Mac average, ${formatDate(MORTGAGE_RATE.asOf)}). Property taxes, insurance and HOA dues are extra, and your rate depends on your credit and loan type.`,
    },
    {
      question: `How fast do homes sell in ${n.name}?`,
      answer: `The median home sold in ${n.market.daysToSell} days at ${n.market.saleToListPct}% of its original list price, with ${n.market.monthsSupply} months of supply.`,
    },
    {
      question: `What ZIP codes cover ${n.name}?`,
      answer: `${n.name} is in ${n.locality}, mainly ZIP ${n.zips.length > 1 ? "codes" : "code"} ${n.zips.join(", ")}.`,
    },
  ];
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const n = getNeighborhood(params.slug);
  if (!n) notFound();

  const path = `/neighborhoods/${n.slug}`;
  const faqs = buildFaqs(n);
  const payment = estimateMonthlyPI(n.market.medianSold);
  const related = n.related
    .map((slug) => getNeighborhood(slug))
    .filter((r): r is Neighborhood => Boolean(r));

  const schema = combineSchemas(
    generateWebPageSchema({
      name: `${n.name} Homes for Sale and Neighborhood Guide`,
      description: n.summary,
      url: path,
      dateModified: DATA_REVIEWED,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Neighborhoods", url: "/neighborhoods" },
      { name: n.name, url: path },
    ]),
    generateNeighborhoodSchema({
      name: n.name,
      slug: n.slug,
      description: n.summary,
      containedIn: n.locality.split(" (")[0].split(" and ")[0],
    }),
    generateFAQSchema(faqs)
  );

  const stats = [
    { label: "Median sold, 12 months", value: formatUSD(n.market.medianSold) },
    { label: "Median days to sell", value: `${n.market.daysToSell}` },
    { label: "Sale to original list", value: `${n.market.saleToListPct}%` },
    { label: "Months of supply", value: `${n.market.monthsSupply}` },
  ];

  return (
    <>
      <SchemaScript schema={schema} id={`${n.slug}-schema`} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <nav className="max-w-5xl mx-auto mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {" / "}
            <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
            {" / "}
            <span className="text-slate-900">{n.name}</span>
          </nav>

          {/* Hero */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="h-4 w-4" />
              {n.region === n.locality ? n.locality : `${n.region} · ${n.locality}`}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {n.name} Homes for Sale
            </h1>
            <p className="text-xl text-slate-600">{n.tagline}</p>
          </header>

          {/* Market snapshot */}
          <section className="mb-12 bg-slate-900 text-white rounded-2xl p-8 md:p-10 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">{n.name} Market Snapshot</h2>
            <p className="text-center text-slate-400 text-sm mb-8">
              {n.market.scope} · 12 months of closed sales through {formatDate(n.market.asOf)}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-1">{s.value}</div>
                  <div className="text-slate-300 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-8 text-center">
              Source: Las Vegas REALTORS® MLS data
              {n.market.sales12mo ? `, ${n.market.sales12mo.toLocaleString()} closed sales` : ""}.
              Information deemed reliable but not guaranteed.
            </p>
          </section>

          {/* Payment */}
          <section className="mb-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-2">
                <Home className="h-5 w-5 text-blue-600" />
                What the median costs per month
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{formatUSD(payment)}</div>
              <p className="text-sm text-slate-600">
                Principal and interest on a {formatUSD(n.market.medianSold)} home with 10% down,
                30-year fixed at {MORTGAGE_RATE.rate30yr}% ({MORTGAGE_RATE.source},{" "}
                {formatDate(MORTGAGE_RATE.asOf)}). Taxes, insurance and HOA dues are extra. This is
                an estimate, not a loan quote.
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Compared with the valley
              </div>
              <p className="text-slate-700 mb-3">
                The Southern Nevada single-family median was{" "}
                <strong>{formatUSD(VALLEY_STATS.medianSingleFamily)}</strong> in {VALLEY_STATS.month},
                with about {VALLEY_STATS.monthsSupply} months of supply.
              </p>
              <p className="text-xs text-slate-500">Source: {VALLEY_STATS.source}.</p>
            </div>
          </section>

          {/* About */}
          <section className="mb-12 max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">About {n.name}</h2>
              <p className="text-lg text-slate-700 mb-6">{n.summary}</p>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Homes you&apos;ll find</h3>
              <p className="text-slate-700 mb-6">{n.housing}</p>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Around the area</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-6">
                {n.places.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Buyer notes</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                {n.buyerNotes.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {n.seeAlso && (
                <Link
                  href={n.seeAlso.href}
                  className="inline-flex items-center gap-1 mt-6 text-blue-600 font-semibold hover:underline"
                >
                  {n.seeAlso.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            <aside className="bg-slate-50 rounded-xl p-6 h-fit">
              <h2 className="font-bold text-slate-900 mb-4">{n.name} at a glance</h2>
              <dl className="space-y-3 text-sm">
                {n.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-slate-500">{f.label}</dt>
                    <dd className="text-slate-900 font-medium">{f.value}</dd>
                  </div>
                ))}
                <div>
                  <dt className="text-slate-500">ZIP codes</dt>
                  <dd className="text-slate-900 font-medium">{n.zips.join(", ")}</dd>
                </div>
              </dl>
            </aside>
          </section>

          {/* FAQ */}
          <section className="mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{n.name} FAQ</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.question} className="border border-slate-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2">{f.question}</h3>
                  <p className="text-slate-700">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="mb-12 max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Compare nearby areas</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/neighborhoods/${r.slug}`}
                    className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow transition"
                  >
                    <div className="font-bold text-slate-900">{r.name}</div>
                    <div className="text-sm text-slate-600">
                      {formatUSD(r.market.medianSold)} median
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get ahead of other buyers in {n.name}</h2>
            <p className="text-lg text-blue-100 mb-8">
              Get new {n.name} listings and price cuts as they hit the MLS, with real numbers on what
              you can afford.
            </p>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {agentInfo.phoneFormatted}
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              {agentInfo.name} · {agentInfo.brokerage} · Nevada License {agentInfo.license}
            </p>
          </section>

          <p className="text-center text-xs text-slate-500 mt-8 max-w-3xl mx-auto">
            Data reviewed {formatDate(DATA_REVIEWED)}. Market figures change monthly. Equal Housing
            Opportunity.
          </p>
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
