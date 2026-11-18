import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  CheckCircle,
  ArrowRight,
  Home,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandPortrait from "@/components/brand/BrandPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import type { AffordableAreaPage } from "@/lib/featured-properties";
import { featuredProperties } from "@/lib/featured-properties";

const CALENDLY_SHOWING = "https://calendly.com/drjanduffy/showing";

const primaryCalendlyClass =
  "inline-flex items-center justify-center rounded-md bg-[#1e4fd6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1840b0]";
const outlineCalendlyClass =
  "inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50";
const heroCalendlyClass =
  "inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20";

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
          Click a live MLS photo below to explore homes, or schedule a tour with
          Dr. Jan Duffy on Calendly.
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
            <a href="#affordable-homes-listings">
              Browse live MLS photos
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <CalendlyButton
            url={CALENDLY_SHOWING}
            text="Schedule a showing"
            className={heroCalendlyClass}
          />
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
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap gap-3 px-4">
        <Button asChild className="bg-[#1e4fd6] hover:bg-[#1840b0]">
          <a href="#affordable-homes-listings">Click a home photo to view it</a>
        </Button>
        <CalendlyButton
          url={CALENDLY_SHOWING}
          text="Or schedule on Calendly"
          className={outlineCalendlyClass.replace("w-full ", "")}
        />
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
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-[#1e4fd6] hover:bg-[#1840b0]">
              <a href="#affordable-homes-listings">
                Back to MLS photos
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <CalendlyButton
              url={CALENDLY_SHOWING}
              text="Schedule your consultation"
              className={outlineCalendlyClass.replace("w-full ", "")}
            />
          </div>
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
              Two ways to move forward
            </h3>
            <ul className="mt-4 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <Home
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1e4fd6]"
                  aria-hidden
                />
                <span>
                  Click any RealScout home photo above to open listing details
                  and save homes you like.
                </span>
              </li>
              <li className="flex gap-3">
                <Calendar
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1e4fd6]"
                  aria-hidden
                />
                <span>
                  Book a showing or buyer consult on Calendly — Dr. Jan maps
                  payment fit to live MLS.
                </span>
              </li>
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
            <a
              href="#affordable-homes-listings"
              className={`${primaryCalendlyClass} mt-8 w-full`}
            >
              Browse MLS photos
            </a>
            <div className="mt-3">
              <CalendlyButton
                url={CALENDLY_SHOWING}
                text="Schedule on Calendly"
                className={outlineCalendlyClass}
              />
            </div>
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
          Open an area page, click RealScout photos, or schedule with Dr. Jan on
          Calendly.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {related.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <Link
                href={`/listings/${property.slug}#affordable-homes-listings`}
                className="group block"
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
                <div className="p-5 pb-3">
                  <p className="text-sm font-medium text-[#1e4fd6]">
                    {property.priceBand}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">
                    {property.name}
                  </h3>
                  <p className="mt-2 text-slate-600">{property.headline}</p>
                </div>
              </Link>
              <div className="flex flex-wrap gap-2 px-5 pb-5">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#1e4fd6] hover:bg-[#1840b0]"
                >
                  <Link
                    href={`/listings/${property.slug}#affordable-homes-listings`}
                  >
                    View MLS photos
                  </Link>
                </Button>
                <CalendlyButton
                  url={CALENDLY_SHOWING}
                  text="Schedule"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
