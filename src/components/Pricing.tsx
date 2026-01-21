"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Users, Music, Building2, PartyPopper, ArrowRight } from "lucide-react";

const stakeholderPlans = [
  {
    id: "agencies",
    name: "For Agencies",
    icon: Users,
    color: "bg-[#00d4aa]",
    description: "Manage roster, bookings & client relationships",
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      "Unlimited artist roster",
      "Smart booking management",
      "Contract generation & e-signatures",
      "Financial reporting",
      "Tour & logistics planning",
      "Calendar sync",
      "Client portal",
      "API integrations",
    ],
    highlight: "Connect with festivals directly",
  },
  {
    id: "festivals",
    name: "For Festivals",
    icon: PartyPopper,
    color: "bg-[#a855f7]",
    description: "Build lineups & manage advancing",
    monthlyPrice: 199,
    yearlyPrice: 159,
    features: [
      "AI-powered lineup suggestions",
      "Direct agency connections",
      "Advancing automation",
      "Stage & schedule management",
      "Budget tracking",
      "Rider management",
      "Artist logistics portal",
      "Real-time collaboration",
    ],
    highlight: "Book artists through VAYO",
  },
  {
    id: "artists",
    name: "For Artists",
    icon: Music,
    color: "bg-[#f97316]",
    description: "All your tour info in one place",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Complete tour schedule",
      "Document access",
      "Travel & accommodation",
      "Offline mobile app",
      "Push notifications",
      "Direct messaging",
      "Earnings overview",
      "Calendar sync",
    ],
    highlight: "Always free for artists",
  },
  {
    id: "labels",
    name: "For Labels",
    icon: Building2,
    color: "bg-[#3b82f6]",
    description: "Track touring activity & revenue",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Multi-artist dashboard",
      "Booking pipeline",
      "Revenue tracking",
      "Release coordination",
      "Agency collaboration",
      "Tour analytics",
      "Contract templates",
      "Brand assets",
    ],
    highlight: "Connect with partner agencies",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
            One platform,<br />
            <span className="text-[#a855f7]">built for everyone</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Whether you're an agency, festival, artist, or label — VAYO has a plan for you.
            All modules connect seamlessly.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-gray-100">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Yearly
              <span className="text-xs bg-[#00d4aa] text-white px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholderPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${plan.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <plan.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-4 min-h-[40px]">{plan.description}</p>

              {/* Price */}
              <div className="mb-4">
                {plan.monthlyPrice === 0 ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">Free</span>
                    <p className="text-xs text-gray-400 mt-1">Forever</p>
                  </>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-gray-900">
                      €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500">/mo</span>
                    {isYearly && (
                      <p className="text-xs text-gray-400 mt-1">Billed annually</p>
                    )}
                  </>
                )}
              </div>

              {/* Highlight */}
              <div className="mb-4 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100">
                <p className="text-xs font-medium text-[#00d4aa]">✨ {plan.highlight}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#00d4aa] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="w-full py-3 rounded-full font-semibold text-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                Get started
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-200">
            <div className="flex -space-x-2">
              {stakeholderPlans.map((plan) => (
                <div key={plan.id} className={`w-8 h-8 ${plan.color} rounded-full flex items-center justify-center border-2 border-white`}>
                  <plan.icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              All modules <span className="text-[#00d4aa] font-medium">work together</span> — one ecosystem
            </p>
          </div>
        </motion.div>

        <p className="text-center text-sm text-gray-400 mt-8">
          All prices in EUR. VAT may apply. 14-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
