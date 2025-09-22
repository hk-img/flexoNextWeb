import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import Image from "next/image";

const brandLogos = [
  { src: "/images/brand-logo-1.webp", name: "WeWork" },
  { src: "/images/brand-logo-2.webp", name: "Awfis"},
  { src: "/images/brand-logo-3.webp", name: "Innov8"},
  { src: "/images/brand-logo-4.webp", name: "Regus"},
  { src: "/images/brand-logo-5.webp", name: "Smartworks"},
  { src: "/images/brand-logo-6.webp", name: "91springboard"},
  { src: "/images/brand-logo-7.webp", name: "The Hive"},
  { src: "/images/brand-logo-8.webp", name: "CoWrks"},
  { src: "/images/brand-logo-9.webp", name: "Workafella"},
  { src: "/images/brand-logo-10.webp", name: "iKeva"},
  { src: "/images/brand-logo-11.webp", name: "MyHQ"},
  { src: "/images/brand-logo-12.webp", name: "IndiQube"},
];

const CoworkingBrands = () => {
  // chunk logos into 2 per grid cell
  const chunkedLogos = [];
  for (let i = 0; i < brandLogos.length; i += 2) {
    chunkedLogos.push(brandLogos.slice(i, i + 2));
  }

  return (
    <div className="container mx-auto  sm:pt-[76px] pt-16">
      <h2 className="sm:text-[32px] text-2xl px-1 leading-[1.2] font-medium text-center text-[#333] md:mb-10 mb-8">
        Top Coworking Brands, All in One Place
      </h2>
      <div className="md:[&_.emblaarrows]:-left-10 md:[&_.emblaarrows]:-right-10 [&_.emblaarrows]:-left-6 [&_.emblaarrows]:-right-6 [&_.emblaarrows_button]:w-10 [&_.emblaarrows_button]:h-10 [&_.emblaarrows_button_Svg]:size-[18px] px-[30px]">
        <EmblaCarousel
          options={{ loop: true, autoplay: false, showButton: true, align: "start" }}
        >
          {chunkedLogos.map((logos, idx) => (
            <div
              key={idx}
              className="embla__slide shrink-0 md:px-[15px] sm:px-[12px] px-[10px] basis-[50%] sm:basis-[50%] md:basis-[50%] lg:basis-[25%] xl:basis-[25%]"
            >
              <div className="grid grid-rows-2 gap-2">
                {logos.map((logo, index) => (
                  <a
                    href="#"
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={logo.name}
                  >
                    <div
                      className="group relative rounded-md overflow-hidden border-b-3 border-[#ffdbc0] 
                      md:py-6 md:px-12 py-4 px-6 bg-[#fafafa] cursor-pointer flex items-center justify-center 
                      md:hover:shadow-[5px_5px_20px_#0000001a] transition-all duration-500 ease-in-out"
                    >
                      <Image
                        width={185}
                        height={40}
                        src={logo.src}
                        alt={`${logo.name} Logo`}
                        title={logo.name}
                        className="h-10 object-contain transition-transform duration-500 ease-in-out md:group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </EmblaCarousel>
      </div>
    </div>
  );
};

export default CoworkingBrands;
