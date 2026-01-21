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
  ChevronRight,
  CheckCircle2,
  Clock,
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
    name: "DJ Storm - Festival Season",
    artist: "DJ Storm",
    status: "active",
    startDate: "2026-06-01",
    endDate: "2026-09-30",
    stops: [
      { city: "Amsterdam", venue: "Summer Sounds Festival", date: "2026-07-15", status: "confirmed", festival: true },
      { city: "Berlin", venue: "Fusion Festival", date: "2026-06-20", status: "confirmed", festival: true },
      { city: "Ibiza", venue: "Amnesia", date: "2026-08-15", status: "pending" },
    ],
    budget: 180000,
    spent: 45000,
  },
];

const statusColors: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-600",
  planning: "bg-blue-100 text-blue-600",
  completed: "bg-gray-100 text-gray-600",
  cancelled: "bg-red-100 text-red-600",
};

const stopStatusColors: Record<string, string> = {
  confirmed: "bg-emerald-500",
  pending: "bg-orange-500",
  inquiry: "bg-purple-500",
  completed: "bg-gray-400",
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Tour Management
          </h1>
          <p className="text-gray-500 font-medium">Plan multi-city tours with integrated logistics and advancing.</p>
        </div>
        <button className="px-4 py-2 bg-[#00d4aa] rounded-xl text-sm font-bold text-white hover:bg-[#00b894] transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Tour
        </button>
      </div>

      {/* Tours List */}
      <div className="space-y-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden"
          >
            {/* Tour Header */}
            <div
              className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 transition-colors border-b border-gray-50"
              onClick={() => setExpandedTour(expandedTour === tour.id ? null : tour.id)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-900 font-bold">
                  {tour.artist.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{tour.name}</h3>
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${statusColors[tour.status]}`}>
                      {tour.status}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-500">
                    {new Date(tour.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} - {new Date(tour.endDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} • {tour.stops.length} stops
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden md:block text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Budget</p>
                  <p className="text-sm font-bold text-gray-900">€{tour.budget.toLocaleString()}</p>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Spent</p>
                  <p className={`text-sm font-bold ${tour.spent > tour.budget * 0.8 ? "text-red-500" : "text-emerald-500"}`}>
                    €{tour.spent.toLocaleString()}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${expandedTour === tour.id ? "rotate-90" : ""}`} />
              </div>
            </div>

            {/* Expanded Content */}
            {expandedTour === tour.id && (
              <div className="border-t border-gray-50">
                {/* Progress Bar */}
                <div className="p-6 border-b border-gray-50 bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Budget Progress</span>
                    <span className="text-xs font-bold text-gray-600">
                      {Math.round((tour.spent / tour.budget) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${tour.spent > tour.budget * 0.8 ? "bg-red-500" : "bg-[#00d4aa]"}`}
                      style={{ width: `${Math.min((tour.spent / tour.budget) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Tour Stops */}
                <div className="p-6">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tour Stops</h4>
                  <div className="space-y-3">
                    {tour.stops.map((stop, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className={`w-3 h-3 rounded-full ${stopStatusColors[stop.status]}`} />
                            {idx < tour.stops.length - 1 && (
                              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-200" />
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            {stop.festival && (
                              <div className="w-8 h-8 rounded-xl bg-[#a855f7]/10 flex items-center justify-center">
                                <PartyPopper className="w-4 h-4 text-[#a855f7]" />
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-bold text-gray-900">{stop.venue}</p>
                              <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                                <MapPin className="w-3 h-3" />
                                {stop.city}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-bold text-gray-600">
                            {new Date(stop.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                          </span>
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                            stop.status === "confirmed" ? "bg-emerald-100 text-emerald-600" :
                            stop.status === "pending" ? "bg-orange-100 text-orange-600" :
                            "bg-purple-100 text-purple-600"
                          }`}>
                            {stop.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="p-6 border-t border-gray-50 bg-gray-50">
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
                      <Plane className="w-4 h-4" />
                      Flights
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
                      <Hotel className="w-4 h-4" />
                      Hotels
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
                      <Car className="w-4 h-4" />
                      Transport
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
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

function PartyPopper({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.8 11.3 2 22l10.7-3.79"/>
      <path d="M4 3h.01"/>
      <path d="M22 8h.01"/>
      <path d="M15 2h.01"/>
      <path d="M22 20h.01"/>
      <path d="M22 2a2 2 0 0 0-2 2v18a2 2 0 0 1-2-2V4a2 2 0 0 0-2-2Z"/>
      <path d="M11.2 11.2 13 13l-1.8-1.8Z"/>
    </svg>
  );
}
