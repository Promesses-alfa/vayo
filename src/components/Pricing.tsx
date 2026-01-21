"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small agencies just getting started",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 5 team members",
      "25 active artists",
      "500 bookings/year",
      "Basic contract templates",
      "Email support",
      "Calendar integrations",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing agencies with bigger ambitions",
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      "Up to 20 team members",
      "Unlimited artists",
      "Unlimited bookings",
      "Custom contract templates",
      "Financial reporting",
      "Tour management tools",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large agencies requiring custom solutions",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited team members",
      "Unlimited everything",
      "Custom integrations",
      "Dedicated account manager",
      "Custom training",
      "SLA guarantee",
      "White-label options",
      "Advanced analytics",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" ref={ref} className="section relative">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">Pricing</span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-[var(--vayo-gray-400)] max-w-xl mx-auto mb-8">
            Choose the plan that fits your agency. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)]">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-[var(--vayo-accent)] text-white"
                  : "text-[var(--vayo-gray-400)] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-[var(--vayo-accent)] text-white"
                  : "text-[var(--vayo-gray-400)] hover:text-white"
              }`}
            >
              Yearly
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? "bg-gradient-to-b from-[var(--vayo-accent)]/10 to-[var(--vayo-dark)] border-2 border-[var(--vayo-accent)]/50"
                  : "bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-accent text-white text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--vayo-gray-400)]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <>
                    <span className="text-4xl font-bold text-white">
                      €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[var(--vayo-gray-400)]">/month</span>
                    {isYearly && (
                      <p className="text-xs text-[var(--vayo-gray-500)] mt-1">
                        Billed annually
                      </p>
                    )}
                  </>
                ) : (
                  <span className="text-3xl font-bold text-white">Custom</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[var(--vayo-gray-300)]"
                  >
                    <Check className="w-4 h-4 text-[var(--vayo-accent)] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-[var(--vayo-gray-500)] mt-8"
        >
          All prices in EUR. VAT may apply. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
