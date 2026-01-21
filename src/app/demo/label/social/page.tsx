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
  Share2,
  PenTool,
  BarChart3,
  Plus,
  Image,
  Video,
  Clock,
  CheckCircle2,
  Edit3,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Eye,
  ChevronDown,
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

const artists = [
  { id: 1, name: "DJ Storm", avatar: "DS" },
  { id: 2, name: "Aurora Beats", avatar: "AB" },
  { id: 3, name: "The Waves", avatar: "TW" },
  { id: 4, name: "Neon Dreams", avatar: "ND" },
];

const scheduledPosts = [
  {
    id: 1,
    artist: "DJ Storm",
    content: "New track dropping next Friday! Pre-save link in bio 🔥 #NewMusic #Techno",
    platforms: ["instagram", "twitter"],
    mediaType: "video",
    scheduledDate: "Jan 28, 2026",
    scheduledTime: "12:00",
    status: "pending_artist_approval",
    approvals: { label: true, artist: false }
  },
  {
    id: 2,
    artist: "Aurora Beats",
    content: "Studio vibes today ✨ Working on something special for you all...",
    platforms: ["instagram", "facebook"],
    mediaType: "image",
    scheduledDate: "Jan 26, 2026",
    scheduledTime: "15:00",
    status: "approved",
    approvals: { label: true, artist: true }
  },
  {
    id: 3,
    artist: "The Waves",
    content: "Echoes EP out March 1st. First single 'Ocean Drive' available for pre-save now!",
    platforms: ["instagram", "twitter", "facebook"],
    mediaType: "image",
    scheduledDate: "Feb 1, 2026",
    scheduledTime: "18:00",
    status: "scheduled",
    approvals: { label: true, artist: true }
  },
];

const platformIcons: Record<string, React.ComponentType<{className?: string}>> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
};

export default function LabelSocialPage() {
  const [showNewPost, setShowNewPost] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<string>("");

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
            Social Media Planning
          </h1>
          <p className="text-gray-500 font-medium">
            Create and schedule content for your artists. Posts require artist approval.
          </p>
        </div>
        <button 
          onClick={() => setShowNewPost(!showNewPost)}
          className="px-6 py-3 bg-[#3b82f6] text-white rounded-xl font-bold hover:bg-[#2563eb] transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-5 h-5" />
          Create Post
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Pending Approval</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">5</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Scheduled</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Posted This Week</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">28</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
              <Users className="w-5 h-5 text-violet-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Artists Active</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">8</p>
        </div>
      </div>

      {/* New Post Form */}
      {showNewPost && (
        <div className="bg-white border border-gray-100 rounded-3xl p-6 mb-8 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Create Post for Artist</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Select Artist</label>
              <div className="relative">
                <select 
                  value={selectedArtist}
                  onChange={(e) => setSelectedArtist(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]"
                >
                  <option value="">Choose an artist...</option>
                  {artists.map((artist) => (
                    <option key={artist.id} value={artist.name}>{artist.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Content</label>
              <textarea 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] resize-none"
                rows={4}
                placeholder="Write post content for the artist..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Platforms</label>
                <div className="flex gap-2">
                  {["instagram", "facebook", "twitter", "youtube"].map((platform) => {
                    const Icon = platformIcons[platform];
                    return (
                      <button 
                        key={platform}
                        className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-[#3b82f6]/10 hover:border-[#3b82f6] transition-all"
                      >
                        <Icon className="w-5 h-5 text-gray-600" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Media</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    <Image className="w-4 h-4" />
                    Image
                  </button>
                  <button className="flex-1 py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    <Video className="w-4 h-4" />
                    Video
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Schedule Date</label>
                <input 
                  type="date"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Schedule Time</label>
                <input 
                  type="time"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <button 
                onClick={() => setShowNewPost(false)}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-[#3b82f6] text-white rounded-xl font-bold hover:bg-[#2563eb] transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                <Send className="w-4 h-4" />
                Send for Approval
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Posts by Artist */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Scheduled Posts</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {scheduledPosts.map((post) => (
            <div key={post.id} className="p-6 hover:bg-gray-50/50 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] font-bold">
                    {post.artist.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{post.artist}</p>
                    <p className="text-sm text-gray-500 font-medium">{post.scheduledDate} at {post.scheduledTime}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${
                  post.status === "approved" || post.status === "scheduled"
                    ? "bg-emerald-100 text-emerald-600" 
                    : "bg-orange-100 text-orange-600"
                }`}>
                  {post.status.replace(/_/g, " ")}
                </span>
              </div>

              <p className="text-gray-700 font-medium mb-4">{post.content}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {post.platforms.map((platform) => {
                      const Icon = platformIcons[platform];
                      return (
                        <div key={platform} className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-gray-600" />
                        </div>
                      );
                    })}
                  </div>
                  <span className="text-sm text-gray-500 font-medium flex items-center gap-1">
                    {post.mediaType === "image" ? <Image className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                    {post.mediaType}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-500">Label:</span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${post.approvals.label ? "bg-emerald-100" : "bg-gray-100"}`}>
                      <CheckCircle2 className={`w-3 h-3 ${post.approvals.label ? "text-emerald-500" : "text-gray-400"}`} />
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-500">Artist:</span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${post.approvals.artist ? "bg-emerald-100" : "bg-gray-100"}`}>
                      <CheckCircle2 className={`w-3 h-3 ${post.approvals.artist ? "text-emerald-500" : "text-gray-400"}`} />
                    </span>
                  </div>
                  <button className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                    <Edit3 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Note */}
      <div className="mt-8 p-6 bg-gradient-to-r from-[#3b82f6]/5 to-[#3b82f6]/10 rounded-2xl border border-[#3b82f6]/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
            <Share2 className="w-5 h-5 text-[#3b82f6]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Collaborative Content Creation</h3>
            <p className="text-sm text-gray-600 font-medium">
              Posts you create will be sent to artists for approval. Once approved, they'll be automatically scheduled 
              and published to the artist's connected social accounts. Artists can also create their own posts.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
