"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X, Minus, ChevronDown, ChevronUp, Crown } from "lucide-react";

type FeatureValue = boolean | string;

interface Feature {
  name: string;
  overture: FeatureValue;
  systemone: FeatureValue;
  aboss: FeatureValue;
  vayo: FeatureValue;
}

interface FeatureCategory {
  category: string;
  features: Feature[];
}

const comparisonData: FeatureCategory[] = [
  {
    category: "Booking Tools",
    features: [
      { name: "Booking request forms", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Embed shows on website", overture: "JSON feeds", systemone: "Widget", aboss: "Widget", vayo: "Widget + API + JSON" },
      { name: "AI-powered booking suggestions", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "Smart availability matching", overture: false, systemone: false, aboss: "Basic", vayo: true },
    ],
  },
  {
    category: "Show Planning",
    features: [
      { name: "Calendar views (year, month, week, list)", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Map filtering", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Customizable fields", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Export to iCal & Google Calendar", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Import from iCal & Google Calendar", overture: true, systemone: true, aboss: false, vayo: true },
      { name: "Availability check", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Exclusivity/region check", overture: "Radius check", systemone: true, aboss: "Basic", vayo: "Advanced radius + zones" },
      { name: "Double booking warning", overture: "Via checklists", systemone: true, aboss: true, vayo: "Real-time alerts" },
      { name: "Drag & drop scheduling", overture: false, systemone: false, aboss: false, vayo: true },
    ],
  },
  {
    category: "Tour Advancing & Logistics",
    features: [
      { name: "External advancing", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Accept/decline external input", overture: "Email only", systemone: true, aboss: "Email only", vayo: "Portal + Email + App" },
      { name: "Flight lookup by number", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Train bookings", overture: true, systemone: "Text only", aboss: false, vayo: "Full integration" },
      { name: "Ground transport", overture: true, systemone: "Text only", aboss: "Basic", vayo: "Full integration" },
      { name: "PDF itineraries", overture: true, systemone: false, aboss: true, vayo: "PDF + Interactive" },
      { name: "Real-time delay notifications", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "Carbon footprint tracking", overture: false, systemone: false, aboss: false, vayo: true },
    ],
  },
  {
    category: "Contract Management",
    features: [
      { name: "Electronic contract signing", overture: "Dropbox Sign (€1/contract)", systemone: "In-house", aboss: "DocuSign", vayo: "In-house (unlimited)" },
      { name: "Customizable templates", overture: "Limited", systemone: "Microsoft Word", aboss: "Basic", vayo: "Visual builder + Word" },
      { name: "Merge riders with contracts", overture: "Email attachment", systemone: false, aboss: false, vayo: "Automatic merge" },
      { name: "Automated reminders", overture: true, systemone: true, aboss: true, vayo: "Smart reminders + AI" },
      { name: "Version history", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "Multi-language contracts", overture: false, systemone: false, aboss: false, vayo: true },
    ],
  },
  {
    category: "Financial Management",
    features: [
      { name: "Customizable invoicing", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Currency conversion", overture: true, systemone: true, aboss: true, vayo: "Real-time rates" },
      { name: "VIES VAT check", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Track payments", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Export invoices", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Credit notes", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Financial reporting", overture: true, systemone: true, aboss: "Basic", vayo: "Advanced analytics" },
      { name: "Revenue forecasting", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "Commission tracking", overture: false, systemone: false, aboss: true, vayo: true },
      { name: "QuickBooks/Xero integration", overture: false, systemone: false, aboss: false, vayo: true },
    ],
  },
  {
    category: "Contact Management",
    features: [
      { name: "Merge duplicate entries", overture: true, systemone: true, aboss: true, vayo: "AI-powered" },
      { name: "Advanced filters & tags", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Google Places integration", overture: false, systemone: true, aboss: false, vayo: true },
      { name: "Batch modify records", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Contact enrichment", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "Relationship mapping", overture: false, systemone: false, aboss: false, vayo: true },
    ],
  },
  {
    category: "Templates",
    features: [
      { name: "Template style configuration", overture: "Via support", systemone: "Advanced", aboss: "Basic", vayo: "Visual builder" },
      { name: "Document editor", overture: "External", systemone: "Word", aboss: "External", vayo: "Built-in + Word" },
      { name: "Email templates", overture: "Advanced", systemone: "Advanced", aboss: "Basic", vayo: "Advanced + AI" },
      { name: "Excel templates", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Template marketplace", overture: false, systemone: false, aboss: false, vayo: true },
    ],
  },
  {
    category: "Communication & Collaboration",
    features: [
      { name: "Task management", overture: "Basic", systemone: "Advanced", aboss: "Basic", vayo: "Advanced + Kanban" },
      { name: "Notes", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Email automation", overture: "Advanced", systemone: "Advanced", aboss: "Basic", vayo: "Advanced + AI" },
      { name: "User management", overture: "Advanced", systemone: "Advanced", aboss: "Basic", vayo: "Advanced + SSO" },
      { name: "Login for artists & crew", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "File management", overture: true, systemone: true, aboss: true, vayo: "Unlimited storage" },
      { name: "Guest list management", overture: false, systemone: true, aboss: true, vayo: "Advanced" },
      { name: "Mobile app (iOS & Android)", overture: true, systemone: true, aboss: "iOS only", vayo: true },
      { name: "Offline access", overture: true, systemone: true, aboss: false, vayo: true },
      { name: "Real-time collaboration", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "In-app messaging", overture: false, systemone: false, aboss: false, vayo: true },
    ],
  },
  {
    category: "Customization & More",
    features: [
      { name: "Custom fields", overture: true, systemone: true, aboss: "Limited", vayo: "Unlimited" },
      { name: "Interface languages", overture: "English only", systemone: "5 languages", aboss: "3 languages", vayo: "10+ languages" },
      { name: "Dark mode", overture: true, systemone: true, aboss: false, vayo: true },
      { name: "API access", overture: "Limited", systemone: "Limited", aboss: "Limited", vayo: "Full REST + GraphQL" },
      { name: "Webhooks", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "White-label options", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "Custom integrations", overture: false, systemone: false, aboss: false, vayo: true },
    ],
  },
  {
    category: "Support & Training",
    features: [
      { name: "Support center", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Video training", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Email support", overture: true, systemone: true, aboss: true, vayo: true },
      { name: "Live chat support", overture: false, systemone: false, aboss: false, vayo: true },
      { name: "Dedicated account manager", overture: false, systemone: false, aboss: false, vayo: "Enterprise" },
      { name: "Onboarding assistance", overture: false, systemone: "Free", aboss: "Paid", vayo: "Free + Migration" },
    ],
  },
];

function FeatureValueCell({ value, isVayo = false }: { value: FeatureValue; isVayo?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className={`flex items-center justify-center ${isVayo ? "text-[var(--vayo-accent)]" : "text-emerald-500"}`}>
        <Check className="w-5 h-5" />
      </div>
    ) : (
      <div className="flex items-center justify-center text-[var(--vayo-gray-600)]">
        <X className="w-5 h-5" />
      </div>
    );
  }
  return (
    <span className={`text-xs md:text-sm ${isVayo ? "text-[var(--vayo-accent)] font-medium" : "text-[var(--vayo-gray-400)]"}`}>
      {value}
    </span>
  );
}

export default function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    comparisonData.slice(0, 3).map((c) => c.category)
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const expandAll = () => {
    setExpandedCategories(comparisonData.map((c) => c.category));
  };

  const collapseAll = () => {
    setExpandedCategories([]);
  };

  return (
    <section id="comparison" ref={ref} className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--vayo-dark)]" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">Comparison</span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            See Why Teams <span className="text-gradient">Choose VAYO</span>
          </h2>
          <p className="text-[var(--vayo-gray-400)] max-w-2xl mx-auto">
            We&apos;ve built VAYO to include everything you need — and more. 
            Compare us to the competition and see the difference.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Table Header */}
          <div className="sticky top-16 z-20 glass rounded-t-2xl border border-[var(--vayo-gray-800)] border-b-0">
            <div className="grid grid-cols-5 gap-2 md:gap-4 p-3 md:p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm font-semibold text-white">Features</span>
                <div className="hidden md:flex gap-2">
                  <button
                    onClick={expandAll}
                    className="text-xs text-[var(--vayo-gray-500)] hover:text-white transition-colors"
                  >
                    Expand all
                  </button>
                  <span className="text-[var(--vayo-gray-700)]">|</span>
                  <button
                    onClick={collapseAll}
                    className="text-xs text-[var(--vayo-gray-500)] hover:text-white transition-colors"
                  >
                    Collapse
                  </button>
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs md:text-sm font-medium text-[var(--vayo-gray-400)]">Overture</span>
              </div>
              <div className="text-center">
                <span className="text-xs md:text-sm font-medium text-[var(--vayo-gray-400)]">SystemOne</span>
              </div>
              <div className="text-center">
                <span className="text-xs md:text-sm font-medium text-[var(--vayo-gray-400)]">ABOSS</span>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-1.5 rounded-full bg-gradient-accent">
                  <Crown className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  <span className="text-xs md:text-sm font-bold text-white">VAYO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="border border-[var(--vayo-gray-800)] border-t-0 rounded-b-2xl overflow-hidden">
            {comparisonData.map((category, catIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full grid grid-cols-5 gap-2 md:gap-4 p-3 md:px-6 md:py-4 bg-[var(--vayo-gray-900)]/80 hover:bg-[var(--vayo-gray-900)] transition-colors border-t border-[var(--vayo-gray-800)] first:border-t-0"
                >
                  <div className="flex items-center gap-2">
                    {expandedCategories.includes(category.category) ? (
                      <ChevronUp className="w-4 h-4 text-[var(--vayo-gray-500)]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[var(--vayo-gray-500)]" />
                    )}
                    <span className="text-xs md:text-sm font-semibold text-white text-left">
                      {category.category}
                    </span>
                  </div>
                  <div />
                  <div />
                  <div />
                  <div />
                </button>

                {/* Features */}
                {expandedCategories.includes(category.category) && (
                  <div>
                    {category.features.map((feature, featIndex) => (
                      <div
                        key={feature.name}
                        className={`grid grid-cols-5 gap-2 md:gap-4 p-3 md:px-6 md:py-4 ${
                          featIndex % 2 === 0
                            ? "bg-[var(--vayo-dark)]/50"
                            : "bg-[var(--vayo-black)]/50"
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="text-xs md:text-sm text-[var(--vayo-gray-300)]">
                            {feature.name}
                          </span>
                        </div>
                        <div className="flex items-center justify-center">
                          <FeatureValueCell value={feature.overture} />
                        </div>
                        <div className="flex items-center justify-center">
                          <FeatureValueCell value={feature.systemone} />
                        </div>
                        <div className="flex items-center justify-center">
                          <FeatureValueCell value={feature.aboss} />
                        </div>
                        <div className="flex items-center justify-center">
                          <FeatureValueCell value={feature.vayo} isVayo />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--vayo-gray-400)] mb-6">
            Ready to experience the difference?
          </p>
          <a href="/login" className="btn-primary">
            Start Your Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  );
}
