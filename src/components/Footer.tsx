import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "Changelog", href: "/changelog" },
  ],
  Solutions: [
    { label: "For Agencies", href: "/solutions/dj-agencies" },
    { label: "For Labels", href: "/solutions/labels" },
    { label: "For Festivals", href: "/solutions/festivals" },
    { label: "For Touring Bands", href: "/solutions/touring-bands" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "DPA (GDPR)", href: "/dpa" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#00d4aa] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>V</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
            </Link>
            <p className="text-gray-400 text-sm">
              The platform that connects everyone in live entertainment.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VAYO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
