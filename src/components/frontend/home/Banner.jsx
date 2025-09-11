import Image from 'next/image'
import React from 'react'


const Banner = ({heading,img,desc,btnText,btnLink}) => {
  return (
    <section className="relative w-full py-10 h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          width={1520}
          height={400}
          src={img} 
          alt="Handshake background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00000075]"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-white text-2xl md:text-[26px] font-semibold mb-4">
          {heading}
        </h2>
        <p className="text-white/90 mb-6 text-sm md:text-lg">
          {desc}
        </p>
        <a href={btnLink} className="bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white px-10 py-4 rounded-[15px] font-semibold duration-500 transition">
          {btnText}
        </a>
      </div>
    </section>
  )
}
export default Banner
