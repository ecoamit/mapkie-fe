"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LOGO from "../../public/mapkie-logo.png"; 

const navLinks = [
  { name: "Home", href: "/", width: 85 },
  { name: "Enterprise", href: "/enterprise", width: 122 },
  { name: "Candidate", href: "/candidate", width: 123 },
  { name: "Pricing", href: "#", width: 93 },
  { name: "About Us", href: "/about", width: 112 },
  { name: "Contact", href: "/contact", width: 101 },
  { name: "Blog", href: "/blog", width: 72 },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
  <nav className="w-full bg-[#f8fafc] border-b border-[#e5e7eb] pl-[160px] pr-[60px] py-0 flex items-center h-[72px] relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={LOGO} alt="Mapkie Logo" width={106} height={34} priority />
      </div>
      {/* Desktop Nav Links */}
  <div className="hidden lg:flex gap-2.5 items-center ml-12">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const LinkComponent = link.href.startsWith('#') ? 'a' : Link;
          
          return (
            <LinkComponent
              key={link.name}
              href={link.href}
              className={`nav-link relative transition-colors ${
                isActive
                  ? "text-[#007080] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-[linear-gradient(99.23deg,#006C86_0%,#061F34_114.48%)]"
                  : "text-[#030D16] hover:text-[#007080]"
              }`}
              style={{ width: link.width ? `${link.width}px` : undefined }}
              aria-current={isActive ? "page" : undefined}
            >
              {link.name}
            </LinkComponent>
          );
        })}
      </div>
      {/* Desktop Buttons */}
  <div className="hidden lg:flex gap-3 items-center rounded-full ml-auto">
  <button className="btn-login shadow-none">
          Login
        </button>
  <Link href="/contact" className="btn-primary-gradient focus:outline-none">
          Request Demo
        </Link>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto"
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const LinkComponent = link.href.startsWith('#') ? 'a' : Link;
            
            return (
              <LinkComponent
                key={link.name}
                href={link.href}
                className={`nav-link py-2 px-4 w-full text-center ${
                  isActive ? "text-[#007080] bg-[#e6f2f2]" : "text-[#030D16] hover:text-[#007080]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </LinkComponent>
            );
          })}
          <div className="flex flex-col gap-2 mt-4 w-full px-6">
            <button className="btn-login w-full" style={{ fontFamily: "Inter, sans-serif" }}>
              Login
            </button>
            <Link href="/contact" className="btn-primary-gradient w-full focus:outline-none" style={{ fontFamily: "Inter, sans-serif" }}>
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}