"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from "lucide-react";

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);

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
      {/* Hero Section - Tightened aspect ratio on mobile to reduce vertical gaps */}
      <section className="relative h-auto aspect-[16/6.1] xs:aspect-[16/6] sm:h-[500px] lg:h-[740px] w-full overflow-hidden bg-[#050505]">
        {/* Background Image: using object-contain on mobile to ensure 'Full Image' is visible */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home.webp"
            alt="STEVRON Hero"
            fill
            priority
            className="object-contain md:object-cover object-left"
          />
        </div>

        {/* Alignment Container - Restored to 1440px Standard */}
        <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col justify-center">
          <div className="w-full">
            {/* Overlay components can go here */}
          </div>
        </div>
      </section>

      {/* Action Buttons Section - Restored to 1440px Standard */}
      <section className="bg-white pt-4 sm:pt-6 pb-0">
        <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16">
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
        <div className="mx-auto w-full max-w-[1752px] px-10 sm:px-10 lg:px-16">
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
        <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col items-center">
          {/* Section Title Label - as per Figma */}
          <div className="mb-12 flex h-[35px] items-center justify-center rounded-[5px] bg-black px-8">
            <span className="font-orbitron text-[14px] font-normal tracking-wider text-white">
              Explore Our Full Range
            </span>
          </div>

          {/* Categories Grid - alignment same as navbar */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6">
            {[
              { title: "DC TOOLS", image: "/7.webp", href: "/dc-products" },
              { title: "AC TOOLS", image: "/8.webp", href: "/ac-products" },
              { title: "ACCESSORIES", image: "/5.webp", href: "#" },
              { title: "HAND TOOLS", image: "/9.webp", href: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex h-[320px] xs:h-[350px] sm:h-[400px] lg:h-[380px] w-full flex-col overflow-hidden border border-[#A7A7A7] rounded-[12px] shadow-sm transition-transform hover:scale-[1.02]"
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
      <section className="bg-[#EFEFEF] py-16">
        <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col items-center">
          {/* Logo + Section Title (navbar width) */}
          <div className="mb-10 flex flex-col items-center gap-4">
            <div className="flex h-[35px] items-center justify-center rounded-[5px] bg-[#000000] px-8">
              <span className="font-orbitron text-[14px] font-normal tracking-wider text-[#FFFFFF]">
                Our Core Values
              </span>
            </div>
          </div>

          {/* Four boxes - Figma: integrated white header strip + body #171717 */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="flex flex-col overflow-hidden rounded-[16px] shadow-lg"
              >
                {/* Header: Layered Design (Figma) */}
                <div className="flex flex-col">
                  {/* Black top strip (Increased height to shift white bar down) */}
                  <div className="h-[28px] w-full bg-[#171717]" />
                  {/* White title strip (Figma: 18px Bold) */}
                  <div className="flex h-[50px] items-center justify-center bg-[#FFFFFF]">
                    <span className="font-orbitron text-[18px] font-bold uppercase tracking-[0.05em] text-[#565656]">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Body: #171717 with icon image, line, subtitle, description */}
                <div className="relative flex flex-1 flex-col bg-[#171717] px-6 py-8">
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon Image centered (Figma: 34.31x40px) */}
                    <div className="mb-4 flex h-[40px] w-[34.31px] items-center justify-center">
                      <Image
                        src={item.iconPath}
                        alt=""
                        width={35}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Subtitle with side lines (Figma style) */}
                    <div className="mb-4 flex w-full items-center gap-3">
                      <div className="h-[1px] flex-1 bg-[#FFFFFF]" />
                      <p className="whitespace-nowrap font-orbitron text-[11px] font-bold text-[#FFFFFF]">
                        {item.subtitle}
                      </p>
                      <div className="h-[1px] flex-1 bg-[#FFFFFF]" />
                    </div>

                    {/* Description left-aligned (Figma: 12px, Weight 200, White, 3% tracking) */}
                    <p className="text-left font-sans text-[12px] font-extralight tracking-[0.03em] leading-relaxed text-[#FFFFFF]">
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
        <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col items-center">
          {/* Section Label */}
          <div className="mb-12 flex flex-col items-center gap-4">
            <div className="flex h-[35px] items-center justify-center rounded-[5px] bg-[#000000] px-8">
              <span className="font-orbitron text-[14px] font-normal tracking-wider text-[#FFFFFF]">
                Our Professional Tools
              </span>
            </div>
          </div>

          {/* Product Grid with Navigation Arrows */}
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
                { name: "75NM", subtitle: "Taladro Percutor Compacto", image: "/6.webp" },
                { name: "45NM", subtitle: "Taladro Percutor", image: "/6.webp" },
                { name: "400NM", subtitle: "Llave de Impacto", image: "/6.webp" },
                { name: "600NM", subtitle: "Llave de Impacto", image: "/6.webp" },
                { name: "800NM", subtitle: "Taladro Inalámbrico", image: "/6.webp" },
                { name: "1000NM", subtitle: "Taladro Profesional", image: "/6.webp" },
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
                  <div className="flex flex-col flex-1 bg-[#171717] px-5 py-4">
                    <h3 className="mb-1 font-orbitron text-[16px] font-bold text-[#FFFFFF]">{product.name}</h3>
                    <p className="mb-3 font-sans text-[12px] font-extralight text-[#A3A3A3] tracking-[0.03em]">{product.subtitle}</p>
                    {/* View Details Button */}
                    <button className="mt-auto flex h-[28px] w-fit items-center gap-2 rounded-full bg-[#FFFFFF] pl-4 pr-1 text-[13px] font-medium text-[#565656] font-orbitron">
                      View Details
                      <ArrowRight size={16} strokeWidth={2} className="text-[#565656]" />
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

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col items-center">
          {/* Top Label - Figma: 373x38px, White BG, Black Text */}
          <div className="mb-12 flex h-[38px] w-full max-w-[373px] items-center justify-center rounded-[5px] bg-white shadow-lg">
            <span className="font-orbitron text-[12px] sm:text-[14px] font-bold tracking-widest text-black">
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
                color: "#94A034", // Olive/Green
              },
              {
                name: "STRONWELL",
                subtitle: "Mid Duty for Regular Use",
                website: "www.stronwell.com",
                color: "#FF6E00", // Orange
              },
              {
                name: "MECHNOVA",
                subtitle: "Light Duty for Home Use",
                website: "www.mechnovamachines.com",
                color: "#00A3FF", // Blue
              }
            ].map((brand, idx) => (
              <div
                key={idx}
                className="flex min-h-[190px] w-full flex-col items-center justify-center rounded-[12px] bg-white p-6 lg:p-8 shadow-[1px_2px_10.6px_1px_rgba(0,0,0,0.15)] border border-black/5 transition-all hover:scale-[1.03] hover:shadow-xl"
              >
                {/* Brand Logo/Text - Figma: Antenna 36px Black/Bold */}
                <h2
                  className="mb-1 font-orbitron text-[28px] lg:text-[34px] xl:text-[36px] font-black tracking-tighter w-full text-center"
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
                <div className="mt-auto flex h-[32px] lg:h-[36px] w-full max-w-[280px] items-center justify-center rounded-full bg-black px-4">
                  <span
                    className="font-sans text-[12px] lg:text-[14px] font-extralight tracking-tight whitespace-nowrap"
                    style={{ color: brand.color }}
                  >
                    {brand.website}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col items-center">
          {/* Section Label */}
          <div className="mb-4 flex h-[35px] items-center justify-center rounded-[5px] bg-[#000000] px-8 shadow-sm">
            <span className="font-orbitron text-[14px] font-normal tracking-wider text-[#FFFFFF]">
              Frequently Asked Questions
            </span>
          </div>
          
          {/* Subtitle */}
          <p className="mb-6 max-w-[750px] text-center font-sans text-[14px] leading-relaxed text-[#565656]">
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
                className="flex items-center justify-between rounded-[8px] border border-[#E5E5E5] bg-[#FFFFFF] px-6 py-[16px] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06)] transition-all hover:shadow-md cursor-pointer group"
              >
                <span className="font-sans text-[15px] font-medium text-[#1A1A1A]">
                  {question}
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#94A034] shadow-sm transition-transform group-hover:scale-110">
                  <ChevronDown size={14} className="text-white" strokeWidth={3} />
                </div>
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

function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col items-center">
        {/* Top Divider */}
        <div className="w-full h-[1px] bg-[#E5E5E5] mb-16" />

        <div className="flex flex-col items-center gap-8 text-center max-w-[800px]">
          {/* Title Pill */}
          <div className="bg-black text-white px-8 py-2 rounded-[5px] shadow-lg">
            <span className="font-orbitron text-[14px] sm:text-[16px] font-bold tracking-wider uppercase">
              Ready to Experience Excellence?
            </span>
          </div>

          {/* Description */}
          <p className="font-sans text-[16px] text-[#565656] leading-relaxed">
            Join thousands of satisfied customers who trust Stevron for their industrial equipment needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button className="bg-[#94A034] text-white font-orbitron text-[14px] px-10 py-3 rounded-[5px] shadow-md transition-opacity hover:opacity-90">
              Explore Products
            </button>
            <button className="bg-[#94A034] text-white font-orbitron text-[14px] px-10 py-3 rounded-[5px] shadow-md transition-opacity hover:opacity-90">
              Become Distributor
            </button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-[1px] bg-[#E5E5E5] mt-16" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16 flex flex-col">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
          <h2 className="font-orbitron text-[20px] font-normal leading-[33px] text-white">
            Subscribe to Our Newsletter
          </h2>

          <div className="relative w-full max-w-[562px]">
            <div className="flex h-[53.46px] w-full items-center bg-white rounded-full overflow-hidden p-1 shadow-lg">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-6 outline-none text-[#A3A3A3] font-sans text-[14px]"
              />
              <button className="bg-[#94A034] h-full px-8 rounded-full text-white font-orbitron text-[14px] font-bold transition-opacity hover:opacity-90">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-[1px] bg-white/20 mb-20" />

        {/* Brand and Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo Column */}
          <div className="flex flex-col gap-6">
            <Image
              src="/Logo.webp"
              alt="STEVRON"
              width={220}
              height={48}
              className="h-auto w-[180px]"
            />
            <p className="font-sans text-[14px] text-gray-400 leading-relaxed max-w-[300px]">
              Empowering professionals with premium tools and equipment. Building the future of industrial excellence through innovation and quality.
            </p>
            <p className="font-sans text-[12px] text-gray-500 mt-4 outline-none">
              © 2026 Stevron. All rights reserved.
            </p>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
              Company
              <div className="absolute bottom-[-10px] left-0 w-1/2 h-[2px] bg-[#94A034]" />
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-[14px] text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Our Values</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">FAQ&apos;s</Link></li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
              Product
              <div className="absolute bottom-[-10px] left-0 w-1/2 h-[2px] bg-[#94A034]" />
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-[14px] text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">DC Tools</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">AC Tools</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Hand Tools</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-6 h-full">
            <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
              Support
              <div className="absolute bottom-[-10px] left-0 w-1/2 h-[2px] bg-[#94A034]" />
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-[14px] text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Warranty</Link></li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-auto pt-10 justify-start">
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-sm">
                <Image src="/msg.png" alt="Message" width={20} height={20} className="object-contain" />
              </Link>
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-sm">
                <Image src="/insta.png" alt="Instagram" width={20} height={20} className="object-contain" />
              </Link>
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-sm">
                <Image src="/face.png" alt="Facebook" width={20} height={20} className="object-contain" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
