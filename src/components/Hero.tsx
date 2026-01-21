"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Music, Building2, PartyPopper } from "lucide-react";
import Link from "next/link";

const stakeholders = [
  { icon: Users, label: "Agencies", color: "bg-[#00d4aa]" },
  { icon: PartyPopper, label: "Festivals", color: "bg-[#a855f7]" },
  { icon: Music, label: "Artists", color: "bg-[#f97316]" },
  { icon: Building2, label: "Labels", color: "bg-[#3b82f6]" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Large Headline like SystemOne */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-[#a855f7]">VAYO</span> is for every<br />
            stakeholder in live<br />
            entertainment.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10 leading-relaxed"
          >
            One platform connecting agencies, festivals, artists, and labels. 
            Real-time collaboration from first contact to final encore.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <Link 
              href="/login" 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Request trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="#demo" 
              className="inline-flex items-center gap-2 px-6 py-3.5 text-gray-700 font-medium hover:text-gray-900 transition-colors"
            >
              <Play className="w-5 h-5" />
              Book a demo
            </Link>
          </motion.div>

          {/* Stakeholder Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="text-sm text-gray-500 mr-2">Built for:</span>
            {stakeholders.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200"
              >
                <div className={`w-6 h-6 ${item.color} rounded-md flex items-center justify-center`}>
                  <item.icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#a855f7]/5 to-transparent pointer-events-none" />
    </section>
  );
}
