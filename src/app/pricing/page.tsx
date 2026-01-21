"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You get full access to all Professional features for 14 days, no credit card required. At the end of the trial, you can choose a plan that fits your needs or your account will be paused."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change takes effect at your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, Amex), SEPA direct debit for European customers, and invoicing for Enterprise plans."
  },
  {
    question: "Is there a discount for non-profits?",
    answer: "Yes! We offer 50% off for registered non-profit organizations and educational institutions. Contact our sales team to apply."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains accessible for 30 days after cancellation. You can export all your data at any time. After 30 days, data is securely deleted from our servers."
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Enterprise plans include custom integrations with your existing tools. We've built integrations with accounting software, CRMs, and industry-specific platforms."
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="hero-glow top-0 left-1/4 opacity-30" />
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-8"
            >
              <span className="badge mb-4">Pricing</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                Plans That <span className="text-gradient">Scale With You</span>
              </h1>
              <p className="text-lg text-[var(--vayo-gray-400)]">
                From solo agents to global agencies — choose the plan that matches your ambitions. 
                All plans include our 14-day free trial.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* FAQ Section */}
        <section className="section">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-[var(--vayo-gray-400)]">
                Everything you need to know about our pricing and plans.
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--vayo-gray-800)]/50 transition-colors"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[var(--vayo-gray-400)] transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-[var(--vayo-gray-400)]">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section">
          <div className="container mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--vayo-accent)]/10 to-transparent" />
              <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    Still have questions?
                  </h2>
                  <p className="text-[var(--vayo-gray-400)]">
                    Our team is happy to help you find the right plan for your agency.
                  </p>
                </div>
                <Link href="/contact" className="btn-primary flex items-center gap-2 whitespace-nowrap">
                  <MessageCircle className="w-5 h-5" />
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
