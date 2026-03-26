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
  const heroImages = ["/banner.webp", "/banner1.webp", "/banner.webp", "/banner1.webp"];

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
      <section className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] xl:h-[850px] overflow-hidden bg-[#050505]">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroIndex ? "opacity-100 z-10" : "opacity-0 z-0"
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
              className={`h-1.5 w-8 sm:h-2 sm:w-12 rounded-full transition-all duration-300 ${
                index === currentHeroIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"
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
              Explore Products
            </button>
            <button className="flex h-[45px] sm:h-[38px] px-8 items-center justify-center rounded-[5px] bg-[#000000] font-orbitron text-[14px] font-normal text-white transition-opacity hover:opacity-90 w-full sm:w-auto">
              Become Distributor
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
          <div className="mb-12 flex h-[35px] items-center justify-center rounded-[5px] bg-black px-8">
            <span className="font-orbitron text-[14px] font-normal tracking-wider text-white">
              Explore Our Full Range
            </span>
          </div>

          {/* Categories Grid - alignment same as navbar, increased gapping as per user request */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-20">
            {[
              { title: "DC TOOLS", image: "/7.webp", href: "/dc-products" },
              { title: "AC TOOLS", image: "/8.webp", href: "/ac-products" },
              { title: "ACCESSORIES", image: "/5.webp", href: "#" },
              { title: "HAND TOOLS", image: "/9.webp", href: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex h-[360px] w-full flex-col overflow-hidden border border-[#A7A7A7] rounded-[12px] shadow-[5px_5px_10px_0px_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.02]"
              >
                {/* Header Box - Restored: White bg, Black text */}
                <div className="flex h-[42px] w-full items-center justify-center bg-white border-b border-[#A7A7A7]">
                  <span className="font-orbitron text-[14px] font-bold tracking-wider text-black">
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
            <div className="flex h-[35px] items-center justify-center rounded-[5px] bg-[#000000] px-8">
              <span className="font-orbitron text-[14px] font-normal tracking-wider text-[#FFFFFF]">
                Our Core Values
              </span>
            </div>
          </div>

          {/* Four boxes - Figma: integrated white header strip + body #171717 */}
          <div className="grid w-full justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "INNOVATION",
                subtitle: "Engineering the Future",
                description: "At STEVRON, innovation drives everything we create. We combine advanced engineering with practical design to develop tools that deliver power, precision, and reliability. By continuously improving our technology, we ensure every product meets the evolving needs of professionals.",
                iconPath: "/innovation.png"
              },
              {
                title: "QUALITY",
                subtitle: "Built to Last",
                description: "From carefully selected materials to precision manufacturing, every detail is engineered for durability and consistent performance. Through strict quality control and testing, we ensure tools professionals can rely on every day.",
                iconPath: "/Group.png"
              },
              {
                title: "RELIABILITY",
                subtitle: "Performance You Can Trust",
                description: "Delivering tools that perform consistently in real working conditions. Every product is designed with durable components and tested for dependable operation. Our focus on precision engineering ensures professionals can rely on STEVRON tools day after day.",
                iconPath: "/Group (1).png"
              },
              {
                title: "SUSTAINABILITY",
                subtitle: "Building a Greener Future",
                description: "Developing products with environmental responsibility in mind. Through smarter design, efficient production, and durable performance, we work towards reducing our footprint while delivering reliable solutions for the future.",
                iconPath: "/innovation.png"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex h-[305px] w-full max-w-[242px] flex-col overflow-hidden rounded-[12px] shadow-lg"
              >
                {/* Header: Layered Design (Figma) */}
                <div className="flex flex-col">
                  {/* Black top strip (Increased height to shift white bar down) */}
                  <div className="h-[18px] w-full bg-[#171717]" />
                  {/* White title strip (Figma: 18px Bold) */}
                  <div className="flex h-[28px] items-center justify-center bg-[#FFFFFF]">
                    <span className="font-orbitron text-[13px] font-bold uppercase tracking-[0.02em] text-[#565656]">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Body: #171717 with icon image, line, subtitle, description */}
                <div className="relative flex flex-1 flex-col bg-[#171717] px-3 py-3">
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon Image centered (Figma: 34.31x40px) */}
                    <div className="mb-2 flex h-[30px] w-[26px] items-center justify-center">
                      <Image
                        src={item.iconPath}
                        alt=""
                        width={26}
                        height={30}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Subtitle with side lines (Figma style) */}
                    <div className="mb-2 flex w-full items-center gap-2">
                      <div className="h-px flex-1 bg-[#FFFFFF]" />
                      <p className="whitespace-nowrap font-['Antenna',sans-serif] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#FFFFFF]">
                        {item.subtitle}
                      </p>
                      <div className="h-px flex-1 bg-[#FFFFFF]" />
                    </div>

                    {/* Description left-aligned (Figma: 12px, Weight 200, White) */}
                    <p className="text-left font-inter text-[12px] font-extralight leading-[1.6] tracking-[0.03em] text-[#FFFFFF]">
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
            <div className="flex h-[35px] items-center justify-center rounded-[5px] bg-[#000000] px-8">
              <span className="font-orbitron text-[14px] font-normal tracking-wider text-[#FFFFFF]">
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
                { name: "BNID452B2", subtitle: "45Nm - TALADRO PERCUTOR", image: "/dc/BNID452B2.webp" },
                { name: "BNCID75K", subtitle: "75Nm - TALADRO PERCUTOR COMPACTO", image: "/dc/BNCID75K.webp" },
                { name: "BNIW4002B2", subtitle: "350 N.M - LLAVE DE IMPACTO", image: "/dc/BNIW4002B2.webp" },
                { name: "BNCAG8504B1", subtitle: "8500 - 10000 RPM - AMOLADORA ANGULAR", image: "/dc/BNCAG8504B1.webp" },
                { name: "BNCRH20J4B", subtitle: "20V - ROTOMARTILLO INALÁMBRICO", image: "/dc/BNCRH20J4B.webp" },
                { name: "BNIMD750", subtitle: "950W - TALADRO PERCUTOR", image: "/ac/BNIMD750.webp" },
                { name: "BNIMD850", subtitle: "2200W - TALADRO PERCUTOR", image: "/ac/BNIMD850.webp" },
                { name: "BNIMD1100", subtitle: "2400W - TALADRO PERCUTOR", image: "/ac/BNIMD1100.webp" },
              ].map((product, idx) => (
                <div key={idx} className="group flex flex-col overflow-hidden rounded-[16px] border border-[#E5E5E5] shadow-sm transition-all hover:shadow-md min-w-[280px] sm:min-w-[calc(50%-8px)] lg:min-w-[calc(25%-12px)] snap-start">
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
                    <h3 className="mb-1 font-sans text-[14px] font-bold text-[#FFFFFF] tracking-wide uppercase">{product.name}</h3>
                    <p className="mb-3 font-sans text-[12px] font-extralight text-[#A3A3A3] tracking-[0.03em] leading-tight">{product.subtitle}</p>
                    {/* View Details Button */}
                    <button className="mt-auto flex h-[28px] w-fit items-center gap-2 rounded-full bg-[#FFFFFF] pl-4 pr-1 text-[12px] font-bold text-[#171717] font-sans transition-all hover:bg-gray-100 uppercase">
                      View Details
                      <ArrowRight size={16} strokeWidth={2} className="text-[#171717]" />
                    </button>
                  </div>
                </div>
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
          <div className="mb-12 flex h-[38px] w-full max-w-[443px] items-center justify-center rounded-[5px] bg-white shadow-lg border border-black/10">
            <span className="font-orbitron  text-[14px] font-bold tracking-widest text-black ">
              POWERING AGRICULTURE & FORESTRY
            </span>
          </div>

          {/* Cards Grid - 3 cards, full width to align with other sections */}
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "BONHOEFFER",
                subtitle: "Heavy Duty for Professional Use",
                website: "www.bonhoeffermachines.com",
                url: "https://bonhoeffermachines.com",
                color: "#94A034", // Olive/Green
              },
              {
                name: "STRONWELL",
                subtitle: "Mid Duty for Regular Use",
                website: "www.stronwell.com",
                url: "https://www.stronwell.com",
                color: "#FF6E00", // Orange
              },
              {
                name: "MECHNOVA",
                subtitle: "Light Duty for Home Use",
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
                className="flex min-h-[190px] w-full flex-col items-center justify-center rounded-[12px] bg-white p-6 lg:p-8 shadow-[1px_2px_10.6px_1px_rgba(0,0,0,0.15)] border border-black/5 transition-all hover:scale-[1.03] hover:shadow-xl block"
              >
                {/* Brand Logo/Text - Figma: Eurostile Extended 32px Bold */}
                <h2
                  className="mb-1 font-['Eurostile_Extended',_sans-serif] text-[28px] lg:text-[32px] xl:text-[34px] font-bold tracking-tighter w-full text-center"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </h2>

                {/* Subtitle with Side Lines */}
                <div className="mb-5 flex w-full items-center gap-2 px-2">
                  <div className="h-[1px] flex-1 bg-[#A7A7A7]" />
                  <span className="whitespace-nowrap font-sans text-[9px] lg:text-[10px] xl:text-[11px] font-bold text-[#565656]">
                    {brand.subtitle}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#A7A7A7]" />
                </div>

                {/* Website Link Pill */}
                <div className="mt-auto flex h-[32px] lg:h-[36px] w-full max-w-[280px] items-center justify-center rounded-full bg-black px-4 transition-colors hover:bg-gray-800">
                  <span
                    className="font-sans text-[12px] lg:text-[14px] font-extralight tracking-tight whitespace-nowrap"
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
          <div className="mb-4 flex h-[35px] items-center justify-center rounded-[5px] bg-[#000000] px-8 shadow-sm">
            <span className="font-orbitron text-[14px] font-normal tracking-wider text-[#FFFFFF]">
              Frequently Asked Questions
            </span>
          </div>

          {/* Subtitle */}
          <p className="mb-6 max-w-[631px] text-center font-[Antenna] text-[16px] leading-[100%] font-extralight text-[#565656]">
            Find answers to common questions about our products, services, and partnerships.<br className="hidden sm:block" />
            Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>

          {/* FAQ list */}
          <div className="flex w-full max-w-[920px] flex-col gap-2.5">
            {[
              "What types of industrial equipment does Stevron manufacture?",
              "Do you offer warranty on your products?",
              "How can I become a distributor for Stevron products?",
              "Do you provide international shipping and support?",
              "How do I find the right product for my specific needs?",
              "What kind of technical support and training do you provide?",
            ].map((question, idx) => (
              <div
                key={idx}
                className="rounded-[8px] border border-[#E5E5E5] bg-[#FFFFFF] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06)] transition-all hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="group flex w-full items-center justify-between px-6 py-[16px] text-left cursor-pointer"
                >
                  <span className="font-[Antenna] text-[16px] leading-[100%] font-normal text-[#000000]">
                    {question}
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
                    <p className="font-[Antenna] text-[14px] leading-[140%] text-[#565656]">
                      Stevron manufactures AC and DC power tools, hand tools, and heavy-duty industrial equipment.
                      These products are designed for durability, efficiency, and reliable performance in demanding environments.
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
