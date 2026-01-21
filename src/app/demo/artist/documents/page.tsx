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
  Folder,
  FileSignature,
  Receipt,
  Ticket,
  Filter,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/artist", icon: LayoutDashboard },
  { label: "Schedule", href: "/demo/artist/schedule", icon: Calendar },
  { label: "Documents", href: "/demo/artist/documents", icon: FileText },
  { label: "Earnings", href: "/demo/artist/earnings", icon: DollarSign },
  { label: "Travel", href: "/demo/artist/travel", icon: Plane },
  { label: "Messages", href: "/demo/artist/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/artist/settings", icon: Settings },
];

const documents = [
  { id: 1, name: "Contract - Paradiso Amsterdam", type: "contract", date: "2026-01-12", size: "245 KB", show: "Paradiso" },
  { id: 2, name: "Contract - Berghain Berlin", type: "contract", date: "2026-01-08", size: "238 KB", show: "Berghain" },
  { id: 3, name: "Technical Rider 2026", type: "rider", date: "2026-01-01", size: "1.2 MB", show: "All Shows" },
  { id: 4, name: "Hospitality Rider 2026", type: "rider", date: "2026-01-01", size: "890 KB", show: "All Shows" },
  { id: 5, name: "Invoice #INV-2026-001", type: "invoice", date: "2026-01-20", size: "156 KB", show: "Paradiso" },
  { id: 6, name: "Invoice #INV-2026-002", type: "invoice", date: "2026-01-15", size: "148 KB", show: "Club XYZ" },
  { id: 7, name: "Flight AMS-TXL Jan 31", type: "travel", date: "2026-01-25", size: "320 KB", show: "Berghain" },
  { id: 8, name: "Hotel Confirmation Berlin", type: "travel", date: "2026-01-25", size: "180 KB", show: "Berghain" },
];

const typeConfig: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  contract: { icon: FileSignature, color: "bg-blue-500/20 text-blue-500", label: "Contracts" },
  rider: { icon: FileText, color: "bg-purple-500/20 text-purple-500", label: "Riders" },
  invoice: { icon: Receipt, color: "bg-emerald-500/20 text-emerald-500", label: "Invoices" },
  travel: { icon: Ticket, color: "bg-orange-500/20 text-orange-500", label: "Travel" },
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
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Documents
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Access contracts, riders, invoices, and travel documents.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {groupedByType.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.type}
              onClick={() => setTypeFilter(typeFilter === type.type ? "all" : type.type)}
              className={`p-4 rounded-xl border transition-colors ${
                typeFilter === type.type
                  ? "bg-purple-500/20 border-purple-500/50"
                  : "bg-[var(--vayo-gray-900)] border-[var(--vayo-gray-800)] hover:border-[var(--vayo-gray-700)]"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg ${type.color} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-white">{type.count}</p>
              <p className="text-sm text-[var(--vayo-gray-500)]">{type.label}</p>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--vayo-gray-500)]" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
        <div className="divide-y divide-[var(--vayo-gray-800)]">
          {filteredDocuments.map((doc) => {
            const config = typeConfig[doc.type];
            const Icon = config.icon;
            return (
              <div key={doc.id} className="flex items-center justify-between p-4 hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${config.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{doc.name}</p>
                    <div className="flex items-center gap-3 text-sm text-[var(--vayo-gray-500)]">
                      <span>{doc.show}</span>
                      <span>•</span>
                      <span>{new Date(doc.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg text-[var(--vayo-gray-400)]">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
