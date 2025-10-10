import Svg from '@/components/svg'
import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="bg-[#808080] h-[287px] flex justify-center items-center relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
      <div className="container mx-auto text-center md:px-0 px-[15px] py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[28px] text-white font-semibold uppercase">
           CONTACT US
          </h1>
        </div>
      </div>
    </section>
    <section>
      <div className="w-[92%] max-w-[1224px]  mx-auto grid md:grid-cols-2 gap-[30px] pt-20">
        <div className="border border-[#eee] rounded-[10px] p-[30px] ">
          <div className='flex flex-col justify-center space-y-5  '>
            <h2 className="text-[40px] font-semibold text-[#000e54] leading-[1.5] mb-[30px] ">
              Stop by and say hi. Or drop us a note if you need support
            </h2>
            
            <div className="flex items-center space-x-5 text-[#6c757d] border-b pb-[35px] border-[#eee]">
              <span className="text-[#6c757d] font-medium flex items-center gap-1">
                <Svg name="mail" className="size-[18px] shrink-0 text-[#6c757d]" />
                <span> Mail :</span>
              </span>
              <a href="mailto:hello@flexospaces.com" className="text-[#878c9f] 2xl:text-base text-sm font-medium">
                hello@flexospaces.com
              </a>
            </div>

            <div className="flex space-x-2">
              <a href="#" className="bg-[#ff6600] text-white p-2 rounded-md hover:bg-[#2c3b5a]">
                <Svg name="facebook" className="size-5 " />
              </a>
               <a href="#" className="bg-[#ff6600] text-white p-2 rounded-md hover:bg-[#2c3b5a]">
                <Svg name="twitter" className="size-5 " />
              </a>
               <a href="#" className="bg-[#ff6600] text-white p-2 rounded-md hover:bg-[#2c3b5a]">
                <Svg name="linkedin" className="size-5 " />
              </a>
               <a href="#" className="bg-[#ff6600] text-white p-2 rounded-md hover:bg-[#2c3b5a]">
                <Svg name="instagram" className="size-5 " />
              </a>
            </div>
          </div>
        </div>
        <div className=" py-6">
          <h3 className="text-lg font-semibold mb-4 text-[#00194b]">Get In Touch</h3>
          
          <form className="space-y-4">
            <div>
              <input type="text" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6600]" placeholder="Enter your name"/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Email Address *</label>
              <input type="email" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6600]" placeholder="Enter your email"/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Mobile *</label>
              <input type="tel" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6600]" placeholder="Enter your mobile number"/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Your Message</label>
              <textarea rows="4" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6600]" placeholder="Type your message here..."></textarea>
            </div>

            <button type="submit" className="w-full bg-[#ff6600] text-white py-3 rounded-md text-sm font-medium hover:bg-[#e85c00] transition">
              Send →
            </button>
          </form>
        </div>

      </div>
    </section>
    </>
  )
}

export default Contact
