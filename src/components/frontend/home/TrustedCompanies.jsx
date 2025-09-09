"use client";
import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import Image from "next/image";

const TrustedCompanies = () => {
  const companies = [
    { src: "/images/trusted-logo1.webp", alt: "Amethyst Partners" },
    { src: "/images/trusted-logo2.webp", alt: "Arvind Mafatlal Group" },
    { src: "/images/trusted-logo3.webp", alt: "BeerBiceps" },
    { src: "/images/trusted-logo4.webp", alt: "Arnold Holdings Ltd." },
    { src: "/images/trusted-logo5.webp", alt: "Eicher" },
    { src: "/images/trusted-logo6.webp", alt: "InMobi" },
    { src: "/images/trusted-logo2.webp", alt: "Arvind Mafatlal Group" },
    { src: "/images/trusted-logo3.webp", alt: "BeerBiceps" },
    { src: "/images/trusted-logo4.webp", alt: "Arnold Holdings Ltd." },
    { src: "/images/trusted-logo5.webp", alt: "Eicher" },
    { src: "/images/trusted-logo6.webp", alt: "InMobi" },
    { src: "/images/trusted-logo1.webp", alt: "Amethyst Partners" },
    { src: "/images/trusted-logo2.webp", alt: "Arvind Mafatlal Group" },
    { src: "/images/trusted-logo3.webp", alt: "BeerBiceps" },
    { src: "/images/trusted-logo4.webp", alt: "Arnold Holdings Ltd." },
    { src: "/images/trusted-logo5.webp", alt: "Eicher" },
    { src: "/images/trusted-logo6.webp", alt: "InMobi" },
    { src: "/images/trusted-logo2.webp", alt: "Arvind Mafatlal Group" },
    { src: "/images/trusted-logo3.webp", alt: "BeerBiceps" },
    { src: "/images/trusted-logo4.webp", alt: "Arnold Holdings Ltd." },
    { src: "/images/trusted-logo5.webp", alt: "Eicher" },
    { src: "/images/trusted-logo6.webp", alt: "InMobi" },
  ];

  const OPTIONS = { loop: true };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-8">
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
