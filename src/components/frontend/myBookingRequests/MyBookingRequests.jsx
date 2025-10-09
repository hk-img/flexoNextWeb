import React from 'react'
import MyBooking from '../myBooking/MyBooking'
import Link from 'next/link'
import Image from 'next/image'
import Svg from '@/components/svg'

const MyBookingRequests = () => {
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[#141414] text-[26px]">
              Booking inquiries
            </h1>
            <div className="flex flex-col gap-y-8">
              <div className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-4 rounded-xl ">
                <Link
                  href=""
                  className="relative shrink-0 md:w-50 h-40 w-full rounded-lg overflow-hidden"
                >
                  <Image
                    src="/images/defaultImg.webp"
                    width="200"
                    height="150"
                    alt="Coworking Space"
                    className="object-cover w-full h-full"
                  />

                  <div
                    className="absolute top-2 left-0 bg-[#f76900] text-white text-sm font-medium px-3 py-1 
              before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
              before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
              after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
              after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
                  >
                    Coworking Space
                  </div>
                </Link>
                <div className="md:ml-6 space-y-2 w-full">
                  <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
                    <span>
                      <Svg name="location2" className="size-4 text-[#f76900]" />
                    </span>
                    <span>Andheri-East</span>
                  </div>

                  <div className="flex flex-wrap items-center space-x-3 font-medium text-sm text-[#141414]">
                    <div className="flex items-center space-x-1">
                      <Svg name="userHalf" className="size-4 text-[#f76900]" />
                      <span>1 people</span>
                    </div>
                    <span className="size-[10px] shrink-0 rounded-full bg-[#ddd]"></span>
                    <div className="flex items-center space-x-1">
                      <Svg
                        name="mail"
                        className="size-4 text-[#f76900]"
                      />
                      <span>gds.alwar.0144@gmail.com</span>
                    </div>
                    <span className="size-[10px] shrink-0 rounded-full bg-[#ddd]"></span>
                    <div className="flex items-center space-x-1">
                      <Svg
                        name="call"
                        className="size-4 text-[#f76900]"
                      />
                      <span>9636180995</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyBookingRequests
