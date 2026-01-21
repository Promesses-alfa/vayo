"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Bell, 
  X, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  DollarSign, 
  Send, 
  Disc3, 
  Share2, 
  Zap,
  MessageSquare,
  UserPlus
} from "lucide-react";
import { Notification, NotificationType } from "@/lib/vayo-data";

interface NotificationPanelProps {
  notifications: Notification[];
  onMarkRead?: (id: string) => void;
  onMarkAllRead?: () => void;
}

const notificationIcons: Record<NotificationType, React.ElementType> = {
  booking_created: Calendar,
  booking_confirmed: CheckCircle2,
  booking_cancelled: X,
  contract_sent: Send,
  contract_signed: FileText,
  invoice_sent: DollarSign,
  invoice_paid: CheckCircle2,
  invoice_overdue: DollarSign,
  advancing_update: Zap,
  release_scheduled: Disc3,
  release_published: Disc3,
  social_post_scheduled: Share2,
  social_post_approval: Share2,
  welcome: UserPlus,
  system: Bell,
};

const notificationColors: Record<NotificationType, string> = {
  booking_created: "text-[#00d4aa] bg-[#00d4aa]/10",
  booking_confirmed: "text-emerald-500 bg-emerald-500/10",
  booking_cancelled: "text-red-500 bg-red-500/10",
  contract_sent: "text-blue-500 bg-blue-500/10",
  contract_signed: "text-emerald-500 bg-emerald-500/10",
  invoice_sent: "text-amber-500 bg-amber-500/10",
  invoice_paid: "text-emerald-500 bg-emerald-500/10",
  invoice_overdue: "text-red-500 bg-red-500/10",
  advancing_update: "text-[#a855f7] bg-[#a855f7]/10",
  release_scheduled: "text-[#3b82f6] bg-[#3b82f6]/10",
  release_published: "text-[#3b82f6] bg-[#3b82f6]/10",
  social_post_scheduled: "text-pink-500 bg-pink-500/10",
  social_post_approval: "text-pink-500 bg-pink-500/10",
  welcome: "text-[#00d4aa] bg-[#00d4aa]/10",
  system: "text-gray-500 bg-gray-500/10",
};

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export default function NotificationPanel({ 
  notifications, 
  onMarkRead, 
  onMarkAllRead 
}: NotificationPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg hover:bg-gray-50 text-gray-500 transition-colors"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-50">
              <h3 className="font-bold text-gray-900">Notifications</h3>
              {unreadCount > 0 && onMarkAllRead && (
                <button 
                  onClick={onMarkAllRead}
                  className="text-sm font-medium text-[#00d4aa] hover:underline"
                >
                  Mark all read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-[400px] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-50">
                  {notifications.map((notification) => {
                    const Icon = notificationIcons[notification.type];
                    const colorClass = notificationColors[notification.type];
                    
                    return (
                      <div 
                        key={notification.id}
                        className={`p-4 hover:bg-gray-50/50 transition-colors ${!notification.read ? "bg-blue-50/30" : ""}`}
                      >
                        <div className="flex gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-semibold text-gray-900 text-sm">
                                {notification.title}
                              </p>
                              <span className="text-[10px] font-medium text-gray-400 whitespace-nowrap">
                                {formatRelativeTime(notification.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">
                              {notification.message}
                            </p>
                            {notification.actionUrl && (
                              <Link 
                                href={notification.actionUrl}
                                className="inline-block mt-2 text-sm font-medium text-[#00d4aa] hover:underline"
                                onClick={() => {
                                  onMarkRead?.(notification.id);
                                  setIsOpen(false);
                                }}
                              >
                                View details →
                              </Link>
                            )}
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-50 bg-gray-50/50">
              <button className="w-full py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                View all notifications
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
