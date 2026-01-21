"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Users, 
  Music, 
  Disc3, 
  PartyPopper,
  ArrowRight,
  ArrowDown,
  Calendar,
  FileText,
  DollarSign,
  Send,
  CheckCircle2,
  Zap,
  RefreshCw,
  Globe,
  Share2,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const modules = [
  {
    id: "agency",
    title: "Booking Agency",
    icon: Users,
    color: "bg-[#00d4aa]",
    description: "Manage artist rosters, create bookings, send contracts, track finances",
    href: "/demo/agency",
    features: ["Artist roster management", "Booking creation", "Contract generation", "Invoice handling", "Calendar sync"],
  },
  {
    id: "artist",
    title: "Artist",
    icon: Music,
    color: "bg-[#f97316]",
    description: "View schedule, manage availability, access contracts, track earnings",
    href: "/demo/artist",
    features: ["Real-time schedule sync", "Availability calendar", "Document access", "Earnings dashboard", "Travel info"],
  },
  {
    id: "label",
    title: "Record Label",
    icon: Disc3,
    color: "bg-[#3b82f6]",
    description: "Plan releases, manage roster, track royalties, coordinate social media",
    href: "/demo/label",
    features: ["Release scheduling", "Artist development", "Royalty tracking", "Social media coordination", "Analytics"],
  },
  {
    id: "festival",
    title: "Festival",
    icon: PartyPopper,
    color: "bg-[#a855f7]",
    description: "Build lineups, manage advancing, coordinate stages, track budget",
    href: "/demo/festival",
    features: ["Lineup builder", "Artist advancing", "Stage scheduling", "Budget tracking", "Timetable export"],
  },
];

const workflows = [
  {
    title: "Agency Creates Booking",
    steps: [
      { module: "agency", action: "Create booking for artist", icon: Calendar },
      { module: "artist", action: "Artist sees show in schedule", icon: CheckCircle2 },
      { module: "agency", action: "Generate and send contract", icon: FileText },
      { module: "artist", action: "Artist reviews and signs", icon: CheckCircle2 },
      { module: "agency", action: "Create and send invoice", icon: DollarSign },
    ],
    color: "from-[#00d4aa] to-[#f97316]",
  },
  {
    title: "Festival Books Artist",
    steps: [
      { module: "festival", action: "Search artist database", icon: Globe },
      { module: "festival", action: "Send booking request to agency", icon: Send },
      { module: "agency", action: "Review and accept request", icon: CheckCircle2 },
      { module: "festival", action: "Start advancing process", icon: Zap },
      { module: "artist", action: "Advancing info syncs to artist", icon: RefreshCw },
    ],
    color: "from-[#a855f7] to-[#00d4aa]",
  },
  {
    title: "Label Coordinates Release",
    steps: [
      { module: "label", action: "Schedule release date", icon: Calendar },
      { module: "artist", action: "Artist sees upcoming release", icon: CheckCircle2 },
      { module: "label", action: "Create social media posts", icon: Share2 },
      { module: "artist", action: "Artist approves posts", icon: CheckCircle2 },
      { module: "label", action: "Track streams & royalties", icon: BarChart3 },
    ],
    color: "from-[#3b82f6] to-[#f97316]",
  },
];

const syncPoints = [
  {
    title: "Booking Data",
    description: "When an agency creates a booking, it instantly appears in the artist's schedule and the promoter's calendar.",
    modules: ["agency", "artist", "festival"],
    icon: Calendar,
  },
  {
    title: "Contract Status",
    description: "Contract updates sync in real-time. When a contract is signed, all parties see the update immediately.",
    modules: ["agency", "artist"],
    icon: FileText,
  },
  {
    title: "Advancing Information",
    description: "Festival advancing data flows to agencies and artists. Technical riders, travel info, and hospitality requirements sync automatically.",
    modules: ["festival", "agency", "artist"],
    icon: Zap,
  },
  {
    title: "Release Schedule",
    description: "Label release calendars sync with artist profiles. Upcoming releases show on artist dashboards automatically.",
    modules: ["label", "artist"],
    icon: Disc3,
  },
  {
    title: "Social Media",
    description: "Labels can create social posts for artists. Artists review and approve. Both see engagement metrics.",
    modules: ["label", "artist"],
    icon: Share2,
  },
  {
    title: "Messages",
    description: "In-platform messaging ensures all communication is tracked and linked to relevant bookings or releases.",
    modules: ["agency", "artist", "label", "festival"],
    icon: MessageSquare,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#00d4aa]/10 text-[#00d4aa] text-sm font-bold">
              <RefreshCw className="w-4 h-4" />
              How VAYO Connects Everything
            </span>
            <h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              One Platform, <span className="text-[#00d4aa]">Four Perspectives</span>
            </h1>
            <p className="text-gray-500 text-lg font-medium">
              VAYO connects agencies, artists, labels, and festivals in a single ecosystem. 
              When one party takes action, everyone who needs to know sees the update instantly.
              No more emails, no more spreadsheets, no more missed communications.
            </p>
          </div>

          {/* The Four Modules */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: "var(--font-syne)" }}>
              The Four Modules
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module) => (
                <Link key={module.id} href={module.href}>
                  <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 h-full hover:border-[#00d4aa]/30 hover:shadow-xl transition-all group">
                    <div className={`w-14 h-14 rounded-2xl ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <module.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mb-4">
                      {module.description}
                    </p>
                    <ul className="space-y-2">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#00d4aa]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-2 text-[#00d4aa] font-bold text-sm">
                      Try Demo <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* How Data Flows */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              How Data Flows Between Modules
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              See how actions in one module automatically update related data across the entire platform.
            </p>

            <div className="space-y-12">
              {workflows.map((workflow, idx) => (
                <div key={idx} className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                    {workflow.title}
                  </h3>
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                    {workflow.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm min-w-[240px]">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            step.module === "agency" ? "bg-[#00d4aa]/10 text-[#00d4aa]" :
                            step.module === "artist" ? "bg-[#f97316]/10 text-[#f97316]" :
                            step.module === "label" ? "bg-[#3b82f6]/10 text-[#3b82f6]" :
                            "bg-[#a855f7]/10 text-[#a855f7]"
                          }`}>
                            <step.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                              {step.module}
                            </p>
                            <p className="text-sm font-bold text-gray-900">{step.action}</p>
                          </div>
                        </div>
                        {stepIdx < workflow.steps.length - 1 && (
                          <ArrowRight className="w-6 h-6 text-gray-300 hidden lg:block" />
                        )}
                        {stepIdx < workflow.steps.length - 1 && (
                          <ArrowDown className="w-6 h-6 text-gray-300 lg:hidden" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sync Points */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Real-Time Sync Points
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              Every piece of data stays in sync across all modules that need it.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {syncPoints.map((point) => (
                <div key={point.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-[#00d4aa]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-4">{point.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {point.modules.map((mod) => (
                      <span 
                        key={mod} 
                        className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                          mod === "agency" ? "bg-[#00d4aa]/10 text-[#00d4aa]" :
                          mod === "artist" ? "bg-[#f97316]/10 text-[#f97316]" :
                          mod === "label" ? "bg-[#3b82f6]/10 text-[#3b82f6]" :
                          "bg-[#a855f7]/10 text-[#a855f7]"
                        }`}
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Visual Diagram */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              The VAYO Ecosystem
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              All four modules connect through VAYO&apos;s central platform, ensuring seamless data flow.
            </p>

            <div className="relative max-w-4xl mx-auto">
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-2xl z-10">
                <div className="text-center">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
                  <span className="block text-white/60 text-[10px] font-bold uppercase tracking-wider">Platform</span>
                </div>
              </div>

              {/* Connection Lines (visual) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-dashed border-gray-200 opacity-50" />

              {/* Module Cards positioned around */}
              <div className="grid grid-cols-2 gap-8 p-8">
                {modules.map((module, idx) => (
                  <div 
                    key={module.id} 
                    className={`bg-white border-2 border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all ${
                      idx === 0 ? "justify-self-end" : idx === 1 ? "justify-self-start" : idx === 2 ? "justify-self-end" : "justify-self-start"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-3`}>
                      <module.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">{module.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Ready to Connect Your Workflow?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience the power of a connected music industry platform. 
              Try the interactive demos or get in touch to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo/agency" 
                className="px-6 py-3 bg-[#00d4aa] text-white rounded-2xl font-bold hover:bg-[#00b894] transition-all flex items-center justify-center gap-2"
              >
                Try Agency Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
