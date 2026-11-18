import { redirect } from "next/navigation";
import type { Metadata } from "next";

/**
 * RealScout owns listing detail UX (native widget + agent site).
 * Do not serve placeholder MLS detail pages — they create soft-404 /
 * duplicate URL noise in Google Search Console.
 */
export const metadata: Metadata = {
  title: "Property Listings",
  robots: {
    index: false,
    follow: true,
  },
};

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyPage({ params }: PropertyPageProps) {
  await params;
  redirect("/listings");
}
