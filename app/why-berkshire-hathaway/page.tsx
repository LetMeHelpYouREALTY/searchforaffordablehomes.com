import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Shield, Users, Globe, Award, TrendingUp, CheckCircle, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Brokerage Support Matters | Las Vegas Real Estate",
  description:
    "How brokerage resources, ethics standards, and agent support help Las Vegas buyers and sellers. Dr. Jan Duffy, Top 1% Las Vegas REALTOR®.",
  keywords: [
    "real estate brokerage support", "Las Vegas buyer agent", "why use a REALTOR",
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Berkshire Hathaway HomeServices",
  url: "https://www.bhhs.com",
  logo: "https://heyberkshire.com/favicon-32x32.png",
  description:
    "Berkshire Hathaway HomeServices is a real estate brokerage network, part of Berkshire Hathaway Inc., one of the world's most respected and trusted companies.",
  parentOrganization: {
    "@type": "Corporation",
    name: "Berkshire Hathaway Inc.",
    founder: "Warren Buffett",
  },
};

export default function WhyBerkshireHathawayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Las Vegas Real Estate Questions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Why Brokerage Support Matters
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              When contract terms, timelines, or negotiations get heavy, you want an agent backed by stable resources and clear ethical standards. Here is what that support means in plain language.
            </p>
          </div>

          {/* Brokerage Support Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Financial strength behind your transaction
                </h2>
                <p className="text-slate-300 mb-6">
                  Dr. Jan Duffy works with a brokerage known for long-term stability and strict professional standards. That backing matters when you need marketing reach, compliance support, or a referral in another state.
                </p>
                <p className="text-slate-300">
                  You still work directly with Dr. Jan on your deal. The brokerage is the infrastructure that keeps service consistent when stakes are high.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🏛️</div> <p className="text-2xl font-bold mb-2">Top 1%</p> <p className="text-slate-400"> Las Vegas REALTOR®, in real estate since 1983 </p>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              The Dr. Jan Duffy Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Unmatched Trust</h3>
                <p className="text-slate-600">
                  Dr. Jan is known for integrity and reliability, and upholds these values in every transaction.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Global Network</h3>
                <p className="text-slate-600">
                  A nationwide referral network means seamless referrals for relocations and connections to buyers from across the country.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">World-Class Marketing</h3>
                <p className="text-slate-600">
                  Your property gets professional photography, syndication, and campaign tools that reach qualified buyers everywhere.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ethical Standards</h3>
                <p className="text-slate-600">
                  Dr. Jan adheres to strict ethical guidelines that go beyond industry requirements. Your interests always come first.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Strength</h3>
                <p className="text-slate-600">
                  Stable brokerage backing means support for you long-term.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
                <p className="text-slate-600">
                  Dr. Jan Duffy has closed $127M+ in transactions in Southern Nevada.
                </p>
              </div>
            </div>
          </section>

          {/* Local Expert Section */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Your Local Expert in Las Vegas
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  Dr. Jan Duffy serves Las Vegas, Henderson, Summerlin, and all of Southern Nevada. In real estate since 1983 with $127M+ in closed transactions, she brings hometown expertise.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "In real estate since 1983",
                    "$127M+ in closed transactions",
                    "500+ satisfied clients",
                    "Specializing in luxury, investment, and relocation",
                    "Deep knowledge of every Las Vegas neighborhood",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Meet Dr. Jan Duffy →
                </Link>
              </div>
              <div className="bg-slate-100 rounded-lg p-8">
                <blockquote className="text-lg text-slate-700 italic mb-4">
                  "Clients hire me for straight answers and calm execution—not buzzwords."
                </blockquote>
                <cite className="text-slate-900 font-semibold">
                  — Dr. Jan Duffy, REALTOR®
                </cite>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Common Brokerage Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Does brokerage support change who represents me?",
                  a: "No. Dr. Jan Duffy is your agent. The brokerage provides tools, compliance, and network reach, and you still get one point of contact.",
                },
                {
                  q: "Does using a local REALTOR® cost more?",
                  a: "No. Commission rates are negotiable and comparable to other brokerages. The value you receive—global marketing exposure, trusted brand recognition, and experienced agents—often helps homes sell faster and for more money.",
                },
                {
                  q: "Can Dr. Jan help with relocations to Las Vegas?",
                  a: "Yes! A nationwide referral network makes relocations seamless. Dr. Jan Duffy can coordinate with agents in your current city while providing expert guidance on Las Vegas neighborhoods, schools, and communities.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for a Direct Answer?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact Dr. Jan Duffy today for Las Vegas-specific guidance on your next step.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1942
            </a>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
