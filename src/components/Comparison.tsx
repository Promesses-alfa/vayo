"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";

const competitors = ["Overture", "SystemOne", "ABOSS", "VAYO"];

const categories = [
  {
    name: "Booking Tools",
    features: [
      { 
        name: "Booking request forms", 
        values: [true, true, true, true] 
      },
      { 
        name: "Embed shows on website", 
        values: ["JSON feeds", "Widget", "Widget", "Widget + API + JSON"] 
      },
      { 
        name: "AI-powered booking suggestions", 
        values: [false, false, false, true] 
      },
      { 
        name: "Smart availability matching", 
        values: [false, false, "Basic", true] 
      },
    ],
  },
  {
    name: "Show Planning",
    features: [
      { 
        name: "Calendar views (year, month, week, list)", 
        values: [true, true, true, true] 
      },
      { 
        name: "Multi-artist tour planning", 
        values: [true, true, "Basic", true] 
      },
      { 
        name: "Festival lineup builder", 
        values: [false, false, false, true] 
      },
      { 
        name: "Automated advancing workflow", 
        values: [false, "Basic", false, true] 
      },
    ],
  },
  {
    name: "Contracts & Finance",
    features: [
      { 
        name: "Native digital contracts", 
        values: ["Third-party", true, "Basic", true] 
      },
      { 
        name: "E-signature integration", 
        values: ["€1/contract", "Included", "Basic", "Included"] 
      },
      { 
        name: "Invoice generation", 
        values: [true, true, true, true] 
      },
      { 
        name: "Financial forecasting", 
        values: [false, "Basic", false, true] 
      },
    ],
  },
  {
    name: "Ecosystem",
    features: [
      { 
        name: "Festival ↔ Agency integration", 
        values: [false, false, false, true] 
      },
      { 
        name: "Artist mobile app", 
        values: [false, true, false, true] 
      },
      { 
        name: "Label dashboard", 
        values: [false, false, false, true] 
      },
      { 
        name: "Real-time cross-party sync", 
        values: [false, false, false, true] 
      },
    ],
  },
];

export default function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Booking Tools"]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const renderValue = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-[#00d4aa]" />;
    if (value === false) return <X className="w-5 h-5 text-gray-300" />;
    return <span className="text-sm text-gray-600">{value}</span>;
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            See why teams choose<br />
            <span className="text-[#00d4aa]">VAYO</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Compare us to the competition and see the difference.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 rounded-t-2xl border border-gray-200">
              <div className="font-semibold text-gray-700">Features</div>
              {competitors.map((competitor) => (
                <div
                  key={competitor}
                  className={`text-center font-semibold ${
                    competitor === "VAYO"
                      ? "text-white bg-[#00d4aa] py-2 px-4 rounded-lg"
                      : "text-gray-700"
                  }`}
                >
                  {competitor}
                </div>
              ))}
            </div>

            {/* Categories */}
            {categories.map((category) => (
              <div key={category.name} className="border-x border-gray-200">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full grid grid-cols-5 gap-4 p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-200"
                >
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    {expandedCategories.includes(category.name) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                    {category.name}
                  </div>
                </button>

                {/* Features */}
                {expandedCategories.includes(category.name) &&
                  category.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="grid grid-cols-5 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-sm text-gray-600">{feature.name}</div>
                      {feature.values.map((value, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-center ${
                            index === 3 ? "bg-[#00d4aa]/5 -mx-4 px-4 py-2" : ""
                          }`}
                        >
                          {renderValue(value)}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            ))}

            {/* Bottom */}
            <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 rounded-b-2xl border border-gray-200 border-t-0">
              <div />
              {competitors.map((competitor) => (
                <div key={competitor} className="text-center">
                  {competitor === "VAYO" && (
                    <a
                      href="/login"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Try VAYO free
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
