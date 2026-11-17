import type { Metadata } from "next";
import Link from "next/link";
import BrandPortrait from "@/components/brand/BrandPortrait";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "This page is no longer available. Browse affordable homes in Las Vegas with Dr. Jan Duffy.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <BrandPortrait size="lg" priority />
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="text-base text-slate-600">
        That listing or URL is no longer available. Search current affordable
        homes with Dr. Jan Duffy instead.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/affordable-homes"
          className="rounded-md bg-[#1e4fd6] px-5 py-2.5 text-sm font-medium text-white"
        >
          Browse affordable homes
        </Link>
        <Link
          href="/listings"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800"
        >
          View listings
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-[#1e4fd6] underline-offset-2 hover:underline"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
