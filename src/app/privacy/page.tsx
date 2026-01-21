"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_INFO } from "@/lib/vayo-data";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div>
            <h1 
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-gray-500 mb-8 font-medium">
              Last updated: January 21, 2026
            </p>

            <div className="prose max-w-none">
              <div className="space-y-8 text-gray-600">
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                  <p>
                    {COMPANY_INFO.legalName}, registered in Belgium with company number {COMPANY_INFO.companyNumber} 
                    and VAT number {COMPANY_INFO.vatNumber}, located at {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country} (&quot;VAYO&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) 
                    is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you use our platform.
                  </p>
                  <p className="mt-4">
                    We act as the data controller for the personal data processed through our platform. 
                    For questions regarding this policy, please contact our Data Protection Officer at{" "}
                    <a href={`mailto:${COMPANY_INFO.email.privacy}`} className="text-[#00d4aa] hover:underline">
                      {COMPANY_INFO.email.privacy}
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                  <p className="mb-4">We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Account information:</strong> Name, email address, company details, phone number</li>
                    <li><strong>Artist and booking data:</strong> Performance schedules, contracts, financial information</li>
                    <li><strong>Communication data:</strong> Messages, support requests, feedback</li>
                    <li><strong>Payment information:</strong> Billing details (processed securely via third-party providers)</li>
                    <li><strong>Usage data:</strong> How you interact with our platform (collected automatically)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Legal Basis for Processing (GDPR)</h2>
                  <p className="mb-4">Under the General Data Protection Regulation (GDPR), we process your personal data based on:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contract performance:</strong> To provide our services as agreed</li>
                    <li><strong>Legal obligations:</strong> To comply with tax, accounting, and other legal requirements</li>
                    <li><strong>Legitimate interests:</strong> To improve our services and prevent fraud</li>
                    <li><strong>Consent:</strong> For marketing communications (which you can withdraw at any time)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Analyze usage patterns to improve user experience</li>
                    <li>Detect, prevent, and address technical issues and security threats</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Sharing and Third Parties</h2>
                  <p className="mb-4">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service providers:</strong> Cloud hosting, payment processing, email delivery, analytics</li>
                    <li><strong>Connected parties:</strong> Artists, agencies, labels, and festivals you interact with through VAYO</li>
                    <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business transfers:</strong> In connection with any merger or acquisition</li>
                  </ul>
                  <p className="mt-4">
                    All third-party service providers are contractually bound to protect your data and process it only according to our instructions.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. International Data Transfers</h2>
                  <p>
                    Your data may be transferred to and processed in countries outside the European Economic Area (EEA). 
                    When we transfer data outside the EEA, we ensure appropriate safeguards are in place, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Standard Contractual Clauses approved by the European Commission</li>
                    <li>Transfers to countries with an adequacy decision</li>
                    <li>Other appropriate safeguards as required by GDPR</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                  <p className="mb-4">
                    We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Account data:</strong> For the duration of your account, plus 2 years after closure</li>
                    <li><strong>Transaction records:</strong> 7 years (Belgian legal requirement)</li>
                    <li><strong>Marketing data:</strong> Until you unsubscribe or withdraw consent</li>
                    <li><strong>Support communications:</strong> 3 years from last contact</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Your Rights (GDPR)</h2>
                  <p className="mb-4">Under GDPR and Belgian data protection law, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
                    <li><strong>Restriction:</strong> Limit how we process your data</li>
                    <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                    <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Withdraw consent:</strong> At any time, for processing based on consent</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at{" "}
                    <a href={`mailto:${COMPANY_INFO.email.privacy}`} className="text-[#00d4aa] hover:underline">
                      {COMPANY_INFO.email.privacy}
                    </a>
                    . We will respond within 30 days.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Supervisory Authority</h2>
                  <p>
                    You have the right to lodge a complaint with the Belgian Data Protection Authority (Gegevensbeschermingsautoriteit):
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p className="font-semibold text-gray-900">Gegevensbeschermingsautoriteit (GBA)</p>
                    <p>Drukpersstraat 35, 1000 Brussel</p>
                    <p>Tel: +32 (0)2 274 48 00</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:contact@apd-gba.be" className="text-[#00d4aa] hover:underline">
                        contact@apd-gba.be
                      </a>
                    </p>
                    <p>
                      Website:{" "}
                      <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                        www.gegevensbeschermingsautoriteit.be
                      </a>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                    the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. For significant changes, 
                    we will provide a more prominent notice or direct communication.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p className="font-semibold text-gray-900">{COMPANY_INFO.legalName}</p>
                    <p>{COMPANY_INFO.address.street}</p>
                    <p>{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</p>
                    <p className="mt-2">
                      Email:{" "}
                      <a href={`mailto:${COMPANY_INFO.email.privacy}`} className="text-[#00d4aa] hover:underline">
                        {COMPANY_INFO.email.privacy}
                      </a>
                    </p>
                    <p>Tel: {COMPANY_INFO.phone}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
