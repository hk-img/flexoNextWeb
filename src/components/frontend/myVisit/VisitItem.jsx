import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import {
  convertSlugToCapitalLetter,
  getTypeOfSpaceByWorkSpace,
  slugGenerator,
} from "@/services/Comman";
import React from "react";

const VisitItem = ({ item }) => {
  const type = getTypeOfSpaceByWorkSpace(item?.spaceType);
  const spaceTypeSlug = slugGenerator(item?.spaceType);
  const locationNameSlug = slugGenerator(item?.location_name || "");
  const cityNameSlug = slugGenerator(item?.contact_city_name || "");
  const spaceId = item?.id;
  function convertTo12Hour(time) {
    if (!time) return "";
    const [hourStr, minuteStr] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr || "00";
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  }
  return (
    <div className="w-full flex md:flex-row flex-col md:items-center items-start gap-y-4 justify-start bg-white p-5 rounded-xl ">
      <div
        onClick={() => {
          let url = "";
          if (type == "coworking") {
            url = `/${item?.slug}`;
          } else {
            url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
          }
          window.open(`${url}`, "_blank");
        }}
        className="cursor-pointer relative shrink-0 w-50 h-[150px]  rounded-[10px] overflow-hidden"
      >
        <ImageWithFallback
          width={200}
          height={150}
          src={item?.images?.[0]}
          alt="Coworking Space"
          title="Coworking Space"
          className="object-cover w-full h-full"
          fallback="/images/defaultImg.webp"
        />
        {item?.spaceDetails?.spaceType && (
          <div
            className="absolute top-[15px] left-0 bg-[#f76900] text-white text-sm font-medium px-2.5 py-0.5 
                                  before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
                                  before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
                                  after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
                                  after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
          >
            {item?.spaceDetails?.spaceType}
          </div>
        )}
      </div>
      <div className="md:ml-[15px] space-y-[5px]">
        <h2 className="2xl:text-xl text-lg font-semibold text-[#141414] underline">
          {item?.visitSpaceType == "longTerm"
            ? item?.spaceDetails?.spaceTitle
            : item?.spaceName}
        </h2>
        <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
          <span>
            <Svg name="location2" className="size-[15px] text-[#f76900]" />
          </span>
          <span>{convertSlugToCapitalLetter(item?.spaceLocation || "")}</span>
        </div>

        <div className="flex items-center space-x-2.5 font-medium text-sm text-[#141414]">
          {item?.visitSpaceType != "longterm" && (
            <div className="flex items-center space-x-1">
              <Svg name="userHalf" className="size-4 text-[#f76900]" />
              <span>
                {item?.spaceDetails?.howManyPeopleInYourSpace || 1} people
              </span>
            </div>
          )}
          {item?.visitSpaceType === "longterm" &&
            item?.spaceDetails?.spaceStatus && (
              <div className="flex items-center space-x-1">
                <Svg name="userHalf" className="size-4 text-[#f76900]" />
                <span>{item?.spaceDetails?.spaceStatus}</span>
              </div>
            )}
          {item?.visitSpaceType === "shortterm" && (
            <div className="flex items-center space-x-1">
              <ImageWithFallback
                width={200}
                height={200}
                src="https://flexospaces-images.s3.ap-south-1.amazonaws.com/img/clock-icon-orng.webp"
                className="object-cover w-full h-full"
                fallback="/images/defaultImg.webp"
              />
              <span>2 hr min</span>
            </div>
          )}
          <span className="h-[10px] w-[10px] rounded-full bg-[#ddd]"></span>
          <div className="flex items-center space-x-1">
            <Svg name="scaleRuler" className="size-4 text-[#f76900]" />
            <span>{item?.spaceDetails?.spacesqft} sqft</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center space-x-2 mt-5 mb-[10px] text-sm text-[#141414] font-medium ">
          <div className="flex items-center space-x-1">
            <Svg name="calender" className="size-4 text-[#f76900]" />
            <span>
              {new Date(item?.visitDate)
                ?.toLocaleDateString("en-GB")
                ?.replace(/\//g, "-")}
            </span>
          </div>
          <span className="text-[#f76900]">|</span>
          <div className="flex items-center space-x-1">
            <Svg name="clock" className="size-4 text-[#f76900]" />
            <span>{convertTo12Hour(item?.visitTime || "")}</span>
          </div>
          {item?.visitSpaceType === "coworking" && (
            <>
              <span className="text-[#f76900]">|</span>
              <div>
                <span className="text-[#141414] font-medium">
                  Type of Space :
                </span>{" "}
                <span className="font-normal">{item?.coworkingSpaceType}</span>
              </div>
            </>
          )}
          {item?.visitSpaceType === "coworking" &&
            item?.howManyPeople != "0" && (
              <>
                <span className="text-[#f76900]">|</span>
                <div>
                  <span className="text-[#141414] font-medium">
                    No. Of People :
                  </span>{" "}
                  <span className="font-normal">{item?.howManyPeople}</span>
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default VisitItem;
