"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Users,
  Disc3,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Settings,
  Share2,
  PenTool,
  BarChart3,
  Play,
  Music,
  Headphones,
  RefreshCw,
  CheckCircle2,
  Globe,
  Youtube,
} from "lucide-react";
import { useState } from "react";

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

const artistAnalytics = [
  {
    name: "DJ Storm",
    avatar: "DS",
    totalStreams: "45.2M",
    monthlyListeners: "2.4M",
    followers: "185K",
    change: "+15%",
    trending: true,
    platforms: {
      spotify: { connected: true, streams: "32M" },
      apple: { connected: true, streams: "8.2M" },
      soundcloud: { connected: true, streams: "5M" },
    }
  },
  {
    name: "Aurora Beats",
    avatar: "AB",
    totalStreams: "28.5M",
    monthlyListeners: "1.8M",
    followers: "124K",
    change: "+22%",
    trending: true,
    platforms: {
      spotify: { connected: true, streams: "20M" },
      apple: { connected: true, streams: "6.5M" },
      soundcloud: { connected: true, streams: "2M" },
    }
  },
  {
    name: "The Waves",
    avatar: "TW",
    totalStreams: "18.9M",
    monthlyListeners: "980K",
    followers: "89K",
    change: "+8%",
    trending: true,
    platforms: {
      spotify: { connected: true, streams: "14M" },
      apple: { connected: true, streams: "4.1M" },
      soundcloud: { connected: false, streams: null },
    }
  },
  {
    name: "Neon Dreams",
    avatar: "ND",
    totalStreams: "12.1M",
    monthlyListeners: "650K",
    followers: "52K",
    change: "-2%",
    trending: false,
    platforms: {
      spotify: { connected: true, streams: "9.8M" },
      apple: { connected: true, streams: "2.3M" },
      soundcloud: { connected: false, streams: null },
    }
  },
];

const topTracks = [
  { title: "Digital Dreams", artist: "DJ Storm", streams: "12.5M", change: "+18%" },
  { title: "Echoes", artist: "Aurora Beats", streams: "8.2M", change: "+35%" },
  { title: "Ocean Drive", artist: "The Waves", streams: "6.1M", change: "+12%" },
  { title: "System Override", artist: "DJ Storm", streams: "5.8M", change: "+8%" },
  { title: "Neon Nights", artist: "Neon Dreams", streams: "4.2M", change: "-5%" },
];

export default function LabelAnalyticsPage() {
  const [lastUpdated] = useState("10 minutes ago");

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
            Analytics
          </h1>
          <p className="text-gray-500 font-medium">
            Streaming and social performance across your entire roster.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 font-medium">Last updated: {lastUpdated}</span>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Sync All
          </button>
        </div>
      </div>

      {/* Label Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <Play className="w-6 h-6 text-white/70" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +14%
            </span>
          </div>
          <p className="text-3xl font-bold">104.7M</p>
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Total Streams (Label)</p>
        </div>
        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-6 h-6 text-white/70" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +11%
            </span>
          </div>
          <p className="text-3xl font-bold">5.8M</p>
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Monthly Listeners</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <Globe className="w-6 h-6 text-white/70" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +9%
            </span>
          </div>
          <p className="text-3xl font-bold">450K</p>
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Total Followers</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <Disc3 className="w-6 h-6 text-white/70" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg">48 Artists</span>
          </div>
          <p className="text-3xl font-bold">156</p>
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Active Releases</p>
        </div>
      </div>

      {/* Artist Analytics Table */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Artist Performance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Artist</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Streams</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Monthly Listeners</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Followers</th>
                <th className="text-center p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Platforms</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {artistAnalytics.map((artist) => (
                <tr key={artist.name} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] font-bold">
                        {artist.avatar}
                      </div>
                      <span className="text-gray-900 font-bold">{artist.name}</span>
                    </div>
                  </td>
                  <td className="p-6 text-right font-bold text-gray-900">{artist.totalStreams}</td>
                  <td className="p-6 text-right font-medium text-gray-600">{artist.monthlyListeners}</td>
                  <td className="p-6 text-right font-medium text-gray-600">{artist.followers}</td>
                  <td className="p-6">
                    <div className="flex justify-center gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${artist.platforms.spotify.connected ? "bg-emerald-100" : "bg-gray-100"}`}>
                        <Music className={`w-4 h-4 ${artist.platforms.spotify.connected ? "text-emerald-600" : "text-gray-400"}`} />
                      </div>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${artist.platforms.apple.connected ? "bg-pink-100" : "bg-gray-100"}`}>
                        <Headphones className={`w-4 h-4 ${artist.platforms.apple.connected ? "text-pink-600" : "text-gray-400"}`} />
                      </div>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${artist.platforms.soundcloud?.connected ? "bg-orange-100" : "bg-gray-100"}`}>
                        <Play className={`w-4 h-4 ${artist.platforms.soundcloud?.connected ? "text-orange-600" : "text-gray-400"}`} />
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 justify-end ${
                      artist.trending ? "text-emerald-600" : "text-red-500"
                    }`}>
                      {artist.trending ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {artist.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Tracks */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Top Tracks (All Time)</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {topTracks.map((track, index) => (
            <div key={track.title} className="flex items-center justify-between p-5 hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                  {index + 1}
                </span>
                <div>
                  <p className="font-bold text-gray-900">{track.title}</p>
                  <p className="text-sm text-gray-500 font-medium">{track.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-bold text-gray-900">{track.streams}</span>
                <span className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 ${
                  track.change.startsWith("+") ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
                }`}>
                  {track.change.startsWith("+") ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {track.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Connections */}
      <div className="mt-8 p-6 bg-gradient-to-r from-[#3b82f6]/5 to-[#3b82f6]/10 rounded-2xl border border-[#3b82f6]/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-5 h-5 text-[#3b82f6]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Centralized Analytics</h3>
            <p className="text-sm text-gray-600 font-medium">
              Data is pulled automatically from each artist's connected streaming platforms. 
              Artists manage their own connections, and you get a complete view of your roster's performance.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
