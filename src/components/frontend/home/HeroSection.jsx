"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const images = [
    "/images/coworking-spaces.webp",
    "/images/desk-spaces.webp",
    "/images/managed-offices.webp",
    "/images/meeting-rooms.webp",
    "/images/private-cabins.webp",
    "/images/private-offices.webp",
    "/images/workspaces.webp",
  ];

  const texts = [
    "Coworking Spaces",
    "Desk Rooms",
    "Managed Offices",
    "Meeting Rooms",
    "Private Cabins",
    "Private Offices",
    "Workspaces",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative w-full h-[calc(100dvh-82px)] mt-[82px] overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${idx}`}
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center text-white">
        <div className="max-w-6xl xl:px-[6px] lg:px-10 md:px-6 px-4 mx-auto w-full">
          <div className="mb-10 md:text-start text-center">
            <h1 className="text-4xl md:text-[56px] font-bold transition-all duration-700 ease-in-out mb-2">
              Discover Amazing{" "}
            </h1>

            <div
              key={texts[currentText]}
              className="text-[#f76900] [text-shadow:0px_0px_40px_black] inline-block animate-fadeSlide text-4xl md:text-5xl font-bold"
            >
              {texts[currentText]}
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:bg-transparent bg-white md:p-0 p-4 rounded-[15px] items-center gap-y-5 gap-x-3 mt-6">
            <div className=" flex gap-y-5 md:flex-row flex-col bg-white md:rounded-[15px] overflow-hidden w-full max-w-xl">
              <select
                className="flex-1 px-4 py-3 text-black md:border-l md:border-[#d5d5d5] border md:rounded-none rounded-[15px]  border-black outline-none bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  What are you looking for?
                </option>
                <option value="coworking">Coworking Spaces</option>
                <option value="desk">Desk Rooms</option>
                <option value="managed">Managed Offices</option>
                <option value="meeting">Meeting Rooms</option>
                <option value="cabins">Private Cabins</option>
                <option value="offices">Private Offices</option>
                <option value="workspaces">Workspaces</option>
              </select>

              <select
                className="flex-1 px-4 py-3 text-black border rounded-[15px] md:border-transparent border-black outline-none bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Where?
                </option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="hyderabad">Hyderabad</option>
              </select>           
            </div>
            <div className="md:w-auto w-full">
              <a href="#" className="bg-[#f76900] px-6 text-white font-semibold h-[46px] flex items-center justify-center rounded-xl w-full"> Search </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
