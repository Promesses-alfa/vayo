"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_INFO } from "@/lib/vayo-data";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-gray-500 mb-8 font-medium">
              Last updated: January 21, 2026
            </p>

            <div className="prose max-w-none">
              <div className="space-y-8 text-gray-600">
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                  <p>
                    These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and 
                    {COMPANY_INFO.legalName}, a company registered in Belgium with company number {COMPANY_INFO.companyNumber} 
                    and VAT number {COMPANY_INFO.vatNumber}, located at {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country} (&quot;VAYO&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                  </p>
                  <p className="mt-4">
                    By accessing or using VAYO&apos;s services, you agree to be bound by these Terms. If you do not agree 
                    to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                  <p>
                    VAYO provides a software-as-a-service (SaaS) platform for the music and entertainment industry, 
                    including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Booking management for agencies and artists</li>
                    <li>Contract creation, sending, and electronic signature</li>
                    <li>Financial tracking, invoicing, and payment management</li>
                    <li>Festival lineup planning and artist advancing</li>
                    <li>Label management including release scheduling and royalty tracking</li>
                    <li>Social media planning and analytics</li>
                    <li>Communication tools between all stakeholders</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                  <p className="mb-4">When creating an account, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                  <p className="mt-4">
                    You must be at least 18 years old and have the legal capacity to enter into these Terms. 
                    If you are using VAYO on behalf of an organization, you represent that you have the authority 
                    to bind that organization to these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Subscription and Fees</h2>
                  <p className="mb-4">
                    <strong>4.1 Billing:</strong> Subscription fees are billed in advance on a monthly or annual basis 
                    as selected during registration. All prices are in EUR and exclude VAT unless otherwise stated.
                  </p>
                  <p className="mb-4">
                    <strong>4.2 VAT:</strong> Customers in the European Union will be charged VAT at the applicable rate 
                    (21% for Belgium). Business customers with a valid VAT number in another EU country may be eligible 
                    for reverse charge.
                  </p>
                  <p className="mb-4">
                    <strong>4.3 Payment:</strong> Payment is due upon invoice issuance. We accept credit cards, SEPA 
                    direct debit, and bank transfers.
                  </p>
                  <p className="mb-4">
                    <strong>4.4 Price Changes:</strong> We reserve the right to change our pricing with 30 days&apos; notice. 
                    Price changes will take effect at the start of your next billing cycle.
                  </p>
                  <p>
                    <strong>4.5 Refunds:</strong> Fees are non-refundable except as required by Belgian consumer protection 
                    law. You have a 14-day withdrawal right for new subscriptions (see Section 12).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
                  <p className="mb-4">You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the service for any illegal purpose or in violation of any laws</li>
                    <li>Violate any applicable local, national, or international law or regulation</li>
                    <li>Infringe on the rights of others, including intellectual property rights</li>
                    <li>Transmit any malicious code, viruses, or harmful data</li>
                    <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                    <li>Interfere with the proper functioning of the service</li>
                    <li>Use automated means to access the service without our permission</li>
                    <li>Resell or sublicense access to the service without authorization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Content and Data</h2>
                  <p className="mb-4">
                    <strong>6.1 Ownership:</strong> You retain ownership of all content and data you submit to VAYO. 
                    We do not claim any ownership rights to your content.
                  </p>
                  <p className="mb-4">
                    <strong>6.2 License:</strong> By submitting content, you grant us a worldwide, non-exclusive license 
                    to use, host, store, and process your content solely for the purpose of providing the service to you.
                  </p>
                  <p className="mb-4">
                    <strong>6.3 Responsibility:</strong> You are solely responsible for the accuracy and legality of the 
                    content you submit. You represent that you have all necessary rights to the content.
                  </p>
                  <p>
                    <strong>6.4 Backup:</strong> While we maintain regular backups, you are responsible for maintaining 
                    your own backup copies of important data.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
                  <p>
                    The VAYO platform, including all content, features, functionality, software, and trademarks, 
                    is owned by {COMPANY_INFO.legalName} and is protected by international copyright, trademark, 
                    patent, and other intellectual property laws.
                  </p>
                  <p className="mt-4">
                    You may not copy, modify, distribute, sell, or lease any part of our service or software without 
                    our written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Electronic Signatures</h2>
                  <p>
                    VAYO&apos;s electronic signature feature complies with the EU eIDAS Regulation (Regulation 910/2014) 
                    and Belgian law on electronic signatures. Electronic signatures created through VAYO have the same 
                    legal validity as handwritten signatures for most types of contracts.
                  </p>
                  <p className="mt-4">
                    By using our electronic signature feature, you agree that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>You consent to using electronic records and signatures</li>
                    <li>Your electronic signature is legally binding</li>
                    <li>You are the intended signatory or have authority to sign on behalf of the organization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by Belgian and EU law:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>VAYO shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                    <li>We are not liable for any loss of data, profits, or business opportunities</li>
                    <li>We are not responsible for the actions or content of third parties or other users</li>
                  </ul>
                  <p className="mt-4">
                    Nothing in these Terms excludes or limits our liability for death or personal injury caused by 
                    negligence, fraud, or any other liability that cannot be excluded by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless VAYO and its officers, directors, employees, and agents 
                    from any claims, damages, losses, or expenses (including reasonable legal fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Your use of the service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any rights of a third party</li>
                    <li>Any content you submit to the service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Termination</h2>
                  <p className="mb-4">
                    <strong>11.1 By You:</strong> You may cancel your subscription at any time through your account 
                    settings. Cancellation takes effect at the end of the current billing period.
                  </p>
                  <p className="mb-4">
                    <strong>11.2 By Us:</strong> We may suspend or terminate your account immediately if you violate 
                    these Terms, fail to pay fees, or engage in activity that could harm VAYO or other users.
                  </p>
                  <p>
                    <strong>11.3 Effect of Termination:</strong> Upon termination, your right to use the service 
                    ceases immediately. You may request an export of your data within 30 days of termination.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Consumer Rights (EU)</h2>
                  <p>
                    If you are a consumer in the European Union, you have a 14-day right of withdrawal for new 
                    subscriptions. To exercise this right, contact us at{" "}
                    <a href={`mailto:${COMPANY_INFO.email.support}`} className="text-[#00d4aa] hover:underline">
                      {COMPANY_INFO.email.support}
                    </a>
                    {" "}within 14 days of your subscription start date.
                  </p>
                  <p className="mt-4">
                    By using the service during the withdrawal period, you acknowledge that you may lose your 
                    right of withdrawal once the service has been fully provided.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Governing Law and Disputes</h2>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of Belgium, without 
                    regard to its conflict of law provisions.
                  </p>
                  <p className="mt-4">
                    For business customers: Any disputes shall be exclusively submitted to the courts of Brussels, Belgium.
                  </p>
                  <p className="mt-4">
                    For consumers: You may bring claims in the courts of your country of residence. You may also 
                    use the European Online Dispute Resolution platform at{" "}
                    <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                      https://ec.europa.eu/odr
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
                  <p>
                    We may update these Terms from time to time. We will notify you of any material changes at least 
                    30 days before they take effect. Your continued use of the service after the changes take effect 
                    constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Miscellaneous</h2>
                  <p className="mb-4">
                    <strong>15.1 Entire Agreement:</strong> These Terms, together with our Privacy Policy and any 
                    other policies referenced herein, constitute the entire agreement between you and VAYO.
                  </p>
                  <p className="mb-4">
                    <strong>15.2 Severability:</strong> If any provision is found unenforceable, the remaining 
                    provisions will continue in full force.
                  </p>
                  <p className="mb-4">
                    <strong>15.3 Waiver:</strong> Our failure to enforce any right does not waive our right to do so later.
                  </p>
                  <p>
                    <strong>15.4 Assignment:</strong> You may not assign your rights under these Terms without our 
                    written consent. We may assign our rights without restriction.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">16. Contact</h2>
                  <p>
                    For questions about these Terms, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p className="font-semibold text-gray-900">{COMPANY_INFO.legalName}</p>
                    <p>{COMPANY_INFO.address.street}</p>
                    <p>{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</p>
                    <p className="mt-2">
                      Email:{" "}
                      <a href={`mailto:${COMPANY_INFO.email.legal}`} className="text-[#00d4aa] hover:underline">
                        {COMPANY_INFO.email.legal}
                      </a>
                    </p>
                    <p>Tel: {COMPANY_INFO.phone}</p>
                    <p className="mt-2">VAT: {COMPANY_INFO.vatNumber}</p>
                    <p>Company Number: {COMPANY_INFO.companyNumber}</p>
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
