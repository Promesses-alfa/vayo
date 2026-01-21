"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
    color: "from-orange-500 to-amber-500",
    icon: Users,
    label: "Agency",
  },
  artist: {
    color: "from-purple-500 to-pink-500",
    icon: Music,
    label: "Artist",
  },
  label: {
    color: "from-cyan-500 to-blue-500",
    icon: Building2,
    label: "Label",
  },
  festival: {
    color: "from-emerald-500 to-teal-500",
    icon: PartyPopper,
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
  const TypeIcon = config.icon;

  return (
    <div className="min-h-screen bg-[var(--vayo-black)]">
      {/* Sidebar - Desktop */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-[var(--vayo-dark)] border-r border-[var(--vayo-gray-800)] transition-all duration-300 hidden lg:block ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-[var(--vayo-gray-800)]">
          <Link href={`/demo/${type}`} className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center`}>
              <span className="text-white font-bold" style={{ fontFamily: "var(--font-syne)" }}>V</span>
            </div>
            {sidebarOpen && (
              <div>
                <span className="text-white font-bold" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
                <span className="block text-xs text-[var(--vayo-gray-500)]">{config.label}</span>
              </div>
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-400)]"
          >
            <Menu className="w-5 h-5" />
          </button>
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
                    ? `bg-gradient-to-r ${config.color} text-white`
                    : "text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)] hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-sm font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
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
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--vayo-gray-800)]">
            <Link
              href="/login"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)] hover:text-white transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Switch Demo</span>
            </Link>
          </div>
        )}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed top-0 left-0 z-50 h-full w-64 bg-[var(--vayo-dark)] border-r border-[var(--vayo-gray-800)] lg:hidden"
            >
              <div className="h-16 flex items-center justify-between px-4 border-b border-[var(--vayo-gray-800)]">
                <Link href={`/demo/${type}`} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center`}>
                    <span className="text-white font-bold">V</span>
                  </div>
                  <span className="text-white font-bold">VAYO</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-400)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                        isActive
                          ? `bg-gradient-to-r ${config.color} text-white`
                          : "text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)] hover:text-white"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="flex-1 text-sm font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-16 bg-[var(--vayo-dark)]/80 backdrop-blur-xl border-b border-[var(--vayo-gray-800)]">
          <div className="flex items-center justify-between h-full px-4 md:px-6">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-400)] lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Search */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] w-80">
                <Search className="w-4 h-4 text-[var(--vayo-gray-500)]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-sm text-white placeholder-[var(--vayo-gray-500)] outline-none w-full"
                />
                <kbd className="px-2 py-0.5 text-xs rounded bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-500)]">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Help */}
              <button className="p-2 rounded-lg hover:bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-400)]">
                <HelpCircle className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-[var(--vayo-gray-800)] text-[var(--vayo-gray-400)]">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[var(--vayo-accent)]" />
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[var(--vayo-gray-800)] transition-colors"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center`}>
                    <span className="text-white text-sm font-semibold">
                      {userName.charAt(0)}
                    </span>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-white">{userName}</p>
                    <p className="text-xs text-[var(--vayo-gray-500)]">{userRole}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-[var(--vayo-gray-400)] hidden md:block" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-56 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] shadow-xl overflow-hidden"
                    >
                      <div className="p-3 border-b border-[var(--vayo-gray-800)]">
                        <p className="text-sm font-medium text-white">{userName}</p>
                        <p className="text-xs text-[var(--vayo-gray-500)]">{userRole}</p>
                      </div>
                      <div className="p-2">
                        <Link
                          href={`/demo/${type}/settings`}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)] hover:text-white"
                        >
                          <Settings className="w-4 h-4" />
                          Settings
                        </Link>
                        <Link
                          href="/login"
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-gray-800)] hover:text-white"
                        >
                          <LogOut className="w-4 h-4" />
                          Switch Demo
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
