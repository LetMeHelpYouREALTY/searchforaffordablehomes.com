/**
 * Real listing-intent pages (not fake MLS detail IDs).
 * Conversion goal: click a RealScout office listing photo, or book Calendly.
 */

export type ListingGuide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  /** Direct AEO answer under the H1 question framing */
  directAnswer: string;
  widgetTitle: string;
  widgetSubtitle: string;
  priceMin: string;
  priceMax: string;
  /** RealScout property-types attr, e.g. ",SFR" or ",SFR,MF,TC" */
  propertyTypes: string;
  bullets: { title: string; text: string }[];
  related: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

export const listingGuides: ListingGuide[] = [
  {
    slug: "single-family",
    title: "Single-Family Homes for Sale Las Vegas",
    metaTitle: "Single-Family Homes Las Vegas | Live MLS + Tour Booking",
    metaDescription:
      "Browse live single-family MLS listings in Las Vegas and Henderson. Click a photo for details or book a showing with Dr. Jan Duffy on Calendly. Call (702) 500-1942.",
    h1: "Single-Family Homes for Sale in Las Vegas",
    eyebrow: "Live MLS · Single-family",
    intro:
      "Click any RealScout photo below for the full listing, or book a tour when you want private showings with Dr. Jan Duffy.",
    directAnswer:
      "Single-family homes in the Las Vegas Valley commonly list from the mid-$300Ks upward depending on square footage, lot size, and location. Use the live office listings below—inventory updates from MLS throughout the day.",
    widgetTitle: "Single-Family Homes on the Market",
    widgetSubtitle:
      "Click a listing image for photos, price, and details. Ready to tour? Book Calendly below.",
    priceMin: "200000",
    priceMax: "750000",
    propertyTypes: ",SFR",
    bullets: [
      {
        title: "Click the photo",
        text: "RealScout opens the full MLS detail—beds, baths, sq ft, and map—without a fake on-site detail page.",
      },
      {
        title: "Book the tour",
        text: "When a home fits, schedule on Calendly. Dr. Jan confirms access and builds a same-day shortlist.",
      },
      {
        title: "Payment fit first",
        text: "We match list price to your monthly target before you fall for the wrong address.",
      },
    ],
    related: [
      { href: "/affordable-homes", label: "Affordable homes guide" },
      { href: "/listings/under-500k", label: "Homes under $500K" },
      { href: "/neighborhoods", label: "Neighborhood guides" },
      { href: "/listings#schedule", label: "Book Calendly" },
    ],
    faqs: [
      {
        question: "How do I see more photos of a Las Vegas single-family home?",
        answer:
          "Click any listing image in the RealScout office widget on this page. That opens the live MLS listing with the full photo gallery, price, and property facts.",
      },
      {
        question: "How do I schedule a showing with Dr. Jan Duffy?",
        answer:
          "Use the Calendly scheduler on this page (or https://calendly.com/drjanduffy/showing). Pick a time, note the address if you already chose one, and Dr. Jan confirms the tour.",
      },
      {
        question: "What price range covers most single-family homes here?",
        answer:
          "Many payment-focused buyers shop roughly $200,000–$750,000 for single-family inventory across Las Vegas, Henderson, and North Las Vegas. Exact availability changes daily on MLS.",
      },
    ],
    keywords: [
      "single family homes Las Vegas",
      "houses for sale Las Vegas",
      "MLS single family Henderson",
    ],
  },
  {
    slug: "condos-townhomes",
    title: "Condos & Townhomes for Sale Las Vegas",
    metaTitle: "Condos & Townhomes Las Vegas | MLS Photos + Calendly",
    metaDescription:
      "Live condo and townhome MLS listings for Las Vegas and Henderson. Click RealScout photos for details or book a tour on Calendly with Dr. Jan Duffy. (702) 500-1942.",
    h1: "Condos and Townhomes for Sale in Las Vegas",
    eyebrow: "Live MLS · Condos & townhomes",
    intro:
      "Lower entry pricing and HOA-maintained exteriors. Click a RealScout image for the listing, or schedule a walkthrough on Calendly.",
    directAnswer:
      "Condos and townhomes often price below comparable single-family homes in the same ZIP because of shared walls and HOA dues. Always model HOA + insurance into your monthly payment before you tour.",
    widgetTitle: "Condos & Townhomes Available Now",
    widgetSubtitle:
      "Tap a photo for MLS details. Want keys in hand? Book a Calendly showing.",
    priceMin: "150000",
    priceMax: "550000",
    propertyTypes: ",MF,TC",
    bullets: [
      {
        title: "Read the HOA before you love it",
        text: "Dr. Jan reviews dues, reserves, and rental rules so payment surprises do not show up at closing.",
      },
      {
        title: "Click for the full gallery",
        text: "RealScout office listings open the MLS record—do not rely on a third-party scrape.",
      },
      {
        title: "Same-day tour slots",
        text: "Calendly bookings go straight to Dr. Jan’s calendar for Las Vegas Valley showings.",
      },
    ],
    related: [
      { href: "/listings/single-family", label: "Single-family homes" },
      { href: "/affordable-homes/under-400k", label: "Homes under $400K" },
      { href: "/buyers/first-time-buyers", label: "First-time buyer guide" },
      { href: "/listings#schedule", label: "Book Calendly" },
    ],
    faqs: [
      {
        question: "Are condo HOA fees included in the list price payment?",
        answer:
          "No. List price is the purchase price. HOA dues, taxes, and insurance stack on top of principal and interest. Dr. Jan builds a full payment model before you write an offer.",
      },
      {
        question: "Can I book a condo or townhome tour online?",
        answer:
          "Yes. Use Calendly on this page to pick a time. Include the MLS address or RealScout link in the booking notes when possible.",
      },
    ],
    keywords: [
      "condos for sale Las Vegas",
      "townhomes Henderson",
      "affordable townhomes Las Vegas",
    ],
  },
  {
    slug: "under-500k",
    title: "Homes Under $500K Las Vegas",
    metaTitle: "Homes Under $500K Las Vegas | Click MLS Photos or Book a Tour",
    metaDescription:
      "Payment-friendly Las Vegas homes under $500,000 with live RealScout MLS listings. Click a photo for details or schedule with Dr. Jan Duffy on Calendly. (702) 500-1942.",
    h1: "Las Vegas Homes Under $500,000",
    eyebrow: "Live MLS · Under $500K",
    intro:
      "A clear price ceiling for payment-focused buyers. Browse live listings below—click any image—or book Calendly when you are ready to tour.",
    directAnswer:
      "Homes under $500K in the Las Vegas Valley include single-family houses, townhomes, and condos. Square footage, HOA dues, and commute distance vary more than the sticker price alone.",
    widgetTitle: "MLS Homes Under $500K",
    widgetSubtitle:
      "Filtered live office listings. Click a photo to open the listing; use Calendly to lock a tour time.",
    priceMin: "150000",
    priceMax: "500000",
    propertyTypes: ",SFR,MF,TC",
    bullets: [
      {
        title: "Cap the search, not the quality",
        text: "Dr. Jan still runs comps, inspection strategy, and offer timing inside your $500K ceiling.",
      },
      {
        title: "One click to MLS detail",
        text: "RealScout images open the official listing—photos, map, and status.",
      },
      {
        title: "Tour without phone tag",
        text: "Calendly is the fastest path to a confirmed showing with Dr. Jan Duffy.",
      },
    ],
    related: [
      { href: "/affordable-homes/under-400k", label: "Homes under $400K" },
      { href: "/listings/single-family", label: "Single-family under filter" },
      { href: "/neighborhoods/north-las-vegas", label: "North Las Vegas" },
      { href: "/listings#schedule", label: "Book Calendly" },
    ],
    faqs: [
      {
        question: "Is $500K still affordable in Las Vegas in 2026?",
        answer:
          "For many buyers, yes—especially versus coastal metros—once rate, down payment, taxes, insurance, and HOA are modeled. Dr. Jan maps that payment before you tour.",
      },
      {
        question: "How do I tour a home I clicked in RealScout?",
        answer:
          "Copy the address from the RealScout listing, then book a time on Calendly and paste the address in the notes. Dr. Jan confirms access with the listing agent.",
      },
    ],
    keywords: [
      "homes under 500k Las Vegas",
      "houses under 500000 Las Vegas",
      "affordable homes under 500k",
    ],
  },
  {
    slug: "newest",
    title: "Newest Las Vegas Homes for Sale",
    metaTitle: "Newest Las Vegas Listings | Live MLS + Calendly Tours",
    metaDescription:
      "See the newest Las Vegas and Henderson MLS listings first. Click RealScout photos for details or book a same-week tour with Dr. Jan Duffy on Calendly. (702) 500-1942.",
    h1: "Newest Homes for Sale in Las Vegas",
    eyebrow: "Live MLS · Newest first",
    intro:
      "Fresh inventory moves fast. Click a new listing photo the moment it fits—or book Calendly so Dr. Jan can chase access the same day.",
    directAnswer:
      "New MLS listings in Las Vegas often draw showing traffic within the first 48–72 hours when priced to market. Watching newest-first inventory and booking tours quickly matters more than waiting for the weekend open house.",
    widgetTitle: "Just Listed — Click to Open",
    widgetSubtitle:
      "Sorted newest first. Tap any image for the MLS record, then schedule on Calendly if you want inside.",
    priceMin: "150000",
    priceMax: "900000",
    propertyTypes: ",SFR,MF,TC",
    bullets: [
      {
        title: "Speed beats wish lists",
        text: "When a payment-fit home hits MLS, Dr. Jan can request showings the same afternoon after your Calendly booking.",
      },
      {
        title: "No fake detail pages",
        text: "Every photo click goes to live RealScout/MLS data—not a placeholder on this site.",
      },
      {
        title: "Alerts + human follow-up",
        text: "Pair automated RealScout alerts with a booked consult so someone is chasing the right houses with you.",
      },
    ],
    related: [
      { href: "/listings", label: "All live listings" },
      { href: "/listings/under-500k", label: "Under $500K filter" },
      { href: "/new-construction", label: "New construction guide" },
      { href: "/listings#schedule", label: "Book Calendly" },
    ],
    faqs: [
      {
        question: "How often do new Las Vegas listings appear?",
        answer:
          "MLS inventory turns throughout the week. This page’s RealScout widget sorts newest first so you can click fresh photos as they post.",
      },
      {
        question: "Should I book Calendly before I find a house?",
        answer:
          "Yes, if you are pre-approved and ready. A reserved consult window lets Dr. Jan pull payment-fit newest listings and line up tours without delay.",
      },
    ],
    keywords: [
      "new listings Las Vegas",
      "just listed homes Las Vegas",
      "newest MLS listings Henderson",
    ],
  },
  {
    slug: "henderson",
    title: "Henderson Homes for Sale",
    metaTitle: "Henderson Homes for Sale | MLS Photos + Book a Tour",
    metaDescription:
      "Search Henderson, NV homes with live RealScout MLS listings. Click listing photos for details or schedule a showing with Dr. Jan Duffy on Calendly. (702) 500-1942.",
    h1: "Henderson Homes for Sale",
    eyebrow: "Live MLS · Henderson focus",
    intro:
      "Henderson inventory across Green Valley, Inspirada, Anthem corridors, and more. Click RealScout photos for listing facts, or book Calendly for a guided tour.",
    directAnswer:
      "Henderson median pricing runs near the mid-$400Ks depending on product type and square footage (see site market stats, January 2026). Use live MLS photos below for current for-sale homes—not a static count.",
    widgetTitle: "Henderson-Area Value Listings",
    widgetSubtitle:
      "Office listings in the payment-friendly band. Click an image for MLS detail; book Calendly to tour Henderson addresses.",
    priceMin: "200000",
    priceMax: "650000",
    propertyTypes: ",SFR,MF,TC",
    bullets: [
      {
        title: "City-level search, MLS truth",
        text: "Filter in RealScout after you click through, or tell Dr. Jan your Henderson ZIP targets on Calendly.",
      },
      {
        title: "Pair with neighborhood guides",
        text: "Read Green Valley, Inspirada, and Henderson hub pages, then return here to click live photos.",
      },
      {
        title: "Tour logistics handled",
        text: "Calendly bookings include time for multi-stop Henderson showings when inventory allows.",
      },
    ],
    related: [
      {
        href: "/neighborhoods/henderson",
        label: "Henderson neighborhood guide",
      },
      { href: "/neighborhoods/green-valley", label: "Green Valley" },
      { href: "/neighborhoods/inspirada", label: "Inspirada" },
      { href: "/listings#schedule", label: "Book Calendly" },
    ],
    faqs: [
      {
        question: "How do I tour Henderson homes with Dr. Jan?",
        answer:
          "Click RealScout photos to shortlist addresses, then book a slot on Calendly. Paste the addresses in the invite notes so access can be requested in advance.",
      },
      {
        question: "Do these listings include only Henderson city limits?",
        answer:
          "The widget shows live office inventory in a payment band useful for Henderson buyers. After you open a listing, confirm the city/ZIP on the MLS record, or ask Dr. Jan to tighten the search on your consult.",
      },
    ],
    keywords: [
      "Henderson homes for sale",
      "Henderson NV real estate",
      "houses for sale Henderson Nevada",
    ],
  },
];

export function getListingGuide(slug: string): ListingGuide | undefined {
  return listingGuides.find((guide) => guide.slug === slug);
}

export function getListingGuideSlugs(): string[] {
  return listingGuides.map((guide) => guide.slug);
}
