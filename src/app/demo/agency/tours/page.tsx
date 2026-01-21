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
  Plus,
  MapPin,
  Plane,
  Hotel,
  Car,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  ChevronRight,
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

const tours = [
  {
    id: "TOUR-001",
    name: "The Waves - European Tour 2026",
    artist: "The Waves",
    status: "active",
    startDate: "2026-01-28",
    endDate: "2026-03-15",
    stops: [
      { city: "London", venue: "O2 Arena", date: "2026-01-28", status: "confirmed" },
      { city: "Paris", venue: "Accor Arena", date: "2026-02-01", status: "confirmed" },
      { city: "Berlin", venue: "Mercedes-Benz Arena", date: "2026-02-05", status: "confirmed" },
      { city: "Amsterdam", venue: "Ziggo Dome", date: "2026-02-20", status: "pending" },
      { city: "Brussels", venue: "Palais 12", date: "2026-02-25", status: "confirmed" },
      { city: "Milan", venue: "Mediolanum Forum", date: "2026-03-01", status: "inquiry" },
    ],
    budget: 450000,
    spent: 125000,
  },
  {
    id: "TOUR-002",
    name: "DJ Storm - Club Tour",
    artist: "DJ Storm",
    status: "planning",
    startDate: "2026-03-01",
    endDate: "2026-04-30",
    stops: [
      { city: "Amsterdam", venue: "Paradiso", date: "2026-03-01", status: "confirmed" },
      { city: "London", venue: "Fabric", date: "2026-03-08", status: "pending" },
      { city: "Berlin", venue: "Berghain", date: "2026-03-15", status: "inquiry" },
      { city: "Ibiza", venue: "Amnesia", date: "2026-04-15", status: "inquiry" },
    ],
    budget: 120000,
    spent: 15000,
  },
  {
    id: "TOUR-003",
    name: "Aurora Beats - Festival Season",
    artist: "Aurora Beats",
    status: "completed",
    startDate: "2025-06-01",
    endDate: "2025-09-30",
    stops: [
      { city: "Barcelona", venue: "Primavera Sound", date: "2025-06-05", status: "completed" },
      { city: "Amsterdam", venue: "Awakenings", date: "2025-06-28", status: "completed" },
      { city: "Belgium", venue: "Tomorrowland", date: "2025-07-20", status: "completed" },
      { city: "Croatia", venue: "Outlook", date: "2025-09-15", status: "completed" },
    ],
    budget: 85000,
    spent: 82000,
  },
];

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/20 text-emerald-500",
  planning: "bg-blue-500/20 text-blue-500",
  completed: "bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]",
  cancelled: "bg-red-500/20 text-red-500",
};

const stopStatusColors: Record<string, string> = {
  confirmed: "bg-emerald-500",
  pending: "bg-yellow-500",
  inquiry: "bg-purple-500",
  completed: "bg-[var(--vayo-gray-600)]",
};

export default function ToursPage() {
  const [expandedTour, setExpandedTour] = useState<string | null>("TOUR-001");

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
            Tours
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Plan and manage artist tours and logistics.
          </p>
        </div>
        <button className="btn-primary text-sm py-2.5">
          <Plus className="w-4 h-4" />
          Create Tour
        </button>
      </div>

      {/* Tours List */}
      <div className="space-y-4">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden"
          >
            {/* Tour Header */}
            <div
              className="flex items-center justify-between p-5 cursor-pointer hover:bg-[var(--vayo-gray-800)]/50 transition-colors"
              onClick={() => setExpandedTour(expandedTour === tour.id ? null : tour.id)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold">
                  {tour.artist.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-white font-semibold">{tour.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[tour.status]}`}>
                      {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--vayo-gray-500)]">
                    {new Date(tour.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} - {new Date(tour.endDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} • {tour.stops.length} stops
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden md:block text-right">
                  <p className="text-sm text-[var(--vayo-gray-400)]">Budget</p>
                  <p className="text-white font-semibold">€{tour.budget.toLocaleString()}</p>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-sm text-[var(--vayo-gray-400)]">Spent</p>
                  <p className={`font-semibold ${tour.spent > tour.budget * 0.8 ? "text-red-500" : "text-emerald-500"}`}>
                    €{tour.spent.toLocaleString()}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 text-[var(--vayo-gray-400)] transition-transform ${expandedTour === tour.id ? "rotate-90" : ""}`} />
              </div>
            </div>

            {/* Expanded Content */}
            {expandedTour === tour.id && (
              <div className="border-t border-[var(--vayo-gray-800)]">
                {/* Progress Bar */}
                <div className="p-5 border-b border-[var(--vayo-gray-800)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--vayo-gray-400)]">Budget Progress</span>
                    <span className="text-sm text-[var(--vayo-gray-400)]">
                      {Math.round((tour.spent / tour.budget) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--vayo-gray-800)] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${tour.spent > tour.budget * 0.8 ? "bg-red-500" : "bg-[var(--vayo-accent)]"}`}
                      style={{ width: `${Math.min((tour.spent / tour.budget) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Tour Stops */}
                <div className="p-5">
                  <h4 className="text-sm font-medium text-[var(--vayo-gray-400)] mb-4">Tour Stops</h4>
                  <div className="space-y-3">
                    {tour.stops.map((stop, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl bg-[var(--vayo-gray-800)]/50 hover:bg-[var(--vayo-gray-800)] transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className={`w-3 h-3 rounded-full ${stopStatusColors[stop.status]}`} />
                            {idx < tour.stops.length - 1 && (
                              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[var(--vayo-gray-700)]" />
                            )}
                          </div>
                          <div>
                            <p className="text-white font-medium">{stop.venue}</p>
                            <div className="flex items-center gap-2 text-sm text-[var(--vayo-gray-500)]">
                              <MapPin className="w-3 h-3" />
                              {stop.city}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-[var(--vayo-gray-300)]">
                            {new Date(stop.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            stop.status === "confirmed" ? "bg-emerald-500/20 text-emerald-500" :
                            stop.status === "pending" ? "bg-yellow-500/20 text-yellow-500" :
                            stop.status === "completed" ? "bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]" :
                            "bg-purple-500/20 text-purple-500"
                          }`}>
                            {stop.status.charAt(0).toUpperCase() + stop.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="p-5 border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-800)]/30">
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-700)] text-sm text-white transition-colors">
                      <Plane className="w-4 h-4" />
                      Flights
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-700)] text-sm text-white transition-colors">
                      <Hotel className="w-4 h-4" />
                      Hotels
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-700)] text-sm text-white transition-colors">
                      <Car className="w-4 h-4" />
                      Transport
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-700)] text-sm text-white transition-colors">
                      <FileText className="w-4 h-4" />
                      Documents
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
