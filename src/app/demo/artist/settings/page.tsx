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
  User,
  Bell,
  Shield,
  Globe,
  Save,
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

export default function ArtistSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout
      type="artist"
      navItems={navItems}
      userName="DJ Storm"
      userRole="Artist"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
          Settings
        </h1>
        <p className="text-[var(--vayo-gray-400)]">Manage your profile and preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-64">
          <nav className="space-y-1">
            {[
              { id: "profile", label: "Profile", icon: User },
              { id: "notifications", label: "Notifications", icon: Bell },
              { id: "security", label: "Security", icon: Shield },
              { id: "preferences", label: "Preferences", icon: Globe },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                  activeTab === tab.id
                    ? "bg-purple-500 text-white"
                    : "text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)]"
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
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                  DS
                </div>
                <div>
                  <button className="px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] text-white text-sm hover:bg-[var(--vayo-gray-700)]">
                    Change Avatar
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Artist Name</label>
                  <input type="text" defaultValue="DJ Storm" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Real Name</label>
                  <input type="text" defaultValue="Marcus de Vries" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Email</label>
                  <input type="email" defaultValue="storm@djstorm.com" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Phone</label>
                  <input type="tel" defaultValue="+31 6 9876 5432" className="input" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">Bio</label>
                  <textarea rows={4} defaultValue="International DJ and producer based in Amsterdam. Specializing in techno and house music." className="input resize-none" />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="btn-primary bg-purple-500 hover:bg-purple-600">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">Notification Preferences</h2>
              <div className="space-y-6">
                {[
                  { label: "New booking confirmations", description: "Get notified when a show is confirmed" },
                  { label: "Document updates", description: "Notifications for new contracts and documents" },
                  { label: "Travel bookings", description: "Get notified when flights or hotels are booked" },
                  { label: "Payment received", description: "Get notified when payments are received" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-[var(--vayo-gray-800)] last:border-0">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-sm text-[var(--vayo-gray-500)]">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-[var(--vayo-gray-700)] rounded-full peer peer-checked:bg-purple-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
