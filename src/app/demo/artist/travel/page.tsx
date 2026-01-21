"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Plane,
  MessageSquare,
  Settings,
  MapPin,
  Clock,
  Hotel,
  Car,
  Download,
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

const upcomingTrips = [
  {
    id: 1,
    show: "Berghain Berlin",
    date: "Feb 2, 2026",
    flights: [
      { from: "AMS", to: "TXL", date: "Feb 1", time: "14:30", airline: "KLM", status: "booked" },
      { from: "TXL", to: "AMS", date: "Feb 3", time: "11:00", airline: "KLM", status: "booked" },
    ],
    hotel: { name: "SO/Berlin Das Stue", checkin: "Feb 1", checkout: "Feb 3", status: "booked" },
    transfer: { type: "Private car", status: "booked" },
  },
  {
    id: 2,
    show: "Warehouse Project Manchester",
    date: "Feb 14, 2026",
    flights: [
      { from: "AMS", to: "MAN", date: "Feb 14", time: "10:00", airline: "easyJet", status: "pending" },
      { from: "MAN", to: "AMS", date: "Feb 15", time: "09:30", airline: "easyJet", status: "pending" },
    ],
    hotel: { name: "Hotel Gotham", checkin: "Feb 14", checkout: "Feb 15", status: "pending" },
    transfer: { type: "TBD", status: "pending" },
  },
];

export default function ArtistTravelPage() {
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
            Travel
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            View flights, hotels, and transfers for your shows.
          </p>
        </div>
      </div>

      {/* Trips */}
      <div className="space-y-6">
        {upcomingTrips.map((trip) => (
          <div key={trip.id} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
            {/* Header */}
            <div className="p-5 border-b border-[var(--vayo-gray-800)] bg-gradient-to-r from-purple-500/10 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">{trip.show}</h2>
                  <p className="text-[var(--vayo-gray-400)]">{trip.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  {trip.flights.every(f => f.status === "booked") ? (
                    <span className="flex items-center gap-2 text-emerald-500 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      All Booked
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-yellow-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Pending Items
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-5 grid md:grid-cols-3 gap-6">
              {/* Flights */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Plane className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-semibold">Flights</h3>
                </div>
                <div className="space-y-3">
                  {trip.flights.map((flight, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[var(--vayo-gray-800)]/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">
                          {flight.from} → {flight.to}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          flight.status === "booked" ? "bg-emerald-500/20 text-emerald-500" : "bg-yellow-500/20 text-yellow-500"
                        }`}>
                          {flight.status}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--vayo-gray-400)]">
                        {flight.date} at {flight.time} • {flight.airline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hotel */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Hotel className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-semibold">Hotel</h3>
                </div>
                <div className="p-3 rounded-xl bg-[var(--vayo-gray-800)]/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{trip.hotel.name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      trip.hotel.status === "booked" ? "bg-emerald-500/20 text-emerald-500" : "bg-yellow-500/20 text-yellow-500"
                    }`}>
                      {trip.hotel.status}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--vayo-gray-400)]">
                    Check-in: {trip.hotel.checkin}
                  </p>
                  <p className="text-sm text-[var(--vayo-gray-400)]">
                    Check-out: {trip.hotel.checkout}
                  </p>
                </div>
              </div>

              {/* Transfer */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-semibold">Transfer</h3>
                </div>
                <div className="p-3 rounded-xl bg-[var(--vayo-gray-800)]/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{trip.transfer.type}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      trip.transfer.status === "booked" ? "bg-emerald-500/20 text-emerald-500" : "bg-yellow-500/20 text-yellow-500"
                    }`}>
                      {trip.transfer.status}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--vayo-gray-400)]">
                    Airport ↔ Hotel ↔ Venue
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-800)]/30">
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm transition-colors">
                  <Download className="w-4 h-4" />
                  Download All Documents
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-700)] text-white text-sm transition-colors">
                  <MapPin className="w-4 h-4" />
                  View Itinerary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
