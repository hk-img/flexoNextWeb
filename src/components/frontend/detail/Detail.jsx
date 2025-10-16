"use client";
import Svg from "@/components/svg";
import Image from "next/image";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import ProductCard from "../productCard/ProductCard";
import ExplorePopup from "../explorePopup/ExplorePopup";
import MapComponent from "./MapComponent";
import HeroSection from "./heroSection/HeroSection";
import ReviewSection from "./reviewSection/ReviewSection";
import Auth from "../auth/Auth";
import {
  convertSlugToCapitalLetter,
  Facilities,
  getTypeOfSpaceByWorkSpace,
} from "@/services/Comman";
import ShowHtmlData from "../showHtmlData/ShowHtmlData";
import LikeDislike from "./LikeDislike";
import ScheduleVisitPopup from "./scheduleVisitPopup/ScheduleVisitPopup";
import { useAuth } from "@/context/useAuth";
import BuyPassPopup from "./buyPassPopup/BuyPassPopup";
import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/services/ApiService";
import BottomBar from "../bottomBar/BottomBar";
import BookingReviewPopup from "../bookingReviewPopup/BookingReviewPopup";
import RequestToBookPopup from "./requestToBookPopup/RequestToBookPopup";

const Detail = ({ slug,spaceId,spaceDetailsData,detailData,reviewData }) => {
  const {token,user} = useAuth();
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isScheduleVisitOpen, setIsScheduleVisitOpen] = useState(false);
  const [isBuyPassOpen, setIsBuyPassOpen] = useState(false);
  const [selectedSpaceData,setSelectedSpaceData] = useState(null);
  const [selectedSpaceType, setSelectedSpaceType] = useState(null);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [requestToBookOpen,setRequestToBookOpen] = useState(false);
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
  const toggle = (id) => {
    setOpen(open === id ? null : id); 
  };

  function convertTo12Hour(time) {
    if (!time) return "";
    const [hourStr, minuteStr] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr || "00";
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  }

   const { data: spaceDeatil } = useQuery({
    queryKey: ["space-detail",spaceId,spaceDetailsData,user?.id],
    queryFn: async () => {
      let query = ""
      if(user?.id){
        query = `&userId=${user?.id}`
      }
      const res = await getApi(`/spaces/details?spaceId=${spaceId}&city=${spaceDetailsData?.contact_city_name}&spaceType=${spaceDetailsData?.spaceType}&country=${spaceDetailsData?.country}${query}`);
      return res.data;
    },
    keepPreviousData: true,
    initialData: detailData
  });

  const spaceData = useMemo(()=>{
    return spaceDeatil?.data;
  },[spaceDeatil]);

  const type = getTypeOfSpaceByWorkSpace(spaceData?.spaceType || "");
  const displayedFacilities = showAll
    ? spaceData?.facilities
    : spaceData?.facilities?.slice(0, 3);

  const handleScheduleVisit = ()=>{
    if(!token){
      localStorage.setItem("scheduleVisitOpenData",JSON.stringify({
        spaceId:spaceData?.id,
        scheduleVisitOpen:true
      }));
      setIsAuthOpen(true);
    }else{
      setIsScheduleVisitOpen(true);
    }
  }
  const handleBuyPass = ()=>{
    if(!token){
      localStorage.setItem("buyPassOpenData",JSON.stringify({
        spaceId:spaceData?.id,
        buyPassOpen:true
      }));
      setIsAuthOpen(true);
    }else{
      setIsBuyPassOpen(true);
    }
  }

  const handleRequestToBook = ()=>{
    if(!token){
      localStorage.setItem("requestToBookOpenData",JSON.stringify({
        spaceId:spaceData?.id,
        requestToBookOpen:true
      }));
      setIsAuthOpen(true);
    }else{
      setRequestToBookOpen(true);
    }
  }

  const handleInstantBook = ()=>{
    if(!token){
      localStorage.setItem("requestToBookOpenData",JSON.stringify({
        spaceId:spaceData?.id,
        requestToBookOpen:true
      }));
      setIsAuthOpen(true);
    }else{
      setRequestToBookOpen(true);
    }
  }

  useEffect(()=>{
    const scheduleVisitOpenData = localStorage.getItem("scheduleVisitOpenData");
    const buyPassOpenData = localStorage.getItem("buyPassOpenData");
    const requestToBookOpenData = localStorage.getItem("requestToBookOpenData");
    const parsedScheduleVisitOpenData = JSON.parse(scheduleVisitOpenData);
    const parsedbuyPassOpenData = JSON.parse(buyPassOpenData);
    const parsedrequestToBookOpenData = JSON.parse(requestToBookOpenData);
    if(parsedScheduleVisitOpenData?.spaceId == spaceData?.id && parsedScheduleVisitOpenData?.scheduleVisitOpen && token){
      localStorage.removeItem("scheduleVisitOpenData");
      setIsScheduleVisitOpen(true);
    }
    if(parsedbuyPassOpenData?.spaceId == spaceData?.id && parsedbuyPassOpenData?.buyPassOpen && token){
      localStorage.removeItem("buyPassOpenData");
      setIsBuyPassOpen(true);
    }
    if(parsedrequestToBookOpenData?.spaceId == spaceData?.id && parsedrequestToBookOpenData?.requestToBookOpen && token){
      localStorage.removeItem("requestToBookOpenData");
      setRequestToBookOpen(true);
    }
  },[token])
  return (
    <>
      <HeroSection slug={slug} isFavouriteSpace={spaceDeatil?.existingfavorite?.favourite} spaceData={spaceData} setIsAuthOpen={setIsAuthOpen}/>
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
                <a href="#">
                  {convertSlugToCapitalLetter(spaceData?.location_name || "")}{" "}
                </a>
              </li>
            </ol>
            <div className="">
              {type == "coworking" && (
                <h1 className="2xl:text-[30px] text-lg leading-[1.6] font-medium text-[#141414] mb-4">
                  {spaceData?.actual_name || spaceData?.name} {spaceData?.location_name}
                </h1>
              )}
              {(type == "longterm" || type == "shortterm") && (
                <h1 className="2xl:text-[30px] text-lg leading-[1.6] font-medium text-[#141414] mb-4">
                  {spaceData?.spaceTitle}
                </h1>
              )}
              <div className="flex items-center text-[#141414] 2xl:text-base text-sm mb-4.5">
                <Svg name="location2" className="size-5 text-[#f76900]" />
                <span>
                  {convertSlugToCapitalLetter(spaceData?.location_name || "")}
                </span>
              </div>
              {reviewData?.length > 0 && (
                <div className="flex items-center sm:gap-14 gap-6 sm:mb-0 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-[#f76900]">
                      {[...Array(5)].map((_, i) => (
                        <Svg
                          key={i}
                          name={i < spaceData?.rating ? "star" : "emptyStar"}
                          className="size-5"
                        />
                      ))}
                    </div>
                    <div className="border border-[#f76900] text-black font-medium text-sm px-4 py-1 rounded-full">
                      {spaceData?.ratingsAvg}
                    </div>
                  </div>
                  <h6 className="text-[#646464] text-sm">
                    {reviewData?.length} reviews
                  </h6>
                </div>
              )}
              <div className="flex md:flex-row flex-col md:space-y-0 md:gap-y-0 gap-y-1 space-y-3 md:items-center justify-between mb-[25px]">
                <div className="flex items-center space-x-11 text-sm text-[#646464] px-2">
                  {(type == "coworking" || type == "shortterm") && (
                    <div className="flex gap-[5px] items-center ">
                      <Svg
                        name="user2"
                        className="size-[15px] text-[#7f7f7f]"
                      />
                      <span className="2xl:text-base text-sm">
                        {spaceData?.howManyPeopleInYourSpace} people
                      </span>
                    </div>
                  )}
                  {spaceData?.spaceStatus && (
                    <div className="flex gap-1 items-center">
                      <Svg
                        name="building"
                        className="size-[12px] text-[#7f7f7f]"
                      />
                      <span>{spaceData?.spaceStatus}</span>
                    </div>
                  )}
                  {type == "shortterm" && (
                    <div className="flex gap-1 items-center">
                      <Svg
                        name="clock"
                        className="size-5 text-[#7f7f7f]"
                      />
                      <span>{spaceData?.minimum_hours / 60} hrs min</span>
                    </div>
                  )}
                  <div className="flex gap-[5px] items-center">
                    <Svg
                      name="scaleRuler"
                      className="size-[15px] text-[#7f7f7f]"
                    />
                    <span className="2xl:text-base text-sm">
                      {spaceData?.spacesqft} sqft
                    </span>
                  </div>
                </div>
                {type != "longterm" && (
                  <LikeDislike spaceData={spaceData} setIsAuthOpen={setIsAuthOpen} existingVote={spaceDeatil?.existingVote}/>
                )}
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
                  {
                    type == "coworking" && (
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
                    )
                  }

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
                    {
                      type != "longterm" && (
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
                      )
                    }
                    {
                      type == "shortterm" && (
                        <button
                          onClick={() => scrollToSection("cancellation", 5)}
                          className={`2xl:py-[25px] py-[10px] relative 2xl:text-base text-sm leading-[30px] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                            activeTab === 5
                              ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                              : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                          }`}
                        >
                          Cancellation Policy
                        </button>
                      )
                    }
                  <button
                    onClick={() => scrollToSection("reviews", 6)}
                    className={`2xl:py-[25px] py-[10px] relative 2xl:text-base text-sm leading-[30px] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 6
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
                    <div className="mb-2">
                      <h2 className="text-xl leading-[1.6] font-medium text-[#141414] mb-[15px]">
                        About the Space
                      </h2>
                      <p className="text-[#777] text-base leading-[1.8]">
                        {spaceData?.about}
                      </p>
                    </div>
                    {spaceData?.parkingDescription && (
                      <div>
                          <div>
                            <button
                              onClick={() => toggle("parking")}
                              className="cursor-pointer flex w-full items-center justify-between border-b border-[#dbdbdb] py-5 px-1 hover:bg-[#0000000a]"
                            >
                              <div className="flex items-center gap-1">
                                <Svg name="parking" className="size-7 text-[#f76900]" />
                                <span className="font-medium text-lg">Parking</span>
                              </div>
                              <Svg
                                name="leftArrow"
                                className={`size-3.5 transition-transform duration-300 ${
                                  open === "parking" ? "rotate-90" : "-rotate-90"
                                }`}
                              />
                            </button>

                            <div
                              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                                open === "parking" ? "max-h-[1000px]" : "max-h-0"
                              }`}
                            >
                              <div className="pt-8 space-y-5">
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
                    )}
                    {type != "coworking" && spaceData?.lightingDescription && (
                     <div className="">
                        <button
                          onClick={() => toggle("lighting")}
                          className="cursor-pointer flex w-full items-center justify-between border-b border-[#dbdbdb] py-5 px-1 hover:bg-[#0000000a]"
                        >
                          <div className="flex items-center gap-1">
                            <Svg name="sun" className="size-7 text-[#f76900]" />
                            <span className="font-medium text-lg">Lighting</span>
                          </div>
                          <Svg
                            name="leftArrow"
                            className={`size-3.5 transition-transform duration-300 ${
                              open === "lighting" ? "rotate-90" : "-rotate-90"
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                            open === "lighting" ? "max-h-[1000px]" : "max-h-0"
                          }`}
                        >
                          <div className="pt-8 space-y-5">
                            <p className="text-[#646464] text-base leading-[1.8]">
                              {spaceData?.lightingDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    {type != "coworking" && spaceData?.soundDescription && (
                      <div className="">
                        <button
                          onClick={() => toggle("sound")}
                          className="cursor-pointer flex w-full items-center justify-between border-b border-[#dbdbdb] py-5 px-1 hover:bg-[#0000000a]"
                        >
                          <div className="flex items-center gap-1">
                            <Svg name="sound" className="size-7 text-[#f76900]" />
                            <span className="font-medium text-lg">Sound</span>
                          </div>
                          <Svg
                            name="leftArrow"
                            className={`size-3.5 transition-transform duration-300 ${
                              open === "sound" ? "rotate-90" : "-rotate-90"
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                            open === "sound" ? "max-h-[1000px]" : "max-h-0"
                          }`}
                        >
                          <div className="pt-8 space-y-5">
                            <p className="text-[#646464] text-base leading-[1.8]">
                              {spaceData?.soundDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    {spaceData?.hostRulesDescription && (
                      <div className="">
                        <button
                          onClick={() => toggle("host")}
                          className="cursor-pointer flex w-full items-center justify-between border-b border-[#dbdbdb] py-5 px-1 hover:bg-[#0000000a]"
                        >
                          <div className="flex items-center gap-1">
                            <Svg name="fileMinus" className="size-7 text-[#f76900]" />
                            <span className="font-medium text-lg">Host rules</span>
                          </div>
                          <Svg
                            name="leftArrow"
                            className={`size-3.5 transition-transform duration-300 ${
                              open === "host" ? "rotate-90" : "-rotate-90"
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                            open === "host" ? "max-h-[1000px]" : "max-h-0"
                          }`}
                        >
                          <div className="pt-8 space-y-5">
                            <p className="text-[#646464] text-base leading-[1.8]">
                              {spaceData?.hostRulesDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="pt-12">
                      <h2 className="text-xl font-medium text-[#141414] mb-6">
                        Amenities
                      </h2>
                      <div className="max-md:hidden  grid md:grid-cols-3 grid-cols-2 gap-6">
                        {spaceData?.facilities?.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div>
                              <Svg
                                name={Facilities[item?.id]}
                                className="size-4 text-[#f76900]"
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
                                name={Facilities[item?.id]}
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
                  {type == "coworking" && (
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
                              <button
                                onClick={() => {
                                  setIsOpen(true);
                                  setSelectedSpaceData(spaceData)
                                  setSelectedSpaceType("Private Office");
                                }}
                                className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out"
                              >
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
                              <button
                                onClick={() => {
                                  setIsOpen(true);
                                  setSelectedSpaceData(spaceData)
                                  setSelectedSpaceType("Managed Office");
                                }}
                                className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out"
                              >
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
                              <button
                                onClick={() => {
                                  setIsOpen(true);
                                  setSelectedSpaceData(spaceData)
                                  setSelectedSpaceType("Dedicated Desk");
                                }}
                                className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out"
                              >
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
                              <button
                                onClick={() => {
                                  setIsOpen(true);
                                  setSelectedSpaceData(spaceData)
                                  setSelectedSpaceType("Flexible Desk");
                                }}
                                className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out"
                              >
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
                              <button
                                onClick={() => {
                                  setIsOpen(true);
                                  setSelectedSpaceData(spaceData)
                                  setSelectedSpaceType("Virtual Office");
                                }}
                                className="cursor-pointer md:mt-3 mt-2 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out"
                              >
                                ENQUIRE NOW
                              </button>
                            </div>
                          </div>
                        )}
                        {type == "coworking" &&
                          spaceData?.originalPrice > 0 && (
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
                                      /seat/day
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <button
                                  onClick={handleBuyPass}
                                  className="cursor-pointer md:mt-3 mt-2 bg-[#4b975f] border border-[#4b975f] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px]"
                                >
                                  Buy Pass
                                </button>
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  )}
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
                            {spaceData?.metro_distance
                              ? `${spaceData?.metro_distance} Km`
                              : "N/A"}
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
                            {spaceData?.railway_distance
                              ? `${spaceData?.railway_distance} Km`
                              : "N/A"}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  {type != "longterm" && (
                    <div
                      id="hours"
                      className="md:pt-9 pt-5 md:pb-14 pb-7 border-b border-[#dbdbdb]"
                    >
                      <h2 className="text-xl font-medium text-[#141414] mb-[15px] leading-[1.6]">
                        Business Hours
                      </h2>
                      <div>
                        <div className=" ">
                          {spaceData?.has_247_access === 1 && (
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
                          )}

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
                                    {convertTo12Hour(item.openingTime)} –{" "}
                                    {convertTo12Hour(item.closingTime)}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {type == "shortterm" &&
                    spaceData?.spaceServiceDetailsArray?.length > 0 && (
                      <div className=" md:py-14 py-7 border-b border-[#dbdbdb]">
                        <h3 className="text-[#141414] text-xl font-medium">
                          Add-ons from the host
                        </h3>
                        <p className="text-[#646464] text-base leading-[1.8] py-4">
                          Host provided services, items or options. Available at
                          checkout.
                        </p>
                        <div className="grid grid-cols-2 items-center justify-between">
                          {spaceData?.spaceServiceDetailsArray?.map(
                            (item, index) => (
                              <div key={index}>
                                <h3 className="text-[#141414] text-base font-medium mb-1">
                                  {item.serviceName}
                                </h3>
                                <div className="flex items-center gap-1">
                                  <Svg
                                    name="rupee "
                                    className="size-5 text-[#777]"
                                  />
                                  <span className="text-[#777] 2xl:text-base text-sm">
                                    {item?.servicePrice} /{" "}
                                    {item?.servicePriceType}
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  {type == "shortterm" && (
                    <div id="cancellation" className="py-10 border-b border-[#dbdbdb]">
                      <h3 className="text-[#141414] text-xl font-medium pb-6">
                        Cancellation Policy
                      </h3>
                      <div>
                        <h4 className="text-[#141414] text-lg font-medium">
                          {spaceData?.cancellationPolicy}
                        </h4>
                        <div className="text-[#646464] text-base leading-[1.8] pt-6">
                          <ShowHtmlData
                            html={spaceData?.cancellationPolicyDescription}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {
                    <ReviewSection
                      reviewData={reviewData}
                      rating={spaceData?.rating}
                      avgRating={spaceData?.ratingsAvg}
                      setIsAuthOpen={setIsAuthOpen}
                      setShowReviewPopup={setShowReviewPopup}
                      existingReview={spaceDeatil?.existingReview}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
          {(type == "coworking" || type == "longterm") && (
            <div className="lg:w-1/3 w-full pl-[36px] max-lg:pl-0 lg:order-2 order-1 lg:pb-0 pb-4">
              <div className="w-full border border-[#dbdbdb] rounded-sm md:sticky md:top-[90px]  bg-white">
                {type == "longterm" && (
                  <div className="text-center p-5 border-b border-[#dbdbdb]">
                    <p className="2xl:text-base text-sm font-normal  leading-[1.5] text-[#777]">
                      Monthly Rental
                    </p>
                    <div className="flex items-center justify-center">
                      <Svg
                        name="rupee"
                        className="size-[18px] text-[#f76900]"
                      />
                      <h2 className="text-[26px] font-bold">
                        {spaceData?.originalPrice}
                      </h2>
                    </div>
                    <div className="text-xs font-normal  leading-[1.5] text-[#777] flex items-center justify-center mb-2">
                      <Svg
                        name="rupee"
                        className="size-[18px] text-[#f76900]"
                      />
                      <p>
                        {Math.round(
                          spaceData?.originalPrice / spaceData?.spacesqft
                        )}
                        /Sqft
                        <span className=" font-bold">(Negotiable)</span>
                      </p>
                    </div>
                    <p className="text-xs font-normal  leading-[1.5] text-[#777]">
                      <span className="font-bold">Carpet Area:</span>{" "}
                      {spaceData?.spacesqft} sq. ft. |{" "}
                      <span className="font-bold">
                        {spaceData?.spaceStatus}
                      </span>
                    </p>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl font-medium text-center mb-5 pt-[10px]">
                    Interested in this space?
                  </h3>
                  <div className="columns-2  space-y-2  mb-4 text-sm text-black">
                    {type == "coworking" && (
                      <>
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
                      </>
                    )}
                    {type == "longterm" && (
                      <>
                        <div className="flex items-center gap-0.5 2xl:text-[13px] text-[11px] leading-[1.5]">
                          <span className="text-[#f76900]">
                            <Svg name="checkRound" className="size-[22px]" />
                          </span>
                          1000+ Clients Served
                        </div>
                        <div className="flex items-center gap-0.5 2xl:text-[13px] text-[11px] leading-[1.5]">
                          <span className="text-[#f76900]">
                            <Svg name="checkRound" className="size-[22px]" />
                          </span>
                          End-to-End Support
                        </div>
                        <div className="flex items-center gap-0.5 2xl:text-[13px] text-[11px] leading-[1.5] ps-2">
                          <span className="text-[#f76900]">
                            <Svg name="checkRound" className="size-[22px]" />
                          </span>
                          Expert Advisors
                        </div>
                        <div className="flex items-center gap-0.5 2xl:text-[13px] text-[11px] leading-[1.5] ps-2">
                          <span className="text-[#f76900]">
                            <Svg name="checkRound" className="size-[22px]" />
                          </span>
                          Best Deals
                        </div>
                      </>
                    )}
                  </div>

                  <div className="space-y-2.5 mb-10">
                    <button
                      onClick={() => {
                          setIsOpen(true);
                          setSelectedSpaceData(spaceData);
                          setSelectedSpaceType("");
                        }
                      }
                      className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                    >
                      {type == "coworking"
                        ? "Get Quote"
                        : "REQUEST A CALL BACK"}
                    </button>
                    <button
                      onClick={handleScheduleVisit}
                      className={`cursor-pointer w-full border uppercase tracking-[1px] border-[#000e54] ${
                        type == "longterm" ? "text-[#f76900]" : "text-[#000e54]"
                      } 2xl:text-base text-sm font-semibold md:py-[15px] py-[10px] rounded-[15px]`}
                    >
                      Schedule a visit
                    </button>
                    {type == "coworking" && spaceData?.originalPrice > 0 && (
                      <button
                        onClick={handleBuyPass}
                        className="cursor-pointer w-full bg-[#2c864f] 2xl:text-[15px] text-sm hover:bg-[#40a667] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                      >
                        Buy Pass
                      </button>
                    )}
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
          )}
          {type == "shortterm" && (
            <div className="lg:w-1/3 w-full pl-[36px] max-lg:pl-0 lg:order-2 order-1 lg:pb-0 pb-4">
              <div className="w-full border border-[#dbdbdb]   rounded-sm md:sticky md:top-[90px]  bg-white">
                <div className="border-b p-5 border-[#dbdbdb]">
                  <div className="flex items-center justify-center pt-[10px] ">
                    {
                      spaceData?.isInstant == 1 && (
                        <Svg
                          name="boltFull"
                          className="size-[15px] text-[#ffbf00]"
                        />
                      )
                    }
                    <Svg name="rupee" className="size-[18px] text-[#f76900]" />
                    <h3 className="text-[26px] font-bold text-center">
                      {spaceData?.originalPrice}{" "}
                      <span className="text-base"> /hr</span>
                    </h3>
                  </div>
                  <p className="2xl:text-base text-sm leading-[1.5] text-[#777] text-center">
                    {spaceData?.minimum_hours / 60} hrs minimum
                  </p>
                </div>
                <div className="p-5">
                  {spaceData?.isInstant == 0 ? (
                    <button onClick={handleRequestToBook} className="cursor-pointer md:relative fixed bottom-0 left-0 w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[15px]  md:rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]">
                      Request To Book
                    </button>
                  ) : (
                    <>
                      <button onClick={handleInstantBook} className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]  mt-[10px]">
                        Book Now
                      </button>
                      <div className="pt-5">
                        <div className="flex items-center m-0">
                          <div className="flex items-center">
                            <Svg
                              name="boltFull"
                              className="size-8 text-[#ffbf00]"
                            />
                            <span className="text-sm font-light text-[#2c2020]">
                              Instant Book
                            </span>
                          </div>
                        </div>
                        <p className="text-sm 2xl:text-base text-[#2c2020] pl-4 pt-1">
                          After payment, your booking will be instantly
                          confirmed.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {
        spaceData?.similar_spaces?.length > 0 && (
          <section className="container px-[15px] mx-auto pb-[50px] pt-10">
            <h2 className="text-2xl font-medium text-[#141414] mb-[3px] leading-[1.6] md:pl-3 pl-0">
              Nearby{" "}
              {spaceData?.spaceType == "Coworking spaces"
                ? "Coworking Spaces"
                : spaceData?.spaceType}
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
                    <ProductCard item={item} setIsOpen={setIsOpen} setIsAuthOpen={setIsAuthOpen} setSelectedSpaceData={setSelectedSpaceData}/>
                  </div>
                ))}
              </EmblaCarousel>
            </div>
          </section>
        )
      }
      {type != "shortterm" && <BottomBar type={type} city={spaceData?.contact_city_name} spaceData={spaceData}/>}
      {isOpen && <ExplorePopup isOpen={isOpen} setIsOpen={setIsOpen} selectedSpaceData={selectedSpaceData} type={type} selectedSpaceType={selectedSpaceType} cityName={spaceData?.contact_city_name}/>}
      {isAuthOpen && <Auth isOpen={isAuthOpen} setIsOpen={setIsAuthOpen} />}
      {isScheduleVisitOpen &&<ScheduleVisitPopup isOpen={isScheduleVisitOpen} setIsOpen={setIsScheduleVisitOpen} type={type} spaceId={spaceData?.id} workingDays={spaceData?.working_time} spaceData={spaceData} hostHolidays={spaceDeatil?.hostHolidays}/>}
      {isBuyPassOpen && <BuyPassPopup isOpen={isBuyPassOpen} setIsOpen={setIsBuyPassOpen} spaceData={spaceData}/>}
      {requestToBookOpen && <RequestToBookPopup isOpen={requestToBookOpen} setIsOpen={setRequestToBookOpen} spaceData={spaceData} workingDays={spaceData?.working_time} hostHolidays={spaceDeatil?.hostHolidays}/>}
      {showReviewPopup && <BookingReviewPopup setIsOpen={setShowReviewPopup} isOpen={showReviewPopup} bookingId={spaceData?.id}/>}
    </>
  );
};

export default Detail;
