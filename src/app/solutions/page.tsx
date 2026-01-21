"use client";

import { motion } from "framer-motion";
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
    color: "from-orange-500 to-amber-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-cyan-500 to-blue-500",
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
    color: "from-emerald-500 to-teal-500",
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
      <main className="min-h-screen bg-[var(--vayo-black)] pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--vayo-accent)]/10 blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="badge inline-flex items-center gap-2 mb-4">
              Solutions
            </span>
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Built for <span className="text-gradient">Your Industry</span>
            </h1>
            <p className="text-[var(--vayo-gray-400)] text-lg max-w-2xl mx-auto">
              VAYO adapts to your specific needs. Whether you&apos;re booking DJs, touring bands, 
              or managing performing arts, we have the tools you need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={solution.href} className="block group h-full">
                  <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-2xl p-6 h-full hover:border-[var(--vayo-gray-700)] transition-all">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4`}>
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2">
                      {solution.title}
                    </h2>
                    <p className="text-[var(--vayo-gray-400)] text-sm mb-4">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[var(--vayo-gray-300)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--vayo-secondary)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-[var(--vayo-accent)] font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
