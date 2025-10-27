import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import Image from "next/image";

const TrustedCompaniesCta = ({setIsOpen,type}) => {
  const companies = [
    { src: "/images/trusted-logo7.webp", alt: "Amethyst partners" , title: "Amethyst partners" },
    { src: "/images/trusted-logo6.webp", alt: "Accord Synergy" , title: "Accord Synergy" },
    { src: "/images/trusted-logo13.webp", alt: "Arvind Mafatlal Group" , title: "Arvind Mafatlal Group" },
    { src: "/images/trusted-logo14.webp", alt: "Beer biceps" , title: "Beer biceps" },
    { src: "/images/trusted-logo2.webp", alt: "Arnold Holdings Ltd." ,title: "Arnold Holdings Ltd." },
    { src: "/images/trusted-logo20.webp", alt: "Eicher" , title: "Eicher" },
    { src: "/images/trusted-logo15.webp", alt: "InMobi" , title: "InMobi" },
    { src: "/images/trusted-logo21.webp", alt: "JTB" , title: "JTB" },
    { src: "/images/trusted-logo10.webp", alt: "Khaitan" , title: "Khaitan" },
    { src: "/images/trusted-logo3.webp", alt: "Livspace" , title: "Livspace" },
    { src: "/images/trusted-logo16.webp", alt: "Mirae Asset Financial Service" , title: "Mirae Asset Financial Service" },
    { src: "/images/trusted-logo4.webp", alt: "No broker" , title: "No broker" },
    { src: "/images/trusted-logo1.webp", alt: "Financial Aggregations" ,title: "Financial Aggregations" },
    { src: "/images/trusted-logo17.webp", alt: "PI logo" , title: "PI logo" },
    { src: "/images/trusted-logo22.webp", alt: "PRP" , title: "PRP" },
    { src: "/images/trusted-logo18.webp", alt: "Roche" , title: "Roche" },
    { src: "/images/trusted-logo5.webp", alt: "Scentido niche perfumery" , title: "Scentido niche perfumery" },
    { src: "/images/trusted-logo8.webp", alt: "Shop 101" , title: "Shop 101" },
    { src: "/images/trusted-logo19.webp", alt: "Sterimax" , title: "Sterimax" },
    { src: "/images/trusted-logo9.webp", alt: "Thyssenkrupp" , title: "Thyssenkrupp" },
    { src: "/images/trusted-logo11.webp", alt: "Tlc" , title: "Tlc" },
    { src: "/images/trusted-logo12.webp", alt: "Triniti" , title: "Triniti" },
  ];
  return (
    <section className="w-full relative ">
      
     <div className="relative lg:py-5.5 py-7 px-6 rounded-2xl items-center shadow-[0_4px_10px_#00000014] mx-auto overflow-hidden bg-[#f76900]">
  {/* Concentric Circles Background */}
  <div className="absolute inset-0 -z-0 overflow-hidden md:block hidden">
    <span className="absolute -right-[210px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f98b1b]"></span>
    <span className="absolute -right-[180px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#faa44d]"></span>
    <span className="absolute -right-[150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#fbbd80]"></span>
    <span className="absolute -right-[120px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#fcdab4]"></span>
    <span className="absolute -right-[90px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[#fffaf28c]"></span>
  </div>

  <div className="container mx-auto text-center px-[15px] relative z-10">
    <h2 className="sm:text-[32px] text-2xl font-medium text-center text-white leading-[1.2] pb-3">
      Trusted By Leading Companies in India
    </h2>

    <EmblaCarousel options={{ loop: true, autoscroll: true, align: "start" }}>
      {companies.map((s, i) => (
        <div
          key={i}
          className="embla__slide  flex-[0_0_auto] basis-auto sm:px-4 p-4 flex items-center justify-center"
        >
          <div className="shadow-[0_0_12px_#f76900] rounded-md">
            <Image
              src={s.src}
              alt={s.alt}
              title={s.title}
              width={120}
              height={50}
              className="object-contain transition md:w-[120px] w-[105px] rounded-md overflow-hidden"
            />
          </div>
        </div>
      ))}
    </EmblaCarousel>

    <p className="text-white lg:text-base text-sm lg:mb-8 my-4">
      Over <span className="font-semibold">250+ enterprises and startups</span> found their perfect office with Flexo.
    </p>

    {type != "shortterm" && (
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-center items-center w-fit mx-auto bg-white text-[12px]  text-[#f76900] py-3 px-7 rounded-2xl font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer"
      >
        Enquire Now
      </div>
    )}
  </div>
</div>

    </section>
    
  );
};

export default TrustedCompaniesCta;
