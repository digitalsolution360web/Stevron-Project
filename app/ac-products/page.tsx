"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ACProducts() {
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
    { id: "BNDR45", subtitle: "45NM - Taladro Percutor", image: "/59.png" },
    { id: "BNDR75", subtitle: "75NM - Taladro Percutor Compacto", image: "/60.png" },
    { id: "BNIW4002B2", subtitle: "400NM - Llave de Impacto", image: "/37.png" },
    { id: "BNIW6004B2", subtitle: "600NM - Llave de Impacto", image: "/24.png" },
    { id: "BNIW8004B2", subtitle: "800NM - Llave de Impacto", image: "/38.png" },
    { id: "BNCAG8504B1", subtitle: "4-1/2\" - Amoladora Angular", image: "/21.png" },
    { id: "BNCRH20J4B", subtitle: "2.0J - Rotomartillo Inalámbrico", image: "/67.png" },
    { id: "BNCRH25J4B2", subtitle: "2.6J - Rotomartillo Inalámbrico", image: "/64.png" },
    { id: "BNCRH4.5J", subtitle: "4.5J - Rotomartillo Profesional", image: "/65.png" },
    { id: "BNCS190", subtitle: "190mm - Sierra Circular", image: "/23.png" },
    { id: "BNOS5", subtitle: "Lijadora Orbital", image: "/50.png" },
    { id: "BNBL261", subtitle: "Soplador Inalámbrico", image: "/40.png" },
    { id: "BNLB20", subtitle: "2Ah - Batería Li-Ion", image: "/68.png" },
    { id: "BNLB40", subtitle: "4Ah - Batería Li-Ion", image: "/70.png" },
    { id: "BNLB50", subtitle: "5Ah - Batería Li-Ion", image: "/69.png" },
    { id: "BNBC33A", subtitle: "Cargador de Batería", image: "/71.png" },
    { id: "BNBC3A", subtitle: "Cargador de Batería", image: "/72.png" },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Height 700px. Showing ONLY 41.png as requested. */}
      {/* Added object-top to ensure the "INTRODUCING" text isn't cut off at the top */}
      <section className="relative w-full overflow-hidden bg-[#050505] h-[350px] sm:h-[500px] lg:h-[700px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/41.png"
            alt="STEVRON Hero Banner"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* 1NE PLATFORM White Box - Precise Figma Measurement 805x196, Overlapping Hero by ~40px */}
      <section className="relative -mt-[40px] z-30 flex justify-center px-6">
        <div className="w-full max-w-[805px] min-h-[196px] rounded-[2px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#000000] text-center flex flex-col items-center justify-center sm:p-10">
          <div className="mb-4 flex h-[35px] w-fit items-center justify-center rounded-[20px] bg-[#171717] px-10">
            <span className="font-orbitron text-[15px] font-bold tracking-[0.2em] text-white uppercase italic">
              1NE PLATFORM
            </span>
          </div>
          <p className="mb-4 font-orbitron text-[12px] font-bold tracking-[0.1em] text-[#000000] uppercase">
            ONE BATTERY, ENDLESS POSSIBILITIES
          </p>
          <p className="font-sans text-[13px] font-normal leading-relaxed text-[#171717] max-w-[700px] opacity-90">
            Experience true cordless freedom with STEVRON&apos;S 1NE platform, designed around one battery for all your tools.
            Our DC power tools deliver consistent performance, flexibility and convenience across multiple applications.
            With a single battery system, you can switch between tools effortlessly and keep your work moving without
            interruptions. Engineered for efficiency and reliability, STEVRON DC tools combine advanced battery technology
            with durable design. Whether its precision work or demanding tasks, the 1NE platform ensures you get the power,
            control, and confidence to do more with less.
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
                  className={`flex h-[36px] items-center justify-between px-4 font-orbitron text-[13px] font-medium tracking-wide transition-all border border-black/5 rounded-[4px] ${activeCategory === cat
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
          <div className="grid flex-1 grid-cols-1 gap-2 px-10 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
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

      {/* Bottom Dividers and CTA Alignment */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="w-full h-px bg-gray-200" />
      </div>

      {/* Explore Full Range - Smaller Cards */}
      <div className="mt-8 mb-4">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 flex flex-col items-center">
          {/* Title Pill */}
          <div className="bg-black text-white px-8 py-2 rounded-[5px] mb-8 shadow-md">
            <span className="font-orbitron text-[14px] sm:text-[16px] font-bold tracking-wider uppercase">
              Explore Other Range
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[1100px]">
            {[
              { title: "DC TOOLS", image: "/7.webp" },
              { title: "ACCESSORIES", image: "/5.webp" },
              { title: "HAND TOOLS", image: "/9.webp" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[15px] shadow-lg overflow-hidden flex flex-col border border-gray-100 transition-transform hover:scale-[1.02] group"
              >
                <div className="bg-white px-4 py-3 border-b border-gray-50 text-center">
                  <span className="font-orbitron text-[14px] font-bold tracking-widest text-black uppercase">
                    {item.title}
                  </span>
                </div>
                <div className="relative h-[350px] grow overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
            ))}
          </div>

          {/* Line below range cards before CTA */}
          <div className="w-full max-w-[1440px] mt-16">
            <div className="w-full h-px bg-gray-200" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
      <Footer />
    </div>
  );
}
