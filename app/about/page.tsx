"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Zap, Target, TrendingUp, Network, Award, Shield } from "lucide-react";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const principles = [
    {
      title: "PERFORMANCE",
      description: "Tools that deliver real output and excel in demanding professional environments.",
      icon: <Zap className="w-8 h-8 text-[#94A034]" />,
    },
    {
      title: "SAFETY",
      description: "Engineering that protects the user without compromising on power or efficiency.",
      icon: <ShieldCheck className="w-8 h-8 text-[#94A034]" />,
    },
    {
      title: "SIMPLICITY",
      description: "Stevron stays intuitive to use, removing unnecessary complexity from professional work.",
      icon: <Target className="w-8 h-8 text-[#94A034]" />,
    },
    {
      title: "MOMENTUM",
      description: "Designed to keep work moving forward, ensuring maximum uptime and project flow.",
      icon: <TrendingUp className="w-8 h-8 text-[#94A034]" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Deep Black Premium Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#94A03420_0%,_transparent_70%)] z-10" />
          <div className="absolute inset-0 opacity-[0.05] z-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
        </div>

        <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <div className="inline-block px-8 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 animate-fade-in">
            <span className="font-orbitron text-[12px] sm:text-[14px] tracking-[0.5em] font-medium text-[#94A034]">STEVRON INDUSTRIAL</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            Power. <span className="text-[#94A034] drop-shadow-[0_0_25px_rgba(148,160,52,0.3)]">Simplified.</span>
          </h1>
          <p className="max-w-3xl mx-auto font-inter text-lg md:text-2xl text-gray-400 font-extralight leading-relaxed">
            Revolutionizing professional tools through <span className="text-white font-light">clean engineering</span> and <span className="text-white font-light">unmatched reliability.</span>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-[#94A034] animate-bounce-slow" />
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f8f8] -z-10 skew-x-[-15deg] translate-x-1/4" />

        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/about.webp" // Reusing another known asset
                alt="Stevron Craftsmanship"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-black border-l-4 border-[#94A034] pl-6">
                Created with a Simple Idea
              </h2>
              <div className="space-y-6 font-inter text-lg text-gray-600 leading-relaxed">
                <p>
                  Stevron was created with a simple idea: professional tools should be powerful, reliable, and easy to work with. No unnecessary complexity. No inflated pricing. Just tools designed for real work.
                </p>
                <p>
                  Every Stevron product is built around four principles: performance, safety, simplicity, and momentum. Tools that deliver real output, protect the user, stay intuitive to use, and keep work moving forward.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex -space-x-3">
                  {[
                    { src: "/23.png", alt: "Professional 1" },
                    { src: "/24.png", alt: "Professional 2" },
                    { src: "/25.png", alt: "Professional 3" },
                    { src: "/27.png", alt: "Professional 4" },
                  ].map((img, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-sm">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500">Trusted by 10,000+ Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-24 bg-[#050505] relative">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
              Our Core Principles
            </h2>
            <div className="w-24 h-1.5 bg-[#94A034] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group hover:-translate-y-2"
              >
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-xl group-hover:bg-[#94A034]/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-4 tracking-wider">{p.title}</h3>
                <p className="font-inter text-gray-400 font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      </section>

      {/* Network & Presence */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-[#94A034]">
                <Network className="w-6 h-6" />
                <span className="font-orbitron text-sm font-bold tracking-widest uppercase">Global Network</span>
              </div>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-black uppercase">
                More Than a Product Range
              </h2>
              <div className="space-y-6 font-inter text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Stevron is more than a product range. It is a growing network of distributors, professionals, and partners building something strong together. We don’t aim to be everywhere. We focus on building meaningful presence with the right partners in each market.
                </p>
                <p>
                  Our approach is straightforward: create tools professionals trust, partners build business with , and markets recognize for consistency. Step by step. Market by market. Building a brand known for dependable performance.
                </p>
                <p>
                  Stevron is built for movement. For professionals who want tools that simply work. For partners who want a brand that grows with them. And for markets ready for something stronger, cleaner, and more focused.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="font-orbitron text-3xl font-bold text-black border-b-2 border-[#94A034] w-fit mb-2">22+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Countries</p>
                </div>
                <div>
                  <h4 className="font-orbitron text-3xl font-bold text-black border-b-2 border-[#94A034] w-fit mb-2">5743+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Distributors</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full">
              {/* Abstract Design Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full -z-10 animate-pulse-slow" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#94A034] rounded-full opacity-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#94A034] rounded-full opacity-20 blur-3xl" />

              <div className="relative h-full w-full bg-black rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
                {/* Stylized Logo centered in a premium box */}
                <div className="relative flex flex-col items-center">
                  <div className="font-orbitron text-6xl md:text-8xl font-black text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-[0.2em] whitespace-nowrap">
                    STEVRON
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Slogan Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 text-center">
          <p className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black text-black/5 uppercase tracking-tighter mb-[-40px] select-none">
            SIMPLIFIED
          </p>
          <h3 className="font-orbitron text-4xl md:text-5xl font-bold text-black relative z-10">
            Power. <span className="text-[#94A034]">Simplified.</span>
          </h3>
        </div>
      </section>

      {/* CTA & Footer */}
      <CTASection />
      <Footer />

      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1.05); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 20px rgba(148, 160, 52, 0.4));
        }
      `}</style>
    </div>
  );
}
