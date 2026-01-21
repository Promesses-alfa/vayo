"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Plane,
  MessageSquare,
  Settings,
  MapPin,
  Clock,
  CheckCircle2,
  Eye,
  ChevronRight,
  PartyPopper,
  Globe,
  Share2,
  Disc3,
  PenTool,
  BarChart3,
} from "lucide-react";

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

const shows = [
  { date: "2026-01-24", venue: "Paradiso", city: "Amsterdam, NL", time: "23:00", status: "confirmed", fee: 4500, type: "venue" },
  { date: "2026-02-02", venue: "Berghain", city: "Berlin, DE", time: "23:00", status: "confirmed", fee: 6000, type: "venue" },
  { date: "2026-07-15", venue: "Summer Sounds Festival", city: "Amsterdam, NL", time: "23:00", status: "confirmed", fee: 45000, type: "festival", advancingStatus: "in_progress" },
  { date: "2026-02-14", venue: "Warehouse Project", city: "Manchester, UK", time: "22:00", status: "pending", fee: 5500, type: "venue" },
  { date: "2026-06-20", venue: "Fusion Festival", city: "Berlin, DE", time: "22:00", status: "confirmed", fee: 35000, type: "festival", advancingStatus: "completed" },
];

export default function ArtistSchedulePage() {
  const filteredShows = shows.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <DashboardLayout
      type="artist"
      navItems={navItems}
      userName="DJ Storm"
      userRole="Artist"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Tour Schedule
          </h1>
          <p className="text-gray-500 font-medium">All your shows, synced in real-time from your agency.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Shows", value: shows.length, icon: Calendar, color: "text-[#f97316]" },
          { label: "Confirmed", value: shows.filter(s => s.status === "confirmed").length, icon: CheckCircle2, color: "text-emerald-500" },
          { label: "Festival Shows", value: shows.filter(s => s.type === "festival").length, icon: PartyPopper, color: "text-[#a855f7]" },
          { label: "Total Earnings", value: `€${shows.filter(s => s.status === "confirmed").reduce((sum, s) => sum + s.fee, 0).toLocaleString()}`, icon: DollarSign, color: "text-[#00d4aa]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Shows List */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>All Shows</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {filteredShows.map((show, idx) => (
            <div key={idx} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors group">
              <div className="flex items-center gap-6">
                <div className="text-center min-w-[60px]">
                  <p className="text-3xl font-bold text-gray-900">
                    {new Date(show.date).getDate()}
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {new Date(show.date).toLocaleDateString("en-GB", { month: "short" })}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {show.type === "festival" && (
                    <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center">
                      <PartyPopper className="w-5 h-5 text-[#a855f7]" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-lg font-bold text-gray-900">{show.venue}</p>
                      {show.advancingStatus && (
                        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                          show.advancingStatus === "completed" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                        }`}>
                          Advancing {show.advancingStatus.replace('_', ' ')}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm font-bold text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {show.city}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {show.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                  show.status === "confirmed" ? "bg-emerald-100 text-emerald-600" :
                  show.status === "pending" ? "bg-orange-100 text-orange-600" :
                  "bg-purple-100 text-purple-600"
                }`}>
                  {show.status}
                </span>
                <span className="text-xl font-bold text-gray-900">€{show.fee.toLocaleString()}</span>
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agency Sync Banner */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Calendar className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Real-Time Sync</h2>
          <p className="text-white/80 font-medium mb-8">
            Your schedule updates automatically when your agency confirms a booking. 
            Festival advancing details appear instantly. Travel info syncs from your agent. 
            Everything in one place, always up to date.
          </p>
          <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View Sync Status
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
