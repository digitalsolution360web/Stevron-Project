"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Hero Slider State
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = ["/banner/banner-1.webp", "/banner.webp", "/banner1.webp", "/banner/banner-4.webp"];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500); // Change image every 4.5 seconds
    return () => clearInterval(heroInterval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const autoSlide = setInterval(() => {
      const isAtEnd = slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10;
      if (isAtEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Professional Slider with Crossfade Effect */}
      <section className="relative w-full aspect-[4/1.3] sm:aspect-[16/8] lg:aspect-[16/5] overflow-hidden bg-[#050505]">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              <Image
                src={src}
                alt={`STEVRON Hero ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots (Professional indicators) */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`h-1.5 w-8 sm:h-2 sm:w-12 rounded-full transition-all duration-300 ${index === currentHeroIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Alignment Container - Restored to 1440px Standard */}
        <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 flex flex-col justify-center pointer-events-none">
          <div className="w-full">
            {/* Overlay components can go here */}
          </div>
        </div>
      </section>

      {/* Action Buttons Section - Restored to 1440px Standard */}
      <section className="bg-white pt-4 sm:pt-6 pb-0">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16">
          {/* Buttons Aligned to the Center */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-2">
            <button className="flex h-[45px] sm:h-[38px] px-8 items-center justify-center rounded-[5px] bg-[#000000] font-orbitron text-[14px] font-normal text-white transition-opacity hover:opacity-90 w-full sm:w-auto">
              Explora Nuestro Catálogo
            </button>

          </div>

          <div className="mt-2 sm:mt-4 mx-auto h-[2px] sm:h-[3px] w-full bg-[#A7A7A7]" />
        </div>
      </section>

      {/* About Us Section - Aligned to Navbar Width */}
      <section className="bg-white pt-1 sm:pt-2 pb-0">
        <div className="mx-auto w-full max-w-[1752px] px-4 sm:px-6 lg:px-16">
          <div className="relative w-full aspect-[16/7] sm:aspect-[16/5.6] overflow-hidden">
            <Image
              src="/about.webp"
              alt="About STEVRON"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Bottom Divider */}
          <div className="mt-1 sm:mt-2 mx-auto h-[2px] sm:h-[3px] w-full bg-[#A7A7A7]" />
        </div>
      </section>

      {/* Explore Our Full Range Section - Figma: 1139×305px container, same alignment as navbar */}
      <section className="bg-white pt-4 sm:pt-6 pb-12">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 flex flex-col items-center">
          {/* Section Title Label - as per Figma */}
          <div className="mb-12 flex h-[40px] items-center justify-center rounded-[5px] bg-black px-8">
            <span className="font-orbitron text-[16px] sm:text-[18px] font-normal tracking-wider text-white">
              Explora Nuestra Gama Completa
            </span>
          </div>

          {/* Categories Grid - optimized gap and font size for single-line fit */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: "HERRAMIENTAS DC", image: "/7.webp", href: "/dc-products" },
              { title: "HERRAMIENTAS AC", image: "/8.webp", href: "/ac-products" },
              { title: "ACCESORIOS", image: "/5.webp", href: "#" },
              { title: "HERRAMIENTAS MANUALES", image: "/9.webp", href: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex h-[360px] w-full flex-col overflow-hidden border border-[#A7A7A7] rounded-[12px] shadow-[5px_5px_10px_0px_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.02]"
              >
                {/* Header Box - Enforced single line with responsive font sizes */}
                <div className="flex h-[46px] w-full items-center justify-center bg-white border-b border-[#A7A7A7] px-1 sm:px-2">
                  <span className="font-orbitron text-[11px] min-[375px]:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-bold tracking-wider text-black whitespace-nowrap text-center">
                    {item.title}
                  </span>
                </div>
                {/* Image Container - Full bleed, no padding, object-cover for seamless look */}
                <div className="relative flex-grow bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values Section - Box: header white + inner #565656 bar, body #171717 */}
      <section className="relative w-full overflow-hidden py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-bgg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 flex flex-col items-center">
          {/* Logo + Section Title (navbar width) */}
          <div className="mb-10 flex flex-col items-center gap-4">
            <div className="flex h-[40px] items-center justify-center rounded-[5px] bg-[#000000] px-4 sm:px-8">
              <span className="font-orbitron text-[12px] min-[375px]:text-[14px] md:text-[16px] lg:text-[18px] font-normal tracking-wider text-[#FFFFFF] text-center whitespace-nowrap">
                Nuestros Valores Fundamentales
              </span>
            </div>
          </div>

          {/* Four boxes - Figma: integrated white header strip + body #171717 */}
          <div className="grid w-full justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "INNOVACIÓN",
                subtitle: "Diseñando el futuro",
                description: "En STEVRON, la innovación impulsa todo lo que creamos. Combinamos ingeniería avanzada con un diseño práctico para desarrollar herramientas potentes, precisas y confiables adaptadas a las necesidades cambiantes de los profesionales modernos.",
                iconPath: "/innovation.png"
              },
              {
                title: "CALIDAD",
                subtitle: "Construidos para durar",
                description: "Desde materiales cuidadosamente seleccionados hasta una fabricación de precisión, cada detalle garantiza durabilidad y un rendimiento constante. Estrictos controles y pruebas aseguran herramientas confiables para el uso diario.",
                iconPath: "/Group.png"
              },
              {
                title: "CONFIABILIDAD",
                subtitle: "Confianza en el Rendimiento",
                description: "Entregamos herramientas con un rendimiento constante en condiciones del mundo real. Cada producto cuenta con componentes duraderos y se somete a rigurosas pruebas, lo que garantiza un funcionamiento confiable y precisión en cada tarea.",
                iconPath: "/Group (1).png"
              },
              {
                title: "SOSTENIBILIDAD",
                subtitle: "Un Futuro más Verde",
                description: "Desarrollamos productos con responsabilidad ambiental. A través de un diseño inteligente, una producción eficiente y un rendimiento duradero, reducimos nuestra huella ecológica ofreciendo soluciones sostenibles.",
                iconPath: "/innovation.png"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex h-full min-h-[360px] w-full flex-col overflow-hidden rounded-[12px] shadow-lg"
              >
                {/* Header: Layered Design (Figma) */}
                <div className="flex flex-col">
                  {/* Black top strip (Increased height to shift white bar down) */}
                  <div className="h-[18px] w-full bg-[#171717]" />
                  {/* White title strip (Figma: 18px Bold) */}
                  <div className="flex h-[32px] items-center justify-center bg-[#FFFFFF]">
                    <span className="font-orbitron text-[16px] sm:text-[18px] font-bold uppercase tracking-[0.02em] text-[#565656]">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Body: #171717 with icon image, line, subtitle, description */}
                <div className="relative flex flex-1 flex-col bg-[#171717] px-4 pt-6 pb-8">
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon Image - Big, Professional with Glowing Circle */}
                    <div className="mb-5 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white/10 shadow-[0_0_24px_6px_rgba(255,255,255,0.12)] border border-white/20 backdrop-blur-sm">
                      <Image
                        src={item.iconPath}
                        alt=""
                        width={52}
                        height={60}
                        className="h-[60px] w-[52px] object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                      />
                    </div>

                    {/* Subtitle with side lines (Figma style) */}
                    <div className="mb-3 flex w-full items-center gap-2">
                      <div className="h-px flex-1 bg-[#FFFFFF]" />
                      <p className="font-['Antenna',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[100%] tracking-[0%] text-[#FFFFFF] text-center">
                        {item.subtitle}
                      </p>
                      <div className="h-px flex-1 bg-[#FFFFFF]" />
                    </div>

                    {/* Description left-aligned (Figma: 12px, Weight 200, White) */}
                    <p className="text-left font-inter text-[14px] sm:text-[15px] font-extralight leading-[1.6] tracking-[0.03em] text-[#FFFFFF]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Professional Tools Section */}
      <section className="bg-[#FFFFFF] py-20 pb-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 flex flex-col items-center">
          {/* Section Label */}
          <div className="mb-12 flex flex-col items-center gap-4">
            <div className="flex h-[40px] items-center justify-center rounded-[5px] bg-[#000000] px-8">
              <span className="font-orbitron text-[16px] sm:text-[18px] font-normal tracking-wider text-[#FFFFFF] text-center">
                Our Professional Tools
              </span>
            </div>
          </div>
          {/* Product Grid with Navigation Arrows (Restored Slider) */}
          <div className="relative w-full">
            {/* Left Arrow */}
            <button
              onClick={() => sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              className="absolute left-[-40px] top-1/2 hidden z-10 h-8 w-8 -translate-y-1/2 items-center justify-center text-[#000000]/50 hover:text-[#000000] sm:flex lg:left-[-60px]"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            <div
              ref={sliderRef}
              id="professional-tools-slider"
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { id: "BNID452B2", type: "dc", name: "45NM", subtitle: "Taladro percutor", image: "/dc/BNID452B2.webp" },
                { id: "BNDR75", type: "dc", name: "75NM", subtitle: "Taladro percutor compacto", image: "/dc/BNCID75K.webp" },
                { id: "BNIW4002B2", type: "dc", name: "400NM", subtitle: "Llave de impacto a batería", image: "/dc/BNIW4002B2.webp" },
                { id: "BNIW8004B2", type: "dc", name: "800NM", subtitle: "Llave de impacto a batería", image: "/dc/BNIW8004B2.webp" },
                { id: "BNIMD750", type: "ac", name: "750W", subtitle: "Taladro percutor", image: "/ac/BNIMD750.webp" },
                { id: "BNIMD1100", type: "ac", name: "1100W", subtitle: "Taladro percutor", image: "/ac/BNIMD1100.webp" },
                { id: "BNANG750", type: "ac", name: "750W", subtitle: "Amoladora angular", image: "/ac/BNANG750.webp" },
                { id: "BNANG2200", type: "ac", name: "2200W", subtitle: "Amoladora angular", image: "/ac/BNANG2200.webp" },
              ].map((product, idx) => (
                <Link
                  href={`/${product.type}-product/${product.id}`}
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-[16px] border border-[#E5E5E5] shadow-sm transition-all hover:shadow-md min-w-[280px] sm:min-w-[calc(50%-8px)] lg:min-w-[calc(25%-12px)] snap-start"
                >
                  {/* Top: Image (White BG) */}
                  <div className="flex aspect-square w-full items-center justify-center bg-[#FFFFFF] p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  {/* Bottom: Info (Black BG) */}
                  <div className="flex flex-col flex-1 bg-[#171717] px-5 py-4 justify-center">
                    <h3 className="mb-1 font-sans text-[18px] sm:text-[20px] font-bold text-[#FFFFFF] tracking-wide uppercase">{product.name}</h3>
                    <p className="mb-3 font-sans text-[15px] font-extralight text-[#ffffff] tracking-[0.03em] leading-tight">{product.subtitle}</p>
                    {/* View Details Button */}
                    <div className="mt-auto flex h-[32px] w-fit items-center gap-2 rounded-full bg-[#FFFFFF] pl-4 pr-1 text-[13px] font-bold text-[#171717] font-sans transition-all hover:bg-gray-100 uppercase">
                      Ver Detalles
                      <ArrowRight size={16} strokeWidth={2} className="text-[#171717]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              className="absolute right-[-40px] top-1/2 hidden z-10 h-8 w-8 -translate-y-1/2 items-center justify-center text-[#000000]/50 hover:text-[#000000] sm:flex lg:right-[-60px]"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* Brand Categories Section - Figma: Full width background, 3 cards */}
      <section className="relative w-full overflow-hidden py-10 sm:py-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/value.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 flex flex-col items-center">
          {/* Top Label - Figma: 373x38px, White BG, Black Text */}
          <div className="mb-14 flex min-h-[50px] w-full max-w-[550px] items-center justify-center rounded-[5px] bg-white shadow-lg border border-black/10 px-4 py-2">
            <span className="font-orbitron text-[16px] sm:text-[18px] lg:text-[20px] font-bold tracking-[0.1em] text-black text-center">
              Parte de un Grupo Industrial Global
            </span>
          </div>

          {/* Cards Grid - 3 cards, full width to align with other sections */}
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "BONHOEFFER",
                subtitle: "Uso rudo para profesionales",
                website: "www.bonhoeffermachines.com",
                url: "https://bonhoeffermachines.com",
                color: "#94A034", // Olive/Green
              },
              {
                name: "STRONWELL",
                subtitle: "Uso medio para uso regular",
                website: "www.stronwell.com",
                url: "https://www.stronwell.com",
                color: "#FF6E00", // Orange
              },
              {
                name: "MECHNOVA",
                subtitle: "Uso ligero para uso doméstico",
                website: "www.mechnovamachines.com",
                url: "https://www.mechnovamachines.com",
                color: "#00A3FF", // Blue
              }
            ].map((brand, idx) => (
              <a
                key={idx}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-[12px] bg-white p-6 lg:p-10 shadow-[1px_2px_10.6px_1px_rgba(0,0,0,0.15)] border border-black/5 transition-all hover:scale-[1.03] hover:shadow-xl block"
              >
                {/* Brand Logo/Text - Figma: Eurostile Extended 32px Bold */}
                <h2
                  className="mb-1 font-['Eurostile_Extended',_sans-serif] text-[34px] lg:text-[38px] xl:text-[42px] font-bold tracking-tighter w-full text-center"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </h2>

                {/* Subtitle with Side Lines */}
                <div className="mb-7 flex w-full items-center gap-3 px-2">
                  <div className="h-[1px] flex-1 bg-[#A7A7A7]" />
                  <span className="whitespace-nowrap font-sans text-[12px] lg:text-[14px] xl:text-[15px] font-bold text-[#565656]">
                    {brand.subtitle}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#A7A7A7]" />
                </div>

                {/* Website Link Pill */}
                <div className="mt-auto flex h-[42px] lg:h-[46px] w-full max-w-[340px] items-center justify-center rounded-full bg-black px-6 transition-colors hover:bg-gray-800 shadow-md">
                  <span
                    className="font-sans text-[15px] lg:text-[17px] font-medium tracking-tight whitespace-nowrap"
                    style={{ color: brand.color }}
                  >
                    {brand.website}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 flex flex-col items-center">
          {/* Section Label */}
          <div className="mb-6 flex min-h-[40px] sm:min-h-[45px] items-center justify-center rounded-[5px] bg-[#000000] px-8 py-2 shadow-sm">
            <span className="font-orbitron text-[16px] sm:text-[18px] font-normal tracking-wider text-[#FFFFFF] text-center">
              Preguntas Frecuentes
            </span>
          </div>

          {/* Subtitle */}
          <p className="mb-8 max-w-[760px] text-center font-[Antenna] text-[16px] sm:text-[18px] lg:text-[20px] leading-[140%] font-extralight text-[#565656]">
            Encuentre respuestas a preguntas comunes sobre nuestros productos, servicios y asociaciones. ¿No encuentra lo que busca? Póngase en contacto con nuestro equipo de soporte.
          </p>

          {/* FAQ list */}
          <div className="flex w-full max-w-[920px] flex-col gap-2.5">
            {[
              {
                question: "¿Qué tipos de equipos industriales fabrica Stevron?",
                answer: "Stevron se especializa en una amplia gama de equipos industriales, incluyendo maquinaria agrícola, herramientas eléctricas, equipos de jardinería, motores marinos, sistemas de limpieza, generadores y herramientas de construcción. Nuestra cartera de productos incluye más de 500 modelos diferentes diseñados para uso profesional y comercial."
              },
              {
                question: "¿Ofrecen garantía en sus productos?",
                answer: "Sí, todos los productos Stevron cuentan con una cobertura de garantía integral. Nuestra garantía estándar suele variar de 1 a 3 años, dependiendo de la categoría del producto. También ofrecemos opciones de garantía extendida y un servicio posventa completo a través de nuestra red de servicio global."
              },
              {
                question: "¿Cómo puedo convertirme en distribuidor de los productos Stevron?",
                answer: "Estamos buscando oportunidades de asociación con distribuidores calificados en todo el mundo. Para convertirse en distribuidor de Stevron, deberá cumplir con ciertos criterios, incluida la presencia en el mercado, la experiencia técnica y las capacidades de servicio. Comuníquese con nuestro equipo de asociaciones a través de nuestra página 'Conviértase en distribuidor' para conocer los requisitos detallados y el proceso de solicitud."
              },
              {
                question: "¿Ofrecen envíos y soporte internacional?",
                answer: "Sí, atendemos a clientes en más de 50 países en todo el mundo. Hemos establecido asociaciones de envío y redes de servicio globales para garantizar la entrega oportuna y el soporte local. Nuestro equipo internacional puede ayudar con la logística, el despacho de aduanas y proporcionar soporte técnico en varios idiomas."
              },
              {
                question: "¿Cómo encuentro el producto adecuado para mis necesidades específicas?",
                answer: "Nuestro equipo de expertos puede ayudarlo a elegir el equipo ideal para sus necesidades. Puede explorar nuestras categorías de productos en línea, utilizar nuestra herramienta de selección de productos o ponerse en contacto con nuestros consultores técnicos, quienes evaluarán sus necesidades y le recomendarán las soluciones más adecuadas. También ofrecemos demostraciones de productos y programas de prueba para clientes calificados."
              },
              {
                question: "¿Qué tipo de soporte técnico y formación ofrecen?",
                answer: "Brindamos soporte técnico integral, que incluye orientación para la instalación, capacitación operativa, talleres de mantenimiento y asistencia para la resolución de problemas. Nuestros técnicos certificados brindan capacitación en el lugar, tutoriales en video, manuales detallados y soporte telefónico las 24 horas, los 7 días de la semana para garantizar que su equipo funcione de manera óptima."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-[8px] border border-[#E5E5E5] bg-[#FFFFFF] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06)] transition-all hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="group flex w-full items-center justify-between px-6 py-[16px] text-left cursor-pointer"
                >
                  <span className="font-[Antenna] text-[18px] sm:text-[20px] leading-[120%] font-normal text-[#000000]">
                    {faq.question}
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#94A034] shadow-sm transition-transform group-hover:scale-110">
                    <ChevronDown
                      size={14}
                      className={`text-white transition-transform ${openFaqIndex === idx ? "rotate-180" : ""}`}
                      strokeWidth={3}
                    />
                  </div>
                </button>

                {openFaqIndex === idx && (
                  <div className="px-6 pb-4">
                    <p className="font-[Antenna] text-[16px] sm:text-[17px] leading-[150%] text-[#565656]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
