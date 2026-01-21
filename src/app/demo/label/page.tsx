"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Users,
  Disc3,
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  ArrowRight,
  Eye,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare, badge: 4 },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const stats = [
  { label: "Total Artists", value: "48", change: "+4", trend: "up", icon: Users, color: "text-[#3b82f6]" },
  { label: "Active Releases", value: "156", change: "+12", trend: "up", icon: Disc3, color: "text-[#a855f7]" },
  { label: "Booking Revenue", value: "€1.2M", change: "+18%", trend: "up", icon: DollarSign, color: "text-[#00d4aa]" },
  { label: "Streams (MTD)", value: "45M", change: "+23%", trend: "up", icon: Play, color: "text-[#f97316]" },
];

const topArtists = [
  { name: "DJ Storm", streams: "12.5M", bookings: 24, revenue: "€485K", trend: "+15%" },
  { name: "Aurora Beats", streams: "8.2M", bookings: 18, revenue: "€398K", trend: "+22%" },
  { name: "The Waves", streams: "6.8M", bookings: 12, revenue: "€312K", trend: "+8%" },
  { name: "Neon Dreams", streams: "4.1M", bookings: 8, revenue: "€189K", trend: "+31%" },
];

const upcomingReleases = [
  { artist: "DJ Storm", title: "Midnight Sessions EP", date: "Feb 1", type: "EP", status: "mastering" },
  { artist: "Aurora Beats", title: "Echoes", date: "Feb 15", type: "Single", status: "ready" },
  { artist: "The Waves", title: "Ocean Drive", date: "Mar 1", type: "Album", status: "mixing" },
];

export default function LabelDashboard() {
  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Label Dashboard
          </h1>
          <p className="text-gray-500 font-medium">
            Oversee your roster's global touring and revenue performance.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#3b82f6]" />
            A&R Pipeline
          </button>
          <button className="px-4 py-2 bg-[#3b82f6] rounded-xl text-sm font-bold text-white hover:bg-[#2563eb] transition-all flex items-center gap-2 shadow-md shadow-[#3b82f6]/20">
            <Disc3 className="w-4 h-4" />
            New Release
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
              <div className={`flex items-center gap-1 text-xs font-bold ${
                stat.trend === "up" ? "text-emerald-500" : "text-red-500"
              }`}>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Top Artists Table */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Top Performing Artists</h2>
            <button className="text-sm font-bold text-[#3b82f6] hover:underline flex items-center gap-1">
              Full Roster <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Artist</th>
                  <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Streams</th>
                  <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Revenue</th>
                  <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {topArtists.map((artist, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] font-bold">
                          {artist.name.charAt(0)}
                        </div>
                        <span className="text-gray-900 font-bold">{artist.name}</span>
                      </div>
                    </td>
                    <td className="p-6 text-right font-medium text-gray-600">{artist.streams}</td>
                    <td className="p-6 text-right font-bold text-gray-900">{artist.revenue}</td>
                    <td className="p-6 text-right">
                      <span className="text-emerald-500 font-bold">{artist.trend}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Upcoming Releases */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Upcoming Releases</h2>
            <div className="space-y-4">
              {upcomingReleases.map((release, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-[#a855f7]/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-900">{release.title}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                      release.status === 'ready' ? 'bg-emerald-100 text-emerald-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {release.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">{release.artist}</p>
                    <p className="text-xs text-gray-400 font-bold">{release.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-gray-200 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
              Manage All Releases
            </button>
          </div>

          {/* Ecosystem Sync */}
          <div className="bg-[#00d4aa] rounded-3xl p-6 text-white shadow-lg shadow-[#00d4aa]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-syne)" }}>Agency Sync</h3>
            </div>
            <p className="text-white/80 text-sm font-medium mb-6 leading-relaxed">
              Real-time booking data is now available for your top 5 artists. Commission reports are updated.
            </p>
            <button className="w-full py-3 bg-white text-[#00d4aa] rounded-2xl text-sm font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              View Reports <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
