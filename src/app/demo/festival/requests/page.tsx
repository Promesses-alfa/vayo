"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Music,
  Users,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  Search,
  Check,
  X,
  Eye,
  Clock,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/festival", icon: LayoutDashboard },
  { label: "Lineup", href: "/demo/festival/lineup", icon: Music },
  { label: "Artist Requests", href: "/demo/festival/requests", icon: Users },
  { label: "Schedule", href: "/demo/festival/schedule", icon: CalendarDays },
  { label: "Budget", href: "/demo/festival/budget", icon: DollarSign },
  { label: "Stages", href: "/demo/festival/stages", icon: MapPin },
  { label: "Messages", href: "/demo/festival/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/festival/settings", icon: Settings },
];

const requests = [
  { id: 1, artist: "Voltage", agency: "Electric Agency", genre: "Techno", requestedFee: 8000, status: "new", date: "2026-01-20" },
  { id: 2, artist: "Deep Blue", agency: "Oceanic Bookings", genre: "Deep House", requestedFee: 5000, status: "new", date: "2026-01-19" },
  { id: 3, artist: "Thunder Bass", agency: "Bass Nation", genre: "Dubstep", requestedFee: 12000, status: "reviewing", date: "2026-01-18" },
  { id: 4, artist: "Crystal Waves", agency: "Spectrum Artists", genre: "Trance", requestedFee: 15000, status: "reviewing", date: "2026-01-17" },
  { id: 5, artist: "Night Owl", agency: "Dark Records", genre: "Techno", requestedFee: 6000, status: "contacted", date: "2026-01-15" },
  { id: 6, artist: "Solar Flare", agency: "Cosmic Agency", genre: "Progressive", requestedFee: 9000, status: "contacted", date: "2026-01-14" },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  new: { color: "bg-blue-500/20 text-blue-500", label: "New" },
  reviewing: { color: "bg-yellow-500/20 text-yellow-500", label: "Reviewing" },
  contacted: { color: "bg-purple-500/20 text-purple-500", label: "Contacted" },
  accepted: { color: "bg-emerald-500/20 text-emerald-500", label: "Accepted" },
  declined: { color: "bg-red-500/20 text-red-500", label: "Declined" },
};

export default function FestivalRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRequests = requests.filter((req) => {
    const matchesSearch = req.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.agency.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || req.status === statusFilter;
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
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Artist Requests
          </h1>
          <p className="text-[var(--vayo-gray-400)]">Review and manage incoming artist requests.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "New Requests", value: requests.filter(r => r.status === "new").length, color: "text-blue-500" },
          { label: "Reviewing", value: requests.filter(r => r.status === "reviewing").length, color: "text-yellow-500" },
          { label: "Contacted", value: requests.filter(r => r.status === "contacted").length, color: "text-purple-500" },
          { label: "Total Value", value: `€${requests.reduce((sum, r) => sum + r.requestedFee, 0).toLocaleString()}`, color: "text-emerald-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-4">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-[var(--vayo-gray-500)]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--vayo-gray-500)]" />
          <input
            type="text"
            placeholder="Search requests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-emerald-500"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="reviewing">Reviewing</option>
          <option value="contacted">Contacted</option>
        </select>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-5 hover:border-[var(--vayo-gray-700)] transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                  {request.artist.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-semibold">{request.artist}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[request.status].color}`}>
                      {statusConfig[request.status].label}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--vayo-gray-500)]">
                    {request.agency} • {request.genre}
                  </p>
                  <p className="text-xs text-[var(--vayo-gray-600)] mt-1">
                    Received: {new Date(request.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-[var(--vayo-gray-500)]">Requested Fee</p>
                  <p className="text-xl font-bold text-emerald-400">€{request.requestedFee.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-emerald-500/20 rounded-lg text-emerald-500">
                    <Check className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
