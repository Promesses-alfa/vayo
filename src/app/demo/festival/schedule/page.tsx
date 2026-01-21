"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Music,
  Users,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/festival", icon: LayoutDashboard },
  { label: "Lineup", href: "/demo/festival/lineup", icon: Music },
  { label: "Artist Requests", href: "/demo/festival/requests", icon: Users },
  { label: "Schedule", href: "/demo/festival/schedule", icon: CalendarDays },
  { label: "Budget", href: "/demo/festival/budget", icon: DollarSign },
  { label: "Stages", href: "/demo/festival/stages", icon: MapPin },
  { label: "Messages", href: "/demo/festival/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/festival/settings", icon: Settings },
];

const schedule = {
  Friday: [
    { time: "18:00", stage: "Sunset Stage", artist: "Midnight Express", duration: "2h" },
    { time: "20:00", stage: "Bass Stage", artist: "Pulse", duration: "2h" },
    { time: "23:00", stage: "Main Stage", artist: "DJ Storm", duration: "2h" },
  ],
  Saturday: [
    { time: "17:00", stage: "Sunset Stage", artist: "Cosmic Rays", duration: "2h" },
    { time: "21:00", stage: "Bass Stage", artist: "Electric Soul", duration: "2h" },
    { time: "22:00", stage: "Main Stage", artist: "Aurora Beats", duration: "2h" },
  ],
  Sunday: [
    { time: "20:00", stage: "Bass Stage", artist: "Bass Mechanic", duration: "2h" },
    { time: "21:00", stage: "Main Stage", artist: "The Waves", duration: "2h" },
  ],
};

export default function FestivalSchedulePage() {
  return (
    <DashboardLayout
      type="festival"
      navItems={navItems}
      userName="Emma de Groot"
      userRole="Festival Director"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
          Festival Schedule
        </h1>
        <p className="text-[var(--vayo-gray-400)]">Plan and manage the festival timetable.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(schedule).map(([day, slots]) => (
          <div key={day} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
            <div className="p-4 border-b border-[var(--vayo-gray-800)] bg-gradient-to-r from-emerald-500/20 to-transparent">
              <h2 className="text-lg font-semibold text-white">{day}</h2>
            </div>
            <div className="p-4 space-y-3">
              {slots.map((slot, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[var(--vayo-gray-800)]/50 hover:bg-[var(--vayo-gray-800)] transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-400 font-medium">{slot.time}</span>
                    <span className="text-xs text-[var(--vayo-gray-500)]">{slot.duration}</span>
                  </div>
                  <p className="text-white font-medium">{slot.artist}</p>
                  <p className="text-sm text-[var(--vayo-gray-500)]">{slot.stage}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
