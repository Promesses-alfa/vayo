"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Plane,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/artist", icon: LayoutDashboard },
  { label: "Schedule", href: "/demo/artist/schedule", icon: Calendar },
  { label: "Documents", href: "/demo/artist/documents", icon: FileText },
  { label: "Earnings", href: "/demo/artist/earnings", icon: DollarSign },
  { label: "Travel", href: "/demo/artist/travel", icon: Plane },
  { label: "Messages", href: "/demo/artist/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/artist/settings", icon: Settings },
];

const shows = [
  { date: "2026-01-24", venue: "Paradiso", city: "Amsterdam, NL", time: "23:00", status: "confirmed", fee: 4500 },
  { date: "2026-02-02", venue: "Berghain", city: "Berlin, DE", time: "23:00", status: "confirmed", fee: 6000 },
  { date: "2026-02-14", venue: "Warehouse Project", city: "Manchester, UK", time: "22:00", status: "pending", fee: 5500 },
  { date: "2026-02-21", venue: "Fabric", city: "London, UK", time: "22:00", status: "confirmed", fee: 4000 },
  { date: "2026-03-01", venue: "Amnesia", city: "Ibiza, ES", time: "23:00", status: "inquiry", fee: 8000 },
  { date: "2026-03-15", venue: "Awakenings", city: "Eindhoven, NL", time: "14:00", status: "confirmed", fee: 7500 },
];

const availability = [
  { date: "2026-01-25", status: "available" },
  { date: "2026-01-26", status: "available" },
  { date: "2026-01-27", status: "blocked" },
  { date: "2026-02-03", status: "available" },
  { date: "2026-02-04", status: "available" },
];

export default function ArtistSchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1));
  const [view, setView] = useState<"calendar" | "list">("list");

  const filteredShows = shows.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

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
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Schedule
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            View your upcoming shows and manage availability.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex rounded-xl border border-[var(--vayo-gray-800)] overflow-hidden">
            <button
              onClick={() => setView("list")}
              className={`px-4 py-2 text-sm ${
                view === "list" ? "bg-purple-500 text-white" : "bg-[var(--vayo-gray-900)] text-[var(--vayo-gray-400)]"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`px-4 py-2 text-sm ${
                view === "calendar" ? "bg-purple-500 text-white" : "bg-[var(--vayo-gray-900)] text-[var(--vayo-gray-400)]"
              }`}
            >
              Calendar
            </button>
          </div>
          <button className="btn-primary text-sm py-2 bg-purple-500 hover:bg-purple-600">
            Update Availability
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Shows", value: shows.length },
          { label: "Confirmed", value: shows.filter(s => s.status === "confirmed").length },
          { label: "Pending", value: shows.filter(s => s.status === "pending" || s.status === "inquiry").length },
          { label: "Total Earnings", value: `€${shows.filter(s => s.status === "confirmed").reduce((sum, s) => sum + s.fee, 0).toLocaleString()}` },
        ].map((stat) => (
          <div key={stat.label} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-4">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-[var(--vayo-gray-500)]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Shows List */}
      <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
        <div className="p-5 border-b border-[var(--vayo-gray-800)]">
          <h2 className="text-lg font-semibold text-white">All Shows</h2>
        </div>
        <div className="divide-y divide-[var(--vayo-gray-800)]">
          {filteredShows.map((show, idx) => (
            <div key={idx} className="flex items-center justify-between p-5 hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">
                    {new Date(show.date).getDate()}
                  </p>
                  <p className="text-sm text-[var(--vayo-gray-500)]">
                    {new Date(show.date).toLocaleDateString("en-GB", { month: "short" })}
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{show.venue}</p>
                  <div className="flex items-center gap-4 text-sm text-[var(--vayo-gray-400)]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {show.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {show.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  show.status === "confirmed" ? "bg-emerald-500/20 text-emerald-500" :
                  show.status === "pending" ? "bg-yellow-500/20 text-yellow-500" :
                  "bg-purple-500/20 text-purple-500"
                }`}>
                  {show.status.charAt(0).toUpperCase() + show.status.slice(1)}
                </span>
                <span className="text-xl font-bold text-purple-400">€{show.fee.toLocaleString()}</span>
                <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
