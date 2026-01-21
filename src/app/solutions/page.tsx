"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  Music2, 
  Theater, 
  Building2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const solutions = [
  {
    id: "dj-agencies",
    title: "For DJ Agencies",
    description: "Specialized tools for electronic music and DJ booking agencies. Manage festival bookings, club shows, and tour logistics with ease.",
    icon: Users,
    color: "bg-gradient-to-br from-orange-500 to-amber-500",
    iconBg: "bg-orange-50",
    href: "/solutions/dj-agencies",
    features: [
      "Festival & club booking management",
      "Rider & technical requirements",
      "Multi-timezone scheduling",
      "Commission tracking per artist",
    ],
  },
  {
    id: "touring-bands",
    title: "For Touring Bands",
    description: "Everything a band needs to manage tours, from venue coordination to merchandise tracking and crew management.",
    icon: Music2,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    iconBg: "bg-purple-50",
    href: "/solutions/touring-bands",
    features: [
      "Tour routing optimization",
      "Bus & crew scheduling",
      "Merchandise inventory",
      "Settlement management",
    ],
  },
  {
    id: "performing-arts",
    title: "For Performing Arts",
    description: "Tailored solutions for theater, dance, and classical music agencies. Handle complex productions with multiple performers.",
    icon: Theater,
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-50",
    href: "/solutions/performing-arts",
    features: [
      "Cast & ensemble management",
      "Venue technical specs",
      "Multi-night run scheduling",
      "Grant & sponsorship tracking",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Custom solutions for large organizations. Dedicated support, advanced security, and tailored integrations.",
    icon: Building2,
    color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50",
    href: "/solutions/enterprise",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "Advanced security & compliance",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#00d4aa]/10 text-[#00d4aa] text-sm font-bold">
              Solutions
            </span>
            <h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Built for <span className="text-[#00d4aa]">Your Industry</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
              VAYO adapts to your specific needs. Whether you&apos;re booking DJs, touring bands, 
              or managing performing arts, we have the tools you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution) => (
              <div key={solution.id}>
                <Link href={solution.href} className="block group h-full">
                  <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 h-full hover:border-[#00d4aa]/30 hover:shadow-xl hover:shadow-[#00d4aa]/5 transition-all">
                    <div className={`w-14 h-14 rounded-2xl ${solution.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                      {solution.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 font-medium leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-[#00d4aa] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-[#00d4aa] font-bold text-sm group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
