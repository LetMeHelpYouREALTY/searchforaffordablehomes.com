import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ListingGuidePage from "@/components/listings/ListingGuidePage";
import { getListingGuide, getListingGuideSlugs } from "@/lib/listings-guides";

type ListingSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getListingGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ListingSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getListingGuide(slug);
  if (!guide) {
    return {
      title: "Listing guide not found",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
  };
}

/**
 * Known listing-intent slugs render real conversion pages.
 * Unknown slugs (old fake /listings/1 style IDs) → hard 404 + noindex.
 */
export default async function ListingSlugPage({
  params,
}: ListingSlugPageProps) {
  const { slug } = await params;
  const guide = getListingGuide(slug);
  if (!guide) {
    notFound();
  }

  return <ListingGuidePage guide={guide} />;
}
