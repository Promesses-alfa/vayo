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
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  PartyPopper,
  Globe,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/artist", icon: LayoutDashboard },
  { label: "Schedule", href: "/demo/artist/schedule", icon: Calendar },
  { label: "Availability", href: "/demo/artist/availability", icon: Globe },
  { label: "Documents", href: "/demo/artist/documents", icon: FileText },
  { label: "Earnings", href: "/demo/artist/earnings", icon: DollarSign },
  { label: "Travel", href: "/demo/artist/travel", icon: Plane },
  { label: "Messages", href: "/demo/artist/messages", icon: MessageSquare, badge: 2 },
  { label: "Settings", href: "/demo/artist/settings", icon: Settings },
];

const upcomingTrips = [
  {
    id: 1,
    show: "Berghain Berlin",
    date: "Feb 2, 2026",
    type: "venue",
    flights: [
      { from: "AMS", to: "TXL", date: "Feb 1", time: "14:30", airline: "KLM", status: "booked", confirmation: "KL1234" },
      { from: "TXL", to: "AMS", date: "Feb 3", time: "11:00", airline: "KLM", status: "booked", confirmation: "KL1235" },
    ],
    hotel: { name: "SO/Berlin Das Stue", checkin: "Feb 1", checkout: "Feb 3", status: "booked", confirmation: "HTL-2026-001" },
    transfer: { type: "Private car", status: "booked", driver: "John M.", phone: "+49 30 1234 5678" },
  },
  {
    id: 2,
    show: "Summer Sounds Festival",
    date: "Jul 15, 2026",
    type: "festival",
    flights: [
      { from: "AMS", to: "AMS", date: "Jul 14", time: "N/A", airline: "Local", status: "pending", confirmation: null },
    ],
    hotel: { name: "Festival Camping", checkin: "Jul 14", checkout: "Jul 16", status: "pending", confirmation: null },
    transfer: { type: "Festival Shuttle", status: "pending", driver: null, phone: null },
    advancingLinked: true,
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Travel & Logistics
          </h1>
          <p className="text-gray-500 font-medium">All travel details synced automatically from your agency.</p>
        </div>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Itinerary
        </button>
      </div>

      {/* Trips */}
      <div className="space-y-8">
        {upcomingTrips.map((trip) => (
          <div key={trip.id} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-50 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {trip.type === "festival" && (
                    <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center">
                      <PartyPopper className="w-6 h-6 text-[#a855f7]" />
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{trip.show}</h2>
                    <p className="text-sm font-bold text-gray-500">{trip.date}</p>
                  </div>
                  {trip.advancingLinked && (
                    <span className="px-3 py-1 bg-[#a855f7]/10 text-[#a855f7] rounded-lg text-[10px] font-bold uppercase">
                      Advancing Linked
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {trip.flights.every(f => f.status === "booked") && trip.hotel.status === "booked" && trip.transfer.status === "booked" ? (
                    <span className="flex items-center gap-2 text-emerald-600 text-sm font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                      Complete
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-amber-600 text-sm font-bold">
                      <AlertCircle className="w-5 h-5" />
                      Pending
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-6">
              {/* Flights */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Plane className="w-5 h-5 text-[#f97316]" />
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Flights</h3>
                </div>
                <div className="space-y-3">
                  {trip.flights.map((flight, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-gray-900">
                          {flight.from} → {flight.to}
                        </span>
                        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                          flight.status === "booked" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                        }`}>
                          {flight.status}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-gray-500 mb-1">
                        {flight.date} at {flight.time} • {flight.airline}
                      </p>
                      {flight.confirmation && (
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Conf: {flight.confirmation}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hotel */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Hotel className="w-5 h-5 text-[#f97316]" />
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Accommodation</h3>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900">{trip.hotel.name}</span>
                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                      trip.hotel.status === "booked" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                    }`}>
                      {trip.hotel.status}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-gray-500 mb-1">
                    Check-in: {trip.hotel.checkin}
                  </p>
                  <p className="text-xs font-bold text-gray-500 mb-1">
                    Check-out: {trip.hotel.checkout}
                  </p>
                  {trip.hotel.confirmation && (
                    <p className="text-[10px] font-bold text-gray-400 uppercase mt-2">Conf: {trip.hotel.confirmation}</p>
                  )}
                </div>
              </div>

              {/* Transfer */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-[#f97316]" />
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Transfer</h3>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900">{trip.transfer.type}</span>
                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                      trip.transfer.status === "booked" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                    }`}>
                      {trip.transfer.status}
                    </span>
                  </div>
                  {trip.transfer.driver && (
                    <>
                      <p className="text-xs font-bold text-gray-500 mb-1">Driver: {trip.transfer.driver}</p>
                      <p className="text-xs font-bold text-gray-500">{trip.transfer.phone}</p>
                    </>
                  )}
                  <p className="text-xs font-bold text-gray-400 mt-2">Airport ↔ Hotel ↔ Venue</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-gray-50 bg-gray-50">
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
                  <Download className="w-4 h-4" />
                  Download All
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
                  <MapPin className="w-4 h-4" />
                  View Map
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
                  <ChevronRight className="w-4 h-4" />
                  Full Itinerary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Agency Sync Banner */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Plane className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Auto-Synced Travel</h2>
          <p className="text-white/80 font-medium mb-8">
            When your agency books flights or hotels, they appear here instantly. 
            Festival advancing includes travel requirements automatically. 
            No need to check emails or ask your agent — everything is here.
          </p>
          <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View Sync Status
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
