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
          <div className="grid flex-1 grid-cols-1 gap-3 px-10 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {products.map((product) => {
              const [spec = product.id, ...restSubtitle] = product.subtitle.split(" - ");
              const productSubtitle = restSubtitle.join(" - ") || product.subtitle;
              return (
              <div
                key={product.id}
                className="group flex flex-col w-full max-w-[207px] h-[300px] overflow-hidden rounded-[12px] border border-[#171717] bg-white transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Product Image Container - Exactly 200px (261 - 61) */}
                <div className="flex h-[195px] w-full shrink-0 items-center justify-center p-4 bg-white">
                  <Image
                    src={product.image}
                    alt={product.id}
                    width={160}
                    height={160}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Product Info (Black Section) - Exactly 61px as per Figma */}
                <div className="flex h-[105px] w-full flex-col bg-[#171717] p-2 border-t border-black/5">
                   <h3 className="mb-0.5 px-1 font-['Eurostile_Extended',sans-serif] text-[15px] font-bold leading-[100%] uppercase text-white">
                    {spec}
                  </h3>
                  <p className="px-1 font-[Antenna] text-[12px] font-normal leading-[115%] text-[#A7A7A7]">
                    {productSubtitle}
                  </p>

                  {/* View Details Button - Very tight for 61px container */}
                  <div className="mt-auto px-1">
                    <button className="flex h-[20px] items-center gap-1 rounded-[2px] bg-white px-2.5 font-orbitron text-[8px] font-normal leading-[100%] text-[#171717] transition-all hover:bg-gray-100">
                      View Details
                      <ArrowRight size={8} className="stroke-[3]" />
                    </button>
                  </div>
                </div>
              </div>
            )})}
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
