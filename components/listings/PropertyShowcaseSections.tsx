import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  CheckCircle,
  ArrowRight,
  Phone,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandPortrait from "@/components/brand/BrandPortrait";
import type { AffordableAreaPage } from "@/lib/featured-properties";
import { featuredProperties } from "@/lib/featured-properties";

export function PropertyHero({ property }: { property: AffordableAreaPage }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={property.image}
          alt={`Affordable homes in ${property.neighborhood} with Dr. Jan Duffy, REALTOR®`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/25" />
      </div>
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-32 text-white">
        <div className="mb-5 flex items-center gap-3">
          <BrandPortrait size="sm" priority />
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-200">
            {property.heroEyebrow}
          </p>
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          {property.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200">
          Work with Dr. Jan Duffy to search, tour, and close affordable homes in{" "}
          {property.neighborhood} — payment first, then the right MLS match.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-100">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden />
            {property.city}
          </span>
          <span className="rounded-md bg-white/15 px-3 py-1 font-semibold backdrop-blur">
            {property.priceBand}
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-[#1e4fd6] hover:bg-[#1840b0]">
            <Link href={property.searchHref}>
              Search {property.neighborhood} homes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20"
          >
            <a href="tel:+17025001942">
              <Phone className="mr-2 h-4 w-4" />
              Call Dr. Jan (702) 500-1942
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PropertyFacts({ property }: { property: AffordableAreaPage }) {
  const facts = [
    { icon: Bed, label: "Common layouts", value: property.bedrooms },
    { icon: Bath, label: "Bath count", value: property.bathrooms },
    { icon: Square, label: "Size band", value: property.squareFeet },
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3">
        {facts.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-[#1e4fd6]">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {label}
              </p>
              <p className="text-lg font-semibold text-slate-900">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PropertyOverview({
  property,
}: {
  property: AffordableAreaPage;
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            How Dr. Jan Duffy helps in {property.neighborhood}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {property.summary}
          </p>
          <ul className="mt-8 space-y-3">
            {property.janServices.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1e4fd6]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-3">
              <BrandPortrait size="md" />
              <div>
                <p className="font-semibold text-slate-900">Dr. Jan Duffy</p>
                <p className="text-sm text-slate-600">
                  REALTOR® · License S.0197614.LLC
                </p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              What you get as her buyer client
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              {property.buyerOutcomes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e4fd6]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Hyperlocal focus
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {property.localFocus.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Home
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#1e4fd6]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-8 w-full bg-[#1e4fd6] hover:bg-[#1840b0]"
            >
              <a href="tel:+17025001942">Call (702) 500-1942</a>
            </Button>
            <Button asChild variant="outline" className="mt-3 w-full">
              <Link href="/contact">Request a payment shortlist</Link>
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function RelatedPropertyShowcases({ currentId }: { currentId: string }) {
  const related = featuredProperties.filter((p) => p.id !== currentId);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          More hyperlocal affordable home searches
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Dr. Jan Duffy covers Las Vegas, Henderson, and Summerlin with the same
          payment-first process.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {related.map((property) => (
            <Link
              key={property.id}
              href={`/listings/${property.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 transition hover:border-slate-300"
            >
              <div className="relative h-52">
                <Image
                  src={property.image}
                  alt={`Affordable homes in ${property.neighborhood} with Dr. Jan Duffy`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-[#1e4fd6]">
                  {property.priceBand}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">
                  {property.name}
                </h3>
                <p className="mt-2 text-slate-600">{property.headline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
