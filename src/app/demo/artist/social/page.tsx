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
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Plus,
  Image,
  Video,
  Clock,
  CheckCircle2,
  Edit3,
  Trash2,
  Eye,
  Send,
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

const scheduledPosts = [
  {
    id: 1,
    content: "🎉 Just confirmed for Tomorrowland 2026! Can't wait to see you all there. More details coming soon... #Tomorrowland #DJ #Festival",
    platforms: ["instagram", "facebook", "twitter"],
    mediaType: "image",
    scheduledDate: "Jan 25, 2026",
    scheduledTime: "18:00",
    status: "scheduled",
    createdBy: "DJ Storm",
    approvals: { label: true, management: false }
  },
  {
    id: 2,
    content: "New track dropping next Friday! Pre-save link in bio 🔥 #NewMusic #Techno",
    platforms: ["instagram", "twitter"],
    mediaType: "video",
    scheduledDate: "Jan 28, 2026",
    scheduledTime: "12:00",
    status: "pending_approval",
    createdBy: "Horizon Records",
    approvals: { label: true, management: false }
  },
  {
    id: 3,
    content: "Behind the scenes from last night's show at Paradiso 🇳🇱 What a night! Thanks everyone who came out ❤️",
    platforms: ["instagram"],
    mediaType: "image",
    scheduledDate: "Jan 26, 2026",
    scheduledTime: "10:00",
    status: "approved",
    createdBy: "DJ Storm",
    approvals: { label: true, management: true }
  },
];

const draftPosts = [
  {
    id: 4,
    content: "Summer tour dates announcement coming soon...",
    platforms: ["instagram", "facebook"],
    mediaType: "image",
    createdBy: "Management",
    lastEdited: "2 hours ago"
  },
];

const platformIcons: Record<string, React.ComponentType<{className?: string}>> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
};

export default function ArtistSocialPage() {
  const [activeTab, setActiveTab] = useState<"scheduled" | "drafts" | "posted">("scheduled");
  const [showNewPost, setShowNewPost] = useState(false);

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
            Social Media Planning
          </h1>
          <p className="text-gray-500 font-medium">
            Plan, schedule, and coordinate social content with your team.
          </p>
        </div>
        <button 
          onClick={() => setShowNewPost(!showNewPost)}
          className="px-6 py-3 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
        >
          <Plus className="w-5 h-5" />
          New Post
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Scheduled</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">8</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
              <Eye className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Pending Review</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">2</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <Edit3 className="w-5 h-5 text-gray-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Drafts</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">3</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Posted This Week</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
      </div>

      {/* New Post Form */}
      {showNewPost && (
        <div className="bg-white border border-gray-100 rounded-3xl p-6 mb-8 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Create New Post</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Content</label>
              <textarea 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:border-[#f97316] resize-none"
                rows={4}
                placeholder="What do you want to share?"
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
                        className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-[#f97316]/10 hover:border-[#f97316] transition-all"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:border-[#f97316]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Schedule Time</label>
                <input 
                  type="time"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:border-[#f97316]"
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
              <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                Save as Draft
              </button>
              <button className="px-6 py-3 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20">
                <Send className="w-4 h-4" />
                Schedule Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: "scheduled", label: "Scheduled", count: 3 },
          { id: "drafts", label: "Drafts", count: 1 },
          { id: "posted", label: "Posted", count: 45 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === tab.id
                ? "bg-[#f97316] text-white"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {tab.label} <span className="opacity-70">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {activeTab === "scheduled" && scheduledPosts.map((post) => (
          <div key={post.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <p className="text-gray-900 font-medium leading-relaxed">{post.content}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                  <Edit3 className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-2 bg-gray-50 rounded-lg hover:bg-red-50 transition-all">
                  <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
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

              <span className="text-sm text-gray-500 font-medium flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.scheduledDate} at {post.scheduledTime}
              </span>

              <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${
                post.status === "approved" 
                  ? "bg-emerald-100 text-emerald-600" 
                  : post.status === "scheduled"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-orange-100 text-orange-600"
              }`}>
                {post.status.replace("_", " ")}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Created by: {post.createdBy}</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">Label:</span>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center ${post.approvals.label ? "bg-emerald-100" : "bg-gray-100"}`}>
                    <CheckCircle2 className={`w-3 h-3 ${post.approvals.label ? "text-emerald-500" : "text-gray-400"}`} />
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">Management:</span>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center ${post.approvals.management ? "bg-emerald-100" : "bg-gray-100"}`}>
                    <CheckCircle2 className={`w-3 h-3 ${post.approvals.management ? "text-emerald-500" : "text-gray-400"}`} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {activeTab === "drafts" && draftPosts.map((post) => (
          <div key={post.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <p className="text-gray-900 font-medium leading-relaxed">{post.content}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                  <Edit3 className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-2 bg-gray-50 rounded-lg hover:bg-red-50 transition-all">
                  <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
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

              <span className="text-sm text-gray-500 font-medium">
                Last edited: {post.lastEdited}
              </span>

              <span className="text-xs text-gray-500 font-medium">Created by: {post.createdBy}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Collaboration Note */}
      <div className="mt-8 p-6 bg-gradient-to-r from-[#f97316]/5 to-[#f97316]/10 rounded-2xl border border-[#f97316]/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#f97316]/20 flex items-center justify-center flex-shrink-0">
            <Share2 className="w-5 h-5 text-[#f97316]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Collaborative Planning</h3>
            <p className="text-sm text-gray-600 font-medium">
              Your label and management can also create and schedule posts. All posts require your approval before publishing. 
              You'll receive notifications when new content is ready for review.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
