import { Shield, TrendingUp, Users, Award, Clock, Home } from "lucide-react";
import BrandPortrait from "@/components/brand/BrandPortrait";
import SectionExtras from "@/components/brand/SectionExtras";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "In real estate since 1983 with proven results for budget-conscious buyers.",
  },
  {
    icon: TrendingUp,
    title: "Affordable Market Knowledge",
    description:
      "Knows which Las Vegas ZIP codes still deliver equity upside under $550K.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Dedicated attention to every client with customized search and negotiation plans.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "500+ successful transactions and satisfied clients across the valley.",
  },
  {
    icon: Clock,
    title: "Responsive",
    description:
      "Quick response times — call or text (702) 500-1942 and reach Dr. Jan directly.",
  },
  {
    icon: Home,
    title: "Full Service",
    description:
      "Complete support from affordable home search to closing and beyond.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-5 flex justify-center">
            <BrandPortrait size="md" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Why Choose Dr. Jan for Affordable Homes
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Luxury-level representation focused on value, payment comfort, and
            long-term equity
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-lg p-6 text-center transition-colors hover:bg-slate-50"
              >
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-6xl">
          <SectionExtras headline="Ask which affordable homes fit your payment target" />
        </div>
      </div>
    </section>
  );
}
