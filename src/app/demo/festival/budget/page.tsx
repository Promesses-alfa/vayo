"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Music,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  Zap,
  TrendingUp,
  TrendingDown,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
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

const budgetCategories = [
  { category: "Artist Fees", budget: 2000000, spent: 1450000, color: "bg-[#a855f7]" },
  { category: "Production", budget: 800000, spent: 520000, color: "bg-[#3b82f6]" },
  { category: "Marketing", budget: 400000, spent: 380000, color: "bg-[#f97316]" },
  { category: "Hospitality", budget: 300000, spent: 180000, color: "bg-[#00d4aa]" },
  { category: "Security", budget: 250000, spent: 150000, color: "bg-red-500" },
  { category: "Operations", budget: 250000, spent: 120000, color: "bg-amber-500" },
];

const artistBudget = [
  { stage: "Main Stage", budget: 1200000, spent: 950000, acts: 12 },
  { stage: "Bass Stage", budget: 400000, spent: 280000, acts: 8 },
  { stage: "Sunset Stage", budget: 250000, spent: 150000, acts: 10 },
  { stage: "Discovery Stage", budget: 150000, spent: 70000, acts: 15 },
];

export default function FestivalBudgetPage() {
  const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.budget, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const remaining = totalBudget - totalSpent;

  return (
    <DashboardLayout
      type="festival"
      navItems={navItems}
      userName="Emma de Groot"
      userRole="Festival Director"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Budget Tracker
          </h1>
          <p className="text-gray-500 font-medium">Real-time spending across all categories and stages.</p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Budget", value: `€${(totalBudget / 1000000).toFixed(1)}M`, icon: DollarSign, color: "text-[#a855f7]" },
          { label: "Total Spent", value: `€${(totalSpent / 1000000).toFixed(2)}M`, icon: TrendingDown, color: "text-[#3b82f6]" },
          { label: "Remaining", value: `€${(remaining / 1000000).toFixed(2)}M`, icon: TrendingUp, color: "text-emerald-500" },
          { label: "Utilization", value: `${Math.round((totalSpent / totalBudget) * 100)}%`, icon: PieChart, color: "text-amber-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Budget Categories */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Budget by Category</h2>
          <div className="space-y-6">
            {budgetCategories.map((cat) => {
              const percentage = (cat.spent / cat.budget) * 100;
              return (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-gray-900">{cat.category}</span>
                    <span className="text-xs font-bold text-gray-500">
                      €{(cat.spent / 1000).toFixed(0)}K / €{(cat.budget / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${cat.color}`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className={`text-[10px] font-bold ${percentage > 90 ? "text-red-500" : "text-gray-400"} uppercase tracking-wider`}>
                      {percentage.toFixed(0)}% used
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      €{((cat.budget - cat.spent) / 1000).toFixed(0)}K left
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Artist Budget by Stage */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Artist Budget by Stage</h2>
          <div className="space-y-4">
            {artistBudget.map((stage) => {
              const percentage = (stage.spent / stage.budget) * 100;
              return (
                <div key={stage.stage} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{stage.stage}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stage.acts} acts booked</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#a855f7]">€{(stage.spent / 1000).toFixed(0)}K</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">of €{(stage.budget / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#a855f7] rounded-full"
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
