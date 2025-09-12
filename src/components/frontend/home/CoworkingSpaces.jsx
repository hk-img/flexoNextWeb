import React from "react"
import EmblaCarousel from "../emblaCarousel/EmblaCarousel"
import Image from "next/image"

const CoworkingSpaces = () => {
  const cities = [
    { name: "Bengaluru", image: "/images/Bengaluru.webp" },
    { name: "Pune", image: "/images/pune.webp" },
    { name: "Gurgaon", image: "/images/gurgaon.webp" },
    { name: "Chennai", image: "/images/chennai.webp" },
    { name: "Delhi", image: "/images/delhi.webp" },
    { name: "Noida", image: "/images/noida.webp" },
    { name: "Ahmedabad", image: "/images/ahmedabad.webp" },
    { name: "Hyderabad", image: "/images/hyderabad.webp" },
    { name: "Goa", image: "/images/Goa.webp" },
    { name: "Lucknow", image: "/images/Lucknow.webp" },
    { name: "Chandigarh", image: "/images/chandigarh.webp" },
    { name: "Surat", image: "/images/Surat.webp" },
    { name: "Jaipur", image: "/images/Jaipur.webp" },
    { name: "Coimbatore", image: "/images/Coimbatore.webp" },
    { name: "Kochi", image: "/images/Kochi.webp" },
    { name: "Indore", image: "/images/Indore.webp" },
  ]

  return (
    <div className="max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-6 mx-auto">
      <h2 className="md:text-[32px] text-xl font-medium text-center text-[#333]">
        Explore India&apos;s Premier Network of{" "}
        <span className="text-[#f76900]">Coworking Spaces</span>
      </h2>

      <div className="mt-10 flex flex-col md:flex-row gap-[6px]">
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
                  className="h-[250px] md:h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-1 left-1 text-white font-semibold text-2xl px-2 py-1 rounded-md">
                Mumbai
              </div>
            </div>
          </a>
        </div>
        <div className="w-full md:w-2/3">
          <EmblaCarousel options={{ loop: true,autoplay:false,showButton: true ,  align: "start"  }}>
            {Array.from({ length: Math.ceil(cities.length / 2) }).map(
              (_, colIdx) => (
                <div
                  key={colIdx}
                  className="embla__slide shrink-0 
                  basis-[50%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[33.3%] "
                >
                  <div className="grid grid-rows-2 gap-1">
                    {cities
                      .slice(colIdx * 2, colIdx * 2 + 2)
                      .map((city, idx) => (
                        <a  key={idx} href="#">
                          <div
                            className="relative rounded-sm overflow-hidden shadow-md"
                          >
                            <div className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b]" />
                            <Image
                            width={200}
                            height={200}
                              src={city.image}
                              alt={city.name}
                              className="w-full h-[160px] md:h-[180px] lg:h-[200px] object-cover"
                              loading="lazy"
                            />
                            
                            <div className="absolute bottom-1 left-1 text-white font-semibold text-2xl  px-2 py-1 rounded-md">
                              {city.name}
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
