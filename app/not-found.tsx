import Link from "next/link";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="text-base text-slate-600">
        That URL is not available. Browse current affordable homes with{" "}
        {SITE_BRAND.agent} at {SITE_BRAND.name}.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/listings"
          className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white"
        >
          View listings
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800"
        >
          Contact
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-blue-700 underline-offset-2 hover:underline"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
