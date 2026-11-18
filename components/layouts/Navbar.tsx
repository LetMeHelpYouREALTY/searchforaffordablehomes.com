"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { href: "/", label: "Home", external: false },
    {
      href: "http://drjanduffy.realscout.com/",
      label: "Properties",
      external: true,
    },
    { href: "/neighborhoods", label: "Neighborhoods", external: false },
    { href: "/about", label: "About", external: false },
    { href: "/contact", label: "Contact", external: false },
  ];

  const serviceLinks = [
    { href: "/buyers", label: "Home Buying" },
    { href: "/sellers", label: "Home Selling" },
    { href: "/luxury-homes", label: "Luxury Homes" },
    { href: "/55-plus-communities", label: "55+ Communities" },
    { href: "/new-construction", label: "New Construction" },
    { href: "/market-report", label: "Market Report" },
    { href: "/market-insights", label: "Market Insights" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "py-2 shadow-sm" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 min-w-0"
            aria-label={SITE_BRAND.name}
          >
            <Image
              src={SITE_BRAND.logoSrc}
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 shrink-0 rounded-full border border-champagne object-cover"
              priority
            />
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-display text-base font-semibold leading-tight text-ink transition-colors hover:text-champagne-deep md:text-lg">
                {SITE_BRAND.name}
              </span>
              <span className="hidden text-xs tracking-wide text-slate-500 sm:block">
                by {SITE_BRAND.agent}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {mainNavLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-700 no-underline transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 no-underline transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-slate-700 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  } else if (e.key === "Escape") {
                    setIsServicesOpen(false);
                  }
                }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                  role="menu"
                  aria-orientation="vertical"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-slate-700 no-underline hover:bg-slate-50 hover:text-ink focus-visible:bg-slate-50 focus-visible:text-ink focus-visible:outline-none"
                      onClick={() => setIsServicesOpen(false)}
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#listings"
              className="text-sm font-medium text-slate-700 no-underline transition-colors hover:text-ink"
            >
              Browse Homes
            </Link>
            <Button asChild className="rounded-none bg-ink hover:bg-ink-soft">
              <Link href="/#schedule" className="no-underline">
                Schedule Showing
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              asChild
              size="sm"
              className="rounded-none bg-ink hover:bg-ink-soft"
            >
              <Link
                href={`tel:${SITE_BRAND.phoneTel}`}
                className="no-underline"
              >
                <Phone className="h-4 w-4" />
              </Link>
            </Button>
            <button
              className="rounded-md p-1 text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-1 pt-4">
              {mainNavLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded px-3 py-2 font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50 hover:text-ink"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded px-3 py-2 font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50 hover:text-ink"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <Link
                href="/#listings"
                className="rounded px-3 py-2 font-medium text-ink no-underline hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Homes
              </Link>
              <Link
                href="/#schedule"
                className="rounded px-3 py-2 font-medium text-ink no-underline hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule a Showing
              </Link>

              {/* Services Section */}
              <div className="mt-2 border-t border-slate-200 pt-2">
                <span className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Services
                </span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded px-3 py-2 font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50 hover:text-ink"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <Button
                  asChild
                  className="w-full rounded-none bg-ink hover:bg-ink-soft"
                >
                  <Link
                    href="/#schedule"
                    className="flex items-center justify-center gap-2 no-underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book on Calendly
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-none border-ink"
                >
                  <Link
                    href={`tel:${SITE_BRAND.phoneTel}`}
                    className="flex items-center justify-center gap-2 no-underline"
                  >
                    <Phone className="h-4 w-4" />
                    Call {SITE_BRAND.phoneDisplay}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
