import Link from "next/link";
import { pillarInternalLinks, type SeoLink } from "@/lib/seo-links";

type InternalLinkHubProps = {
  title?: string;
  subtitle?: string;
  links?: SeoLink[];
  className?: string;
};

export default function InternalLinkHub({
  title = "Explore affordable homes next",
  subtitle = "Internal guides that help buyers — and search engines — understand the Las Vegas value market.",
  links = pillarInternalLinks,
  className = "",
}: InternalLinkHubProps) {
  return (
    <section
      className={`border-y border-slate-200 bg-slate-50 py-12 md:py-16 ${className}`}
      aria-labelledby="internal-link-hub-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="internal-link-hub-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base text-slate-600">{subtitle}</p>
        </div>
        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block h-full rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-[#1e4fd6]/40 hover:bg-white"
              >
                <span className="font-medium text-[#1e4fd6]">{link.label}</span>
                {link.description ? (
                  <span className="mt-1 block text-sm text-slate-600">
                    {link.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
