import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import {
  convertSlugToCapitalLetter,
  getTypeOfSpaceByWorkSpace,
  slugGenerator,
} from "@/services/Comman";
import React from "react";

const BookingRequestItem = ({ item }) => {
  const type = getTypeOfSpaceByWorkSpace(item?.spaceDetail?.spaceType);
  const spaceTypeSlug = slugGenerator(item?.spaceDetail?.spaceType);
  const locationNameSlug = slugGenerator(item?.spaceDetail?.location_name || "");
  const cityNameSlug = slugGenerator(item?.spaceDetail?.contact_city_name || "");
  const spaceId = item?.spaceDetail?.id;
  return (
    <div className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-5 rounded-xl ">
      <div className="relative shrink-0 md:w-50 h-40 w-full rounded-lg overflow-hidden">
        <div
          onClick={() => {
            let url = "";
            if (type == "coworking") {
              url = `/${item?.spaceDetail?.slug}`;
            } else {
              url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
            }
            window.open(`${url}`, "_blank");
          }}
          className="cursor-pointer"
        >
          <ImageWithFallback
            src={item?.images?.[0]}
            width="200"
            height="150"
            alt="Coworking Space"
            className="object-cover w-full h-full"
            fallback="/images/default_image.webp"
          />
        </div>
        <div
          className="absolute top-2 left-0 bg-[#f76900] text-white text-sm font-medium px-3 py-1 
                  before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
                  before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
                  after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
                  after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
        >
          {item?.spaceDetail?.spaceType}
        </div>
      </div>
      <div className="md:ml-[15px] space-y-2 w-full">
        <h2   onClick={() => {
            let url = "";
            if (type == "coworking") {
              url = `/${item?.spaceDetail?.slug}`;
            } else {
              url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
            }
            window.open(`${url}`, "_blank");
          }} className="2xl:text-xl text-lg font-semibold text-[#141414] cursor-pointer underline">
          {item?.spaceDetail?.actual_name || item?.spaceDetail?.spaceTitle}
        </h2>
        <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
          <span>
            <Svg name="location2" className="size-4 text-[#f76900]" />
          </span>
          <span>
            {convertSlugToCapitalLetter(item?.spaceDetail?.location_name || "")}
          </span>
        </div>

        <div className="flex flex-wrap items-center space-x-3 md:space-y-0 space-y-2 font-medium text-sm text-[#141414]">
          <div className="flex items-center space-x-1">
            <Svg name="userHalf" className="size-4 text-[#f76900]" />
            <span>
              {item?.firstName} {item?.lastName}
            </span>
          </div>
          <span className="h-[10px] w-[10px] rounded-full bg-[#ddd]"></span>
          <div className="flex items-center space-x-1">
            <Svg name="mail" className="size-4 text-[#f76900]" />
            <span>{item?.userEmail}</span>
          </div>
          <span className="h-[10px] w-[10px] rounded-full bg-[#ddd]"></span>
          <div className="flex items-center space-x-1">
            <Svg name="call" className="size-3 text-[#f76900]" />
            <span>{item?.userMobile}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestItem;
