"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  DollarSign,
  Truck,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  HelpCircle,
  Music,
  Building2,
  PartyPopper,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  type: "agency" | "artist" | "label" | "festival";
  navItems: NavItem[];
  userName: string;
  userRole: string;
}

const typeConfig = {
  agency: {
    color: "bg-[#00d4aa]",
    text: "text-[#00d4aa]",
    label: "Agency",
  },
  artist: {
    color: "bg-[#f97316]",
    text: "text-[#f97316]",
    label: "Artist",
  },
  label: {
    color: "bg-[#3b82f6]",
    text: "text-[#3b82f6]",
    label: "Label",
  },
  festival: {
    color: "bg-[#a855f7]",
    text: "text-[#a855f7]",
    label: "Festival",
  },
};

export default function DashboardLayout({
  children,
  type,
  navItems,
  userName,
  userRole,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const config = typeConfig[type];

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Sidebar - Desktop */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-100 transition-all duration-300 hidden lg:block ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-50">
          <Link href={`/demo/${type}`} className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${config.color} flex items-center justify-center`}>
              <span className="text-white font-bold" style={{ fontFamily: "var(--font-syne)" }}>V</span>
            </div>
            {sidebarOpen && (
              <div>
                <span className="text-gray-900 font-bold" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
                <span className={`block text-[10px] font-bold uppercase tracking-wider ${config.text}`}>{config.label}</span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? `${config.color} text-white shadow-md`
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-sm font-semibold">{item.label}</span>
                    {item.badge && (
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${isActive ? "bg-white/20" : "bg-gray-100 text-gray-600"}`}>
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        {sidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-50">
            <Link
              href="/login"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-semibold">Exit Demo</span>
            </Link>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="flex items-center justify-between h-full px-4 md:px-6">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-50 text-gray-500 lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Search */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 w-80">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search everything..."
                  className="bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none w-full font-medium"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-gray-50 text-gray-500 transition-colors">
                <Bell className="w-5 h-5" />
                <span className={`absolute top-1.5 right-1.5 w-2 h-2 rounded-full ${config.color} border-2 border-white`} />
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 p-1.5 pl-3 rounded-full border border-gray-100 hover:border-gray-200 transition-all bg-white"
                >
                  <div className="hidden md:block text-left mr-1">
                    <p className="text-xs font-bold text-gray-900 leading-none mb-0.5">{userName}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight leading-none">{userRole}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full ${config.color} flex items-center justify-center shadow-sm`}>
                    <span className="text-white text-xs font-bold">
                      {userName.charAt(0)}
                    </span>
                  </div>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl overflow-hidden py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-50 mb-1">
                      <p className="text-sm font-bold text-gray-900">{userName}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">{userRole}</p>
                    </div>
                    <Link
                      href={`/demo/${type}/settings`}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <Link
                      href="/login"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4" />
                      Exit Demo
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <nav className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-2xl p-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${config.color} flex items-center justify-center`}>
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="text-gray-900 font-bold">VAYO</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-sm ${
                      isActive ? `${config.color} text-white shadow-md` : "text-gray-500"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
