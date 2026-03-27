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
  {
    id: "BNEDR500",
    subtitle: "500 W - Taladro Eléctrico",
    image: "/BNEDR500.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "500 W",
      "Velocidad sin carga": "0-3300 rpm",
      "Capacidad máxima de perforación": "3/8”",
      "Tamaño del mandril": "10 mm / 3/8''",
      "Caja de cambios": "Plástico"
    }
  },
  {
    id: "BNIMD750",
    subtitle: "750 W -  Taladro de impacto",
    image: "/ac/BNIMD750.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "750 W",
      "Velocidad sin carga": "2800 rpm",
      "Capacidad máxima de perforación": "1/2''",
      "Tamaño del mandril": "13 mm / 1/2''",
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Mandril para llaves": "x 1",
      "Medidor de profundidad": "x 1"
    }
  },
  {
    id: "BNIMD850",
    subtitle: "850 W - Taladro Percutor",
    image: "/ac/BNIMD850.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "850 W",
      "Velocidad sin carga": "2800 rpm",
      "Capacidad máxima de perforación": "1/2''",
      "Tamaño del mandril": "13 mm / 1/2''",
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Mandril para llaves": "x 1",
      "Medidor de profundidad": "x 1"
    }
  },
  {
    id: "BNIMD1100",
    subtitle: "1100 W - Taladro Percutor",
    image: "/ac/BNIMD1100.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "1100 W",
      "Velocidad sin carga": "2800 rpm",
      "Capacidad máxima de perforación": "1/2''",
      "Tamaño del mandril": "13 mm / 1/2''",
      "Caja de cambios": "Aluminio"
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Mandril para llaves": "x 1",
      "Medidor de profundidad": "x 1"
    }
  },
  {
    id: "BNANG750",
    subtitle: "750 W - Amoladora Angular",
    image: "/ac/BNANG750.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "750 W",
      "Velocidad en vacío": "12000 rpm",
      "Diámetro del disco": "4-1/2\" / 115 mm",
      "Rosca del husillo": "M14"
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Cubierta de rueda": "x 1"
    }
  },
  {
    id: "BNANG950",
    subtitle: "950 W - Amoladora Angular",
    image: "/ac/BNANG950.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "950 W",
      "Velocidad en vacío": "11000 rpm",
      "Diámetro del disco": "4-1/2\" / 115 mm",
      "Rosca del husillo": "M14"
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Cubierta de rueda": "x 1"
    }
  },
  {
    id: "BNANG2200",
    subtitle: "2200 W - Amoladora Angular",
    image: "/ac/BNANG2200.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "2200 W",
      "Velocidad en vacío": "6600 rpm",
      "Diámetro del disco": "9\" / 230 mm",
      "Rosca del husillo": "M14"
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Cubierta de rueda": "x 1"
    }
  },
  {
    id: "BNANG2400",
    subtitle: "2400 W - Amoladora Angular",
    image: "/ac/BNANG2400.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "2400 W",
      "Velocidad en vacío": "8000 rpm",
      "Diámetro del disco": "7\" / 180 mm",
      "Rosca del husillo": "M14"
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Cubierta de rueda": "x 1"
    }
  },
  {
    id: "BNPOL1400",
    subtitle: "1400 W - Pulidora",
    image: "/ac/BNPOL1400.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "1400 W",
      "Tamaño": "180 MM / 7”",
      "Rosca": "5/8\"-11",
      "Ajustes de velocidad": "7 ajustes",
      "Rango de velocidad": "0-600/0-1000/0-1400/0-1800/ 0-2200/0-2600/0-3000 RPM",
      "Longitud del cable": "3,0 M"
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Empuñadura tipo D": "x 1",
      "Llave de ajuste": "x 1",
      "Almohadilla de lana": "x 1"
    }
  },
  {
    id: "BNJSA600",
    subtitle: "600 W - Sierra de calar",
    image: "/ac/BNJSA600.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "600 W",
      "Velocidad sin carga": "1000-3000 rpm",
      "Función pendular": "4 pasos",
      "Capacidad de corte en madera": "65 mm (2-9/16\")",
      "Capacidad de corte en acero": "8 mm (5/16\")",
      "Longitud del cable": "2,0 m"
    },
    included: {
      "Llave Allen": "x 1",
      "Adaptador de polvo": "x 1"
    }
  },
  {
    id: "BNPLS240",
    subtitle: "240 W - Lijadora de Palma",
    image: "/ac/BNPLS240.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "240 W",
      "Velocidad sin carga": "15000 RPM",
      "Base inferior": "110X100MM",
      "Longitud del cable": "2,0 M"
    },
    included: {
      "Cepillo de carbón": "x 1",
      "Papel de lija": "x 3",
      "Bolsa para el polvo": "x 1"
    }
  },
  {
    id: "BNCSA1400",
    subtitle: "1400 W - Sierra Circular",
    image: "/ac/BNCSA1400.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "1400 W",
      "Velocidad sin carga": "5500 rpm",
      "Tamaño de la hoja": "185 mm (7\")",
      "A 0°": "63,5 mm",
      "A 45°": "44 mm",
      "Base": "Metálica",
      "Longitud del cable": "2,0 m"
    }
  },
  {
    id: "BNCOS2400",
    subtitle: "2400 W - Sierra De Mesa",
    image: "/ac/BNCOS2400.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "2400 W",
      "Velocidad sin carga": "3600 rpm",
      "Tamaño de la hoja": "14\"",
      "Barra": "51mm",
      "Tubo": "130mm",
      "Rectángulo": "180x85mm",
      "Cuadrado": "115x115mm (135x135mm a 90°)"
    }
  },
  {
    id: "BNROU1600",
    subtitle: "1600 W - Router",
    image: "/ac/BNROU1600.webp",
    specs: {
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "1600 W",
      "Velocidad sin carga": "6000-26000 rpm",
      "Portaherramientas": "8, 12 mm",
      "Profundidad de trabajo": "hasta 50 mm",
      "Longitud del cable": "3,0 m"
    },
    included: {
      "Boquillas reductoras": "2 x (8 y 12 mm)",
      "Guía paralela de aluminio": "1 unidad",
      "Adaptador para extracción de polvo": "1 unidad",
      "Varios": "Placa guía, Rodillo copiador, Compás, Llave fija"
    }
  },
  {
    id: "BNRHM800SDS",
    subtitle: "3,0J - Martillo Perforador",
    image: "/ac/BNRHM800SDS.webp",
    specs: {
      "ENERGÍA DE IMPACTO": "3,0J",
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "800 W",
      "Velocidad en vacío": "1250 rpm",
      "Tasa de Impacto": "4900 BPM",
      "Hormigón": "26mm",
      "Acero": "13mm",
      "Madera": "30mm"
    },
    included: {
      "Brocas": "3 x (6/8/10 × 145 mm)",
      "Cincel puntiagudo": "1 x (14×245 mm)",
      "Cincel plano": "1 x (14×245 mm)",
      "Varilla de ajuste de profundidad": "1 unidad"
    }
  },
  {
    id: "BNRHM1500SDS",
    subtitle: "5,5J - Martillo Perforador",
    image: "/ac/BNRHM1500SDS.webp",
    specs: {
      "ENERGÍA DE IMPACTO": "5,5J",
      "Voltaje": "220 V/60 Hz",
      "Potencia de entrada": "1500 W",
      "Velocidad en vacío": "950 rpm",
      "Tasa de Impacto": "4500 BPM",
      "Hormigón": "38mm",
      "Acero": "13mm",
      "Madera": "38mm"
    },
    included: {
      "Brocas": "3 x (6/8/10 × 145 mm)",
      "Cincel puntiagudo": "1 x (14×245 mm)",
      "Cincel plano": "1 x (14×245 mm)",
      "Varilla de ajuste de profundidad": "1 unidad"
    }
  },

  // DC Products (Cordless)
  { id: "BNDR45", subtitle: "45N.M - Taladro Percutor", image: "/dc/BNID452B2.webp" },
  {
    id: "BNDR75",
    subtitle: "75N.M - Taladro Percutor Compacto",
    image: "/dc/BNCID75K.webp",
    specs: {
      "Tensión": "20V",
      "Velocidad en vacío": "0-500 / 0-2000 RPM",
      "Velocidad máxima de impacto": "0-8000 / 0-32000 BPM",
      "Par máx": "75 Nm"
    }
  },
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

const defaultSpecs = {
  "Tensión": "20V",
  "Velocidad en vacío": "0-500/0-2000RPM",
  "Velocidad máxima de impacto": "0-8000 BPM / 0-32000BPM",
  "Par máx": "75Nm",
};

const defaultIncluded = {
  "Batería": "1 x 20V 2.0Ah",
  "Cargador": "1 x Cargador Rápido",
};

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = allProducts.find((p) => p.id === id) || allProducts[1]; // fallback

  const specs = (product as any).specs || defaultSpecs;
  const included = (product as any).included || defaultIncluded;

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
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-[#E5E5E5] pb-1">
                        <span>{key}</span><span className="font-bold text-black">{value as string}</span>
                      </div>
                    ))}
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
                    {Object.entries(included).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-[#E5E5E5] pb-1">
                        <span>{key}</span><span className="font-bold text-black">{value as string}</span>
                      </div>
                    ))}
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
