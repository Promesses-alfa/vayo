"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-[var(--vayo-gray-400)] mb-8">
              Last updated: January 21, 2026
            </p>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-[var(--vayo-gray-300)]">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                  <p>
                    VAYO (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
                  <p className="mb-4">We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account information (name, email, company details)</li>
                    <li>Artist and booking data you enter into the platform</li>
                    <li>Communication data when you contact us</li>
                    <li>Payment information for billing purposes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns to improve user experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">4. Data Sharing</h2>
                  <p>
                    We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our platform, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
                  <p className="mb-4">Under GDPR and other applicable laws, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">7. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at{" "}
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
