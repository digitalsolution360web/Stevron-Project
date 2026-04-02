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
    "Todos los productos",
    "Taladro",
    "Llave de impacto",
    "Amoladora angular",
    "Rotomartillo",
    "Sierra circular",
    "Lijadora de Hoja",
    "Soplador",
    "Batería",
    "Cargador",
  ];

  const products = [
    { id: "BNID452B2", subtitle: "Taladro percutor", image: "/dc/BNID452B2.webp" },
    { id: "BNDR75", subtitle: "Taladro Percutor Compacto", image: "/dc/BNCID75K.webp" },
    { id: "BNIW4002B2", subtitle: "Llave de Impacto batería", image: "/dc/BNIW4002B2.webp" },
    { id: "BNIW6004B2", subtitle: "Llave de Impacto batería", image: "/dc/BNIW6004B2.webp" },
    { id: "BNIW8004B2", subtitle: "Llave de Impacto batería ", image: "/dc/BNIW8004B2.webp" },
    { id: "BNCAG8504B1", subtitle: "Amoladora angular", image: "/dc/BNCAG8504B1.webp" },
    { id: "BNCRH20J4B", subtitle: "Rotomartillo Inalámbrico", image: "/dc/BNRH20J4B1.webp" },
    { id: "BNCRH25J4B2", subtitle: "Rotomartillo Inalámbrico", image: "/dc/BNRH25J4B2.webp" },
    { id: "BNCRH45J", subtitle: "Rotomartillo Inalámbrico", image: "/dc/BNRH45JSDS.webp" },
    { id: "BNCCS190", subtitle: "Sierra Circular", image: "/dc/BNCS190.webp" },
    { id: "BNCSS", subtitle: "Lijadora de Hoja", image: "/dc/BNCSS.webp" },
    { id: "BNCBL2B1", subtitle: "Soplador", image: "/dc/BNBL2B1.webp" },
    { id: "BNLB20", subtitle: "Batería de Litio", image: "/dc/BNLB20.webp" },
    { id: "BNLB40", subtitle: "Batería de Litio", image: "/dc/BNLB40.webp" },
    { id: "BNLB50", subtitle: "Batería de Litio", image: "/dc/BNLB50.webp" },
    { id: "BNBC35A", subtitle: "Cargador de Batería", image: "/dc/BNBC35A.webp" },
    { id: "BNDBC3A", subtitle: "Cargador de Batería", image: "/dc/BNDBC3A.webp" },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative w-full aspect-[16/6] lg:aspect-[16/5.5]  overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <Image
            src="banner/dc-banner.webp"
            alt="STEVRON DC Hero Banner"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* 1NE PLATFORM White Box */}
      <section className="relative -mt-[30px] lg:-mt-[50px] z-30 flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-[805px] min-h-[220px] rounded-[4px] bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#000000] text-center flex flex-col items-center justify-center sm:p-10">

          {/* Pill Header */}
          <div
            className="mb-4 flex items-center justify-center bg-[#282828] px-2 sm:px-0"
            style={{
              width: '100%',
              maxWidth: '315px',
              height: '33px',
              borderRadius: '16.5px'
            }}
          >
            <span
              className="font-['Eurostile_Extended',sans-serif] text-[18px] sm:text-[22px] font-bold tracking-normal text-white uppercase leading-none whitespace-nowrap overflow-hidden text-ellipsis"
            >
              1NE PLATFORM
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="mb-4 font-['Antenna',sans-serif] text-[10px] sm:text-[12px] font-normal tracking-[0.05em] text-black uppercase whitespace-nowrap overflow-hidden text-ellipsis w-full"
            style={{ maxWidth: '350px' }}
          >
            Una batería, infinitas posibilidades
 
          </p>

          {/* Description */}
          <p
            className="font-['Antenna',sans-serif] text-[12px] sm:text-[13px] font-light leading-[1.6] text-black text-center w-full"
            style={{ maxWidth: '676px' }}
          >Disfruta la verdadera libertad inalámbrica con la plataforma 1NE de STEVRON: una batería para todas tus herramientas. Nuestras herramientas DC ofrecen potencia constante, versatilidad y comodidad en todo tipo de aplicaciones. Con un solo sistema de batería, puedes cambiar de herramienta rápidamente y seguir trabajando sin paradas.
Diseñadas para alto rendimiento y durabilidad, combinan tecnología avanzada de batería con construcción robusta. Ya sea para trabajos de precisión o tareas exigentes, 1NE te da potencia y control para hacer más con menos.
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
                    className="flex shrink-0 h-[38px] lg:h-[32px] w-[200px] lg:w-[250px] items-center justify-center lg:justify-start px-4 font-orbitron text-[10px] lg:text-[12px] font-bold tracking-tight transition-all rounded-[2px] cursor-pointer bg-[#282828] text-white hover:bg-black/90 shadow-sm uppercase text-center lg:text-left break-words"
                  >
                    <span className="w-full">{cat}</span>
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
                       VER DETALLES
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
              Explora otras gamas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[1100px]">
            {[
              { title: "Herramientas AC", image: "/8.webp", href: "/ac-products" },
              { title: "Accesorios", image: "/5.webp", href: "#" },
              { title: "Herramientas manuales", image: "/9.webp", href: "#" },
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

