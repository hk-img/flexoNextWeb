import Svg from '@/components/svg'
import React from 'react'

const BuyPassPopup = ({ setIsOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full xl:max-w-[1000px] max-w-[80vw] mx-[12px] rounded-[11px] bg-white p-6 overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn">
        <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen bg-[#fefaf7]">
          <div className="bg-white p-8 md:p-10">
            <h2 className="text-xl font-semibold mb-6">Complete your Day Pass Booking</h2>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-3 pb-2 bg-transparent"
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
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-3 pb-2 bg-transparent"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-0"
                  >
                    Last Name *
                  </label>
                </div>
               <div className="relative col-span-2">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-3 pb-2 bg-transparent"
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
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-3 pb-2 bg-transparent"
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
                    placeholder="Company Name" className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-3 pb-2 bg-transparent"
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
                    <option selected>No. of Guest*</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  
                </div>
                

                <div className="relative col-span-2">
                  <textarea
                    id="message"
                    rows="3"
                    placeholder=" "
                    className="peer w-full border border-[#ddd] rounded-md p-2 outline-none focus:border-[#f76900] bg-transparent"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-0"
                  >
                    Message or additional requirements
                  </label>
                </div>
              </div>

              

              <button
                type="button"
                className="bg-[#f76900] text-white px-8 py-2 rounded-md font-semibold hover:bg-[#d85f00]"
              >
                CONTINUE
              </button>

              <p className="text-sm text-gray-500">
                You will not be charged until you confirm this booking on the next screen
              </p>
            </form>

          </div>
          <div className="bg-[#fff3ec] p-6 md:p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="https://via.placeholder.com/50" alt="The Mosaic Co-working" className="w-12 h-12 rounded-md" />
                <div>
                  <h3 className="font-semibold text-[#333]">The Mosaic Co-working</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                    Andheri East
                  </p>
                  <p className="text-[#f76900] font-semibold">₹ 12332 / Day</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#f76900]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Booking Summary
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>0.00 ₹</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST(18%)</span>
                  <span>0.00 ₹</span>
                </div>
                <div className="flex justify-between text-[#f76900] font-semibold border-t pt-2">
                  <span>Payable Now</span>
                  <span>0.00 ₹</span>
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
