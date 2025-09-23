import React from 'react'
import Svg from '@/components/svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#f5f6f7] md:pb-0 pb-15">
      <div className="container mx-auto pt-[50px] pb-13">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 ">
          <ul className="space-y-[10px] px-[15px]">
            <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555] ">
              <a href="#" className="block leading-[1.6] text-sm">Enterprise Solutions</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Joy Of Giving</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">List With Us</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Flexo For Enterprises</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555] sm:pb-0 pb-2">
              <a href="#" className="block leading-[1.6] text-sm">Contact Us</a>
            </li>
          </ul>


          <ul className="space-y-[10px] px-[15px]">
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Mumbai</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Pune</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Bangalore</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Hyderabad</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Delhi</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Spaces in Navi Mumbai</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Panaji Goa</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Vadodara</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Lower Parel</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in BKC</a>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555] sm:pb-0 pb-2">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Andheri</a>
            </li>

          </ul>

          <ul className="space-y-[10px] px-[15px]">
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Ahemdabad</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Chandigarh</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Noida</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Gurgaon</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Indore</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Spaces in Chennai</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Kochi</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Lucknow</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Surat</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Kolkata</a>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <a href="#" className="block leading-[1.6] text-sm">Coworking Space in Coimbatore</a>
            </li>
          </ul>


          <div className="space-y-[10px] px-[15px] lg:mt-0 mt-6">
            <div className="">
              <h4 className="font-medium mb-5 leading-[1.6] text-[#333] text-xl">Follow us on</h4>
            </div>
            <div className="flex items-center gap-3.5">
              <a href="#" className="text-[#f76900]">
                <Svg name="facebook" className="size-[22px]" />
              </a>
              <a href="#" className="text-[#f76900]">
                <Svg name="twitter" className="size-[22px]" />
              </a>
              <a href="#" className="text-[#f76900]">
                <Svg name="linkedin" className="size-[22px]" />
              </a>
              <a href="#" className="text-[#f76900]">
                <Svg name="instagram" className="size-[22px]" />
              </a>

            </div>
          </div>

        </div>
      </div>
      <div className='border-t border-[#5c716a21] py-[25px]'>
        <div className='container px-[15px] mx-auto'>
          <div className="flex flex-col md:flex-row justify-between md:items-center text-[15px] text-gray-500">
            <div className="mb-4 md:mb-0">
              <Image src="/images/logo.webp" alt="Flexo Logo" className="w-[115px]" width={137} height={32} />
            </div>
            <div className='flex flex-col md:items-end'>
              <div className="md:space-x-4 space-x-3 flex flex-wrap">
                <a href="#" className="after:content-['|'] hover:text-black text-[#555] after:absolute relative me-6  after:-right-3 after:text-[#ccc] text-nowrap text-sm leading-[30px]">Terms Of Use</a>
                <a href="#" className="after:content-['|'] hover:text-black text-[#555] after:absolute relative me-6 after:-right-3 after:text-[#ccc] text-nowrap text-sm leading-[30px]">Privacy Policy</a>
                <a href="#" className="after:content-['|'] hover:text-black text-[#555] after:absolute relative me-6 after:-right-3 after:text-[#ccc] text-nowrap text-sm leading-[30px]">Refund Policy</a>
                <a href="#" className="after:content-['|'] hover:text-black text-[#555] after:absolute relative me-6 after:-right-3 after:text-[#ccc] text-nowrap text-sm leading-[30px]">Host Terms & Conditions</a>
              </div>
              <div className="text-[#333] text-[13px] leading-[30px]">
                Copyright Flexo Proptech Pvt Ltd 2025. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
