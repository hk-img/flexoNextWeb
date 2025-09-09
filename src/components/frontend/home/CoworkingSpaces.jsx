import React from "react"
import EmblaCarousel from "../emblaCarousel/EmblaCarousel"

const CoworkingSpaces = () => {
  const cities = [
    { name: "Mumbai", image: "/images/mumbai.webp" },
    { name: "Pune", image: "/images/pune.webp" },
    { name: "Gurgaon", image: "/images/gurgaon.webp" },
    { name: "Chennai", image: "/images/chennai.webp" },
    { name: "Delhi", image: "/images/delhi.webp" },
    { name: "Noida", image: "/images/noida.webp" },
    { name: "Ahmedabad", image: "/images/ahmedabad.webp" },
    { name: "Hyderabad", image: "/images/hyderabad.webp" },
  ]

  return (
    <div className="max-w-6xl xl:px-1 lg:px-10 md:px-6 px-4 mx-auto">
      <h2 className="md:text-[32px] text-xl font-medium text-center text-[#333]">
        Explore India&apos;s Premier Network of{" "}
        <span className="text-[#f76900]">Coworking Spaces</span>
      </h2>

      <div className="mt-10 flex flex-col lg:flex-row gap-[6px]">
        <div className="w-full lg:w-1/3">
          <div className="relative rounded-sm overflow-hidden">
            <div className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b]" />
            <div>
              <img
                src="/images/mumbai.webp"
                alt="mumbai coworking"
                className="h-[250px] md:h-[350px] lg:h-[405px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-1 left-1 text-white font-semibold text-2xl  px-2 py-1 rounded-md">
              Mumbai
            </div>
          </div>
          
        </div>
        <div className="w-full lg:w-2/3">
          <EmblaCarousel options={{ loop: true,autoplay:false,showButton: true }}>
            {/* Har slide me 2 images */}
            {Array.from({ length: Math.ceil(cities.length / 2) }).map(
              (_, colIdx) => (
                <div
                  key={colIdx}
                  className="embla__slide shrink-0 
                    basis-1/2 md:basis-1/3 lg:basis-1/3 "
                >
                  <div className="grid grid-rows-2 gap-1">
                    {cities
                      .slice(colIdx * 2, colIdx * 2 + 2)
                      .map((city, idx) => (
                        <div
                          key={idx}
                          className="relative rounded-sm overflow-hidden shadow-md"
                        >
                          <div className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b]" />
                          <img
                            src={city.image}
                            alt={city.name}
                            className="w-full h-[160px] md:h-[180px] lg:h-[200px] object-cover"
                            loading="lazy"
                          />
                          
                          <div className="absolute bottom-1 left-1 text-white font-semibold text-2xl  px-2 py-1 rounded-md">
                            {city.name}
                          </div>
                        </div>
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
