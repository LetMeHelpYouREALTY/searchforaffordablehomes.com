import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import SchemaScript from "@/components/SchemaScript";
import {
  combineSchemas,
  generateRealEstateAgentSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = headers();
  const domain = headerList.get("x-domain") || "";
  const pathname = headerList.get("x-pathname") || "/";
  const config = getDomainConfig(domain);
  // Prefer www for this property (matches Vercel apex→www redirect).
  const siteUrl =
    config.domain === "searchforaffordablehomes.com"
      ? "https://www.searchforaffordablehomes.com"
      : config.domain !== "default"
        ? `https://www.${config.domain.replace(/^www\./, "")}`
        : "https://www.searchforaffordablehomes.com";
  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const canonicalUrl = new URL(canonicalPath, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `Affordable Homes Las Vegas | Dr. Jan Duffy, REALTOR®`,
      template: "%s | Affordable Homes Las Vegas",
    },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: "Dr. Jan Duffy" }],
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      type: "website",
      locale: "en_US",
      siteName: "Affordable Homes Las Vegas",
      url: canonicalUrl,
      images: [
        {
          url: "/images/agent/dr-jan-duffy-portrait.png",
          width: 1270,
          height: 1270,
          alt: "Dr. Jan Duffy, Las Vegas REALTOR® for affordable homes",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: config.heroHeadline,
      description: config.description,
      images: ["/images/agent/dr-jan-duffy-portrait.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    // Per-URL canonical (was incorrectly set to homepage for every page).
    alternates: {
      canonical: canonicalUrl,
    },
    // Optional HTML-tag verification for the www Search Console property.
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

const globalSchemas = combineSchemas(
  generateRealEstateAgentSchema(),
  generateOrganizationSchema(),
  generateWebSiteSchema(),
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        {/* WidgetTracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </head>
      <body>
        <SchemaScript schema={globalSchemas} id="global-entity-schema" />
        {children}
        <Analytics />

        {/* RealScout — load once globally (em.realscout.com + www.realscout.com in CSP) */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.js"
          type="module"
          strategy="afterInteractive"
        />

        {/* Calendly — load once globally for inline + popup widgets */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

        {process.env.NEXT_PUBLIC_GOOGLE_TAG_ID && (
          <>
            <Script
              id="google-tag"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');
              `}
            </Script>
          </>
        )}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
