"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import { motion } from "framer-motion";
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
  Filter,
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Star,
  TrendingUp,
  Eye,
  Edit,
  ExternalLink,
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
  {
    id: 5,
    name: "Neon Dreams",
    genre: "Synthwave",
    location: "Paris, FR",
    rating: 4.6,
    shows: 67,
    revenue: "€189,000",
    status: "active",
    image: null,
    initials: "ND",
    email: "booking@neondreams.fr",
    phone: "+33 1 23 45 67 89",
  },
  {
    id: 6,
    name: "Pulse",
    genre: "Drum & Bass",
    location: "Bristol, UK",
    rating: 4.8,
    shows: 203,
    revenue: "€567,000",
    status: "active",
    image: null,
    initials: "PL",
    email: "info@pulsemusic.uk",
    phone: "+44 117 123 4567",
  },
];

export default function ArtistsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || artist.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
            Artists
          </h1>
          <p className="text-[var(--vayo-gray-400)]">
            Manage your artist roster and their profiles.
          </p>
        </div>
        <button className="btn-primary text-sm py-2.5">
          <Plus className="w-4 h-4" />
          Add Artist
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--vayo-gray-500)]" />
          <input
            type="text"
            placeholder="Search artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-[var(--vayo-accent)]"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] text-white focus:outline-none focus:border-[var(--vayo-accent)]"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div className="flex rounded-xl border border-[var(--vayo-gray-800)] overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`px-4 py-2.5 ${view === "grid" ? "bg-[var(--vayo-accent)] text-white" : "bg-[var(--vayo-gray-900)] text-[var(--vayo-gray-400)]"}`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-4 py-2.5 ${view === "list" ? "bg-[var(--vayo-accent)] text-white" : "bg-[var(--vayo-gray-900)] text-[var(--vayo-gray-400)]"}`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Artists Grid */}
      {view === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden hover:border-[var(--vayo-gray-700)] transition-colors group"
            >
              {/* Header */}
              <div className="relative p-6 pb-4">
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg bg-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  {artist.image ? (
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl font-bold">
                      {artist.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{artist.name}</h3>
                    <p className="text-sm text-[var(--vayo-gray-400)]">{artist.genre}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-[var(--vayo-gray-500)]" />
                      <span className="text-xs text-[var(--vayo-gray-500)]">{artist.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 px-6 py-4 border-t border-[var(--vayo-gray-800)]">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{artist.rating}</span>
                  </div>
                  <p className="text-xs text-[var(--vayo-gray-500)]">Rating</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white">{artist.shows}</p>
                  <p className="text-xs text-[var(--vayo-gray-500)]">Shows</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-[var(--vayo-accent)]">{artist.revenue}</p>
                  <p className="text-xs text-[var(--vayo-gray-500)]">Revenue</p>
                </div>
              </div>

              {/* Contact */}
              <div className="px-6 py-4 border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-800)]/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a href={`mailto:${artist.email}`} className="p-2 rounded-lg hover:bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={`tel:${artist.phone}`} className="p-2 rounded-lg hover:bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    artist.status === "active"
                      ? "bg-emerald-500/20 text-emerald-500"
                      : "bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]"
                  }`}>
                    {artist.status.charAt(0).toUpperCase() + artist.status.slice(1)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--vayo-gray-800)]">
                <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Artist</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)] hidden md:table-cell">Genre</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--vayo-gray-400)] hidden lg:table-cell">Location</th>
                <th className="text-center p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Shows</th>
                <th className="text-right p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Revenue</th>
                <th className="text-center p-4 text-sm font-medium text-[var(--vayo-gray-400)]">Status</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredArtists.map((artist) => (
                <tr key={artist.id} className="border-b border-[var(--vayo-gray-800)] hover:bg-[var(--vayo-gray-800)]/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {artist.image ? (
                        <img 
                          src={artist.image} 
                          alt={artist.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-semibold text-sm">
                          {artist.initials}
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-white">{artist.name}</p>
                        <p className="text-sm text-[var(--vayo-gray-500)] md:hidden">{artist.genre}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-[var(--vayo-gray-300)] hidden md:table-cell">{artist.genre}</td>
                  <td className="p-4 text-[var(--vayo-gray-300)] hidden lg:table-cell">{artist.location}</td>
                  <td className="p-4 text-center text-white">{artist.shows}</td>
                  <td className="p-4 text-right text-[var(--vayo-accent)] font-medium">{artist.revenue}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      artist.status === "active"
                        ? "bg-emerald-500/20 text-emerald-500"
                        : "bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]"
                    }`}>
                      {artist.status.charAt(0).toUpperCase() + artist.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="p-2 hover:bg-[var(--vayo-gray-700)] rounded-lg">
                      <MoreHorizontal className="w-4 h-4 text-[var(--vayo-gray-400)]" />
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
