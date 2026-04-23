"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 flex flex-col items-center">

        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-[800px]">
          {/* Title Pill - Enforced single line on small screens */}
          <div>
            <span className="font-orbitron text-[11px] min-[350px]:text-[12px] min-[400px]:text-[14px] sm:text-[17px] font-black tracking-wider text-black  uppercase whitespace-nowrap">
              ¿Listo para vivir la excelencia?
            </span> <br />
            <div className="mt-3 h-[3px] w-24 border-l-100 border-[#94A034] mx-auto" />
          </div>

          {/* Description */}
          <p className="font-sans text-[15px] sm:text-[17px] text-[#565656] leading-relaxed">
            Únase a miles de clientes satisfechos que confían en Stevron para sus necesidades de equipos industriales.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2 w-full sm:w-auto">
            {/* The single Explore Products button that links to Contact Us */}
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full bg-[#94A034] text-white font-orbitron cursor-pointer text-[14px] sm:text-[15px] font-bold px-8 sm:px-12 py-4 rounded-[5px] shadow-md transition-all hover:opacity-90 hover:scale-[1.02] uppercase tracking-wider">
                EXPLORA NUESTROS PRODUCTOS
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-gray-200 mt-12" />
      </div>
    </section>
  );
}
