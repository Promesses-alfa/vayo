"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Music,
  CalendarDays,
  DollarSign,
  MapPin,
  MessageSquare,
  Settings,
  Zap,
  Search,
  Plus,
  GripVertical,
  Download,
  Send,
  Star,
  Filter,
  Users,
  Globe,
  CheckCircle2,
  Clock,
  X,
  ChevronDown,
  FileText,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/festival", icon: LayoutDashboard },
  { label: "Lineup Builder", href: "/demo/festival/lineup", icon: Music },
  { label: "Advancing", href: "/demo/festival/requests", icon: Zap, badge: 14 },
  { label: "Schedule", href: "/demo/festival/schedule", icon: CalendarDays },
  { label: "Budget", href: "/demo/festival/budget", icon: DollarSign },
  { label: "Stages", href: "/demo/festival/stages", icon: MapPin },
  { label: "Messages", href: "/demo/festival/messages", icon: MessageSquare },
  { label: "Settings", href: "/demo/festival/settings", icon: Settings },
];

// Artist Database
const artistDatabase = [
  { id: 1, name: "DJ Storm", genre: "Techno", fee: "€4,500", available: true, rating: 4.9, streams: "12.5M", agency: "Dutch Dance Agency", location: "Amsterdam, NL" },
  { id: 2, name: "Aurora Beats", genre: "Progressive House", fee: "€6,000", available: true, rating: 4.8, streams: "8.2M", agency: "Dutch Dance Agency", location: "Berlin, DE" },
  { id: 3, name: "The Waves", genre: "Indie Rock", fee: "€12,000", available: false, rating: 4.7, streams: "6.8M", agency: "Live Nation", location: "London, UK" },
  { id: 4, name: "Neon Dreams", genre: "Synthwave", fee: "€3,500", available: true, rating: 4.6, streams: "4.1M", agency: "Indie Bookings", location: "Paris, FR" },
  { id: 5, name: "Pulse", genre: "Drum & Bass", fee: "€5,000", available: true, rating: 4.9, streams: "15.2M", agency: "Bass Nation", location: "Bristol, UK" },
  { id: 6, name: "Electric Soul", genre: "House", fee: "€4,000", available: true, rating: 4.5, streams: "3.2M", agency: "House United", location: "Ibiza, ES" },
  { id: 7, name: "Cosmic Rays", genre: "Ambient", fee: "€2,500", available: true, rating: 4.4, streams: "1.8M", agency: "Indie Bookings", location: "Copenhagen, DK" },
  { id: 8, name: "Bass Mechanic", genre: "Dubstep", fee: "€5,500", available: true, rating: 4.7, streams: "7.5M", agency: "Bass Nation", location: "Los Angeles, US" },
  { id: 9, name: "Midnight Express", genre: "Techno", fee: "€3,000", available: true, rating: 4.3, streams: "2.1M", agency: "Dutch Dance Agency", location: "Rotterdam, NL" },
  { id: 10, name: "Velocity", genre: "Trance", fee: "€8,000", available: true, rating: 4.8, streams: "9.4M", agency: "Armada Music", location: "Amsterdam, NL" },
];

// Stages configuration
const stages = [
  { id: "main", name: "Main Stage", budget: 1200000, spent: 950000, slots: 12 },
  { id: "bass", name: "Bass Stage", budget: 400000, spent: 280000, slots: 8 },
  { id: "sunset", name: "Sunset Stage", budget: 250000, spent: 150000, slots: 10 },
];

// Initial lineup
const initialLineup: Record<string, Array<{ artist: typeof artistDatabase[0]; day: string; time: string; status: string }>> = {
  main: [
    { artist: artistDatabase[0], day: "Friday", time: "23:00", status: "confirmed" },
    { artist: artistDatabase[1], day: "Saturday", time: "22:00", status: "confirmed" },
    { artist: artistDatabase[2], day: "Sunday", time: "21:00", status: "pending" },
  ],
  bass: [
    { artist: artistDatabase[4], day: "Friday", time: "20:00", status: "confirmed" },
    { artist: artistDatabase[7], day: "Sunday", time: "20:00", status: "confirmed" },
  ],
  sunset: [
    { artist: artistDatabase[8], day: "Friday", time: "18:00", status: "confirmed" },
    { artist: artistDatabase[6], day: "Saturday", time: "17:00", status: "inquiry" },
  ],
};

export default function LineupBuilderPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("all");
  const [lineup, setLineup] = useState(initialLineup);
  const [selectedArtist, setSelectedArtist] = useState<typeof artistDatabase[0] | null>(null);
  const [showApproachModal, setShowApproachModal] = useState(false);
  const [draggedArtist, setDraggedArtist] = useState<typeof artistDatabase[0] | null>(null);

  const genres = ["all", "Techno", "House", "Progressive House", "Drum & Bass", "Synthwave", "Ambient", "Trance", "Dubstep", "Indie Rock"];

  const filteredArtists = artistDatabase.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = genreFilter === "all" || artist.genre === genreFilter;
    return matchesSearch && matchesGenre;
  });

  const handleDragStart = (artist: typeof artistDatabase[0]) => {
    setDraggedArtist(artist);
  };

  const handleDrop = (stageId: string) => {
    if (draggedArtist) {
      setLineup({
        ...lineup,
        [stageId]: [
          ...lineup[stageId],
          { artist: draggedArtist, day: "TBD", time: "TBD", status: "inquiry" },
        ],
      });
      setDraggedArtist(null);
    }
  };

  const handleApproach = (artist: typeof artistDatabase[0]) => {
    setSelectedArtist(artist);
    setShowApproachModal(true);
  };

  const removeFromLineup = (stageId: string, index: number) => {
    setLineup({
      ...lineup,
      [stageId]: lineup[stageId].filter((_, i) => i !== index),
    });
  };

  const totalBooked = Object.values(lineup).flat().length;
  const totalConfirmed = Object.values(lineup).flat().filter(s => s.status === "confirmed").length;

  return (
    <DashboardLayout
      type="festival"
      navItems={navItems}
      userName="Emma de Groot"
      userRole="Festival Director"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
            Lineup Builder
          </h1>
          <p className="text-gray-500 font-medium">Search artists, drag & drop to stages, approach agencies directly.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Timetable
          </button>
          <button className="px-4 py-2 bg-[#a855f7] rounded-xl text-sm font-bold text-white hover:bg-[#9333ea] transition-all flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Generate Schedule
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Artists", value: totalBooked, icon: Users, color: "text-[#a855f7]" },
          { label: "Confirmed", value: totalConfirmed, icon: CheckCircle2, color: "text-emerald-500" },
          { label: "Pending", value: totalBooked - totalConfirmed, icon: Clock, color: "text-amber-500" },
          { label: "Database", value: artistDatabase.length, icon: Globe, color: "text-[#3b82f6]" },
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

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Artist Database Search */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden sticky top-24">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>Artist Database</h2>
              
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search artists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#a855f7] font-medium text-sm"
                />
              </div>

              {/* Genre Filter */}
              <select
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 font-bold text-sm outline-none focus:border-[#a855f7]"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre === "all" ? "All Genres" : genre}</option>
                ))}
              </select>
            </div>

            {/* Artist List */}
            <div className="max-h-[500px] overflow-y-auto">
              {filteredArtists.map((artist) => (
                <div
                  key={artist.id}
                  draggable
                  onDragStart={() => handleDragStart(artist)}
                  className="p-4 border-b border-gray-50 hover:bg-gray-50/50 cursor-grab active:cursor-grabbing transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-full absolute left-0 bg-transparent group-hover:bg-[#a855f7] transition-all" />
                    <GripVertical className="w-4 h-4 text-gray-300 group-hover:text-[#a855f7]" />
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 font-bold group-hover:bg-[#a855f7]/10 group-hover:text-[#a855f7] transition-all">
                      {artist.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-gray-900 truncate">{artist.name}</p>
                        {artist.available ? (
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                        )}
                      </div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{artist.genre} • {artist.fee}</p>
                    </div>
                    <button
                      onClick={() => handleApproach(artist)}
                      className="p-2 bg-[#a855f7]/10 text-[#a855f7] rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-[#a855f7] hover:text-white"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stages & Lineup */}
        <div className="lg:col-span-2 space-y-6">
          {stages.map((stage) => (
            <div
              key={stage.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(stage.id)}
              className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden"
            >
              {/* Stage Header */}
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>{stage.name}</h3>
                    <p className="text-sm font-bold text-gray-500">{lineup[stage.id]?.length || 0} / {stage.slots} slots filled</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">€{(stage.spent / 1000).toFixed(0)}K</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">of €{(stage.budget / 1000).toFixed(0)}K budget</p>
                  </div>
                </div>
                {/* Budget Progress */}
                <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#a855f7] rounded-full" style={{ width: `${(stage.spent / stage.budget) * 100}%` }} />
                </div>
              </div>

              {/* Lineup */}
              <div className="p-4">
                {lineup[stage.id]?.length > 0 ? (
                  <div className="space-y-2">
                    {lineup[stage.id].map((slot, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-gray-200 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <GripVertical className="w-4 h-4 text-gray-300 cursor-grab" />
                          <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] font-bold">
                            {slot.artist.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{slot.artist.name}</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{slot.day} • {slot.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                            slot.status === "confirmed" ? "bg-emerald-100 text-emerald-600" :
                            slot.status === "pending" ? "bg-amber-100 text-amber-600" :
                            "bg-purple-100 text-purple-600"
                          }`}>
                            {slot.status}
                          </span>
                          <button
                            onClick={() => removeFromLineup(stage.id, idx)}
                            className="p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center border-2 border-dashed border-gray-200 rounded-2xl">
                    <Music className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm font-bold text-gray-400">Drag artists here</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Modal */}
      {showApproachModal && selectedArtist && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Approach Artist</h2>
                <button onClick={() => setShowApproachModal(false)} className="p-2 hover:bg-gray-100 rounded-xl">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
            <div className="p-6">
              {/* Artist Info */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] text-2xl font-bold">
                  {selectedArtist.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{selectedArtist.name}</h3>
                  <p className="text-sm text-gray-500">{selectedArtist.genre} • {selectedArtist.location}</p>
                  <p className="text-sm font-bold text-[#a855f7]">{selectedArtist.fee}</p>
                </div>
              </div>

              {/* Agency Contact */}
              <div className="mb-6 p-4 bg-[#00d4aa]/10 rounded-2xl">
                <p className="text-[10px] font-bold text-[#00d4aa] uppercase tracking-widest mb-1">Agency</p>
                <p className="text-sm font-bold text-gray-900">{selectedArtist.agency}</p>
                <p className="text-xs text-gray-500">Request will be sent directly via VAYO</p>
              </div>

              {/* Booking Request Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Stage</label>
                  <select className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold outline-none focus:border-[#a855f7]">
                    {stages.map((stage) => (
                      <option key={stage.id} value={stage.id}>{stage.name}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Day</label>
                    <select className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold outline-none focus:border-[#a855f7]">
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Time</label>
                    <select className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold outline-none focus:border-[#a855f7]">
                      <option>18:00</option>
                      <option>20:00</option>
                      <option>22:00</option>
                      <option>00:00</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Fee Offer</label>
                  <input
                    type="text"
                    defaultValue={selectedArtist.fee}
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold outline-none focus:border-[#a855f7]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Add a personal message..."
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-bold outline-none focus:border-[#a855f7] resize-none"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  setShowApproachModal(false);
                  // In real app, this would send the request
                }}
                className="w-full mt-6 py-4 bg-[#a855f7] text-white rounded-2xl font-bold hover:bg-[#9333ea] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Booking Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Direct Integration Banner */}
      <div className="mt-12 bg-[#00d4aa] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12">
          <Music className="w-48 h-48 text-white opacity-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Direct Agency Connection</h2>
          <p className="text-white/80 font-medium mb-8">
            Search the artist database, check availability in real-time, and send booking requests directly to agencies.
            When they confirm, advancing starts automatically. No emails, no phone calls, no delays.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-[#00d4aa] rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
              Export Full Timetable
            </button>
            <button className="px-6 py-3 bg-white/20 text-white rounded-2xl font-bold text-sm hover:bg-white/30 transition-all">
              Share with Team
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
