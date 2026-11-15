import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { SITE_BRAND } from "@/lib/affordable-homes-content";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const config = getDomainConfig(domain);
  return {
    metadataBase: new URL(SITE_BRAND.url),
    // No title.template — child pages already include full branded titles
    title: `${config.heroHeadline} | ${SITE_BRAND.name}`,
    description: config.description,
    keywords: config.keywords,
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      type: "website",
      locale: "en_US",
      siteName: SITE_BRAND.name,
      images: [
        {
          url: `${SITE_BRAND.url}${SITE_BRAND.logoSrc}`,
          width: 1270,
          height: 1282,
          alt: SITE_BRAND.name,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* RealScout — load once globally (em.realscout.com script + www.realscout.com API) */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.js"
          strategy="afterInteractive"
        />
        {/* Calendly — load once globally */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
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
      {/* Google Tag */}
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
      {/* Facebook Pixel */}
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
      <body>
        {children}
        <CalendlyBadge
          url={SITE_BRAND.calendlyShowingUrl}
          text="Schedule with Dr. Jan"
          color="#1e3a8a"
          textColor="#ffffff"
        />
        <Analytics />
      </body>
    </html>
  );
}
