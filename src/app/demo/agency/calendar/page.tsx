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
  ChevronLeft,
  ChevronRight,
  Plus,
  PartyPopper,
  MapPin,
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

const events = [
  { date: "2026-01-24", artist: "DJ Storm", venue: "Paradiso", status: "confirmed", type: "venue" },
  { date: "2026-01-28", artist: "The Waves", venue: "O2 Arena", status: "pending", type: "venue" },
  { date: "2026-02-02", artist: "Aurora Beats", venue: "Berghain", status: "confirmed", type: "venue" },
  { date: "2026-07-15", artist: "DJ Storm", venue: "Summer Sounds Festival", status: "confirmed", type: "festival" },
  { date: "2026-02-05", artist: "Neon Dreams", venue: "Fabric", status: "contract_sent", type: "venue" },
  { date: "2026-02-08", artist: "Pulse", venue: "Rex Club", status: "confirmed", type: "venue" },
  { date: "2026-06-20", artist: "Aurora Beats", venue: "Fusion Festival", status: "confirmed", type: "festival" },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-emerald-500",
  pending: "bg-orange-500",
  contract_sent: "bg-blue-500",
  inquiry: "bg-purple-500",
  negotiating: "bg-amber-500",
};

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1));
  const [view, setView] = useState<"month" | "week" | "list">("month");

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(e => e.date === dateStr);
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalCells = 42;

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 md:h-32 bg-gray-50 border border-gray-100" />
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day);
      const isToday = day === 21 && currentDate.getMonth() === 0 && currentDate.getFullYear() === 2026;

      days.push(
        <div
          key={day}
          className={`h-24 md:h-32 bg-white border border-gray-100 p-2 hover:bg-gray-50 transition-colors cursor-pointer ${
            isToday ? "ring-2 ring-[#00d4aa]" : ""
          }`}
        >
          <span className={`text-sm font-bold ${isToday ? "text-[#00d4aa]" : "text-gray-400"}`}>
            {day}
          </span>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map((event, idx) => (
              <div
                key={idx}
                className={`text-[10px] px-2 py-0.5 rounded truncate ${statusColors[event.status]} text-white font-bold`}
              >
                <span className="hidden md:inline">{event.artist}</span>
                <span className="md:hidden">{event.artist.charAt(0)}</span>
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-[10px] text-gray-400 font-bold">
                +{dayEvents.length - 2}
              </div>
            )}
          </div>
        </div>
      );
    }

    const remainingCells = totalCells - (firstDayOfMonth + daysInMonth);
    for (let i = 0; i < remainingCells; i++) {
      days.push(
        <div key={`empty-end-${i}`} className="h-24 md:h-32 bg-gray-50 border border-gray-100" />
      );
    }

    return days;
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
            Booking Calendar
          </h1>
          <p className="text-gray-500 font-medium">All shows and festivals in one unified calendar view.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-gray-100 p-1 rounded-2xl">
            {["month", "week", "list"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v as any)}
                className={`px-4 py-2 text-xs font-bold capitalize rounded-xl transition-all ${
                  view === v
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 bg-[#00d4aa] rounded-xl text-sm font-bold text-white hover:bg-[#00b894] transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Event
          </button>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={prevMonth}
            className="p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={() => setCurrentDate(new Date(2026, 0, 1))}
          className="px-4 py-2 text-sm font-bold text-[#00d4aa] hover:underline"
        >
          Today
        </button>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
        {[
          { status: "confirmed", label: "Confirmed" },
          { status: "pending", label: "Pending" },
          { status: "contract_sent", label: "Contract Sent" },
          { status: "inquiry", label: "Inquiry" },
          { status: "negotiating", label: "Negotiating" },
        ].map((item) => (
          <div key={item.status} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${statusColors[item.status]}`} />
            <span className="text-sm font-bold text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      {view === "month" && (
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          {/* Day Headers */}
          <div className="grid grid-cols-7 bg-gray-50">
            {dayNames.map((day) => (
              <div
                key={day}
                className="p-4 text-center text-sm font-bold text-gray-400 uppercase tracking-wider border-r border-gray-100 last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>
          {/* Calendar Days */}
          <div className="grid grid-cols-7">
            {renderCalendarDays()}
          </div>
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-50">
            {events.map((event, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors group">
                <div className="flex items-center gap-4">
                  {event.type === "festival" ? (
                    <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center">
                      <PartyPopper className="w-5 h-5 text-[#a855f7]" />
                    </div>
                  ) : (
                    <div className={`w-3 h-3 rounded-full ${statusColors[event.status]}`} />
                  )}
                  <div>
                    <p className="text-sm font-bold text-gray-900">{event.artist}</p>
                    <p className="text-xs text-gray-500 font-medium">{event.venue}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{event.status.replace("_", " ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
