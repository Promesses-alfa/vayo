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
  User,
  Building,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Palette,
  Key,
  Mail,
  Save,
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

const settingsTabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "agency", label: "Agency", icon: Building },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "integrations", label: "Integrations", icon: Globe },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout
      type="agency"
      navItems={navItems}
      userName="Sarah van der Berg"
      userRole="Agency Director"
    >
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
          Settings
        </h1>
        <p className="text-[var(--vayo-gray-400)]">
          Manage your account and agency preferences.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                  activeTab === tab.id
                    ? "bg-[var(--vayo-accent)] text-white"
                    : "text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)] hover:text-white"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
          {activeTab === "profile" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">Profile Settings</h2>
              
              {/* Avatar */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-2xl font-bold">
                  SB
                </div>
                <div>
                  <button className="px-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] text-white text-sm hover:bg-[var(--vayo-gray-700)] transition-colors">
                    Change Avatar
                  </button>
                  <p className="text-sm text-[var(--vayo-gray-500)] mt-2">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Sarah"
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="van der Berg"
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="sarah@nightlifeagency.nl"
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+31 6 1234 5678"
                    className="input"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="Agency Director at Nightlife Agency Amsterdam. Specializing in electronic music and DJ bookings."
                    className="input resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="btn-primary">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "agency" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">Agency Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                    Agency Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Nightlife Agency Amsterdam"
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    defaultValue="https://nightlifeagency.nl"
                    className="input"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                      Default Currency
                    </label>
                    <select className="input">
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>USD ($)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                      Timezone
                    </label>
                    <select className="input">
                      <option>Europe/Amsterdam (CET)</option>
                      <option>Europe/London (GMT)</option>
                      <option>America/New_York (EST)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                    VAT Number
                  </label>
                  <input
                    type="text"
                    defaultValue="NL123456789B01"
                    className="input"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="btn-primary">
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
                  { label: "New booking requests", description: "Get notified when you receive a new booking inquiry" },
                  { label: "Contract updates", description: "Notifications when contracts are signed or updated" },
                  { label: "Payment received", description: "Get notified when payments are received" },
                  { label: "Calendar reminders", description: "Reminders for upcoming shows and deadlines" },
                  { label: "Team mentions", description: "Get notified when someone mentions you" },
                  { label: "Weekly digest", description: "Receive a weekly summary of your agency's activity" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-[var(--vayo-gray-800)] last:border-0">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-sm text-[var(--vayo-gray-500)]">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-[var(--vayo-gray-700)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--vayo-accent)]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-medium mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                        Current Password
                      </label>
                      <input type="password" className="input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                        New Password
                      </label>
                      <input type="password" className="input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--vayo-gray-300)] mb-2">
                        Confirm New Password
                      </label>
                      <input type="password" className="input" />
                    </div>
                    <button className="btn-primary">Update Password</button>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--vayo-gray-800)]">
                  <h3 className="text-white font-medium mb-4">Two-Factor Authentication</h3>
                  <p className="text-sm text-[var(--vayo-gray-400)] mb-4">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <button className="btn-secondary">Enable 2FA</button>
                </div>

                <div className="pt-6 border-t border-[var(--vayo-gray-800)]">
                  <h3 className="text-white font-medium mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    {[
                      { device: "MacBook Pro", location: "Amsterdam, NL", current: true },
                      { device: "iPhone 15", location: "Amsterdam, NL", current: false },
                    ].map((session, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[var(--vayo-gray-800)]">
                        <div>
                          <p className="text-white font-medium">{session.device}</p>
                          <p className="text-sm text-[var(--vayo-gray-500)]">{session.location}</p>
                        </div>
                        {session.current ? (
                          <span className="text-sm text-emerald-500">Current Session</span>
                        ) : (
                          <button className="text-sm text-red-500 hover:underline">Revoke</button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">Billing & Subscription</h2>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--vayo-accent)]/20 to-transparent border border-[var(--vayo-accent)]/30 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[var(--vayo-accent)] font-medium mb-1">Professional Plan</p>
                    <p className="text-2xl font-bold text-white">€119<span className="text-sm font-normal text-[var(--vayo-gray-400)]">/month</span></p>
                    <p className="text-sm text-[var(--vayo-gray-400)]">Next billing date: Feb 1, 2026</p>
                  </div>
                  <button className="btn-secondary">Upgrade Plan</button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-medium">Payment Method</h3>
                <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--vayo-gray-800)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 rounded bg-[var(--vayo-gray-700)] flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="text-white">•••• •••• •••• 4242</p>
                      <p className="text-sm text-[var(--vayo-gray-500)]">Expires 12/27</p>
                    </div>
                  </div>
                  <button className="text-sm text-[var(--vayo-accent)] hover:underline">Update</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">Integrations</h2>
              
              <div className="space-y-4">
                {[
                  { name: "Google Calendar", description: "Sync your bookings with Google Calendar", connected: true },
                  { name: "QuickBooks", description: "Sync invoices and payments", connected: true },
                  { name: "Slack", description: "Get notifications in Slack", connected: false },
                  { name: "Zapier", description: "Connect with 3000+ apps", connected: false },
                  { name: "Mailchimp", description: "Sync contacts for email marketing", connected: false },
                ].map((integration, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[var(--vayo-gray-800)]">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--vayo-gray-700)] flex items-center justify-center text-white font-bold text-sm">
                        {integration.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{integration.name}</p>
                        <p className="text-sm text-[var(--vayo-gray-500)]">{integration.description}</p>
                      </div>
                    </div>
                    {integration.connected ? (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-500">
                        Connected
                      </span>
                    ) : (
                      <button className="btn-secondary text-sm py-2">Connect</button>
                    )}
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
