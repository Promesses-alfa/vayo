"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ContractModal from "@/components/dashboard/ContractModal";
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
  Search,
  Plus,
  Download,
  Send,
  Eye,
  Edit,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreHorizontal,
  FileSignature,
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

const contracts = [
  {
    id: "CTR-2026-001",
    title: "DJ Storm - Paradiso Amsterdam",
    artist: "DJ Storm",
    promoter: "ID&T",
    showDate: "2026-01-24",
    value: 4500,
    status: "signed",
    sentDate: "2026-01-10",
    signedDate: "2026-01-12",
  },
  {
    id: "CTR-2026-002",
    title: "The Waves - O2 Arena London",
    artist: "The Waves",
    promoter: "Live Nation",
    showDate: "2026-01-28",
    value: 12000,
    status: "awaiting_signature",
    sentDate: "2026-01-15",
    signedDate: null,
  },
  {
    id: "CTR-2026-003",
    title: "Aurora Beats - Berghain Berlin",
    artist: "Aurora Beats",
    promoter: "Ostgut Ton",
    showDate: "2026-02-02",
    value: 6000,
    status: "signed",
    sentDate: "2026-01-08",
    signedDate: "2026-01-09",
  },
  {
    id: "CTR-2026-004",
    title: "Neon Dreams - Fabric London",
    artist: "Neon Dreams",
    promoter: "Fabric London",
    showDate: "2026-02-05",
    value: 3500,
    status: "awaiting_signature",
    sentDate: "2026-01-18",
    signedDate: null,
  },
  {
    id: "CTR-2026-005",
    title: "Pulse - Rex Club Paris",
    artist: "Pulse",
    promoter: "Rex Club Paris",
    showDate: "2026-02-08",
    value: 2800,
    status: "signed",
    sentDate: "2026-01-05",
    signedDate: "2026-01-06",
  },
  {
    id: "CTR-2026-006",
    title: "DJ Storm - Warehouse Project",
    artist: "DJ Storm",
    promoter: "Warehouse Project",
    showDate: "2026-02-14",
    value: 5500,
    status: "draft",
    sentDate: null,
    signedDate: null,
  },
  {
    id: "CTR-2026-007",
    title: "The Waves - Ziggo Dome",
    artist: "The Waves",
    promoter: "MOJO",
    showDate: "2026-02-20",
    value: 18000,
    status: "draft",
    sentDate: null,
    signedDate: null,
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  signed: { label: "Signed", color: "bg-emerald-500/20 text-emerald-500", icon: CheckCircle },
  awaiting_signature: { label: "Awaiting Signature", color: "bg-yellow-500/20 text-yellow-500", icon: Clock },
  draft: { label: "Draft", color: "bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]", icon: FileText },
  expired: { label: "Expired", color: "bg-red-500/20 text-red-500", icon: AlertCircle },
};

export default function ContractsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedContract, setSelectedContract] = useState<typeof contracts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewContract = (contract: typeof contracts[0]) => {
    setSelectedContract(contract);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContract(null);
  };

  const filteredContracts = contracts.filter((contract) => {
    const matchesSearch =
      contract.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contract.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || contract.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
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
            Contracts
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Create, send, and manage all your contracts.
          </p>
        </div>
        <button className="btn-primary text-sm py-2.5">
          <Plus className="w-4 h-4" />
          New Contract
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Contracts", value: contracts.length, color: "text-white" },
          { label: "Signed", value: contracts.filter(c => c.status === "signed").length, color: "text-emerald-500" },
          { label: "Awaiting", value: contracts.filter(c => c.status === "awaiting_signature").length, color: "text-yellow-500" },
          { label: "Drafts", value: contracts.filter(c => c.status === "draft").length, color: "text-[var(--vayo-gray-400)]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-4">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-[var(--vayo-gray-500)]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--vayo-gray-500)]" />
          <input
            type="text"
            placeholder="Search contracts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-[var(--vayo-accent)]"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white focus:outline-none focus:border-[var(--vayo-accent)]"
        >
          <option value="all">All Status</option>
          <option value="signed">Signed</option>
          <option value="awaiting_signature">Awaiting Signature</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Contracts List */}
      <div className="space-y-4">
        {filteredContracts.map((contract) => {
          const status = statusConfig[contract.status];
          const StatusIcon = status.icon;

          return (
            <div
              key={contract.id}
              className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-5 hover:border-[var(--vayo-gray-700)] transition-colors cursor-pointer"
              onClick={() => handleViewContract(contract)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--vayo-gray-800)] flex items-center justify-center">
                    <FileSignature className="w-6 h-6 text-[var(--vayo-accent)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-white font-semibold">{contract.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--vayo-gray-500)]">
                      {contract.id} • Promoter: {contract.promoter}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm">
                      <span className="text-[var(--vayo-gray-400)]">
                        Show: {formatDate(contract.showDate)}
                      </span>
                      <span className="text-[var(--vayo-gray-400)]">
                        Sent: {formatDate(contract.sentDate)}
                      </span>
                      <span className="text-[var(--vayo-gray-400)]">
                        Signed: {formatDate(contract.signedDate)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-[var(--vayo-accent)]">
                    €{contract.value.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                    <button 
                      onClick={() => handleViewContract(contract)}
                      className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)] hover:text-white transition-colors"
                      title="View Contract"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)] hover:text-white transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    {contract.status === "draft" && (
                      <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)] hover:text-white transition-colors">
                        <Send className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)] hover:text-white transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contract Preview Modal */}
      <ContractModal
        contract={selectedContract}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSign={() => {
          // Handle sign action
          handleCloseModal();
        }}
        onSend={() => {
          // Handle send action
          handleCloseModal();
        }}
      />
    </DashboardLayout>
  );
}
