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
  ArrowDownRight,
  PieChart,
  PartyPopper,
  Play,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare, badge: 4 },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const revenueData = [
  { source: "Streaming Revenue", amount: 450000, change: "+15%", icon: Play, color: "text-[#3b82f6]" },
  { source: "Booking Commissions", amount: 180000, change: "+22%", icon: Calendar, color: "text-[#00d4aa]" },
  { source: "Sync Licensing", amount: 85000, change: "+8%", icon: Disc3, color: "text-[#a855f7]" },
  { source: "Merchandise", amount: 45000, change: "+31%", icon: TrendingUp, color: "text-[#f97316]" },
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Revenue Analytics
          </h1>
          <p className="text-gray-500 font-medium">Multi-source revenue tracking synced from agencies and streaming platforms.</p>
        </div>
      </div>

      {/* Total Revenue */}
      <div className="bg-[#3b82f6] rounded-[2rem] p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <DollarSign className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10">
          <p className="text-sm font-bold text-white/80 uppercase tracking-widest mb-2">Total Revenue (YTD)</p>
          <p className="text-5xl font-bold">€{totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="grid md:grid-cols-2 gap-8">
        {revenueData.map((item) => {
          const percentage = (item.amount / totalRevenue) * 100;
          return (
            <div key={item.source} className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-bold text-gray-900">{item.source}</span>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-emerald-500">
                  <ArrowUpRight className="w-3 h-3" />
                  {item.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-4">€{item.amount.toLocaleString()}</p>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color.replace('text', 'bg')}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-2">{percentage.toFixed(1)}% of total</p>
            </div>
          );
        })}
      </div>

      {/* Agency Integration Banner */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Calendar className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Automatic Commission Tracking</h2>
          <p className="text-white/80 font-medium mb-8">
            Booking commissions from your artists' agencies are tracked automatically. 
            No manual reporting needed. Revenue updates in real-time as shows are confirmed.
          </p>
          <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View Commission Reports
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
