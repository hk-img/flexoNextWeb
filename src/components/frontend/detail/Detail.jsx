import Svg from '@/components/svg'
import React from 'react'

const Detail = () => {
  return (
    <>
      <section className="relative w-full mt-[82px] ">
        <div>
          <div className="grid grid-cols-2 gap-[2px]">
            <div>
              <iframe className='w-full h-full' src="https://www.youtube.com/embed/hxvOFKFqQLk?si=qR2XPRzDJJBua9_k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-[2px]">
                <div>
                  <a href="#">
                  <img src="/images/detail-1.webp" alt="" />
                  </a>
                </div>
                <div className='relative'>
                  <a href="#">
                    <img src="/images/detail-2.webp" alt="" />
                  </a>
                  <div className='absolute top-7 right-6  flex items-center justify-center gap-3'>
                    <div className='bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full'>
                      <a href="#">
                      <Svg
                          name="heartTransparent"
                          className="size-[18px] text-black"
                        />
                        </a>
                    </div>
                      <div className="relative group">
                        <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer shadow">
                          <Svg name="share" className="size-[18px] text-black" />
                        </div>
                        <div className="absolute -right-25 -translate-x-1/2 mt-2 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                            <Svg name="facebook" className="size-[18px] text-[#f76900]" />
                          </div>
                          <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                            <Svg name="linkedin" className="size-[18px] text-[#f76900]" />
                          </div>
                          <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                            <Svg name="whatsapp" className="size-[18px] text-[#f76900]" />
                          </div>
                          <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                            <Svg name="instagram" className="size-[18px] text-[#f76900]" />
                          </div>
                          <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                            <Svg name="copy" className="size-[18px] text-[#f76900]" />
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
                <div>
                  <a href="#">
                  <img src="/images/detail-3.webp" alt="" />
                  </a>
                </div>
                <div>
                  <a href="#">
                  <img src="/images/detail-4.webp" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl xl:px-1 lg:px-10 md:px-6 px-4 mx-auto md:py-6">
        <div className="flex">
          <div className='w-2/3'>
            <ol className="text-sm  mb-1 flex items-center gap-2">
              <li className='text-[#141414] hover:text-[#777]'><a href="#">Coworking Space In Mumbai </a></li>
                <li><Svg name="rightArrow" className="size-2 text-gray-500" /></li>
              <li className='text-[#141414] hover:text-[#777]'><a href="#" >Goregaon </a></li>
            </ol>
            <div className="">  
              <h1 className="text-lg font-medium text-[#141414] mb-5">WeWork Goregaon</h1>
              <div className="flex gap-1 items-center text-[#141414] text-sm mb-5">
                <Svg name="location2" className="size-5 text-[#f76900]" />
                <span>Goregaon</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className="flex items-center space-x-10 text-sm text-[#646464]">
                  <div className="flex gap-2 items-center ">
                    <Svg name="user2" className="size-3.5 text-[#7f7f7f]" />
                    <span>people</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Svg name="scaleRuler" className="size-3.5 text-[#646464]" />
                  <span> sqft</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 border border-[#ddd] rounded-full w-fit px-4 py-2">
                  <div className="flex items-center space-x-1 p-1">
                    <Svg name="thumbUp" className="size-3.5 text-black" />
                    <span className="text-sm">0</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center space-x-1 p-1">
                    <Svg name="thumbDown" className="size-3.5 text-black" />
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div className="border-t border-b border-gray-200">
              <div className="flex justify-between max-w-4xl mx-auto px-4">
                <button className="py-4 text-sm font-medium text-gray-600 hover:text-orange-500 transition">
                  About the Space
                </button>
                <button className="py-4 text-sm font-medium text-gray-600 hover:text-orange-500 transition">
                  Pricing
                </button>
                <button className="py-4 text-sm font-medium text-orange-600 border-b-2 border-orange-500">
                  Location
                </button>
                <button className="py-4 text-sm font-medium text-gray-600 hover:text-orange-500 transition">
                  Business Hours
                </button>
                <button className="py-4 text-sm font-medium text-gray-600 hover:text-orange-500 transition">
                  Reviews
                </button>
              </div>
            </div>
        </div>
          </div>
        </div>

        
      </section>
    </>
  )
}

export default Detail
