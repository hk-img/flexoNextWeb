"use client";
import React from "react";
import dynamic from "next/dynamic";

// load dynamically so SSR crash na ho Turbopack me
const EmblaAutoScrollCarousel = dynamic(
  () => import("../emblaCarousel/EmblaAutoScrollCarousel"),
  { ssr: false }
);

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
  ];

  const OPTIONS = { loop: true };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Trusted By Leading Companies in India
        </h2>

        {/* Carousel */}
        <EmblaAutoScrollCarousel slides={companies} options={OPTIONS} />
      </div>
    </section>
  );
};

export default TrustedCompanies;
