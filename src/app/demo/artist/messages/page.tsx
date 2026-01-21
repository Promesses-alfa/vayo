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
  Send,
  Paperclip,
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

const conversations = [
  { id: 1, name: "Nightlife Agency", avatar: "NA", lastMessage: "Your flight is booked!", time: "10:30 AM", unread: 1, online: true },
  { id: 2, name: "Paradiso Amsterdam", avatar: "PA", lastMessage: "Looking forward to the show!", time: "Yesterday", unread: 0, online: false },
  { id: 3, name: "Berghain", avatar: "BH", lastMessage: "Please confirm the rider.", time: "2 days ago", unread: 0, online: true },
];

const messages = [
  { id: 1, sender: "Nightlife Agency", content: "Hi Storm! Just wanted to let you know we've booked your flight for the Berlin gig.", time: "10:15 AM", isOwn: false },
  { id: 2, sender: "You", content: "Perfect, thanks! What time is the flight?", time: "10:20 AM", isOwn: true },
  { id: 3, sender: "Nightlife Agency", content: "Feb 1st at 14:30, KLM from Amsterdam. I'll send the e-ticket to your documents folder.", time: "10:25 AM", isOwn: false },
  { id: 4, sender: "Nightlife Agency", content: "Your flight is booked!", time: "10:30 AM", isOwn: false },
];

export default function ArtistMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <DashboardLayout
      type="artist"
      navItems={navItems}
      userName="DJ Storm"
      userRole="Artist"
    >
      <div className="h-[calc(100vh-8rem)] flex rounded-xl overflow-hidden border border-[var(--vayo-gray-800)]">
        {/* Conversations */}
        <div className="w-80 bg-[var(--vayo-gray-900)] border-r border-[var(--vayo-gray-800)] flex flex-col">
          <div className="p-4 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--vayo-gray-500)]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] text-sm text-white placeholder-[var(--vayo-gray-500)]"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`flex items-center gap-3 p-4 cursor-pointer ${
                  selectedConversation.id === conv.id ? "bg-[var(--vayo-gray-800)]" : "hover:bg-[var(--vayo-gray-800)]/50"
                }`}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                    {conv.avatar}
                  </div>
                  {conv.online && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[var(--vayo-gray-900)]" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium truncate">{conv.name}</p>
                    <span className="text-xs text-[var(--vayo-gray-500)]">{conv.time}</span>
                  </div>
                  <p className="text-sm text-[var(--vayo-gray-400)] truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-xs text-white">
                    {conv.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="flex-1 flex flex-col bg-[var(--vayo-black)]">
          <div className="p-4 border-b border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-900)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                {selectedConversation.avatar}
              </div>
              <div>
                <p className="text-white font-medium">{selectedConversation.name}</p>
                <p className="text-xs text-[var(--vayo-gray-500)]">
                  {selectedConversation.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                  msg.isOwn ? "bg-purple-500 text-white rounded-br-md" : "bg-[var(--vayo-gray-800)] text-white rounded-bl-md"
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.isOwn ? "text-white/70" : "text-[var(--vayo-gray-500)]"}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-900)]">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)]"
              />
              <button className="p-2.5 bg-purple-500 hover:bg-purple-600 rounded-xl text-white">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
