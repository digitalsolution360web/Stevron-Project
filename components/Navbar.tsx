"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 z-50 flex h-[80px] w-full items-center justify-center border-b border-white/30 bg-[#050505]">
      <div className="flex w-full max-w-[1440px] items-center px-10 sm:px-10 lg:px-16">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link href="/">
            <Image
              src="/Logo.webp"
              alt="STEVRON Logo"
              width={220}
              height={48}
              priority
              className="h-auto w-[160px] md:w-[220px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="ml-auto hidden items-center gap-4 md:flex lg:gap-5">
          <Link
            href="/"
            className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Contact Us
          </Link>
          
          {/* Globe Icon */}
          <button className="ml-2 text-white hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="ml-auto flex text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Sidebar/Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 z-40 flex w-full flex-col bg-[#050505] p-6 shadow-2xl md:hidden border-b border-white/10">
          <Link
            href="/"
            onClick={toggleMenu}
            className="py-4 font-orbitron text-[18px] text-white transition-opacity hover:opacity-80"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={toggleMenu}
            className="py-4 font-orbitron text-[18px] text-white transition-opacity hover:opacity-80"
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="py-4 font-orbitron text-[18px] text-white transition-opacity hover:opacity-80"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="py-4 font-orbitron text-[18px] text-white transition-opacity hover:opacity-80"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
