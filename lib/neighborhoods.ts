/**
 * Las Vegas Valley neighborhood data for /neighborhoods and /neighborhoods/[slug].
 *
 * Every number here is sourced and dated. Market figures are Las Vegas REALTORS®
 * (LVR) MLS closed sales over the trailing 12 months, read from the community or
 * ZIP market pages listed in `market.sourceUrl` on the date in `market.asOf`.
 * Refresh them together; do not mix months.
 *
 * Fair Housing: describe places, homes and amenities only. No school quality,
 * safety/crime, "family-friendly", "established community" or who an area is
 * "best for". Name schools only as facts, never as rankings.
 */

export type Region =
  | "Summerlin & West"
  | "Northwest"
  | "Southwest"
  | "Henderson"
  | "North Las Vegas"
  | "Central & Urban"
  | "East Las Vegas";

export interface MarketSnapshot {
  /** Median closed price, trailing 12 months */
  medianSold: number;
  /** Median days from listing to sale */
  daysToSell: number;
  /** Median sale price as % of original list price */
  saleToListPct: number;
  /** Closed sales in the 12 months, when the source reports it */
  sales12mo?: number;
  monthsSupply: number;
  /** ISO date the source figures were pulled */
  asOf: string;
  /** What the figures cover, shown on the page */
  scope: string;
  sourceUrl: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Neighborhood {
  slug: string;
  name: string;
  region: Region;
  /** City or unincorporated town the area sits in */
  locality: string;
  zips: string[];
  tagline: string;
  summary: string;
  facts: Fact[];
  housing: string;
  places: string[];
  buyerNotes: string[];
  market: MarketSnapshot;
  related: string[];
  /** Optional link to a deeper page on this site, e.g. a 55+ guide */
  seeAlso?: { label: string; href: string };
}

// Freddie Mac PMMS, week of Oct 22, 2026: https://www.freddiemac.com/pmms
export const MORTGAGE_RATE = {
  rate30yr: 7.32,
  asOf: "2026-10-22",
  source: "Freddie Mac Primary Mortgage Market Survey",
  sourceUrl: "https://www.freddiemac.com/pmms",
};

// LVR September 2026 release (Oct 6, 2026):
// https://members.lasvegasrealtor.com/statistics/pdf/2026-09-GLVAR-Article.pdf
export const VALLEY_STATS = {
  medianSingleFamily: 470000,
  month: "September 2026",
  singleFamilyInventory: 7995,
  monthsSupply: 5,
  source: "Las Vegas REALTORS® monthly report, released Oct 6, 2026",
  sourceUrl: "https://members.lasvegasrealtor.com/statistics/pdf/2026-09-GLVAR-Article.pdf",
};

export const DATA_REVIEWED = "2026-10-25";

/** Principal and interest only, 30-year fixed, 10% down. */
export function estimateMonthlyPI(price: number, ratePct = MORTGAGE_RATE.rate30yr, downPct = 10) {
  const loan = price * (1 - downPct / 100);
  const r = ratePct / 100 / 12;
  const n = 360;
  return Math.round((loan * r) / (1 - Math.pow(1 + r, -n)));
}

export function formatUSD(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

const VIP = "https://www.viphomes.vegas";

export const neighborhoods: Neighborhood[] = [
  // ---------------------------------------------------------------- Summerlin & West
  {
    slug: "summerlin",
    name: "Summerlin",
    region: "Summerlin & West",
    locality: "Las Vegas",
    zips: ["89134", "89135", "89138", "89144", "89145"],
    tagline: "22,500 acres of villages on the edge of Red Rock Canyon",
    summary:
      "Summerlin is a 22,500-acre master plan on the west rim of the valley, started in 1990 by Howard Hughes. It spans five ZIP codes and dozens of villages, from 1990s resale streets to new townhomes. Prices swing widely by village, so the ZIP matters as much as the name.",
    facts: [
      { label: "Size", value: "22,500 acres" },
      { label: "First homes", value: "1990" },
      { label: "Golf courses", value: "10" },
      { label: "ZIP codes", value: "89134, 89135, 89138, 89144, 89145" },
    ],
    housing:
      "Condos, townhomes, single-family resales and new construction, plus age-restricted Sun City Summerlin and guard-gated luxury in The Ridges.",
    places: [
      "Red Rock Canyon National Conservation Area on the western edge",
      "Downtown Summerlin shopping and dining district",
      "Ten golf courses across public and private clubs",
    ],
    buyerNotes: [
      "Summerlin homes sold at a median 95.8% of original list price, so there is room to negotiate.",
      "For a lower entry price, compare condos and townhomes in 89134 and 89145 against single-family homes in 89138.",
    ],
    market: {
      medianSold: 640000,
      daysToSell: 36,
      saleToListPct: 95.8,
      sales12mo: 2295,
      monthsSupply: 4.7,
      asOf: "2026-10-23",
      scope: "All Summerlin villages",
      sourceUrl: `${VIP}/summerlin`,
    },
    related: ["summerlin-west", "the-ridges", "peccole-ranch", "the-lakes"],
    seeAlso: { label: "Sun City Summerlin 55+ guide", href: "/55-plus-communities/sun-city-summerlin" },
  },
  {
    slug: "summerlin-west",
    name: "Summerlin West",
    region: "Summerlin & West",
    locality: "Las Vegas",
    zips: ["89138"],
    tagline: "Summerlin's newest villages, west of the 215",
    summary:
      "Summerlin West is the part of Summerlin west of the 215 Beltway, all in ZIP 89138. The Vistas started it in 2000. Kestrel, Redpoint and Redpoint Square are selling new homes today, including townhome neighborhoods at lower price points than the detached homes.",
    facts: [
      { label: "ZIP code", value: "89138" },
      { label: "First village", value: "The Vistas, 2000 (815 acres)" },
      { label: "Newest villages", value: "Kestrel (sales since 2022), Redpoint (since 2020)" },
      { label: "Kestrel elevation", value: "Just over 3,000 feet" },
    ],
    housing:
      "New-construction single-family homes from builders including Woodside, KB Home, Taylor Morrison, Lennar and Pulte, plus townhomes in Redpoint Square from Toll Brothers and Tri Pointe.",
    places: [
      "The Vistas Park, 24 acres with lighted ball fields",
      "Bluebird Park and the 7.5-acre Kestrel Creek Arroyo greenway",
      "Minutes from Downtown Summerlin and Red Rock Canyon",
    ],
    buyerNotes: [
      "Townhomes in Redpoint Square and Kestrel Commons are the lowest-cost way into new Summerlin West construction.",
      "ZIP 89138 had 5.1 months of supply, and homes closed at 95.9% of original list.",
    ],
    market: {
      medianSold: 778750,
      daysToSell: 38,
      saleToListPct: 95.9,
      sales12mo: 732,
      monthsSupply: 5.1,
      asOf: "2026-10-19",
      scope: "ZIP 89138",
      sourceUrl: `${VIP}/zip/89138`,
    },
    related: ["summerlin", "the-ridges", "skye-canyon"],
  },
  {
    slug: "the-ridges",
    name: "The Ridges",
    region: "Summerlin & West",
    locality: "Las Vegas",
    zips: ["89135"],
    tagline: "Guard-gated custom estates in Summerlin South",
    summary:
      "The Ridges is a 793-acre guard-gated village in Summerlin South with about 1,000 homes. Its former Bear's Best course closed in June 2025 and is being rebuilt as the private Amara Golf Club. This is the top of the Summerlin market, and sales move slowly.",
    facts: [
      { label: "Size", value: "793 acres" },
      { label: "Homes", value: "About 1,000" },
      { label: "Gate", value: "Guard-gated, staffed 24 hours" },
      { label: "Golf", value: "Amara Golf Club (private, former Bear's Best)" },
    ],
    housing:
      "Custom and semi-custom estates, gated sub-neighborhoods, and a smaller set of villas and townhome-style residences.",
    places: [
      "Amara Golf Club redevelopment on the former Bear's Best site",
      "Downtown Summerlin and Red Rock Casino nearby",
      "Red Rock Canyon National Conservation Area to the west",
    ],
    buyerNotes: [
      "With 13.1 months of supply and sales at 93.7% of original list, buyers here have leverage.",
      "A median 88 days to sell means sellers expect a negotiation.",
    ],
    market: {
      medianSold: 3337500,
      daysToSell: 88,
      saleToListPct: 93.7,
      sales12mo: 38,
      monthsSupply: 13.1,
      asOf: "2026-10-21",
      scope: "The Ridges (small sample: 38 sales)",
      sourceUrl: `${VIP}/the-ridges`,
    },
    related: ["summerlin", "summerlin-west", "southern-highlands"],
  },
  {
    slug: "peccole-ranch",
    name: "Peccole Ranch",
    region: "Summerlin & West",
    locality: "Las Vegas",
    zips: ["89117", "89145"],
    tagline: "Tree-lined 1990s master plan next to Summerlin",
    summary:
      "Peccole Ranch is a 640-acre master plan between Charleston, Sahara, Durango and Buffalo, developed by the Peccole family. Most homes date to the late 1980s and 1990s. It sits just east of Summerlin at lower prices.",
    facts: [
      { label: "Size", value: "About 640 acres" },
      { label: "Neighborhoods", value: "22, some guard-gated" },
      { label: "Boundaries", value: "Charleston, Sahara, Durango, Buffalo" },
      { label: "ZIP codes", value: "89117, 89145" },
    ],
    housing: "Condos, townhomes, single-family homes and guard-gated custom estates.",
    places: [
      "Greenbelt walking paths through common areas",
      "Next to Queensridge and Downtown Summerlin",
      "Quick access to the 215 and Charleston corridor",
    ],
    buyerNotes: [
      "ZIP 89145 closed at a $398,000 median, about $240,000 under Summerlin overall.",
      "Older homes here often need updating, so budget for it in the offer price.",
    ],
    market: {
      medianSold: 398000,
      daysToSell: 27,
      saleToListPct: 96.4,
      monthsSupply: 4,
      asOf: "2026-10-21",
      scope: "ZIP 89145",
      sourceUrl: `${VIP}/zip/89145`,
    },
    related: ["the-lakes", "summerlin", "spring-valley"],
  },
  {
    slug: "the-lakes",
    name: "The Lakes",
    region: "Summerlin & West",
    locality: "Las Vegas",
    zips: ["89117"],
    tagline: "Waterfront living around 30-acre Lake Sahara",
    summary:
      "The Lakes is a two-square-mile community built from 1984 around Lake Sahara, a man-made lake of about 30 acres. Lakefront villages are gated. It is about 15 minutes to the Strip.",
    facts: [
      { label: "Lake", value: "Lake Sahara, about 30 acres" },
      { label: "Size", value: "About 2 square miles" },
      { label: "Built from", value: "1984" },
      { label: "ZIP code", value: "89117" },
    ],
    housing: "Lakefront and lake-view single-family homes, condos and townhomes.",
    places: [
      "Lake Sahara shoreline paths",
      "About 15 minutes to the Strip and 20 to the airport",
      "Sahara Avenue and Desert Inn Road shopping corridors",
    ],
    buyerNotes: [
      "Lake-view condos and townhomes are the entry point, well under the $479,950 community median.",
      "Only 78 sales in 12 months, so a single sale can move the median.",
    ],
    market: {
      medianSold: 479950,
      daysToSell: 33,
      saleToListPct: 96.2,
      sales12mo: 78,
      monthsSupply: 4,
      asOf: "2026-10-21",
      scope: "The Lakes",
      sourceUrl: `${VIP}/the-lakes`,
    },
    related: ["peccole-ranch", "spring-valley", "summerlin"],
  },

  // ---------------------------------------------------------------- Northwest
  {
    slug: "skye-canyon",
    name: "Skye Canyon",
    region: "Northwest",
    locality: "Las Vegas",
    zips: ["89166"],
    tagline: "1,700-acre master plan at the northwest edge",
    summary:
      "Skye Canyon is a 1,700-acre master plan by Olympia Companies that opened in 2016 in the City of Las Vegas. Most homes are new or nearly new. Inventory in 89166 has grown, which gives buyers more choice.",
    facts: [
      { label: "Size", value: "1,700 acres" },
      { label: "Developer", value: "Olympia Companies" },
      { label: "Opened", value: "2016" },
      { label: "ZIP code", value: "89166" },
    ],
    housing: "New and nearly new single-family homes and townhomes from multiple national builders.",
    places: [
      "Skye Center community hub",
      "Near Mount Charleston access via US-95",
      "About 30 minutes to the Strip",
    ],
    buyerNotes: [
      "Homes sold at 98.1% of original list, tighter than Summerlin, so lead with a clean offer.",
      "Builder incentives on new inventory can lower the payment more than a price cut.",
    ],
    market: {
      medianSold: 534000,
      daysToSell: 36,
      saleToListPct: 98.1,
      sales12mo: 317,
      monthsSupply: 4.1,
      asOf: "2026-10-18",
      scope: "Skye Canyon",
      sourceUrl: `${VIP}/skye-canyon`,
    },
    related: ["providence", "centennial-hills", "summerlin-west"],
  },
  {
    slug: "centennial-hills",
    name: "Centennial Hills",
    region: "Northwest",
    locality: "Las Vegas",
    zips: ["89131", "89143", "89149", "89166"],
    tagline: "Northwest Las Vegas with a wide range of price points",
    summary:
      "Centennial Hills covers a large stretch of northwest Las Vegas, from 1990s resale tracts to newer custom homes. It has one of the deepest inventories in the valley. Providence and Skye Canyon sit inside or next to it.",
    facts: [
      { label: "ZIP codes", value: "89131, 89143, 89149, 89166" },
      { label: "Homes for sale", value: "667" },
      { label: "City", value: "City of Las Vegas" },
      { label: "Freeway access", value: "US-95 and the 215 Beltway" },
    ],
    housing: "Single-family resales, townhomes, newer construction and custom homes on larger lots.",
    places: [
      "Floyd Lamb Park at Tule Springs",
      "Tule Springs Fossil Beds National Monument to the north",
      "Centennial Center shopping",
    ],
    buyerNotes: [
      "667 homes for sale means real selection under the $510,000 median.",
      "Larger-lot and custom homes pull the area median up, so set filters by lot size.",
    ],
    market: {
      medianSold: 510000,
      daysToSell: 28,
      saleToListPct: 97.6,
      monthsSupply: 5.2,
      asOf: "2026-10-24",
      scope: "Centennial Hills",
      sourceUrl: `${VIP}/centennial-hills`,
    },
    related: ["providence", "skye-canyon", "aliante"],
  },
  {
    slug: "providence",
    name: "Providence",
    region: "Northwest",
    locality: "Las Vegas",
    zips: ["89166", "89149"],
    tagline: "1,200-acre Focus Property Group master plan",
    summary:
      "Providence is a 1,200-acre master plan in northwest Las Vegas, with first homes in 2006. It sells fast and near full price. Supply was tight at 3.5 months.",
    facts: [
      { label: "Size", value: "About 1,200 acres" },
      { label: "Developer", value: "Focus Property Group" },
      { label: "First homes", value: "2006" },
      { label: "Typical HOA", value: "About $150 a month" },
    ],
    housing: "Single-family homes and townhomes, mostly built from 2006 on.",
    places: [
      "Community parks and trail network inside the plan",
      "Near Skye Canyon and Centennial Hills shopping",
      "About 25 minutes to the Strip",
    ],
    buyerNotes: [
      "A median 23 days to sell at 98.9% of list means pre-approval before you tour.",
      "Providence medians run about $50,000 below Skye Canyon next door.",
    ],
    market: {
      medianSold: 482500,
      daysToSell: 23,
      saleToListPct: 98.9,
      sales12mo: 188,
      monthsSupply: 3.5,
      asOf: "2026-10-21",
      scope: "Providence",
      sourceUrl: `${VIP}/providence`,
    },
    related: ["skye-canyon", "centennial-hills", "aliante"],
  },

  // ---------------------------------------------------------------- Southwest
  {
    slug: "southern-highlands",
    name: "Southern Highlands",
    region: "Southwest",
    locality: "Las Vegas (unincorporated Clark County)",
    zips: ["89141"],
    tagline: "Mostly gated master plan around a private golf club",
    summary:
      "Southern Highlands is a mostly gated master plan at the south end of the valley, started in 1999, with about 5,000 homes. The private Southern Highlands Golf Club sits at the center. The airport is about 12 minutes away.",
    facts: [
      { label: "Homes", value: "About 5,000" },
      { label: "Started", value: "1999" },
      { label: "Golf", value: "Private, 18 holes" },
      { label: "ZIP code", value: "89141" },
    ],
    housing: "Gated single-family neighborhoods, some guard-gated estate sections, plus condos and townhomes.",
    places: [
      "Southern Highlands Golf Club",
      "About 12 minutes to Harry Reid International Airport",
      "Quick access to I-15 and the 215",
    ],
    buyerNotes: [
      "Estate sections lift the median; non-estate gated neighborhoods trade well below $617,000.",
      "Sales closed at 96.5% of original list, so pricing room exists.",
    ],
    market: {
      medianSold: 617000,
      daysToSell: 28,
      saleToListPct: 96.5,
      sales12mo: 320,
      monthsSupply: 4.9,
      asOf: "2026-10-21",
      scope: "Southern Highlands",
      sourceUrl: `${VIP}/southern-highlands`,
    },
    related: ["mountains-edge", "enterprise", "silverado-ranch"],
  },
  {
    slug: "mountains-edge",
    name: "Mountain's Edge",
    region: "Southwest",
    locality: "Las Vegas (unincorporated Clark County)",
    zips: ["89178", "89179", "89141"],
    tagline: "12,500 homes and Exploration Peak Park",
    summary:
      "Mountain's Edge is a southwest master plan with about 12,500 homes, mostly built after 2004. Its anchor is Exploration Peak Park, nearly 80 acres around a 2,846-foot peak with trails to the top. It is one of the more affordable master plans in the southwest.",
    facts: [
      { label: "Homes", value: "About 12,500" },
      { label: "Built from", value: "2004" },
      { label: "Signature park", value: "Exploration Peak Park, nearly 80 acres" },
      { label: "Golf", value: "None" },
    ],
    housing: "Townhomes and single-family homes from many builders, with some gated neighborhoods.",
    places: [
      "Exploration Peak Park trail to a 2,846-foot summit",
      "About 20 minutes to the Strip and the airport",
      "Blue Diamond Road and Durango Drive retail",
    ],
    buyerNotes: [
      "The $450,000 median sits $20,000 under the valley-wide single-family median.",
      "Townhomes in 89178 have recently closed in the low $300,000s.",
    ],
    market: {
      medianSold: 450000,
      daysToSell: 34,
      saleToListPct: 97.6,
      sales12mo: 346,
      monthsSupply: 4.4,
      asOf: "2026-10-21",
      scope: "Mountain's Edge",
      sourceUrl: `${VIP}/mountains-edge`,
    },
    related: ["enterprise", "rhodes-ranch", "southern-highlands"],
  },
  {
    slug: "rhodes-ranch",
    name: "Rhodes Ranch",
    region: "Southwest",
    locality: "Spring Valley (unincorporated Clark County)",
    zips: ["89148", "89178"],
    tagline: "Guard-gated golf community at a mid-range price",
    summary:
      "Rhodes Ranch is a guard-gated golf community built by Rhodes Homes from 1997, with about 4,000 homes. It wraps the 18-hole Rhodes Ranch Golf Club designed by Ted Robinson. It is one of the lower-priced guard-gated options in the valley.",
    facts: [
      { label: "Homes", value: "About 4,000" },
      { label: "Built from", value: "1997" },
      { label: "Gate", value: "Guard-gated" },
      { label: "Golf", value: "Rhodes Ranch Golf Club, 18 holes" },
    ],
    housing: "One- and two-story single-family homes plus a gated condo community.",
    places: [
      "Rhodes Ranch Golf Club (Ted Robinson design)",
      "35,000-square-foot recreation center",
      "Durango Drive corridor to the 215",
    ],
    buyerNotes: [
      "Gated condos inside Rhodes Ranch are the lowest-cost way behind the guard gate.",
      "ZIP 89148 closed at a $480,000 median with 4.7 months of supply.",
    ],
    market: {
      medianSold: 480000,
      daysToSell: 32,
      saleToListPct: 97.3,
      monthsSupply: 4.7,
      asOf: "2026-10-19",
      scope: "ZIP 89148 (includes Rhodes Ranch and nearby subdivisions)",
      sourceUrl: `${VIP}/zip/89148`,
    },
    related: ["spring-valley", "mountains-edge", "enterprise"],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    region: "Southwest",
    locality: "Enterprise (unincorporated Clark County)",
    zips: ["89139", "89141", "89178", "89179", "89183"],
    tagline: "Nevada's largest unincorporated town",
    summary:
      "Enterprise is an unincorporated town in the south valley, founded in 1996. It grew from 14,676 residents in 2000 to 221,831 in 2020. Mountain's Edge, Southern Highlands and much of the newer south-valley housing sit inside it.",
    facts: [
      { label: "Population", value: "221,831 (2020 Census)" },
      { label: "Founded", value: "1996" },
      { label: "Government", value: "Clark County" },
      { label: "Core ZIPs", value: "89139, 89141, 89178, 89179, 89183" },
    ],
    housing: "Newer single-family homes, townhomes and condos across dozens of subdivisions.",
    places: [
      "I-15 and the 215 Beltway",
      "South Point and the Silverado Ranch retail corridor",
      "Mountain's Edge and Southern Highlands master plans",
    ],
    buyerNotes: [
      "ZIP 89139 had 7 months of supply, the most buyer-friendly in this group.",
      "Newer homes here often have solar or HOA costs worth checking before you offer.",
    ],
    market: {
      medianSold: 459450,
      daysToSell: 38,
      saleToListPct: 97.4,
      sales12mo: 534,
      monthsSupply: 7,
      asOf: "2026-10-21",
      scope: "ZIP 89139",
      sourceUrl: `${VIP}/zip/89139`,
    },
    related: ["mountains-edge", "southern-highlands", "silverado-ranch"],
  },
  {
    slug: "silverado-ranch",
    name: "Silverado Ranch",
    region: "Southwest",
    locality: "Unincorporated Clark County",
    zips: ["89183", "89123"],
    tagline: "South-valley value near I-15 and the 215",
    summary:
      "Silverado Ranch is a south-valley area along Silverado Ranch Boulevard, between I-15 and the Henderson line. It is mostly 1990s and 2000s single-family homes. ZIP 89183 is one of the lower-priced single-family markets on the south side.",
    facts: [
      { label: "ZIP codes", value: "89183, 89123" },
      { label: "Government", value: "Clark County" },
      { label: "Park", value: "Silverado Ranch Park" },
      { label: "Closed sales, 12 months", value: "437 (89183)" },
    ],
    housing: "Single-family homes, townhomes and condos, mostly built in the 1990s and 2000s.",
    places: [
      "Silverado Ranch Park with ball fields, skate park and dog park",
      "Close to I-15, the 215 and the airport",
      "Silverado Ranch Boulevard shopping",
    ],
    buyerNotes: [
      "ZIP 89183 closed at a $395,000 median, $75,000 under the valley single-family median.",
      "Homes closed at 97.9% of list, so price-reduced listings deserve a look.",
    ],
    market: {
      medianSold: 395000,
      daysToSell: 28,
      saleToListPct: 97.9,
      sales12mo: 437,
      monthsSupply: 5.3,
      asOf: "2026-10-21",
      scope: "ZIP 89183",
      sourceUrl: `${VIP}/zip/89183`,
    },
    related: ["enterprise", "southern-highlands", "green-valley"],
  },
  {
    slug: "spring-valley",
    name: "Spring Valley",
    region: "Southwest",
    locality: "Spring Valley (unincorporated Clark County)",
    zips: ["89147", "89117", "89103", "89146", "89148"],
    tagline: "Central-west location two miles from the Strip",
    summary:
      "Spring Valley is an unincorporated town two miles west of the Strip, formed in 1981, with 215,597 residents in 2020. It includes the Chinatown corridor on Spring Mountain Road. Most homes date from the 1980s to the 2000s.",
    facts: [
      { label: "Population", value: "215,597 (2020 Census)" },
      { label: "Formed", value: "1981" },
      { label: "Distance to Strip", value: "About 2 miles" },
      { label: "ZIP codes", value: "89147, 89117, 89103, 89146, 89148" },
    ],
    housing: "Single-family resales, townhomes and a large condo stock.",
    places: [
      "Chinatown dining corridor on Spring Mountain Road",
      "Quick access to the 215 and I-15",
      "Rhodes Ranch on its southwest side",
    ],
    buyerNotes: [
      "ZIP 89147 closed at a $410,000 median in about 25 days.",
      "Condos in 89103 trade far lower, but check HOA reserves and rental caps first.",
    ],
    market: {
      medianSold: 410000,
      daysToSell: 25,
      saleToListPct: 97,
      monthsSupply: 4.1,
      asOf: "2026-10-21",
      scope: "ZIP 89147",
      sourceUrl: `${VIP}/zip/89147`,
    },
    related: ["rhodes-ranch", "the-lakes", "paradise"],
  },

  // ---------------------------------------------------------------- Henderson
  {
    slug: "henderson",
    name: "Henderson",
    region: "Henderson",
    locality: "Henderson",
    zips: ["89002", "89011", "89012", "89014", "89015", "89044", "89052", "89074"],
    tagline: "Nevada's second-largest city, on the southeast side",
    summary:
      "Henderson is Nevada's second-largest city, about 320,000 residents across 107 square miles, incorporated in 1953. It holds Green Valley, Anthem, Inspirada, Cadence and Lake Las Vegas. Inventory is deep, with about 2,490 homes for sale.",
    facts: [
      { label: "Population", value: "About 320,000" },
      { label: "Size", value: "107 square miles" },
      { label: "Incorporated", value: "1953" },
      { label: "City parks", value: "More than 70" },
    ],
    housing: "Every type, from condos and townhomes to new master-planned homes and guard-gated estates.",
    places: [
      "The District at Green Valley Ranch",
      "Lake Las Vegas on the east side",
      "15 to 25 minutes to the Strip",
    ],
    buyerNotes: [
      "Henderson closed at a $490,000 median in 36 days, slower than the valley overall.",
      "Cadence and Green Valley are the lower-priced Henderson master plans.",
    ],
    market: {
      medianSold: 490000,
      daysToSell: 36,
      saleToListPct: 97.1,
      sales12mo: 5685,
      monthsSupply: 5,
      asOf: "2026-10-21",
      scope: "City of Henderson",
      sourceUrl: `${VIP}/henderson`,
    },
    related: ["green-valley", "cadence", "inspirada", "anthem"],
  },
  {
    slug: "green-valley",
    name: "Green Valley",
    region: "Henderson",
    locality: "Henderson",
    zips: ["89012", "89014", "89052", "89074", "89123"],
    tagline: "Henderson's first master plan, opened in 1978",
    summary:
      "Green Valley is Henderson's first master plan, opened in 1978 by American Nevada Corporation across about 8,400 acres. Mature trees and settled streets set it apart from newer plans. Most of it is not gated.",
    facts: [
      { label: "Size", value: "About 8,400 acres" },
      { label: "Opened", value: "1978" },
      { label: "Developer", value: "American Nevada Corporation" },
      { label: "Gated", value: "Mostly not, some gated pockets" },
    ],
    housing: "Single-family resales from the 1980s on, condos, townhomes and Green Valley Ranch homes from the 1990s.",
    places: [
      "The District at Green Valley Ranch shops and dining",
      "About 13 minutes to the airport",
      "Green Valley Ranch Resort",
    ],
    buyerNotes: [
      "Green Valley closed at a $475,000 median in 27 days, faster than Henderson overall.",
      "Older homes can need roofs and HVAC; ask for ages before you offer.",
    ],
    market: {
      medianSold: 475000,
      daysToSell: 27,
      saleToListPct: 97.4,
      sales12mo: 346,
      monthsSupply: 4.4,
      asOf: "2026-10-21",
      scope: "Green Valley",
      sourceUrl: `${VIP}/green-valley`,
    },
    related: ["henderson", "seven-hills", "anthem"],
  },
  {
    slug: "anthem",
    name: "Anthem",
    region: "Henderson",
    locality: "Henderson",
    zips: ["89052", "89044"],
    tagline: "4,800-acre foothill plan with Sun City Anthem",
    summary:
      "Anthem is a 4,800-acre master plan in the Henderson foothills, built by Del Webb from 1998. It includes the age-restricted Sun City Anthem and Solera, plus the guard-gated Anthem Country Club. Many homes have valley and Strip views.",
    facts: [
      { label: "Size", value: "About 4,800 acres" },
      { label: "Built from", value: "1998, by Del Webb" },
      { label: "55+ sections", value: "Sun City Anthem, Solera" },
      { label: "Golf", value: "Private club and public courses" },
    ],
    housing: "Single-family homes, 55+ homes, and guard-gated country club estates.",
    places: [
      "Anthem Country Club (guard-gated)",
      "Sun City Anthem recreation centers",
      "About 20 minutes to the Strip",
    ],
    buyerNotes: [
      "Anthem Country Club estates (a $1,627,500 median) pull the overall number up, so the other sections trade lower.",
      "Sales closed at 96.3% of list; ask for seller credits toward rate buydowns.",
    ],
    market: {
      medianSold: 625000,
      daysToSell: 38,
      saleToListPct: 96.3,
      sales12mo: 618,
      monthsSupply: 4.4,
      asOf: "2026-10-21",
      scope: "Anthem (all sections)",
      sourceUrl: `${VIP}/anthem`,
    },
    related: ["inspirada", "seven-hills", "green-valley"],
    seeAlso: { label: "Sun City Anthem 55+ guide", href: "/55-plus-communities/sun-city-anthem" },
  },
  {
    slug: "seven-hills",
    name: "Seven Hills",
    region: "Henderson",
    locality: "Henderson",
    zips: ["89052"],
    tagline: "Hillside Henderson with five guard-gated enclaves",
    summary:
      "Seven Hills is a 1,300-acre Henderson community started in 1996, with more than 2,500 homes. Five neighborhoods are guard-gated. Rio Secco, a public 18-hole course, runs through it.",
    facts: [
      { label: "Size", value: "About 1,300 acres" },
      { label: "Homes", value: "More than 2,500" },
      { label: "Started", value: "1996" },
      { label: "Golf", value: "Public, 18 holes" },
    ],
    housing: "Single-family homes, guard-gated estates and some townhomes.",
    places: [
      "Rio Secco golf course",
      "Near The District at Green Valley Ranch",
      "About 20 minutes to the Strip",
    ],
    buyerNotes: [
      "Seven months of supply gives buyers room, even with a 14-day median sale.",
      "Guard-gated enclaves lift the median, so ask for comps from the non-gated streets.",
    ],
    market: {
      medianSold: 675000,
      daysToSell: 14,
      saleToListPct: 96.1,
      sales12mo: 130,
      monthsSupply: 7,
      asOf: "2026-10-19",
      scope: "Seven Hills",
      sourceUrl: `${VIP}/seven-hills`,
    },
    related: ["anthem", "green-valley", "henderson"],
  },
  {
    slug: "inspirada",
    name: "Inspirada",
    region: "Henderson",
    locality: "Henderson",
    zips: ["89044"],
    tagline: "South Henderson master plan with seven community parks",
    summary:
      "Inspirada is a master plan in far south Henderson off Bicentennial Parkway, about 1,950 acres and up to 8,500 homes. It opened in 2007 and restarted in 2014 under The LandWell Company. Seven community parks include pools, splash pads and dog parks.",
    facts: [
      { label: "Size", value: "About 1,950 acres" },
      { label: "Homes planned", value: "About 8,500" },
      { label: "Opened", value: "2007, restarted 2014" },
      { label: "ZIP code", value: "89044" },
    ],
    housing: "Newer single-family homes and townhomes from builders including Toll Brothers and Century Communities.",
    places: [
      "Seven community parks with pools and splash pads",
      "Bicentennial Parkway and St. Rose Parkway access",
      "About 20 minutes to the Strip",
    ],
    buyerNotes: [
      "Inspirada's $542,375 median comes with HOA dues near $255 a month; add them to the payment.",
      "378 sales in 12 months gives solid comps for pricing.",
    ],
    market: {
      medianSold: 542375,
      daysToSell: 38,
      saleToListPct: 97.2,
      sales12mo: 378,
      monthsSupply: 4.2,
      asOf: "2026-10-20",
      scope: "Inspirada",
      sourceUrl: `${VIP}/inspirada`,
    },
    related: ["anthem", "cadence", "henderson"],
  },
  {
    slug: "cadence",
    name: "Cadence",
    region: "Henderson",
    locality: "Henderson",
    zips: ["89011", "89015"],
    tagline: "2,200-acre east Henderson plan with a 50-acre Central Park",
    summary:
      "Cadence is a 2,200-acre master plan in east Henderson off Lake Mead Parkway, selling since 2014 under The LandWell Company. Up to 12,250 homes are planned around about 450 acres of open space. RCLCO ranked it third nationally for new-home sales in 2025.",
    facts: [
      { label: "Size", value: "About 2,200 acres" },
      { label: "Homes planned", value: "Up to 12,250" },
      { label: "Open space", value: "About 450 acres" },
      { label: "2025 new-home sales", value: "1,247 (RCLCO #3 nationally)" },
    ],
    housing: "New and nearly new single-family homes and townhomes, plus age-restricted Heritage at Cadence.",
    places: [
      "Central Park, nearly 50 acres with amphitheaters, pool and pickleball",
      "Lake Mead Parkway access to Lake Las Vegas",
      "Builders including Lennar, Woodside, Century and D.R. Horton",
    ],
    buyerNotes: [
      "Cadence closed at a $483,880 median, one of the lowest among Henderson master plans.",
      "Supply was tight at 3.3 months; builder incentives may beat resale price cuts.",
    ],
    market: {
      medianSold: 483880,
      daysToSell: 34,
      saleToListPct: 97.8,
      sales12mo: 697,
      monthsSupply: 3.3,
      asOf: "2026-10-21",
      scope: "Cadence",
      sourceUrl: `${VIP}/cadence`,
    },
    related: ["lake-las-vegas", "inspirada", "henderson"],
  },
  {
    slug: "lake-las-vegas",
    name: "Lake Las Vegas",
    region: "Henderson",
    locality: "Henderson",
    zips: ["89011"],
    tagline: "3,600 acres around a 320-acre private lake",
    summary:
      "Lake Las Vegas is a 3,600-acre resort community in east Henderson built around a 320-acre private lake. SouthShore is guard-gated, and the community has one public and one private golf course. Supply is high, which favors buyers.",
    facts: [
      { label: "Lake", value: "320 acres, private" },
      { label: "Size", value: "About 3,600 acres" },
      { label: "Golf", value: "One public, one private" },
      { label: "ZIP code", value: "89011" },
    ],
    housing: "Condos, townhomes, single-family homes and lakefront estates.",
    places: [
      "On-lake recreation for residents",
      "MonteLago Village shops and dining",
      "About 25 minutes to the Strip",
    ],
    buyerNotes: [
      "13.6 months of supply and an 83-day median sale give buyers strong leverage.",
      "Condos here sell far below the $664,995 median; check HOA and special assessments.",
    ],
    market: {
      medianSold: 664995,
      daysToSell: 83,
      saleToListPct: 95.2,
      sales12mo: 242,
      monthsSupply: 13.6,
      asOf: "2026-10-25",
      scope: "Lake Las Vegas",
      sourceUrl: `${VIP}/lake-las-vegas`,
    },
    related: ["cadence", "henderson", "anthem"],
    seeAlso: { label: "Del Webb Lake Las Vegas 55+ guide", href: "/55-plus-communities/del-webb-lake-las-vegas" },
  },

  // ---------------------------------------------------------------- North Las Vegas
  {
    slug: "north-las-vegas",
    name: "North Las Vegas",
    region: "North Las Vegas",
    locality: "North Las Vegas",
    zips: ["89030", "89031", "89032", "89081", "89084", "89085", "89086"],
    tagline: "The valley's fastest-selling city market",
    summary:
      "North Las Vegas is its own city on the north side of the valley. It closed 3,109 sales in 12 months at a $415,000 median, with homes selling in about 23 days. Aliante and Valley Vista are among its master plans.",
    facts: [
      { label: "Closed sales, 12 months", value: "3,109" },
      { label: "Homes for sale", value: "1,052" },
      { label: "Months of supply", value: "4" },
      { label: "Freeway access", value: "I-15 and the 215 Beltway" },
    ],
    housing: "Older single-family homes in the south, newer master-planned homes and townhomes in the north.",
    places: [
      "Craig Ranch Regional Park",
      "Aliante Nature Discovery Park",
      "Quick I-15 access to downtown",
    ],
    buyerNotes: [
      "The $415,000 median is $55,000 under the valley single-family median.",
      "Homes sold at 98.9% of list in 23 days, so have your lender letter ready.",
    ],
    market: {
      medianSold: 415000,
      daysToSell: 23,
      saleToListPct: 98.9,
      sales12mo: 3109,
      monthsSupply: 4,
      asOf: "2026-10-17",
      scope: "City of North Las Vegas",
      sourceUrl: `${VIP}/north-las-vegas`,
    },
    related: ["aliante", "centennial-hills", "east-las-vegas"],
  },
  {
    slug: "aliante",
    name: "Aliante",
    region: "North Las Vegas",
    locality: "North Las Vegas",
    zips: ["89084", "89031"],
    tagline: "1,905-acre North Las Vegas plan with golf and a lake park",
    summary:
      "Aliante is a 1,905-acre master plan at Aliante Parkway and the 215, opened in 2003. It has more than 6,000 homes, an 18-hole Gary Panks golf course and the 20-acre Nature Discovery Park. The age-restricted Sun City Aliante sits inside it.",
    facts: [
      { label: "Size", value: "1,905 acres" },
      { label: "Opened", value: "2003" },
      { label: "Homes", value: "More than 6,000" },
      { label: "Golf", value: "Aliante Golf Club, 18 holes" },
    ],
    housing: "Single-family homes, townhomes and 55+ homes in Sun City Aliante.",
    places: [
      "Nature Discovery Park, 20 acres with a lake, splash pad and amphitheater",
      "Aliante Casino + Hotel + Spa",
      "215 Beltway access",
    ],
    buyerNotes: [
      "Aliante's $451,500 median gets you a master plan with golf below Henderson prices.",
      "Only 61 homes for sale, so set alerts before you need to move.",
    ],
    market: {
      medianSold: 451500,
      daysToSell: 34,
      saleToListPct: 98,
      sales12mo: 168,
      monthsSupply: 4,
      asOf: "2026-10-21",
      scope: "Aliante",
      sourceUrl: `${VIP}/aliante`,
    },
    related: ["north-las-vegas", "centennial-hills", "providence"],
    seeAlso: { label: "Sun City Aliante 55+ guide", href: "/55-plus-communities/sun-city-aliante" },
  },

  // ---------------------------------------------------------------- Central & Urban
  {
    slug: "downtown-las-vegas",
    name: "Downtown Las Vegas",
    region: "Central & Urban",
    locality: "Las Vegas",
    zips: ["89101", "89104"],
    tagline: "Lofts and mid-rises near the 18b Arts District",
    summary:
      "Downtown Las Vegas covers Fremont Street, the 18b Arts District and Symphony Park. Housing is mostly condos, lofts and mid-century homes. Supply is high, at about 10 months.",
    facts: [
      { label: "ZIP codes", value: "89101, 89104" },
      { label: "Arts District", value: "18b, originally 18 blocks" },
      { label: "Months of supply", value: "10.1 (89101)" },
      { label: "Closed sales, 12 months", value: "192" },
    ],
    housing: "Condo and loft towers such as The Ogden and Juhl, plus single-family homes in older neighborhoods.",
    places: [
      "18b Arts District galleries, Arts Factory and Brewery Row",
      "Fremont East Entertainment District",
      "Symphony Park and The Smith Center",
    ],
    buyerNotes: [
      "Downtown closed at a $347,000 median, $123,000 under the valley single-family median.",
      "Ten months of supply means asking for seller credits is reasonable.",
    ],
    market: {
      medianSold: 347000,
      daysToSell: 43,
      saleToListPct: 96.6,
      sales12mo: 192,
      monthsSupply: 10.1,
      asOf: "2026-10-21",
      scope: "Downtown Las Vegas (ZIP 89101)",
      sourceUrl: `${VIP}/downtown-las-vegas`,
    },
    related: ["strip-high-rises", "paradise", "east-las-vegas"],
  },
  {
    slug: "strip-high-rises",
    name: "Strip High-Rise Condos",
    region: "Central & Urban",
    locality: "Las Vegas and Paradise",
    zips: ["89109", "89103", "89158"],
    tagline: "Tower living on and near Las Vegas Boulevard",
    summary:
      "The Strip corridor has the valley's largest set of high-rise condos, from Turnberry Place and Panorama Towers to Veer Towers and the Waldorf Astoria. High-rise condos closed at a $399,000 median. Supply is very high, at about 14 months.",
    facts: [
      { label: "Condos for sale", value: "639" },
      { label: "Closed sales, 12 months", value: "576" },
      { label: "Months of supply", value: "13.9" },
      { label: "Sale to original list", value: "93%" },
    ],
    housing:
      "Full-ownership condo towers (Turnberry Place, Turnberry Towers, Panorama, Veer, Sky, Allure, The Martin, Waldorf Astoria) and condo-hotels (Palms Place, The Signature).",
    places: [
      "Walk or ride to Strip resorts, dining and shows",
      "Allegiant Stadium and T-Mobile Arena nearby",
      "About 10 minutes to the airport",
    ],
    buyerNotes: [
      "Condo-hotels often cannot be financed with standard loans; confirm before you tour.",
      "At 93% of list and 70 days to sell, negotiate firmly on price and HOA credits.",
    ],
    market: {
      medianSold: 399000,
      daysToSell: 70,
      saleToListPct: 93,
      sales12mo: 576,
      monthsSupply: 13.9,
      asOf: "2026-10-20",
      scope: "Las Vegas high-rise condos",
      sourceUrl: `${VIP}/high-rise-condos`,
    },
    related: ["downtown-las-vegas", "paradise", "spring-valley"],
  },
  {
    slug: "paradise",
    name: "Paradise",
    region: "Central & Urban",
    locality: "Paradise (unincorporated Clark County)",
    zips: ["89119", "89120", "89121", "89169"],
    tagline: "The town that holds the Strip, UNLV and the airport",
    summary:
      "Paradise is the unincorporated town that holds most of the Strip, UNLV and Harry Reid International Airport. It had 191,238 residents in 2020. Its neighborhoods east of the Strip are some of the lowest-priced in the valley.",
    facts: [
      { label: "Population", value: "191,238 (2020 Census)" },
      { label: "Formed", value: "1950" },
      { label: "Holds", value: "Most of the Strip, UNLV, the airport" },
      { label: "Government", value: "Clark County" },
    ],
    housing: "Mid-century and 1970s to 1990s single-family homes, townhomes and many condo complexes.",
    places: [
      "University of Nevada, Las Vegas",
      "Harry Reid International Airport",
      "Short drives to Strip jobs and venues",
    ],
    buyerNotes: [
      "ZIP 89121 closed at a $365,000 median across 658 sales.",
      "Condos in 89119 list far lower, but check HOA health and flight-path noise.",
    ],
    market: {
      medianSold: 365000,
      daysToSell: 30,
      saleToListPct: 97.9,
      sales12mo: 658,
      monthsSupply: 5.2,
      asOf: "2026-10-21",
      scope: "ZIP 89121",
      sourceUrl: `${VIP}/zip/89121`,
    },
    related: ["east-las-vegas", "spring-valley", "downtown-las-vegas"],
  },

  // ---------------------------------------------------------------- East Las Vegas
  {
    slug: "east-las-vegas",
    name: "East Las Vegas",
    region: "East Las Vegas",
    locality: "Las Vegas and Sunrise Manor",
    zips: ["89110", "89142", "89156"],
    tagline: "Entry-level prices at the base of Frenchman Mountain",
    summary:
      "East Las Vegas runs from the city's east side into Sunrise Manor, at the western base of Frenchman Mountain. Sunrise Manor alone had 205,618 residents in 2020. It is one of the most affordable single-family markets in the valley, and homes sell fast.",
    facts: [
      { label: "ZIP codes", value: "89110, 89142, 89156" },
      { label: "Sunrise Manor population", value: "205,618 (2020 Census)" },
      { label: "Landmark", value: "Frenchman Mountain" },
      { label: "Closed sales, 12 months", value: "425 (89110)" },
    ],
    housing: "Single-family homes from the 1960s to the 2000s, townhomes and condos.",
    places: [
      "Frenchman Mountain trailhead",
      "Quick access to US-95 and downtown",
      "Lake Mead about 30 minutes east",
    ],
    buyerNotes: [
      "ZIP 89110 closed at a $375,000 median; 89156 came in lower at $340,000.",
      "ZIP 89142 homes sold in a median 13 days, so be ready to act.",
    ],
    market: {
      medianSold: 375000,
      daysToSell: 23,
      saleToListPct: 98.2,
      sales12mo: 425,
      monthsSupply: 4.6,
      asOf: "2026-10-21",
      scope: "ZIP 89110",
      sourceUrl: `${VIP}/zip/89110`,
    },
    related: ["paradise", "north-las-vegas", "downtown-las-vegas"],
  },
];

export const REGIONS: Region[] = [
  "Summerlin & West",
  "Northwest",
  "Southwest",
  "Henderson",
  "North Las Vegas",
  "Central & Urban",
  "East Las Vegas",
];

export function getNeighborhood(slug: string) {
  return neighborhoods.find((n) => n.slug === slug);
}
