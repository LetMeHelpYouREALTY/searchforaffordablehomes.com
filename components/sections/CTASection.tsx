import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Home } from "lucide-react";
import BrandPortrait from "@/components/brand/BrandPortrait";
import SectionExtras from "@/components/brand/SectionExtras";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-[#0b2a6b] via-[#1e4fd6] to-[#163a9e] py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <BrandPortrait size="lg" className="ring-offset-[#1e4fd6]" />
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to Find Affordable Homes That Fit?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Dr. Jan Duffy pairs luxury-level advocacy with value-focused MLS
            search so you buy the right home—not just the cheapest listing.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1e4fd6] hover:bg-blue-50"
            >
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Home className="h-5 w-5" />
                Browse Affordable Homes
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="tel:+17025001942" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (702) 500-1942
              </Link>
            </Button>
          </div>

          <p className="text-sm text-blue-100">
            Berkshire Hathaway HomeServices Nevada Properties · 9406 W Lake Mead
            Blvd, Suite 100, Las Vegas, NV 89134
          </p>

          <SectionExtras
            tone="dark"
            headline="Schedule your affordable homes strategy call"
          />
        </div>
      </div>
    </section>
  );
}
