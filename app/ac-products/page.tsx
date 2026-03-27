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
    { id: "BNDR45", subtitle: "45N.M - Taladro Percutor", image: "/dc/BNID452B2.webp" },
    { id: "BNDR75", subtitle: "75N.M - Taladro Percutor Compacto", image: "/dc/BNCID75K.webp" },
    { id: "BNIW4002B2", subtitle: "400N.M - Llave de Impacto", image: "/dc/BNIW4002B2.webp" },
    { id: "BNIW6004B2", subtitle: "600N.M - Llave de Impacto", image: "/dc/BNIW6004B2.webp" },
    { id: "BNIW8004B2", subtitle: "800N.M - Llave de Impacto", image: "/dc/BNIW8004B2.webp" },
    { id: "BNCAG8504B1", subtitle: "4-1/2” - Amoladora Angular", image: "/dc/BNCAG8504B1.webp" },
    { id: "BNCRH20J4B", subtitle: "2.0J - Rotomartillo Inalámbrico", image: "/dc/BNCRH20J4B.webp" },
    { id: "BNCRH25J4B2", subtitle: "2.6J - Rotomartillo Inalámbrico", image: "/dc/BNCRH25J4B2.webp" },
    { id: "BNCRH45J", subtitle: "4.5J - Rotomartillo Inalámbrico", image: "/dc/BNCRH45J.webp" },
    { id: "BNCCS190", subtitle: "185MM - Sierra circular", image: "/dc/BNCCS190.webp" },
    { id: "BNCSS", subtitle: "Lijadora de Hoja", image: "/dc/BNCSS.webp" },
    { id: "BNCBL2B1", subtitle: "Soplador y Aspiradora", image: "/dc/BNCBL2B1.webp" },
    { id: "BNLB20", subtitle: "2AH - Baterías ion-litio", image: "/dc/BNLB20.webp" },
    { id: "BNLB40", subtitle: "4AH - Baterías ion-litio", image: "/dc/BNLB40.webp" },
    { id: "BNLB50", subtitle: "5AH - Baterías ion-litio", image: "/dc/BNLB50.webp" },
    { id: "BNBC35A", subtitle: "Cargador de Batería", image: "/dc/BNBC35A.webp" },
    { id: "BNDBC3A", subtitle: "Cargador de Batería", image: "/dc/BNDBC3A.webp" },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative w-full aspect-[16/6] lg:aspect-[16/5.5]  overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/41.png"
            alt="STEVRON DC Hero Banner"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* 1NE PLATFORM White Box */}
      <section className="relative -mt-[20px] lg:-mt-[40px] z-30 flex justify-center px-4 sm:px-6">
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
      <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row">

          {/* Sidebar Categories */}
          <div className="w-full shrink-0 lg:w-[260px] flex flex-col items-center sm:items-start">
            <div className="w-full sm:w-[200px] mb-4 lg:mb-6">
              <h2 className="font-orbitron text-[14px] lg:text-[16px] font-bold uppercase tracking-tight text-black text-center sm:text-left">
                Product Category
              </h2>
              <div className="h-[1px] w-full bg-black mt-1" />
            </div>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide flex-nowrap w-full pl-2 sm:pl-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex shrink-0 h-[28px] lg:h-[22px] min-w-max lg:w-[200px] items-center justify-center lg:justify-start px-4 lg:px-3 font-orbitron text-[10px] lg:text-[11px] font-bold tracking-tight transition-all rounded-[14px] lg:rounded-[2px] cursor-pointer bg-[#282828] text-white hover:bg-black/90"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {products.map((product) => {
              return (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="group flex flex-col w-full max-w-[400px] sm:max-w-[207px] h-[300px] overflow-hidden rounded-[12px] border border-[#171717] bg-white transition-all hover:shadow-xl hover:-translate-y-1"
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

                  <div className="flex h-[78px] w-full flex-col justify-center gap-0.5 border-t border-black/5 bg-[#171717] px-2 py-1.5">
                    <h3 className="px-1  font-['Eurostile_Extended',sans-serif] text-[14px] font-bold leading-[100%] uppercase text-white">
                      {product.id}
                    </h3>
                    <p className="px-1 font-[Antenna] text-[11px] font-medium leading-[110%] text-[#D4D4D4] mt-0.5">
                      {product.subtitle}
                    </p>

                    <div className="px-1 mt-1.5">
                      <button className="flex h-[20px] w-auto min-w-[90px] items-center justify-center gap-1 rounded-full bg-white px-3 font-orbitron text-[8px] font-bold uppercase leading-none text-[#444444] transition-all hover:bg-gray-200 shadow-sm cursor-pointer whitespace-nowrap">
                        VIEW DETAILS
                        <ArrowRight size={9} className="stroke-[2.5] text-[#444444]" />
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

