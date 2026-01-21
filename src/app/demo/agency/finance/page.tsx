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
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Plus,
  MoreHorizontal,
  Eye,
  ChevronRight,
  Plug,
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
  { label: "Integrations", href: "/demo/agency/integrations", icon: Plug },
  { label: "Settings", href: "/demo/agency/settings", icon: Settings },
];

const financialStats = [
  { label: "Total Revenue (YTD)", value: "€1,284,500", change: "+18%", trend: "up" },
  { label: "Commission Earned", value: "€192,675", change: "+18%", trend: "up" },
  { label: "Pending Payouts", value: "€45,200", change: "-12%", trend: "down" },
  { label: "Avg. Fee / Act", value: "€12,400", change: "+5%", trend: "up" },
];

const transactions = [
  { id: "INV-001", description: "DJ Storm - Summer Sounds", client: "Summer Sounds Festival", amount: 45000, status: "paid" },
  { id: "INV-002", description: "The Waves - O2 Arena", client: "Live Nation", amount: 12000, status: "pending" },
  { id: "EXP-001", description: "Travel Advance - Pulse", client: "Internal", amount: -850, status: "paid" },
  { id: "INV-003", description: "Aurora Beats - Berghain", client: "Ostgut Ton", amount: 6000, status: "paid" },
];

export default function FinancePage() {
  return (
    <DashboardLayout
      type="agency"
      navItems={navItems}
      userName="Sarah van der Berg"
      userRole="Agency Director"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Financial Hub
          </h1>
          <p className="text-gray-500 font-medium">Real-time revenue tracking across the ecosystem.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            Report
          </button>
          <button className="px-4 py-2 bg-[#00d4aa] rounded-xl text-sm font-bold text-white hover:bg-[#00b894] transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Invoice
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {financialStats.map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
              <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Transactions Table */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Transactions</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-widest">Invoices</button>
              <button className="px-3 py-1.5 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-widest">Expenses</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Reference</th>
                  <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Client / Source</th>
                  <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Amount</th>
                  <th className="text-center p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                  <th className="p-6"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50/50 transition-all group">
                    <td className="p-6">
                      <p className="text-sm font-bold text-gray-900">{tx.description}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{tx.id}</p>
                    </td>
                    <td className="p-6">
                      <span className="text-sm font-bold text-gray-500">{tx.client}</span>
                    </td>
                    <td className="p-6 text-right">
                      <span className={`text-sm font-bold ${tx.amount > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                        {tx.amount > 0 ? '+' : ''}€{Math.abs(tx.amount).toLocaleString()}
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                        tx.status === "paid" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button className="p-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 hover:text-[#00d4aa] transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Insights */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Payout Forecast</h2>
            <div className="space-y-6">
              {[
                { artist: "DJ Storm", amount: "€38,250", date: "Feb 1" },
                { artist: "Aurora Beats", amount: "€5,100", date: "Feb 15" },
              ].map((payout, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">{payout.artist}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Due: {payout.date}</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{payout.amount}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-gray-900 text-white rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
              Process Payouts <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#00d4aa] rounded-3xl p-6 text-white shadow-lg shadow-[#00d4aa]/20">
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>Automatic Tax Sync</h3>
            <p className="text-white/80 text-sm font-medium mb-6">
              Your VAT reports are being generated automatically based on your bookings.
            </p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-2xl text-sm font-bold transition-all">
              Download VAT Export
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
