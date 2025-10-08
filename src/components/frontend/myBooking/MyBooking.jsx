"use client";
import React, { useState } from "react";

const MyBooking = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="bg-[#f9f9f9]">
        <div className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
          <div className="container mx-auto md:px-0 px-[15px] pt-10">
            <div className="flex flex-wrap">
              <div className="md:w-2/5 w-full md:mb-0 mb-6">
                <div className="flex md:flex-row flex-col bg-white rounded-[15px] overflow-hidden">
                  {/* Tab 1 */}
                  <button
                    onClick={() => setActiveTab("tab1")}
                    className={`flex-1 text-center py-[15px] text-[#777] text-sm 2xl:text-base cursor-pointer font-medium border-b-2 transition ${
                      activeTab === "tab1"
                        ? " border-[#f76900]"
                        : " border-transparent"
                    }`}
                  >
                    All Booking
                  </button>

                  {/* Tab 2 */}
                  <button
                    onClick={() => setActiveTab("tab2")}
                    className={`flex-1 text-center py-[15px] text-[#777] text-sm 2xl:text-base cursor-pointer font-medium border-b-2 transition ${
                      activeTab === "tab2"
                        ? " border-[#f76900]"
                        : " border-transparent"
                    }`}
                  >
                    Past Booking
                  </button>

                  {/* Tab 3 */}
                  <button
                    onClick={() => setActiveTab("tab3")}
                    className={`flex-1 text-center py-[15px] text-[#777] text-sm 2xl:text-base cursor-pointer font-medium border-b-2 transition ${
                      activeTab === "tab3"
                        ? " border-[#f76900]"
                        : " border-transparent"
                    }`}
                  >
                    Upcoming Booking
                  </button>
                </div>
              </div>
              <div className="md:w-3/5 w-full md:px-6 px-0">
                <div className="flex md:flex-row flex-col  items-center gap-6">
                  <div className="bg-white rounded-[15px] w-full">
                    <input
                        type="date"
                        className=" w-full placeholder:text-[#777] placeholder:font-medium text-black mt-1 text-sm  rounded-sm focus:outline-none px-2 h-12"
                      />
                  </div>
                  <div className="bg-white rounded-[15px] px-2 w-full">
                    <select
                      className="w-full placeholder:text-[#777] text-black mt-1 text-sm rounded-sm focus:outline-none  h-12"
                     
                    >
                      <option value="" >
                        Select space type
                      </option>
                      <option value="2025-10-06">6 Oct 2025</option>
                      <option value="2025-10-07">7 Oct 2025</option>
                      <option value="2025-10-08">8 Oct 2025</option>
                    </select>
                  </div>
                   <div className="bg-white rounded-[15px] px-2 w-full">
                    <select
                      className="w-full placeholder:text-[#777] text-black mt-1 text-sm rounded-sm focus:outline-none  h-12"
                     
                    >
                      <option value="" >
                        Select Booking Status
                      </option>
                      <option value="2025-10-06">6 Oct 2025</option>
                      <option value="2025-10-07">7 Oct 2025</option>
                      <option value="2025-10-08">8 Oct 2025</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>
            <div className="md:py-10 py-5">
              <h3 className="md:text-2xl text-xl font-medium">Booking not found..</h3>
            </div>
            <div className="mt-4">
              {activeTab === "tab1" && (
                <p className="text-gray-700">

                </p>
              )}
              {activeTab === "tab2" && (
                <p className="text-gray-700">

                </p>
              )}
              {activeTab === "tab3" && (
                <p className="text-gray-700">

                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooking;
