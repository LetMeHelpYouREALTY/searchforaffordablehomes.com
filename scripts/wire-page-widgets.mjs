#!/usr/bin/env node
/**
 * Ensures every content page has:
 * 1) BrandPortrait near the H1
 * 2) RealScout office listings under the hero
 * 3) CalendlyBookingSection before Footer
 */
import fs from "node:fs";
import path from "node:path";

const APP = path.resolve("app");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name === "page.tsx") out.push(full);
  }
  return out;
}

function ensureImport(src, importLine) {
  if (src.includes(importLine.split(" from ")[0])) return src;
  if (src.includes(importLine)) return src;
  const lines = src.split("\n");
  let lastImport = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("import ")) lastImport = i;
  }
  if (lastImport === -1) return importLine + "\n" + src;
  lines.splice(lastImport + 1, 0, importLine);
  return lines.join("\n");
}

function processFile(file) {
  if (file.endsWith(`${path.sep}app${path.sep}page.tsx`)) return false;
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes("<Navbar") || !src.includes("<Footer")) return false;

  let changed = false;

  const hasOfficeImport =
    src.includes("@/components/realscout/OfficeListingsUnderHero") ||
    src.includes("@/components/realscout/RealScoutListings");

  if (!hasOfficeImport) {
    src = ensureImport(
      src,
      'import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";'
    );
    changed = true;
  }

  if (!src.includes("CalendlyBookingSection")) {
    src = ensureImport(
      src,
      'import CalendlyBookingSection from "@/components/calendly/CalendlyBookingSection";'
    );
    changed = true;
  }

  if (!src.includes("BrandPortrait")) {
    src = ensureImport(
      src,
      'import BrandPortrait from "@/components/brand/BrandPortrait";'
    );
    changed = true;
  }

  if (!src.includes("SectionExtras")) {
    src = ensureImport(
      src,
      'import SectionExtras from "@/components/brand/SectionExtras";'
    );
    changed = true;
  }

  const listingName = src.includes("OfficeListingsUnderHero")
    ? "OfficeListingsUnderHero"
    : src.includes("RealScoutListings")
      ? "RealScoutListings"
      : "OfficeListingsUnderHero";

  // Remove existing listing widgets so we can place one under hero
  src = src.replace(/<(?:RealScoutListings|OfficeListingsUnderHero)(?:\s[^>]*)?\s*\/>\s*/g, "");

  // Brand portrait above first h1
  if (src.includes("<h1") && !src.includes("<BrandPortrait")) {
    src = src.replace(
      /(<h1[\s\S]*?>)/,
      `<div className="mb-6 flex justify-center">\n            <BrandPortrait size="lg" priority />\n          </div>\n          $1`
    );
    changed = true;
  }

  // Insert listings after hero: prefer after first h1 block's closing container
  if (!src.includes(`<${listingName}`)) {
    // After first max-w-* hero container that contains h1
    const heroMatch = src.match(
      /(<div className="max-w-[^"]*[\s\S]*?<h1[\s\S]*?<\/div>\s*)/
    );
    if (heroMatch) {
      src = src.replace(
        heroMatch[0],
        `${heroMatch[0]}\n          <${listingName} />\n\n`
      );
    } else {
      const h1End = src.search(/<\/h1>/);
      if (h1End !== -1) {
        // find closing of parent-ish after a few following tags — insert after next blank line block
        const after = src.indexOf("\n\n", h1End);
        const at = after === -1 ? h1End + 5 : after;
        src =
          src.slice(0, at) +
          `\n\n          <${listingName} />\n` +
          src.slice(at);
      } else {
        src = src.replace(
          /<Footer\s*\/>/,
          `<${listingName} />\n      <Footer />`
        );
      }
    }
    changed = true;
  }

  if (!src.includes("<CalendlyBookingSection")) {
    src = src.replace(
      /<Footer\s*\/>/,
      "<CalendlyBookingSection />\n      <Footer />"
    );
    changed = true;
  }

  // One SectionExtras before final CTA-ish / before Calendly if missing near end
  if ((src.match(/<SectionExtras/g) || []).length === 0) {
    src = src.replace(
      "<CalendlyBookingSection />",
      `<div className="container mx-auto px-4">
          <SectionExtras headline="Talk affordable homes with Dr. Jan" />
        </div>
      <CalendlyBookingSection />`
    );
    changed = true;
  }

  if (changed) fs.writeFileSync(file, src);
  return changed;
}

const files = walk(APP);
let n = 0;
for (const f of files) {
  if (processFile(f)) {
    n += 1;
    console.log("updated", path.relative(process.cwd(), f));
  }
}
console.log(`Done. Updated ${n} pages.`);
