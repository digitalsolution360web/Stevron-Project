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
    "Todos los productos",
    "Taladro",
    "Amoladora angular",
    "Pulidora",
    "Sierra de calar",
    "Sierra circular",
    "Sierra de mesa",
    "Tupí",
    "Martillo perforador",
  ];

  const products = [
    { id: "BNEDR500", subtitle: "500 W - Taladro Eléctrico", image: "/BNEDR500.webp" },
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
      {/* Hero Section */}
      <section className="relative w-full aspect-[16/5] lg:aspect-[16/5] overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner/ac-banner.webp"
            alt="STEVRON AC Product Hero"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* Product Detail White Box */}
      <section className="relative -mt-[30px] lg:-mt-[50px] z-30 flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-[805px] min-h-[220px] rounded-[4px] bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#000000] text-center flex flex-col items-center justify-center sm:p-10">

          {/* Pill Header */}
          <div
            className="mb-4 flex items-center justify-center bg-[#282828] px-2 sm:px-0"
            style={{
              width: '100%',
              maxWidth: '380px',
              height: '33px',
              borderRadius: '16.5px'
            }}
          >
            <span
              className="font-['Eurostile_Extended',sans-serif] text-[18px] sm:text-[22px] font-bold tracking-normal text-white uppercase leading-none whitespace-nowrap overflow-hidden text-ellipsis"
            >
              UNSTOPPABLE POWER
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="mb-4 font-['Antenna',sans-serif] text-[10px] sm:text-[12px] font-normal tracking-[0.05em] text-black uppercase whitespace-nowrap overflow-hidden text-ellipsis w-full"
            style={{ maxWidth: '325px' }}
          >
            CONTINUOUS POWER, UNMATCHED PERFORMANCE
          </p>

          {/* Description */}
          <p
            className="font-['Antenna',sans-serif] text-[12px] sm:text-[13px] font-light leading-[1.6] text-black text-center w-full"
            style={{ maxWidth: '676px', minHeight: '83px' }}
          >
            TEVRON AC power tools are built to deliver consistent high-performance with a reliable 220V–60Hz power supply.
            Designed for demanding applications, these tools provide uninterrupted power, making them ideal for continuous
            and heavy-duty work environments. With robust construction and precision engineering, our corded tools ensure
            stability, durability, and efficient output in every task. Whether on-site or in the workshop, STEVRON AC tools offer
            the strength and control professionals need to get the job done right.
          </p>
        </div>
      </section>



      {/* Main Content: Sidebar + Products Grid */}
      <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row">

          {/* Sidebar Categories */}
          <div className="w-full shrink-0 lg:w-[260px] flex flex-col items-center sm:items-start">
            <div className="w-full sm:w-[250px] mb-4 lg:mb-6">
              <h2 className="font-orbitron text-[16px] lg:text-[18px] font-bold uppercase tracking-tight text-black text-center sm:text-left">
                Product Category
              </h2>
              <div className="h-[1px] w-full bg-black mt-1" />
            </div>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide flex-nowrap w-full pl-2 sm:pl-0">
              {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="flex shrink-0 h-[34px] lg:h-[30px] min-w-max lg:w-[250px] items-center justify-center lg:justify-start px-5 lg:px-4 font-orbitron text-[11px] lg:text-[13px] font-bold tracking-tight transition-all rounded-[17px] lg:rounded-[2px] cursor-pointer bg-[#282828] text-white hover:bg-black/90 shadow-sm uppercase"
                  >
                    {cat}
                  </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {products.map((product) => {
              return (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="group flex flex-col w-full max-w-[400px] sm:max-w-[250px] min-h-[320px] overflow-hidden rounded-[12px] border border-[#171717] bg-white transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex h-[222px] w-full shrink-0 items-center justify-center p-4 bg-white">
                    <Image
                      src={product.image}
                      alt={product.id}
                      width={160}
                      height={160}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-1 w-full flex-col justify-center gap-1 border-t border-black/5 bg-[#171717] px-2 py-3">
                    <h3 className="px-1 font-['Eurostile_Extended',sans-serif] text-[16px] font-bold leading-[100%] uppercase text-white">
                      {product.id}
                    </h3>
                    <p className="px-1 font-[Antenna] text-[12px] font-medium leading-[120%] text-[#D4D4D4] mt-0.5">
                      {product.subtitle}
                    </p>

                    <div className="px-1 mt-2">
                      <button className="flex h-[24px] w-auto min-w-[100px] items-center justify-center gap-1.5 rounded-full bg-white px-3.5 font-orbitron text-[10px] font-bold uppercase leading-none text-[#444444] transition-all hover:bg-gray-200 shadow-sm cursor-pointer whitespace-nowrap">
                        VIEW DETAILS
                        <ArrowRight size={11} className="stroke-[2.5] text-[#444444]" />
                      </button>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Explore Other Range */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="w-full h-px bg-gray-200" />
      </div>

      <div className="mt-8 mb-4">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 flex flex-col items-center">
          <div className="bg-black text-white px-8 py-2 rounded-[5px] mb-8 shadow-md">
            <span className="font-orbitron text-[14px] sm:text-[16px] font-bold tracking-wider uppercase">
              Explore Other Range
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[1100px]">
            {[
              { title: "DC TOOLS", image: "/7.webp", href: "/dc-products" },
              { title: "ACCESSORIES", image: "/5.webp", href: "#" },
              { title: "HAND TOOLS", image: "/9.webp", href: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="bg-white rounded-[15px] shadow-lg overflow-hidden flex flex-col border border-gray-100 transition-transform hover:scale-[1.02] group"
              >
                <div className="bg-white px-4 py-3 border-b border-gray-50 text-center">
                  <span className="font-orbitron text-[19px] font-bold tracking-widest text-black uppercase">
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

          <div className="w-full max-w-[1440px] mt-16">
            <div className="w-full h-px bg-gray-200" />
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
