"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Music,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  Search,
  Zap,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
  ChevronRight,
  Plus,
  FileText,
  Plane,
  Users,
  Building2,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/festival", icon: LayoutDashboard },
  { label: "Lineup Builder", href: "/demo/festival/lineup", icon: Music },
  { label: "Advancing", href: "/demo/festival/requests", icon: Zap, badge: 14 },
  { label: "Schedule", href: "/demo/festival/schedule", icon: CalendarDays },
  { label: "Budget", href: "/demo/festival/budget", icon: DollarSign },
  { label: "Stages", href: "/demo/festival/stages", icon: MapPin },
  { label: "Messages", href: "/demo/festival/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/festival/settings", icon: Settings },
];

const advancingItems = [
  {
    id: 1,
    artist: "DJ Storm",
    agency: "Dutch Dance Agency",
    agencyIcon: Users,
    stage: "Main Stage",
    date: "Friday, Jan 24",
    time: "23:00",
    status: "completed",
    step: "Technical Rider",
    completed: ["Contract", "Technical Rider", "Travel Info"],
    pending: ["Hospitality", "Guestlist"],
    lastUpdate: "2 hours ago",
    syncedWith: ["Agency", "Artist"],
  },
  {
    id: 2,
    artist: "Aurora Beats",
    agency: "Dutch Dance Agency",
    agencyIcon: Users,
    stage: "Main Stage",
    date: "Saturday, Jan 25",
    time: "22:00",
    status: "in_progress",
    step: "Travel Info",
    completed: ["Contract", "Technical Rider"],
    pending: ["Travel Info", "Hospitality", "Guestlist"],
    lastUpdate: "Pending",
    syncedWith: ["Agency"],
  },
  {
    id: 3,
    artist: "The Waves",
    agency: "Live Nation Bookings",
    agencyIcon: Building2,
    stage: "Main Stage",
    date: "Sunday, Jan 26",
    time: "21:00",
    status: "action_needed",
    step: "Guestlist",
    completed: ["Contract", "Technical Rider", "Travel Info", "Hospitality"],
    pending: ["Guestlist"],
    lastUpdate: "Action Needed",
    syncedWith: ["Agency", "Artist"],
  },
  {
    id: 4,
    artist: "Pulse",
    agency: "Bass Nation",
    agencyIcon: Users,
    stage: "Bass Stage",
    date: "Friday, Jan 24",
    time: "20:00",
    status: "completed",
    step: "All Complete",
    completed: ["Contract", "Technical Rider", "Travel Info", "Hospitality", "Guestlist"],
    pending: [],
    lastUpdate: "5 hours ago",
    syncedWith: ["Agency", "Artist"],
  },
];

const advancingSteps = [
  { id: "contract", label: "Contract", icon: FileText },
  { id: "technical", label: "Technical Rider", icon: FileText },
  { id: "travel", label: "Travel Info", icon: Plane },
  { id: "hospitality", label: "Hospitality", icon: Users },
  { id: "guestlist", label: "Guestlist", icon: Users },
];

export default function FestivalAdvancingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredItems = advancingItems.filter((item) => {
    const matchesSearch = item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.agency.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout
      type="festival"
      navItems={navItems}
      userName="Emma de Groot"
      userRole="Festival Director"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Automated Advancing
          </h1>
          <p className="text-gray-500 font-medium">Real-time sync with Agencies & Artists. No manual work needed.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Search className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-[#a855f7] rounded-xl text-sm font-bold text-white hover:bg-[#9333ea] transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Request
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Acts", value: advancingItems.length, icon: Music, color: "text-[#a855f7]" },
          { label: "Completed", value: advancingItems.filter(a => a.status === "completed").length, icon: CheckCircle2, color: "text-emerald-500" },
          { label: "In Progress", value: advancingItems.filter(a => a.status === "in_progress").length, icon: Clock, color: "text-amber-500" },
          { label: "Action Needed", value: advancingItems.filter(a => a.status === "action_needed").length, icon: AlertCircle, color: "text-red-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by artist or agency..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#a855f7] font-medium"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-sm outline-none focus:border-[#a855f7]"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="in_progress">In Progress</option>
            <option value="action_needed">Action Needed</option>
          </select>
        </div>
      </div>

      {/* Advancing Flow */}
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-900 font-bold">
                    {item.artist.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{item.artist}</h3>
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                        item.status === "completed" ? "bg-emerald-100 text-emerald-600" :
                        item.status === "in_progress" ? "bg-amber-100 text-amber-600" :
                        "bg-red-100 text-red-600"
                      }`}>
                        {item.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-bold text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <item.agencyIcon className="w-4 h-4" />
                        {item.agency}
                      </span>
                      <span>•</span>
                      <span>{item.stage}</span>
                      <span>•</span>
                      <span>{item.date} at {item.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {item.syncedWith.map((sync, idx) => (
                      <div key={idx} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold ${
                        sync === "Agency" ? "bg-[#00d4aa] text-white" :
                        sync === "Artist" ? "bg-[#f97316] text-white" :
                        "bg-[#a855f7] text-white"
                      }`}>
                        {sync.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Advancing Steps Progress */}
            <div className="p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Advancing Progress</p>
                <p className="text-xs font-bold text-gray-500">{item.completed.length} / {advancingSteps.length} Complete</p>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {advancingSteps.map((step) => {
                  const isCompleted = item.completed.includes(step.label);
                  const isCurrent = item.step === step.label;
                  return (
                    <div key={step.id} className="relative">
                      <div className={`p-4 rounded-2xl border-2 transition-all ${
                        isCompleted ? "bg-emerald-50 border-emerald-200" :
                        isCurrent ? "bg-[#a855f7]/10 border-[#a855f7]" :
                        "bg-white border-gray-200"
                      }`}>
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                          isCompleted ? "bg-emerald-500 text-white" :
                          isCurrent ? "bg-[#a855f7] text-white" :
                          "bg-gray-200 text-gray-400"
                        }`}>
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <step.icon className="w-4 h-4" />
                          )}
                        </div>
                        <p className={`text-[10px] font-bold uppercase tracking-tighter ${
                          isCompleted ? "text-emerald-600" :
                          isCurrent ? "text-[#a855f7]" :
                          "text-gray-400"
                        }`}>
                          {step.label}
                        </p>
                      </div>
                      {step.id !== "guestlist" && (
                        <div className={`absolute top-1/2 -right-1.5 w-3 h-0.5 ${
                          isCompleted ? "bg-emerald-500" : "bg-gray-200"
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-gray-500">
                <span>Last sync: {item.lastUpdate}</span>
                <span className="text-[#00d4aa]">✓ Auto-syncing active</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ecosystem Integration Banner */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Zap className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Zero Manual Work</h2>
          <p className="text-white/80 font-medium mb-8">
            When you confirm an artist, their agency automatically receives advancing requirements. 
            Artists get travel details instantly. Technical specs sync in real-time. 
            No emails, no spreadsheets, no delays.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
              Configure Auto-Advancing
            </button>
            <button className="px-6 py-3 bg-white/20 text-white rounded-2xl font-bold text-sm hover:bg-white/30 transition-all">
              View Integration Docs
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
