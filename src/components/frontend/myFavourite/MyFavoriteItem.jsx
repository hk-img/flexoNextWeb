import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import {
  convertSlugToCapitalLetter,
  getTypeOfSpaceByWorkSpace,
  slugGenerator,
} from "@/services/Comman";
import React, { useMemo, useState } from "react";

const MyFavoriteItem = ({ item, setIsRemovePopupOpen, setSpaceId }) => {
  const [expanded, setExpanded] = useState(false);
  const type = useMemo(() => getTypeOfSpaceByWorkSpace(item?.spaceData?.spaceType || ""), [item]);
  const spaceTypeSlug = useMemo(() => slugGenerator(item?.spaceData?.spaceType), [item]);
  const locationNameSlug = useMemo(() => slugGenerator(item?.spaceData?.location_name || ""), [item]);
  const cityNameSlug = useMemo(() => slugGenerator(item?.spaceData?.contact_city_name || ""), [item]);
  const spaceId = item?.spaceData?.id;
  return (
    <>
      <div className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-5 rounded-xl ">
        <div
          onClick={() => {
            let url = "";
            if (type == "coworking") {
              url = `/${item?.spaceData?.slug}`;
            } else {
              url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
            }
            window.open(`${url}`, "_blank");
          }}
          className="cursor-pointer relative md:w-50 h-[150px] w-full rounded-lg shrink-0 overflow-hidden"
        >
          <ImageWithFallback
            src={`${item?.spaceData?.images?.[0]}`}
            width="200"
            height="150"
            alt="Coworking Space"
            className="object-cover w-full h-full"
            fallback="/images/default_image.webp"
          />
          <div
            className="absolute top-4 left-0 bg-[#f76900] text-white text-sm font-medium px-3 py-0.5 
              before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
              before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
              after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
              after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
          >
            {item?.spaceData?.spaceType}
          </div>
        </div>
        <div className="md:ml-[15px] space-y-2">
          <div className="flex justify-between items-center gap-2 mb-0">
            <h2
              onClick={() => {
                let url = "";
                if (type == "coworking") {
                  url = `/${item?.spaceData?.slug}`;
                } else {
                  url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                }
                window.open(`${url}`, "_blank");
              }}
              className="text-lg font-semibold text-[#141414] underline cursor-pointer"
            >
              {type == "coworking" ? item?.spaceData?.actual_name : item?.spaceData?.spaceTitle}
            </h2>
            <div
              onClick={() => {
                setIsRemovePopupOpen(true);
                setSpaceId(item?.spaceData?.id);
              }}
              className="cursor-pointer  size-11 flex justify-center items-center bg-[#f4f4f4]  rounded-full"
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

          <div className="flex items-center space-x-2 font-medium text-sm text-[#141414]">
            <div className="flex items-center space-x-1">
              <Svg name="userHalf" className="size-[18px] text-[#f76900]" />
              <span>{item?.spaceData?.howManyPeopleInYourSpace} people</span>
            </div>
            <span className="size-[10px] rounded-full bg-[#ddd]"></span>
            <div className="flex items-center space-x-1">
              <Svg name="scaleRuler" className="size-[15px] text-[#f76900]" />
              <span>{item?.spaceData?.spacesqft} sqft</span>
            </div>
          </div>
          <p
            className={`text-sm font-normal leading-[1.5] text-[#808080] mb-0 overflow-hidden transition-all duration-500 ease-in-out ${
              expanded
                ? "max-h-[1000px] line-clamp-none"
                : "max-h-[80px] line-clamp-3"
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
