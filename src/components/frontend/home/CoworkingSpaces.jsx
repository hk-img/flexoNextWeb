import React from "react"
import EmblaCarousel from "../emblaCarousel/EmblaCarousel"
import Image from "next/image"

const CoworkingSpaces = () => {
  const cities = [
    { name: "Bengaluru", image: "/images/Bengaluru.webp" },
    { name: "Hyderabad", image: "/images/hyderabad.webp" },
    { name: "Pune", image: "/images/pune.webp" },
    { name: "Delhi", image: "/images/delhi.webp" },
    { name: "Gurgaon", image: "/images/gurgaon.webp" },
    { name: "Noida", image: "/images/noida.webp" },
    { name: "Chennai", image: "/images/chennai.webp" },
    { name: "Ahmedabad", image: "/images/ahmedabad.webp" },
    { name: "Jaipur", image: "/images/Jaipur.webp" },
    { name: "Coimbatore", image: "/images/Coimbatore.webp" },
    { name: "Kochi", image: "/images/Kochi.webp" },
    { name: "Indore", image: "/images/Indore.webp" },
    { name: "Lucknow", image: "/images/Lucknow.webp" },
    { name: "Chandigarh", image: "/images/chandigarh.webp" },
    { name: "Goa", image: "/images/Goa.webp" },
    { name: "Surat", image: "/images/Surat.webp" },
  ]

  return (
    <div className="container mx-auto text-center md:px-0 px-[15px]">
      <h2 className="sm:text-[32px] text-2xl font-medium text-center text-[#333]">
        Explore India's Premier Network of
        <span className="text-[#f76900]"> Coworking Spaces</span>
      </h2>

      <div className="md:mt-10 mt-6 flex flex-col md:flex-row gap-1">
        <div className="w-full md:w-1/3">
          <a href="#">
            <div className="relative rounded-sm overflow-hidden h-full">
              <div className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b]" />
              <div className="h-full">
                <Image
                  width={405}
                  height={420}
                  src="/images/mumbai.webp"
                  alt="mumbai coworking"
                  title="mumbai coworking"
                  className=" xl:h-[405px] sm:h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 text-start text-white font-semibold md:text-2xl text-xl pt-[50px] pr-[50px] pb-[5px] pl-[10px] bg-[linear-gradient(18deg,_#000000c4,_transparent,_transparent)] w-full rounded-md">
                <h3 className="leading-[1.6]">
                  Mumbai
                </h3>
              </div>
            </div>
          </a>
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
                        <a  key={idx} href="#">
                          <div
                            className="relative rounded-sm overflow-hidden shadow-md h-full"
                          >
                            <div className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b]" />
                            <Image
                              width={200}
                              height={200}
                              src={city.image}
                              alt={city.name}
                              title={city.name}
                              className="w-full h-[160px] md:h-[180px] lg:h-[200px] object-cover"
                              loading="lazy"
                            />
                            
                            <div className="absolute bottom-0 text-start left-0 text-white font-medium md:text-2xl text-xl pt-[50px] pr-[50px] pb-[5px] pl-[10px] rounded-md bg-[linear-gradient(18deg,_#000000c4,_transparent,_transparent)] w-full">
                              <h3 className="leading-[1.6]">
                                {city.name}
                              </h3>
                            </div>
                          </div>
                        </a>
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
