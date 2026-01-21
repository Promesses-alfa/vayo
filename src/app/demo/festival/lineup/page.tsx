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
  Plus,
  Filter,
  Eye,
  Edit,
  MoreHorizontal,
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

const lineup = [
  { id: 1, name: "DJ Storm", stage: "Main Stage", day: "Friday", time: "23:00 - 01:00", status: "confirmed", fee: 45000, genre: "Techno" },
  { id: 2, name: "Aurora Beats", stage: "Main Stage", day: "Saturday", time: "22:00 - 00:00", status: "confirmed", fee: 35000, genre: "Progressive House" },
  { id: 3, name: "The Waves", stage: "Main Stage", day: "Sunday", time: "21:00 - 23:00", status: "pending", fee: 50000, genre: "Indie Rock" },
  { id: 4, name: "Pulse", stage: "Bass Stage", day: "Friday", time: "20:00 - 22:00", status: "confirmed", fee: 25000, genre: "Drum & Bass" },
  { id: 5, name: "Electric Soul", stage: "Bass Stage", day: "Saturday", time: "21:00 - 23:00", status: "confirmed", fee: 20000, genre: "House" },
  { id: 6, name: "Midnight Express", stage: "Sunset Stage", day: "Friday", time: "18:00 - 20:00", status: "confirmed", fee: 12000, genre: "Deep House" },
  { id: 7, name: "Cosmic Rays", stage: "Sunset Stage", day: "Saturday", time: "17:00 - 19:00", status: "pending", fee: 15000, genre: "Ambient" },
  { id: 8, name: "Bass Mechanic", stage: "Bass Stage", day: "Sunday", time: "20:00 - 22:00", status: "confirmed", fee: 18000, genre: "Dubstep" },
];

const stages = ["All Stages", "Main Stage", "Bass Stage", "Sunset Stage"];
const days = ["All Days", "Friday", "Saturday", "Sunday"];

export default function FestivalLineupPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("All Stages");
  const [dayFilter, setDayFilter] = useState("All Days");

  const filteredLineup = lineup.filter((act) => {
    const matchesSearch = act.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = stageFilter === "All Stages" || act.stage === stageFilter;
    const matchesDay = dayFilter === "All Days" || act.day === dayFilter;
    return matchesSearch && matchesStage && matchesDay;
  });

  const totalFees = filteredLineup.reduce((sum, act) => sum + act.fee, 0);

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
            Lineup Builder
          </h1>
          <p className="text-[var(--vayo-gray-400)]">Build and manage your festival lineup.</p>
        </div>
        <button className="btn-primary text-sm py-2.5 bg-emerald-500 hover:bg-emerald-600">
          <Plus className="w-4 h-4" />
          Add Artist
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Acts", value: filteredLineup.length },
          { label: "Confirmed", value: filteredLineup.filter(a => a.status === "confirmed").length },
          { label: "Pending", value: filteredLineup.filter(a => a.status === "pending").length },
          { label: "Total Fees", value: `€${(totalFees / 1000).toFixed(0)}K` },
        ].map((stat) => (
          <div key={stat.label} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-4">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
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
            placeholder="Search artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-emerald-500"
          />
        </div>
        <select
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white"
        >
          {stages.map((stage) => (
            <option key={stage} value={stage}>{stage}</option>
          ))}
        </select>
        <select
          value={dayFilter}
          onChange={(e) => setDayFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white"
        >
          {days.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>

      {/* Lineup Table */}
      <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--vayo-gray-800)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Artist</th>
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Stage</th>
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Day</th>
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Time</th>
              <th className="text-center p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Status</th>
              <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Fee</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredLineup.map((act) => (
              <tr key={act.id} className="border-b border-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-800)]/50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                      {act.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{act.name}</p>
                      <p className="text-xs text-[var(--vayo-gray-500)]">{act.genre}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-[var(--vayo-gray-300)]">{act.stage}</td>
                <td className="p-4 text-[var(--vayo-gray-300)]">{act.day}</td>
                <td className="p-4 text-[var(--vayo-gray-300)]">{act.time}</td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    act.status === "confirmed" ? "bg-emerald-500/20 text-emerald-500" : "bg-yellow-500/20 text-yellow-500"
                  }`}>
                    {act.status.charAt(0).toUpperCase() + act.status.slice(1)}
                  </span>
                </td>
                <td className="p-4 text-right text-emerald-400 font-medium">€{act.fee.toLocaleString()}</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
