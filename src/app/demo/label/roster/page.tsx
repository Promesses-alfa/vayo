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
  ExternalLink,
  ChevronRight,
  Play,
  ArrowUpRight,
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

const artists = [
  { id: 1, name: "DJ Storm", genre: "Techno / House", releases: 24, streams: "12.5M", status: "active", signed: "2020", bookings: 24, revenue: "€485K" },
  { id: 2, name: "Aurora Beats", genre: "Progressive House", releases: 18, streams: "8.2M", status: "active", signed: "2021", bookings: 18, revenue: "€398K" },
  { id: 3, name: "The Waves", genre: "Indie Rock", releases: 12, streams: "6.8M", status: "active", signed: "2019", bookings: 12, revenue: "€312K" },
  { id: 4, name: "Neon Dreams", genre: "Synthwave", releases: 8, streams: "4.1M", status: "active", signed: "2022", bookings: 8, revenue: "€189K" },
  { id: 5, name: "Pulse", genre: "Drum & Bass", releases: 32, streams: "15.2M", status: "active", signed: "2018", bookings: 32, revenue: "€567K" },
];

export default function LabelRosterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Artist Roster
          </h1>
          <p className="text-gray-500 font-medium">All signed artists with real-time booking and revenue data.</p>
        </div>
        <button className="px-4 py-2 bg-[#3b82f6] rounded-xl text-sm font-bold text-white hover:bg-[#2563eb] transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Artist
        </button>
      </div>

      {/* Search */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] font-medium"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredArtists.map((artist) => (
          <div key={artist.id} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] text-2xl font-bold group-hover:scale-110 transition-transform">
                {artist.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">{artist.name}</h3>
                <p className="text-[10px] font-bold text-[#3b82f6] uppercase tracking-widest">{artist.genre}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-lg font-bold text-gray-900">{artist.releases}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Releases</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-lg font-bold text-[#3b82f6]">{artist.streams}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Streams</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-lg font-bold text-gray-900">{artist.bookings}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Shows</p>
              </div>
            </div>
            <div className="mb-4 p-3 bg-gray-50 rounded-xl">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Booking Revenue</p>
              <p className="text-lg font-bold text-[#00d4aa]">{artist.revenue}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                {artist.status}
              </span>
              <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Agency Sync Banner */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Users className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Real-Time Booking Sync</h2>
          <p className="text-white/80 font-medium mb-8">
            Booking data from your artists' agencies syncs automatically. 
            Commission reports update in real-time. Revenue tracking is always accurate.
          </p>
          <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View Revenue Reports
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
