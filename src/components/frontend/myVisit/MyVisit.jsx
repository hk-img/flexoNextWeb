"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Svg from "@/components/svg";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { useAuth } from "@/context/useAuth";
import ImageWithFallback from "@/components/ImageWithFallback";

const MyVisit = () => {
  const { token } = useAuth();
  const { data: allVisits } = useQuery({
    queryKey: ["all-visits"],
    queryFn: async () => {
      const res = await getAPIAuthWithoutBearer("user/getVisit", token);
      return res.data;
    },
    keepPreviousData: true,
    enabled: !!token,
  });
  const visitData = useMemo(() => {
    return allVisits?.result?.visit || [];
  }, [allVisits]);

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
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[#141414] text-[26px]">
              Scheduled Visits
            </h1>
            <div className="flex flex-col gap-y-8">
              {visitData?.length > 0 ? (
                visitData?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-4 rounded-xl "
                  >
                    <Link
                      href=""
                      className="relative shrink-0 md:w-50 h-40 w-full rounded-lg overflow-hidden"
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
                      <div
                        className="absolute top-2 left-0 bg-[#f76900] text-white text-sm font-medium px-3 py-1 
              before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
              before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
              after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
              after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
                      >
                        {item?.spaceDetails?.spaceType}
                      </div>
                    </Link>
                    <div className="md:ml-6 space-y-2">
                      <h2 className="text-lg font-semibold text-[#141414] underline">
                        {item?.spaceName}
                      </h2>
                      <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
                        <span>
                          <Svg
                            name="location2"
                            className="size-4 text-[#f76900]"
                          />
                        </span>
                        <span>{item?.spaceLocation}</span>
                      </div>

                      <div className="flex items-center space-x-4 font-medium text-sm text-[#141414]">
                        {
                          item?.howManyPeople != "0" && (
                            <div className="flex items-center space-x-1">
                              <Svg
                                name="userHalf"
                                className="size-4 text-[#f76900]"
                              />
                              <span>{item?.howManyPeople} people</span>
                            </div>
                          )
                        }
                        <div className="flex items-center space-x-1">
                          <Svg
                            name="userHalf"
                            className="size-4 text-[#f76900]"
                          />
                          <span>{item?.spaceDetails?.spaceStatus}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Svg
                            name="scaleRuler"
                            className="size-4 text-[#f76900]"
                          />
                          <span>{item?.spaceDetails?.spacesqft}sqft</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center space-x-4 text-sm text-[#141414] font-medium pt-2">
                        <div className="flex items-center space-x-1">
                          <Svg
                            name="calender"
                            className="size-4 text-[#f76900]"
                          />
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
                        {
                          item?.spaceType && (
                            <>
                              <span className="text-[#f76900]">|</span>
                              <div>
                                <span className="text-[#141414] font-medium">
                                  Type of Space:
                                </span>
                                <span className="font-normal">
                                  {item?.spaceType}
                                </span>
                              </div>
                            </>
                          )
                        }
                        {item?.howManyPeople != "0" && (
                          <>
                            <span className="text-[#f76900]">|</span>
                            <div>
                              <span className="text-[#141414] font-medium">
                                No. Of People:
                              </span>
                              <span className="font-normal">
                                {item?.howManyPeople}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>Visits not found..</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyVisit;
