"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 flex flex-col items-center">

        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-[800px]">
          {/* Title Pill - "Ready to Experience Excellence?" */}
          <div className="bg-black text-white px-6 sm:px-8 py-2 rounded-[5px] shadow-lg">
            <span className="font-orbitron text-[14px] sm:text-[16px] font-bold tracking-wider uppercase">
              Ready to Experience Excellence?
            </span>
          </div>

          {/* Description */}
          <p className="font-Antenna text-[15px] sm:text-[16px] text-[#565656] leading-relaxed">
            Join thousands of satisfied customers who trust Stevron for their industrial equipment needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            {/* The single Explore Products button that links to Contact Us */}
            <Link href="/contact">
              <button className="bg-[#94A034] text-white font-orbitron cursor-pointer text-[13px] sm:text-[14px] font-bold px-8 sm:px-12 py-4 rounded-[5px] shadow-md transition-opacity hover:opacity-90 uppercase tracking-wider">
                Explore Products
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
