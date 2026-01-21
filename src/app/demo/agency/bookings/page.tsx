"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
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
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  Eye,
  Edit,
  Trash2,
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

const bookings = [
  {
    id: "BK-2026-001",
    artist: "DJ Storm",
    venue: "Paradiso",
    city: "Amsterdam",
    country: "NL",
    date: "2026-01-24",
    time: "23:00",
    fee: 4500,
    currency: "EUR",
    status: "confirmed",
    promoter: "ID&T",
    contract: "signed",
  },
  {
    id: "BK-2026-002",
    artist: "The Waves",
    venue: "O2 Arena",
    city: "London",
    country: "UK",
    date: "2026-01-28",
    time: "20:00",
    fee: 12000,
    currency: "GBP",
    status: "pending",
    promoter: "Live Nation",
    contract: "sent",
  },
  {
    id: "BK-2026-003",
    artist: "Aurora Beats",
    venue: "Berghain",
    city: "Berlin",
    country: "DE",
    date: "2026-02-02",
    time: "23:00",
    fee: 6000,
    currency: "EUR",
    status: "confirmed",
    promoter: "Ostgut Ton",
    contract: "signed",
  },
  {
    id: "BK-2026-004",
    artist: "Neon Dreams",
    venue: "Fabric",
    city: "London",
    country: "UK",
    date: "2026-02-05",
    time: "22:00",
    fee: 3500,
    currency: "GBP",
    status: "contract_sent",
    promoter: "Fabric London",
    contract: "sent",
  },
  {
    id: "BK-2026-005",
    artist: "Pulse",
    venue: "Rex Club",
    city: "Paris",
    country: "FR",
    date: "2026-02-08",
    time: "23:30",
    fee: 2800,
    currency: "EUR",
    status: "confirmed",
    promoter: "Rex Club Paris",
    contract: "signed",
  },
  {
    id: "BK-2026-006",
    artist: "DJ Storm",
    venue: "Warehouse Project",
    city: "Manchester",
    country: "UK",
    date: "2026-02-14",
    time: "22:00",
    fee: 5500,
    currency: "GBP",
    status: "inquiry",
    promoter: "Warehouse Project",
    contract: "none",
  },
  {
    id: "BK-2026-007",
    artist: "The Waves",
    venue: "Ziggo Dome",
    city: "Amsterdam",
    country: "NL",
    date: "2026-02-20",
    time: "20:00",
    fee: 18000,
    currency: "EUR",
    status: "negotiating",
    promoter: "MOJO",
    contract: "none",
  },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-emerald-500/20 text-emerald-500",
  pending: "bg-yellow-500/20 text-yellow-500",
  contract_sent: "bg-blue-500/20 text-blue-500",
  inquiry: "bg-purple-500/20 text-purple-500",
  negotiating: "bg-orange-500/20 text-orange-500",
  cancelled: "bg-red-500/20 text-red-500",
};

const statusLabels: Record<string, string> = {
  confirmed: "Confirmed",
  pending: "Pending",
  contract_sent: "Contract Sent",
  inquiry: "Inquiry",
  negotiating: "Negotiating",
  cancelled: "Cancelled",
};

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

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
            Bookings
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Manage all your booking requests and confirmed shows.
          </p>
        </div>
        <button className="btn-primary text-sm py-2.5">
          <Plus className="w-4 h-4" />
          New Booking
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Bookings", value: bookings.length, color: "text-white" },
          { label: "Confirmed", value: bookings.filter(b => b.status === "confirmed").length, color: "text-emerald-500" },
          { label: "Pending", value: bookings.filter(b => b.status === "pending" || b.status === "contract_sent").length, color: "text-yellow-500" },
          { label: "Inquiries", value: bookings.filter(b => b.status === "inquiry" || b.status === "negotiating").length, color: "text-purple-500" },
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
            placeholder="Search bookings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-[var(--vayo-accent)]"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white focus:outline-none focus:border-[var(--vayo-accent)]"
        >
          <option value="all">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="contract_sent">Contract Sent</option>
          <option value="inquiry">Inquiry</option>
          <option value="negotiating">Negotiating</option>
        </select>
      </div>

      {/* Bookings Table */}
      <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--vayo-gray-800)]">
                <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">ID</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Artist</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Venue</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Date</th>
                <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Fee</th>
                <th className="text-center p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Status</th>
                <th className="text-center p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Contract</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
                  <td className="p-4">
                    <span className="text-sm font-mono text-[var(--vayo-gray-400)]">{booking.id}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-semibold text-xs">
                        {booking.artist.charAt(0)}
                      </div>
                      <span className="font-medium text-white">{booking.artist}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="text-white">{booking.venue}</p>
                      <p className="text-sm text-[var(--vayo-gray-500)]">{booking.city}, {booking.country}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="text-white">{formatDate(booking.date)}</p>
                      <p className="text-sm text-[var(--vayo-gray-500)]">{booking.time}</p>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-[var(--vayo-accent)] font-semibold">
                      {formatCurrency(booking.fee, booking.currency)}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                      {statusLabels[booking.status]}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {booking.contract === "signed" ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                    ) : booking.contract === "sent" ? (
                      <Send className="w-5 h-5 text-blue-500 mx-auto" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-[var(--vayo-gray-500)] mx-auto" />
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
