import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import CalendlyBookingSection from "@/components/calendly/CalendlyBookingSection";
import SectionExtras from "@/components/brand/SectionExtras";
import SchemaScript from "@/components/SchemaScript";
import {
  PropertyHero,
  PropertyFacts,
  PropertyOverview,
  RelatedPropertyShowcases,
} from "@/components/listings/PropertyShowcaseSections";
import {
  getFeaturedProperty,
  getFeaturedPropertyParams,
} from "@/lib/featured-properties";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  generateWebPageSchema,
} from "@/lib/schema";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getFeaturedPropertyParams();
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getFeaturedProperty(id);
  if (!property) {
    return {
      title: "Affordable Homes Not Found",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `${property.name} | Dr. Jan Duffy, REALTOR®`,
    description: `${property.headline}. Work with Dr. Jan Duffy for payment-fit MLS search, tours, and offers in ${property.city}. Call (702) 500-1942.`,
    alternates: {
      canonical: `/listings/${property.slug}`,
    },
    openGraph: {
      title: `${property.name} | Dr. Jan Duffy`,
      description: property.headline,
      images: [{ url: property.image, width: 1280, height: 720 }],
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = getFeaturedProperty(id);
  if (!property) {
    notFound();
  }

  const faqs = [
    {
      question: `How does Dr. Jan Duffy help buyers find affordable homes in ${property.neighborhood}?`,
      answer: property.summary,
    },
    {
      question: `What price band do you focus on in ${property.neighborhood}?`,
      answer: `${property.priceBand}. Dr. Jan Duffy builds the shortlist around your payment comfort, HOA dues, and closing costs—not just list price.`,
    },
    {
      question: "How do I start working with Dr. Jan Duffy?",
      answer:
        "Click any RealScout home photo on this page to explore live MLS listings, then schedule a showing or buyer consult on Calendly. Dr. Jan confirms payment fit and runs your hyperlocal search.",
    },
  ];

  const pageSchemas = combineSchemas(
    generateWebPageSchema({
      name: property.name,
      description: property.summary,
      url: `/listings/${property.slug}`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Listings", url: "/listings" },
      { name: property.name, url: `/listings/${property.slug}` },
    ]),
    generateServiceSchema({
      name: `${property.name} — Buyer Representation`,
      description: property.summary,
      url: `/listings/${property.slug}`,
    }),
    generateFAQSchema(faqs),
  );

  return (
    <>
      <SchemaScript
        schema={pageSchemas}
        id={`affordable-area-${property.slug}`}
      />
      <Navbar />
      <main>
        <PropertyHero property={property} />
        <PropertyFacts property={property} />
        <OfficeListingsUnderHero
          title={`Live affordable homes in ${property.neighborhood}`}
          subtitle={`Click a home photo to open details. Want a tour in ${property.city}? Schedule with Dr. Jan on Calendly.`}
        />
        <PropertyOverview property={property} />
        <section className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Questions buyers ask Dr. Jan
            </h2>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <RelatedPropertyShowcases currentId={property.id} />
        <div className="container mx-auto px-4">
          <SectionExtras
            headline={`Schedule ${property.neighborhood} home search with Dr. Jan`}
          />
        </div>
        <CalendlyBookingSection />
      </main>
      <Footer />
    </>
  );
}
