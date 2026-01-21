"use client";

import { motion } from "framer-motion";
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  MapPin
} from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  Solutions: [
    { label: "For DJ Agencies", href: "/solutions/dj-agencies" },
    { label: "For Touring Bands", href: "/solutions/touring-bands" },
    { label: "For Performing Arts", href: "/solutions/performing-arts" },
    { label: "Enterprise", href: "/solutions/enterprise" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Support Center", href: "/support" },
    { label: "API Reference", href: "/api-reference" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Press Kit", href: "/press" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-black)]">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.a
              href="/"
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>V</span>
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
            </motion.a>
            <p className="text-[var(--vayo-gray-400)] text-sm mb-6 max-w-xs">
              The all-in-one platform for artist booking agencies. 
              Streamline your entire process—from request to show.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="mailto:hello@vayo.io" className="flex items-center gap-2 text-sm text-[var(--vayo-gray-400)] hover:text-[var(--vayo-accent)] transition-colors">
                <Mail className="w-4 h-4" />
                hello@vayo.io
              </a>
              <div className="flex items-center gap-2 text-sm text-[var(--vayo-gray-400)]">
                <MapPin className="w-4 h-4" />
                Amsterdam, Netherlands
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--vayo-gray-500)]">
            <span>© 2026 VAYO. All rights reserved.</span>
            <a href="/privacy" className="hover:text-[var(--vayo-gray-300)] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[var(--vayo-gray-300)] transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-[var(--vayo-gray-300)] transition-colors">
              Cookie Policy
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-[var(--vayo-gray-900)] flex items-center justify-center text-[var(--vayo-gray-400)] hover:bg-[var(--vayo-accent)] hover:text-white transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
