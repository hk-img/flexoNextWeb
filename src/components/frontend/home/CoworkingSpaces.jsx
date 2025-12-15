import React from "react"
import EmblaCarousel from "../emblaCarousel/EmblaCarousel"
import ImageWithFallback from "@/components/ImageWithFallback"
import Link from "next/link"

const CoworkingSpaces = () => {
  const cities = [
    { name: "Bengaluru", image: "/images/Bengaluru.webp",link:"/in/coworking/bangalore" },
    { name: "Hyderabad", image: "/images/Hyderabad.webp",link:"/in/coworking/hyderabad" },
    { name: "Pune", image: "/images/Pune.webp",link:"/in/coworking/pune" },
    { name: "Delhi", image: "/images/Delhi.webp",link:"/in/coworking/delhi" },
    { name: "Gurgaon", image: "/images/Gurgaon.webp",link:"/in/coworking/gurgaon" },
    { name: "Noida", image: "/images/Noida.webp",link:"/in/coworking/noida" },
    { name: "Chennai", image: "/images/Chennai.webp",link:"/in/coworking/chennai" },
    { name: "Ahmedabad", image: "/images/Ahmedabad.webp",link:"/in/coworking/ahmedabad" },
    { name: "Jaipur", image: "/images/Jaipur.webp",link:"/in/coworking/jaipur" },
    { name: "Coimbatore", image: "/images/Coimbatore.webp",link:"/in/coworking/coimbatore" },
    { name: "Kochi", image: "/images/Kochi.webp",link:"/in/coworking/kochi" },
    { name: "Indore", image: "/images/Indore.webp",link:"/in/coworking/indore" },
    { name: "Lucknow", image: "/images/Lucknow.webp",link:"/in/coworking/lucknow" },
    { name: "Chandigarh", image: "/images/Chandigarh.webp",link:"/in/coworking/chandigarh" },
    { name: "Goa", image: "/images/Goa.webp",link:"/in/coworking/goa" },
    { name: "Surat", image: "/images/Surat.webp",link:"/in/coworking/surat" },
  ]

  return (
    <div className="container mx-auto text-center md:px-[10px] px-[15px]">
      <h2 className="sm:text-[32px] text-2xl font-medium text-center text-[#333]">
        Explore India's Premier Network of
        <span className="text-[#f76900]"> Coworking Spaces</span>
      </h2>

      <div className="md:mt-10 mt-6 flex flex-col md:flex-row gap-1">
        <div className="w-full md:w-1/3">
          <Link href="/in/coworking/mumbai" aria-label="cities coworking Mumbai">
            <div className="relative rounded-sm overflow-hidden h-full">
              <div className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b]" />
              <div className="h-full">
                <ImageWithFallback
                  width={379}
                  height={405}
                  src="/images/Mumbai.webp"
                  alt="mumbai coworking"
                  title="mumbai coworking"
                  className=" xl:h-[405px] sm:h-full w-full object-cover"
                  fallback="/images/default_image.webp"
                />
              </div>
              <div className="absolute bottom-0 left-0 text-start text-white font-semibold md:text-2xl text-xl pt-[50px] pr-[50px] pb-[5px] pl-[10px] bg-[linear-gradient(18deg,_#000000c4,_transparent,_transparent)] w-full rounded-md">
                <h3 className="leading-[1.6]">
                  Mumbai
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-2/3 md:[&_.emblaarrows]:-left-6 md:[&_.emblaarrows]:-right-5 [&_.emblaarrows]:-left-3 [&_.emblaarrows]:-right-3 [&_.emblaarrows_button]:w-10 [&_.emblaarrows_button]:h-10 [&_.emblaarrows_button_Svg]:size-[18px]">
          <EmblaCarousel options={{ loop: true,autoplay:false,showButton: true ,  align: "start"  }}>
            {Array.from({ length: Math.ceil(cities.length / 2) }).map(
              (_, colIdx) => (
                <div
                  key={colIdx}
                  className="embla__slide shrink-0 h-full 
                  basis-[50%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[33.3%] "
                >
                  <div className="grid grid-rows-2 gap-1 px-0.5 h-full">
                    {cities
                      .slice(colIdx * 2, colIdx * 2 + 2)
                      .map((city, idx) => (
                        <Link aria-label="cities coworking " key={idx} href={city.link}>
                          <div
                            className="relative rounded-sm overflow-hidden shadow-md h-full"
                          >
                            <div className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b]" />
                            <ImageWithFallback
                              width={248}
                              height={200}
                              src={city.image}
                              alt={city.name}
                              title={city.name}
                              className="w-full h-[160px] md:h-[180px] lg:h-[200px] object-cover"
                              fallback="/images/default_image.webp"
                            />
                            
                            <div className="absolute bottom-0 text-start left-0 text-white font-medium md:text-2xl text-xl pt-[50px] pr-[50px] pb-[5px] pl-[10px] rounded-md bg-[linear-gradient(18deg,_#000000c4,_transparent,_transparent)] w-full">
                              <h3 className="leading-[1.6]">
                                {city.name}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )
            )}
          </EmblaCarousel>
        </div>
      </div>
    </div>
  )
}

export default CoworkingSpaces
