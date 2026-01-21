"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send, MessageSquare, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--vayo-black)] pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--vayo-accent)]/10 blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="badge inline-flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-[var(--vayo-gray-400)] text-lg max-w-xl mx-auto">
              Have questions about VAYO? Want to schedule a demo? We&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[var(--vayo-gray-400)] mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--vayo-gray-400)] mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[var(--vayo-gray-400)] mb-2">Email</label>
                  <input 
                    type="email" 
                    className="input w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[var(--vayo-gray-400)] mb-2">Company / Organization</label>
                  <input 
                    type="text" 
                    className="input w-full"
                    placeholder="Your agency or company name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[var(--vayo-gray-400)] mb-2">I am a...</label>
                  <select className="input w-full">
                    <option value="">Select your role</option>
                    <option value="agency">Booking Agency</option>
                    <option value="artist">Artist / DJ</option>
                    <option value="label">Record Label</option>
                    <option value="festival">Festival / Venue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[var(--vayo-gray-400)] mb-2">Message</label>
                  <textarea 
                    className="input w-full min-h-[120px]"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--vayo-accent)]/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[var(--vayo-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-[var(--vayo-gray-400)] text-sm mb-3">
                  For general inquiries and support
                </p>
                <a href="mailto:hello@vayo.io" className="text-[var(--vayo-accent)] hover:underline">
                  hello@vayo.io
                </a>
              </div>

              <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--vayo-accent)]/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-[var(--vayo-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Sales & Partnerships</h3>
                <p className="text-[var(--vayo-gray-400)] text-sm mb-3">
                  Interested in VAYO for your organization?
                </p>
                <a href="mailto:sales@vayo.io" className="text-[var(--vayo-accent)] hover:underline">
                  sales@vayo.io
                </a>
              </div>

              <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--vayo-accent)]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[var(--vayo-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-[var(--vayo-gray-400)] text-sm">
                  Herengracht 182<br />
                  1016 BR Amsterdam<br />
                  The Netherlands
                </p>
              </div>

              <div className="bg-gradient-to-r from-[var(--vayo-accent)]/10 to-purple-500/10 border border-[var(--vayo-accent)]/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Schedule a Demo</h3>
                <p className="text-[var(--vayo-gray-400)] text-sm mb-4">
                  See VAYO in action with a personalized demo tailored to your needs.
                </p>
                <a href="/login" className="btn-primary inline-flex">
                  Book a Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
