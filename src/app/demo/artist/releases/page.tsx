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
  ExternalLink,
  Play,
  Clock,
  TrendingUp,
  Link as LinkIcon,
  Copy,
  CheckCircle2,
  Music,
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

const releases = [
  {
    id: 1,
    title: "Midnight Protocol",
    type: "Single",
    releaseDate: "Feb 7, 2026",
    status: "upcoming",
    label: "Horizon Records",
    artwork: "/images/Afbeelding3.jpg",
    presaveLink: "https://presave.example.com/midnight-protocol",
    spotifyLink: null,
    appleMusicLink: null,
    streams: null,
  },
  {
    id: 2,
    title: "Digital Dreams EP",
    type: "EP",
    releaseDate: "Jan 15, 2026",
    status: "released",
    label: "Horizon Records",
    artwork: "/images/Afbeelding4.JPG",
    presaveLink: null,
    spotifyLink: "https://open.spotify.com/track/example",
    appleMusicLink: "https://music.apple.com/track/example",
    streams: "1.2M",
  },
  {
    id: 3,
    title: "System Override",
    type: "Single",
    releaseDate: "Dec 1, 2025",
    status: "released",
    label: "Horizon Records",
    artwork: "/images/Afbeelding5.JPG",
    presaveLink: null,
    spotifyLink: "https://open.spotify.com/track/example2",
    appleMusicLink: "https://music.apple.com/track/example2",
    streams: "3.4M",
  },
];

const upcomingReleases = [
  {
    id: 4,
    title: "Summer Vibes",
    type: "Album",
    tentativeDate: "June 2026",
    status: "in_production",
    label: "Horizon Records",
  },
];

export default function ArtistReleasesPage() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyLink = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

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
            My Releases
          </h1>
          <p className="text-gray-500 font-medium">
            Track your releases and share links with fans. Managed by your label.
          </p>
        </div>
      </div>

      {/* Next Release Highlight */}
      {releases.filter(r => r.status === "upcoming")[0] && (
        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 mb-8 text-white shadow-xl shadow-violet-500/20">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
              <img 
                src={releases.filter(r => r.status === "upcoming")[0].artwork} 
                alt="Album artwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                <Clock className="w-3 h-3" />
                Next Release
              </div>
              <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                {releases.filter(r => r.status === "upcoming")[0].title}
              </h2>
              <p className="text-white/70 font-medium mb-4">
                {releases.filter(r => r.status === "upcoming")[0].type} • {releases.filter(r => r.status === "upcoming")[0].releaseDate} • {releases.filter(r => r.status === "upcoming")[0].label}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2.5 bg-white text-violet-600 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  Copy Pre-save Link
                </button>
                <button className="px-5 py-2.5 bg-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-all flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Released Tracks */}
      <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>Released</h2>
      <div className="space-y-4 mb-8">
        {releases.filter(r => r.status === "released").map((release) => (
          <div key={release.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={release.artwork} 
                  alt={release.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900">{release.title}</h3>
                <p className="text-sm text-gray-500 font-medium">
                  {release.type} • {release.releaseDate} • {release.label}
                </p>
                
                <div className="flex items-center gap-4 mt-3">
                  {release.spotifyLink && (
                    <a 
                      href={release.spotifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:underline"
                    >
                      <Play className="w-4 h-4" />
                      Spotify
                    </a>
                  )}
                  {release.appleMusicLink && (
                    <a 
                      href={release.appleMusicLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-pink-600 hover:underline"
                    >
                      <Music className="w-4 h-4" />
                      Apple Music
                    </a>
                  )}
                </div>
              </div>

              <div className="text-right">
                {release.streams && (
                  <div className="flex items-center gap-2 justify-end mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-2xl font-bold text-gray-900">{release.streams}</span>
                  </div>
                )}
                <p className="text-xs text-gray-500 font-bold uppercase">Total Streams</p>
              </div>

              <button 
                onClick={() => copyLink(release.spotifyLink || "", `release-${release.id}`)}
                className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
              >
                {copiedLink === `release-${release.id}` ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* In Production */}
      <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>In Production</h2>
      <div className="space-y-4 mb-8">
        {upcomingReleases.map((release) => (
          <div key={release.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Disc3 className="w-8 h-8 text-gray-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">{release.title}</h3>
                <p className="text-sm text-gray-500 font-medium">
                  {release.type} • Tentative: {release.tentativeDate} • {release.label}
                </p>
              </div>

              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-xl text-xs font-bold uppercase">
                In Production
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Label Info */}
      <div className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-100">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
            <Disc3 className="w-5 h-5 text-violet-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Managed by Horizon Records</h3>
            <p className="text-sm text-gray-600 font-medium">
              Your releases are managed by your label. They handle distribution, release dates, and promotional materials. 
              Links are automatically updated here when new releases go live.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
