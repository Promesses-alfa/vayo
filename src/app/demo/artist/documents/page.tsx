"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Plane,
  MessageSquare,
  Settings,
  Search,
  Download,
  Eye,
  FileSignature,
  Receipt,
  Ticket,
  ChevronRight,
  Globe,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/artist", icon: LayoutDashboard },
  { label: "Schedule", href: "/demo/artist/schedule", icon: Calendar },
  { label: "Availability", href: "/demo/artist/availability", icon: Globe },
  { label: "Documents", href: "/demo/artist/documents", icon: FileText },
  { label: "Earnings", href: "/demo/artist/earnings", icon: DollarSign },
  { label: "Travel", href: "/demo/artist/travel", icon: Plane },
  { label: "Messages", href: "/demo/artist/messages", icon: MessageSquare, badge: 2 },
  { label: "Settings", href: "/demo/artist/settings", icon: Settings },
];

const documents = [
  { id: 1, name: "Contract - Paradiso Amsterdam", type: "contract", date: "2026-01-12", size: "245 KB", show: "Paradiso" },
  { id: 2, name: "Contract - Summer Sounds Festival", type: "contract", date: "2026-01-08", size: "312 KB", show: "Summer Sounds", advancing: true },
  { id: 3, name: "Technical Rider 2026", type: "rider", date: "2026-01-01", size: "1.2 MB", show: "All Shows" },
  { id: 4, name: "Hospitality Rider 2026", type: "rider", date: "2026-01-01", size: "890 KB", show: "All Shows" },
  { id: 5, name: "Advancing Form - Summer Sounds", type: "advancing", date: "2026-01-20", size: "156 KB", show: "Summer Sounds", advancing: true },
  { id: 6, name: "Invoice #INV-2026-001", type: "invoice", date: "2026-01-20", size: "156 KB", show: "Paradiso" },
  { id: 7, name: "Flight AMS-TXL Jan 31", type: "travel", date: "2026-01-25", size: "320 KB", show: "Berghain" },
  { id: 8, name: "Hotel Confirmation Berlin", type: "travel", date: "2026-01-25", size: "180 KB", show: "Berghain" },
];

const typeConfig: Record<string, { icon: React.ElementType; color: string; label: string; bgColor: string }> = {
  contract: { icon: FileSignature, color: "text-blue-500", label: "Contracts", bgColor: "bg-blue-50" },
  rider: { icon: FileText, color: "text-[#a855f7]", label: "Riders", bgColor: "bg-purple-50" },
  invoice: { icon: Receipt, color: "text-emerald-500", label: "Invoices", bgColor: "bg-emerald-50" },
  travel: { icon: Ticket, color: "text-[#f97316]", label: "Travel", bgColor: "bg-orange-50" },
  advancing: { icon: FileText, color: "text-[#a855f7]", label: "Advancing", bgColor: "bg-purple-50" },
};

export default function ArtistDocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || doc.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const groupedByType = Object.keys(typeConfig).map((type) => ({
    type,
    ...typeConfig[type],
    count: documents.filter((d) => d.type === type).length,
  }));

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
            Document Portal
          </h1>
          <p className="text-gray-500 font-medium">All contracts, riders, and advancing forms in one place.</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        {groupedByType.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.type}
              onClick={() => setTypeFilter(typeFilter === type.type ? "all" : type.type)}
              className={`p-6 rounded-2xl border transition-all ${
                typeFilter === type.type
                  ? `${type.bgColor} border-gray-200 shadow-md`
                  : "bg-white border-gray-100 hover:border-gray-200 shadow-sm"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl ${type.bgColor} flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 ${type.color}`} />
              </div>
              <p className="text-2xl font-bold text-gray-900">{type.count}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{type.label}</p>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#f97316] font-medium"
          />
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-50">
          {filteredDocuments.map((doc) => {
            const config = typeConfig[doc.type];
            const Icon = config.icon;
            return (
              <div key={doc.id} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${config.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${config.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-bold text-gray-900">{doc.name}</p>
                      {doc.advancing && (
                        <span className="px-2 py-0.5 bg-[#a855f7]/10 text-[#a855f7] rounded-lg text-[10px] font-bold uppercase">
                          Auto-synced
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-500">
                      <span>{doc.show}</span>
                      <span>•</span>
                      <span>{new Date(doc.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 hover:text-[#f97316] hover:border-[#f97316] transition-all">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 hover:text-gray-600 transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 hover:text-gray-600 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Advancing Integration Banner */}
      <div className="mt-12 bg-[#a855f7] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <FileText className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Automatic Advancing</h2>
          <p className="text-white/80 font-medium mb-8">
            When your agency fills out festival advancing requirements, you see them instantly. 
            No waiting for emails. No missing documents. Everything appears here automatically.
          </p>
          <button className="px-6 py-3 bg-white text-[#a855f7] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View Advancing Status
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
