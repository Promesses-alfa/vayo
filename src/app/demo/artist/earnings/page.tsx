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
  CheckCircle2,
  Clock,
  Globe,
  Share2,
  Disc3,
  PenTool,
  BarChart3,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/artist", icon: LayoutDashboard },
  { label: "Schedule", href: "/demo/artist/schedule", icon: Calendar },
  { label: "Availability", href: "/demo/artist/availability", icon: Globe },
  { label: "Social Media", href: "/demo/artist/social", icon: Share2 },
  { label: "Releases", href: "/demo/artist/releases", icon: Disc3 },
  { label: "Contracts", href: "/demo/artist/contracts", icon: PenTool },
  { label: "Analytics", href: "/demo/artist/analytics", icon: BarChart3 },
  { label: "Documents", href: "/demo/artist/documents", icon: FileText },
  { label: "Earnings", href: "/demo/artist/earnings", icon: DollarSign },
  { label: "Travel", href: "/demo/artist/travel", icon: Plane },
  { label: "Messages", href: "/demo/artist/messages", icon: MessageSquare, badge: 2 },
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
  { id: 1, show: "Paradiso Amsterdam", date: "2026-01-20", amount: 4500, status: "paid", type: "venue" },
  { id: 2, show: "Club XYZ Berlin", date: "2026-01-10", amount: 3200, status: "paid", type: "venue" },
  { id: 3, show: "Warehouse Amsterdam", date: "2025-12-31", amount: 5000, status: "paid", type: "venue" },
  { id: 4, show: "Berghain Berlin", date: "2026-02-02", amount: 6000, status: "pending", type: "venue" },
  { id: 5, show: "Summer Sounds Festival", date: "2026-07-15", amount: 45000, status: "pending", type: "festival" },
];

export default function ArtistEarningsPage() {
  const totalEarnings = earningsData.reduce((sum, d) => sum + d.amount, 0);
  const maxAmount = Math.max(...earningsData.map(d => d.amount));
  const pendingTotal = recentPayments.filter(p => p.status === "pending").reduce((sum, p) => sum + p.amount, 0);

  return (
    <DashboardLayout
      type="artist"
      navItems={navItems}
      userName="DJ Storm"
      userRole="Artist"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Earnings Overview
          </h1>
          <p className="text-gray-500 font-medium">Real-time payment tracking synced from your agency.</p>
        </div>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total (6mo)", value: `€${totalEarnings.toLocaleString()}`, change: "+18%", icon: DollarSign, color: "text-[#f97316]" },
          { label: "This Month", value: "€38,000", change: "-15%", icon: TrendingUp, color: "text-[#00d4aa]" },
          { label: "Pending", value: `€${pendingTotal.toLocaleString()}`, change: "", icon: Clock, color: "text-amber-500" },
          { label: "Avg. Per Show", value: "€4,850", change: "+12%", icon: TrendingUp, color: "text-[#3b82f6]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              {stat.change && (
                <span className={`flex items-center gap-1 text-xs font-bold ${
                  stat.change.startsWith("+") ? "text-emerald-500" : "text-red-500"
                }`}>
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Earnings Trend</h2>
          <div className="flex items-end justify-between gap-4 h-48">
            {earningsData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center gap-1">
                  <span className="text-xs font-bold text-gray-500">
                    €{(data.amount / 1000).toFixed(1)}k
                  </span>
                  <div
                    className="w-full bg-[#f97316] rounded-t-2xl"
                    style={{ height: `${(data.amount / maxAmount) * 140}px` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Pending Payments</h2>
          <div className="space-y-4">
            {recentPayments.filter(p => p.status === "pending").map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div>
                  <p className="text-sm font-bold text-gray-900">{payment.show}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    {new Date(payment.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                  </p>
                </div>
                <span className="text-sm font-bold text-gray-900">€{payment.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-gray-900 text-white rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all">
            View All Payments
          </button>
        </div>
      </div>

      {/* Payment History */}
      <div className="mt-8 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Payment History</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {recentPayments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  payment.status === "paid" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                }`}>
                  {payment.status === "paid" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Clock className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{payment.show}</p>
                  <p className="text-xs font-bold text-gray-500">
                    {new Date(payment.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                  payment.status === "paid" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                }`}>
                  {payment.status}
                </span>
                <span className="text-lg font-bold text-gray-900">€{payment.amount.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
