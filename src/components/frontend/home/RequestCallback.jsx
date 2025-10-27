import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RequestCallback = () => {
  return (
    <section className="relative w-full py-15 lg:h-[400px] h-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              width={1356}
              height={400}
              src="/images/ready-to-move.webp" 
              alt="Handshake background"
              title="Handshake background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#00000075]"></div>
          </div>
    
          <div className="relative container z-10 text-center px-[15px] py-3">
            <h2 className="text-white text-[22px] md:text-[26px] font-medium xl:mb-[7px] mb-2 leading-[1.6]">
              Get Tailored Office Space Solutions for Your Business Needs
            </h2>
            <p className="text-white/90 text-lg leading-[1.5]">
              Our workspace experts will get in touch to help you with your requirements.
            </p>
            <Link aria-label=" Request Callback" href="/contact" className="inline-block bg-[#f76900] mt-6 tracking-[1px] min-[1500px]:text-base min-[1400px]:text-base  text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:px-7.5 px-5 md:py-[15px] py-[10px] rounded-[15px] font-semibold duration-500 transition uppercase">
              Request Callback
            </Link>
          </div>
        </section>
  )
}
export default RequestCallback