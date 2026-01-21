"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You get full access to all features for 14 days, no credit card required. At the end of the trial, you can choose a plan that fits your needs."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features."
  },
  {
    question: "How do the different modules connect?",
    answer: "All VAYO modules are built on the same platform. When an agency uses VAYO, their artists automatically get access. Festivals can connect with agencies directly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, SEPA direct debit for European customers, and invoicing for annual plans."
  },
  {
    question: "Is there a discount for multiple modules?",
    answer: "Yes! If you're an agency with multiple artists, or a label overseeing multiple agencies, contact us for bundle pricing."
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="pt-24 bg-white">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Plans that<br />
              <span className="text-[#00d4aa]">scale with you</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              From solo artists to global agencies — choose the plan that matches your needs. 
              All plans include a 14-day free trial.
            </p>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500">
                Everything you need to know about our pricing.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-[#a855f7] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  Still have questions?
                </h2>
                <p className="text-white/80">
                  Our team is happy to help you find the right plan.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
