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
  CheckCircle2,
  Clock,
  MoreHorizontal,
  FileSignature,
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
    type: "venue",
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
    type: "venue",
  },
  {
    id: "CTR-2026-003",
    title: "DJ Storm - Summer Sounds Festival",
    artist: "DJ Storm",
    promoter: "Summer Sounds",
    showDate: "2026-07-15",
    value: 45000,
    status: "signed",
    sentDate: "2026-01-08",
    signedDate: "2026-01-09",
    type: "festival",
    advancingLinked: true,
  },
  {
    id: "CTR-2026-004",
    title: "Aurora Beats - Fusion Festival",
    artist: "Aurora Beats",
    promoter: "Fusion Festival",
    showDate: "2026-06-20",
    value: 35000,
    status: "signed",
    sentDate: "2026-01-05",
    signedDate: "2026-01-06",
    type: "festival",
    advancingLinked: true,
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  signed: { label: "Signed", color: "bg-emerald-100 text-emerald-600", icon: CheckCircle2 },
  awaiting_signature: { label: "Awaiting", color: "bg-amber-100 text-amber-600", icon: Clock },
  draft: { label: "Draft", color: "bg-gray-100 text-gray-600", icon: FileText },
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Contract Hub
          </h1>
          <p className="text-gray-500 font-medium">Native e-signatures. No third-party fees. Instant sync.</p>
        </div>
        <button className="px-4 py-2 bg-[#00d4aa] rounded-xl text-sm font-bold text-white hover:bg-[#00b894] transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Contract
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Contracts", value: contracts.length, icon: FileText, color: "text-[#00d4aa]" },
          { label: "Signed", value: contracts.filter(c => c.status === "signed").length, icon: CheckCircle2, color: "text-emerald-500" },
          { label: "Awaiting", value: contracts.filter(c => c.status === "awaiting_signature").length, icon: Clock, color: "text-amber-500" },
          { label: "Festival Contracts", value: contracts.filter(c => c.type === "festival").length, icon: FileSignature, color: "text-[#a855f7]" },
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

      {/* Search & Filter */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search contracts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00d4aa] font-medium"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-sm outline-none focus:border-[#00d4aa]"
          >
            <option value="all">All Status</option>
            <option value="signed">Signed</option>
            <option value="awaiting_signature">Awaiting Signature</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Contracts List */}
      <div className="space-y-4">
        {filteredContracts.map((contract) => {
          const status = statusConfig[contract.status];
          const StatusIcon = status.icon;

          return (
            <div
              key={contract.id}
              className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-all group cursor-pointer"
              onClick={() => handleViewContract(contract)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#00d4aa] group-hover:text-white transition-all">
                      <FileSignature className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{contract.title}</h3>
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${status.color}`}>
                          {status.label}
                        </span>
                        {contract.advancingLinked && (
                          <span className="px-2 py-0.5 bg-[#a855f7]/10 text-[#a855f7] rounded-lg text-[10px] font-bold uppercase">
                            Advancing Linked
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500">
                        <span>{contract.id}</span>
                        <span>•</span>
                        <span>{contract.promoter}</span>
                        <span>•</span>
                        <span>Show: {formatDate(contract.showDate)}</span>
                        {contract.sentDate && (
                          <>
                            <span>•</span>
                            <span>Sent: {formatDate(contract.sentDate)}</span>
                          </>
                        )}
                        {contract.signedDate && (
                          <>
                            <span>•</span>
                            <span className="text-emerald-600">Signed: {formatDate(contract.signedDate)}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Value</p>
                      <p className="text-xl font-bold text-gray-900">€{contract.value.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <button className="p-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 hover:text-[#00d4aa] hover:border-[#00d4aa] transition-all">
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
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Native E-Signature Banner */}
      <div className="mt-12 bg-[#a855f7] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <FileSignature className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Native Digital Contracts</h2>
          <p className="text-white/80 font-medium mb-8">
            Built-in e-signature module. No third-party tools, no per-contract fees. 
            When a festival contract is signed, advancing requirements unlock automatically. 
            Everything syncs in real-time.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-[#a855f7] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
              Create Contract Template
            </button>
            <button className="px-6 py-3 bg-white/20 text-white rounded-2xl font-bold text-sm hover:bg-white/30 transition-all">
              View E-Signature Docs
            </button>
          </div>
        </div>
      </div>

      {/* Contract Preview Modal */}
      <ContractModal
        contract={selectedContract}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSign={() => {
          handleCloseModal();
        }}
        onSend={() => {
          handleCloseModal();
        }}
      />
    </DashboardLayout>
  );
}
