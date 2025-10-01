"use client";
import Svg from "@/components/svg";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import ProductCard from "../productCard/ProductCard";
import ExplorePopup from "../explorePopup/ExplorePopup";
import MapComponent from "./MapComponent";
import HeroSection from "./heroSection/HeroSection";

const Detail = ({ detailData }) => {
  const spaceData = detailData?.data;
  const [showAll, setShowAll] = useState(false);
  const displayedFacilities = showAll
    ? spaceData?.facilities
    : spaceData?.facilities?.slice(0, 3);
  console.log({ spaceData });
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [activeTab, setActiveTab] = useState(1);

  const scrollToSection = (id, tab) => {
    setActiveTab(tab);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ block: "start" });
    }
  };

  function convertTo12Hour(time) {
    if (!time) return "";

    // Agar time string "HH:mm" format me hai
    const [hourStr, minuteStr] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr || "00";
    const ampm = hour >= 12 ? "PM" : "AM";

    // 24h -> 12h conversion
    hour = hour % 12 || 12; 

    return `${hour}:${minute} ${ampm}`;
  }

  return (
    <>
      <HeroSection spaceData={spaceData}/>
      <section className="container px-[15px] mx-auto md:py-6 py-[18px]">
        <div className="flex flex-wrap">
          <div className="lg:w-2/3 md:pr-[15px] pr-0">
            <ol className="2xl:text-base text-sm leading-[30px] flex flex-wrap items-center gap-2 pb-px">
              <li className="text-[#141414] hover:text-[#777]">
                <a href="#">
                  {spaceData?.spaceType} In {spaceData?.contact_city_name}{" "}
                </a>
              </li>
              <li>
                <Svg name="rightArrow" className="size-2 text-gray-500" />
              </li>
              <li className="text-[#141414] hover:text-[#777]">
                <a href="#">{spaceData?.location_name} </a>
              </li>
            </ol>
            <div className="">
              <h1 className="2xl:text-[30px] text-lg leading-[1.6] font-medium text-[#141414] mb-4">
                {spaceData?.actual_name} {spaceData?.location_name}
              </h1>
              <div className="flex items-center text-[#141414] 2xl:text-base text-sm mb-4.5">
                <Svg name="location2" className="size-5 text-[#f76900]" />
                <span>{spaceData?.location_name}</span>
              </div>
              <div className="flex md:flex-row flex-col md:space-y-0 md:gap-y-0 gap-y-1 space-y-3 md:items-center justify-between mb-[25px]">
                <div className="flex items-center space-x-11 text-sm text-[#646464] px-2">
                  <div className="flex gap-[5px] items-center ">
                    <Svg name="user2" className="size-[15px] text-[#7f7f7f]" />
                    <span className="2xl:text-base text-sm">{spaceData?.howManyPeopleInYourSpace} people</span>
                  </div>
                  <div className="flex gap-[5px] items-center">
                    <Svg
                      name="scaleRuler"
                      className="size-[15px] text-[#7f7f7f]"
                    />
                    <span className="2xl:text-base text-sm">{spaceData?.spacesqft} sqft</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 border border-[#ddd] rounded-full w-fit md:px-3.5 px-3 md:py-2 py-1">
                  <div className="flex items-center space-x-1 p-1 pr-3 border-r border-[#ddd]">
                    <Svg name="thumbUp" className="size-3.5 text-black" />
                    <span className="text-[15px]">0</span>
                  </div>

                  <div className="flex items-center space-x-1 p-1">
                    <Svg name="thumbDown" className="size-3.5 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="lg:w-2/3 w-full pr-[15px] max-lg:pr-0 lg:order-1 order-2">
            <div>
              <div className="">
                <div
                  className={`${
                    isFixed
                      ? "fixed shadow-md top-0 z-40 w-full left-0 right-0 2xl:px-35 px-15 2xl:h-[81px] h-[52px]"
                      : "relative"
                  } justify-between  border-t border-b bg-white border-[#ddd] md:flex hidden`}
                >
                  <button
                    onClick={() => scrollToSection("about", 1)}
                    className={`2xl:py-[25px] py-[10px] relative 2xl:text-base text-sm leading-[30px] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 1
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    About the Space
                  </button>

                  <button
                    onClick={() => scrollToSection("pricing", 2)}
                    className={`2xl:py-[25px] py-[10px] relative 2xl:text-base text-sm leading-[30px] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 2
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    Pricing
                  </button>

                  <button
                    onClick={() => scrollToSection("location", 3)}
                    className={`2xl:py-[25px] py-[10px] relative 2xl:text-base text-sm leading-[30px] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 3
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    Location
                  </button>

                  <button
                    onClick={() => scrollToSection("hours", 4)}
                    className={`2xl:py-[25px] py-[10px] relative 2xl:text-base text-sm leading-[30px] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 4
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    Business Hours
                  </button>

                  <button
                    onClick={() => scrollToSection("reviews", 5)}
                    className={`2xl:py-[25px] py-[10px] relative 2xl:text-base text-sm leading-[30px] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 5
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    Reviews
                  </button>
                </div>
                <div>
                  <div
                    id="about"
                    className="md:pt-[30px] pt-5 md:pb-[50px] pb-7 border-b border-[#dbdbdb]"
                  >
                    <div>
                      <h2 className="text-xl leading-[1.6] font-medium text-[#141414] mb-[15px]">
                        About the Space
                      </h2>
                      <p className="text-[#777] text-base leading-[1.8]">
                        {spaceData?.about}
                      </p>
                    </div>
                    {
                      spaceData?.parkingOptionsValue?.length > 0 && spaceData?.parkingDescription && (
                        <div className="py-6">
                          <div>
                            <input
                              type="checkbox"
                              id="parking-toggle"
                              className="hidden peer"
                            />

                            <label
                              htmlFor="parking-toggle"
                              className="flex cursor-pointer items-center justify-between border-b border-[#dbdbdb] py-5 px-1 hover:bg-[#0000000a]"
                            >
                              <div className="flex items-center gap-1">
                                <Svg
                                  name="parking"
                                  className="size-7 text-[#f76900]"
                                />
                                <span className="font-medium text-lg">Parking</span>
                              </div>
                            </label>
                            <Svg
                              name="leftArrow"
                              className="size-3.5 -rotate-90 transition-transform duration-300 peer-checked:rotate-90 ml-auto mr-1 -mt-10"
                            />

                            <div
                              className="
                              overflow-hidden
                              transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                              max-h-0 peer-checked:max-h-[1000px]
                            "
                            >
                              <div className="pt-8 mt-8 space-y-5">
                                <div>
                                  <h4 className="font-semibold text-[#000000de] leading-[20px] text-[17px] mb-2">
                                    Parking options
                                  </h4>
                                  <p className="text-[#646464] text-base leading-[1.8]">
                                    {spaceData?.parkingOptionsValue?.join(", ")}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-[#000000de] leading-[20px] text-[17px] mb-2">
                                    Parking description
                                  </h4>
                                  <p className="text-[#646464] text-base leading-[1.8]">
                                    {spaceData?.parkingDescription}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }

                    <div className="pt-12">
                      <h2 className="text-xl font-medium text-[#141414] mb-6">
                        Amenities
                      </h2>
                       <div className="max-md:hidden  grid md:grid-cols-3 grid-cols-2 gap-6">
                        {spaceData?.facilities?.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div>
                              <Svg
                                name="clock"
                                className="size-3.5 text-[#f76900]"
                              />
                            </div>
                            <h3 className="text-[#141414] text-[15px] font-medium leading-[1.6]">
                              {item?.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                      <div className="md:hidden block grid md:grid-cols-3 grid-cols-2 gap-6">
                        {displayedFacilities?.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div>
                              <Svg
                                name="clock"
                                className="size-3.5 text-[#f76900]"
                              />
                            </div>
                            <h3 className="text-[#141414] text-[15px] font-medium leading-[1.6]">
                              {item?.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                      {spaceData?.facilities?.length > 3 && (
                        <div
                          className="md:hidden block mt-5 text-sm text-[#3e80d8] font-extrabold cursor-pointer"
                          onClick={() => setShowAll(!showAll)}
                        >
                          {showAll ? "Show Less" : "Show More"}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    id="pricing"
                    className="md:pt-[50px] pt-5 md:pb-14 pb-10 border-b border-[#dbdbdb]"
                  >
                    <h2 className="text-xl font-medium text-[#141414] mb-[15px]">
                      Pricing
                    </h2>
                    <div className="space-y-5">
                      {spaceData?.privatecabin_price > 0 && (
                        <div className=" bg-[#f7f7f7] rounded-[5px] px-5 py-[15px] ">
                          <div className="grid md:grid-cols-3 grid-cols-1 md:items-center md:gap-4 gap-0 justify-between">
                            <div className="md:col-span-2">
                              <h3 className="2xl:text-xl text-lg leading-[1.6] font-medium text-[#010101]">
                                Private Office
                              </h3>
                              <p className="2xl:text-base text-sm leading-[1.5] text-[#777]">
                                Private space for you and your team
                              </p>
                            </div>
                            <div className="md:ps-[15px]">
                              <span className="block text-[15px] leading-[30px] font-light">
                                from
                              </span>
                              <div className="flex items-center">
                                <h2 className=" text-lg font-medium flex items-center leading-[1.6]">
                                  <span className="text-lg text-[#141414]">
                                    <Svg
                                      name="rupee"
                                      className="size-[18px] text-[#f76900]"
                                    />
                                  </span>{" "}
                                  {spaceData?.privatecabin_price}
                                </h2>
                                <span className=" text-[15px] leading-[30px] font-light">
                                  /seat/month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out">
                              ENQUIRE NOW
                            </button>
                          </div>
                        </div>
                      )}
                      {spaceData?.manage_office_price > 0 && (
                        <div className=" bg-[#f7f7f7] rounded-[5px] px-5 py-[15px] ">
                          <div className="grid md:grid-cols-3 grid-cols-1 md:items-center md:gap-4 gap-2 justify-between">
                            <div className="md:col-span-2">
                              <h3 className="2xl:text-xl text-lg leading-[1.6] font-medium text-[#010101]">
                                Managed Office
                              </h3>
                              <p className="2xl:text-base text-sm leading-[1.5] text-[#777]">
                                Customised space for specific requirements
                              </p>
                            </div>
                            <div className="md:ps-[15px]">
                              <span className="block text-[15px] leading-[30px] font-light">
                                from
                              </span>
                              <div className="flex items-center">
                                <h2 className=" text-lg font-medium flex items-center leading-[1.6]">
                                  <span className="text-lg text-[#141414]">
                                    <Svg
                                      name="rupee"
                                      className="size-[18px] text-[#f76900]"
                                    />
                                  </span>{" "}
                                  {spaceData?.manage_office_price}
                                </h2>
                                <span className=" text-[15px] leading-[30px] font-light">
                                  /seat/month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out">
                              ENQUIRE NOW
                            </button>
                          </div>
                        </div>
                      )}
                      {spaceData?.desks_price > 0 && (
                        <div className=" bg-[#f7f7f7] rounded-[5px] px-5 py-[15px] ">
                          <div className="grid md:grid-cols-3 grid-cols-1 md:items-center md:gap-4 gap-2 justify-between">
                            <div className="md:col-span-2">
                              <h3 className="2xl:text-xl text-lg leading-[1.6] font-medium text-[#010101]">
                                Dedicated Desk
                              </h3>
                              <p className="2xl:text-base text-sm leading-[1.5] text-[#777]">
                                Fixed workstation in a shared area
                              </p>
                            </div>
                            <div className="md:ps-[15px]">
                              <span className="block text-[15px] leading-[30px] font-light">
                                from
                              </span>
                              <div className="flex items-center">
                                <h2 className=" text-lg font-medium flex items-center leading-[1.6]">
                                  <span className="text-lg text-[#141414]">
                                    <Svg
                                      name="rupee"
                                      className="size-[18px] text-[#f76900]"
                                    />
                                  </span>{" "}
                                  {spaceData?.desks_price}
                                </h2>
                                <span className=" text-[15px] leading-[30px] font-light">
                                  /seat/month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out">
                              ENQUIRE NOW
                            </button>
                          </div>
                        </div>
                      )}
                      {spaceData?.flexible_desk_price > 0 && (
                        <div className=" bg-[#f7f7f7] rounded-[5px] px-5 py-[15px] ">
                          <div className="grid md:grid-cols-3 grid-cols-1 md:items-center md:gap-4 gap-2 justify-between">
                            <div className="md:col-span-2">
                              <h3 className="2xl:text-xl text-lg leading-[1.6] font-medium text-[#010101]">
                                Flexible Desk
                              </h3>
                              <p className="2xl:text-base text-sm leading-[1.5] text-[#777]">
                                Any workstation in a shared area
                              </p>
                            </div>
                            <div className="md:ps-[15px]">
                              <span className="block text-[15px] leading-[30px] font-light">
                                from
                              </span>
                              <div className="flex items-center">
                                <h2 className=" text-lg font-medium flex items-center leading-[1.6]">
                                  <span className="text-lg text-[#141414]">
                                    <Svg
                                      name="rupee"
                                      className="size-[18px] text-[#f76900]"
                                    />
                                  </span>{" "}
                                  {spaceData?.flexible_desk_price}
                                </h2>
                                <span className=" text-[15px] leading-[30px] font-light">
                                  /seat/month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out">
                              ENQUIRE NOW
                            </button>
                          </div>
                        </div>
                      )}
                      {spaceData?.virtual_office_price > 0 && (
                        <div className=" bg-[#f7f7f7] rounded-[5px] px-5 py-[15px] ">
                          <div className="grid md:grid-cols-3 grid-cols-1 md:items-center md:gap-4 gap-2 justify-between">
                            <div className="md:col-span-2">
                              <h3 className="2xl:text-xl text-lg leading-[1.6] font-medium text-[#010101]">
                                Virtual Office
                              </h3>
                              <p className="2xl:text-base text-sm leading-[1.5] text-[#777]">
                                Premium business and mailing address
                              </p>
                            </div>
                            <div className="md:ps-[15px]">
                              <span className="block text-[15px] leading-[30px] font-light">
                                from
                              </span>
                              <div className="flex items-center">
                                <h2 className=" text-lg font-medium flex items-center leading-[1.6]">
                                  <span className="text-lg text-[#141414]">
                                    <Svg
                                      name="rupee"
                                      className="size-[18px] text-[#f76900]"
                                    />
                                  </span>{" "}
                                  {spaceData?.virtual_office_price}
                                </h2>
                                <span className=" text-[15px] leading-[30px] font-light">
                                  /seat/month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out">
                              ENQUIRE NOW
                            </button>
                          </div>
                        </div>
                      )}
                      {spaceData?.originalPrice > 0 && (
                        <div className=" bg-[#f7f7f7] rounded-[5px] px-5 py-[15px] ">
                          <div className="grid md:grid-cols-3 grid-cols-1 md:items-center md:gap-4 gap-2 justify-between">
                            <div className="md:col-span-2">
                              <h3 className="2xl:text-xl text-lg leading-[1.6] font-medium text-[#010101]">
                                Day Pass
                              </h3>
                              {/* <p className="2xl:text-base text-sm leading-[1.5] text-[#777]">
                                Premium business and mailing address
                              </p> */}
                            </div>
                            <div className="md:ps-[15px]">
                              <span className="block text-[15px] leading-[30px] font-light">
                                from
                              </span>
                              <div className="flex items-center">
                                <h2 className=" text-lg font-medium flex items-center leading-[1.6]">
                                  <span className="text-lg text-[#141414]">
                                    <Svg
                                      name="rupee"
                                      className="size-[18px] text-[#f76900]"
                                    />
                                  </span>{" "}
                                  {spaceData?.originalPrice}
                                </h2>
                                <span className=" text-[15px] leading-[30px] font-light">
                                  /seat/month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="cursor-pointer md:mt-3 mt-2 bg-[#4b975f] border border-[#4b975f] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px]">
                              Buy Pass
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    id="location"
                    className="md:pt-[50px] pt-5 md:pb-14 pb-7 border-b border-[#dbdbdb]"
                  >
                    <h2 className="text-xl font-medium text-[#141414] mb-[15px] leading-[1.6]">
                      Location
                    </h2>
                    <div>
                      <MapComponent spaceData={spaceData} />
                    </div>
                    <div className="md:px-5 pt-5 px-5 grid grid-cols-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center flex-col gap-1 text-[#777]">
                          <Svg name="metro" className="size-5" />
                          <h3 className="text-[#777] text-xs font-normal">
                            Metro
                          </h3>
                        </div>
                        <div>
                          <h3 className="text-[#777] text-xs font-normal">
                            {spaceData?.near_by_metro || "N/A"}
                          </h3>
                          <h3 className="text-[#777] text-xs font-normal">
                            {spaceData?.metro_distance || "N/A"}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center flex-col gap-1 text-[#777]">
                          <Svg name="train" className="size-5" />
                          <h3 className="text-[#777] text-xs font-normal">
                            Railway
                          </h3>
                        </div>
                        <div>
                          <h3 className="text-[#777] text-xs font-normal">
                            {spaceData?.near_by_railway_name || "N/A"}
                          </h3>
                          <h3 className="text-[#777] text-xs font-normal">
                            {spaceData?.railway_distance || "N/A"} Kms
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="hours"
                    className="md:pt-9 pt-5 md:pb-14 pb-7 border-b border-[#dbdbdb]"
                  >
                    <h2 className="text-xl font-medium text-[#141414] mb-[15px] leading-[1.6]">
                      Business Hours
                    </h2>
                    <div>
                      <div className=" ">
                        {
                          spaceData?.has_247_access === 1 && (
                            <div className="flex items-center gap-2 mb-[25px]">
                              <div className="flex items-center border border-[#f76900] rounded-full md:px-5 px-[10px] py-3 text-[#646464]">
                                <span className="mr-3">
                                  <Image
                                    width={25}
                                    height={25}
                                    className="w-[25px] h-[25px]"
                                    src="/images/clock-24-7.webp"
                                    alt=""
                                  />
                                </span>{" "}
                                This space is operational 24x7
                              </div>
                            </div>
                          )
                        }

                        <div className="grid md:gap-4 gap-2 md:p-6 px-[15px]">
                          {spaceData?.working_time?.map((item, index) => (
                            <div key={index} className="flex justify-between">
                              <span className="text-[#777] text-[15px]">
                                {item.day}
                              </span>
                              {item.isClosed ? (
                                <span className="text-[#ff3a6d] text-[15px]">
                                  Closed
                                </span>
                              ) : (
                                <span className="text-[#777] text-[15px]">
                                  {convertTo12Hour(item.openingTime)} – {convertTo12Hour(item.closingTime)} 
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="reviews" className="py-6">
                    <div className="flex flex-wrap md:items-center  md:gap-7 gap-3">
                      <h2 className="text-xl font-medium text-[#141414] mb-2">
                        Reviews & Ratings <span>({detailData?.existingReview?.length})</span>{" "}
                      </h2>
                      <div>
                        <button className="bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white px-5.5 py-2.5 rounded-[15px] font-semibold duration-500 transition flex items-center gap-2 uppercase tracking-[1px]">
                          <Svg name="pencil" className="size-5" />
                          <span>Leave a Review</span>
                        </button>
                      </div>
                    </div>
                    {detailData?.existingReview?.length > 0 ? (
                      <div>
                        <div className="space-y-6 pt-5 md:pt-8 ">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-[#f76900]">
                              <Svg name="star" className="size-4" />
                              <Svg name="star" className="size-4" />
                              <Svg name="star" className="size-4" />
                              <Svg name="star" className="size-4" />
                              <Svg name="emptyStar" className="size-4" />
                            </div>
                            <div className="border border-[#f76900] text-[#777] text-sm px-3 py-0.5 rounded-full">
                              4.0
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                              <Image
                                width={50}
                                height={50}
                                src="/images/user_image.webp"
                                alt=""
                              />
                            </div>

                            <div className="flex-1 space-y-1">
                              <div className="">
                                <h3 className="font-medium text-[#141414]">
                                  Hitesh
                                </h3>
                                <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-1">
                                  <div className="flex text-[#f76900] gap-1 text-sm">
                                    <Svg name="star" className="size-5" />
                                    <Svg name="star" className="size-5" />
                                    <Svg name="star" className="size-5" />
                                    <Svg name="star" className="size-5" />
                                    <Svg name="emptyStar" className="size-5" />
                                  </div>
                                  <p className="mt-1 text-base font-medium text-black flex items-center gap-1">
                                    <Svg
                                      name="checkTic"
                                      className="size-3 text-[#7f7f7f]"
                                    />
                                    Yes I would book again
                                  </p>
                                </div>
                              </div>

                              <p className="text-[#777] text-sm">test review</p>
                              <p className="text-[#777] text-xs">
                                September 11, 2025
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-5 md:pt-10">
                        <h3 className="text-[#343a40] text-lg">
                          No Reviews Yet
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full pl-[36px] max-lg:pl-0 lg:order-2 order-1 lg:pb-0 pb-4">
            <div className="w-full border border-[#dbdbdb] py-[22px] px-[19px] rounded-sm md:sticky md:top-[90px]  bg-white">
              <h3 className="text-xl font-medium text-center mb-5 pt-[10px]">
                Interested in this space?
              </h3>
              <div className="columns-2  space-y-2  mb-4 text-sm text-black">
                <div className="flex items-center gap-0.5 2xl:text-[13px] text-[11px] leading-[1.5]">
                  <span className="text-[#f76900]">
                    <Svg name="checkRound" className="size-[22px]" />
                  </span>
                  Zero Brokerage
                </div>
                <div className="flex items-center gap-0.5 2xl:text-[13px] text-[11px] leading-[1.5]">
                  <span className="text-[#f76900]">
                    <Svg name="checkRound" className="size-[22px]" />
                  </span>
                  1000+ Clients Served
                </div>
                <div className="flex items-center gap-0.5 2xl:text-[13px] text-[11px] leading-[1.5] ps-2">
                  <span className="text-[#f76900]">
                    <Svg name="checkRound" className="size-[22px]" />
                  </span>
                  Best Deals
                </div>

                <div className="flex items-center gap-0.5 2xl:text-[13px] text-[11px] leading-[1.5] ps-2">
                  <span className="text-[#f76900]">
                    <Svg name="checkRound" className="size-[22px]" />
                  </span>
                  Expert Advisors
                </div>
              </div>

              <div className="space-y-2.5 mb-10">
                <button onClick={()=>setIsOpen((prev) => !prev)} className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]">
                  Get Quote{" "}
                </button>
                <button className="cursor-pointer w-full border uppercase tracking-[1px] border-[#000e54] text-[#000e54] 2xl:text-base text-sm font-semibold md:py-[15px] py-[10px] rounded-[15px]">
                  Schedule a visit
                </button>
                {
                  spaceData?.originalPrice > 0 && (
                    <button className="cursor-pointer w-full bg-[#2c864f] 2xl:text-[15px] text-sm hover:bg-[#40a667] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]">
                      Buy Pass
                    </button>
                  )
                }
              </div>
              <div className="text-center">
                <p className="text-center text-sm leading-[1.5] text-black ">
                  Speak to our office space experts.
                </p>
                <a
                  href="#"
                  className="font-semibold text-base leading-[1.5] text-black"
                >
                  Call +91 95133 92400
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-[15px] mx-auto pb-[50px] pt-10">
        <h2 className="text-2xl font-medium text-[#141414] mb-[3px] leading-[1.6] md:pl-3 pl-0">
          Nearby Coworking Spaces
        </h2>
        <div>
          <EmblaCarousel
            options={{
              loop: true,
              autoplay: false,
              showDots: true,
              align: "start",
            }}
          >
            {spaceData?.similar_spaces?.map((item, index) => (
              <div
                key={index}
                className="shrink-0 md:px-[9px] px-0 basis-[100%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[33.3%] py-3"
              >
                <ProductCard item={item} setIsOpen={setIsOpen} />
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </section>
      {isOpen && <ExplorePopup isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Detail;
