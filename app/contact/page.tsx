"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Hero Banner — matched style with Warranty Registration */}
      <section className="relative w-full aspect-[16/7] sm:aspect-[16/6] lg:aspect-[16/4.5] overflow-hidden">
        <Image
          src="/banner.webp"
          alt="Contact Us Banner"
          fill
          priority
          className="object-cover object-center"
        />

      </section>

      {/* Main Content Section */}
      <main className="flex-grow bg-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 flex flex-col items-center">

        {/* Contact Form Card */}
        <div className="w-full max-w-[764px] bg-black border border-[#FFFFFF]/10 rounded-[4px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

          {/* Form Header / Title */}
          <div className="p-5 sm:p-8 md:p-10">
            <div className="w-full bg-white rounded-[8px] flex items-center justify-center mb-6 sm:mb-8" style={{ minHeight: "46px", padding: "10px 12px" }}>
              <h2 className="font-orbitron text-black font-bold text-[10px] sm:text-[13px] md:text-[15px] tracking-[0.10em] sm:tracking-[0.15em] uppercase text-center leading-tight">
                GET IN TOUCH WITH US
              </h2>
            </div>

            <form className="flex flex-col gap-4 sm:gap-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-[34px] bg-white text-black text-[12px] px-3 rounded-[3px] outline-none font-inter placeholder:text-[#999]"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-[34px] bg-white text-black text-[12px] px-3 rounded-[3px] outline-none font-inter placeholder:text-[#999]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center w-[44px] h-[34px] bg-white text-black text-[12px] rounded-[3px] font-inter font-normal flex-shrink-0">
                      +91
                    </div>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="flex-1 h-[34px] bg-white text-black text-[12px] px-3 rounded-[3px] outline-none font-inter placeholder:text-[#999]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject of interest"
                    className="w-full h-[34px] bg-white text-black text-[12px] px-3 rounded-[3px] outline-none font-inter placeholder:text-[#999]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                  Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full bg-white text-black text-[12px] p-3 rounded-[3px] outline-none font-inter placeholder:text-[#999] resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full h-[46px] bg-[#94A034] text-white font-orbitron font-bold text-[13px] sm:text-[15px] tracking-[0.15em] sm:tracking-[0.2em] rounded-[4px] uppercase transition-all hover:bg-[#7d8a2c]"
              >
                SEND MESSAGE
              </button>

            </form>
          </div>
        </div>


        {/* Contact Info Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-[1000px] text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center bg-black/5 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 className="font-orbitron text-[14px] uppercase tracking-wider text-black/50">Phone</h3>
            <p className="font-inter text-[16px] text-black">+91 1234567890</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center bg-black/5 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <h3 className="font-orbitron text-[14px] uppercase tracking-wider text-black/50">Email</h3>
            <p className="font-inter text-[16px] text-black">sales@stevrontools.com</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center bg-black/5 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3 className="font-orbitron text-[14px] uppercase tracking-wider text-black/50">Location</h3>
            <p className="font-inter text-[16px] text-black leading-relaxed">Plot No. 756, 2nd Floor, Udyog Vihar Phase -5,<br />Gurugram, Haryana India</p>
          </div>
        </div>

      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
