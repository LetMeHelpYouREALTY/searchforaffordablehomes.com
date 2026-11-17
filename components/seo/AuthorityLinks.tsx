import { authorityExternalLinks, type SeoLink } from "@/lib/seo-links";

type AuthorityLinksProps = {
  title?: string;
  subtitle?: string;
  links?: SeoLink[];
  className?: string;
};

export default function AuthorityLinks({
  title = "Trusted resources",
  subtitle = "Authoritative external references for licensing, brokerage, and homebuying guidance.",
  links = authorityExternalLinks,
  className = "",
}: AuthorityLinksProps) {
  return (
    <section
      className={`py-12 md:py-14 ${className}`}
      aria-labelledby="authority-links-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <h2
            id="authority-links-heading"
            className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl"
          >
            {title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">{subtitle}</p>
        </div>
        <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e4fd6] underline-offset-2 hover:underline"
                title={link.description}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
