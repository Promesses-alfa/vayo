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
  Plus,
  Edit,
  Volume2,
  Users,
  CheckCircle2,
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

const stages = [
  { name: "Main Stage", capacity: 25000, acts: 12, budget: 1200000, spent: 950000, sound: "L-Acoustics K2", advancingComplete: 10 },
  { name: "Bass Stage", capacity: 8000, acts: 8, budget: 400000, spent: 280000, sound: "Funktion-One", advancingComplete: 6 },
  { name: "Sunset Stage", capacity: 5000, acts: 10, budget: 250000, spent: 150000, sound: "d&b audiotechnik", advancingComplete: 8 },
  { name: "Discovery Stage", capacity: 2000, acts: 15, budget: 150000, spent: 70000, sound: "Meyer Sound", advancingComplete: 12 },
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
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Stage Management
          </h1>
          <p className="text-gray-500 font-medium">Configure stages, capacity, and production requirements.</p>
        </div>
        <button className="px-4 py-2 bg-[#a855f7] rounded-xl text-sm font-bold text-white hover:bg-[#9333ea] transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Stage
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {stages.map((stage) => {
          const budgetPercentage = (stage.spent / stage.budget) * 100;
          const advancingPercentage = (stage.advancingComplete / stage.acts) * 100;
          
          return (
            <div key={stage.name} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>{stage.name}</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Capacity</p>
                    <p className="text-lg font-bold text-gray-900">{stage.capacity.toLocaleString()}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Booked Acts</p>
                    <p className="text-lg font-bold text-gray-900">{stage.acts}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Budget Used</p>
                    <p className="text-lg font-bold text-[#a855f7]">€{(stage.spent / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Sound System</p>
                    <p className="text-sm font-bold text-gray-900">{stage.sound}</p>
                  </div>
                </div>
                
                {/* Budget Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Budget Progress</span>
                    <span className="text-[10px] font-bold text-gray-500">{budgetPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#a855f7] rounded-full" style={{ width: `${budgetPercentage}%` }} />
                  </div>
                </div>

                {/* Advancing Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Advancing Complete</span>
                    <span className="text-[10px] font-bold text-emerald-600">{stage.advancingComplete} / {stage.acts}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${advancingPercentage}%` }} />
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-50 bg-gray-50">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                  <Volume2 className="w-4 h-4" />
                  <span>Sound check scheduled for June 25</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
