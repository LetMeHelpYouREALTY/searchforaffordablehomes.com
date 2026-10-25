import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SchemaScript from "@/components/SchemaScript";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { siteConfig, agentInfo } from "@/lib/site-config";
import { generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from "@/lib/schema";
import {
  neighborhoods,
  REGIONS,
  estimateMonthlyPI,
  formatUSD,
  formatDate,
  MORTGAGE_RATE,
  VALLEY_STATS,
  DATA_REVIEWED,
} from "@/lib/neighborhoods";

const description = `Compare ${neighborhoods.length} Las Vegas, Henderson and North Las Vegas neighborhoods by median sold price, days to sell and estimated monthly payment. Las Vegas REALTORS® MLS data, October 2026.`;

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods by Price | Affordable Homes Guide",
  description,
  alternates: { canonical: `${siteConfig.url}/neighborhoods` },
};

const byPrice = [...neighborhoods].sort((a, b) => a.market.medianSold - b.market.medianSold);

export default function NeighborhoodsPage() {
  const schema = combineSchemas(
    generateWebPageSchema({
      name: "Las Vegas Neighborhoods by Price",
      description,
      url: "/neighborhoods",
      dateModified: DATA_REVIEWED,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Neighborhoods", url: "/neighborhoods" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Las Vegas Valley neighborhoods",
      itemListElement: byPrice.map((n, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: n.name,
        url: `${siteConfig.url}/neighborhoods/${n.slug}`,
      })),
    }
  );

  return (
    <>
      <SchemaScript schema={schema} id="neighborhoods-schema" />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <header className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Las Vegas Neighborhoods by Price
            </h1>
            <p className="text-xl text-slate-600">
              {neighborhoods.length} areas across the valley, ranked by what homes actually sold for.
              The Southern Nevada single-family median was{" "}
              <strong>{formatUSD(VALLEY_STATS.medianSingleFamily)}</strong> in {VALLEY_STATS.month}.
            </p>
          </header>

          {/* Price table */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Lowest to highest median</h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-600 text-left">
                  <tr>
                    <th className="p-3">Neighborhood</th>
                    <th className="p-3">Median sold</th>
                    <th className="p-3 hidden sm:table-cell">Est. monthly P&amp;I</th>
                    <th className="p-3 hidden md:table-cell">Days to sell</th>
                    <th className="p-3 hidden md:table-cell">Supply (months)</th>
                  </tr>
                </thead>
                <tbody>
                  {byPrice.map((n) => (
                    <tr key={n.slug} className="border-t border-slate-100">
                      <td className="p-3">
                        <Link href={`/neighborhoods/${n.slug}`} className="font-semibold text-blue-700 hover:underline">
                          {n.name}
                        </Link>
                        <div className="text-xs text-slate-500">{n.market.scope}</div>
                      </td>
                      <td className="p-3 font-medium text-slate-900">{formatUSD(n.market.medianSold)}</td>
                      <td className="p-3 hidden sm:table-cell">{formatUSD(estimateMonthlyPI(n.market.medianSold))}</td>
                      <td className="p-3 hidden md:table-cell">{n.market.daysToSell}</td>
                      <td className="p-3 hidden md:table-cell">{n.market.monthsSupply}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Medians are 12 months of closed sales from Las Vegas REALTORS® MLS data, pulled Oct 17 to
              25, 2026. Some areas use their main ZIP code, as noted. Monthly estimate is principal and
              interest only, 10% down, 30-year fixed at {MORTGAGE_RATE.rate30yr}% ({MORTGAGE_RATE.source},{" "}
              {formatDate(MORTGAGE_RATE.asOf)}).
            </p>
          </section>

          {/* By region */}
          {REGIONS.map((region) => {
            const items = neighborhoods.filter((n) => n.region === region);
            if (items.length === 0) return null;
            return (
              <section key={region} className="mb-12 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{region}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/neighborhoods/${n.slug}`}
                      className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-2 gap-3">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">{n.name}</h3>
                        <div className="text-right font-bold text-slate-900 whitespace-nowrap">
                          {formatUSD(n.market.medianSold)}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{n.tagline}</p>
                      <div className="text-xs text-slate-500">
                        {n.market.daysToSell} days to sell · {n.market.monthsSupply} months supply · ZIP{" "}
                        {n.zips.slice(0, 3).join(", ")}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          <section className="mb-12 max-w-5xl mx-auto text-center">
            <Link href="/55-plus-communities" className="text-blue-600 font-semibold hover:underline">
              Looking for age-restricted 55+ communities? See the 55+ guides.
            </Link>
          </section>

          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which area fits your budget?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Tell me your payment target and I&apos;ll show you which neighborhoods hit it today.
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

          <p className="text-center text-xs text-slate-500 mt-8">
            Data reviewed {formatDate(DATA_REVIEWED)}. Information deemed reliable but not guaranteed.
            Equal Housing Opportunity.
          </p>
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
