"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { components as RSComponents } from "react-select";
import Svg from "@/components/svg";
import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/services/ApiService";
import { useRouter } from "next/navigation";
import { slugGenerator } from "@/services/Comman";
 
const Select = dynamic(() => import("react-select"), { ssr: false });
 
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
 
export default function HeroSection({spaceCategoryData}) {
  const router = useRouter();
  const [type, setType] = useState(null);
  const [location, setLocation] = useState(null);
  console.log({ type, location });
 
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
        <div className="cursor-pointer text-gray-500 hover:text-[#f76900] transition-colors duration-200">
          ×
        </div>
      </RSComponents.ClearIndicator>
    );
  };
 
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
      width: "100%",
      boxShadow: "none",
      outline: "none",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    menu: (base) => ({
      ...base,
      marginTop: 0,
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      outline: "none",
      overflow: "hidden",
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "160px",
      overflowY: "auto",
      paddingRight: "4px",
      className:
        " [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 8px",
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
      borderRadius: "11px",
      backgroundColor: state.isSelected
        ? "#ebf5ff"
        : state.isFocused
        ? "#f5faff"
        : "#fff",
      color: "#333",
      fontSize: "14px",
      fontWeight: state.isSelected ? "500" : "normal",
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
      // paddingRight: "4px",
    }),
  };
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
 
  const { data: allLocations } = useQuery({
    queryKey: ["allLocations", type?.label],
    queryFn: async () => {
      const res = await getApi(`user/getAllLocations?spaceType=${type?.label}`);
      return res.data;
    },
    enabled: !!type?.label,
  });
 
  const locationData = useMemo(() => {
    return allLocations || [];
  }, [allLocations]);
 
  const filterLocations = (option, inputValue) => {
    return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
  };
 
  const handleSearch = (type,location)=>{
    const typeSlug = slugGenerator(type?.label);
    const citySlug = slugGenerator(location?.city || "");
    const locationSlug = slugGenerator(location?.location_name || "");
    if(!locationSlug && typeSlug == "coworking-space" ){
      return router.push(`/in/coworking/${citySlug}`);
    }
    router.push(`/in/${typeSlug}/${citySlug}/${locationSlug}`);
  }
 
  return (
    <section className="relative w-full md:h-[calc(100dvh-82px)] h-[calc(100dvh-60px)] lg:mt-[82px] sm:mt-[62px] mt-[64px] overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`sm:absolute top-0 left-0 transition-opacity sm:w-full sm:h-full sm:flex sm:justify-center sm:items-center duration-1000 ease-in-out max-sm:before:absolute max-sm:before:inset-x-0 max-sm:before:bottom-0 max-sm:before:z-[1] max-sm:before:h-[330px] max-sm:before:bg-gradient-to-t max-sm:before:from-[#3a0d00] max-sm:before:via-[#3a0d00] max-sm:before:to-transparent max-sm:inset-0 max-sm:top-auto ${
            idx === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="sm:relative absolute w-full sm:h-full sm:overflow-hidden max-sm:bg-bottom max-sm:bg-cover max-sm:h-[calc(100%-170px)]">
            <Image
              src={img}
              alt={texts[idx]}
              title={texts[idx]}
              fill
              priority
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      ))}
 
      <div className="absolute inset-0 bg-black/40  text-white z-1 lg:py-0 sm:py-4 py-0">
        <div className="container px-[15px] mx-auto w-full h-full">
          <div className="flex flex-col md:items-start md:justify-center items-center justify-end h-full">
            <div className=" md:text-start text-center max-md:flex-1 basis-auto flex flex-col md:justify-end justify-center">
              <h1 className="text-[34px] md:text-[56px] leading-[1.2] font-semibold transition-all duration-700 ease-in-out md:mb-[5px]">
                Discover Amazing{" "}
              </h1>
 
              <div
                key={texts[currentText]}
                className="text-[#f76900] [text-shadow:0px_0px_40px_black] inline-block animate-fadeSlide text-[30px] md:text-5xl font-semibold"
              >
                {texts[currentText]}
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:bg-transparent bg-white md:px-0 md:py-0 px-[15px] pt-5 pb-4 rounded-[15px] items-center gap-y-5 gap-x-4 sm:mt-9 mt-17 sm:mb-0 mb-4 w-full">
              <div className="flex gap-y-5 md:flex-row flex-col bg-white md:rounded-[15px] overflow-hidden w-full xl:max-w-[536px] md:max-w-[449px] px-[7px]">
                <Select
                  options={spaceCategoryData}
                  placeholder="What are you looking for?"
                  value={type}
                  onChange={(opt) => setType(opt)}
                  styles={customStyles}
                  menuPortalTarget={typeof document !== "undefined" ? document.body : null}
                  className="md:border-r max-md:border items-center flex justify-between border-black max-md:rounded-[15px] !w-full md:border-[#d0c2c2] [&_div>div>div]:!text-black [&_div>div>div]:!text-sm [&_div>div>div]:!text-nowrap md:!h-[46px] !h-[52px]"
                  isClearable
                  menuShouldScrollIntoView={false}
                  components={{
                    ClearIndicator,
                    DropdownIndicator,
                    IndicatorSeparator: null,
                  }}
                  noOptionsMessage={() => "Space not found"}
                />
                <Select
                  options={locationData}
                  placeholder="Where?"
                  value={location}
                  onChange={(opt) => setLocation(opt)}
                  styles={customStyles}
                  menuPortalTarget={
                    typeof document !== "undefined" ? document.body : null
                  }
                  className=" [&_div>div>div]:!text-black [&_div>div>div]:!text-sm max-md:border border-black rounded-[15px] !w-full md:!h-[46px] !h-[52px] items-center flex justify-between"
                  isClearable
                  components={{
                    ClearIndicator: null,
                    DropdownIndicator: null,
                    IndicatorSeparator: null,
                  }}
                  filterOption={filterLocations}
                  noOptionsMessage={() => "Location not found"}
                />
              </div>
 
              <button
                onClick={()=>handleSearch(type,location)}
                className="bg-[#f76900] px-5 text-white font-medium h-[46px] flex items-center justify-center rounded-xl w-full md:w-auto text-sm cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 