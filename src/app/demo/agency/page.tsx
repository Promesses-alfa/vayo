"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  DollarSign,
  Truck,
  MessageSquare,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Plus,
  ArrowRight,
  PartyPopper,
  Plug,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/demo/agency", icon: LayoutDashboard },
  { label: "Calendar", href: "/demo/agency/calendar", icon: Calendar },
  { label: "Artists", href: "/demo/agency/artists", icon: Users, badge: 24 },
  { label: "Bookings", href: "/demo/agency/bookings", icon: Calendar, badge: 12 },
  { label: "Contracts", href: "/demo/agency/contracts", icon: FileText, badge: 5 },
  { label: "Finance", href: "/demo/agency/finance", icon: DollarSign },
  { label: "Tours", href: "/demo/agency/tours", icon: Truck },
  { label: "Messages", href: "/demo/agency/messages", icon: MessageSquare, badge: 8 },
  { label: "Integrations", href: "/demo/agency/integrations", icon: Plug },
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
];

const recentActivity = [
  {
    type: "contract",
    message: "Contract signed by DJ Storm for Paradiso show",
    time: "2 hours ago",
    module: "Agencies",
  },
  {
    type: "booking",
    message: "New booking request from Fusion Festival",
    time: "4 hours ago",
    module: "Festivals",
  },
  {
    type: "payment",
    message: "Payment received: €6,000 from Fabric London",
    time: "6 hours ago",
    module: "Finance",
  },
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
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Agency Dashboard
          </h1>
          <p className="text-gray-500 font-medium">
            Manage your roster and bookings across the ecosystem.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Calendar
          </button>
          <button className="px-4 py-2 bg-[#00d4aa] rounded-xl text-sm font-bold text-white hover:bg-[#00b894] transition-all flex items-center gap-2 shadow-md shadow-[#00d4aa]/20">
            <Plus className="w-4 h-4" />
            New Booking
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-[#00d4aa]" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${
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
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Upcoming Shows */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Upcoming Shows</h2>
            <button className="text-sm font-bold text-[#00d4aa] hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {upcomingShows.map((show, index) => (
              <div key={index} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-900 font-bold text-lg group-hover:bg-[#00d4aa] group-hover:text-white transition-all">
                    {show.artist.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">{show.artist}</p>
                    <p className="text-sm text-gray-500 font-medium">{show.venue}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-sm font-bold text-gray-900">{show.date}</p>
                  <p className="text-sm text-gray-500 font-medium">{show.time}</p>
                </div>
                <div className="hidden sm:flex items-center gap-6">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                    show.status === "confirmed"
                      ? "bg-emerald-100 text-emerald-600"
                      : show.status === "pending"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-blue-100 text-blue-600"
                  }`}>
                    {show.status.replace('_', ' ')}
                  </span>
                  <span className="text-gray-900 font-bold w-20 text-right">{show.fee}</span>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Ecosystem Activity */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Ecosystem Sync</h2>
            <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-4">
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      activity.type === "contract" ? "bg-blue-50 text-blue-500" :
                      activity.type === "booking" ? "bg-purple-50 text-purple-500" :
                      "bg-emerald-50 text-emerald-500"
                    }`}>
                      {activity.type === "contract" && <FileText className="w-5 h-5" />}
                      {activity.type === "booking" && <PartyPopper className="w-5 h-5" />}
                      {activity.type === "payment" && <DollarSign className="w-5 h-5" />}
                    </div>
                    {index !== recentActivity.length - 1 && (
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-gray-100" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{activity.module}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-[10px] font-bold text-gray-400">{activity.time}</span>
                    </div>
                    <p className="text-sm font-bold text-gray-700 leading-snug">{activity.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-100 transition-all">
              Full Activity Feed
            </button>
          </div>

          {/* Quick Connect */}
          <div className="bg-[#a855f7] rounded-3xl p-6 text-white shadow-lg shadow-[#a855f7]/20">
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>Festival Connection</h3>
            <p className="text-white/80 text-sm font-medium mb-6">
              Fusion Festival just updated their advance requirements for DJ Storm.
            </p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2">
              Sync Requirements <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
