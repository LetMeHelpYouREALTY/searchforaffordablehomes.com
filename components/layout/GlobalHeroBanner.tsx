import Image from "next/image";
import { GLOBAL_HERO } from "@/lib/global-hero";

/**
 * Compact full-width hero band in the root layout (every page).
 * Intentionally shorter than PageHero so it does not collide with
 * page-level full-bleed heroes on the homepage.
 */
export default function GlobalHeroBanner() {
  const { src, alt, tagline, phoneDisplay, phoneTel } = GLOBAL_HERO;

  return (
    <aside
      className="relative w-full overflow-hidden border-b border-slate-800/40"
      aria-label={tagline}
    >
      <div className="relative h-[200px] sm:h-[240px] md:h-[280px] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/25"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-5 md:pb-6">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.7)] max-w-3xl text-balance">
              {tagline}
            </p>
            {phoneDisplay && phoneTel && (
              <a
                href={phoneTel}
                className="mt-2 inline-block text-sm sm:text-base font-medium text-blue-100 hover:text-white underline-offset-2 hover:underline [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"
              >
                Call or text {phoneDisplay}
              </a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
