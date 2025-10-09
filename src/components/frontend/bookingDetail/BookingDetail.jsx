import Svg from '@/components/svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookingDetail = () => {
  return (
    <>
      <div className="bg-[#f9f9f9]">
        <div className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
          <div className="container mx-auto md:px-0 px-[15px] py-10">
            <div className="flex flex-wrap">
              <div className="lg:w-2/3 w-full lg:pr-[15px] pr-0">
                <div className="bg-[#ecf5ef] rounded-[5px] p-5 flex items-start gap-4">
                  <div className=" text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                    <Svg name="clockFill" className="size-12 text-[#f76900]"  />
                  </div>
                  <div>
                    <h2 className="text-lg 2xl:text-xl font-bold text-[#343a40] ">
                      Request Sent. Pending Host Confirmation!
                    </h2>
                    <p className="2xl:text-base text-sm">
                      Your booking request has been sent to the host. Once the host accepts
                      your booking request, you will receive a payment link via email. If
                      your requested date and time cannot be accommodated, you will be
                      promptly notified.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 mt-8 pb-10 border-b border-gray-200">
                  <div className="bg-white rounded-lg p-6  flex md:flex-row flex-col gap-4 w-full">
                    <Image width={200} height={150} src="/images/noida.webp" alt="booking space image" className="md:w-[200px] w-full h-[150px] rounded-lg" />
                    <div className="flex flex-col space-y-2 justify-center">
                      <h3 className="text-[26px] font-medium text-black">event space</h3>
                      <p className="text-sm text-[#888888] 2xl:text-base">
                        Booking ID :{" "}
                        <span className="font-medium text-black">37202510081426</span>
                      </p>

                      <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
                        <span>
                          <Svg name="location2" className="size-4 text-[#f76900]" />
                        </span>
                        <span>Andheri-East</span>
                      </div>

                      <div className="flex items-center space-x-4 font-medium text-sm text-[#141414]">
                        <div className="flex items-center space-x-1">
                          <Svg name="userHalf" className="size-4 text-[#f76900]" />
                          <span>1 people</span>
                        </div>
                        <span className="size-[10px] rounded-full bg-[#ddd]"></span>
                        <div className="flex items-center space-x-1">
                          <Svg
                            name="clock"
                            className="size-4 text-[#f76900]"
                          />
                          <span>0.5 hrs</span>
                        </div>
                        <span className="size-[10px] rounded-full bg-[#ddd]"></span>
                        <div className="flex items-center space-x-1">
                          <Svg
                            name="scaleRuler"
                            className="size-4 text-[#f76900]"
                          />
                          <span>sqft</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='pt-10'>
                  <h2 className="text-lg 2xl:text-xl mb-6">Booking Details</h2>

                  <div className="flex flex-wrap items-center gap-2 mb-8 text-[#777] text-sm 2xl:text-base">
                    <span>Space Category :</span>
                    <span className="font-semibold text-[#000]">Event Space</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <label className="block text-[#777] 2xl:text-base text-sm font-medium mb-2">Date</label>
                      <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black">
                        15–03–2025
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#777] 2xl:text-base  text-sm font-medium mb-2">Start Time</label>
                      <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black">
                        12:00 AM
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#777] text-[16px] font-medium mb-2">End Time</label>
                      <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black">
                        12:00 AM
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#777] text-[16px] font-medium mb-2">No of Hours</label>
                      <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black">
                        24
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="lg:w-1/3 w-full lg:pl-[15px] pl-0">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg 2xl:text-xl font-medium text-black mb-4">Payment Summary</h3>
                  <div className="border-t border-[#ddd] pt-2">
                    <div className="flex justify-between py-2 text-sm 2xl:text-base">
                      <span className="text-[#777]">Base Price</span>
                      <span className="text-gray-900 font-medium">212736 INR</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm 2xl:text-base">
                      <span className="text-[#777]">GST (18%)</span>
                      <span className="text-gray-900 font-medium">38292.48 INR</span>
                    </div>
                    <div className="flex justify-between border-y text-sm 2xl:text-base border-gray-200 mt-2 py-3">
                      <span className="text-black font-semibold">Total</span>
                      <span className="text-black font-semibold">251028.48 INR</span>
                    </div>
                  </div>

                 
                </div>
                 <div className="mt-6 text-sm 2xl:text-base text-black">
                    Need assistance with your booking? Contact us
                    Monday through Saturday, 10 AM to 6:30 PM.
                    <div className="mt-3 space-y-2">
                      <div className='flex items-center gap-2'>
                        <Svg name="call" className="size-[15px] text-black" />
                        <Link href="" className="text-[#f76900] text-sm font-medium"> +91-9513392400</Link>
                      </div> 
                       <div className='flex items-center gap-2'>
                        <Svg name="mail" className="size-[15px] text-black" />
                          <Link href="" className="text-[#f76900] text-sm font-medium"> support@flexospaces.com</Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingDetail
