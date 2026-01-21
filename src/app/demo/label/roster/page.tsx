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
  Star,
  ExternalLink,
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

const artists = [
  { id: 1, name: "DJ Storm", genre: "Techno / House", releases: 24, streams: "12.5M", status: "active", signed: "2020" },
  { id: 2, name: "Aurora Beats", genre: "Progressive House", releases: 18, streams: "8.2M", status: "active", signed: "2021" },
  { id: 3, name: "The Waves", genre: "Indie Rock", releases: 12, streams: "6.8M", status: "active", signed: "2019" },
  { id: 4, name: "Neon Dreams", genre: "Synthwave", releases: 8, streams: "4.1M", status: "active", signed: "2022" },
  { id: 5, name: "Pulse", genre: "Drum & Bass", releases: 32, streams: "15.2M", status: "active", signed: "2018" },
  { id: 6, name: "Solar System", genre: "Ambient", releases: 6, streams: "2.1M", status: "inactive", signed: "2023" },
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
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Artist Roster
          </h1>
          <p className="text-[var(--vayo-gray-400)]">Manage your signed artists.</p>
        </div>
        <button className="btn-primary text-sm py-2.5 bg-cyan-500 hover:bg-cyan-600">
          <Plus className="w-4 h-4" />
          Add Artist
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--vayo-gray-500)]" />
          <input
            type="text"
            placeholder="Search artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
          <div key={artist.id} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6 hover:border-[var(--vayo-gray-700)] transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
                {artist.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{artist.name}</h3>
                <p className="text-sm text-[var(--vayo-gray-400)]">{artist.genre}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <p className="text-lg font-bold text-white">{artist.releases}</p>
                <p className="text-xs text-[var(--vayo-gray-500)]">Releases</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-cyan-400">{artist.streams}</p>
                <p className="text-xs text-[var(--vayo-gray-500)]">Streams</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">{artist.signed}</p>
                <p className="text-xs text-[var(--vayo-gray-500)]">Signed</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                artist.status === "active" ? "bg-emerald-500/20 text-emerald-500" : "bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]"
              }`}>
                {artist.status.charAt(0).toUpperCase() + artist.status.slice(1)}
              </span>
              <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
