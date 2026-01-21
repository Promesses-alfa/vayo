"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Plane,
  MessageSquare,
  Settings,
  Music,
  MapPin,
  Clock,
  Download,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Globe,
  ArrowRight,
  Share2,
  Disc3,
  PenTool,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/demo/artist", icon: LayoutDashboard },
  { label: "Schedule", href: "/demo/artist/schedule", icon: Calendar },
  { label: "Availability", href: "/demo/artist/availability", icon: Globe },
  { label: "Social Media", href: "/demo/artist/social", icon: Share2 },
  { label: "Releases", href: "/demo/artist/releases", icon: Disc3 },
  { label: "Contracts", href: "/demo/artist/contracts", icon: PenTool },
  { label: "Analytics", href: "/demo/artist/analytics", icon: BarChart3 },
  { label: "Documents", href: "/demo/artist/documents", icon: FileText },
  { label: "Earnings", href: "/demo/artist/earnings", icon: DollarSign },
  { label: "Travel", href: "/demo/artist/travel", icon: Plane },
  { label: "Messages", href: "/demo/artist/messages", icon: MessageSquare, badge: 2 },
  { label: "Settings", href: "/demo/artist/settings", icon: Settings },
];

const upcomingShows = [
  {
    id: 1,
    venue: "Paradiso",
    city: "Amsterdam",
    country: "NL",
    date: "Jan 24, 2026",
    time: "23:00",
    status: "confirmed",
  },
  {
    id: 2,
    venue: "Berghain",
    city: "Berlin",
    country: "DE",
    date: "Feb 2, 2026",
    time: "23:00",
    status: "confirmed",
  },
  {
    id: 3,
    venue: "Warehouse Project",
    city: "Manchester",
    country: "UK",
    date: "Feb 14, 2026",
    time: "22:00",
    status: "pending",
  },
];

const stats = [
  { label: "Upcoming Shows", value: "12", icon: Calendar, color: "text-[#f97316]" },
  { label: "This Month", value: "€18,500", icon: DollarSign, color: "text-[#00d4aa]" },
  { label: "Unsigned Docs", value: "3", icon: FileText, color: "text-red-500" },
  { label: "Unread Messages", value: "2", icon: MessageSquare, color: "text-[#3b82f6]" },
];

export default function ArtistDashboard() {
  return (
    <DashboardLayout
      type="artist"
      navItems={navItems}
      userName="DJ Storm"
      userRole="Artist"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Artist Dashboard
          </h1>
          <p className="text-gray-500 font-medium">
            Your schedule, travel, and documents in one place.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Update Availability
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
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Next Show Highlight */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 mb-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8">
          <div className="w-24 h-24 bg-[#f97316]/5 rounded-full flex items-center justify-center -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700">
            <Music className="w-8 h-8 text-[#f97316] opacity-20" />
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f97316]/10 text-[#f97316] rounded-lg text-[10px] font-bold uppercase tracking-widest">
              Next Show
            </div>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Paradiso Amsterdam</h2>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-gray-500 font-bold">
                <Calendar className="w-5 h-5 text-[#f97316]" />
                Jan 24, 2026
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-bold">
                <Clock className="w-5 h-5 text-[#f97316]" />
                23:00
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-bold">
                <MapPin className="w-5 h-5 text-[#f97316]" />
                Amsterdam, NL
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-900/20">
              <ExternalLink className="w-4 h-4" />
              View Advancing
            </button>
            <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              Contract
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-50 flex flex-wrap gap-8">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
            Travel Confirmed
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
            Technical Rider Ready
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-orange-500">
            <Clock className="w-5 h-5" />
            Hospitality Advancing
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tour Schedule */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Tour Schedule</h2>
            <button className="text-sm font-bold text-[#f97316] hover:underline flex items-center gap-1">
              Full Schedule <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {upcomingShows.map((show, index) => (
              <div key={index} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#f97316]/10 group-hover:text-[#f97316] transition-all">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">{show.venue}</p>
                    <p className="text-sm text-gray-500 font-medium">{show.city}, {show.country}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-sm font-bold text-gray-900">{show.date}</p>
                  <p className="text-sm text-gray-500 font-medium">{show.time}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                    show.status === "confirmed" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                  }`}>
                    {show.status}
                  </span>
                  <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Sync */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Agency Sync</h2>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#00d4aa] flex items-center justify-center text-white font-bold">SB</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Sarah v.d. Berg</p>
                  <p className="text-[10px] font-bold text-[#00d4aa] uppercase tracking-widest">Your Agent</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                "Hey Storm! I've just updated your Berlin travel info. Flights are booked, check the Travel tab."
              </p>
            </div>
            <button className="w-full py-3 bg-gray-900 text-white rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
              Reply <MessageSquare className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#3b82f6] rounded-3xl p-6 text-white shadow-lg shadow-blue-500/20">
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>Travel Update</h3>
            <p className="text-white/80 text-sm font-medium mb-6">
              Your flight to Berlin (TXL) is tomorrow at 10:30. Check-in is now open.
            </p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2">
              View Flight Info <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
