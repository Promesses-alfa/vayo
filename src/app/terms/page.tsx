"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-[var(--vayo-gray-400)] mb-8">
              Last updated: January 21, 2026
            </p>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-[var(--vayo-gray-300)]">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing or using VAYO&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
                  <p>
                    VAYO provides a software platform for booking agencies, artists, record labels, and festivals/venues to manage their operations, including booking management, contract handling, financial tracking, and communication tools.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
                  <p className="mb-4">When creating an account, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be responsible for all activities under your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">4. Acceptable Use</h2>
                  <p className="mb-4">You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the service for any illegal purpose</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on the rights of others</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of the service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">5. Payment Terms</h2>
                  <p>
                    Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change our pricing with 30 days notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
                  <p>
                    The VAYO platform, including all content, features, and functionality, is owned by VAYO and is protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
                  <p>
                    VAYO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">8. Termination</h2>
                  <p>
                    We may terminate or suspend your account at any time for violations of these terms. Upon termination, your right to use the service will immediately cease.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">9. Contact</h2>
                  <p>
                    For questions about these Terms, please contact us at{" "}
                    <a href="mailto:legal@vayo.io" className="text-[var(--vayo-accent)] hover:underline">
                      legal@vayo.io
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
