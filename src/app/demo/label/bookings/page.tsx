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
  Search,
  Eye,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const bookings = [
  { artist: "DJ Storm", venue: "Paradiso", city: "Amsterdam", date: "2026-01-24", fee: 4500, status: "confirmed" },
  { artist: "Aurora Beats", venue: "Berghain", city: "Berlin", date: "2026-02-02", fee: 6000, status: "confirmed" },
  { artist: "The Waves", venue: "O2 Arena", city: "London", date: "2026-01-28", fee: 12000, status: "pending" },
  { artist: "Pulse", venue: "Fabric", city: "London", date: "2026-02-05", fee: 4000, status: "confirmed" },
];

export default function LabelBookingsPage() {
  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
          Artist Bookings
        </h1>
        <p className="text-[var(--vayo-gray-400)]">Track bookings for your signed artists.</p>
      </div>

      <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--vayo-gray-800)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Artist</th>
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Venue</th>
              <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Date</th>
              <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Fee</th>
              <th className="text-center p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr key={idx} className="border-b border-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-800)]/50">
                <td className="p-4 text-white font-medium">{booking.artist}</td>
                <td className="p-4">
                  <div>
                    <p className="text-white">{booking.venue}</p>
                    <p className="text-sm text-[var(--vayo-gray-500)]">{booking.city}</p>
                  </div>
                </td>
                <td className="p-4 text-[var(--vayo-gray-300)]">
                  {new Date(booking.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </td>
                <td className="p-4 text-right text-cyan-400 font-medium">€{booking.fee.toLocaleString()}</td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    booking.status === "confirmed" ? "bg-emerald-500/20 text-emerald-500" : "bg-yellow-500/20 text-yellow-500"
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="p-4">
                  <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
