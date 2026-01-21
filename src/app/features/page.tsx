"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  FileText, 
  DollarSign, 
  Truck, 
  Users, 
  Zap,
  ArrowRight,
  Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    id: "booking",
    icon: Calendar,
    title: "Smart Booking Management",
    description: "Streamline your entire booking workflow. From initial inquiry to confirmed show, manage every detail in one place.",
    color: "bg-[#00d4aa]",
    highlights: [
      "Automated confirmations & reminders",
      "Real-time availability matching",
      "Calendar sync across all devices",
      "Booking request forms & widgets",
    ],
  },
  {
    id: "contracts",
    icon: FileText,
    title: "Native Digital Contracts",
    description: "Create, send, and sign contracts in minutes. No third-party tools or per-contract fees.",
    color: "bg-[#a855f7]",
    highlights: [
      "In-house e-signature (no extra cost)",
      "Custom contract templates",
      "Version control & audit trail",
      "Automatic reminders",
    ],
  },
  {
    id: "finance",
    icon: DollarSign,
    title: "Financial Command Center",
    description: "Track revenue, manage invoices, and forecast earnings across your entire roster.",
    color: "bg-[#f97316]",
    highlights: [
      "Invoice generation & tracking",
      "Payment status visibility",
      "Revenue forecasting",
      "Commission calculations",
    ],
  },
  {
    id: "tours",
    icon: Truck,
    title: "Tour & Logistics",
    description: "Plan tours like a pro. Manage travel, accommodations, riders, and technical requirements.",
    color: "bg-[#3b82f6]",
    highlights: [
      "Itinerary builder",
      "Rider management",
      "Vendor coordination",
      "Travel & hotel booking",
    ],
  },
  {
    id: "team",
    icon: Users,
    title: "Team Collaboration",
    description: "Keep everyone in sync. Share information and communicate seamlessly with your team.",
    color: "bg-[#ec4899]",
    highlights: [
      "Real-time updates",
      "Task assignment",
      "Role-based permissions",
      "Activity feed",
    ],
  },
  {
    id: "integrations",
    icon: Zap,
    title: "Powerful Integrations",
    description: "Connect with the tools you already use. Seamless integrations with calendars and accounting.",
    color: "bg-[#8b5cf6]",
    highlights: [
      "Google Calendar",
      "Outlook integration",
      "Accounting software",
      "Full API access",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-white">
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                Everything you need to<br />
                <span className="text-[#00d4aa]">scale your agency</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8">
                From booking management to financial reporting, VAYO provides all the tools 
                you need to run a successful operation.
              </p>
              <Link 
                href="/login" 
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Banner Image */}
        <section className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/Afbeelding5.JPG"
            alt="Festival atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  id={feature.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-500 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 text-gray-600">
                          <Check className="w-5 h-5 text-[#00d4aa]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}>
                    <div className={`aspect-video rounded-2xl ${feature.color} opacity-10`} />
                    <div className="absolute inset-4 rounded-xl bg-white border border-gray-200 shadow-lg flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-gray-200" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#a855f7]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Ready to transform your agency?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Join hundreds of agencies already using VAYO to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
