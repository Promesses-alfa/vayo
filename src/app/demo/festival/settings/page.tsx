"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Music,
  Users,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  User,
  Bell,
  Shield,
  Calendar,
  Save,
  Zap,
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

export default function FestivalSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout
      type="festival"
      navItems={navItems}
      userName="Emma de Groot"
      userRole="Festival Director"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>Settings</h1>
        <p className="text-[var(--vayo-gray-400)]">Manage your festival settings.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-64">
          <nav className="space-y-1">
            {[
              { id: "profile", label: "Profile", icon: User },
              { id: "festival", label: "Festival Details", icon: Calendar },
              { id: "notifications", label: "Notifications", icon: Bell },
              { id: "security", label: "Security", icon: Shield },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                  activeTab === tab.id ? "bg-emerald-500 text-white" : "text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)]"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
          {activeTab === "profile" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">Profile Settings</h2>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold">EG</div>
                <button className="px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] text-white text-sm hover:bg-[var(--vayo-gray-700)]">Change Avatar</button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Name</label>
                  <input type="text" defaultValue="Emma de Groot" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Email</label>
                  <input type="email" defaultValue="emma@summersounds.nl" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Role</label>
                  <input type="text" defaultValue="Festival Director" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Phone</label>
                  <input type="tel" defaultValue="+31 20 1234 5678" className="input" />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="btn-primary bg-emerald-500 hover:bg-emerald-600">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "festival" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">Festival Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Festival Name</label>
                  <input type="text" defaultValue="Summer Sounds Festival" className="input" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Start Date</label>
                    <input type="date" defaultValue="2026-06-26" className="input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">End Date</label>
                    <input type="date" defaultValue="2026-06-28" className="input" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Location</label>
                  <input type="text" defaultValue="Flevopark, Amsterdam" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Expected Attendance</label>
                  <input type="number" defaultValue="50000" className="input" />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="btn-primary bg-emerald-500 hover:bg-emerald-600">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
