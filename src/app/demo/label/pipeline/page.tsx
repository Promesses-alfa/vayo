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
  Plus,
  Eye,
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

const pipeline = [
  { name: "Electric Dreams", genre: "House", stage: "discovery", streams: "50K", potential: "High" },
  { name: "Bass Culture", genre: "Drum & Bass", stage: "outreach", streams: "120K", potential: "Medium" },
  { name: "Midnight Sun", genre: "Techno", stage: "negotiating", streams: "280K", potential: "High" },
  { name: "Crystal Sound", genre: "Progressive", stage: "contract", streams: "95K", potential: "High" },
];

const stages = ["discovery", "outreach", "negotiating", "contract"];
const stageColors: Record<string, string> = {
  discovery: "bg-purple-500/20 text-purple-500",
  outreach: "bg-blue-500/20 text-blue-500",
  negotiating: "bg-yellow-500/20 text-yellow-500",
  contract: "bg-emerald-500/20 text-emerald-500",
};

export default function LabelPipelinePage() {
  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            A&R Pipeline
          </h1>
          <p className="text-[var(--vayo-gray-400)]">Track potential signings and artist development.</p>
        </div>
        <button className="btn-primary text-sm py-2.5 bg-cyan-500 hover:bg-cyan-600">
          <Plus className="w-4 h-4" />
          Add Artist
        </button>
      </div>

      {/* Kanban View */}
      <div className="grid md:grid-cols-4 gap-4">
        {stages.map((stage) => (
          <div key={stage} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-white capitalize">{stage}</h3>
              <span className="text-xs text-[var(--vayo-gray-500)]">
                {pipeline.filter(p => p.stage === stage).length}
              </span>
            </div>
            <div className="space-y-3">
              {pipeline.filter(p => p.stage === stage).map((artist, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[var(--vayo-gray-800)]/50 hover:bg-[var(--vayo-gray-800)] transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{artist.name}</span>
                    <button className="p-1 hover:bg-[var(--vayo-gray-700)] rounded">
                      <Eye className="w-4 h-4 text-[var(--vayo-gray-400)]" />
                    </button>
                  </div>
                  <p className="text-xs text-[var(--vayo-gray-500)] mb-2">{artist.genre}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--vayo-gray-400)]">{artist.streams} streams</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      artist.potential === "High" ? "bg-emerald-500/20 text-emerald-500" : "bg-yellow-500/20 text-yellow-500"
                    }`}>
                      {artist.potential}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
