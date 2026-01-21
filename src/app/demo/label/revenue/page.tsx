"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Users,
  Disc3,
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const revenueData = [
  { source: "Streaming Revenue", amount: 450000, change: "+15%" },
  { source: "Booking Commissions", amount: 180000, change: "+22%" },
  { source: "Sync Licensing", amount: 85000, change: "+8%" },
  { source: "Merchandise", amount: 45000, change: "+31%" },
];

export default function LabelRevenuePage() {
  const totalRevenue = revenueData.reduce((sum, r) => sum + r.amount, 0);

  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
          Revenue Analytics
        </h1>
        <p className="text-[var(--vayo-gray-400)]">Track your label&apos;s financial performance.</p>
      </div>

      {/* Total Revenue */}
      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8 mb-8">
        <p className="text-cyan-400 text-sm font-medium mb-2">Total Revenue (YTD)</p>
        <p className="text-4xl font-bold text-white">€{totalRevenue.toLocaleString()}</p>
      </div>

      {/* Revenue Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        {revenueData.map((item) => (
          <div key={item.source} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[var(--vayo-gray-400)]">{item.source}</span>
              <span className="flex items-center gap-1 text-sm text-emerald-500">
                <ArrowUpRight className="w-4 h-4" />
                {item.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">€{item.amount.toLocaleString()}</p>
            <div className="mt-4 h-2 bg-[var(--vayo-gray-800)] rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 rounded-full"
                style={{ width: `${(item.amount / totalRevenue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
