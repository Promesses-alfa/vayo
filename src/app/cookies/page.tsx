"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--vayo-black)] pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Cookie Policy
            </h1>
            <p className="text-[var(--vayo-gray-400)] mb-8">
              Last updated: January 21, 2026
            </p>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-[var(--vayo-gray-300)]">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">How We Use Cookies</h2>
                  <p className="mb-4">VAYO uses cookies for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential cookies:</strong> Required for the platform to function properly</li>
                    <li><strong>Authentication cookies:</strong> To keep you logged in securely</li>
                    <li><strong>Preference cookies:</strong> To remember your settings and preferences</li>
                    <li><strong>Analytics cookies:</strong> To understand how you use our platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  
                  <div className="bg-[var(--vayo-gray-900)] rounded-xl p-6 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                    <p className="text-sm">These cookies are necessary for the website to function. They enable core functionality such as security, network management, and accessibility.</p>
                  </div>

                  <div className="bg-[var(--vayo-gray-900)] rounded-xl p-6 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Performance Cookies</h3>
                    <p className="text-sm">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                  </div>

                  <div className="bg-[var(--vayo-gray-900)] rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                    <p className="text-sm">These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">Managing Cookies</h2>
                  <p>
                    You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience and some features may not function properly.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                  <p>
                    If you have questions about our use of cookies, please contact us at{" "}
                    <a href="mailto:privacy@vayo.io" className="text-[var(--vayo-accent)] hover:underline">
                      privacy@vayo.io
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
