import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import { IMAGE_BASE_URL } from "@/services/ApiService";
import { convertSlugToCapitalLetter } from "@/services/Comman";
import Link from "next/link";
import React, { useState } from "react";

const MyFavoriteItem = ({ item,setIsRemovePopupOpen,setSpaceId }) => {
  const [expanded, setExpanded] = useState(false);
  

  return (
    <>
      <div className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-4 rounded-xl ">
        <Link
          href=""
          className="relative md:w-50 h-40 w-full rounded-lg shrink-0 overflow-hidden"
        >
          <ImageWithFallback
            src={`${IMAGE_BASE_URL}/${item?.spaceData?.images?.[0]}`}
            width="200"
            height="150"
            alt="Coworking Space"
            className="object-cover w-full h-full"
            fallback="/images/default_image.webp"
          />
          <div
            className="absolute top-2 left-0 bg-[#f76900] text-white text-sm font-medium px-3 py-1 
              before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
              before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
              after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
              after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
          >
            {item?.spaceData?.spaceType}
          </div>
        </Link>
        <div className="md:ml-6 space-y-2">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-lg font-semibold text-[#141414] underline">
              {item?.spaceData?.actual_name}
            </h2>
            <div
              onClick={()=>{
                setIsRemovePopupOpen(true);
                setSpaceId(item?.spaceData?.id);
              }}
              className="cursor-pointer size-11 flex justify-center items-center bg-[#f4f4f4]  rounded-full"
            >
              <Svg name="heart" className="size-5 text-[#f76900]" />
            </div>
          </div>
          <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
            <span>
              <Svg name="location2" className="size-4 text-[#f76900]" />
            </span>
            <span>
              {convertSlugToCapitalLetter(item?.spaceData?.location_name)}
            </span>
          </div>

          <div className="flex items-center space-x-4 font-medium text-sm text-[#141414]">
            <div className="flex items-center space-x-1">
              <Svg name="userHalf" className="size-4 text-[#f76900]" />
              <span>{item?.spaceData?.howManyPeopleInYourSpace} people</span>
            </div>
            <span className="size-3 rounded-full bg-[#ddd]"></span>
            <div className="flex items-center space-x-1">
              <Svg name="scaleRuler" className="size-4 text-[#f76900]" />
              <span>{item?.spaceData?.spacesqft} sqft</span>
            </div>
          </div>
          <p
            className={`text-sm font-normal text-[#808080] overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-[1000px]" : "max-h-[80px]"
            }`}
          >
            {item?.spaceData?.about}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="cursor-pointer text-black text-base font-medium underline hover:text-[#f76900]"
          >
            {expanded ? "See less" : "Read More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MyFavoriteItem;
