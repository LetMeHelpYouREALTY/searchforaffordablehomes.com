import { notFound } from "next/navigation";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

/**
 * Listing detail URLs are not served from this site yet (RealScout hosts
 * live MLS detail pages). Returning a placeholder 200 with indexable HTML
 * created soft 404s and thin duplicates in Google Search Console.
 *
 * Until a real MLS/RealScout detail fetch exists, every /listings/[id]
 * must be a hard 404 (app/not-found.tsx → noindex, follow).
 */
export default async function PropertyPage({ params }: PropertyPageProps) {
  await params;
  notFound();
}
