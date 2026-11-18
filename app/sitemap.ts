import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.searchforaffordablehomes.com";
  const now = new Date();

  const staggered = (daysAgo: number) => {
    const d = new Date(now);
    d.setDate(d.getDate() - daysAgo);
    return d;
  };

  const corePages = [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: "daily" as const,
      lastModified: staggered(0),
    },
    {
      url: `${baseUrl}/affordable-homes`,
      priority: 1.0,
      changeFrequency: "daily" as const,
      lastModified: staggered(0),
    },
    {
      url: `${baseUrl}/affordable-homes/under-400k`,
      priority: 0.95,
      changeFrequency: "daily" as const,
      lastModified: staggered(1),
    },
    {
      url: `${baseUrl}/affordable-homes/first-time-buyers`,
      priority: 0.95,
      changeFrequency: "weekly" as const,
      lastModified: staggered(1),
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
      lastModified: staggered(3),
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
      lastModified: staggered(2),
    },
    {
      url: `${baseUrl}/listings`,
      priority: 0.95,
      changeFrequency: "daily" as const,
      lastModified: staggered(0),
    },
    {
      url: `${baseUrl}/why-berkshire-hathaway`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: staggered(5),
    },
    {
      url: `${baseUrl}/market-report`,
      priority: 0.85,
      changeFrequency: "weekly" as const,
      lastModified: staggered(2),
    },
    {
      url: `${baseUrl}/market-update`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
      lastModified: staggered(2),
    },
    {
      url: `${baseUrl}/market-insights`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
      lastModified: staggered(4),
    },
    {
      url: `${baseUrl}/google-business`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: staggered(6),
    },
    {
      url: `${baseUrl}/faq`,
      priority: 0.85,
      changeFrequency: "monthly" as const,
      lastModified: staggered(3),
    },
    {
      url: `${baseUrl}/security-policy`,
      priority: 0.3,
      changeFrequency: "yearly" as const,
      lastModified: staggered(14),
    },
  ];

  const servicePages = [
    {
      url: `${baseUrl}/buyers`,
      priority: 0.85,
      changeFrequency: "weekly" as const,
      lastModified: staggered(2),
    },
    {
      url: `${baseUrl}/sellers`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: staggered(4),
    },
    {
      url: `${baseUrl}/luxury-homes`,
      priority: 0.75,
      changeFrequency: "weekly" as const,
      lastModified: staggered(3),
    },
    {
      url: `${baseUrl}/new-construction`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
      lastModified: staggered(3),
    },
    {
      url: `${baseUrl}/investment-properties`,
      priority: 0.75,
      changeFrequency: "weekly" as const,
      lastModified: staggered(4),
    },
    {
      url: `${baseUrl}/relocation`,
      priority: 0.75,
      changeFrequency: "monthly" as const,
      lastModified: staggered(5),
    },
    {
      url: `${baseUrl}/home-valuation`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: staggered(3),
    },
    {
      url: `${baseUrl}/55-plus-communities`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: staggered(4),
    },
    {
      url: `${baseUrl}/services`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: staggered(6),
    },
  ];

  const buyerPersonaPages = [
    {
      url: `${baseUrl}/buyers/california-relocator`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: staggered(5),
    },
    {
      url: `${baseUrl}/buyers/first-time-buyers`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
      lastModified: staggered(2),
    },
    {
      url: `${baseUrl}/buyers/luxury-homes-las-vegas`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: staggered(6),
    },
  ];

  const sellerPersonaPages = [
    {
      url: `${baseUrl}/sellers/move-up`,
      priority: 0.75,
      changeFrequency: "monthly" as const,
      lastModified: staggered(5),
    },
    {
      url: `${baseUrl}/sellers/downsizing`,
      priority: 0.75,
      changeFrequency: "monthly" as const,
      lastModified: staggered(5),
    },
    {
      url: `${baseUrl}/sellers/divorce-probate`,
      priority: 0.65,
      changeFrequency: "monthly" as const,
      lastModified: staggered(7),
    },
    {
      url: `${baseUrl}/sellers/relocation`,
      priority: 0.75,
      changeFrequency: "monthly" as const,
      lastModified: staggered(5),
    },
  ];

  const fiftyPlusCommunityPages = [
    {
      url: `${baseUrl}/55-plus-communities/sun-city-summerlin`,
      priority: 0.75,
      changeFrequency: "monthly" as const,
      lastModified: staggered(4),
    },
    {
      url: `${baseUrl}/55-plus-communities/sun-city-anthem`,
      priority: 0.75,
      changeFrequency: "monthly" as const,
      lastModified: staggered(4),
    },
    {
      url: `${baseUrl}/55-plus-communities/del-webb-lake-las-vegas`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: staggered(5),
    },
    {
      url: `${baseUrl}/55-plus-communities/heritage-stonebridge`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: staggered(5),
    },
    {
      url: `${baseUrl}/55-plus-communities/solera-anthem`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: staggered(6),
    },
    {
      url: `${baseUrl}/55-plus-communities/sun-city-aliante`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: staggered(6),
    },
    {
      url: `${baseUrl}/55-plus-communities/trilogy-summerlin`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: staggered(6),
    },
  ];

  const neighborhoodPages = [
    {
      url: `${baseUrl}/neighborhoods`,
      priority: 0.85,
      changeFrequency: "weekly" as const,
      lastModified: staggered(1),
    },
    {
      url: `${baseUrl}/neighborhoods/summerlin`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
      lastModified: staggered(2),
    },
    {
      url: `${baseUrl}/neighborhoods/henderson`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
      lastModified: staggered(2),
    },
    {
      url: `${baseUrl}/neighborhoods/green-valley`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
      lastModified: staggered(3),
    },
    {
      url: `${baseUrl}/neighborhoods/the-ridges`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
      lastModified: staggered(3),
    },
    {
      url: `${baseUrl}/neighborhoods/southern-highlands`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
      lastModified: staggered(4),
    },
    {
      url: `${baseUrl}/neighborhoods/north-las-vegas`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
      lastModified: staggered(1),
    },
    {
      url: `${baseUrl}/neighborhoods/skye-canyon`,
      priority: 0.75,
      changeFrequency: "weekly" as const,
      lastModified: staggered(3),
    },
    {
      url: `${baseUrl}/neighborhoods/centennial-hills`,
      priority: 0.85,
      changeFrequency: "weekly" as const,
      lastModified: staggered(2),
    },
    {
      url: `${baseUrl}/neighborhoods/inspirada`,
      priority: 0.75,
      changeFrequency: "weekly" as const,
      lastModified: staggered(4),
    },
    {
      url: `${baseUrl}/neighborhoods/mountains-edge`,
      priority: 0.85,
      changeFrequency: "weekly" as const,
      lastModified: staggered(2),
    },
  ];

  return [
    ...corePages,
    ...servicePages,
    ...buyerPersonaPages,
    ...sellerPersonaPages,
    ...fiftyPlusCommunityPages,
    ...neighborhoodPages,
  ];
}
