"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    label: "Product",
    href: "/features",
    dropdown: [
      { label: "Booking Management", href: "/features#booking" },
      { label: "Contract & Documents", href: "/features#contracts" },
      { label: "Financial Tools", href: "/features#finance" },
      { label: "Tour Logistics", href: "/features#tours" },
      { label: "Team Collaboration", href: "/features#team" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "For DJ Agencies", href: "/solutions/dj-agencies" },
      { label: "For Touring Bands", href: "/solutions/touring-bands" },
      { label: "For Performing Arts", href: "/solutions/performing-arts" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>V</span>
                </div>
                <span className="text-xl font-bold text-[var(--vayo-white)]" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden lg:flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="nav-link flex items-center gap-1 py-2"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 glass rounded-xl p-2"
                        >
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              href={dropItem.href}
                              className="block px-4 py-2.5 text-sm text-[var(--vayo-gray-300)] hover:text-white hover:bg-[var(--vayo-gray-800)] rounded-lg transition-colors"
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Desktop CTA */}
            <motion.div
              className="hidden lg:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ThemeToggle />
              <Link href="/login" className="nav-link">
                Log in
              </Link>
              <Link href="/login" className="btn-primary text-sm py-2.5 px-5">
                Start Free Trial
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[var(--vayo-gray-300)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-[var(--vayo-gray-800)]"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 text-[var(--vayo-gray-300)] hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          className="block py-1.5 text-sm text-[var(--vayo-gray-500)] hover:text-[var(--vayo-accent)]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-[var(--vayo-gray-800)] space-y-3">
                <div className="flex items-center justify-between py-2">
                  <span className="text-[var(--vayo-gray-400)]">Theme</span>
                  <ThemeToggle />
                </div>
                <Link
                  href="/login"
                  className="block py-2 text-[var(--vayo-gray-300)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/login"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
