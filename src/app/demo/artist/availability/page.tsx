"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Plane,
  MessageSquare,
  Settings,
  MapPin,
  Globe,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  Share2,
  Disc3,
  PenTool,
  BarChart3,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/artist", icon: LayoutDashboard },
  { label: "Schedule", href: "/demo/artist/schedule", icon: Calendar },
  { label: "Availability", href: "/demo/artist/availability", icon: Globe },
  { label: "Social Media", href: "/demo/artist/social", icon: Share2 },
  { label: "Releases", href: "/demo/artist/releases", icon: Disc3 },
  { label: "Contracts", href: "/demo/artist/contracts", icon: PenTool },
  { label: "Analytics", href: "/demo/artist/analytics", icon: BarChart3 },
  { label: "Documents", href: "/demo/artist/documents", icon: FileText },
  { label: "Earnings", href: "/demo/artist/earnings", icon: DollarSign },
  { label: "Travel", href: "/demo/artist/travel", icon: Plane },
  { label: "Messages", href: "/demo/artist/messages", icon: MessageSquare, badge: 2 },
  { label: "Settings", href: "/demo/artist/settings", icon: Settings },
];

// Generate calendar data
const generateCalendarData = () => {
  const data: Record<string, { status: string; note?: string }> = {};
  // Booked dates
  data["2026-01-24"] = { status: "booked", note: "Paradiso Amsterdam" };
  data["2026-02-02"] = { status: "booked", note: "Berghain Berlin" };
  data["2026-07-15"] = { status: "booked", note: "Summer Sounds Festival" };
  data["2026-06-20"] = { status: "booked", note: "Fusion Festival" };
  // Blocked dates
  data["2026-01-27"] = { status: "blocked", note: "Personal" };
  data["2026-02-10"] = { status: "blocked", note: "Studio session" };
  data["2026-02-11"] = { status: "blocked", note: "Studio session" };
  // Preferred regions for certain months
  return data;
};

const calendarData = generateCalendarData();

const regions = [
  { id: "europe", name: "Europe", available: true, preferred: true },
  { id: "north-america", name: "North America", available: true, preferred: false },
  { id: "south-america", name: "South America", available: true, preferred: false },
  { id: "asia", name: "Asia", available: false, preferred: false },
  { id: "australia", name: "Australia", available: true, preferred: false },
  { id: "middle-east", name: "Middle East", available: false, preferred: false },
];

const cities = [
  { name: "Amsterdam", country: "NL", lat: 52.37, lng: 4.89, status: "preferred" },
  { name: "Berlin", country: "DE", lat: 52.52, lng: 13.40, status: "preferred" },
  { name: "London", country: "UK", lat: 51.51, lng: -0.13, status: "available" },
  { name: "Paris", country: "FR", lat: 48.86, lng: 2.35, status: "available" },
  { name: "Ibiza", country: "ES", lat: 38.91, lng: 1.43, status: "preferred" },
  { name: "Barcelona", country: "ES", lat: 41.39, lng: 2.17, status: "available" },
  { name: "New York", country: "US", lat: 40.71, lng: -74.01, status: "available" },
  { name: "Los Angeles", country: "US", lat: 34.05, lng: -118.24, status: "available" },
  { name: "Tokyo", country: "JP", lat: 35.68, lng: 139.69, status: "unavailable" },
  { name: "Sydney", country: "AU", lat: -33.87, lng: 151.21, status: "available" },
];

export default function ArtistAvailabilityPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [view, setView] = useState<"calendar" | "map">("calendar");

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDateKey = (day: number) => {
    return `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const toggleDateStatus = (dateKey: string, currentStatus: string | undefined) => {
    // In real app, this would update the database
    console.log(`Toggle ${dateKey} from ${currentStatus}`);
  };

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
            Availability Manager
          </h1>
          <p className="text-gray-500 font-medium">Set your availability and preferred regions. Syncs with your agency in real-time.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => setView("calendar")}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                view === "calendar" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
              }`}
            >
              Calendar
            </button>
            <button
              onClick={() => setView("map")}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                view === "map" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
              }`}
            >
              Map View
            </button>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500" />
          <span className="text-sm font-bold text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#f97316]" />
          <span className="text-sm font-bold text-gray-600">Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500" />
          <span className="text-sm font-bold text-gray-600">Blocked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#a855f7]" />
          <span className="text-sm font-bold text-gray-600">Preferred</span>
        </div>
      </div>

      {view === "calendar" ? (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
              {/* Calendar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} className="p-2 hover:bg-gray-100 rounded-xl">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <h2 className="text-xl font-bold text-gray-900">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} className="p-2 hover:bg-gray-100 rounded-xl">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 bg-gray-50">
                {dayNames.map((day) => (
                  <div key={day} className="p-3 text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {/* Empty cells */}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-20 bg-gray-50/50 border border-gray-50" />
                ))}
                
                {/* Days */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateKey = getDateKey(day);
                  const dateInfo = calendarData[dateKey];
                  const status = dateInfo?.status || "available";
                  
                  return (
                    <div
                      key={day}
                      onClick={() => setSelectedDate(dateKey)}
                      className={`h-20 p-2 border border-gray-50 cursor-pointer transition-all hover:bg-gray-50 ${
                        selectedDate === dateKey ? "ring-2 ring-[#f97316]" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-bold text-gray-600">{day}</span>
                        <div className={`w-3 h-3 rounded-full ${
                          status === "booked" ? "bg-[#f97316]" :
                          status === "blocked" ? "bg-red-500" :
                          "bg-emerald-500"
                        }`} />
                      </div>
                      {dateInfo?.note && (
                        <p className="text-[10px] font-bold text-gray-400 mt-1 truncate">{dateInfo.note}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <button className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-center hover:bg-emerald-100 transition-all">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <span className="text-sm font-bold text-emerald-700">Mark Available</span>
              </button>
              <button className="p-4 bg-red-50 border border-red-100 rounded-2xl text-center hover:bg-red-100 transition-all">
                <XCircle className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <span className="text-sm font-bold text-red-700">Block Dates</span>
              </button>
              <button className="p-4 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-2xl text-center hover:bg-[#a855f7]/20 transition-all">
                <Clock className="w-6 h-6 text-[#a855f7] mx-auto mb-2" />
                <span className="text-sm font-bold text-[#a855f7]">Set Preferences</span>
              </button>
            </div>
          </div>

          {/* Regions Panel */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>Region Preferences</h3>
              <div className="space-y-3">
                {regions.map((region) => (
                  <div key={region.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Globe className={`w-4 h-4 ${region.preferred ? "text-[#a855f7]" : region.available ? "text-emerald-500" : "text-gray-400"}`} />
                      <span className="text-sm font-bold text-gray-700">{region.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {region.preferred && (
                        <span className="px-2 py-0.5 bg-[#a855f7]/10 text-[#a855f7] rounded-lg text-[10px] font-bold uppercase">Preferred</span>
                      )}
                      <button className={`w-10 h-6 rounded-full transition-all ${
                        region.available ? "bg-emerald-500" : "bg-gray-300"
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                          region.available ? "translate-x-5" : "translate-x-1"
                        }`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>Preferred Cities</h3>
              <div className="flex flex-wrap gap-2">
                {cities.filter(c => c.status === "preferred").map((city) => (
                  <span key={city.name} className="px-3 py-1.5 bg-[#a855f7]/10 text-[#a855f7] rounded-xl text-sm font-bold">
                    {city.name}
                  </span>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-sm font-bold text-[#f97316] hover:underline">
                + Add City Preference
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Map View */
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="relative h-[600px] bg-gray-100">
            {/* Simplified map representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full p-8">
                {/* World map placeholder with city markers */}
                <svg viewBox="0 0 800 400" className="w-full h-full opacity-20">
                  <path d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150 T650,150" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M100,200 Q150,150 200,200 T300,200 T400,200 T500,200 T600,200 T700,200" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                
                {/* City markers */}
                {cities.map((city) => (
                  <div
                    key={city.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${((city.lng + 180) / 360) * 100}%`,
                      top: `${((90 - city.lat) / 180) * 100}%`,
                    }}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-150 ${
                      city.status === "preferred" ? "bg-[#a855f7]" :
                      city.status === "available" ? "bg-emerald-500" :
                      "bg-red-500"
                    }`} />
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-gray-900 text-white px-2 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {city.name}, {city.country}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg p-4">
              <h4 className="text-sm font-bold text-gray-900 mb-3">Filter by Status</h4>
              <div className="space-y-2">
                {[
                  { status: "preferred", label: "Preferred", color: "bg-[#a855f7]" },
                  { status: "available", label: "Available", color: "bg-emerald-500" },
                  { status: "unavailable", label: "Unavailable", color: "bg-red-500" },
                ].map((filter) => (
                  <label key={filter.status} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                    <div className={`w-3 h-3 rounded-full ${filter.color}`} />
                    <span className="text-sm font-medium text-gray-600">{filter.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Agency Sync Banner */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Globe className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Real-Time Agency Sync</h2>
          <p className="text-white/80 font-medium mb-8">
            Your availability syncs instantly with your agency. When they receive booking requests, 
            they see your live calendar and preferences. When you block dates, they know immediately.
            No more double bookings.
          </p>
          <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View Sync Status
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
