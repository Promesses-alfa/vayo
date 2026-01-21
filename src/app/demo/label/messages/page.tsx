"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Disc3,
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Settings,
  Search,
  Send,
  Paperclip,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/demo/label", icon: LayoutDashboard },
  { label: "Roster", href: "/demo/label/roster", icon: Users },
  { label: "Releases", href: "/demo/label/releases", icon: Disc3 },
  { label: "Bookings", href: "/demo/label/bookings", icon: Calendar },
  { label: "Revenue", href: "/demo/label/revenue", icon: DollarSign },
  { label: "A&R Pipeline", href: "/demo/label/pipeline", icon: TrendingUp },
  { label: "Messages", href: "/demo/label/messages", icon: MessageSquare, badge: 4 },
  { label: "Settings", href: "/demo/label/settings", icon: Settings },
];

const conversations = [
  { id: 1, name: "DJ Storm", avatar: "DS", lastMessage: "The new track is ready for review", time: "10:30 AM", unread: 2 },
  { id: 2, name: "Aurora Beats", avatar: "AB", lastMessage: "Can we schedule a call?", time: "Yesterday", unread: 0 },
  { id: 3, name: "Distribution Team", avatar: "DT", lastMessage: "Release scheduled for Feb 1", time: "2 days ago", unread: 0 },
];

export default function LabelMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <DashboardLayout
      type="label"
      navItems={navItems}
      userName="Thomas Richter"
      userRole="Label Manager"
    >
      <div className="h-[calc(100vh-8rem)] flex rounded-xl overflow-hidden border border-[var(--vayo-gray-800)]">
        <div className="w-80 bg-[var(--vayo-gray-900)] border-r border-[var(--vayo-gray-800)] flex flex-col">
          <div className="p-4 border-b border-[var(--vayo-gray-800)]">
            <h2 className="text-lg font-semibold text-white mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--vayo-gray-500)]" />
              <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--vayo-gray-800)] text-sm text-white placeholder-[var(--vayo-gray-500)]" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`flex items-center gap-3 p-4 cursor-pointer ${selectedConversation.id === conv.id ? "bg-[var(--vayo-gray-800)]" : "hover:bg-[var(--vayo-gray-800)]/50"}`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                  {conv.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium truncate">{conv.name}</p>
                    <span className="text-xs text-[var(--vayo-gray-500)]">{conv.time}</span>
                  </div>
                  <p className="text-sm text-[var(--vayo-gray-400)] truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center text-xs text-white">{conv.unread}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col bg-[var(--vayo-black)]">
          <div className="p-4 border-b border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-900)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                {selectedConversation.avatar}
              </div>
              <p className="text-white font-medium">{selectedConversation.name}</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[var(--vayo-gray-500)]">Select a conversation to start messaging</p>
          </div>
          <div className="p-4 border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-gray-900)]">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)]">
                <Paperclip className="w-5 h-5" />
              </button>
              <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--vayo-gray-800)] text-white placeholder-[var(--vayo-gray-500)]" />
              <button className="p-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-white">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
