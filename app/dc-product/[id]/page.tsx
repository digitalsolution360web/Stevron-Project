"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { dcProducts } from "@/data/dcProducts";

export default function DCProductDetail() {
  const router = useRouter();
  const params = useParams();
  const id = (params.id as string)?.toUpperCase();

  const product = dcProducts.find((p) => p.id.toUpperCase() === id) || dcProducts[0];

  const specs = (product as any).specs || {};
  const included = (product as any).included || {};
  const features = (product as any).features || ["Tecnología Brushless", "Diseño ergonómico", "Sistema de batería 1NE"];

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

        {/* Breadcrumb Row */}
        <div className="flex flex-col sm:flex-row sm:items-center mt-5 justify-between gap-4 mb-8">
          <div className="flex items-center text-[11px] sm:text-[12px] font-orbitron uppercase text-[#565656] gap-2">
            <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <Link href="/dc-products" className="hover:text-black transition-colors font-bold text-black border-b-2 border-[#94A034] px-1 bg-[#94A034]/10 rounded-sm">Productos DC</Link>
            <ChevronRight size={12} />
            <span className="text-[#94A034] font-bold">{product.id}</span>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">

          {/* Left Side: Product Image Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 xl:p-16 bg-white rounded-[4px] aspect-square relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.id}
              fill
              className="object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pt-0">
            <h1 className="font-['Eurostile_Extended',sans-serif] text-[17px] sm:text-[21px] lg:text-[28px] font-bold uppercase text-black mb-3 leading-[1.2] tracking-tight max-w-full break-words">
              {product.id}<span className="text-[#94A034]"> - {product.subtitle.split(' - ')[1] || product.subtitle}</span>
            </h1>

            {/* Bullets - Reduced gapping and professional font */}
            <ul className="mb-1.8 space-y-1">
              {(product as any).topBullets ? (
                (product as any).topBullets.map((bullet: string, i: number) => (
                  <li key={i} className="font-inter text-[14px] font-[300] leading-[1.4] text-black">
                    &#x2022; {bullet}
                  </li>
                ))
              ) : (
                <>
                  <li className="font-inter text-[14px] font-[300] leading-[1.4] text-black">
                    &#x2022; Motor sin escobillas de alto rendimiento
                  </li>
                  <li className="font-inter text-[14px] font-[300] leading-[1.4] text-black">
                    &#x2022; Sistema de batería Li-Ion compatible
                  </li>
                </>
              )}
            </ul>

            {/* Accordions - Reduced top margin */}
            <div className="flex flex-col gap-[2px] w-full max-w-[600px] mt-4 mb-auto">

              {/* Technical Specs */}
              <div className="flex flex-col bg-white">
                <button
                  onClick={() => toggleSection('specifications')}
                  className="w-full bg-[#E5E5E5] uppercase font-orbitron text-[14px] font-medium leading-[121%] text-black py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-300"
                >
                  ESPECIFICACIONES TÉCNICAS
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.specifications ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.specifications ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-col gap-2.5 font-inter text-[14px] font-[300] leading-[1.4] text-black">
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-[#E5E5E5] pb-1">
                        <span>{key}</span><span className="font-[400] text-black">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Incluidos */}
              <div className="flex flex-col bg-white">
                <button
                  onClick={() => toggleSection('included')}
                  className="w-full bg-black uppercase font-orbitron text-[14px] font-medium leading-[121%] text-white py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-900"
                >
                  INCLUIDOS
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.included ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.included ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-col gap-2.5 font-inter text-[14px] font-[300] leading-[1.4] text-black">
                    {Object.entries(included).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-[#E5E5E5] pb-1">
                        <span>{key}</span><span className="font-[400] text-black">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              {!['BNLB20', 'BNLB40', 'BNLB50', 'BNBC35A', 'BNDBC3A'].includes(product.id) && (
                <div className="flex flex-col bg-white">
                  <button
                    onClick={() => toggleSection('features')}
                    className="w-full bg-black uppercase font-orbitron text-[14px] font-medium leading-[121%] text-white py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-900"
                  >
                    CARACTERÍSTICAS
                    <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.features ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections.features ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="p-4 flex flex-col gap-2.5 font-inter text-[14px] font-[300] leading-[1.4] text-black">
                      {features.map((f: string, i: number) => (
                        <p key={i}>&#x2022; {f}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Warranty */}
              <div className="flex flex-col bg-white">
                <button
                  onClick={() => toggleSection('warranty')}
                  className="w-full bg-black uppercase font-orbitron text-[14px] font-medium leading-[121%] text-white py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-900"
                >
                  GARANTÍA
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.warranty ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.warranty ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-row items-center justify-between gap-2.5 font-[Antenna] text-[14px] font-[200] leading-[121%] text-black">
                    <div className="flex flex-col gap-1.5">
                      <p>&#x2022; Garantía de 2 años asegurada</p>
                      <p>&#x2022; Se ofrecerá 1 año adicional de garantía tras el registro</p>
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

      {/* Explore Other Range Section */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 mt-8">
        <div className="w-full h-px bg-gray-200" />
      </div>

      <div className="mt-12 mb-4">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 flex flex-col items-center">
          <div className="bg-black text-white px-8 py-2 rounded-[5px] mb-8 shadow-md">
            <span className="font-orbitron text-[14px] sm:text-[16px] font-bold tracking-wider uppercase">
              Explorar Otras Gamas
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
