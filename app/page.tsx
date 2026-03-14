import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
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
      <section className="bg-white pt-12 pb-0">
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

          {/* Wide Horizontal Line: Span full container width, 3px height, #A7A7A7 color */}
          <div className="mt-8 mx-auto h-[2px] sm:h-[3px] w-full bg-[#A7A7A7]" />
        </div>
      </section>

      {/* About Us Section - Aligned to Navbar Width */}
      <section className="bg-white pt-0 pb-4 sm:pt-2 sm:pb-10">
        <div className="mx-auto w-full max-w-[1440px] px-10 sm:px-10 lg:px-16">
          <div className="relative mt-2 sm:mt-10 w-full aspect-[16/8] sm:aspect-[16/6.3] overflow-hidden">
            <Image
              src="/about.webp"
              alt="About STEVRON"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Bottom Divider */}
          <div className="mt-4 sm:mt-14 mx-auto h-[2px] sm:h-[3px] w-full bg-[#A7A7A7]" />
        </div>
      </section>

      {/* Explore Our Full Range Section - Figma: 1139×305px container, same alignment as navbar */}
      <section className="bg-white pt-10 pb-12">
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
              { title: "DC TOOLS", image: "/7.webp" },
              { title: "AC TOOLS", image: "/8.webp" },
              { title: "ACCESSORIES", image: "/5.webp" },
              { title: "HAND TOOLS", image: "/9.webp" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex h-[320px] xs:h-[350px] sm:h-[400px] lg:h-[380px] w-full flex-col overflow-hidden border border-[#A7A7A7] rounded-[12px] shadow-sm"
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
              </div>
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
      <section className="bg-[#FFFFFF] py-20 pb-32">
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
            <button className="absolute left-[-40px] top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center text-[#000000]/50 hover:text-[#000000] sm:flex lg:left-[-60px]">
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "75NM", subtitle: "Taladro Percutor Compacto", image: "/6.webp" },
                { name: "45NM", subtitle: "Taladro Percutor", image: "/6.webp" },
                { name: "400NM", subtitle: "Llave de Impacto", image: "/6.webp" },
                { name: "600NM", subtitle: "Llave de Impacto", image: "/6.webp" },
              ].map((product, idx) => (
                <div key={idx} className="group flex flex-col overflow-hidden rounded-[16px] border border-[#E5E5E5] shadow-sm transition-all hover:shadow-md">
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
                  <div className="flex flex-col bg-[#171717] px-5 py-4">
                    <h3 className="mb-1 font-orbitron text-[16px] font-bold text-[#FFFFFF]">{product.name}</h3>
                    <p className="mb-3 font-sans text-[12px] font-extralight text-[#A3A3A3] tracking-[0.03em]">{product.subtitle}</p>
                    {/* View Details Button */}
                    <button className="flex h-[28px] w-fit items-center gap-2 rounded-full bg-[#FFFFFF] pl-4 pr-3 text-[10px] font-bold text-[#000000] uppercase tracking-wider">
                      View Details
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#000000] text-[#FFFFFF]">
                        <ChevronRight size={10} strokeWidth={3} />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="absolute right-[-40px] top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center text-[#000000]/50 hover:text-[#000000] sm:flex lg:right-[-60px]">
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
