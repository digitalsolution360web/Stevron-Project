"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Globe, Search, ArrowRight } from "lucide-react";
import { acProducts } from "@/data/acProducts";
import { dcProducts } from "@/data/dcProducts";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
   const pathname = usePathname();
  const router = useRouter();

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

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const acFiltered = acProducts.map(p => ({ ...p, type: 'ac' })).filter(p =>
      p.id.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query)
    );
    const dcFiltered = dcProducts.map(p => ({ ...p, type: 'dc' })).filter(p =>
      p.id.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query)
    );

    setSearchResults([...acFiltered, ...dcFiltered]);
  }, [searchQuery]);

  useEffect(() => {
    if (isSearchOpen) {
      // We don't want to hide overflow if we want to see the background
      // document.body.style.overflow = 'hidden'; 
    } else {
      setSearchQuery("");
    }
  }, [isSearchOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 z-[1000] flex h-[70px] lg:h-[80px] w-full items-center justify-center transition-all duration-300 border-b ${isScrolled
          ? "bg-[#050505] border-white/10 shadow-lg h-[65px] lg:h-[75px]"
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
            <Link
              href="/about"
              className="font-orbitron text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
            >
              About Us
            </Link>



            {/* Products Dropdown */}
            <div className="relative group flex items-center h-[80px]">
              <div
                className="font-orbitron cursor-default text-[15px] lg:text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80 flex items-center gap-1.5"
              >
                Product
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-[80%] left-[-20px] invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 w-[220px] flex flex-col rounded-[5px] border-t-[3px] border-[#94A034] bg-[#050505] shadow-2xl transition-all duration-300 overflow-hidden">
                <Link
                  href="/dc-products"
                  className="px-6 py-4 font-orbitron text-[15px] font-normal tracking-wide text-white transition-colors hover:bg-[#1a1a1a]"
                >
                  Product DC
                </Link>
                <Link
                  href="/ac-products"
                  className="px-6 py-4 font-orbitron text-[15px] font-normal tracking-wide text-white transition-colors hover:bg-[#1a1a1a]"
                >
                  Product AC
                </Link>
              </div>
            </div>

          
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

            {/* Icons Group */}
            <div className="ml-4 flex items-center gap-3">
              {/* Globe Icon */}
              <button className="text-white hover:opacity-80 transition-all cursor-pointer">
                <Globe size={20} strokeWidth={1.5} />
              </button>
              
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:opacity-80 transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Search Bar - Expands in Navbar Center */}
          <div 
            className={`fixed inset-0 flex flex-col items-center justify-start pt-20 bg-[#050505]/98 backdrop-blur-3xl transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-16 z-[2000] ${
              isSearchOpen ? "scale-100 opacity-100 visible blur-0" : "scale-110 opacity-0 invisible blur-xl"
            }`}
            onClick={(e) => {
              // Only close if clicking the backdrop itself, not the children
              if (e.target === e.currentTarget) {
                setIsSearchOpen(false);
              }
            }}
          >
            <div className="flex w-full max-w-[1440px] flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
               {/* Logo - Hidden on mobile search to save space */}
               <div className="hidden sm:flex shrink-0 items-center">
                <Image
                  src="/Logo.webp"
                  alt="STEVRON Logo"
                  width={220}
                  height={48}
                  priority
                  className="h-auto w-[140px] md:w-[220px]"
                />
              </div>
              
              <div className="flex-1 flex justify-center py-2">
                <div className="relative w-full max-w-[900px] group">
                  {/* Premium Glow effect on focus */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-[#94A034]/20 via-[#94A034]/10 to-[#94A034]/20 rounded-full blur-xl transition-opacity duration-500 ${searchQuery ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  <div className="relative flex items-center">
                    <Search className={`transition-all duration-500 ${searchQuery ? 'text-[#94A034] scale-110' : 'text-white/30'}`} size={24} />
                    <input
                      autoFocus={isSearchOpen}
                      type="text"
                      placeholder="Search for premium AC or DC products..."
                      className="w-full bg-transparent font-orbitron text-[16px] sm:text-[20px] md:text-[24px] text-white outline-none border-b-2 border-white/10 pb-2 pl-6 focus:border-[#94A034] transition-all duration-500 placeholder:text-white/10 relative z-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchResults.length > 0) {
                          const product = searchResults[0];
                          // Do not close the search explicitly here
                          window.location.href = `/${product.type}-product/${product.id}`;
                        }
                      }}
                    />
                    
                    {/* Tech Scanning Line Animation */}
                    {searchQuery && (
                      <div className="absolute bottom-[-2px] left-0 h-[2px] bg-[#94A034] shadow-[0_0_15px_#94A034] animate-scan z-20"></div>
                    )}
                    
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery("")}
                        className="absolute right-12 text-white/40 hover:text-white p-2 transition-all hover:scale-110 cursor-pointer"
                        aria-label="Clear search"
                      >
                        <X size={18} />
                      </button>
                    )}
                    
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-0 p-2 text-white/40 hover:text-[#94A034] transition-all hover:scale-110 cursor-pointer"
                      aria-label="Close search"
                    >
                      <X size={28} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Dropdown (Inside Navbar Context) */}
              {(searchResults.length > 0 || (searchQuery && searchResults.length === 0)) && isSearchOpen && (
                <div className="relative mt-10 w-full max-w-[1100px] overflow-hidden bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-3xl z-[2005] animate-in slide-in-from-top-4 duration-500 ease-out">
                  <div className="p-8 sm:p-10 max-h-[65vh] overflow-y-auto scrollbar-hide">
                    {searchResults.length > 0 ? (
                      <>
                        <div className="flex items-center justify-between mb-8 px-2">
                          <div className="flex items-center gap-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#94A034] animate-pulse"></div>
                            <span className="font-orbitron text-[14px] text-white/50 uppercase tracking-[0.3em] font-bold">Matching Products ({searchResults.length})</span>
                          </div>
                          <div className="h-px flex-1 bg-white/5 ml-8"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {searchResults.map((product) => (
                            <div
                              key={product.id}
                              onClick={() => {
                                // Do not close the search explicitly here
                                // Let the full page reload (window.location.href) handle it
                                // This prevents seeing the background (homepage) before the new page loads
                                window.location.href = `/${product.type}-product/${product.id}`;
                              }}
                              className="group flex items-center gap-6 p-5 rounded-2xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.1] hover:border-[#94A034]/40 transition-all duration-300 cursor-pointer relative z-[2010]"
                            >
                              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-white p-3 shadow-2xl transition-transform duration-500 group-hover:scale-110">
                                <Image
                                  src={product.image}
                                  alt={product.id}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex flex-col min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <span className="font-orbitron text-[16px] font-bold text-white group-hover:text-[#94A034] transition-colors truncate">
                                    {product.id}
                                  </span>
                                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest ${product.type === 'ac' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/20' : 'bg-[#94A034]/20 text-[#94A034] border border-[#94A034]/20'}`}>
                                    {product.type === 'ac' ? 'AC' : 'DC'}
                                  </span>
                                </div>
                                <span className="font-inter text-[13px] text-white/40 font-light truncate mb-4">
                                  {product.subtitle}
                                </span>
                                <div className="mt-auto flex items-center text-[11px] font-bold text-[#94A034] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-x-[-15px] group-hover:translate-x-0 transition-all duration-300">
                                  Ver Detalles
                                  <ArrowRight size={14} className="ml-2" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-24 flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 animate-pulse">
                          <Search className="text-white/10" size={48} />
                        </div>
                        <p className="font-orbitron text-white/30 text-2xl tracking-[0.2em]">No matching products for "<span className="text-[#94A034]">{searchQuery}</span>"</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Quick Search Tags for Empty Search */}
              {!searchQuery && isSearchOpen && (
                 <div className="relative mt-10 w-full max-w-[1100px] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-3xl z-[2005] animate-in slide-in-from-top-4 duration-500 ease-out">
                    <div className="p-12">
                       <div className="flex items-center gap-6 mb-10">
                        <span className="font-orbitron text-[14px] text-white/40 uppercase tracking-[0.4em] font-bold">Trending Searches</span>
                        <div className="h-px flex-1 bg-white/5"></div>
                      </div>
                      <div className="flex flex-wrap gap-5">
                        {["Drill", "Impact", "Grinder", "Hammer", "Saw", "Battery", "AC Tool", "DC Tool"].map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSearchQuery(tag)}
                            className="px-10 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white/60 font-orbitron text-[15px] hover:border-[#94A034] hover:text-[#94A034] hover:bg-[#94A034]/10 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                 </div>
              )}
            </div>
          </div>

          {/* Search Shadow/Backdrop (No blur, just light dimming) */}
          {isSearchOpen && (
            <div 
              className="fixed inset-0 top-[80px] bg-black/40 z-[999]"
              onClick={() => setIsSearchOpen(false)}
            />
          )}

          {/* Mobile Search and Menu Button */}
          <div className="ml-auto flex items-center gap-2 md:hidden">
            <button className="p-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer">
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-white/70 hover:text-[#94A034] hover:bg-[#94A034]/10 rounded-full transition-all cursor-pointer group"
              aria-label="Search"
            >
              <Search size={22} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
              className="flex p-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer (Backdrop) */}
      <div
        className={`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Drawer Content */}
      <div
        className={`fixed top-0 right-0 z-[2001] h-full w-[280px] bg-[#050505] p-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden border-l border-white/10 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
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
                onClick={(e) => {
                  e.preventDefault();
                  setIsProductsOpen(!isProductsOpen);
                }}
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
                  AC Products
                </Link>
                <Link
                  href="/dc-products"
                  onClick={toggleMenu}
                  className="py-2.5 font-orbitron text-[16px] text-gray-400 hover:text-[#94A034] flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#94A034]" />
                  DC Products
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
    </>
  );
}
