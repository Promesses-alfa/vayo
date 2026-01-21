"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Music,
  Users,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  Ticket,
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2,
  Clock,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/demo/festival", icon: LayoutDashboard },
  { label: "Lineup Builder", href: "/demo/festival/lineup", icon: Music },
  { label: "Advancing", href: "/demo/festival/requests", icon: Zap, badge: 14 },
  { label: "Schedule", href: "/demo/festival/schedule", icon: CalendarDays },
  { label: "Budget", href: "/demo/festival/budget", icon: DollarSign },
  { label: "Stages", href: "/demo/festival/stages", icon: MapPin },
  { label: "Messages", href: "/demo/festival/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/festival/settings", icon: Settings },
];

const stats = [
  { label: "Confirmed Acts", value: "48", target: "60", icon: Music, color: "text-[#a855f7]" },
  { label: "Advancing Progress", value: "72%", icon: Zap, color: "text-amber-500" },
  { label: "Budget Used", value: "€2.8M", target: "€4M", icon: DollarSign, color: "text-[#00d4aa]" },
  { label: "Tickets Sold", value: "35K", target: "50K", icon: Ticket, color: "text-[#3b82f6]" },
];

const advancingFlow = [
  { artist: "DJ Storm", step: "Technical Rider", status: "completed", time: "2h ago" },
  { artist: "Aurora Beats", step: "Travel Info", status: "pending", time: "Pending" },
  { artist: "The Waves", step: "Hospitality", status: "completed", time: "5h ago" },
  { artist: "Pulse", step: "Guestlist", status: "action_needed", time: "Action Needed" },
];

const aiSuggestions = [
  { name: "Sub Zero Project", genre: "Hardstyle", match: "98%", reason: "Fits Saturday Night Mainstage gap" },
  { name: "Headhunterz", genre: "Hardstyle", match: "94%", reason: "Trending in your area" },
];

export default function FestivalDashboard() {
  return (
    <DashboardLayout
      type="festival"
      navItems={navItems}
      userName="Emma de Groot"
      userRole="Festival Director"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Festival Dashboard
          </h1>
          <p className="text-gray-500 font-medium">
            Summer Sounds 2026 • <span className="text-[#a855f7]">156 days to go</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#a855f7]" />
            AI Lineup Help
          </button>
          <button className="px-4 py-2 bg-[#a855f7] rounded-xl text-sm font-bold text-white hover:bg-[#9333ea] transition-all flex items-center gap-2 shadow-md shadow-[#a855f7]/20">
            <Zap className="w-4 h-4" />
            Manage Advancing
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-xs font-bold text-gray-400">Target: {stat.target || "100%"}</div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Advancing Flow - The "Human-less" integrated advancing */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <div>
              <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Automated Advancing</h2>
              <p className="text-sm text-gray-500 font-medium">Real-time sync with Agencies & Artists</p>
            </div>
            <button className="text-sm font-bold text-[#a855f7] hover:underline flex items-center gap-1">
              All Requests <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {advancingFlow.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-[#a855f7]/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                      item.status === 'action_needed' ? 'bg-red-100 text-red-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {item.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> :
                       item.status === 'action_needed' ? <AlertCircle className="w-5 h-5" /> :
                       <Clock className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{item.artist}</p>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">{item.step}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.time}</span>
                    <button className="p-2 bg-white rounded-lg border border-gray-100 hover:border-[#a855f7] transition-all">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Lineup Builder */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-6 relative">
            <div className="absolute top-0 right-0 p-4">
              <Sparkles className="w-6 h-6 text-[#a855f7] opacity-20" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>AI Suggestions</h2>
            <div className="space-y-4">
              {aiSuggestions.map((artist, index) => (
                <div key={index} className="p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900">{artist.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#a855f7]/10 text-[#a855f7] rounded-full">{artist.match} Match</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-3">{artist.reason}</p>
                  <button className="w-full py-2 bg-white border border-gray-200 rounded-xl text-[10px] font-bold uppercase tracking-wider text-gray-600 hover:bg-[#a855f7] hover:text-white hover:border-[#a855f7] transition-all">
                    Send Inquiry
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-[#a855f7]/5 text-[#a855f7] rounded-2xl text-sm font-bold hover:bg-[#a855f7]/10 transition-all flex items-center justify-center gap-2">
              Deep Analysis <Sparkles className="w-4 h-4" />
            </button>
          </div>

          {/* Ecosystem Connection */}
          <div className="bg-[#00d4aa] rounded-3xl p-6 text-white shadow-lg shadow-[#00d4aa]/20">
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>Agency Sync</h3>
            <p className="text-white/80 text-sm font-medium mb-6">
              Dutch Dance Agency just confirmed 3 artists. Your technical specs are already syncing.
            </p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2">
              Review Updates <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function AlertCircle({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}
