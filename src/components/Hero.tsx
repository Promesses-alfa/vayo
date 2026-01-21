"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Users, Music, Building2, PartyPopper } from "lucide-react";

const logos = [
  "Universal Music",
  "Live Nation",
  "CAA",
  "WME",
  "Paradigm",
  "Wasserman",
];

const stakeholders = [
  { icon: Users, label: "Agencies", color: "from-orange-500 to-amber-500" },
  { icon: Music, label: "Artists", color: "from-purple-500 to-pink-500" },
  { icon: Building2, label: "Labels", color: "from-cyan-500 to-blue-500" },
  { icon: PartyPopper, label: "Festivals", color: "from-emerald-500 to-teal-500" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/Vid1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--vayo-black)]/80 via-[var(--vayo-black)]/60 to-[var(--vayo-black)]" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid z-[1]" />
      
      {/* Background Effects */}
      <div className="hero-glow top-1/4 -left-40 opacity-40 z-[1]" />
      <div className="hero-glow bottom-0 right-0 opacity-30 z-[1]" />
      
      {/* Accent Glow */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 badge mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launching in 2026 — Join the Waitlist</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            One Platform.{" "}
            <span className="text-gradient">Every Stakeholder.</span>{" "}
            Connected.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--vayo-gray-400)] max-w-2xl mx-auto mb-8"
          >
            VAYO brings agencies, artists, labels, and festivals together on one intelligent platform. 
            Real-time collaboration, seamless workflows, and complete transparency — from first contact to final encore.
          </motion.p>

          {/* Stakeholder Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            {stakeholders.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-[var(--vayo-gray-500)] group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#trial" className="btn-primary group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#demo" className="btn-secondary group">
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm text-[var(--vayo-gray-500)] mb-6">
              Trusted by leading agencies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="text-[var(--vayo-gray-400)] font-semibold text-sm tracking-wider uppercase"
                >
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Image / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--vayo-accent)] via-transparent to-transparent opacity-20 blur-3xl" />
            
            {/* Dashboard Preview Card */}
            <div className="relative glass-light rounded-2xl overflow-hidden border border-[var(--vayo-gray-800)]">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--vayo-gray-800)] bg-[var(--vayo-dark)]/50">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-[var(--vayo-gray-500)]">VAYO Dashboard</span>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 md:p-8 bg-[var(--vayo-dark)]/30">
                {/* Top Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Active Shows", value: "47", change: "+12%" },
                    { label: "Revenue (MTD)", value: "€284K", change: "+23%" },
                    { label: "Pending Contracts", value: "12", change: "-3" },
                    { label: "Artists Managed", value: "156", change: "+8" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[var(--vayo-gray-900)]/50 rounded-xl p-4">
                      <p className="text-xs text-[var(--vayo-gray-500)] mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-[var(--vayo-secondary)]">{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Calendar Preview */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 bg-[var(--vayo-gray-900)]/50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-white">Upcoming Shows</h3>
                      <span className="text-xs text-[var(--vayo-gray-500)]">January 2026</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { artist: "DJ Storm", venue: "Paradiso, Amsterdam", date: "Jan 24", status: "Confirmed" },
                        { artist: "The Waves", venue: "O2 Arena, London", date: "Jan 28", status: "Pending" },
                        { artist: "Aurora Beats", venue: "Berghain, Berlin", date: "Feb 2", status: "Confirmed" },
                      ].map((show) => (
                        <div key={show.artist} className="flex items-center justify-between py-2 px-3 rounded-lg bg-[var(--vayo-gray-800)]/30">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-accent" />
                            <div>
                              <p className="text-sm font-medium text-white">{show.artist}</p>
                              <p className="text-xs text-[var(--vayo-gray-500)]">{show.venue}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-[var(--vayo-gray-400)]">{show.date}</p>
                            <p className={`text-xs ${show.status === "Confirmed" ? "text-[var(--vayo-secondary)]" : "text-yellow-500"}`}>
                              {show.status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-[var(--vayo-gray-900)]/50 rounded-xl p-4">
                    <h3 className="text-sm font-semibold text-white mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                      {["New Booking", "Send Contract", "Add Artist", "Create Invoice"].map((action) => (
                        <button key={action} className="w-full text-left px-3 py-2 text-sm text-[var(--vayo-gray-400)] hover:text-white hover:bg-[var(--vayo-gray-800)]/50 rounded-lg transition-colors">
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
