"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Disc3,
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Settings,
  Search,
  Plus,
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

const releases = [
  { id: 1, title: "Midnight Sessions EP", artist: "DJ Storm", type: "EP", date: "2026-02-01", status: "mastering", streams: "-" },
  { id: 2, title: "Echoes", artist: "Aurora Beats", type: "Single", date: "2026-02-15", status: "ready", streams: "-" },
  { id: 3, title: "Neon City", artist: "Neon Dreams", type: "Single", date: "2026-01-10", status: "released", streams: "1.2M" },
  { id: 4, title: "Deep State", artist: "DJ Storm", type: "Single", date: "2025-12-15", status: "released", streams: "3.8M" },
  { id: 5, title: "Rhythm Nation", artist: "Pulse", type: "Album", date: "2025-11-01", status: "released", streams: "8.5M" },
  { id: 6, title: "Waves", artist: "The Waves", type: "Single", date: "2025-10-20", status: "released", streams: "2.1M" },
];

const statusConfig: Record<string, string> = {
  released: "bg-emerald-500/20 text-emerald-500",
  ready: "bg-cyan-500/20 text-cyan-500",
  mastering: "bg-yellow-500/20 text-yellow-500",
  mixing: "bg-purple-500/20 text-purple-500",
  recording: "bg-blue-500/20 text-blue-500",
};

export default function LabelReleasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredReleases = releases.filter((release) => {
    const matchesSearch = release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || release.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Releases
          </h1>
          <p className="text-[var(--vayo-gray-400)]">Manage your music releases and release calendar.</p>
        </div>
        <button className="btn-primary text-sm py-2.5 bg-cyan-500 hover:bg-cyan-600">
          <Plus className="w-4 h-4" />
          New Release
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--vayo-gray-500)]" />
          <input
            type="text"
            placeholder="Search releases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-cyan-500"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white"
        >
          <option value="all">All Status</option>
          <option value="released">Released</option>
          <option value="ready">Ready</option>
          <option value="mastering">Mastering</option>
          <option value="mixing">Mixing</option>
        </select>
      </div>

      <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--vayo-gray-800)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Release</th>
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Artist</th>
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Type</th>
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Date</th>
              <th className="text-center p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Status</th>
              <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Streams</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredReleases.map((release) => (
              <tr key={release.id} className="border-b border-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-800)]/50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white">
                      <Disc3 className="w-6 h-6" />
                    </div>
                    <span className="text-white font-medium">{release.title}</span>
                  </div>
                </td>
                <td className="p-4 text-[var(--vayo-gray-300)]">{release.artist}</td>
                <td className="p-4 text-[var(--vayo-gray-300)]">{release.type}</td>
                <td className="p-4 text-[var(--vayo-gray-300)]">
                  {new Date(release.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[release.status]}`}>
                    {release.status.charAt(0).toUpperCase() + release.status.slice(1)}
                  </span>
                </td>
                <td className="p-4 text-right text-cyan-400 font-medium">{release.streams}</td>
                <td className="p-4">
                  <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
