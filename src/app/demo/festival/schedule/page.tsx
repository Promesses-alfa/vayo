"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Music,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  Zap,
  Clock,
  PartyPopper,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/festival", icon: LayoutDashboard },
  { label: "Lineup Builder", href: "/demo/festival/lineup", icon: Music },
  { label: "Advancing", href: "/demo/festival/requests", icon: Zap, badge: 14 },
  { label: "Schedule", href: "/demo/festival/schedule", icon: CalendarDays },
  { label: "Budget", href: "/demo/festival/budget", icon: DollarSign },
  { label: "Stages", href: "/demo/festival/stages", icon: MapPin },
  { label: "Messages", href: "/demo/festival/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/festival/settings", icon: Settings },
];

const schedule = {
  Friday: [
    { time: "18:00", stage: "Sunset Stage", artist: "Midnight Express", duration: "2h", status: "confirmed", advancing: "completed" },
    { time: "20:00", stage: "Bass Stage", artist: "Pulse", duration: "2h", status: "confirmed", advancing: "completed" },
    { time: "23:00", stage: "Main Stage", artist: "DJ Storm", duration: "2h", status: "confirmed", advancing: "in_progress" },
  ],
  Saturday: [
    { time: "17:00", stage: "Sunset Stage", artist: "Cosmic Rays", duration: "2h", status: "pending", advancing: null },
    { time: "21:00", stage: "Bass Stage", artist: "Electric Soul", duration: "2h", status: "confirmed", advancing: "completed" },
    { time: "22:00", stage: "Main Stage", artist: "Aurora Beats", duration: "2h", status: "confirmed", advancing: "completed" },
  ],
  Sunday: [
    { time: "20:00", stage: "Bass Stage", artist: "Bass Mechanic", duration: "2h", status: "confirmed", advancing: "completed" },
    { time: "21:00", stage: "Main Stage", artist: "The Waves", duration: "2h", status: "confirmed", advancing: "action_needed" },
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Festival Schedule
          </h1>
          <p className="text-gray-500 font-medium">Complete timetable with advancing status for each act.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(schedule).map(([day, slots]) => (
          <div key={day} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 bg-[#a855f7]/5">
              <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>{day}</h2>
            </div>
            <div className="p-6 space-y-4">
              {slots.map((slot, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#a855f7]" />
                      <span className="text-sm font-bold text-gray-900">{slot.time}</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{slot.duration}</span>
                  </div>
                  <p className="text-base font-bold text-gray-900 mb-1">{slot.artist}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{slot.stage}</p>
                    {slot.advancing && (
                      <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                        slot.advancing === "completed" ? "bg-emerald-100 text-emerald-600" :
                        slot.advancing === "in_progress" ? "bg-amber-100 text-amber-600" :
                        "bg-red-100 text-red-600"
                      }`}>
                        {slot.advancing.replace('_', ' ')}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Advancing Integration Note */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <CalendarDays className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Live Advancing Status</h2>
          <p className="text-white/80 font-medium mb-8">
            Each slot shows real-time advancing progress. Green means complete, amber means in progress, 
            red means action needed. Status updates automatically as agencies fill out requirements.
          </p>
          <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View Advancing Dashboard
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
