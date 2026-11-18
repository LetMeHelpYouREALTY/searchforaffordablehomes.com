import { notFound } from "next/navigation";
import type { Metadata } from "next";

/**
 * Dynamic MLS detail pages are not served from this app (RealScout hosts live
 * listing URLs). Returning notFound() prevents soft-404 / duplicate-canonical
 * spam from placeholder IDs Google may invent or discover.
 */
export const metadata: Metadata = {
  title: "Listing not found",
  robots: {
    index: false,
    follow: false,
  },
};

type PropertyPageProps = {
  params: { id: string } | Promise<{ id: string }>;
};

export default async function PropertyPage({ params }: PropertyPageProps) {
  await params;
  notFound();
}
