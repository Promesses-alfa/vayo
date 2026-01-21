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
  Globe,
  Share2,
  Disc3,
  PenTool,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Play,
  Heart,
  Music,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Headphones,
  RefreshCw,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

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

const streamingPlatforms = [
  {
    name: "Spotify",
    icon: Music,
    color: "bg-emerald-500",
    connected: true,
    stats: {
      monthlyListeners: "2.4M",
      followers: "185K",
      streams30Days: "8.2M",
      change: "+12%",
      trending: true,
    }
  },
  {
    name: "Apple Music",
    icon: Headphones,
    color: "bg-pink-500",
    connected: true,
    stats: {
      monthlyListeners: "890K",
      followers: "45K",
      streams30Days: "2.8M",
      change: "+8%",
      trending: true,
    }
  },
  {
    name: "SoundCloud",
    icon: Play,
    color: "bg-orange-500",
    connected: true,
    stats: {
      monthlyListeners: "320K",
      followers: "98K",
      streams30Days: "1.1M",
      change: "+5%",
      trending: true,
    }
  },
  {
    name: "YouTube Music",
    icon: Youtube,
    color: "bg-red-500",
    connected: false,
    stats: null
  },
];

const socialPlatforms = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    connected: true,
    stats: {
      followers: "456K",
      engagement: "4.2%",
      reachLastWeek: "1.2M",
      change: "+3%",
      trending: true,
    }
  },
  {
    name: "TikTok",
    icon: Music,
    color: "bg-black",
    connected: true,
    stats: {
      followers: "890K",
      engagement: "8.1%",
      reachLastWeek: "4.5M",
      change: "+28%",
      trending: true,
    }
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    color: "bg-gray-900",
    connected: true,
    stats: {
      followers: "124K",
      engagement: "2.1%",
      reachLastWeek: "380K",
      change: "-2%",
      trending: false,
    }
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-blue-600",
    connected: false,
    stats: null
  },
];

const topTracks = [
  { title: "Digital Dreams", streams: "3.4M", change: "+15%", trending: true },
  { title: "System Override", streams: "2.1M", change: "+8%", trending: true },
  { title: "Night Protocol", streams: "1.8M", change: "+3%", trending: true },
  { title: "Electric Soul", streams: "1.2M", change: "-2%", trending: false },
  { title: "Future Bass", streams: "980K", change: "+12%", trending: true },
];

export default function ArtistAnalyticsPage() {
  const [lastUpdated] = useState("5 minutes ago");

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
            Analytics
          </h1>
          <p className="text-gray-500 font-medium">
            Your streaming and social media performance across all platforms.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 font-medium">Last updated: {lastUpdated}</span>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <Play className="w-6 h-6 text-white/70" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +15%
            </span>
          </div>
          <p className="text-3xl font-bold">12.1M</p>
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Total Streams (30d)</p>
        </div>
        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-6 h-6 text-white/70" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +8%
            </span>
          </div>
          <p className="text-3xl font-bold">3.6M</p>
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Monthly Listeners</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <Heart className="w-6 h-6 text-white/70" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12%
            </span>
          </div>
          <p className="text-3xl font-bold">1.5M</p>
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Social Followers</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <BarChart3 className="w-6 h-6 text-white/70" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +5%
            </span>
          </div>
          <p className="text-3xl font-bold">4.8%</p>
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Avg. Engagement</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Streaming Platforms */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
              Streaming Platforms
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {streamingPlatforms.map((platform) => (
              <div key={platform.name} className="p-5 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{platform.name}</p>
                      {platform.connected ? (
                        <p className="text-sm text-emerald-600 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Connected
                        </p>
                      ) : (
                        <p className="text-sm text-gray-400 font-medium">Not connected</p>
                      )}
                    </div>
                  </div>
                  
                  {platform.connected && platform.stats ? (
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{platform.stats.monthlyListeners}</p>
                      <p className="text-sm text-gray-500 font-medium">listeners/mo</p>
                    </div>
                  ) : (
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all">
                      Connect
                    </button>
                  )}
                </div>
                
                {platform.connected && platform.stats && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-sm font-bold text-gray-900">{platform.stats.followers}</p>
                      <p className="text-xs text-gray-500">Followers</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-sm font-bold text-gray-900">{platform.stats.streams30Days}</p>
                      <p className="text-xs text-gray-500">30d Streams</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className={`text-sm font-bold ${platform.stats.trending ? "text-emerald-600" : "text-red-500"}`}>
                        {platform.stats.change}
                      </p>
                      <p className="text-xs text-gray-500">vs Last Month</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Platforms */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
              Social Media
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {socialPlatforms.map((platform) => (
              <div key={platform.name} className="p-5 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{platform.name}</p>
                      {platform.connected ? (
                        <p className="text-sm text-emerald-600 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Connected
                        </p>
                      ) : (
                        <p className="text-sm text-gray-400 font-medium">Not connected</p>
                      )}
                    </div>
                  </div>
                  
                  {platform.connected && platform.stats ? (
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{platform.stats.followers}</p>
                      <p className="text-sm text-gray-500 font-medium">followers</p>
                    </div>
                  ) : (
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all">
                      Connect
                    </button>
                  )}
                </div>
                
                {platform.connected && platform.stats && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-sm font-bold text-gray-900">{platform.stats.engagement}</p>
                      <p className="text-xs text-gray-500">Engagement</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-sm font-bold text-gray-900">{platform.stats.reachLastWeek}</p>
                      <p className="text-xs text-gray-500">Reach (7d)</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className={`text-sm font-bold ${platform.stats.trending ? "text-emerald-600" : "text-red-500"} flex items-center gap-1`}>
                        {platform.stats.trending ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {platform.stats.change}
                      </p>
                      <p className="text-xs text-gray-500">vs Last Week</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Tracks */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Top Tracks (30 days)
          </h2>
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
                  <p className="text-sm text-gray-500 font-medium">{track.streams} streams</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                track.trending ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
              } flex items-center gap-1`}>
                {track.trending ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {track.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
