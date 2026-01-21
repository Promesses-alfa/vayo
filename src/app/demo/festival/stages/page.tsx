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
  Plus,
  Edit,
  Volume2,
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

const stages = [
  { name: "Main Stage", capacity: 25000, acts: 12, budget: 1200000, sound: "L-Acoustics K2" },
  { name: "Bass Stage", capacity: 8000, acts: 8, budget: 400000, sound: "Funktion-One" },
  { name: "Sunset Stage", capacity: 5000, acts: 10, budget: 250000, sound: "d&b audiotechnik" },
  { name: "Discovery Stage", capacity: 2000, acts: 15, budget: 150000, sound: "Meyer Sound" },
];

export default function FestivalStagesPage() {
  return (
    <DashboardLayout
      type="festival"
      navItems={navItems}
      userName="Emma de Groot"
      userRole="Festival Director"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Stages
          </h1>
          <p className="text-[var(--vayo-gray-400)]">Manage festival stages and production.</p>
        </div>
        <button className="btn-primary text-sm py-2.5 bg-emerald-500 hover:bg-emerald-600">
          <Plus className="w-4 h-4" />
          Add Stage
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {stages.map((stage) => (
          <div key={stage.name} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">{stage.name}</h2>
                <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-[var(--vayo-gray-500)]">Capacity</p>
                  <p className="text-lg font-semibold text-white">{stage.capacity.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--vayo-gray-500)]">Booked Acts</p>
                  <p className="text-lg font-semibold text-white">{stage.acts}</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--vayo-gray-500)]">Budget</p>
                  <p className="text-lg font-semibold text-emerald-400">€{(stage.budget / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--vayo-gray-500)]">Sound System</p>
                  <p className="text-sm font-medium text-white">{stage.sound}</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-800)]/30">
              <div className="flex items-center gap-2 text-sm text-[var(--vayo-gray-400)]">
                <Volume2 className="w-4 h-4" />
                <span>Sound check scheduled for June 25</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
