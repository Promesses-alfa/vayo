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
  Globe,
  Share2,
  Disc3,
  PenTool,
  BarChart3,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Eye,
  Edit3,
  Send,
  Signature,
} from "lucide-react";
import { useState } from "react";

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

const contracts = [
  {
    id: 1,
    title: "Performance Contract - Tomorrowland 2026",
    type: "Performance",
    party: "Tomorrowland NV",
    sentBy: "Agency",
    date: "Jan 18, 2026",
    status: "pending_signature",
    value: "€25,000",
    deadline: "Jan 25, 2026",
  },
  {
    id: 2,
    title: "Performance Contract - Awakenings Festival",
    type: "Performance",
    party: "Awakenings Events",
    sentBy: "Agency",
    date: "Jan 15, 2026",
    status: "pending_signature",
    value: "€15,000",
    deadline: "Jan 22, 2026",
  },
  {
    id: 3,
    title: "Booking Agreement - Paradiso Amsterdam",
    type: "Performance",
    party: "Paradiso BV",
    sentBy: "Agency",
    date: "Jan 10, 2026",
    status: "signed",
    value: "€8,500",
    signedDate: "Jan 12, 2026",
  },
  {
    id: 4,
    title: "Recording Agreement - Digital Dreams EP",
    type: "Recording",
    party: "Horizon Records",
    sentBy: "Label",
    date: "Dec 1, 2025",
    status: "signed",
    value: "Advance: €20,000",
    signedDate: "Dec 5, 2025",
  },
  {
    id: 5,
    title: "Sync License - Netflix Documentary",
    type: "Licensing",
    party: "Netflix Inc.",
    sentBy: "Label",
    date: "Nov 20, 2025",
    status: "signed",
    value: "€35,000",
    signedDate: "Nov 28, 2025",
  },
];

const stats = [
  { label: "Pending Signature", value: "2", color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Signed This Year", value: "8", color: "text-emerald-500", bg: "bg-emerald-50" },
  { label: "Total Value (2026)", value: "€123K", color: "text-violet-500", bg: "bg-violet-50" },
];

export default function ArtistContractsPage() {
  const [showSignModal, setShowSignModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState<typeof contracts[0] | null>(null);

  const openSignModal = (contract: typeof contracts[0]) => {
    setSelectedContract(contract);
    setShowSignModal(true);
  };

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
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Contracts
          </h1>
          <p className="text-gray-500 font-medium">
            Review and sign contracts from your agency and label.
          </p>
        </div>
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

      {/* Pending Signatures Alert */}
      {contracts.filter(c => c.status === "pending_signature").length > 0 && (
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Contracts Awaiting Your Signature</h3>
              <p className="text-sm text-gray-600 font-medium">
                You have {contracts.filter(c => c.status === "pending_signature").length} contracts that need to be signed. 
                Review and sign them using our secure e-signature integration.
              </p>
            </div>
          </div>
        </div>
      )}

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
                        {contract.type} • {contract.party} • Sent by {contract.sentBy}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm font-bold text-gray-900">{contract.value}</span>
                        <span className="text-sm text-red-500 font-medium flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Due: {contract.deadline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button 
                      onClick={() => openSignModal(contract)}
                      className="px-6 py-2.5 bg-[#f97316] text-white rounded-xl font-bold text-sm hover:bg-[#ea580c] transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
                    >
                      <Signature className="w-4 h-4" />
                      Sign Now
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
      <div className="space-y-4 mb-8">
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
                    {contract.type} • {contract.party} • Sent by {contract.sentBy}
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

      {/* Sign Modal */}
      {showSignModal && selectedContract && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center">
                <Signature className="w-6 h-6 text-[#f97316]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
                  Sign Contract
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  Powered by HelloSign
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <h3 className="font-bold text-gray-900 mb-1">{selectedContract.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{selectedContract.party} • {selectedContract.value}</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-gray-600">Document reviewed and verified</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-gray-600">Legally binding e-signature</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-gray-600">Secure audit trail recorded</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Signature</label>
              <div className="h-24 bg-white border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 font-medium">Click to draw your signature</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowSignModal(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowSignModal(false)}
                className="flex-1 py-3 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Sign & Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Integration Info */}
      <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center flex-shrink-0">
            <Signature className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Secure E-Signature Integration</h3>
            <p className="text-sm text-gray-600 font-medium">
              All contracts are signed using HelloSign, providing legally binding digital signatures with full audit trails. 
              Both parties receive signed copies automatically.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
