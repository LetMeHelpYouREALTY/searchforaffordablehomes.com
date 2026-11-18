"use client";

import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  featuredProperties,
  type AffordableAreaPage,
} from "@/lib/featured-properties";

const PropertyCard = ({ property }: { property: AffordableAreaPage }) => (
  <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-slate-300">
    <div className="relative h-48 md:h-64">
      <Image
        src={property.image}
        alt={`${property.name} with Dr. Jan Duffy, REALTOR®`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute right-4 top-4 rounded-md bg-[#1e4fd6] px-3 py-1 text-sm font-semibold text-white">
        {property.priceBand}
      </div>
    </div>
    <div className="p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#1e4fd6]">
        Dr. Jan Duffy · {property.neighborhood}
      </p>
      <h3 className="mt-1 text-xl font-bold text-slate-900">{property.name}</h3>
      <p className="mb-4 mt-2 text-slate-600">{property.headline}</p>
      <div className="mb-4 flex items-center justify-between text-slate-600">
        <div className="flex items-center gap-1">
          <Bed className="h-4 w-4 text-[#1e4fd6]" aria-hidden />
          <span className="text-sm">{property.bedrooms}</span>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="h-4 w-4 text-[#1e4fd6]" aria-hidden />
          <span className="text-sm">{property.bathrooms}</span>
        </div>
        <div className="flex items-center gap-1">
          <Square className="h-4 w-4 text-[#1e4fd6]" aria-hidden />
          <span className="text-sm">{property.squareFeet}</span>
        </div>
      </div>
      <Button asChild className="w-full bg-[#1e4fd6] hover:bg-[#1840b0]">
        <Link href={`/listings/${property.slug}`}>
          Work with Dr. Jan here <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </article>
);

export default function FeaturedProperties() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Affordable homes by hyperlocal area
            </h2>
            <p className="text-lg text-slate-600">
              North Las Vegas, Henderson, and Summerlin — with Dr. Jan Duffy’s
              payment-first buyer service
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/listings">Browse live MLS listings</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
