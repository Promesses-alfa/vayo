"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_INFO } from "@/lib/vayo-data";
import { Download, FileText, Shield, CheckCircle2 } from "lucide-react";

export default function DPAPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00d4aa]/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#00d4aa]" />
              </div>
              <div>
                <h1 
                  className="text-4xl font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Data Processing Agreement
                </h1>
                <p className="text-gray-500 font-medium">
                  GDPR Article 28 Compliant
                </p>
              </div>
            </div>
            
            <p className="text-gray-500 mb-8 font-medium">
              Last updated: January 21, 2026
            </p>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#00d4aa]" />
                  Download DPA Template
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Pre-signed DPA ready for your records. Simply countersign and store.
                </p>
                <button className="px-4 py-2 bg-[#00d4aa] text-white rounded-xl font-bold text-sm hover:bg-[#00b894] transition-all flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4aa]" />
                  Already a Customer?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Access your signed DPA and sub-processor list in your account settings.
                </p>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all">
                  Go to Settings
                </button>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="space-y-8 text-gray-600">
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                  <p>
                    This Data Processing Agreement (&quot;DPA&quot;) forms part of the Terms of Service between 
                    {COMPANY_INFO.legalName} (&quot;Processor&quot;, &quot;VAYO&quot;, &quot;we&quot;, &quot;us&quot;) and the Customer (&quot;Controller&quot;, &quot;you&quot;) 
                    and reflects the parties&apos; agreement regarding the Processing of Personal Data in accordance with 
                    the requirements of Article 28 of the General Data Protection Regulation (GDPR).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Definitions</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person as defined in Article 4(1) GDPR.</li>
                    <li><strong>&quot;Processing&quot;</strong> means any operation performed on Personal Data as defined in Article 4(2) GDPR.</li>
                    <li><strong>&quot;Data Subject&quot;</strong> means the identified or identifiable person to whom Personal Data relates.</li>
                    <li><strong>&quot;Sub-processor&quot;</strong> means any processor engaged by VAYO to process Personal Data on behalf of the Controller.</li>
                    <li><strong>&quot;Standard Contractual Clauses&quot;</strong> means the contractual clauses approved by the European Commission for international data transfers.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Scope and Applicability</h2>
                  <p>
                    This DPA applies to all Processing of Personal Data by VAYO on behalf of the Controller 
                    in connection with the Services. The subject matter, duration, nature, and purpose of Processing, 
                    types of Personal Data, and categories of Data Subjects are described in Annex 1.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Processor Obligations</h2>
                  <p className="mb-4">VAYO shall:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process Personal Data only on documented instructions from the Controller</li>
                    <li>Ensure that persons authorized to process Personal Data have committed to confidentiality</li>
                    <li>Implement appropriate technical and organizational security measures</li>
                    <li>Respect the conditions for engaging sub-processors</li>
                    <li>Assist the Controller in responding to Data Subject requests</li>
                    <li>Assist the Controller in ensuring compliance with security, breach notification, and DPIA obligations</li>
                    <li>Delete or return all Personal Data at the end of the service provision</li>
                    <li>Make available all information necessary to demonstrate compliance and allow for audits</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Security Measures</h2>
                  <p className="mb-4">
                    VAYO implements the following technical and organizational measures to ensure a level of 
                    security appropriate to the risk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Encryption:</strong> All data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                    <li><strong>Access Control:</strong> Role-based access control, multi-factor authentication required for admin access</li>
                    <li><strong>Network Security:</strong> Firewalls, intrusion detection, DDoS protection</li>
                    <li><strong>Physical Security:</strong> Data centers with ISO 27001 certification, access controls</li>
                    <li><strong>Backup:</strong> Daily encrypted backups with 30-day retention</li>
                    <li><strong>Monitoring:</strong> 24/7 security monitoring and alerting</li>
                    <li><strong>Testing:</strong> Annual penetration testing, regular vulnerability scanning</li>
                    <li><strong>Incident Response:</strong> Documented incident response procedures</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Sub-processors</h2>
                  <p className="mb-4">
                    The Controller provides general authorization for VAYO to engage Sub-processors. 
                    VAYO maintains a list of current Sub-processors at{" "}
                    <a href="/sub-processors" className="text-[#00d4aa] hover:underline">
                      vayo.io/sub-processors
                    </a>.
                  </p>
                  <p className="mb-4">
                    VAYO will notify the Controller of any intended changes to Sub-processors at least 30 days 
                    in advance, giving the Controller the opportunity to object.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Current Sub-processors</h4>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-semibold text-gray-900">Sub-processor</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Purpose</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">Amazon Web Services (AWS)</td>
                          <td className="py-2">Cloud infrastructure</td>
                          <td className="py-2">EU (Frankfurt)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">Supabase</td>
                          <td className="py-2">Database hosting</td>
                          <td className="py-2">EU (Frankfurt)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">Stripe</td>
                          <td className="py-2">Payment processing</td>
                          <td className="py-2">USA (SCCs in place)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">HelloSign (Dropbox)</td>
                          <td className="py-2">E-signatures</td>
                          <td className="py-2">USA (SCCs in place)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">Resend</td>
                          <td className="py-2">Email delivery</td>
                          <td className="py-2">USA (SCCs in place)</td>
                        </tr>
                        <tr>
                          <td className="py-2">Intercom</td>
                          <td className="py-2">Customer support</td>
                          <td className="py-2">USA (SCCs in place)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">7. International Transfers</h2>
                  <p>
                    Where Personal Data is transferred outside the EEA, VAYO ensures appropriate safeguards 
                    are in place, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Standard Contractual Clauses (2021/914) with all relevant Sub-processors</li>
                    <li>Transfer Impact Assessments where required</li>
                    <li>Supplementary measures as needed based on the destination country</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Data Subject Rights</h2>
                  <p>
                    VAYO will assist the Controller in fulfilling its obligations to respond to Data Subject 
                    requests. The platform provides tools for Controllers to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Access and export Personal Data</li>
                    <li>Rectify incorrect Personal Data</li>
                    <li>Delete Personal Data (right to erasure)</li>
                    <li>Restrict processing</li>
                    <li>Export data in a portable format</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Data Breach Notification</h2>
                  <p>
                    VAYO will notify the Controller without undue delay (and in any event within 48 hours) 
                    after becoming aware of a Personal Data breach. The notification will include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Description of the nature of the breach</li>
                    <li>Categories and approximate number of Data Subjects concerned</li>
                    <li>Likely consequences of the breach</li>
                    <li>Measures taken or proposed to address the breach</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Audit Rights</h2>
                  <p>
                    VAYO will make available to the Controller all information necessary to demonstrate 
                    compliance with the obligations in Article 28 GDPR and allow for and contribute to 
                    audits, including inspections, conducted by the Controller or an auditor mandated by 
                    the Controller, subject to reasonable notice and during normal business hours.
                  </p>
                  <p className="mt-4">
                    VAYO&apos;s SOC 2 Type II report and ISO 27001 certification are available upon request 
                    under NDA.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Return and Deletion</h2>
                  <p>
                    Upon termination of the Services, VAYO will:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Provide the Controller with an export of all Personal Data in a standard format</li>
                    <li>Delete all Personal Data within 30 days unless legally required to retain</li>
                    <li>Certify in writing that all Personal Data has been deleted</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Annex 1: Processing Details</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900">Subject Matter</p>
                        <p className="text-sm">Provision of booking management, contract handling, and financial tracking services for the music industry.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Duration</p>
                        <p className="text-sm">For the duration of the service agreement, plus applicable retention periods.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Nature and Purpose</p>
                        <p className="text-sm">Storage, organization, retrieval, and transmission of Personal Data to provide the VAYO platform services.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Types of Personal Data</p>
                        <p className="text-sm">Contact details (name, email, phone), booking information, financial data, contract details, communication records.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Categories of Data Subjects</p>
                        <p className="text-sm">Artists, agency staff, label personnel, festival organizers, venue contacts, promoters.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
                  <p>
                    For questions about this DPA or to request a signed copy:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p className="font-semibold text-gray-900">{COMPANY_INFO.legalName}</p>
                    <p>{COMPANY_INFO.address.street}</p>
                    <p>{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</p>
                    <p className="mt-2">
                      Data Protection Officer:{" "}
                      <a href={`mailto:${COMPANY_INFO.email.privacy}`} className="text-[#00d4aa] hover:underline">
                        {COMPANY_INFO.email.privacy}
                      </a>
                    </p>
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
