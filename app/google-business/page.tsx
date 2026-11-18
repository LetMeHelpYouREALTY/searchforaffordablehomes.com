import Navbar from "@/components/layouts/Navbar";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import ScheduleConsultSection from "@/components/sections/ScheduleConsultSection";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  MessageSquare,
  Award,
  Users,
  Home,
} from "lucide-react";
import type { Metadata } from "next";
import {
  businessInfo,
  gbpDescription,
  gbpFAQs,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/gbp-schema";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

export const metadata: Metadata = {
  title: `${SITE_BRAND.name} | Google Business Profile — Dr. Jan Duffy`,
  description: SITE_BRAND.gbpDescription,
  keywords: [
    "Affordable Homes Las Vegas",
    "Dr. Jan Duffy realtor",
    "Mountain's Edge homes",
    "Southern Highlands homes",
    "Rhodes Ranch homes",
    "Las Vegas real estate agent",
  ],
  alternates: { canonical: `${SITE_BRAND.url}/google-business` },
  openGraph: {
    title: `${SITE_BRAND.name} — Google Business Profile`,
    description: SITE_BRAND.gbpDescription,
    url: `${SITE_BRAND.url}/google-business`,
    type: "website",
  },
};

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export default function GoogleBusinessPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pb-16 pt-24">
        <div className="container mx-auto px-4">
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-ink p-8 text-white md:p-12">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-champagne-soft">
                    Google Business Profile
                  </p>
                  <h1 className="mb-3 font-display text-4xl font-semibold md:text-5xl">
                    {SITE_BRAND.name}
                  </h1>
                  <p className="mb-2 text-lg text-white/85">
                    {SITE_BRAND.agent}, REALTOR® · Primary category:{" "}
                    {SITE_BRAND.categories.primary}
                  </p>
                  <p className="mb-6 text-sm text-white/70">
                    Also listed as:{" "}
                    {SITE_BRAND.categories.secondary.join(" · ")}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-champagne" />
                      <div>
                        <p className="font-medium">
                          {SITE_BRAND.address.street}
                        </p>
                        <p>
                          {SITE_BRAND.address.city}, {SITE_BRAND.address.state}{" "}
                          {SITE_BRAND.address.zip}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-champagne" />
                      <a
                        href={`tel:${SITE_BRAND.phoneTel}`}
                        className="font-medium text-white no-underline hover:text-champagne-soft"
                      >
                        {SITE_BRAND.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 shrink-0 text-champagne" />
                      <a
                        href={SITE_BRAND.smsHref}
                        className="font-medium text-white no-underline hover:text-champagne-soft"
                      >
                        SMS {SITE_BRAND.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-champagne" />
                      <a
                        href={`mailto:${SITE_BRAND.email}`}
                        className="text-white no-underline hover:text-champagne-soft"
                      >
                        {SITE_BRAND.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-8 w-8 fill-champagne text-champagne"
                      />
                    ))}
                  </div>
                  <p className="mb-2 text-3xl font-semibold">4.9 / 5.0</p>
                  <p className="mb-6 text-white/75">Google reviews</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="#listings"
                      className="inline-block bg-champagne px-6 py-3.5 font-semibold text-ink no-underline hover:bg-champagne-soft"
                    >
                      Browse Homes
                    </a>
                    <a
                      href="#schedule"
                      className="inline-block border border-white/50 px-6 py-3.5 font-semibold text-white no-underline hover:bg-white/10"
                    >
                      Schedule on Calendly
                    </a>
                    <a
                      href={SITE_BRAND.gbpShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-champagne-soft underline underline-offset-2"
                    >
                      View Google Business Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RealScoutListings />

          <section className="mb-16 max-w-5xl mx-auto">
            <div className="border border-slate-200 bg-[var(--luxury-surface)] p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-champagne-deep" />
                <h2 className="font-display text-xl font-semibold text-ink">
                  Business hours
                </h2>
              </div>
              <p className="mb-4 text-sm text-slate-600">
                Open with main hours · daily 8:00 AM–8:00 PM · since September
                2013
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
                {WEEKDAYS.map((day) => (
                  <div key={day}>
                    <span className="font-medium text-ink">{day}:</span>{" "}
                    <span className="text-slate-700">8:00 AM–8:00 PM</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Special hours
                </h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  {SITE_BRAND.specialHours.map((h) => (
                    <li key={h.date}>
                      {h.label} ({h.date}):{" "}
                      <span className="font-medium text-ink">Closed</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-ink">
              About {SITE_BRAND.name}
            </h2>
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-ink">
                <Users className="h-5 w-5 text-champagne-deep" />
                Description
              </h3>
              <p className="leading-relaxed text-slate-700">
                {gbpDescription.whoWeAre}
              </p>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-ink">
                <Home className="h-5 w-5 text-champagne-deep" />
                Services & value
              </h3>
              <p className="leading-relaxed text-slate-700">
                {gbpDescription.whatWeDo}
              </p>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-ink">
                <MapPin className="h-5 w-5 text-champagne-deep" />
                Areas served
              </h3>
              <p className="mb-4 leading-relaxed text-slate-700">
                {gbpDescription.whereWeServe}
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {SITE_BRAND.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-deep" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-ink">
              Real estate services
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {businessInfo.services.map((service) => (
                <div
                  key={service.name}
                  className="border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-champagne-deep" />
                    <div>
                      <h3 className="font-semibold text-ink">{service.name}</h3>
                      <p className="text-sm text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-ink">
              From the business
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-slate-200 p-5">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-ink">
                  <Award className="h-5 w-5 text-champagne-deep" />
                  Highlights
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {SITE_BRAND.attributes.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                  {SITE_BRAND.attributes.planning.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                  {SITE_BRAND.attributes.serviceOptions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-slate-200 p-5">
                <h3 className="mb-3 font-semibold text-ink">Accessibility</h3>
                <ul className="mb-4 space-y-2 text-sm text-slate-700">
                  {SITE_BRAND.attributes.accessibility.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <h3 className="mb-3 font-semibold text-ink">Amenities</h3>
                <ul className="mb-4 space-y-2 text-sm text-slate-700">
                  {SITE_BRAND.attributes.amenities.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <h3 className="mb-3 font-semibold text-ink">Crowd</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {SITE_BRAND.attributes.crowd.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="mb-6 text-center font-display text-3xl font-semibold text-ink">
              Languages
            </h2>
            <p className="mx-auto mb-4 max-w-3xl text-center text-slate-600">
              Service options include these languages:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SITE_BRAND.languages.map((lang) => (
                <span
                  key={lang}
                  className="border border-slate-300 px-3 py-1.5 text-sm text-ink"
                >
                  {lang}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="mb-6 text-center font-display text-3xl font-semibold text-ink">
              Social profiles
            </h2>
            <ul className="mx-auto max-w-2xl space-y-2 text-center text-sm">
              {SITE_BRAND.socialProfiles.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-2"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-ink">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {gbpFAQs.map((faq) => (
                <details
                  key={faq.question}
                  className="border border-slate-200 bg-white p-4"
                >
                  <summary className="cursor-pointer font-semibold text-ink">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-8 max-w-5xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${SITE_BRAND.phoneTel}`}
                className="inline-flex items-center bg-ink px-6 py-3 font-semibold text-white no-underline"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call {SITE_BRAND.phoneDisplay}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_BRAND.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-ink px-6 py-3 font-semibold text-ink no-underline"
              >
                Directions
              </a>
              <a
                href={SITE_BRAND.gbpShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-ink px-6 py-3 font-semibold text-ink no-underline"
              >
                Google Reviews
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center border border-ink px-6 py-3 font-semibold text-ink no-underline"
              >
                Contact
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Website:{" "}
              <a href={SITE_BRAND.url} className="underline">
                {SITE_BRAND.url}
              </a>
            </p>
          </section>
        </div>

        <ScheduleConsultSection
          heading="Book a consultation or private tour"
          subheading={`Schedule with ${SITE_BRAND.agent} on Calendly — or call ${SITE_BRAND.phoneDisplay}.`}
          calendlyUrl={SITE_BRAND.calendlyShowingUrl}
        />
      </main>
      <Footer />
    </>
  );
}
