import { MetadataRoute } from "next";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_BRAND.url.replace(/\/$/, "");
  const lastModified = new Date();

  const paths: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/listings", priority: 0.9, changeFrequency: "daily" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/google-business", priority: 0.9, changeFrequency: "monthly" },
    { path: "/market-report", priority: 0.9, changeFrequency: "weekly" },
    { path: "/market-update", priority: 0.9, changeFrequency: "weekly" },
    { path: "/market-insights", priority: 0.8, changeFrequency: "monthly" },
    { path: "/buyers", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/buyers/california-relocator",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/buyers/first-time-buyers",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/buyers/luxury-homes-las-vegas",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    { path: "/sellers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sellers/move-up", priority: 0.7, changeFrequency: "monthly" },
    { path: "/sellers/downsizing", priority: 0.7, changeFrequency: "monthly" },
    {
      path: "/sellers/divorce-probate",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    { path: "/sellers/relocation", priority: 0.7, changeFrequency: "monthly" },
    { path: "/luxury-homes", priority: 0.7, changeFrequency: "weekly" },
    { path: "/new-construction", priority: 0.8, changeFrequency: "weekly" },
    {
      path: "/investment-properties",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    { path: "/relocation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/home-valuation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/55-plus-communities", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/55-plus-communities/sun-city-summerlin",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/55-plus-communities/sun-city-anthem",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/55-plus-communities/del-webb-lake-las-vegas",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/55-plus-communities/sun-city-aliante",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/55-plus-communities/heritage-stonebridge",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/55-plus-communities/solera-anthem",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/55-plus-communities/trilogy-summerlin",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    { path: "/neighborhoods", priority: 0.8, changeFrequency: "weekly" },
    {
      path: "/neighborhoods/summerlin",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/henderson",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/green-valley",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/the-ridges",
      priority: 0.6,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/southern-highlands",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/north-las-vegas",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/skye-canyon",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/centennial-hills",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/inspirada",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/neighborhoods/mountains-edge",
      priority: 0.9,
      changeFrequency: "weekly",
    },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
