"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
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
  Plus,
  MoreHorizontal,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Eye,
  Edit,
  ChevronRight,
  Filter,
  PartyPopper,
  Plug,
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
  { label: "Integrations", href: "/demo/agency/integrations", icon: Plug },
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
    festival: null,
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
    festival: null,
  },
  {
    id: "BK-2026-003",
    artist: "DJ Storm",
    venue: "Summer Sounds Festival",
    city: "Amsterdam",
    country: "NL",
    date: "2026-07-15",
    time: "23:00",
    fee: 45000,
    currency: "EUR",
    status: "confirmed",
    promoter: "Summer Sounds",
    contract: "signed",
    festival: "Summer Sounds 2026",
    advancingStatus: "in_progress",
  },
  {
    id: "BK-2026-004",
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
    festival: null,
  },
  {
    id: "BK-2026-005",
    artist: "Aurora Beats",
    venue: "Fusion Festival",
    city: "Berlin",
    country: "DE",
    date: "2026-06-20",
    time: "22:00",
    fee: 35000,
    currency: "EUR",
    status: "confirmed",
    promoter: "Fusion Festival",
    contract: "signed",
    festival: "Fusion Festival 2026",
    advancingStatus: "completed",
  },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-emerald-100 text-emerald-600",
  pending: "bg-orange-100 text-orange-600",
  contract_sent: "bg-blue-100 text-blue-600",
  inquiry: "bg-purple-100 text-purple-600",
  negotiating: "bg-amber-100 text-amber-600",
  cancelled: "bg-red-100 text-red-600",
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Bookings Management
          </h1>
          <p className="text-gray-500 font-medium">All shows across venues and festivals in one place.</p>
        </div>
        <button className="px-4 py-2 bg-[#00d4aa] rounded-xl text-sm font-bold text-white hover:bg-[#00b894] transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Booking
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Bookings", value: bookings.length, icon: Calendar, color: "text-[#00d4aa]" },
          { label: "Confirmed", value: bookings.filter(b => b.status === "confirmed").length, icon: CheckCircle2, color: "text-emerald-500" },
          { label: "Festival Shows", value: bookings.filter(b => b.festival).length, icon: PartyPopper, color: "text-[#a855f7]" },
          { label: "Advancing Active", value: bookings.filter(b => b.advancingStatus).length, icon: Send, color: "text-amber-500" },
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

      {/* Search & Filter */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by artist, venue, or booking ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00d4aa] font-medium"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-sm outline-none focus:border-[#00d4aa]"
          >
            <option value="all">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="contract_sent">Contract Sent</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Booking</th>
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Venue / Festival</th>
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Date & Time</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Fee</th>
                <th className="text-center p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                <th className="text-center p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Advancing</th>
                <th className="p-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50/50 transition-all group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 font-bold group-hover:bg-[#00d4aa] group-hover:text-white transition-all">
                        {booking.artist.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{booking.artist}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{booking.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      {booking.festival ? (
                        <PartyPopper className="w-4 h-4 text-[#a855f7]" />
                      ) : (
                        <MapPin className="w-4 h-4 text-gray-300" />
                      )}
                      <div>
                        <p className="text-sm font-bold text-gray-900">{booking.venue}</p>
                        {booking.festival && (
                          <p className="text-[10px] font-bold text-[#a855f7] uppercase tracking-tighter">{booking.festival}</p>
                        )}
                        <p className="text-xs text-gray-500 font-medium">{booking.city}, {booking.country}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="text-sm font-bold text-gray-900">{formatDate(booking.date)}</p>
                    <p className="text-xs text-gray-500 font-medium">{booking.time}</p>
                  </td>
                  <td className="p-6 text-right">
                    <span className="text-sm font-bold text-gray-900">{formatCurrency(booking.fee, booking.currency)}</span>
                  </td>
                  <td className="p-6 text-center">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${statusColors[booking.status]}`}>
                      {statusLabels[booking.status]}
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    {booking.advancingStatus ? (
                      <div className="flex flex-col items-center gap-1">
                        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                          booking.advancingStatus === "completed" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                        }`}>
                          {booking.advancingStatus.replace('_', ' ')}
                        </span>
                        <span className="text-[10px] font-bold text-[#00d4aa]">Auto-sync</span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-400 uppercase">N/A</span>
                    )}
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

      {/* Ecosystem Integration */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <PartyPopper className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Direct Festival Integration</h2>
          <p className="text-white/80 font-medium mb-8">
            When a festival confirms your artist, advancing requirements are automatically sent to you. 
            You fill them out once, and they sync to the artist's portal instantly. 
            No back-and-forth emails, no missed deadlines.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
              View Festival Connections
            </button>
            <button className="px-6 py-3 bg-white/20 text-white rounded-2xl font-bold text-sm hover:bg-white/30 transition-all">
              Setup Auto-Advancing
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
