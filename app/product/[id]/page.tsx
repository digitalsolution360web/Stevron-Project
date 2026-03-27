"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const allProducts = [
  // AC Products (Corded)
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

  // DC Products (Cordless)
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

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = allProducts.find((p) => p.id === id) || allProducts[1]; // fallback

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    specifications: true,
    included: false,
    features: false,
    warranty: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 pb-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-[12px] font-[Antenna] uppercase text-[#565656] gap-2 mb-8">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/products" className="hover:text-black transition-colors">Products</Link>
          <ChevronRight size={12} />
          <span className="text-[#94A034]">{product.id}</span>
        </div>

        {/* Responsive Grid */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
          
          {/* Left Side: Product Image Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 border border-black bg-white rounded-[4px] aspect-square relative">
            <Image
              src={product.image}
              alt={product.id}
              fill
              className="object-contain p-8 transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pt-0">
            {/* Title */}
            <h1 className="font-['Eurostile_Extended',sans-serif] text-[24px] sm:text-[32px] font-bold uppercase text-black mb-6 leading-tight">
              {product.id} <span className="text-[#94A034]">- {product.subtitle.split(' - ')[1] || product.subtitle}</span>
            </h1>

            {/* Bullets */}
            <ul className="mb-8 space-y-2.5">
              <li className="flex items-center gap-2 font-[Antenna] text-[15px] font-normal text-[#565656]">
                <div className="w-1.5 h-1.5 bg-[#565656] rounded-full shrink-0" />
                Motor sin escobillas de alto rendimiento
              </li>
              <li className="flex items-center gap-2 font-[Antenna] text-[15px] font-normal text-[#565656]">
                <div className="w-1.5 h-1.5 bg-[#565656] rounded-full shrink-0" />
                Sistema de batería Li-Ion
              </li>
            </ul>

            {/* Accordions */}
            <div className="flex flex-col gap-1 w-full max-w-[600px] mt-auto">
              
              {/* Technical Specs */}
              <div className="flex flex-col bg-white">
                <button 
                  onClick={() => toggleSection('specifications')}
                  className="w-full bg-[#E5E5E5] uppercase font-[Antenna] text-[12px] font-bold text-black py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-300"
                >
                  TECHNICAL SPECIFICATIONS
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.specifications ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.specifications ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-col gap-2.5 text-[12px] font-[Antenna] text-[#565656]">
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span>Tensión</span><span className="font-bold text-black">20V</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span>Velocidad en vacío</span><span className="font-bold text-black">0-500/0-2000RPM</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span>Velocidad máxima de impacto</span><span className="font-bold text-black">0-8000 BPM / 0-32000BPM</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span>Par máx</span><span className="font-bold text-black">75Nm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Incluidos */}
              <div className="flex flex-col bg-white">
                <button 
                  onClick={() => toggleSection('included')}
                  className="w-full bg-black uppercase font-[Antenna] text-[12px] font-bold text-white py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-900"
                >
                  INCLUIDOS
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.included ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.included ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-col gap-2.5 text-[12px] font-[Antenna] text-[#565656]">
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span>Batería</span><span className="font-bold text-black">1 x 20V 2.0Ah</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span>Cargador</span><span className="font-bold text-black">1 x Cargador Rápido</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col bg-white">
                <button 
                  onClick={() => toggleSection('features')}
                  className="w-full bg-black uppercase font-[Antenna] text-[12px] font-bold text-white py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-900"
                >
                  FEATURES
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.features ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.features ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-col gap-2.5 text-[12px] font-[Antenna] text-[#565656]">
                    <p>- Diseño compacto y ligero</p>
                    <p>- Luz LED integrada</p>
                    <p>- Empuñadura ergonómica</p>
                  </div>
                </div>
              </div>

              {/* Warranty */}
              <div className="flex flex-col bg-white">
                <button 
                  onClick={() => toggleSection('warranty')}
                  className="w-full bg-black uppercase font-[Antenna] text-[12px] font-bold text-white py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-900"
                >
                  WARRANTY
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.warranty ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.warranty ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-row items-center justify-between gap-2.5 text-[12px] font-[Antenna] text-[#565656]">
                    <div className="flex flex-col gap-1.5">
                      <p>- Garantía de 2 años asegurada</p>
                      <p>- Se ofrecerá 1 año adicional de garantía tras el registro</p>
                    </div>
                    <div className="flex items-center justify-center p-2 rounded border border-[#E5E5E5]">
                      <span className="text-[20px] font-bold font-orbitron">2+1</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Explore Other Range Section copied from AC/DC */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 mt-8">
        <div className="w-full h-px bg-gray-200" />
      </div>

      <div className="mt-12 mb-4">
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
