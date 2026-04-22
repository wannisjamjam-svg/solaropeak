"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/simulateur", label: "Simulateur" },
  { href: "/financement", label: "Financement" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}>
                <Sun className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <span
                className={`font-bold text-xl tracking-tight transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Solaro<span style={{ color: "#E76F51" }}>Peak</span>
              </span>
              <div className={`text-xs font-medium transition-colors ${
                scrolled ? "text-green-700" : "text-green-200"
              }`}>
                Agréé ANRE
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-white/20 text-white"
                    : scrolled
                    ? "text-gray-700 hover:text-green-700 hover:bg-green-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+212600000000"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-600 hover:text-green-700" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              +212 6 00 00 00 00
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-100"
              style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
            >
              Étude gratuite
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                }`}
                style={pathname === link.href ? { background: "#2D6A4F" } : {}}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 rounded-xl text-white font-semibold"
                style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
              >
                Demander une étude gratuite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
