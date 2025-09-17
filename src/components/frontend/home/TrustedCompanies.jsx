import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import Image from "next/image";

const TrustedCompanies = () => {
  const companies = [
    { src: "/images/trusted-logo1.webp", alt: "Financial Aggregations" ,title: "Financial Aggregations" },
    { src: "/images/trusted-logo2.webp", alt: "Arnold Holdings Ltd." ,title: "Arnold Holdings Ltd." },
    { src: "/images/trusted-logo3.webp", alt: "Livspace" , title: "Livspace" },
    { src: "/images/trusted-logo4.webp", alt: "No broker" , title: "No broker" },
    { src: "/images/trusted-logo5.webp", alt: "Scentido niche perfumery" , title: "Scentido niche perfumery" },
    { src: "/images/trusted-logo6.webp", alt: "Accord Synergy" , title: "Accord Synergy" },
    { src: "/images/trusted-logo7.webp", alt: "Amethyst partners" , title: "Amethyst partners" },
    { src: "/images/trusted-logo8.webp", alt: "Shop 101" , title: "Shop 101" },
    { src: "/images/trusted-logo9.webp", alt: "Thyssenkrupp" , title: "Thyssenkrupp" },
    { src: "/images/trusted-logo10.webp", alt: "Khaitan" , title: "Khaitan" },
    { src: "/images/trusted-logo11.webp", alt: "Tlc" , title: "Tlc" },
    { src: "/images/trusted-logo12.webp", alt: "Triniti" , title: "Triniti" },
    { src: "/images/trusted-logo13.webp", alt: "Arvind Mafatlal Group" , title: "Arvind Mafatlal Group" },
    { src: "/images/trusted-logo14.webp", alt: "Beer biceps" , title: "Beer biceps" },
    { src: "/images/trusted-logo15.webp", alt: "InMobi" , title: "InMobi" },
    { src: "/images/trusted-logo16.webp", alt: "Mirae Asset Financial Service" , title: "Mirae Asset Financial Service" },
    { src: "/images/trusted-logo17.webp", alt: "PI logo" , title: "PI logo" },
    { src: "/images/trusted-logo18.webp", alt: "Roche" , title: "Roche" },
    { src: "/images/trusted-logo19.webp", alt: "Sterimax" , title: "Sterimax" },
    { src: "/images/trusted-logo20.webp", alt: "Eicher" , title: "Eicher" },
    { src: "/images/trusted-logo21.webp", alt: "JTB" , title: "JTB" },
    { src: "/images/trusted-logo22.webp", alt: "PRP" , title: "PRP" },
  ];
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4 xl:px-[21px] lg:px-10 md:px-6">
        {/* Heading */}
        <h2 className="md:text-[32px] text-xl font-medium text-center text-[#333] mb-6">
          Trusted By Leading Companies in India
        </h2>

        {/* Carousel */}
        <EmblaCarousel options={{ loop: true, autoscroll: true}}>
          {companies.map((s, i) => (
            <div
              key={i}
              className="embla__slide flex-[0_0_auto] basis-auto px-6 flex items-center justify-center"
            >
              <Image
                src={s.src}
                alt={s.alt}
                title={s.title}
                width={120}
                height={50}
                className="object-contain transition w-[145px]"
              />
            </div>
          ))}
        </EmblaCarousel>
      </div>
    </section>
  );
};

export default TrustedCompanies;
