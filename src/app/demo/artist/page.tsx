"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Plane,
  MessageSquare,
  Settings,
  Music,
  MapPin,
  Clock,
  Download,
  ExternalLink,
  CheckCircle,
  AlertCircle,
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

const upcomingShows = [
  {
    id: 1,
    venue: "Paradiso",
    city: "Amsterdam",
    country: "NL",
    date: "2026-01-24",
    time: "23:00",
    fee: 4500,
    status: "confirmed",
    hasDocuments: true,
    hasTravelBooked: true,
  },
  {
    id: 2,
    venue: "Berghain",
    city: "Berlin",
    country: "DE",
    date: "2026-02-02",
    time: "23:00",
    fee: 6000,
    status: "confirmed",
    hasDocuments: true,
    hasTravelBooked: false,
  },
  {
    id: 3,
    venue: "Warehouse Project",
    city: "Manchester",
    country: "UK",
    date: "2026-02-14",
    time: "22:00",
    fee: 5500,
    status: "pending",
    hasDocuments: false,
    hasTravelBooked: false,
  },
];

const recentDocuments = [
  { name: "Contract - Paradiso Amsterdam", type: "contract", date: "Jan 12, 2026" },
  { name: "Rider - Technical Requirements", type: "rider", date: "Jan 10, 2026" },
  { name: "Invoice #INV-2026-001", type: "invoice", date: "Jan 8, 2026" },
  { name: "Flight Ticket - AMS to TXL", type: "travel", date: "Jan 5, 2026" },
];

const stats = [
  { label: "Upcoming Shows", value: "12", icon: Calendar },
  { label: "This Month", value: "€18,500", icon: DollarSign },
  { label: "Documents Pending", value: "3", icon: FileText },
  { label: "Messages", value: "5", icon: MessageSquare },
];

export default function ArtistDashboard() {
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
            Welcome back, Storm
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Here&apos;s your schedule and upcoming shows.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary text-sm py-2.5">
            <Calendar className="w-4 h-4" />
            Update Availability
          </button>
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
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-purple-500" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-[var(--vayo-gray-500)]">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Next Show Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-purple-400 text-sm font-medium mb-2">NEXT SHOW</p>
            <h2 className="text-2xl font-bold text-white mb-2">Paradiso Amsterdam</h2>
            <div className="flex flex-wrap items-center gap-4 text-[var(--vayo-gray-300)]">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 24, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                23:00
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Amsterdam, NL
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="btn-secondary text-sm py-2">
              <FileText className="w-4 h-4" />
              View Documents
            </button>
            <button className="btn-primary text-sm py-2 bg-purple-500 hover:bg-purple-600">
              <ExternalLink className="w-4 h-4" />
              View Details
            </button>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-[var(--vayo-gray-300)]">Contract Signed</span>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-[var(--vayo-gray-300)]">Travel Booked</span>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-[var(--vayo-gray-300)]">Rider Approved</span>
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Shows */}
        <div className="lg:col-span-2 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white">Upcoming Shows</h2>
            <a href="/demo/artist/schedule" className="text-sm text-purple-400 hover:underline">
              View All
            </a>
          </div>
          <div className="divide-y divide-[var(--vayo-gray-800)]">
            {upcomingShows.map((show) => (
              <div key={show.id} className="flex items-center justify-between p-4 hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{show.venue}</p>
                    <p className="text-sm text-[var(--vayo-gray-500)]">{show.city}, {show.country}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-sm text-white">{new Date(show.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</p>
                  <p className="text-sm text-[var(--vayo-gray-500)]">{show.time}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    show.status === "confirmed"
                      ? "bg-emerald-500/20 text-emerald-500"
                      : "bg-yellow-500/20 text-yellow-500"
                  }`}>
                    {show.status.charAt(0).toUpperCase() + show.status.slice(1)}
                  </span>
                  <span className="text-white font-semibold">€{show.fee.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Documents */}
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white">Recent Documents</h2>
          </div>
          <div className="p-4 space-y-3">
            {recentDocuments.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[var(--vayo-gray-800)]/50 hover:bg-[var(--vayo-gray-800)] transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    doc.type === "contract" ? "bg-blue-500/20 text-blue-500" :
                    doc.type === "rider" ? "bg-purple-500/20 text-purple-500" :
                    doc.type === "invoice" ? "bg-emerald-500/20 text-emerald-500" :
                    "bg-orange-500/20 text-orange-500"
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">{doc.name}</p>
                    <p className="text-xs text-[var(--vayo-gray-500)]">{doc.date}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
