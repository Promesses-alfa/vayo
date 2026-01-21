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
  Eye,
  ChevronRight,
  PartyPopper,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare, badge: 4 },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const bookings = [
  { artist: "DJ Storm", venue: "Paradiso", city: "Amsterdam", date: "2026-01-24", fee: 4500, status: "confirmed", type: "venue" },
  { artist: "Aurora Beats", venue: "Berghain", city: "Berlin", date: "2026-02-02", fee: 6000, status: "confirmed", type: "venue" },
  { artist: "The Waves", venue: "O2 Arena", city: "London", date: "2026-01-28", fee: 12000, status: "pending", type: "venue" },
  { artist: "DJ Storm", venue: "Summer Sounds Festival", city: "Amsterdam", date: "2026-07-15", fee: 45000, status: "confirmed", type: "festival" },
  { artist: "Aurora Beats", venue: "Fusion Festival", city: "Berlin", date: "2026-06-20", fee: 35000, status: "confirmed", type: "festival" },
  { artist: "Pulse", venue: "Fabric", city: "London", date: "2026-02-05", fee: 4000, status: "confirmed", type: "venue" },
];

export default function LabelBookingsPage() {
  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Artist Bookings
          </h1>
          <p className="text-gray-500 font-medium">Real-time booking data synced from all your artists' agencies.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Bookings", value: bookings.length, icon: Calendar, color: "text-[#3b82f6]" },
          { label: "Confirmed", value: bookings.filter(b => b.status === "confirmed").length, icon: TrendingUp, color: "text-emerald-500" },
          { label: "Festival Shows", value: bookings.filter(b => b.type === "festival").length, icon: PartyPopper, color: "text-[#a855f7]" },
          { label: "Total Revenue", value: `€${bookings.filter(b => b.status === "confirmed").reduce((sum, b) => sum + b.fee, 0).toLocaleString()}`, icon: DollarSign, color: "text-[#00d4aa]" },
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

      {/* Bookings Table */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Artist</th>
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Venue / Festival</th>
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Date</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Fee</th>
                <th className="text-center p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                <th className="p-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {bookings.map((booking, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-all group">
                  <td className="p-6">
                    <span className="text-sm font-bold text-gray-900">{booking.artist}</span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      {booking.type === "festival" && (
                        <PartyPopper className="w-4 h-4 text-[#a855f7]" />
                      )}
                      <div>
                        <p className="text-sm font-bold text-gray-900">{booking.venue}</p>
                        <p className="text-xs font-bold text-gray-500">{booking.city}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-sm font-bold text-gray-600">
                      {new Date(booking.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <span className="text-sm font-bold text-[#3b82f6]">€{booking.fee.toLocaleString()}</span>
                  </td>
                  <td className="p-6 text-center">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                      booking.status === "confirmed" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Agency Integration Banner */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Calendar className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Direct Agency Integration</h2>
          <p className="text-white/80 font-medium mb-8">
            When your artists' agencies confirm bookings, they appear here instantly. 
            Commission calculations happen automatically. Revenue reports update in real-time.
          </p>
          <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View Commission Settings
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
