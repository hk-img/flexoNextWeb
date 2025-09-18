"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { components as RSComponents } from "react-select"; 
import Svg from "@/components/svg";

const Select = dynamic(() => import("react-select"), { ssr: false });

const typeOptions = [
  { value: "coworking", label: "Coworking Space" },
  { value: "private", label: "Private Office" },
  { value: "classroom", label: "Classroom" },
  { value: "managed", label: "Managed Office" },
];

const cityOptions = [
  { value: "delhi", label: "Delhi" },
  { value: "mumbai", label: "Mumbai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "pune", label: "Pune" },
  { value: "hyderabad", label: "Hyderabad" },
];

export default function HeroSection() {
  const [type, setType] = useState(null);
  const [city, setCity] = useState(null);

  const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <RSComponents.DropdownIndicator {...props}>
      <Svg
        name="arrowDropDown"
        className={`size-5 text-[#999] transition-transform duration-200 ${
          menuIsOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </RSComponents.DropdownIndicator>
  );
};

  const ClearIndicator = (props) => {
    return (
      <RSComponents.ClearIndicator {...props}>
        <div
          // inner clickable area (we let the wrapper handle events)
          style={{
            cursor: "pointer",
            padding: "0 8px",
            color: "#999",
            fontWeight: "bold",
          }}
        >
          ×
        </div>
      </RSComponents.ClearIndicator>
    );
  };
const IndicatorSeparator = () => null;
  const customStyles = {
    container: (base) => ({
      ...base,
      width: "260px",
    }),
    control: (base, state) => ({
      ...base,
      borderRadius: "15px",
      backgroundColor: "#fff",
      borderColor: "transparent",
      minHeight: "46px",
      height: "46px",
      boxShadow: "none",
      outline: "none",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    menu: (base) => ({
      ...base,
      marginTop: 4,
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      outline: "none",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 12px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#777",
      fontSize: "0.95rem",
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: "0.95rem",
      color: "#333",
    }),
    option: (base, state) => ({
      ...base,
      padding: "10px 14px",
      borderRadius: "12px",
      backgroundColor: state.isSelected
        ? "#ebf5ff"
        : state.isFocused
        ? "#f5faff"
        : "#fff",
      color: "#333",
      fontWeight: state.isSelected ? "bold" : "normal",
      cursor: "pointer",
      outline: "none",
      boxShadow: "none",
      ":active": {
        backgroundColor: "#ebf5ff",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#999",
      padding: "0 8px",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      paddingRight: "4px",
    }),
  };

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
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentText((prev) => (prev + 1) % texts.length),
      5000
    );
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative w-full md:h-[calc(100dvh-82px)] h-[calc(100dvh-63px)] lg:mt-[82px] sm:mt-[62px] mt-[63px] overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={texts[idx]}
            title={texts[idx]}
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40 flex flex-col sm:justify-center justify-end text-white">
        <div className="container px-[15px] mx-auto w-full">
          <div className=" md:text-start text-center">
            <h1 className="text-[34px] md:text-[56px] leading-[1.2] font-semibold transition-all duration-700 ease-in-out md:mb-1">
              Discover Amazing{" "}
            </h1>

            <div
              key={texts[currentText]}
              className="text-[#f76900] [text-shadow:0px_0px_40px_black] inline-block animate-fadeSlide text-[30px] md:text-5xl font-semibold"
            >
              {texts[currentText]}
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:bg-transparent bg-white md:px-0 md:py-0 py-[20px] px-[21px] rounded-[15px] items-center gap-y-5 gap-x-4 sm:mt-9 mt-18 sm:mb-0 mb-4">
            <div className="flex gap-y-5 md:flex-row flex-col bg-white md:rounded-[15px] overflow-hidden w-full xl:max-w-[536px] md:max-w-[449px] ">
              <Select
                options={typeOptions}
                placeholder="What are you looking for?"
                value={type}
                onChange={(opt) => setType(opt)}
                styles={customStyles}
                menuPosition="fixed"
                className="md:border-r border  border-black max-md:rounded-[15px] !w-full md:border-[#d0c2c2] [&_div>div>div]:!text-black [&_div>div>div]:!text-sm [&_div>div>div]:!text-nowrap md:!h-[46px] !h-[52px]"
                isClearable
                components={{
                  ClearIndicator,
                  DropdownIndicator,
                  IndicatorSeparator,
                }}
              />

              <Select
                options={cityOptions}
                placeholder="Where?"
                value={city}
                onChange={(opt) => setCity(opt)}
                styles={customStyles}
                menuPosition="fixed"
                className=" [&_div>div>div]:!text-black [&_div>div>div]:!text-sm max-md:border border-black rounded-[15px] !w-full md:!h-[46px] !h-[52px]"
                isClearable
                components={{
                  ClearIndicator,
                  DropdownIndicator,
                  IndicatorSeparator,
                }}
              />
            </div>

            <button
              onClick={() => console.log(type, city)}
              className="bg-[#f76900] px-5 text-white font-medium h-[46px] flex items-center justify-center rounded-xl w-full md:w-auto text-sm"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
