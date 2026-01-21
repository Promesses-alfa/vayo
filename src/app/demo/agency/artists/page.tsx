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
  Search,
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Star,
  Eye,
  Edit,
  ChevronRight,
  Filter,
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

const artists = [
  {
    id: 1,
    name: "TOZO",
    genre: "Hardstyle / Raw",
    location: "Amsterdam, NL",
    rating: 4.9,
    shows: 156,
    revenue: "€485,000",
    status: "active",
    image: "/images/Afbeelding1.jpg",
    initials: "TZ",
    email: "booking@tozo.com",
    phone: "+31 6 1234 5678",
  },
  {
    id: 2,
    name: "Sub Zero Project",
    genre: "Hardstyle",
    location: "Tilburg, NL",
    rating: 4.9,
    shows: 234,
    revenue: "€892,000",
    status: "active",
    image: "/images/Afbeelding2.png",
    initials: "SZP",
    email: "mgmt@subzeroproject.nl",
    phone: "+31 6 9876 5432",
  },
  {
    id: 3,
    name: "The Waves",
    genre: "Indie Rock",
    location: "London, UK",
    rating: 4.8,
    shows: 89,
    revenue: "€312,000",
    status: "active",
    image: null,
    initials: "TW",
    email: "mgmt@thewaves.co.uk",
    phone: "+44 20 7946 0958",
  },
  {
    id: 4,
    name: "Aurora Beats",
    genre: "Progressive House",
    location: "Berlin, DE",
    rating: 4.7,
    shows: 124,
    revenue: "€398,000",
    status: "active",
    image: null,
    initials: "AB",
    email: "contact@aurorabeats.de",
    phone: "+49 30 1234 5678",
  },
];

export default function ArtistsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtists = artists.filter((artist) => 
    artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    artist.genre.toLowerCase().includes(searchQuery.toLowerCase())
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
            Artist Roster
          </h1>
          <p className="text-gray-500 font-medium">Manage and monitor your global roster.</p>
        </div>
        <button className="px-4 py-2 bg-[#00d4aa] rounded-xl text-sm font-bold text-white hover:bg-[#00b894] transition-all flex items-center gap-2 shadow-md shadow-[#00d4aa]/20">
          <Plus className="w-4 h-4" />
          Add New Artist
        </button>
      </div>

      {/* Builder Tools */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, genre or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00d4aa] font-medium"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex bg-gray-100 p-1 rounded-2xl">
              <button
                onClick={() => setView("grid")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  view === "grid" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setView("list")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  view === "list" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                }`}
              >
                List
              </button>
            </div>
            <button className="p-3 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-[#00d4aa] transition-all">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Artists Grid */}
      {view === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  {artist.image ? (
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-20 h-20 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-2xl font-bold">
                      {artist.initials}
                    </div>
                  )}
                  <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-[#00d4aa] transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#00d4aa] transition-colors">{artist.name}</h3>
                  <p className="text-[10px] font-bold text-[#00d4aa] uppercase tracking-widest">{artist.genre}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-gray-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">{artist.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-50">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Total Shows</p>
                    <p className="text-lg font-bold text-gray-900">{artist.shows}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">MTD Revenue</p>
                    <p className="text-lg font-bold text-[#00d4aa]">{artist.revenue.split(',')[0]}K</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-3 bg-gray-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
                    Profile
                  </button>
                  <a href={`mailto:${artist.email}`} className="p-3 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-[#00d4aa] transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Artist</th>
                <th className="text-left p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Shows</th>
                <th className="text-right p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Revenue</th>
                <th className="text-center p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                <th className="p-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredArtists.map((artist) => (
                <tr key={artist.id} className="hover:bg-gray-50/50 transition-all group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      {artist.image ? (
                        <img src={artist.image} className="w-10 h-10 rounded-xl object-cover" alt="" />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 font-bold">{artist.initials}</div>
                      )}
                      <div>
                        <p className="text-gray-900 font-bold">{artist.name}</p>
                        <p className="text-[10px] font-bold text-[#00d4aa] uppercase tracking-widest">{artist.genre}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-sm font-bold text-gray-500">{artist.location}</td>
                  <td className="p-6 text-right font-bold text-gray-900">{artist.shows}</td>
                  <td className="p-6 text-right font-bold text-[#00d4aa]">{artist.revenue}</td>
                  <td className="p-6 text-center">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">Active</span>
                  </td>
                  <td className="p-6 text-right">
                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardLayout>
  );
}
