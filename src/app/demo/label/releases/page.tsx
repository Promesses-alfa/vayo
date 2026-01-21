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
  ChevronRight,
  Clock,
  CheckCircle2,
  Share2,
  PenTool,
  BarChart3,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Social Media", href: "/demo/label/social", icon: Share2 },
  { label: "Contracts", href: "/demo/label/contracts", icon: PenTool },
  { label: "Analytics", href: "/demo/label/analytics", icon: BarChart3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare, badge: 4 },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const releases = [
  { id: 1, title: "Midnight Sessions EP", artist: "DJ Storm", type: "EP", date: "2026-02-01", status: "mastering", streams: "-", cover: "🎵" },
  { id: 2, title: "Echoes", artist: "Aurora Beats", type: "Single", date: "2026-02-15", status: "ready", streams: "-", cover: "🎶" },
  { id: 3, title: "Neon City", artist: "Neon Dreams", type: "Single", date: "2026-01-10", status: "released", streams: "1.2M", cover: "💿" },
  { id: 4, title: "Deep State", artist: "DJ Storm", type: "Single", date: "2025-12-15", status: "released", streams: "3.8M", cover: "🎧" },
  { id: 5, title: "Rhythm Nation", artist: "Pulse", type: "Album", date: "2025-11-01", status: "released", streams: "8.5M", cover: "📀" },
  { id: 6, title: "Waves", artist: "The Waves", type: "Single", date: "2025-10-20", status: "released", streams: "2.1M", cover: "🎼" },
];

const statusConfig: Record<string, { color: string; bgColor: string; icon: React.ElementType }> = {
  released: { color: "text-emerald-600", bgColor: "bg-emerald-50", icon: CheckCircle2 },
  ready: { color: "text-blue-600", bgColor: "bg-blue-50", icon: CheckCircle2 },
  mastering: { color: "text-amber-600", bgColor: "bg-amber-50", icon: Clock },
  mixing: { color: "text-purple-600", bgColor: "bg-purple-50", icon: Clock },
  recording: { color: "text-blue-600", bgColor: "bg-blue-50", icon: Clock },
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
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Release Calendar
          </h1>
          <p className="text-gray-500 font-medium">Manage releases and track performance across platforms.</p>
        </div>
        <button className="px-4 py-2 bg-[#3b82f6] rounded-xl text-sm font-bold text-white hover:bg-[#2563eb] transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Release
        </button>
      </div>

      {/* Search & Filter */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search releases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] font-medium"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-sm outline-none focus:border-[#3b82f6]"
          >
            <option value="all">All Status</option>
            <option value="released">Released</option>
            <option value="ready">Ready</option>
            <option value="mastering">Mastering</option>
            <option value="mixing">Mixing</option>
          </select>
        </div>
      </div>

      {/* Releases Table */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Release</th>
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Artist</th>
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Type</th>
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Release Date</th>
                <th className="text-center p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Streams</th>
                <th className="p-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredReleases.map((release) => {
                const status = statusConfig[release.status];
                const StatusIcon = status.icon;
                return (
                  <tr key={release.id} className="hover:bg-gray-50/50 transition-all group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl group-hover:bg-[#3b82f6]/10 transition-all">
                          {release.cover}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{release.title}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="text-sm font-bold text-gray-700">{release.artist}</span>
                    </td>
                    <td className="p-6">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{release.type}</span>
                    </td>
                    <td className="p-6">
                      <span className="text-sm font-bold text-gray-600">
                        {new Date(release.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${status.bgColor} ${status.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {release.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <span className="text-sm font-bold text-[#3b82f6]">{release.streams}</span>
                    </td>
                    <td className="p-6 text-right">
                      <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
