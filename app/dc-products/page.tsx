"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function DCProducts() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const categories = [
    "All Products",
    "Drill",
    "Wrench",
    "Angular Grinder",
    "Rotary Hammer Drill",
    "Circular Saw",
    "Blower & Vaccum",
    "Battery",
    "Charger",
  ];

  const products = [
    { id: "BNED650", subtitle: "650W - Impact Drill", image: "/33.png" },
    { id: "BNID710", subtitle: "710W - Impact Drill", image: "/34.png" },
    { id: "BNID850", subtitle: "850W - Impact Drill", image: "/36.png" },
    { id: "BNID1100", subtitle: "1100W - Industrial Hammer Drill", image: "/52.png" },
    { id: "BNAG750", subtitle: "750W - Angle Grinder", image: "/55.png" },
    { id: "BNAG950", subtitle: "950W - Professional Grinder", image: "/29.png" },
    { id: "BNAG2200", subtitle: "2200W - Industrial Grinder", image: "/30.png" },
    { id: "BNAG2400", subtitle: "2400W - Heavy Duty Grinder", image: "/54.png" },
    { id: "BNPL1400", subtitle: "1400W - Sander Polisher", image: "/47.png" },
    { id: "BNJS600", subtitle: "600W - Jig Saw Professional", image: "/44.png" },
    { id: "BNSL240", subtitle: "240W - Orbital Sander", image: "/46.png" },
    { id: "BNCS1100", subtitle: "1100W - Circular Saw", image: "/35.png" },
    { id: "BNCC2400", subtitle: "2400W - Cut-off Machine", image: "/51.png" },
    { id: "BNRO1600", subtitle: "1600W - Router Professional", image: "/56.png" },
    { id: "BNRHM2000B", subtitle: "20J - Rotary Hammer Heavy", image: "/57.png" },
    { id: "BNRHM2600B", subtitle: "26J - Rotary Hammer Industrial", image: "/58.png" },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Using 28.png as requested */}
      <section className="relative w-full overflow-hidden bg-[#050505] h-[400px] sm:h-[550px] lg:h-[700px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/28.png"
            alt="STEVRON DC Product Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Product Detail White Box - Customized for Corded Theme */}
      <section className="relative -mt-[40px] z-30 flex justify-center px-6">
        <div className="w-full max-w-[805px] min-h-[196px] rounded-[2px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#000000] text-center flex flex-col items-center justify-center sm:p-10">
          <div className="mb-4 flex h-[35px] w-fit items-center justify-center rounded-[20px] bg-[#171717] px-10">
            <span className="font-orbitron text-[15px] font-bold tracking-[0.2em] text-white uppercase italic">
              CORDED POWER TOOLS
            </span>
          </div>
          <p className="mb-4 font-orbitron text-[12px] font-bold tracking-[0.1em] text-[#000000] uppercase">
            UNSTOPPABLE POWER, CONTINUOUS PERFORMANCE
          </p>
          <p className="font-sans text-[13px] font-normal leading-relaxed text-[#171717] max-w-[700px] opacity-90">
            Experience heavy-duty tools with STEVRON&apos;S 220V platform, designed for professionals who demand 
            consistent power for hours. Our corded power tools deliver high performance, extreme torque, and 
            industrial-grade durability. Engineered for the most demanding applications, these tools ensure 
            maximum productivity without worrying about battery life. Perfectly optimized for construction, 
            manufacturing, and workshops.
          </p>
        </div>
      </section>

      {/* Main Content: Sidebar + Products Grid */}
      <section className="mx-auto w-full max-w-[1440px] px-10 py-24 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row">
          
          {/* Sidebar Categories */}
          <div className="w-full shrink-0 lg:w-[260px]">
            <h2 className="mb-6 font-orbitron text-[18px] font-bold uppercase tracking-tight text-black flex items-center gap-2">
              <span className="h-[2px] w-4 bg-black" />
              Product Category
            </h2>
            <div className="flex flex-col gap-1.5 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex h-[36px] items-center justify-between px-4 font-orbitron text-[13px] font-medium tracking-wide transition-all border border-black/5 rounded-[4px] ${
                    activeCategory === cat
                      ? "bg-black text-white"
                      : "bg-[#171717] text-white hover:bg-black/90"
                  }`}
                >
                  {cat}
                  {activeCategory === cat && <ChevronRight size={14} className="ml-2" />}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid - Using Figma Measurements: Cards are 207x261px */}
          <div className="grid flex-1 grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col w-full max-w-[207px] h-[261px] overflow-hidden rounded-[12px] border border-[#171717] bg-white transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Product Image Container - Exactly 200px (261 - 61) */}
                <div className="flex h-[200px] w-full shrink-0 items-center justify-center p-4 bg-white">
                  <Image
                    src={product.image}
                    alt={product.id}
                    width={160}
                    height={160}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Product Info (Black Section) - Exactly 61px as per Figma */}
                <div className="flex h-[61px] w-full flex-col bg-[#171717] p-2 border-t border-black/5">
                   <h3 className="mb-0.5 px-1 font-orbitron text-[11px] font-bold text-white tracking-wide uppercase leading-none">
                    {product.id}
                  </h3>
                  <p className="px-1 font-sans text-[8px] font-light text-[#A7A7A7] tracking-tight truncate leading-tight">
                    {product.subtitle}
                  </p>
                  
                  {/* View Details Button - Very tight for 61px container */}
                  <div className="mt-auto px-1">
                    <button className="flex h-[18px] items-center gap-1 rounded-[2px] bg-white px-2 font-orbitron text-[7px] font-bold text-[#171717] transition-all hover:bg-gray-100 uppercase">
                      View Details
                      <ArrowRight size={8} className="stroke-[3]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Range Section */}
      <section className="bg-white pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-10 lg:px-16 flex flex-col items-center">
           <div className="mb-12 flex h-[35px] items-center justify-center rounded-[5px] bg-[#000000] px-8">
            <span className="font-orbitron text-[14px] font-normal tracking-wider text-white uppercase italic">
              Explore Our Full Range
            </span>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "DC TOOLS", image: "/7.webp" },
              { title: "ACCESSORIES", image: "/5.webp" },
              { title: "HAND TOOLS", image: "/9.webp" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex h-[380px] w-full flex-col overflow-hidden border border-[#A7A7A7] rounded-[12px] shadow-sm group"
              >
                <div className="flex h-[42px] w-full items-center justify-center bg-white border-b border-[#A7A7A7]">
                  <span className="font-orbitron text-[14px] font-bold tracking-wider text-black">
                    {item.title}
                  </span>
                </div>
                <div className="relative flex-grow bg-white overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Reuse Patterns */}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
          <h2 className="font-orbitron text-[20px] font-normal leading-[33px] text-white">
            Subscribe to Our Newsletter
          </h2>

          <div className="relative w-full max-w-[562px]">
            <div className="flex h-[53.46px] w-full items-center bg-white rounded-full overflow-hidden p-1 shadow-lg">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-6 outline-none text-[#A3A3A3] font-sans text-[14px]"
              />
              <button className="bg-[#94A034] h-full px-8 rounded-full text-white font-orbitron text-[14px] font-bold transition-opacity hover:opacity-90">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-[1px] bg-white/20 mb-20" />

        {/* Brand and Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo Column */}
          <div className="flex flex-col gap-6">
            <Image
              src="/Logo.webp"
              alt="STEVRON"
              width={220}
              height={48}
              className="h-auto w-[180px]"
            />
            <p className="font-sans text-[14px] text-gray-400 leading-relaxed max-w-[300px]">
              Empowering professionals with premium tools and equipment. Building the future of industrial excellence through innovation and quality.
            </p>
            <p className="font-sans text-[12px] text-gray-500 mt-4 outline-none">
              © 2026 Stevron. All rights reserved.
            </p>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
              Company
              <div className="absolute bottom-[-10px] left-0 w-1/2 h-[2px] bg-[#94A034]" />
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-[14px] text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">FAQ&apos;s</Link></li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
              Product
              <div className="absolute bottom-[-10px] left-0 w-1/2 h-[2px] bg-[#94A034]" />
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-[14px] text-gray-400">
              <li><Link href="/ac-products" className="hover:text-white transition-colors">AC Product</Link></li>
              <li><Link href="/dc-products" className="hover:text-white transition-colors">DC Product</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-6 h-full">
            <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
              Support
              <div className="absolute bottom-[-10px] left-0 w-1/2 h-[2px] bg-[#94A034]" />
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-[14px] text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Warranty</Link></li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-auto pt-10 justify-start">
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-sm">
                <Image src="/msg.png" alt="Message" width={20} height={20} className="object-contain" />
              </Link>
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-sm">
                <Image src="/insta.png" alt="Instagram" width={20} height={20} className="object-contain" />
              </Link>
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-sm">
                <Image src="/face.png" alt="Facebook" width={20} height={20} className="object-contain" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
