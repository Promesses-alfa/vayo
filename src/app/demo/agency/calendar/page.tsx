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
  Filter,
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

const events = [
  { date: "2026-01-24", artist: "DJ Storm", venue: "Paradiso", status: "confirmed" },
  { date: "2026-01-28", artist: "The Waves", venue: "O2 Arena", status: "pending" },
  { date: "2026-02-02", artist: "Aurora Beats", venue: "Berghain", status: "confirmed" },
  { date: "2026-02-05", artist: "Neon Dreams", venue: "Fabric", status: "contract_sent" },
  { date: "2026-02-08", artist: "Pulse", venue: "Rex Club", status: "confirmed" },
  { date: "2026-02-14", artist: "DJ Storm", venue: "Warehouse Project", status: "inquiry" },
  { date: "2026-02-20", artist: "The Waves", venue: "Ziggo Dome", status: "negotiating" },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-emerald-500",
  pending: "bg-yellow-500",
  contract_sent: "bg-blue-500",
  inquiry: "bg-purple-500",
  negotiating: "bg-orange-500",
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
    const totalCells = 42; // 6 weeks

    // Empty cells before first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 md:h-32 bg-[var(--vayo-gray-900)]/30 border border-[var(--vayo-gray-800)]/50" />
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day);
      const isToday = day === 21 && currentDate.getMonth() === 0 && currentDate.getFullYear() === 2026;

      days.push(
        <div
          key={day}
          className={`h-24 md:h-32 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] p-2 hover:bg-[var(--vayo-gray-800)]/50 transition-colors cursor-pointer ${
            isToday ? "ring-2 ring-[var(--vayo-accent)]" : ""
          }`}
        >
          <span className={`text-sm font-medium ${isToday ? "text-[var(--vayo-accent)]" : "text-[var(--vayo-gray-400)]"}`}>
            {day}
          </span>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map((event, idx) => (
              <div
                key={idx}
                className={`text-xs px-2 py-1 rounded truncate ${statusColors[event.status]} text-white`}
              >
                <span className="hidden md:inline">{event.artist} @ {event.venue}</span>
                <span className="md:hidden">{event.artist}</span>
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-[var(--vayo-gray-500)]">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    // Fill remaining cells
    const remainingCells = totalCells - (firstDayOfMonth + daysInMonth);
    for (let i = 0; i < remainingCells; i++) {
      days.push(
        <div key={`empty-end-${i}`} className="h-24 md:h-32 bg-[var(--vayo-gray-900)]/30 border border-[var(--vayo-gray-800)]/50" />
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
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Calendar
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            View and manage all shows and events.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex rounded-xl border border-[var(--vayo-gray-800)] overflow-hidden">
            {["month", "week", "list"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v as any)}
                className={`px-4 py-2 text-sm capitalize ${
                  view === v
                    ? "bg-[var(--vayo-accent)] text-white"
                    : "bg-[var(--vayo-gray-900)] text-[var(--vayo-gray-400)] hover:text-white"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <button className="btn-primary text-sm py-2">
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
            className="p-2 rounded-lg hover:bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-400)]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold text-white">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg hover:bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-400)]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={() => setCurrentDate(new Date(2026, 0, 1))}
          className="px-4 py-2 text-sm text-[var(--vayo-accent)] hover:underline"
        >
          Today
        </button>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {[
          { status: "confirmed", label: "Confirmed" },
          { status: "pending", label: "Pending" },
          { status: "contract_sent", label: "Contract Sent" },
          { status: "inquiry", label: "Inquiry" },
          { status: "negotiating", label: "Negotiating" },
        ].map((item) => (
          <div key={item.status} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${statusColors[item.status]}`} />
            <span className="text-sm text-[var(--vayo-gray-400)]">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      {view === "month" && (
        <div className="rounded-xl overflow-hidden">
          {/* Day Headers */}
          <div className="grid grid-cols-7">
            {dayNames.map((day) => (
              <div
                key={day}
                className="p-3 text-center text-sm font-medium text-[var(--vayo-gray-400)] bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)]"
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
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <div className="divide-y divide-[var(--vayo-gray-800)]">
            {events.map((event, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${statusColors[event.status]}`} />
                  <div>
                    <p className="text-white font-medium">{event.artist}</p>
                    <p className="text-sm text-[var(--vayo-gray-500)]">{event.venue}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white">{new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                  <p className="text-sm text-[var(--vayo-gray-500)] capitalize">{event.status.replace("_", " ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
