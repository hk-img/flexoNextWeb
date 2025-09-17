"use client";
import Svg from "@/components/svg";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import ProductCard from "../productCard/ProductCard";

const Detail = () => {
  const [isFixed, setIsFixed] = useState(false);
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

  return (
    <>
      <section className="relative w-full mt-[82px] ">
        <div className="relative">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[2px]">
            <div className="max-md:relative max-md:overflow-hidden max-md:pt-[66.45%] max-md:w-full">
              <iframe
                className="w-full h-full max-md:absolute max-md:inset-0 "
                src="https://www.youtube.com/embed/hxvOFKFqQLk?si=qR2XPRzDJJBua9_k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <div className="grid md:grid-cols-2 grid-cols-4 gap-[2px]">
                <div>
                  <a href="#">
                    <img src="/images/detail-1.webp" alt="" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="/images/detail-2.webp" alt="" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="/images/detail-3.webp" alt="" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="/images/detail-4.webp" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute top-7 right-6  flex items-center justify-center gap-3">
            <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
              <a href="#">
                <Svg
                  name="heartTransparent"
                  className="size-[18px] text-black"
                />
              </a>
            </div>
            <div className="relative group">
              <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer shadow">
                <Svg name="share" className="size-[18px] text-black" />
              </div>
              <div className="absolute -right-25 -translate-x-1/2 mt-2 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                  <Svg name="facebook" className="size-[18px] text-[#f76900]" />
                </div>
                <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                  <Svg name="linkedin" className="size-[18px] text-[#f76900]" />
                </div>
                <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                  <Svg name="whatsapp" className="size-[18px] text-[#f76900]" />
                </div>
                <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                  <Svg
                    name="instagram"
                    className="size-[18px] text-[#f76900]"
                  />
                </div>
                <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full shadow ">
                  <Svg name="copy" className="size-[18px] text-[#f76900]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-6 mx-auto py-6">
        <div className="flex flex-wrap">
          <div className="md:w-2/3">
            <ol className="text-sm  mb-2 flex items-center gap-2">
              <li className="text-[#141414] hover:text-[#777]">
                <a href="#">Coworking Space In Mumbai </a>
              </li>
              <li>
                <Svg name="rightArrow" className="size-2 text-gray-500" />
              </li>
              <li className="text-[#141414] hover:text-[#777]">
                <a href="#">Goregaon </a>
              </li>
            </ol>
            <div className="">
              <h1 className="text-lg font-medium text-[#141414] mb-4">
                WeWork Goregaon
              </h1>
              <div className="flex items-start text-[#141414] text-sm mb-4">
                <Svg name="location2" className="size-5 text-[#f76900]" />
                <span>Goregaon</span>
              </div>
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-3 md:items-center justify-between mb-7">
                <div className="flex items-center space-x-10 text-sm text-[#646464] px-2">
                  <div className="flex gap-1 items-center ">
                    <Svg name="user2" className="size-3.5 text-[#7f7f7f]" />
                    <span>people</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Svg
                      name="scaleRuler"
                      className="size-3.5 text-[#646464]"
                    />
                    <span> sqft</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 border border-[#ddd] rounded-full w-fit px-4 py-2">
                  <div className="flex items-center space-x-1 p-1">
                    <Svg name="thumbUp" className="size-3.5 text-black" />
                    <span className="text-sm">0</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center space-x-1 p-1">
                    <Svg name="thumbDown" className="size-3.5 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="md:w-2/3 w-full pr-5 max-md:pr-0 md:order-1 order-2">
            <div>
              <div className="">
                <div
                  className={`${
                    isFixed
                      ? "fixed shadow-md top-0 z-40 w-full left-0 right-0 px-30 h-[80px]"
                      : "relative"
                  } justify-between  border-t border-b bg-white border-[#ddd] md:flex hidden`}
                >
                  <button
                    onClick={() => scrollToSection("about", 1)}
                    className={`py-4 relative text-sm transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 1
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    About the Space
                  </button>

                  <button
                    onClick={() => scrollToSection("pricing", 2)}
                    className={`py-4 relative text-sm transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 2
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    Pricing
                  </button>

                  <button
                    onClick={() => scrollToSection("location", 3)}
                    className={`py-4 relative text-sm transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 3
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    Location
                  </button>

                  <button
                    onClick={() => scrollToSection("hours", 4)}
                    className={`py-4 relative text-sm transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
                      activeTab === 4
                        ? "text-[#f76900] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#f76900]"
                        : "text-[#777] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full"
                    }`}
                  >
                    Business Hours
                  </button>

                  <button
                    onClick={() => scrollToSection("reviews", 5)}
                    className={`py-4 relative text-sm transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f76900] after:transition-all after:duration-500 hover:after:w-full ${
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
                    className="md:pt-9 pt-5 md:pb-14 pb-7 border-b border-[#dbdbdb]"
                  >
                    <div>
                      <h2 className="text-xl font-medium text-[#141414] mb-2">
                        About the Space
                      </h2>
                      <p className="text-[#777] text-base leading-[1.8]">
                        Here's an elegant coworking space in the plush suburbs
                        of Goregaon East. The workspace stands gracefully among
                        elite residential buildings allowing 100+ people to sit,
                        walk, network, chat, close deals, discuss business,
                        interview, relax, and sip on a warm coffee. The private
                        offices, shared desks, dedicated desks, conference
                        halls, event spaces, and full-floor workstations make it
                        a comprehensive workspace solution. This coworking space
                        in Goregaon East is cleaned daily to ensure you have a
                        safe and hygienic work environment.
                      </p>
                    </div>
                    <div className="pt-12">
                      <h2 className="text-xl font-medium text-[#141414] mb-6">
                        Amenities
                      </h2>
                      <div className="grid md:grid-cols-3 grid-cols-2 space-y-5">
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <Svg
                              name="clock"
                              className="size-3.5 text-[#f76900]"
                            />
                          </div>
                          <h3 className="text-[#141414] text-[15px] font-medium">
                            24x7 Access
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="pricing"
                    className="md:pt-9 pt-5 md:pb-14 pb-7 border-b border-[#dbdbdb]"
                  >
                    <h2 className="text-xl font-medium text-[#141414] mb-6">
                      Pricing
                    </h2>
                    <div className="space-y-4">
                      <div className=" bg-[#f7f7f7] rounded-[5px] px-5 py-[15px] ">
                        <div className="flex md:flex-row flex-col md:items-center md:gap-4 gap-2 justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-[#010101]">
                              Private Office
                            </h3>
                            <p className="text-sm text-[#777]">
                              Private space for you and your team
                            </p>
                          </div>
                          <div className="">
                            <span className="block text-[15px] font-light">
                              from
                            </span>
                            <div className="flex items-center">
                              <h2 className=" text-lg font-medium flex items-center">
                                <span className="text-lg text-[#141414]">
                                  <Svg
                                    name="rupee"
                                    className="size-[18px] text-[#f76900]"
                                  />
                                </span>{" "}
                                33,000
                              </h2>
                              <span className=" text-[15px] font-light">
                                /seat/month
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="mt-4 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out">
                            ENQUIRE NOW
                          </button>
                        </div>
                      </div>
                      <div className=" bg-[#f7f7f7] rounded-[5px] px-5 py-[15px] ">
                        <div className="flex md:flex-row flex-col md:items-center md:gap-4 gap-2 justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-[#010101]">
                              Private Office
                            </h3>
                            <p className="text-sm text-[#777]">
                              Private space for you and your team
                            </p>
                          </div>
                          <div className="">
                            <span className="block text-[15px] font-light">
                              from
                            </span>
                            <div className="flex items-center">
                              <h2 className=" text-lg font-medium flex items-center">
                                <span className="text-lg text-[#141414]">
                                  <Svg
                                    name="rupee"
                                    className="size-[18px] text-[#f76900]"
                                  />
                                </span>{" "}
                                33,000
                              </h2>
                              <span className=" text-[15px] font-light">
                                /seat/month
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="mt-4 bg-[#000e54] border border-[#000e54] text-white text-sm font-semibold px-[15px] py-2.5 rounded-[15px] tracking-[1px] hover:bg-[#1d37b5] hover:border-[#0723ab] transition-all duration-500 ease-in-out">
                            ENQUIRE NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="location"
                    className="md:pt-9 pt-5 md:pb-14 pb-7 border-b border-[#dbdbdb]"
                  >
                    <h2 className="text-xl font-medium text-[#141414] mb-8">
                      Location
                    </h2>
                    <div>
                      <iframe
                        className="w-full h-[400px] "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113191.98042546936!2d76.56397305823452!3d27.554769647218155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972998fa7e65df3%3A0x38cebba39ee426f2!2sAlwar%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1757567494363!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="md:px-5 md:py-5 px-5 py-3 grid grid-cols-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center flex-col gap-1 text-[#777]">
                          <Svg name="metro" className="size-5" />
                          <h3 className="text-[#777] text-xs font-normal">
                            Metro
                          </h3>
                        </div>
                        <div>
                          <h3 className="text-[#777] text-xs font-normal">
                            NA
                          </h3>
                          <h3 className="text-[#777] text-xs font-normal">
                            NA
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
                            NA
                          </h3>
                          <h3 className="text-[#777] text-xs font-normal">
                            1 Kms
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="hours"
                    className="md:pt-9 pt-5 md:pb-14 pb-7 border-b border-[#dbdbdb]"
                  >
                    <h2 className="text-xl font-medium text-[#141414] mb-4">
                      Business Hours
                    </h2>
                    <div>
                      <section className=" ">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="flex items-center border border-[#f76900] rounded-full px-5 py-3 text-[#646464]">
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

                        <div className="grid gap-4 md:p-6">
                          <div className="flex justify-between">
                            <span className="text-[#777] text-[15px]">
                              Monday
                            </span>
                            <span className="text-[#777] text-[15px]">
                              09:00 AM – 08:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#777] text-[15px]">
                              Tuesday
                            </span>
                            <span className="text-[#777] text-[15px]">
                              09:00 AM – 08:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#777] text-[15px]">
                              Wednesday
                            </span>
                            <span className="text-[#777] text-[15px]">
                              09:00 AM – 08:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#777] text-[15px]">
                              Thursday
                            </span>
                            <span className="text-[#777] text-[15px]">
                              09:00 AM – 08:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#777] text-[15px]">
                              Friday
                            </span>
                            <span className="text-[#777] text-[15px]">
                              09:00 AM – 08:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#777] text-[15px]">
                              Saturday
                            </span>
                            <span className="text-[#777] text-[15px]">
                              10:00 AM – 04:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#777] text-[15px]">
                              Sunday
                            </span>
                            <span className="text-[#ff3a6d] text-[15px]">
                              Closed
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div id="reviews" className="py-6">
                    <div className="flex flex-wrap md:items-center md:gap-7 gap-3">
                      <h2 className="text-xl font-medium text-[#141414] mb-2">
                        Reviews & Ratings <span>(1)</span>{" "}
                      </h2>
                      <div>
                        <button className="bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white px-5.5 py-2.5 rounded-[15px] font-semibold duration-500 transition flex items-center gap-2 uppercase tracking-[1px]">
                          <Svg name="pencil" className="size-5" />
                          <span>Leave a Review</span>
                        </button>
                      </div>
                    </div>
                    <div className="pt-5 md:pt-10 hidden">
                      <h3 className="text-[#343a40] text-lg">No Reviews Yet</h3>
                    </div>
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
                              <div className="flex items-center gap-10">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 w-full pl-7 max-md:pl-0 md:order-2 order-1">
            <div className="w-full border border-[#dbdbdb] p-6 rounded-sm md:sticky md:top-[90px]  bg-white">
              <h3 className="text-xl font-medium text-center mb-5">
                Interested in this space?
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-[#777]">
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="text-[#f76900]">
                    <Svg name="checkRound" className="size-5" />
                  </span>
                  Zero Brokerage
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="text-[#f76900]">
                    <Svg name="checkRound" className="size-5" />
                  </span>
                  Best Deals
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="text-[#f76900]">
                    <Svg name="checkRound" className="size-5" />
                  </span>
                  1000+ Clients Served
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="text-[#f76900]">
                    <Svg name="checkRound" className="size-5" />
                  </span>
                  Expert Advisors
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]">
                  Get Quote{" "}
                </button>
                <button className="w-full border uppercase tracking-[1px] border-[#000e54] text-[#000e54] text-sm font-semibold py-4 rounded-[15px]">
                  Schedule a visit
                </button>
              </div>
              <div className="text-center space-y-1">
                <p className="text-center text-sm text-black ">
                  Speak to our office space experts.
                </p>
                <a href="#" className="font-semibold text-base text-black">
                  Call +91 95133 92400
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-6 mx-auto pb-6 pt-10">
        <h2 className="md:text-2xl text-xl font-medium text-[#333] mb-5">
          Nearby Coworking Spaces
        </h2>
        <div>
          <EmblaCarousel
            options={{
              loop: true,
              autoplay: false,
              showButton: true,
              showDots: true,
              align: "start",
            }}
          >
            {
              Array.from({ length: 10 }).map((_, index) => (
                 <div key={index} className="shrink-0 px-[9px] basis-[100%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[33.3%] py-3">
                  <ProductCard />
                </div>
              ))
            }
          </EmblaCarousel>
        </div>
      </section>
    </>
  );
};

export default Detail;
