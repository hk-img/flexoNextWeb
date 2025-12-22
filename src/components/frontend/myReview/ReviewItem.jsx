import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import { getTypeOfSpaceByWorkSpace, slugGenerator } from "@/services/Comman";
import React, { useMemo } from "react";

const ReviewItem = ({ item }) => {
  const type = useMemo(
    () => item?.spaceType == "Coworking Café/Restaurant" ? "shortterm" : getTypeOfSpaceByWorkSpace(item?.spaceType || ""),
    [item]
  );
  const spaceTypeSlug = useMemo(() => item?.spaceType == "Coworking Café/Restaurant" ? "coworking-café-restaurant" : slugGenerator(item?.spaceType), [item]);
  const locationNameSlug = useMemo(() => slugGenerator(item?.spaceLocationName || ""), [item]);
  const cityNameSlug = useMemo(() => slugGenerator(item?.space_contact_city_name || ""), [item]);
  const spaceId = item?.spaceId;
  return (
    <>
      <div className="w-full flex md:flex-row flex-col items-start gap-y-4 justify-start  ">
        <div
          onClick={() => {
            let url = "";
            if (type == "coworking") {
              url = `/${item?.spaceSlug}`;
            } else {
              url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
            }
            window.open(`${url}`, "_blank");
          }}
          className="relative md:w-[158px] h-[135px] w-full rounded-[10px] shrink-0 overflow-hidden cursor-pointer"
        >
          <ImageWithFallback
            src={`${item?.base_url}/${item?.images?.[0]}`}
            width="160"
            height="135"
            alt="Coworking Space"
            className="object-cover w-full h-full"
            fallback="/images/defaultImg.webp"
          />
          {item?.spaceType && (
            <div
              className="absolute top-[15px] left-0 bg-[#f76900] text-white text-sm font-medium px-2.5 py-0.5 
              before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
              before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
              after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
              after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
            >
              {item?.spaceType}
            </div>
          )}
        </div>
        <div className="md:ml-[15px]">
          <h2
            onClick={() => {
              let url = "";
              if (type == "coworking") {
                url = `/${item?.spaceSlug}`;
              } else {
                url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
              }
              window.open(`${url}`, "_blank");
            }}
            className="text-lg 2xl:text-xl font-medium text-[#141414] cursor-pointer underline"
          >
            {item?.spacename}
          </h2>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-3">
              <ul className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Svg
                    key={i}
                    name={i < item?.rating ? "star" : "emptyStar"}
                    className="size-[18px] text-[#f76900]"
                  />
                ))}
              </ul>
              <div className=" flex justify-center items-center border border-[#F76900] text-[#000] text-sm font-semibold px-[10px] py-0.5 rounded-full">
                {item?.ratingsAvg}
              </div>
            </div>
            {item?.book_again == 1 && (
              <div className="flex justify-center items-center gap-1 text-base font-medium text-black">
                <Svg name="checkTic" className="size-[18px] text-[#f76900]" />
                Yes I would book again
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <p className="text-sm font-normal  text-[#808080] mb-0.5">
              {item?.Review}
            </p>
            <p className="text-xs font-normal  text-[#808080]">
              {new Date(item?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
