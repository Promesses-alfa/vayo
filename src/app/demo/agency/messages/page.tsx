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
  PartyPopper,
  Building2,
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

const conversations = [
  {
    id: 1,
    name: "Live Nation UK",
    avatar: "LN",
    type: "promoter",
    lastMessage: "Great, we'll send the contract tomorrow.",
    time: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "DJ Storm",
    avatar: "DS",
    type: "artist",
    lastMessage: "Can you check my availability for March?",
    time: "9:45 AM",
    unread: 1,
    online: true,
  },
  {
    id: 3,
    name: "Summer Sounds Festival",
    avatar: "SS",
    type: "festival",
    lastMessage: "Advancing form completed. Check your dashboard.",
    time: "8:15 AM",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: "Fabric London",
    avatar: "FL",
    type: "venue",
    lastMessage: "The rider has been approved.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "The Waves",
    avatar: "TW",
    type: "artist",
    lastMessage: "We need to discuss the tour schedule.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 6,
    name: "Fusion Festival",
    avatar: "FF",
    type: "festival",
    lastMessage: "Technical rider received. Advancing in progress.",
    time: "2 days ago",
    unread: 0,
    online: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Summer Sounds Festival",
    content: "Hi Sarah, we've completed the advancing form for DJ Storm. All technical requirements are synced.",
    time: "8:10 AM",
    isOwn: false,
    type: "system",
  },
  {
    id: 2,
    sender: "You",
    content: "Perfect! I can see it in the dashboard. Travel details will be updated by end of day.",
    time: "8:15 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Summer Sounds Festival",
    content: "Great. The artist portal will update automatically once you submit travel info.",
    time: "8:16 AM",
    isOwn: false,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "festival":
      return PartyPopper;
    case "artist":
      return Users;
    case "promoter":
      return Building2;
    default:
      return Users;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "festival":
      return "bg-[#a855f7]";
    case "artist":
      return "bg-[#f97316]";
    case "promoter":
      return "bg-[#3b82f6]";
    default:
      return "bg-[#00d4aa]";
  }
};

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[2]);
  const [newMessage, setNewMessage] = useState("");

  const TypeIcon = getTypeIcon(selectedConversation.type);
  const typeColor = getTypeColor(selectedConversation.type);

  return (
    <DashboardLayout
      type="agency"
      navItems={navItems}
      userName="Sarah van der Berg"
      userRole="Agency Director"
    >
      <div className="h-[calc(100vh-12rem)] flex rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
        {/* Conversations List */}
        <div className="w-80 bg-gray-50 border-r border-gray-100 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>Messages</h2>
              <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00d4aa] font-medium"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => {
              const ConvIcon = getTypeIcon(conv.type);
              const convColor = getTypeColor(conv.type);
              return (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-gray-50 ${
                    selectedConversation.id === conv.id
                      ? "bg-white border-l-4 border-l-[#00d4aa]"
                      : "hover:bg-white"
                  }`}
                >
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-2xl ${convColor} flex items-center justify-center text-white font-bold`}>
                      {conv.avatar}
                    </div>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-bold text-gray-900 truncate">{conv.name}</p>
                      <span className="text-[10px] font-bold text-gray-400">{conv.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate font-medium">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="w-5 h-5 rounded-full bg-[#00d4aa] flex items-center justify-center text-[10px] text-white font-bold">
                      {conv.unread}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className={`relative w-10 h-10 rounded-2xl ${typeColor} flex items-center justify-center text-white font-bold`}>
                {selectedConversation.avatar}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{selectedConversation.name}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  {selectedConversation.type} • {selectedConversation.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                    msg.isOwn
                      ? "bg-[#00d4aa] text-white rounded-br-md"
                      : "bg-white border border-gray-200 text-gray-900 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm font-medium">{msg.content}</p>
                  <p className={`text-[10px] mt-1 font-bold ${msg.isOwn ? "text-white/70" : "text-gray-400"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00d4aa] font-medium"
              />
              <button className="p-2.5 bg-[#00d4aa] hover:bg-[#00b894] rounded-xl text-white transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
