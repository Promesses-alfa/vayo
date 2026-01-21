"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Plane,
  MessageSquare,
  Settings,
  TrendingUp,
  ArrowUpRight,
  Download,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/artist", icon: LayoutDashboard },
  { label: "Schedule", href: "/demo/artist/schedule", icon: Calendar },
  { label: "Documents", href: "/demo/artist/documents", icon: FileText },
  { label: "Earnings", href: "/demo/artist/earnings", icon: DollarSign },
  { label: "Travel", href: "/demo/artist/travel", icon: Plane },
  { label: "Messages", href: "/demo/artist/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/artist/settings", icon: Settings },
];

const earningsData = [
  { month: "Aug", amount: 18500 },
  { month: "Sep", amount: 22000 },
  { month: "Oct", amount: 28500 },
  { month: "Nov", amount: 32000 },
  { month: "Dec", amount: 45000 },
  { month: "Jan", amount: 38000 },
];

const recentPayments = [
  { id: 1, show: "Paradiso Amsterdam", date: "2026-01-20", amount: 4500, status: "paid" },
  { id: 2, show: "Club XYZ Berlin", date: "2026-01-10", amount: 3200, status: "paid" },
  { id: 3, show: "Warehouse Amsterdam", date: "2025-12-31", amount: 5000, status: "paid" },
  { id: 4, show: "Berghain Berlin", date: "2026-02-02", amount: 6000, status: "pending" },
  { id: 5, show: "Warehouse Project", date: "2026-02-14", amount: 5500, status: "pending" },
];

export default function ArtistEarningsPage() {
  const totalEarnings = earningsData.reduce((sum, d) => sum + d.amount, 0);
  const maxAmount = Math.max(...earningsData.map(d => d.amount));

  return (
    <DashboardLayout
      type="artist"
      navItems={navItems}
      userName="DJ Storm"
      userRole="Artist"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Earnings
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Track your income and payment history.
          </p>
        </div>
        <button className="btn-secondary text-sm py-2.5">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Earnings (6mo)", value: `€${totalEarnings.toLocaleString()}`, change: "+18%" },
          { label: "This Month", value: "€38,000", change: "-15%" },
          { label: "Pending Payments", value: "€11,500", change: "" },
          { label: "Avg. Per Show", value: "€4,850", change: "+12%" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[var(--vayo-gray-400)]">{stat.label}</span>
              {stat.change && (
                <span className={`flex items-center gap-1 text-sm ${
                  stat.change.startsWith("+") ? "text-emerald-500" : "text-red-500"
                }`}>
                  <ArrowUpRight className="w-4 h-4" />
                  {stat.change}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Earnings Overview</h2>
          <div className="flex items-end justify-between gap-4 h-48">
            {earningsData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center gap-1">
                  <span className="text-sm text-[var(--vayo-gray-400)]">
                    €{(data.amount / 1000).toFixed(1)}k
                  </span>
                  <div
                    className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg"
                    style={{ height: `${(data.amount / maxAmount) * 140}px` }}
                  />
                </div>
                <span className="text-xs text-[var(--vayo-gray-500)]">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending */}
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Pending Payments</h2>
          <div className="space-y-4">
            {recentPayments.filter(p => p.status === "pending").map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-3 rounded-xl bg-[var(--vayo-gray-800)]/50">
                <div>
                  <p className="text-white font-medium text-sm">{payment.show}</p>
                  <p className="text-xs text-[var(--vayo-gray-500)]">
                    {new Date(payment.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                  </p>
                </div>
                <span className="text-purple-400 font-semibold">€{payment.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="mt-6 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
        <div className="p-5 border-b border-[var(--vayo-gray-800)]">
          <h2 className="text-lg font-semibold text-white">Payment History</h2>
        </div>
        <div className="divide-y divide-[var(--vayo-gray-800)]">
          {recentPayments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  payment.status === "paid" ? "bg-emerald-500/20 text-emerald-500" : "bg-yellow-500/20 text-yellow-500"
                }`}>
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">{payment.show}</p>
                  <p className="text-sm text-[var(--vayo-gray-500)]">
                    {new Date(payment.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  payment.status === "paid" ? "bg-emerald-500/20 text-emerald-500" : "bg-yellow-500/20 text-yellow-500"
                }`}>
                  {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                </span>
                <span className="text-lg font-bold text-white">€{payment.amount.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
