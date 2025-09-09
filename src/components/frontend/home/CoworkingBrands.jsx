import React from 'react'
import EmblaCarousel from '../emblaCarousel/EmblaCarousel'

const CoworkingBrands = () => {
  return (
    <>
      <div className="max-w-6xl xl:px-1 lg:px-10 md:px-6 px-4 mx-auto">
        <div>
          <div className="w-full lg:w-2/3">
            <EmblaCarousel options={{ loop: true,autoplay:false,showButton: true }}>
              
                  <div
                  
                    className="embla__slide shrink-0 
                      basis-1/2 md:basis-1/3 lg:basis-1/3 "
                  >
                    <div className="grid grid-rows-2 gap-1">
                      
                          <a  href="#">
                            <div
                              
                              className="relative rounded-sm overflow-hidden border-b border-[#ffdbc0] p-3 bg-[#fafafa]"
                            >
                              <img
                                src="/images/brand-logo-1.webp"
                                alt="brand-logo-1"
                                className=" w-[180px] object-cover"
                                loading="lazy"
                              />
                              
                            </div>
                          </a>
                    </div>
                  </div>
            </EmblaCarousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoworkingBrands
