"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Disc3,
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Settings,
  User,
  Bell,
  Shield,
  Save,
  Share2,
  PenTool,
  BarChart3,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Social Media", href: "/demo/label/social", icon: Share2 },
  { label: "Contracts", href: "/demo/label/contracts", icon: PenTool },
  { label: "Analytics", href: "/demo/label/analytics", icon: BarChart3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare, badge: 4 },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

export default function LabelSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>Settings</h1>
        <p className="text-[var(--vayo-gray-400)]">Manage your label settings.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-64">
          <nav className="space-y-1">
            {[
              { id: "profile", label: "Profile", icon: User },
              { id: "notifications", label: "Notifications", icon: Bell },
              { id: "security", label: "Security", icon: Shield },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                  activeTab === tab.id ? "bg-cyan-500 text-white" : "text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)]"
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
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">TR</div>
                <button className="px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] text-white text-sm hover:bg-[var(--vayo-gray-700)]">Change Avatar</button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Name</label>
                  <input type="text" defaultValue="Thomas Richter" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Email</label>
                  <input type="email" defaultValue="thomas@vayorecords.com" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Label Name</label>
                  <input type="text" defaultValue="VAYO Records" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Phone</label>
                  <input type="tel" defaultValue="+49 30 1234 5678" className="input" />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="btn-primary bg-cyan-500 hover:bg-cyan-600">
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
