import Image from "next/image";
import Link from "next/link";
import { siteConfig, agentInfo } from "@/lib/site-config";

type BrandLockupProps = {
  /** Visual tone for footer/dark surfaces */
  tone?: "light" | "dark";
  /** Show headshot next to wordmark */
  showPortrait?: boolean;
  className?: string;
  /** Prefer link to home (default) or static markup */
  asLink?: boolean;
};

/**
 * Canonical logo lockup:
 * Primary — Affordable Homes
 * Subline — By Dr. Jan Duffy, REALTOR®
 */
export default function BrandLockup({
  tone = "light",
  showPortrait = true,
  className = "",
  asLink = true,
}: BrandLockupProps) {
  const primaryClass =
    tone === "dark"
      ? "text-white hover:text-blue-300"
      : "text-slate-900 hover:text-blue-600";
  const subClass = tone === "dark" ? "text-slate-300" : "text-slate-500";
  const ringClass = tone === "dark" ? "ring-offset-slate-900" : "";

  const content = (
    <>
      {showPortrait && (
        <Image
          src="/images/agent/dr-jan-duffy-portrait.png"
          alt={`${siteConfig.name} — ${siteConfig.tagline}`}
          width={44}
          height={44}
          className={`h-11 w-11 rounded-full object-cover ring-2 ring-[#1e4fd6] ${ringClass}`}
          priority
        />
      )}
      <span className="flex flex-col">
        <span
          className={`text-lg font-bold leading-tight md:text-xl lg:text-2xl ${primaryClass} transition-colors`}
        >
          {siteConfig.name}
        </span>
        <span className={`text-xs leading-snug ${subClass}`}>
          {siteConfig.tagline}
        </span>
      </span>
    </>
  );

  if (!asLink) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>{content}</div>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label={`${siteConfig.name} — ${agentInfo.name}, ${agentInfo.title}`}
    >
      {content}
    </Link>
  );
}
