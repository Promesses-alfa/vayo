"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Disc3,
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Settings,
  Music,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  Eye,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const stats = [
  { label: "Total Artists", value: "48", change: "+4", trend: "up", icon: Users },
  { label: "Active Releases", value: "156", change: "+12", trend: "up", icon: Disc3 },
  { label: "Booking Revenue", value: "€1.2M", change: "+18%", trend: "up", icon: DollarSign },
  { label: "Streams (MTD)", value: "45M", change: "+23%", trend: "up", icon: Play },
];

const topArtists = [
  { name: "DJ Storm", streams: "12.5M", bookings: 24, revenue: "€485K", trend: "+15%" },
  { name: "Aurora Beats", streams: "8.2M", bookings: 18, revenue: "€398K", trend: "+22%" },
  { name: "The Waves", streams: "6.8M", bookings: 12, revenue: "€312K", trend: "+8%" },
  { name: "Neon Dreams", streams: "4.1M", bookings: 8, revenue: "€189K", trend: "+31%" },
];

const upcomingReleases = [
  { artist: "DJ Storm", title: "Midnight Sessions EP", date: "Feb 1, 2026", type: "EP", status: "mastering" },
  { artist: "Aurora Beats", title: "Echoes", date: "Feb 15, 2026", type: "Single", status: "ready" },
  { artist: "The Waves", title: "Ocean Drive", date: "Mar 1, 2026", type: "Album", status: "mixing" },
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
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Welcome back, Thomas
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Here&apos;s an overview of your label&apos;s performance.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-cyan-500" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === "up" ? "text-emerald-500" : "text-red-500"
              }`}>
                {stat.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-[var(--vayo-gray-500)]">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Artists */}
        <div className="lg:col-span-2 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white">Top Artists</h2>
            <a href="/demo/label/roster" className="text-sm text-cyan-400 hover:underline">View All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--vayo-gray-800)]">
                  <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Artist</th>
                  <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Streams</th>
                  <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Bookings</th>
                  <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Revenue</th>
                  <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Trend</th>
                </tr>
              </thead>
              <tbody>
                {topArtists.map((artist, idx) => (
                  <tr key={idx} className="border-b border-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-800)]/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                          {artist.name.charAt(0)}
                        </div>
                        <span className="text-white font-medium">{artist.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right text-[var(--vayo-gray-300)]">{artist.streams}</td>
                    <td className="p-4 text-right text-[var(--vayo-gray-300)]">{artist.bookings}</td>
                    <td className="p-4 text-right text-cyan-400 font-medium">{artist.revenue}</td>
                    <td className="p-4 text-right text-emerald-500">{artist.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Releases */}
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white">Upcoming Releases</h2>
          </div>
          <div className="p-4 space-y-4">
            {upcomingReleases.map((release, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[var(--vayo-gray-800)]/50 hover:bg-[var(--vayo-gray-800)] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{release.title}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    release.status === "ready" ? "bg-emerald-500/20 text-emerald-500" :
                    release.status === "mastering" ? "bg-yellow-500/20 text-yellow-500" :
                    "bg-blue-500/20 text-blue-500"
                  }`}>
                    {release.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--vayo-gray-400)]">{release.artist}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-[var(--vayo-gray-500)]">{release.type}</span>
                  <span className="text-xs text-[var(--vayo-gray-500)]">{release.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
