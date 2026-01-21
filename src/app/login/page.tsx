"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Music, 
  Building2, 
  PartyPopper,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const demoOptions = [
  {
    id: "agency",
    title: "Booking Agency",
    description: "Manage artists, bookings, contracts, and tours from one powerful dashboard.",
    icon: Users,
    color: "from-orange-500 to-amber-500",
    href: "/demo/agency",
    features: ["Artist Management", "Booking Calendar", "Contract Hub", "Financial Tools"],
  },
  {
    id: "artist",
    title: "Artist / DJ",
    description: "Track your shows, manage your schedule, and stay connected with your team.",
    icon: Music,
    color: "from-purple-500 to-pink-500",
    href: "/demo/artist",
    features: ["Tour Schedule", "Document Access", "Earnings Overview", "Availability"],
  },
  {
    id: "label",
    title: "Record Label",
    description: "Oversee your roster, coordinate releases, and manage artist bookings.",
    icon: Building2,
    color: "from-cyan-500 to-blue-500",
    href: "/demo/label",
    features: ["Roster Management", "Release Calendar", "Revenue Analytics", "A&R Pipeline"],
  },
  {
    id: "festival",
    title: "Festival / Venue",
    description: "Plan your lineup, manage artist relations, and coordinate logistics.",
    icon: PartyPopper,
    color: "from-emerald-500 to-teal-500",
    href: "/demo/festival",
    features: ["Lineup Builder", "Artist Requests", "Stage Planning", "Budget Tracker"],
  },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[var(--vayo-black)] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--vayo-accent)]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-syne)" }}>V</span>
            </div>
            <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
          </Link>

          <div className="inline-flex items-center gap-2 badge mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Demo Environment</span>
          </div>

          <h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            One Platform. <span className="text-gradient">Every Role.</span>
          </h1>
          <p className="text-[var(--vayo-gray-400)] text-lg max-w-2xl mx-auto">
            Whether you&apos;re an agency booking artists, an artist managing your career, 
            a label overseeing your roster, or a festival planning your lineup — 
            <span className="text-white"> VAYO connects everyone in real-time.</span>
          </p>
        </motion.div>

        {/* Demo Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {demoOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={option.href} className="block group">
                <div className="relative bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-2xl p-6 hover:border-[var(--vayo-gray-700)] transition-all duration-300 overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-4`}>
                      <option.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                      {option.title}
                    </h2>
                    <p className="text-[var(--vayo-gray-400)] text-sm mb-4">
                      {option.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {option.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-300)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[var(--vayo-accent)] font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Enter Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Connection Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mt-12 mb-8"
        >
          <div className="bg-[var(--vayo-gray-900)]/50 border border-[var(--vayo-gray-800)] rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--vayo-gray-600)]" />
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--vayo-gray-600)]" />
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--vayo-gray-600)]" />
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <PartyPopper className="w-4 h-4 text-white" />
              </div>
            </div>
            <p className="text-sm text-[var(--vayo-gray-400)]">
              All portals share the same data in real-time. 
              <span className="text-[var(--vayo-accent)]"> Every update syncs instantly.</span>
            </p>
          </div>
        </motion.div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-[var(--vayo-gray-500)] text-sm">
            Already have an account?{" "}
            <a href="#" className="text-[var(--vayo-accent)] hover:underline">
              Sign in here
            </a>
          </p>
          <p className="text-[var(--vayo-gray-500)] text-sm">
            <Link href="/" className="text-[var(--vayo-gray-400)] hover:text-white transition-colors">
              ← Back to homepage
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
