import Image from 'next/image'
import React from 'react'


const Banner = () => {
  return (
    <section className="relative w-full py-15 lg:h-[343px] h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          width={1520}
          height={259}
          src="/images/become-a-host.webp"
          alt="Handshake background"
          title="Handshake background"
          className="w-full h-full object-cover aspect:[1024 / 259]"
        />
        <div className="absolute inset-0 bg-[#00000061]"></div>
      </div>

      <div className="relative container z-10 text-center px-[15px]">
        <h2 className="text-white text-[22px] md:text-[26px] font-medium mb-2 leading-[1.6]">
          List Your Space and Earn with Flexo
        </h2>
        <p className="text-white/90 text-lg leading-[1.5]">
          Showcase your space, set your pricing, and start receiving leads and bookings effortlessly.
        </p>
        <a href="#" className="inline-block bg-[#f76900] mt-6 tracking-[1px] text-[15px] border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:px-7.5 px-5 md:py-[15px] py-[10px] rounded-[6px] font-semibold duration-500 transition uppercase">
          BECOME A HOST
        </a>
      </div>
    </section>
  )
}
export default Banner
