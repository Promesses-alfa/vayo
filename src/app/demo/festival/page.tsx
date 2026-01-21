"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Music,
  Users,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  Ticket,
  ArrowUpRight,
  Clock,
  CheckCircle,
  AlertCircle,
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

const stats = [
  { label: "Confirmed Acts", value: "48", target: "60", icon: Music },
  { label: "Pending Requests", value: "24", icon: Users },
  { label: "Budget Used", value: "€2.8M", target: "€4M", icon: DollarSign },
  { label: "Tickets Sold", value: "35K", target: "50K", icon: Ticket },
];

const recentActivity = [
  { type: "confirmed", message: "DJ Storm confirmed for Main Stage", time: "2 hours ago" },
  { type: "pending", message: "New offer sent to The Waves", time: "4 hours ago" },
  { type: "confirmed", message: "Aurora Beats signed contract", time: "6 hours ago" },
  { type: "declined", message: "Neon Dreams declined offer", time: "1 day ago" },
  { type: "pending", message: "Budget approval needed for Pulse", time: "1 day ago" },
];

const lineup = [
  { name: "DJ Storm", stage: "Main Stage", day: "Friday", time: "23:00", status: "confirmed", fee: 45000 },
  { name: "Aurora Beats", stage: "Main Stage", day: "Saturday", time: "22:00", status: "confirmed", fee: 35000 },
  { name: "The Waves", stage: "Main Stage", day: "Sunday", time: "21:00", status: "pending", fee: 50000 },
  { name: "Pulse", stage: "Bass Stage", day: "Friday", time: "20:00", status: "confirmed", fee: 25000 },
  { name: "Neon Dreams", stage: "Sunset Stage", day: "Saturday", time: "18:00", status: "declined", fee: 15000 },
];

export default function FestivalDashboard() {
  return (
    <DashboardLayout
      type="festival"
      navItems={navItems}
      userName="Emma de Groot"
      userRole="Festival Director"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Welcome back, Emma
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Here&apos;s the status of Summer Sounds Festival 2026.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-500 text-sm font-medium">
            <span>156 days until festival</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-emerald-500" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-[var(--vayo-gray-500)]">
              {stat.label}
              {stat.target && <span className="text-[var(--vayo-gray-600)]"> / {stat.target}</span>}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Lineup Overview */}
        <div className="lg:col-span-2 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white">Lineup Overview</h2>
            <a href="/demo/festival/lineup" className="text-sm text-emerald-400 hover:underline">View Full Lineup</a>
          </div>
          <div className="divide-y divide-[var(--vayo-gray-800)]">
            {lineup.map((act, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                    {act.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{act.name}</p>
                    <p className="text-sm text-[var(--vayo-gray-500)]">{act.stage} • {act.day}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block text-sm text-[var(--vayo-gray-400)]">{act.time}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    act.status === "confirmed" ? "bg-emerald-500/20 text-emerald-500" :
                    act.status === "pending" ? "bg-yellow-500/20 text-yellow-500" :
                    "bg-red-500/20 text-red-500"
                  }`}>
                    {act.status.charAt(0).toUpperCase() + act.status.slice(1)}
                  </span>
                  <span className="hidden md:block text-emerald-400 font-medium">€{(act.fee / 1000).toFixed(0)}K</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
          </div>
          <div className="p-4 space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === "confirmed" ? "bg-emerald-500/20 text-emerald-500" :
                  activity.type === "pending" ? "bg-yellow-500/20 text-yellow-500" :
                  "bg-red-500/20 text-red-500"
                }`}>
                  {activity.type === "confirmed" ? <CheckCircle className="w-4 h-4" /> :
                   activity.type === "pending" ? <Clock className="w-4 h-4" /> :
                   <AlertCircle className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--vayo-gray-300)]">{activity.message}</p>
                  <p className="text-xs text-[var(--vayo-gray-500)]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
