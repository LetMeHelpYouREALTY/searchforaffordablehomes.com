import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info — GBP brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={SITE_BRAND.logoSrc}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-full border-2 border-amber-500 object-cover"
              />
              <div>
                <h3 className="text-lg font-bold leading-tight">
                  {SITE_BRAND.name}
                </h3>
                <p className="text-sm text-slate-400">
                  by {SITE_BRAND.agent}, REALTOR®
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm text-slate-300">
              {SITE_BRAND.gbpDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={SITE_BRAND.socialProfiles[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SITE_BRAND.socialProfiles[5]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE_BRAND.socialProfiles[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://drjanduffy.realscout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  All Properties
                </a>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/market-report"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Market Report
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={SITE_BRAND.gbpShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Google Business Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Real Estate Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buyers"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Home Buying
                </Link>
              </li>
              <li>
                <Link
                  href="/sellers"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Home Selling
                </Link>
              </li>
              <li>
                <Link
                  href="/new-construction"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  New Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods/mountains-edge"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Mountain&apos;s Edge
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods/southern-highlands"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Southern Highlands
                </Link>
              </li>
            </ul>
          </div>

          {/* NAP — must match GBP */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                <span className="text-sm text-slate-300">
                  {SITE_BRAND.address.street}
                  <br />
                  {SITE_BRAND.address.city}, {SITE_BRAND.address.state}{" "}
                  {SITE_BRAND.address.zip}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div className="flex flex-col text-sm">
                  <Link
                    href={`tel:${SITE_BRAND.phoneTel}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {SITE_BRAND.phoneDisplay}
                  </Link>
                  <a
                    href={SITE_BRAND.smsHref}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    Text / SMS
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" />
                <Link
                  href={`mailto:${SITE_BRAND.email}`}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {SITE_BRAND.email}
                </Link>
              </li>
              <li className="text-sm text-slate-400">
                Open daily 8:00 AM–8:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright + brokerage/license — FOOTER ONLY */}
        <div className="mt-8 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-400 md:text-left">
              © {currentYear} {SITE_BRAND.name}. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/faq"
                className="text-slate-400 transition-colors hover:text-white"
              >
                FAQ
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            {SITE_BRAND.brokerage} · License {SITE_BRAND.license}
          </p>
        </div>
      </div>
    </footer>
  );
}
