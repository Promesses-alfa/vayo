"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
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
  Plug,
  Globe,
  Plane,
  CreditCard,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Search,
  Building2,
  Hotel,
  Car,
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

const integrations = [
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Two-way sync with Google Calendar. All bookings appear automatically.",
    icon: Calendar,
    status: "connected",
    lastSync: "2 min ago",
    category: "calendar",
  },
  {
    id: "outlook-calendar",
    name: "Outlook Calendar",
    description: "Sync with Microsoft Outlook for team calendar sharing.",
    icon: Calendar,
    status: "available",
    lastSync: null,
    category: "calendar",
  },
  {
    id: "skyscanner",
    name: "Skyscanner",
    description: "Search and book flights directly within VAYO.",
    icon: Plane,
    status: "connected",
    lastSync: "Live",
    category: "travel",
  },
  {
    id: "booking-com",
    name: "Booking.com",
    description: "Search and book hotels for your artists.",
    icon: Hotel,
    status: "connected",
    lastSync: "Live",
    category: "travel",
  },
  {
    id: "uber-business",
    name: "Uber for Business",
    description: "Manage ground transport for all your artists.",
    icon: Car,
    status: "available",
    lastSync: null,
    category: "travel",
  },
  {
    id: "stripe",
    name: "Stripe Payments",
    description: "Process payments and invoices automatically.",
    icon: CreditCard,
    status: "connected",
    lastSync: "Live",
    category: "finance",
  },
  {
    id: "xero",
    name: "Xero Accounting",
    description: "Sync invoices and expenses with Xero.",
    icon: DollarSign,
    status: "available",
    lastSync: null,
    category: "finance",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    description: "Connect your QuickBooks account for accounting sync.",
    icon: DollarSign,
    status: "available",
    lastSync: null,
    category: "finance",
  },
];

const flightSearchResults = [
  { airline: "KLM", departure: "10:30", arrival: "11:45", from: "AMS", to: "TXL", price: 189, duration: "1h 15m" },
  { airline: "Lufthansa", departure: "14:00", arrival: "15:20", from: "AMS", to: "TXL", price: 156, duration: "1h 20m" },
  { airline: "easyJet", departure: "07:45", arrival: "09:05", from: "AMS", to: "TXL", price: 89, duration: "1h 20m" },
];

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState<"integrations" | "flights" | "hotels">("integrations");
  const [flightSearch, setFlightSearch] = useState({ from: "AMS", to: "TXL", date: "2026-02-01" });

  const categories = [
    { id: "all", name: "All" },
    { id: "calendar", name: "Calendar" },
    { id: "travel", name: "Travel" },
    { id: "finance", name: "Finance" },
  ];

  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredIntegrations = integrations.filter(
    (i) => categoryFilter === "all" || i.category === categoryFilter
  );

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
            Integrations & Travel
          </h1>
          <p className="text-gray-500 font-medium">Connect external services and book travel directly.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-2xl w-fit">
        {[
          { id: "integrations", label: "Integrations", icon: Plug },
          { id: "flights", label: "Book Flights", icon: Plane },
          { id: "hotels", label: "Book Hotels", icon: Hotel },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === tab.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "integrations" && (
        <>
          {/* Category Filter */}
          <div className="flex gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  categoryFilter === cat.id
                    ? "bg-[#00d4aa] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.id}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#00d4aa]/10 transition-all">
                    <integration.icon className="w-6 h-6 text-gray-600 group-hover:text-[#00d4aa]" />
                  </div>
                  {integration.status === "connected" ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-bold uppercase">
                      <CheckCircle2 className="w-3 h-3" />
                      Connected
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-[10px] font-bold uppercase">
                      Available
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{integration.description}</p>
                <div className="flex items-center justify-between">
                  {integration.lastSync && (
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-400">
                      <RefreshCw className="w-3 h-3" />
                      {integration.lastSync}
                    </span>
                  )}
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      integration.status === "connected"
                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        : "bg-[#00d4aa] text-white hover:bg-[#00b894]"
                    }`}
                  >
                    {integration.status === "connected" ? "Configure" : "Connect"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "flights" && (
        <div className="space-y-8">
          {/* Flight Search */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Search Flights</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">From</label>
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={flightSearch.from}
                    onChange={(e) => setFlightSearch({ ...flightSearch, from: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold focus:outline-none focus:border-[#00d4aa]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">To</label>
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90" />
                  <input
                    type="text"
                    value={flightSearch.to}
                    onChange={(e) => setFlightSearch({ ...flightSearch, to: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold focus:outline-none focus:border-[#00d4aa]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Date</label>
                <input
                  type="date"
                  value={flightSearch.date}
                  onChange={(e) => setFlightSearch({ ...flightSearch, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold focus:outline-none focus:border-[#00d4aa]"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full px-6 py-3 bg-[#00d4aa] text-white rounded-2xl font-bold hover:bg-[#00b894] transition-all flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Flight Results */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Available Flights</h3>
              <p className="text-sm text-gray-500">{flightSearch.from} → {flightSearch.to} on {flightSearch.date}</p>
            </div>
            <div className="divide-y divide-gray-50">
              {flightSearchResults.map((flight, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center font-bold text-gray-700">
                      {flight.airline.substring(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{flight.airline}</p>
                      <p className="text-xs text-gray-500">{flight.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{flight.departure}</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">{flight.from}</p>
                    </div>
                    <div className="w-20 border-t-2 border-dashed border-gray-300 relative">
                      <Plane className="w-4 h-4 text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{flight.arrival}</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">{flight.to}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-2xl font-bold text-[#00d4aa]">€{flight.price}</p>
                    <button className="px-6 py-2 bg-[#00d4aa] text-white rounded-xl font-bold text-sm hover:bg-[#00b894] transition-all">
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "hotels" && (
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>Search Hotels</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">City</label>
              <input
                type="text"
                placeholder="Berlin"
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold focus:outline-none focus:border-[#00d4aa]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Check-in</label>
              <input
                type="date"
                defaultValue="2026-02-01"
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold focus:outline-none focus:border-[#00d4aa]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Check-out</label>
              <input
                type="date"
                defaultValue="2026-02-03"
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold focus:outline-none focus:border-[#00d4aa]"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full px-6 py-3 bg-[#00d4aa] text-white rounded-2xl font-bold hover:bg-[#00b894] transition-all flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
          
          {/* Hotel Results Placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "SO/Berlin Das Stue", rating: 5, price: 285, distance: "2.1 km from venue" },
              { name: "Hotel Adlon Kempinski", rating: 5, price: 420, distance: "3.5 km from venue" },
              { name: "Motel One Berlin", rating: 4, price: 89, distance: "1.8 km from venue" },
            ].map((hotel, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-4 hover:shadow-lg transition-all">
                <div className="h-32 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                  <Hotel className="w-12 h-12 text-gray-300" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{hotel.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{hotel.distance}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: hotel.rating }).map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                  <p className="text-lg font-bold text-[#00d4aa]">€{hotel.price}<span className="text-xs text-gray-400">/night</span></p>
                </div>
                <button className="w-full mt-3 py-2 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-[#00d4aa] hover:text-white transition-all">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Integration Banner */}
      <div className="mt-12 bg-[#a855f7] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Plug className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>All-in-One Platform</h2>
          <p className="text-white/80 font-medium mb-8">
            No more switching between tools. Book flights, hotels, and manage calendars directly in VAYO.
            Everything syncs automatically. Travel details appear in artist portals instantly.
          </p>
          <button className="px-6 py-3 bg-white text-[#a855f7] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
            View All Integrations
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
