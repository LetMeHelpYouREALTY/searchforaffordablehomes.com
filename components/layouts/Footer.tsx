import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import BrandLockup from "@/components/brand/BrandLockup";
import SectionExtras from "@/components/brand/SectionExtras";
import { siteConfig, agentInfo } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <SectionExtras
            tone="dark"
            headline="Affordable Homes — schedule with Dr. Jan Duffy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <BrandLockup tone="dark" asLink={false} />
            </div>
            <p className="text-slate-300 mb-4 text-sm">
              {siteConfig.brandLine} — Las Vegas, Henderson, and Summerlin MLS
              search. Berkshire Hathaway HomeServices Nevada Properties.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Search Las Vegas Homes"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Search Las Vegas Homes"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Search Las Vegas Homes"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/affordable-homes"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Affordable Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/affordable-homes/under-400k"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Homes Under $400K
                </Link>
              </li>
              <li>
                <Link
                  href="/affordable-homes/first-time-buyers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  First-Time Buyers
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Live MLS Listings
                </Link>
              </li>
              <li>
                <a
                  href="http://drjanduffy.realscout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  RealScout Search
                </a>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods/north-las-vegas"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  North Las Vegas
                </Link>
              </li>
              <li>
                <Link
                  href="/why-berkshire-hathaway"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Why Brokerage Support Matters
                </Link>
              </li>
              <li>
                <Link
                  href="/market-report"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market Report
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Real Estate Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buyers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Buying
                </Link>
              </li>
              <li>
                <Link
                  href="/buyers/california-relocator"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  California Relocators
                </Link>
              </li>
              <li>
                <Link
                  href="/sellers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Selling
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-homes"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Luxury Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/55-plus-communities"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  55+ Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/new-construction"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  New Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/market-insights"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - NAP (Name, Address, Phone) */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Dr. Jan Duffy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  9406 W Lake Mead Blvd, Suite 100
                  <br />
                  Las Vegas, NV 89134
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href="tel:+17025001942"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  (702) 500-1942
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href="mailto:homes@searchforaffordablehomes.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Homes@SearchForAffordableHomes.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Authority / external citations */}
        <div className="mt-10 border-t border-slate-800 pt-8">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-slate-500">
            Trusted resources
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400">
            <li>
              <a
                href="https://www.bhhsnv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                BHHS Nevada Properties
              </a>
            </li>
            <li>
              <a
                href="https://red.nv.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Nevada Real Estate Division
              </a>
            </li>
            <li>
              <a
                href="https://www.nar.realtor/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                NAR
              </a>
            </li>
            <li>
              <a
                href="https://www.hud.gov/buying"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                HUD Buying a Home
              </a>
            </li>
            <li>
              <a
                href="https://www.consumerfinance.gov/owning-a-home/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                CFPB Owning a Home
              </a>
            </li>
            <li>
              <a
                href="https://www.glvar.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GLVAR
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.name} · {agentInfo.name},{" "}
              {agentInfo.title}. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/faq"
                className="text-slate-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/google-business"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Google Business
              </Link>
              <a
                href="https://www.searchforaffordablehomes.com/sitemap.xml"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            Berkshire Hathaway HomeServices Nevada Properties since September
            2008 · License S.0197614.LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
