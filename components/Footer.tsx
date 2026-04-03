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
            Subscribe to Our Newsletter
          </h2>

          <div className="lg:col-span-2 relative w-full">
            <div className="flex h-[48px] w-full items-center bg-white rounded-full overflow-hidden p-1 shadow-lg border-2 border-white">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-6 outline-none text-[#A3A3A3] font-['Antenna',sans-serif] text-[13px]"
              />
              <button className="bg-[#94A034] h-full px-8 rounded-full text-white font-['Antenna',sans-serif] text-[14px] font-bold transition-opacity hover:opacity-90">
                Get Started
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
            <p className="font-['Antenna',sans-serif] text-[13px] text-gray-400 leading-relaxed font-light max-w-[400px]">
              Empowering professionals with premium tools and equipment. Building the future of industrial excellence through innovation and quality.
            </p>
            <p className="font-['Antenna',sans-serif] text-[11px] text-gray-500 mt-4">
              © 2026 Stevron. All rights reserved.
            </p>
          </div>

          {/* Links Section - Spans last 2 columns to match Newsletter Input above */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {/* Company Column */}
            <div className="flex flex-col gap-6 lg:items-start">
              <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
                Company
                <div className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#94A034]" />
              </h3>
              <ul className="flex flex-col gap-3 font-['Antenna',sans-serif] text-[14px] text-gray-400 font-light lg:text-left">
                <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Our Values</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">FAQ&apos;s</Link></li>
              </ul>
            </div>

            {/* Product Column */}
            <div className="flex flex-col gap-6 lg:items-start">
              <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
                Product
                <div className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#94A034]" />
              </h3>
              <ul className="flex flex-col gap-3 font-sans text-[14px] text-gray-400 font-light lg:text-left">
                <li><Link href="/dc-products" className="hover:text-white transition-colors">DC Tools</Link></li>
                <li><Link href="/ac-products" className="hover:text-white transition-colors">AC Tools</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Accessories</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Hand Tools</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="flex flex-col gap-6 lg:items-start">
              <div className="flex flex-col gap-6">
                <h3 className="font-orbitron text-[18px] font-bold tracking-wider relative inline-block w-fit">
                  Support
                  <div className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#94A034]" />
                </h3>
                <ul className="flex flex-col gap-3 font-sans text-[14px] text-gray-400 font-light lg:text-left mb-6">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="/warranty-registration" className="hover:text-white transition-colors">Warranty</Link></li>
                  <li><Link href="/become-a-dealer" className="hover:text-white transition-colors">Become a Dealer</Link></li>
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
