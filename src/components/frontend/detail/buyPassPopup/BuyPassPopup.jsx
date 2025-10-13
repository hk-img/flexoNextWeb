import Svg from '@/components/svg'
import Image from 'next/image'
import React from 'react'

const BuyPassPopup = ({ setIsOpen }) => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center animate-fadeIn p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full xl:max-w-[1000px] md:max-w-[80vw] max-w-full md:mx-[12px] rounded-sm bg-white  overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn ">
        <div
          className="flex absolute top-4 right-4 items-center justify-end"
          onClick={() => setIsOpen(false)}
        >
          <Svg name="close" className="size-[18px] cursor-pointer"/>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 bg-[#fefaf7]">
          <div className="bg-white p-5">
            <div className='mb-[21px] border-b border-[#DBDBDB] pb-[11px]'>
              <h2 className="2xl:text-xl text-lg font-medium ">Complete your Day Pass Booking</h2>
            </div>
            <form className="space-y-[18px] mb-[10px]">
              <div className="grid md:grid-cols-2 gap-x-[35px] gap-y-5">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-0"
                  >
                    First Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-0"
                  >
                    Last Name *
                  </label>
                </div>
               <div className="relative md:col-span-2">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-0"
                  >
                   Email Address *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-0"
                  >
                   Phone Number *
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    placeholder="Company Name" className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="company"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-0"
                  >
                   Company Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    placeholder=" "
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-2 bg-transparent"
                  />
                  {/* <label
                    for="date"
                    className="absolute left-0 top-2 text-[#777] text-sm transition-all peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#f76900] bg-white px-1"
                  >
                    Choose one and more dates
                  </label> */}
                </div>

                <div className="relative">
                  <select
                    id="guests"
                    placeholder="No. of Guest*"
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-2 bg-transparent"
                  >
                    <option>No. of Guest*</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  
                </div>
                

                <div className="relative md:col-span-2">
                  <textarea
                    id="message"
                    rows="1"
                    placeholder=" Message or additional requirements"
                    className="peer w-full border-b border-[#ddd] text-sm text-[#0000008a] py-2 outline-none focus:border-[#3f51b5] bg-transparent"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 peer-focus:px-2 rtl:peer-focus:left-auto start-1"
                  >
                    Message or additional requirements
                  </label>
                </div>
              </div>

              

              <button
                type="button"
                className="cursor-pointer md:w-fit w-full bg-[#f76900] 2xl:text-[15px] text-base px-5 border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
              >
                CONTINUE
              </button>
            </form>
            <p className="text-xs text-[#000000de]">
                You will not be charged until you confirm this booking on the next screen
              </p>

          </div>
          <div className="bg-[#FFF0E6] p-5  flex flex-col gap-3">
            
            <div className="flex items-center justify-between rounded-[10px] bg-white p-5">
              <div className="flex items-center gap-3">
                <Image width="180" height="105" src="/images/Mumbai.webp" alt="The Mosaic Co-working" className="w-[180px] h-[105px] rounded-md" />
                <div>
                  <h3 className="font-medium text-base 2xl:text-lg text-[#141414]">The Mosaic Co-working</h3>
                  <p className="text-sm 2xl:text-base text-[#000000de] flex items-center">
                    <Svg name="location2" className="size-4 shrink-0 text-black" />
                    Andheri East
                  </p>
                  <p className="text-black  2xl:text-base text-sm font-bold"> <Svg name="rupee" className='size-4 text-[#f76900] inline'/> 12332 / Day</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] p-5">
              <div className='mb-[21px] border-b border-[#DBDBDB] pb-[10px]'>
                <h4 className="font-medium text-[#141414] 2xl:text-lg text-base flex items-center gap-1">
                  <Svg name="calender" className="size-4 shrink-0 text-[#f76900]"/>
                  Booking Summary
                </h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[#f76900] border-b py-1 border-[#DBDBDB]">
                  <span className='text-sm 2xl:text-base'>Subtotal</span>
                  <span className='font-semibold'>0.00 <Svg name="rupee" className='size-[18px] text-[#f76900] inline'/></span>
                </div>
                <div className="flex justify-between text-[#f76900]  border-b py-1 border-[#DBDBDB]">
                  <span className='text-sm 2xl:text-base'>GST(18%)</span>
                  <span className='font-semibold'>0.00 <Svg name="rupee" className='size-[18px] text-[#f76900] inline'/></span>
                </div>
                <div className="flex justify-between text-[#f76900] font-semibold">
                  <span>Payable Now</span>
                  <span className='font-semibold'>0.00 <Svg name="rupee" className='size-[18px] text-[#f76900] inline'/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyPassPopup
