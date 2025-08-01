"use client";
import Image from "next/image";
import { useState } from "react";
import LOGO from "../../public/mapkie-logo.png"; 

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "Enterprise", href: "#" },
  { name: "Candidate", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f8fafc] border-b border-[#e5e7eb] px-[60px] py-0 flex items-center justify-between h-[72px] relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={LOGO} alt="Mapkie Logo" width={106} height={34} priority />
      </div>
      {/* Desktop Nav Links */}
      <div className="hidden lg:flex gap-7 items-center h-full">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`relative px-1.5 py-2 transition-colors ${
              link.active
                ? "text-[#007080] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#007080] after:rounded"
                : "text-[#030D16] hover:text-[#007080]"
            }`}
            aria-current={link.active ? "page" : undefined}
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-3 items-center">
        <button className="border border-[#007080] text-[#007080] bg-white px-6 py-2 rounded-full font-semibold text-[16px] hover:bg-[#e6f2f2] transition-colors shadow-none">
          Login
        </button>
        <button className="bg-gradient-to-r from-[#ff8a36] to-[#ffb86c] text-white px-6 py-2 rounded-full font-semibold text-[16px] shadow-md hover:from-[#ff7300] hover:to-[#ff9e36] transition-colors">
          Request Demo
        </button>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="block w-7 h-0.5 bg-[#1a3c4b] mb-1 rounded"></span>
        <span className="block w-7 h-0.5 bg-[#1a3c4b] mb-1 rounded"></span>
        <span className="block w-7 h-0.5 bg-[#1a3c4b] rounded"></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 lg:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`py-2 px-4 w-full text-center font-semibold text-[17px] ${
                link.active ? "text-[#007080] bg-[#e6f2f2]" : "text-[#1a3c4b] hover:text-[#007080]"
              }`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4 w-full px-6">
            <button className="border border-[#007080] text-[#007080] bg-white px-6 py-2 rounded-full font-semibold text-[16px] hover:bg-[#e6f2f2] transition-colors w-full" style={{ fontFamily: "Inter, sans-serif" }}>
              Login
            </button>
            <button className="bg-gradient-to-r from-[#ff8a36] to-[#ffb86c] text-white px-6 py-2 rounded-full font-semibold text-[16px] shadow-md hover:from-[#ff7300] hover:to-[#ff9e36] transition-colors w-full" style={{ fontFamily: "Inter, sans-serif" }}>
              Request Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}