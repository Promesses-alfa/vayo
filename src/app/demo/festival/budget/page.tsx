"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  LayoutDashboard,
  Music,
  Users,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  TrendingUp,
  TrendingDown,
  PieChart,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/festival", icon: LayoutDashboard },
  { label: "Lineup", href: "/demo/festival/lineup", icon: Music },
  { label: "Artist Requests", href: "/demo/festival/requests", icon: Users },
  { label: "Schedule", href: "/demo/festival/schedule", icon: CalendarDays },
  { label: "Budget", href: "/demo/festival/budget", icon: DollarSign },
  { label: "Stages", href: "/demo/festival/stages", icon: MapPin },
  { label: "Messages", href: "/demo/festival/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/festival/settings", icon: Settings },
];

const budgetCategories = [
  { category: "Artist Fees", budget: 2000000, spent: 1450000, color: "bg-emerald-500" },
  { category: "Production", budget: 800000, spent: 520000, color: "bg-blue-500" },
  { category: "Marketing", budget: 400000, spent: 380000, color: "bg-purple-500" },
  { category: "Hospitality", budget: 300000, spent: 180000, color: "bg-orange-500" },
  { category: "Security", budget: 250000, spent: 150000, color: "bg-red-500" },
  { category: "Operations", budget: 250000, spent: 120000, color: "bg-cyan-500" },
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
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Budget Tracker
          </h1>
          <p className="text-[var(--vayo-gray-400)]">Monitor spending across all categories.</p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Budget", value: `€${(totalBudget / 1000000).toFixed(1)}M`, icon: DollarSign },
          { label: "Total Spent", value: `€${(totalSpent / 1000000).toFixed(2)}M`, icon: TrendingDown },
          { label: "Remaining", value: `€${(remaining / 1000000).toFixed(2)}M`, icon: TrendingUp },
          { label: "Utilization", value: `${Math.round((totalSpent / totalBudget) * 100)}%`, icon: PieChart },
        ].map((stat) => (
          <div key={stat.label} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-emerald-500" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-[var(--vayo-gray-500)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Budget Categories */}
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Budget by Category</h2>
          <div className="space-y-6">
            {budgetCategories.map((cat) => {
              const percentage = (cat.spent / cat.budget) * 100;
              return (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[var(--vayo-gray-300)]">{cat.category}</span>
                    <span className="text-sm text-[var(--vayo-gray-500)]">
                      €{(cat.spent / 1000).toFixed(0)}K / €{(cat.budget / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="h-3 bg-[var(--vayo-gray-800)] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${cat.color} ${percentage > 90 ? "animate-pulse" : ""}`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className={`text-xs ${percentage > 90 ? "text-red-500" : "text-[var(--vayo-gray-600)]"}`}>
                      {percentage.toFixed(0)}% used
                    </span>
                    <span className="text-xs text-[var(--vayo-gray-600)]">
                      €{((cat.budget - cat.spent) / 1000).toFixed(0)}K remaining
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Artist Budget by Stage */}
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Artist Budget by Stage</h2>
          <div className="space-y-4">
            {artistBudget.map((stage) => {
              const percentage = (stage.spent / stage.budget) * 100;
              return (
                <div key={stage.stage} className="p-4 rounded-xl bg-[var(--vayo-gray-800)]/50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-white font-medium">{stage.stage}</p>
                      <p className="text-xs text-[var(--vayo-gray-500)]">{stage.acts} acts booked</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 font-semibold">€{(stage.spent / 1000).toFixed(0)}K</p>
                      <p className="text-xs text-[var(--vayo-gray-500)]">of €{(stage.budget / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                  <div className="h-2 bg-[var(--vayo-gray-700)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
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
