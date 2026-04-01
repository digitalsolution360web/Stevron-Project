"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
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
  {
    id: "BNID452B2",
    subtitle: "Taladro Percutor Inalámbrico 45Nm",
    image: "/dc/BNID452B2.webp",
    specs: {
      "Tensió": "20V",
      "Velocidad en vacío": "0-400/0-1400RPM",
      "Velocidad máxima de impacto": "0-6000 BPM / 0-21000BPM",
      "Par máx": "45Nm",
      "Portabrocas": "Metálico",
      "Capacidad del portabrocas": "0,8–10 mm",
      "Ajustes de par": "21+3",
      "Engranaje de velocidad mecánico": "2"
    },
    included: {
      "Batería Ion-Litio": "2 x 2.0Ah",
      "Cargador rápido": "1",
      "Clip para cinturón": "1"
    },
    features: [
      "Control preciso para perforación y atornillado.",
      "Portabrocas metálico sin llave.",
      "Luz de trabajo LED"
    ]
  },
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
  {
    id: "BNIW4002B2",
    subtitle: "Llave de Impacto batería 400Nm (2 Bat 2.0Ah y 1 ch.)",
    image: "/dc/BNIW4002B2.webp",
    specs: {
      "Tensió": "20V",
      "Cuadradillo": "1/2”",
      "Velocidad sin carga": "0-1800/0-2200/0-2600 RPM",
      "Frecuencia de impacto": "0-2500/0-3000/0-3500 BPM",
      "Par de apriete": "350 N.M",
      "Par de aflojamiento": "400 n.m"
    },
    included: {
      "Batería Ion-Litio": "2 x 2.0Ah",
      "Cargador rápido": "1",
      "Clip para cinturón": "1",
      "Llave": "17 , 19 , 21 MM"
    },
    features: [
      "Alto par para trabajos exigentes",
      "Luz de trabajo LED"
    ]
  },
  {
    id: "BNIW6004B2",
    subtitle: "Llave de Impacto batería 600Nm (2 Bat 4.0Ah y 1 ch.)",
    image: "/dc/BNIW6004B2.webp",
    specs: {
      "Tensió": "20V",
      "Cuadradillo": "1/2”",
      "Velocidad sin carga": "0-1700/0-2100/0-2400 RPM",
      "Frecuencia de impacto": "0-2300/0-2700/0-3000 BPM",
      "Par de apriete": "550 N.M",
      "Par de aflojamiento": "600 N.M"
    },
    included: {
      "Batería Ion-Litio": "2 x 4.0Ah",
      "Cargador rápido": "1",
      "Clip para cinturón": "1",
      "Llave": "17 , 19 , 21 MM"
    },
    features: [
      "Alto par para trabajos exigentes",
      "Luz de trabajo LED"
    ]
  },
  {
    id: "BNIW8004B2",
    subtitle: "Llave de Impacto batería 850Nm (2 Bat 4.0Ah y 1 ch.)",
    image: "/dc/BNIW8004B2.webp",
    specs: {
      "Tensió": "20V",
      "Cuadradillo": "1/2”",
      "Velocidad sin carga": "0-1200/0-1700/0-2200 RPM",
      "Frecuencia de impacto": "0-1600/0-2000/0-2200 BPM",
      "Par de apriete": "750 N.M",
      "Par de aflojamiento": "800 N.M"
    },
    included: {
      "Batería Ion-Litio": "2 x 4.0Ah",
      "Cargador rápido": "1",
      "Clip para cinturón": "1",
      "Llave": "17 , 19 , 21 MM"
    },
    features: [
      "Alto par para trabajos exigentes",
      "Luz de trabajo LED"
    ]
  },
  {
    id: "BNCAG8504B1",
    subtitle: "Amoladora Angular batería 850W (1 Bat 4.0Ah y 1 ch.)",
    image: "/dc/BNCAG8504B1.webp",
    specs: {
      "Tensió": "20V",
      "Diámetro del disco": "4-1/2”",
      "Rosca del eje": "5/8\"-11UNC",
      "Ajuste de velocidad": "6",
      "Velocidad en vacío": "8500 - 10000 RPM"
    },
    included: {
      "Batería Ion-Litio": "2 x 4.0Ah",
      "Cargador rápido": "1",
      "Disco": "10 x 4-1/2”"
    },
    features: [
      "Ideal para cortar, esmerilar y pulir.",
      "Husillo de alta resistencia (5/8\"-11 UNC)"
    ]
  },
  { id: "BNCRH20J4B", subtitle: "2.0J - Rotomartillo Inalámbrico", image: "/dc/BNCRH20J4B.webp" },
  { id: "BNCRH25J4B2", subtitle: "2.6J - Rotomartillo Inalámbrico", image: "/dc/BNCRH25J4B2.webp" },
  { id: "BNCRH45J", subtitle: "4.5J - Rotomartillo Inalámbrico", image: "/dc/BNCRH45J.webp" },
  { id: "BNCCS190", subtitle: "185MM - Sierra circular", image: "/dc/BNCCS190.webp" },
  {
    id: "BNCSS",
    subtitle: "Lijadora Orbital Aleatoria",
    image: "/dc/BNCSS.webp",
    specs: {
      "Tensión": "20V",
      "Distancia excéntrica": "2.7MM",
      "Diámetro del disco": "125MM",
      "Ajustes de velocidad": "6",
      "Velocidad sin carga": "2000 / 3500 / 5000 / 6500 / 8000 / 10000 RPM"
    },
    included: {
      "Papel de lija": "x 5"
    }
  },
  {
    id: "BNCBL2B1",
    subtitle: "Soplador y Aspiradora",
    image: "/dc/BNCBL2B1.webp",
    specs: {
      "Tensión": "20V",
      "Velocidad sin carga": "0-6000 / 0-12000 / 0-18000 RPM",
      "Ajuste del volumen de aire": "3",
      "Velocidad del aire": "144 / 190.8 / 252 Km/H"
    }
  },
  { id: "BNLB20", subtitle: "Batería de Litio 2.0Ah", image: "/dc/BNLB20.webp" },
  {
    id: "BNLB40",
    subtitle: "Batería de Litio 4.0Ah",
    image: "/dc/BNLB40.webp",
    specs: {
      "Tipo de batería": "Ion-Litio",
      "Tensión de la batería": "20V",
      "Amperaje": "4Ah"
    }
  },
  {
    id: "BNLB50",
    subtitle: "Batería de Litio 5.0Ah",
    image: "/dc/BNLB50.webp",
    specs: {
      "Tipo de batería": "Ion-Litio",
      "Tensión de la batería": "20V",
      "Amperaje": "5Ah"
    }
  },
  {
    id: "BNBC35A",
    subtitle: "Cargador de Batería 3.5A",
    image: "/dc/BNBC35A.webp",
    specs: {
      "Voltaje de entrada": "110-120 V ~ 50/60 Hz",
      "Voltaje de salida": "21V",
      "Corriente de salida": "3A",
      "Tipo de enchufe": "VDE"
    }
  },
  {
    id: "BNDBC3A",
    subtitle: "Cargador de Batería Doble Puerto 3A",
    image: "/dc/BNDBC3A.webp",
    specs: {
      "Voltaje de entrada": "110-120 V ~ 50/60 Hz",
      "Voltaje de salida": "20 V",
      "Corriente de salida": "3 A",
      "Tipo de enchufe": "VDE"
    }
  },
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
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  // Determine if it's an AC product based on ID or index
  const acProductIds = allProducts.slice(0, 16).map(p => p.id);
  const isAC = acProductIds.includes(id);
  const product = allProducts.find((p) => p.id === id) || allProducts[1]; // fallback

  const specs = (product as any).specs || defaultSpecs;
  const included = (product as any).included || defaultIncluded;
  const features = (product as any).features || ["Diseño compacto y ligero", "Luz LED integrada", "Empuñadura ergonómica"];

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

        {/* Back Button & Breadcrumb Row */}
        <div className="flex flex-col sm:flex-row sm:items-center mt-5 justify-between gap-4 mb-8">
          <div className="flex items-center text-[12px] font-[Antenna] uppercase text-[#565656] gap-2">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight size={12} />
            {isAC ? (
              <>
                <Link href="/ac-products" className="hover:text-black transition-colors font-bold text-black border-b-2 border-[#94A034] px-1 rounded-sm">AC Products</Link>
                <ChevronRight size={12} />
              </>
            ) : (
              <>
                <Link href="/dc-products" className="hover:text-black transition-colors font-bold text-black border-b-2 border-[#94A034] px-1 bg-[#94A034]/10 rounded-sm">DC Products</Link>
                <ChevronRight size={12} />
              </>
            )}
            <span className="text-[#94A034] font-bold">{product.id}</span>
          </div>

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-[4px] font-[Antenna] text-[12px] font-bold uppercase hover:bg-[#94A034] transition-all w-fit shadow-md group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">

          {/* Left Side: Product Image Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white rounded-[4px] aspect-square relative">
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
            <h1 className="font-orbitron text-[17px] sm:text-[21px] lg:text-[24px] font-bold uppercase text-black mb-6 leading-none tracking-normal whitespace-nowrap overflow-visible pr-6">
              {product.id}<span className="text-[#94A034]"> - {product.subtitle.split(' - ')[1] || product.subtitle}</span>
            </h1>
            {/* Bullets */}
            <ul className="mb-8 space-y-1">
              <li className="font-[Antenna] text-[14px] font-[200] leading-[121%] text-black">
                &#x2022; Motor sin escobillas de alto rendimiento
              </li>
              <li className="font-[Antenna] text-[14px] font-[200] leading-[121%] text-black">
                &#x2022; Sistema de batería Li-Ion
              </li>
            </ul>

            {/* Accordions */}
            <div className="flex flex-col gap-[2px] w-full max-w-[600px] mt-8 mb-auto">

              {/* Technical Specs */}
              <div className="flex flex-col bg-white">
                <button
                  onClick={() => toggleSection('specifications')}
                  className="w-full bg-[#E5E5E5] uppercase font-orbitron text-[14px] font-medium leading-[121%] text-black py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-300"
                >
                  TECHNICAL SPECIFICATIONS
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.specifications ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.specifications ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-col gap-2.5 font-[Antenna] text-[14px] font-[200] leading-[121%] text-black">
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
                  <div className="p-4 flex flex-col gap-2.5 font-[Antenna] text-[14px] font-[200] leading-[121%] text-black">
                    {Object.entries(included).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-[#E5E5E5] pb-1">
                        <span>{key}</span><span className="font-[400] text-black">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col bg-white">
                <button
                  onClick={() => toggleSection('features')}
                  className="w-full bg-black uppercase font-orbitron text-[14px] font-medium leading-[121%] text-white py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-900"
                >
                  FEATURES
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openSections.features ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.features ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 flex flex-col gap-2.5 font-[Antenna] text-[14px] font-[200] leading-[121%] text-black">
                    {features.map((f: string, i: number) => (
                      <p key={i}>&#x2022; {f}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Warranty */}
              <div className="flex flex-col bg-white">
                <button
                  onClick={() => toggleSection('warranty')}
                  className="w-full bg-black uppercase font-orbitron text-[14px] font-medium leading-[121%] text-white py-3 px-4 flex justify-between items-center transition-colors hover:bg-gray-900"
                >
                  WARRANTY
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
