"use client";

import { 
  Users, 
  Music, 
  Building2, 
  PartyPopper,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

const demoOptions = [
  {
    id: "agency",
    title: "Booking Agency",
    description: "Manage roster, bookings, and financial flows from a single source of truth.",
    icon: Users,
    color: "text-[#00d4aa]",
    bgColor: "bg-[#00d4aa]/10",
    borderColor: "border-[#00d4aa]/20",
    hoverBorder: "hover:border-[#00d4aa]",
    href: "/demo/agency",
    features: ["Artist Roster", "Booking Engine", "E-Contracting", "Finance Hub"],
  },
  {
    id: "festival",
    title: "Festival / Venue",
    description: "Build your lineup with AI help and automate the entire advancing flow.",
    icon: PartyPopper,
    color: "text-[#a855f7]",
    bgColor: "bg-[#a855f7]/10",
    borderColor: "border-[#a855f7]/20",
    hoverBorder: "hover:border-[#a855f7]",
    href: "/demo/festival",
    features: ["Lineup Builder", "AI Suggestions", "Integrated Advancing", "Budgeting"],
  },
  {
    id: "artist",
    title: "Artist / DJ",
    description: "Access your world on tour. Real-time sync with your agency and festivals.",
    icon: Music,
    color: "text-[#f97316]",
    bgColor: "bg-[#f97316]/10",
    borderColor: "border-[#f97316]/20",
    hoverBorder: "hover:border-[#f97316]",
    href: "/demo/artist",
    features: ["Live Schedule", "Doc Portal", "Travel Logistics", "Mobile App"],
  },
  {
    id: "label",
    title: "Record Label",
    description: "Oversee your global roster's performance and track touring revenue.",
    icon: Building2,
    color: "text-[#3b82f6]",
    bgColor: "bg-[#3b82f6]/10",
    borderColor: "border-[#3b82f6]/20",
    hoverBorder: "hover:border-[#3b82f6]",
    href: "/demo/label",
    features: ["Roster Overview", "Revenue Analytics", "Release Sync", "A&R Pipeline"],
  },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Header */}
      <header className="py-8 px-6 border-b border-gray-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#00d4aa] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>V</span>
            </div>
            <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
            Back to site
          </Link>
        </div>
      </header>

      <main className="flex-1 relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
            Select Your Perspective
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
            Experience the <span className="text-[#00d4aa]">Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Explore how VAYO connects every role in the industry. Data flows seamlessly between each portal in real-time.
          </p>
        </div>

        {/* Demo Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {demoOptions.map((option) => (
            <Link key={option.id} href={option.href} className="group">
              <div className={`h-full relative bg-white border ${option.borderColor} ${option.hoverBorder} rounded-[2.5rem] p-8 shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col`}>
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${option.color.replace('text', 'bg')} rounded-t-full opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${option.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className={`w-8 h-8 ${option.color}`} />
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                    <ArrowRight className={`w-5 h-5 ${option.color}`} />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00d4aa] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                  {option.title}
                </h2>
                <p className="text-gray-500 font-medium mb-8 flex-1">
                  {option.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {option.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg bg-gray-50 text-gray-400 group-hover:text-gray-600 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Integrated Note */}
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-[3rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-grid invert" />
          <div className="relative z-10">
            <div className="flex justify-center -space-x-3 mb-8">
              {demoOptions.map((opt) => (
                <div key={opt.id} className={`w-12 h-12 rounded-full ${opt.bgColor.replace('/10', '')} border-4 border-gray-900 flex items-center justify-center`}>
                  <opt.icon className="w-5 h-5 text-white" />
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>One Integrated Solution</h3>
            <p className="text-gray-400 font-medium mb-8 max-w-lg mx-auto">
              Changes in the <span className="text-[#00d4aa]">Agency Portal</span> update the <span className="text-[#a855f7]">Festival Lineup</span> and <span className="text-[#f97316]">Artist Schedule</span> instantly. No more data silos.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest">
              <Zap className="w-4 h-4 text-[#00d4aa] fill-[#00d4aa]" />
              Real-time Sync Active
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">© 2026 VAYO TECH ENTERPRISES</p>
        </div>
      </footer>
    </div>
  );
}
