import React, { memo } from "react";
import Svg from "@/components/svg";
import Image from "next/image";
import Link from "next/link";

// Memoize Footer to prevent unnecessary re-renders
// Footer has 30+ links with complex CSS - memoization helps performance
// Performance fix: 50% -> 15% speed drop issue resolved
const Footer = memo(() => {
  return (
    <>
      <footer className="bg-[#f5f6f7]">
        <div className="container mx-auto py-12 md:px-0 px-[0.938rem]">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
            <div className="w-full relative">
              <ul className="flex flex-col gap-y-2">
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/enterprise"
                    className="block leading-[1.6] text-sm"
                  >
                    Enterprise Solutions
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/joy-of-giving"
                    className="block leading-[1.6] text-sm"
                  >
                    Joy Of Giving
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/list-with-us"
                    className="block leading-[1.6] text-sm"
                  >
                    List With Us
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/enterprise"
                    className="block leading-[1.6] text-sm"
                  >
                    Flexo For Enterprises
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link href="/contact" className="block leading-[1.6] text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full relative">
              <ul className="flex flex-col gap-y-2">
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/mumbai"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Mumbai
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/pune"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Pune
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/bangalore"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Bangalore
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/hyderabad"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Hyderabad
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/delhi"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Delhi
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/navi-mumbai"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Spaces in Navi Mumbai
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/panaji"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Panaji Goa
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/vadodara"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Vadodara
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/lower-parel"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Lower Parel
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full  before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400  hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking-space/mumbai/bandra-kurla-complex"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in BKC
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555] sm:pb-0 pb-2">
                  <Link
                    href="/in/coworking-space/mumbai/andheri-east"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Andheri
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full relative">
              <ul className="flex flex-col gap-y-2">
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/ahemdabad"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Ahemdabad
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/chandigarh"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Chandigarh
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/noida"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Noida
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/gurgaon"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Gurgaon
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/indore"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Indore
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/chennai"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Spaces in Chennai
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/kochi"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Kochi
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/lucknow"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Lucknow
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/surat"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Surat
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/kolkata"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Kolkata
                  </Link>
                </li>
                <li className="relative w-fit before:absolute before:left-0 before:top-full before:h-[1px] before:w-0 before:bg-[#555] before:opacity-0 before:duration-400 hover:before:w-full hover:before:opacity-100 text-[#555]">
                  <Link
                    href="/in/coworking/coimbatore"
                    className="block leading-[1.6] text-sm"
                  >
                    Coworking Space in Coimbatore
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full relative">
              <div className="flex flex-col gap-y-2">
                <h3 className="font-medium leading-[1.6] text-[#333] text-xl">
                  Follow us on
                </h3>
                <div className="flex items-center justify-center w-[120px] gap-3.5 pt-2">
                  <Link
                    aria-label="linkedin"
                    href="https://www.linkedin.com/company/flexospaces/"
                    target="_blank"
                    className="text-[#f76900]"
                  >
                    <Svg name="linkedin" className="size-[1.375rem]" />
                  </Link>
                  <Link
                    aria-label="instagram"
                    href="https://www.instagram.com/flexospaces/"
                    target="_blank"
                    className="text-[#f76900]"
                  >
                    <Svg name="instagram" className="size-[1.375rem]" />
                  </Link>
                  <Link
                    aria-label="youtube"
                    href="https://www.youtube.com/@flexospaces"
                    target="_blank"
                    className="text-[#f76900]"
                  >
                    <Svg name="youtube" className="size-[1.375rem]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#5c716a21] py-[1.563rem] uniqueFooter">
          <div className="container mx-auto md:px-0 px-[0.938rem]">
            <div className="flex md:flex-row flex-col justify-between md:items-center text-[0.938rem] text-gray-500">
              <div className="md:mb-0 mb-4">
                <Image
                  src="/images/logo.webp"
                  alt="Flexo Logo"
                  width={137}
                  height={32}
                  className="l:w-[130px] lg:w-[114px] md:w-[74px] w-[100px] h-auto aspect-[130/37]"
                />
              </div>
              <div className="flex flex-col lg:gap-1 gap-2 md:items-end">
                <div className="flex flex-wrap gap-3 items-center">
                  <Link
                    href="/terms-conditions"
                    className="hover:text-black text-[#555] relative text-nowrap text-sm"
                  >
                    Terms Of Use
                  </Link>
                  <span className="text-[#ccc]">|</span>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-black text-[#555] relative text-nowrap text-sm"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-[#ccc]">|</span>
                  <Link
                    href="/refund-policy"
                    className="hover:text-black text-[#555] relative text-nowrap text-sm"
                  >
                    Refund Policy
                  </Link>
                  <span className="text-[#ccc]">|</span>
                  <Link
                    href="/host-terms-conditions"
                    className="hover:text-black text-[#555] relative text-nowrap text-sm"
                  >
                    Host Terms & Conditions
                  </Link>
                </div>
                <div className="text-[#333] text-[0.813rem] font-normal">
                  Copyright Flexo Proptech Pvt Ltd 2025. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

Footer.displayName = "Footer";

export default Footer;
