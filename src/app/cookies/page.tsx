"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_INFO } from "@/lib/vayo-data";

export default function CookiesPage() {
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
              Cookie Policy
            </h1>
            <p className="text-gray-500 mb-8 font-medium">
              Last updated: January 21, 2026
            </p>

            <div className="prose max-w-none">
              <div className="space-y-8 text-gray-600">
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They are widely used to make websites work more efficiently, provide information to website 
                    owners, and enable certain features.
                  </p>
                  <p className="mt-4">
                    This Cookie Policy explains how {COMPANY_INFO.legalName} (&quot;VAYO&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) 
                    uses cookies and similar technologies on our platform. By using our service, you consent to 
                    the use of cookies in accordance with this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies (Required)</h3>
                    <p className="text-sm mb-4">
                      These cookies are necessary for the website to function. They enable core functionality 
                      such as security, session management, and accessibility. You cannot opt out of these cookies.
                    </p>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-semibold text-gray-900">Cookie Name</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Purpose</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-xs">vayo_session</td>
                          <td className="py-2">Maintains your login session</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-xs">vayo_csrf</td>
                          <td className="py-2">Security - prevents cross-site attacks</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono text-xs">vayo_consent</td>
                          <td className="py-2">Stores your cookie preferences</td>
                          <td className="py-2">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                    <p className="text-sm mb-4">
                      These cookies enable enhanced functionality and personalization, such as remembering 
                      your preferences and settings.
                    </p>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-semibold text-gray-900">Cookie Name</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Purpose</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-xs">vayo_theme</td>
                          <td className="py-2">Remembers your light/dark mode preference</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-xs">vayo_language</td>
                          <td className="py-2">Stores your language preference</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono text-xs">vayo_sidebar</td>
                          <td className="py-2">Remembers sidebar open/closed state</td>
                          <td className="py-2">30 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance & Analytics Cookies</h3>
                    <p className="text-sm mb-4">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously. We use this data to improve our service.
                    </p>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-semibold text-gray-900">Cookie Name</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Purpose</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-xs">_ga</td>
                          <td className="py-2">Google Analytics - distinguishes users</td>
                          <td className="py-2">2 years</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-xs">_gid</td>
                          <td className="py-2">Google Analytics - distinguishes users</td>
                          <td className="py-2">24 hours</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono text-xs">vayo_perf</td>
                          <td className="py-2">Page load performance monitoring</td>
                          <td className="py-2">Session</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                    <p className="text-sm mb-4">
                      These cookies may be set through our site by our advertising partners. They may be used 
                      to build a profile of your interests and show you relevant adverts on other sites.
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      Currently, VAYO does not use marketing or advertising cookies.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
                  <p className="mb-4">
                    Some third-party services we use may set their own cookies. These include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Google Analytics:</strong> For website analytics.{" "}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                        Google&apos;s Privacy Policy
                      </a>
                    </li>
                    <li>
                      <strong>Stripe:</strong> For payment processing.{" "}
                      <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                        Stripe&apos;s Privacy Policy
                      </a>
                    </li>
                    <li>
                      <strong>Intercom:</strong> For customer support chat.{" "}
                      <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                        Intercom&apos;s Privacy Policy
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
                  <p className="mb-4">
                    <strong>Cookie Banner:</strong> When you first visit our site, you&apos;ll see a cookie banner 
                    where you can accept or customize your cookie preferences.
                  </p>
                  <p className="mb-4">
                    <strong>Browser Settings:</strong> You can also control cookies through your browser settings. 
                    Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>View cookies stored on your device</li>
                    <li>Delete all or specific cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Block all cookies</li>
                  </ul>
                  <p>
                    Note: Blocking essential cookies may prevent the website from functioning properly.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                    <p className="text-sm text-amber-800">
                      <strong>Important:</strong> If you disable cookies, some features of VAYO may not work correctly, 
                      including logging in, saving preferences, and using the dashboard.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Browser-Specific Instructions</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Chrome:</strong>{" "}
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                        Manage cookies in Chrome
                      </a>
                    </li>
                    <li>
                      <strong>Firefox:</strong>{" "}
                      <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                        Manage cookies in Firefox
                      </a>
                    </li>
                    <li>
                      <strong>Safari:</strong>{" "}
                      <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                        Manage cookies in Safari
                      </a>
                    </li>
                    <li>
                      <strong>Edge:</strong>{" "}
                      <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">
                        Manage cookies in Edge
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time. Changes will be posted on this page 
                    with an updated revision date. For significant changes, we may also notify you by email 
                    or through a notice on our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p>
                    If you have questions about our use of cookies, please contact us:
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
