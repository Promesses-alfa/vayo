"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import InvoiceModal from "@/components/dashboard/InvoiceModal";
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
  Filter,
  Plus,
  MoreHorizontal,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
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

const financialStats = [
  { label: "Total Revenue (YTD)", value: "€1,284,500", change: "+18%", trend: "up" },
  { label: "This Month", value: "€284,500", change: "+23%", trend: "up" },
  { label: "Outstanding", value: "€45,200", change: "-12%", trend: "down" },
  { label: "Commission Earned", value: "€192,675", change: "+18%", trend: "up" },
];

const recentTransactions = [
  { 
    id: "INV-001", 
    description: "DJ Storm - Paradiso Amsterdam", 
    client: "ID&T Events",
    artist: "DJ Storm",
    showDate: "2026-01-24",
    amount: 4500, 
    type: "income", 
    status: "paid" as const, 
    issueDate: "2026-01-10",
    dueDate: "2026-01-24",
    paidDate: "2026-01-20"
  },
  { 
    id: "INV-002", 
    description: "The Waves - O2 Arena (Deposit)", 
    client: "Live Nation UK",
    artist: "The Waves",
    showDate: "2026-01-28",
    amount: 6000, 
    type: "income", 
    status: "pending" as const, 
    issueDate: "2026-01-15",
    dueDate: "2026-01-25"
  },
  { 
    id: "EXP-001", 
    description: "Flight booking - Aurora Beats", 
    client: "Internal",
    artist: "Aurora Beats",
    showDate: "2026-02-02",
    amount: -850, 
    type: "expense", 
    status: "paid" as const, 
    issueDate: "2026-01-17",
    dueDate: "2026-01-17",
    paidDate: "2026-01-17"
  },
  { 
    id: "INV-003", 
    description: "Aurora Beats - Berghain Berlin", 
    client: "Ostgut Ton",
    artist: "Aurora Beats",
    showDate: "2026-02-02",
    amount: 6000, 
    type: "income", 
    status: "paid" as const, 
    issueDate: "2026-01-08",
    dueDate: "2026-01-22",
    paidDate: "2026-01-15"
  },
  { 
    id: "EXP-002", 
    description: "Hotel - The Waves tour", 
    client: "Internal",
    artist: "The Waves",
    showDate: "2026-01-28",
    amount: -1200, 
    type: "expense", 
    status: "paid" as const, 
    issueDate: "2026-01-14",
    dueDate: "2026-01-14",
    paidDate: "2026-01-14"
  },
  { 
    id: "INV-004", 
    description: "Neon Dreams - Club XYZ", 
    client: "Club XYZ Amsterdam",
    artist: "Neon Dreams",
    showDate: "2026-01-05",
    amount: 2500, 
    type: "income", 
    status: "overdue" as const, 
    issueDate: "2025-12-28",
    dueDate: "2026-01-10"
  },
];

const monthlyData = [
  { month: "Aug", revenue: 145000, expenses: 22000 },
  { month: "Sep", revenue: 168000, expenses: 25000 },
  { month: "Oct", revenue: 192000, expenses: 28000 },
  { month: "Nov", revenue: 215000, expenses: 32000 },
  { month: "Dec", revenue: 280000, expenses: 42000 },
  { month: "Jan", revenue: 284500, expenses: 38000 },
];

export default function FinancePage() {
  const [period, setPeriod] = useState("month");
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));
  const [selectedInvoice, setSelectedInvoice] = useState<typeof recentTransactions[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewInvoice = (tx: typeof recentTransactions[0]) => {
    if (tx.type === "income") {
      setSelectedInvoice(tx);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInvoice(null);
  };

  return (
    <DashboardLayout
      type="agency"
      navItems={navItems}
      userName="Sarah van der Berg"
      userRole="Agency Director"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Finance
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Track revenue, expenses, and financial performance.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary text-sm py-2.5">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="btn-primary text-sm py-2.5">
            <Plus className="w-4 h-4" />
            New Invoice
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {financialStats.map((stat) => (
          <div key={stat.label} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[var(--vayo-gray-400)]">{stat.label}</span>
              <span className={`flex items-center gap-1 text-sm ${
                stat.trend === "up" ? "text-emerald-500" : "text-red-500"
              }`}>
                {stat.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Revenue Overview</h2>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-[var(--vayo-gray-800)] border border-[var(--vayo-gray-700)] text-sm text-white"
            >
              <option value="month">Last 6 Months</option>
              <option value="year">Last Year</option>
            </select>
          </div>

          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between gap-4 h-48">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-[var(--vayo-accent)] rounded-t-lg"
                    style={{ height: `${(data.revenue / maxRevenue) * 160}px` }}
                  />
                </div>
                <span className="text-xs text-[var(--vayo-gray-500)]">{data.month}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--vayo-accent)]" />
              <span className="text-sm text-[var(--vayo-gray-400)]">Revenue</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { label: "Create Invoice", icon: Plus },
              { label: "Record Payment", icon: CheckCircle },
              { label: "Add Expense", icon: DollarSign },
              { label: "Generate Report", icon: Download },
            ].map((action) => (
              <button
                key={action.label}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-700)] text-white transition-colors"
              >
                <action.icon className="w-5 h-5 text-[var(--vayo-accent)]" />
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-[var(--vayo-gray-800)]">
          <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
          <button className="text-sm text-[var(--vayo-accent)] hover:underline">View All</button>
        </div>
        <div className="divide-y divide-[var(--vayo-gray-800)]">
          {recentTransactions.map((tx) => (
            <div 
              key={tx.id} 
              className={`flex items-center justify-between p-4 hover:bg-[var(--vayo-gray-800)]/50 transition-colors ${
                tx.type === "income" ? "cursor-pointer" : ""
              }`}
              onClick={() => handleViewInvoice(tx)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  tx.type === "income" ? "bg-emerald-500/20 text-emerald-500" : "bg-red-500/20 text-red-500"
                }`}>
                  {tx.type === "income" ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-white font-medium">{tx.description}</p>
                  <p className="text-sm text-[var(--vayo-gray-500)]">{tx.id} • {new Date(tx.issueDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tx.status === "paid" ? "bg-emerald-500/20 text-emerald-500" :
                  tx.status === "pending" ? "bg-yellow-500/20 text-yellow-500" :
                  "bg-red-500/20 text-red-500"
                }`}>
                  {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                </span>
                <span className={`text-lg font-semibold ${tx.amount > 0 ? "text-emerald-500" : "text-red-500"}`}>
                  {tx.amount > 0 ? "+" : ""}€{Math.abs(tx.amount).toLocaleString()}
                </span>
                {tx.type === "income" && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleViewInvoice(tx); }}
                    className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)] hover:text-white transition-colors"
                    title="View Invoice"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invoice Preview Modal */}
      {selectedInvoice && (
        <InvoiceModal
          invoice={{
            id: selectedInvoice.id,
            description: selectedInvoice.description,
            client: selectedInvoice.client,
            artist: selectedInvoice.artist,
            showDate: selectedInvoice.showDate,
            amount: selectedInvoice.amount,
            status: selectedInvoice.status,
            issueDate: selectedInvoice.issueDate,
            dueDate: selectedInvoice.dueDate,
            paidDate: selectedInvoice.paidDate,
          }}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onMarkPaid={() => {
            // Handle mark as paid
            handleCloseModal();
          }}
          onSend={() => {
            // Handle send action
            handleCloseModal();
          }}
        />
      )}
    </DashboardLayout>
  );
}
