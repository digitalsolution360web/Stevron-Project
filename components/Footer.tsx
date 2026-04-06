"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 flex flex-col">
        {/* Newsletter Section - Narrower width as per Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 items-center mb-12">
          <h2 className="lg:col-span-2 font-orbitron text-[20px] font-normal leading-tight text-white lg:text-left">
            Suscríbete a nuestro boletín
          </h2>

          <div className="lg:col-span-2 relative w-full">
            <div className="flex h-[48px] w-full items-center bg-white rounded-full overflow-hidden p-1 shadow-lg border-2 border-white">
              <input
                type="email"
                placeholder="Tu dirección de correo electrónico"
                className="flex-1 px-6 outline-none text-[#A3A3A3] font-['Antenna',sans-serif] text-[13px]"
              />
              <button className="bg-[#94A034] h-full px-8 rounded-full text-white font-['Antenna',sans-serif] text-[14px] font-bold transition-opacity hover:opacity-90">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Continuous Horizontal Line */}
        <div className="w-full h-px bg-white/30 mb-12" />

        {/* Brand and Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description Section - Spans first 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Image
              src="/Logo.webp"
              alt="STEVRON"
              width={200}
              height={40}
              className="h-auto w-[160px]"
            />
            <p className="font-['Antenna',sans-serif] text-[14.5px] text-gray-400 leading-relaxed font-light max-w-[400px]">
              Empoderando a profesionales con herramientas y equipos de alta calidad. Construyendo el futuro de la excelencia industrial a través de la innovación y la calidad.
            </p>
            <p className="font-['Antenna',sans-serif] text-[13px] text-gray-500 mt-4">
              © 2026 Stevron. Todos los derechos reservados.
            </p>
          </div>

          {/* Links Section - Spans last 2 columns to match Newsletter Input above */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {/* Company Column */}
            <div className="flex flex-col gap-6 lg:items-start">
              <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
                Empresa
                <div className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#94A034]" />
              </h3>
              <ul className="flex flex-col gap-3 font-['Antenna',sans-serif] text-[14px] text-gray-400 font-light lg:text-left">
                <li><Link href="/" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Nuestra Historia</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Nuestros Valores</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
              </ul>
            </div>

            {/* Product Column */}
            <div className="flex flex-col gap-6 lg:items-start">
              <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
                Productos
                <div className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#94A034]" />
              </h3>
              <ul className="flex flex-col gap-3 font-sans text-[14px] text-gray-400 font-light lg:text-left">
                <li><Link href="/dc-products" className="hover:text-white transition-colors">Herramientas DC</Link></li>
                <li><Link href="/ac-products" className="hover:text-white transition-colors">Herramientas AC</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Accesorios</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Herramientas Manuales</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="flex flex-col gap-6 lg:items-start">
              <div className="flex flex-col gap-6">
                <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
                  Soporte
                  <div className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#94A034]" />
                </h3>
                <ul className="flex flex-col gap-3 font-sans text-[14px] text-gray-400 font-light lg:text-left mb-6">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contáctenos</Link></li>
                  <li><Link href="/warranty-registration" className="hover:text-white transition-colors">Garantía</Link></li>
                  <li><Link href="/become-a-dealer" className="hover:text-white transition-colors">Conviértase en Distribuidor</Link></li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110">
                  <Image src="/msg.png" alt="Message" width={20} height={20} className="object-contain" />
                </Link>
                <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110">
                  <Image src="/insta.png" alt="Instagram" width={20} height={20} className="object-contain" />
                </Link>
                <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110">
                  <Image src="/face.png" alt="Facebook" width={20} height={20} className="object-contain" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
