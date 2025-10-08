"use client";
import Svg from "@/components/svg";
import Image from "next/image";
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
            <div className="md:py-10 py-5 hidden">
              <h3 className="md:text-2xl text-xl font-medium ">Booking not found..</h3>
            </div>
            <div className="md:py-10 py-5 flex md:flex-row flex-col md:items-center items-start space-y-8 justify-between ">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-3 md:space-y-0 w-full">
                <div className="flex  md:flex-row flex-col gap-5 w-full">
                  <div className="relative">
                    <div>
                      <Image width={200} height={150} src="/images/noida.webp" alt="booking space image" className="md:w-[200px] w-full h-[150px] rounded-lg" />
                    </div>
                     <div
                        class="absolute bottom-8 left-0 bg-[#f76900] text-white text-sm px-3 py-1
                          before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0
                          before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px]
                          after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0
                          after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
                            >
                       Event Space
                      </div>
                  </div>
                  <div>
                    <div className="flex flex-col text-gray-500 text-sm space-y-3">
                      <h2 className="text-black underline">Event Space</h2>
                      <div className="flex items-center gap-1">
                        <Svg name="location2" className="size-4 text-[#f76900]"/>
                        <h2 className="text-black text-lg ">Sahibpur, Noida</h2>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1">
                          <Svg name="clock" className="size-3 text-[#f76900]"/>
                          <h3 className="text-black text-sm font-medium">0.5</h3>
                        </div>
                        <span className="size-2.5 rounded-full bg-[#ddd]"></span>
                         <div className="flex items-center gap-1">
                          <Svg name="scaleRuler" className="size-3 text-[#f76900]"/>
                          <h3 className="text-black  text-sm font-medium">4554 sqft</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1 border-r border-[#f76900] pr-4">
                          <Svg name="calender" className="size-3 text-[#f76900]"/>
                          <h3 className="text-black text-sm font-medium">20-10-2025</h3>
                        </div>
                        <span className="border-r text-black text-sm font-medium border-[#f76900] pr-4">1 Day</span>
                         <span className=" text-black text-sm font-medium">24hrs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">Booking Status : </p>
                        <div className="flex items-center gap-1">
                          <span>
                            <Svg name="checkFill" className="size-5 text-[#2c864f]"/>
                          </span>
                          <h6 className="text-[#2c864f] font-semibold">confirmed</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2  max-md:w-full">
                <button className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 text-nowrap uppercase tracking-[1px] px-10">LEAVE A REVIEW</button>
                <button className="flex items-center justify-center gap-2 cursor-pointer w-full border uppercase tracking-[1px] border-[#000e54] text-[#000e54]
                   2xl:text-base text-sm font-semibold md:py-[15px] py-[10px] rounded-[15px] text-nowrap">
                  <Svg name="cloudDownload" className="size-5 text-[#000e54]"/>
                  <span >INVOICE</span>
                </button>
                <button className="flex items-center justify-center cursor-pointer w-full bg-[#2c864f] 2xl:text-[15px] text-sm hover:bg-[#40a667] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px] text-nowrap">BOOKING DETAILS <span>
                  <Svg name="rightArrow"  className="size-3 " /></span> </button>
              </div>
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
