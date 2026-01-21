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
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Star,
  Archive,
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

const conversations = [
  {
    id: 1,
    name: "Live Nation UK",
    avatar: "LN",
    lastMessage: "Great, we'll send the contract tomorrow.",
    time: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "DJ Storm",
    avatar: "DS",
    lastMessage: "Can you check my availability for March?",
    time: "9:45 AM",
    unread: 1,
    online: true,
  },
  {
    id: 3,
    name: "Fabric London",
    avatar: "FL",
    lastMessage: "The rider has been approved.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: "The Waves",
    avatar: "TW",
    lastMessage: "We need to discuss the tour schedule.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "Warehouse Project",
    avatar: "WP",
    lastMessage: "Is DJ Storm available on Feb 14?",
    time: "2 days ago",
    unread: 3,
    online: true,
  },
  {
    id: 6,
    name: "Aurora Beats",
    avatar: "AB",
    lastMessage: "Thanks for the update!",
    time: "3 days ago",
    unread: 0,
    online: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Live Nation UK",
    content: "Hi Sarah, we'd like to book The Waves for the O2 Arena show on January 28th.",
    time: "10:15 AM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Hello! That sounds great. Let me check their availability and get back to you with the details.",
    time: "10:18 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Live Nation UK",
    content: "Perfect. Our budget for this show is £12,000 all-in. Does that work?",
    time: "10:22 AM",
    isOwn: false,
  },
  {
    id: 4,
    sender: "You",
    content: "I've confirmed with The Waves and they're available! The fee works for us. I'll prepare the contract.",
    time: "10:25 AM",
    isOwn: true,
  },
  {
    id: 5,
    sender: "Live Nation UK",
    content: "Great, we'll send the contract tomorrow.",
    time: "10:30 AM",
    isOwn: false,
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <DashboardLayout
      type="agency"
      navItems={navItems}
      userName="Sarah van der Berg"
      userRole="Agency Director"
    >
      <div className="h-[calc(100vh-8rem)] flex rounded-xl overflow-hidden border border-[var(--vayo-gray-800)]">
        {/* Conversations List */}
        <div className="w-80 bg-[var(--vayo-gray-900)] border-r border-[var(--vayo-gray-800)] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-[var(--vayo-gray-800)]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Messages</h2>
              <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--vayo-gray-500)]" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] border border-[var(--vayo-gray-700)] text-sm text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-[var(--vayo-accent)]"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${
                  selectedConversation.id === conv.id
                    ? "bg-[var(--vayo-gray-800)]"
                    : "hover:bg-[var(--vayo-gray-800)]/50"
                }`}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-semibold">
                    {conv.avatar}
                  </div>
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[var(--vayo-gray-900)]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium truncate">{conv.name}</p>
                    <span className="text-xs text-[var(--vayo-gray-500)]">{conv.time}</span>
                  </div>
                  <p className="text-sm text-[var(--vayo-gray-400)] truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[var(--vayo-accent)] flex items-center justify-center text-xs text-white font-medium">
                    {conv.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-[var(--vayo-black)]">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-900)]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-semibold">
                  {selectedConversation.avatar}
                </div>
                {selectedConversation.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[var(--vayo-gray-900)]" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">{selectedConversation.name}</p>
                <p className="text-xs text-[var(--vayo-gray-500)]">
                  {selectedConversation.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                    msg.isOwn
                      ? "bg-[var(--vayo-accent)] text-white rounded-br-md"
                      : "bg-[var(--vayo-gray-800)] text-white rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.isOwn ? "text-white/70" : "text-[var(--vayo-gray-500)]"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-900)]">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-800)] border border-[var(--vayo-gray-700)] text-white placeholder-[var(--vayo-gray-500)] focus:outline-none focus:border-[var(--vayo-accent)]"
              />
              <button className="p-2.5 bg-[var(--vayo-accent)] hover:bg-[var(--vayo-accent-dark)] rounded-xl text-white transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
