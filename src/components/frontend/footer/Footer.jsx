import React from 'react'
import Svg from '@/components/svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#f5f6f7] md:pb-0 pb-15">
      <div className="container mx-auto pt-[50px] pb-13">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 ">
          <ul className="space-y-[10px] px-[15px]">
            <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555] ">
              <Link href="/enterprise" className="block leading-[1.6] text-sm">Enterprise Solutions</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/joy-of-giving" className="block leading-[1.6] text-sm">Joy Of Giving</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/list-with-us" className="block leading-[1.6] text-sm">List With Us</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/enterprise" className="block leading-[1.6] text-sm">Flexo For Enterprises</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555] sm:pb-0 pb-2">
              <Link href="/contact" className="block leading-[1.6] text-sm">Contact Us</Link>
            </li>
          </ul>


          <ul className="space-y-[10px] px-[15px]">
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/mumbai" className="block leading-[1.6] text-sm">Coworking Space in Mumbai</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/pune" className="block leading-[1.6] text-sm">Coworking Space in Pune</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/bangalore" className="block leading-[1.6] text-sm">Coworking Space in Bangalore</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/hyderabad" className="block leading-[1.6] text-sm">Coworking Space in Hyderabad</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/delhi" className="block leading-[1.6] text-sm">Coworking Space in Delhi</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/navi-mumbai" className="block leading-[1.6] text-sm">Coworking Spaces in Navi Mumbai</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/panaji" className="block leading-[1.6] text-sm">Coworking Space in Panaji Goa</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/vadodara" className="block leading-[1.6] text-sm">Coworking Space in Vadodara</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/lower-parel" className="block leading-[1.6] text-sm">Coworking Space in Lower Parel</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking-space/mumbai/bandra-kurla-complex" className="block leading-[1.6] text-sm">Coworking Space in BKC</Link>
            </li>
            <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555] sm:pb-0 pb-2">
              <Link href="/in/coworking-space/mumbai/andheri-east" className="block leading-[1.6] text-sm">Coworking Space in Andheri</Link>
            </li>

          </ul>

          <ul className="space-y-[10px] px-[15px]">
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/ahemdabad" className="block leading-[1.6] text-sm">Coworking Space in Ahemdabad</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/chandigarh" className="block leading-[1.6] text-sm">Coworking Space in Chandigarh</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/noida" className="block leading-[1.6] text-sm">Coworking Space in Noida</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/gurgaon" className="block leading-[1.6] text-sm">Coworking Space in Gurgaon</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/indore" className="block leading-[1.6] text-sm">Coworking Space in Indore</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/chennai" className="block leading-[1.6] text-sm">Coworking Spaces in Chennai</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/kochi" className="block leading-[1.6] text-sm">Coworking Space in Kochi</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/lucknow" className="block leading-[1.6] text-sm">Coworking Space in Lucknow</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/surat" className="block leading-[1.6] text-sm">Coworking Space in Surat</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/kolkata" className="block leading-[1.6] text-sm">Coworking Space in Kolkata</Link>
            </li>
            <li className="relative before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:transition-all before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
              <Link href="/in/coworking/coimbatore" className="block leading-[1.6] text-sm">Coworking Space in Coimbatore</Link>
            </li>
          </ul>


          <div className="space-y-[10px] px-[15px] lg:mt-0 mt-6">
            <div className="">
              <h4 className="font-medium mb-5 leading-[1.6] text-[#333] text-xl">Follow us on</h4>
            </div>
            <div className="flex items-center gap-3.5">
              <Link href="#" className="text-[#f76900]">
                <Svg name="facebook" className="size-[22px]" />
              </Link>
              <Link href="#" className="text-[#f76900]">
                <Svg name="twitter" className="size-[22px]" />
              </Link>
              <Link href="#" className="text-[#f76900]">
                <Svg name="linkedin" className="size-[22px]" />
              </Link>
              <Link href="#" className="text-[#f76900]">
                <Svg name="instagram" className="size-[22px]" />
              </Link>

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
                <Link href="#" className="after:content-['|'] hover:text-black text-[#555] after:absolute relative me-6  after:-right-3 after:text-[#ccc] text-nowrap text-sm leading-[30px]">Terms Of Use</Link>
                <Link href="#" className="after:content-['|'] hover:text-black text-[#555] after:absolute relative me-6 after:-right-3 after:text-[#ccc] text-nowrap text-sm leading-[30px]">Privacy Policy</Link>
                <Link href="#" className="after:content-['|'] hover:text-black text-[#555] after:absolute relative me-6 after:-right-3 after:text-[#ccc] text-nowrap text-sm leading-[30px]">Refund Policy</Link>
                <Link href="#" className="after:content-['|'] hover:text-black text-[#555] after:absolute relative me-6 after:-right-3 after:text-[#ccc] text-nowrap text-sm leading-[30px]">Host Terms & Conditions</Link>
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
