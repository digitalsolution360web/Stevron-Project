"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

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
    { id: "BNEDR500", subtitle: "500 W - Taladro Eléctrico", image: "/ac/BNEDR500.webp" },
    { id: "BNIMD750", subtitle: "750 W - Taladro Percutor", image: "/ac/BNIMD750.webp" },
    { id: "BNIMD850", subtitle: "850 W - Taladro Percutor", image: "/ac/BNIMD850.webp" },
    { id: "BNIMD1100", subtitle: "1100 W - Taladro Percutor", image: "/ac/BNIMD1100.webp" },
    { id: "BNANG750", subtitle: "750 W - Amoladora Angular", image: "/ac/BNANG750.webp" },
    { id: "BNANG950", subtitle: "950 W - Amoladora Angular", image: "/ac/BNANG950.webp" },
    { id: "BNANG2200", subtitle: "2200 W - Amoladora Angular", image: "/ac/BNANG2200.webp" },
    { id: "BNANG2400", subtitle: "2400 W - Amoladora Angular", image: "/ac/BNANG2400.webp" },
    { id: "BNPOL1400", subtitle: "1400 W - Pulidora", image: "/ac/BNPOL1400.webp" },
    { id: "BNJSA600", subtitle: "600 W - Sierra de calar", image: "/ac/BNJSA600.webp" },
    { id: "BNPLS240", subtitle: "240 W - Lijadora de Palma", image: "/ac/BNPLS240.webp" },
    { id: "BNCSA1400", subtitle: "1400 W - Sierra Circular", image: "/ac/BNCSA1400.webp" },
    { id: "BNCOS2400", subtitle: "2400 W - Sierra sensitiva para metal", image: "/ac/BNCOS2400.webp" },
    { id: "BNROU1600", subtitle: "16000 W - Router", image: "/ac/BNROU1600.webp" },
    { id: "BNRHM800SDS", subtitle: "3,0J - Martillo Perforador", image: "/ac/BNRHM800SDS.webp" },
    { id: "BNRHM1500SDS", subtitle: "5,5J - Martillo Perforador", image: "/ac/BNRHM1500SDS.webp" },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Using 28.png as requested */}
      <section className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] xl:h-[850px] overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner/ac-banner.webp"
            alt="STEVRON DC Product Hero"
            fill
            priority
            className="object-cover"
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
      <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row">

          {/* Sidebar Categories */}
          <div className="w-full shrink-0 lg:w-[260px]">
            <div className="w-[200px] mb-6">
              <h2 className="font-orbitron text-[16px] font-bold uppercase tracking-tight text-black text-left">
                Product Category
              </h2>
              <div className="h-[1px] w-full bg-black mt-1" />
            </div>
            <div className="flex flex-col gap-1.5 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex h-[22px] w-[200px] items-center justify-start px-3 font-orbitron text-[11px] font-bold tracking-tight transition-all rounded-[2px] cursor-pointer bg-[#282828] text-white hover:bg-black/90"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid - Using Figma Measurements: Cards are 207x261px */}
          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group flex flex-col w-full max-w-[207px] h-[300px] overflow-hidden rounded-[12px] border border-[#171717] bg-white transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Product Image Container - Exactly 200px (261 - 61) */}
                  <div className="flex h-[222px] w-full shrink-0 items-center justify-center p-4 bg-white">
                    <Image
                      src={product.image}
                      alt={product.id}
                      width={160}
                      height={160}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Info (Black Section) - Exactly 61px as per Figma */}
                  <div className="flex h-[78px] w-full flex-col justify-center gap-0.5 border-t border-black/5 bg-[#171717] px-2 py-1.5">
                    <h3 className="px-1 font-['Eurostile_Extended',sans-serif] text-[14px] font-bold leading-[100%] uppercase text-white">
                      {product.id}
                    </h3>
                    <p className="px-1 font-[Antenna] text-[11px] font-medium leading-[110%] text-[#D4D4D4] mt-0.5">
                      {product.subtitle}
                    </p>

                    {/* View Details Button - Very tight for 61px container */}
                    <div className="px-1 mt-1.5">
                      <button className="flex h-[20px] w-auto min-w-[90px] items-center justify-center gap-1 rounded-full bg-white px-3 font-orbitron text-[8px] font-bold uppercase leading-none text-[#444444] transition-all hover:bg-gray-200 shadow-sm cursor-pointer whitespace-nowrap">
                        VIEW DETAILS
                        <ArrowRight size={9} className="stroke-[2.5] text-[#444444]" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
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
              { title: "AC TOOLS", image: "/8.webp", href: "/ac-products" },
              { title: "ACCESSORIES", image: "/5.webp", href: "#" },
              { title: "HAND TOOLS", image: "/9.webp", href: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
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
              </Link>
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
