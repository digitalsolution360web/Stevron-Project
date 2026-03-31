"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsProductsOpen(false); // Reset dropdown when opening/closing
  };

  const toggleProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProductsOpen(!isProductsOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[100] flex h-[70px] lg:h-[80px] w-full items-center justify-center transition-all duration-300 border-b ${isScrolled
        ? "bg-[#050505]/95 backdrop-blur-md border-white/10 shadow-lg h-[65px] lg:h-[75px]"
        : "bg-[#050505] border-white/5"
        }`}
    >
      <div className="flex w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-16">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link href="/">
            <Image
              src="/Logo.webp"
              alt="STEVRON Logo"
              width={220}
              height={48}
              priority
              className="h-auto w-[140px] md:w-[220px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="ml-auto hidden items-center gap-6 md:flex lg:gap-8">
          <Link
            href="/"
            className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative group flex items-center h-[80px]">
            <Link
              href="/products"
              className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80 flex items-center gap-1.5"
            >
              Products
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-[80%] left-[-20px] invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 w-[220px] flex flex-col rounded-[5px] border-t-[3px] border-[#94A034] bg-[#050505] shadow-2xl transition-all duration-300 overflow-hidden">
              <Link
                href="/dc-products"
                className="px-6 py-4 font-orbitron text-[15px] font-normal tracking-wide text-white transition-colors hover:bg-[#1a1a1a]"
              >
                DC Product
              </Link>
              <Link
                href="/ac-products"
                className="px-6 py-4 font-orbitron text-[15px] font-normal tracking-wide text-white transition-colors hover:bg-[#1a1a1a]"
              >
                AC Product
              </Link>
            </div>
          </div>

          <Link
            href="/about"
            className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            About Us
          </Link>
          <Link
            href="/warranty-registration"
            className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Warranty
          </Link>
          <Link
            href="/contact"
            className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Contact Us
          </Link>
          {/* Globe Icon */}
          <button className="ml-2 text-white hover:opacity-80">
            <Globe size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto flex p-2 text-white md:hidden transition-colors hover:bg-white/10 rounded-full"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`} onClick={toggleMenu} />

      <div className={`fixed top-0 right-0 z-[100] h-full w-[280px] bg-[#050505] p-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden border-l border-white/10 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex flex-col gap-8 h-full">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="font-orbitron text-[14px] font-bold tracking-widest text-white">STEVRON</span>
            <button onClick={toggleMenu} className="text-white/60 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto pr-2">
            <Link
              href="/"
              onClick={toggleMenu}
              className="font-orbitron text-[18px] text-white py-2"
            >
              Home
            </Link>

            <div className="flex flex-col">
              <button
                onClick={toggleProducts}
                className="flex items-center justify-between w-full font-orbitron text-[18px] text-white py-2 text-left"
              >
                Products
                <ChevronDown size={18} className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`pl-4 flex flex-col gap-1 overflow-hidden transition-all duration-300 ${isProductsOpen ? "max-h-[200px] mt-2 pb-2" : "max-h-0"}`}>
                <Link
                  href="/ac-products"
                  onClick={toggleMenu}
                  className="py-2.5 font-orbitron text-[16px] text-gray-400 hover:text-[#94A034] flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#94A034]" />
                  AC Product
                </Link>
                <Link
                  href="/dc-products"
                  onClick={toggleMenu}
                  className="py-2.5 font-orbitron text-[16px] text-gray-400 hover:text-[#94A034] flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#94A034]" />
                  DC Product
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              onClick={toggleMenu}
              className="font-orbitron text-[18px] text-white py-2"
            >
              About Us
            </Link>
            <Link
              href="/warranty-registration"
              onClick={toggleMenu}
              className="font-orbitron text-[18px] text-white py-2"
            >
              Warranty
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="font-orbitron text-[18px] text-white py-2"
            >
              Contact Us
            </Link>
      
          
          </div>

          <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <Globe size={18} className="text-white/40" />
              <span className="font-orbitron text-[12px] text-white/40 uppercase tracking-widest">Global Range</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
