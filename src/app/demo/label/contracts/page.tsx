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
  Share2,
  PenTool,
  BarChart3,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Eye,
  Send,
  Signature,
  FileText,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Social Media", href: "/demo/label/social", icon: Share2 },
  { label: "Contracts", href: "/demo/label/contracts", icon: PenTool },
  { label: "Analytics", href: "/demo/label/analytics", icon: BarChart3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare, badge: 4 },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const contractTemplates = [
  { id: 1, name: "Recording Agreement", description: "Standard recording contract for new releases" },
  { id: 2, name: "Distribution Deal", description: "Digital distribution agreement" },
  { id: 3, name: "Sync License", description: "Licensing for film, TV, and advertising" },
  { id: 4, name: "360 Deal", description: "Comprehensive artist agreement" },
  { id: 5, name: "Producer Agreement", description: "Work for hire production contract" },
];

const contracts = [
  {
    id: 1,
    title: "Recording Agreement - Summer Vibes Album",
    type: "Recording",
    artist: "DJ Storm",
    date: "Jan 20, 2026",
    status: "pending_signature",
    value: "Advance: €50,000",
    signee: "Artist",
  },
  {
    id: 2,
    title: "Sync License - Nike Campaign",
    type: "Licensing",
    artist: "Aurora Beats",
    date: "Jan 18, 2026",
    status: "pending_signature",
    value: "€75,000",
    signee: "Artist",
  },
  {
    id: 3,
    title: "Recording Agreement - Echoes Single",
    type: "Recording",
    artist: "The Waves",
    date: "Jan 10, 2026",
    status: "signed",
    value: "Advance: €15,000",
    signedDate: "Jan 12, 2026",
  },
  {
    id: 4,
    title: "Distribution Agreement - Digital",
    type: "Distribution",
    artist: "Neon Dreams",
    date: "Dec 15, 2025",
    status: "signed",
    value: "80/20 Split",
    signedDate: "Dec 18, 2025",
  },
];

const stats = [
  { label: "Pending Signatures", value: "4", color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Signed This Month", value: "12", color: "text-emerald-500", bg: "bg-emerald-50" },
  { label: "Active Contracts", value: "48", color: "text-[#3b82f6]", bg: "bg-blue-50" },
];

export default function LabelContractsPage() {
  const [showNewContract, setShowNewContract] = useState(false);

  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Contracts
          </h1>
          <p className="text-gray-500 font-medium">
            Create, send, and manage contracts with your artists.
          </p>
        </div>
        <button 
          onClick={() => setShowNewContract(!showNewContract)}
          className="px-6 py-3 bg-[#3b82f6] text-white rounded-xl font-bold hover:bg-[#2563eb] transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-5 h-5" />
          New Contract
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-5">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* New Contract Form */}
      {showNewContract && (
        <div className="bg-white border border-gray-100 rounded-3xl p-6 mb-8 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Create New Contract</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Contract Template</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]">
                    <option value="">Select a template...</option>
                    {contractTemplates.map((template) => (
                      <option key={template.id} value={template.id}>{template.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Artist</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]">
                    <option value="">Select artist...</option>
                    <option>DJ Storm</option>
                    <option>Aurora Beats</option>
                    <option>The Waves</option>
                    <option>Neon Dreams</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Contract Title</label>
              <input 
                type="text"
                placeholder="e.g., Recording Agreement - Album Title"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Contract Value</label>
                <input 
                  type="text"
                  placeholder="e.g., €25,000 or 80/20 Split"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Signing Deadline</label>
                <input 
                  type="date"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <button 
                onClick={() => setShowNewContract(false)}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Save as Draft
              </button>
              <button className="px-6 py-3 bg-[#3b82f6] text-white rounded-xl font-bold hover:bg-[#2563eb] transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                <Send className="w-4 h-4" />
                Send for Signature
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contract Templates */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>Contract Templates</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
          {contractTemplates.map((template) => (
            <button key={template.id} className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-left hover:bg-[#3b82f6]/5 hover:border-[#3b82f6]/30 transition-all">
              <FileText className="w-6 h-6 text-[#3b82f6] mb-2" />
              <p className="font-bold text-gray-900 text-sm">{template.name}</p>
              <p className="text-xs text-gray-500 font-medium mt-1">{template.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Pending Contracts */}
      {contracts.filter(c => c.status === "pending_signature").length > 0 && (
        <>
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            Awaiting Signature
          </h2>
          <div className="space-y-4 mb-8">
            {contracts.filter(c => c.status === "pending_signature").map((contract) => (
              <div key={contract.id} className="bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <PenTool className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{contract.title}</h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {contract.type} • {contract.artist} • Sent {contract.date}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm font-bold text-gray-900">{contract.value}</span>
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Waiting for {contract.signee}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button className="px-4 py-2.5 bg-orange-100 text-orange-600 rounded-xl font-bold text-sm hover:bg-orange-200 transition-all flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Reminder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Signed Contracts */}
      <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
        Signed Contracts
      </h2>
      <div className="space-y-4">
        {contracts.filter(c => c.status === "signed").map((contract) => (
          <div key={contract.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{contract.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {contract.type} • {contract.artist}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm font-bold text-gray-900">{contract.value}</span>
                    <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Signed: {contract.signedDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Integration Info */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center flex-shrink-0">
            <Signature className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">HelloSign Integration</h3>
            <p className="text-sm text-gray-600 font-medium">
              All contracts are sent via HelloSign for secure, legally binding e-signatures. 
              You'll receive notifications when contracts are signed, and both parties get copies automatically.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
