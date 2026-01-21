"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  DollarSign,
  Truck,
  MessageSquare,
  Settings,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  Plus,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/agency", icon: LayoutDashboard },
  { label: "Calendar", href: "/demo/agency/calendar", icon: Calendar },
  { label: "Artists", href: "/demo/agency/artists", icon: Users, badge: 24 },
  { label: "Bookings", href: "/demo/agency/bookings", icon: Calendar, badge: 12 },
  { label: "Contracts", href: "/demo/agency/contracts", icon: FileText, badge: 5 },
  { label: "Finance", href: "/demo/agency/finance", icon: DollarSign },
  { label: "Tours", href: "/demo/agency/tours", icon: Truck },
  { label: "Messages", href: "/demo/agency/messages", icon: MessageSquare, badge: 8 },
  { label: "Settings", href: "/demo/agency/settings", icon: Settings },
];

const stats = [
  {
    label: "Active Shows",
    value: "47",
    change: "+12%",
    trend: "up",
    icon: Calendar,
  },
  {
    label: "Revenue (MTD)",
    value: "€284,500",
    change: "+23%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Pending Contracts",
    value: "12",
    change: "-3",
    trend: "down",
    icon: FileText,
  },
  {
    label: "Artists Managed",
    value: "156",
    change: "+8",
    trend: "up",
    icon: Users,
  },
];

const upcomingShows = [
  {
    artist: "DJ Storm",
    venue: "Paradiso, Amsterdam",
    date: "Jan 24, 2026",
    time: "23:00",
    status: "confirmed",
    fee: "€4,500",
  },
  {
    artist: "The Waves",
    venue: "O2 Arena, London",
    date: "Jan 28, 2026",
    time: "20:00",
    status: "pending",
    fee: "€12,000",
  },
  {
    artist: "Aurora Beats",
    venue: "Berghain, Berlin",
    date: "Feb 2, 2026",
    time: "23:00",
    status: "confirmed",
    fee: "€6,000",
  },
  {
    artist: "Neon Dreams",
    venue: "Fabric, London",
    date: "Feb 5, 2026",
    time: "22:00",
    status: "contract_sent",
    fee: "€3,500",
  },
  {
    artist: "Pulse",
    venue: "Rex Club, Paris",
    date: "Feb 8, 2026",
    time: "23:30",
    status: "confirmed",
    fee: "€2,800",
  },
];

const recentActivity = [
  {
    type: "contract",
    message: "Contract signed by DJ Storm for Paradiso show",
    time: "2 hours ago",
  },
  {
    type: "booking",
    message: "New booking request from Warehouse Project",
    time: "4 hours ago",
  },
  {
    type: "payment",
    message: "Payment received: €6,000 from Fabric London",
    time: "6 hours ago",
  },
  {
    type: "message",
    message: "New message from O2 Arena booking team",
    time: "8 hours ago",
  },
  {
    type: "artist",
    message: "Aurora Beats updated availability for March",
    time: "1 day ago",
  },
];

const pendingTasks = [
  { task: "Send contract to Warehouse Project", priority: "high", due: "Today" },
  { task: "Confirm hotel for The Waves tour", priority: "medium", due: "Tomorrow" },
  { task: "Review rider for Berlin show", priority: "low", due: "Jan 25" },
  { task: "Invoice Fabric London", priority: "high", due: "Today" },
];

export default function AgencyDashboard() {
  return (
    <DashboardLayout
      type="agency"
      navItems={navItems}
      userName="Sarah van der Berg"
      userRole="Agency Director"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Welcome back, Sarah
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Here&apos;s what&apos;s happening with your agency today.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary text-sm py-2.5">
            <Calendar className="w-4 h-4" />
            View Calendar
          </button>
          <button className="btn-primary text-sm py-2.5">
            <Plus className="w-4 h-4" />
            New Booking
          </button>
        </div>
      </div>

      {/* Stats Grid */}
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
              <div className="w-10 h-10 rounded-lg bg-[var(--vayo-gray-800)] flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[var(--vayo-accent)]" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === "up" ? "text-emerald-500" : "text-red-500"
              }`}>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-[var(--vayo-gray-500)]">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Shows */}
        <div className="lg:col-span-2 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white">Upcoming Shows</h2>
            <button className="text-sm text-[var(--vayo-accent)] hover:underline">
              View All
            </button>
          </div>
          <div className="divide-y divide-[var(--vayo-gray-800)]">
            {upcomingShows.map((show, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-semibold text-sm">
                    {show.artist.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{show.artist}</p>
                    <p className="text-sm text-[var(--vayo-gray-500)]">{show.venue}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-sm text-white">{show.date}</p>
                  <p className="text-sm text-[var(--vayo-gray-500)]">{show.time}</p>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    show.status === "confirmed"
                      ? "bg-emerald-500/20 text-emerald-500"
                      : show.status === "pending"
                      ? "bg-yellow-500/20 text-yellow-500"
                      : "bg-blue-500/20 text-blue-500"
                  }`}>
                    {show.status === "contract_sent" ? "Contract Sent" : show.status.charAt(0).toUpperCase() + show.status.slice(1)}
                  </span>
                  <span className="text-white font-medium">{show.fee}</span>
                </div>
                <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg">
                  <MoreHorizontal className="w-4 h-4 text-[var(--vayo-gray-400)]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Pending Tasks */}
          <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
              <h2 className="text-lg font-semibold text-white">Pending Tasks</h2>
              <span className="px-2 py-1 rounded-full text-xs bg-[var(--vayo-accent)]/20 text-[var(--vayo-accent)]">
                {pendingTasks.length} tasks
              </span>
            </div>
            <div className="p-4 space-y-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    task.priority === "high"
                      ? "bg-red-500"
                      : task.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-[var(--vayo-gray-500)]"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-white">{task.task}</p>
                    <p className="text-xs text-[var(--vayo-gray-500)]">Due: {task.due}</p>
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
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === "contract"
                      ? "bg-blue-500/20 text-blue-500"
                      : activity.type === "booking"
                      ? "bg-purple-500/20 text-purple-500"
                      : activity.type === "payment"
                      ? "bg-emerald-500/20 text-emerald-500"
                      : activity.type === "message"
                      ? "bg-orange-500/20 text-orange-500"
                      : "bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-400)]"
                  }`}>
                    {activity.type === "contract" && <FileText className="w-4 h-4" />}
                    {activity.type === "booking" && <Calendar className="w-4 h-4" />}
                    {activity.type === "payment" && <DollarSign className="w-4 h-4" />}
                    {activity.type === "message" && <MessageSquare className="w-4 h-4" />}
                    {activity.type === "artist" && <Users className="w-4 h-4" />}
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
      </div>
    </DashboardLayout>
  );
}
