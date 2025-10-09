"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Svg from "@/components/svg";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { useAuth } from "@/context/useAuth";
import ImageWithFallback from "@/components/ImageWithFallback";

const MyReview = () => {
  const { token } = useAuth();
  const { data: allReviews } = useQuery({
    queryKey: ["all-reviews", token],
    queryFn: async () => {
      const res = await getAPIAuthWithoutBearer("ratings/reviews", token);
      return res.data;
    },
    keepPreviousData: true,
    enabled: !!token,
  });
  const reviewData = useMemo(() => {
    return allReviews?.data?.reviews || [];
  }, [allReviews]);
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[#141414] text-[26px]">
              Reviews <span>({reviewData?.length})</span>
            </h1>
            <div className="flex flex-col gap-y-8">
              {reviewData?.length > 0 ? (
                reviewData?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-4 rounded-xl "
                  >
                    <Link
                      href=""
                      className="relative md:w-50 h-40 w-full rounded-lg shrink-0 overflow-hidden"
                    >
                      <ImageWithFallback
                        src={`${item?.base_url}/${item?.images?.[0]}`}
                        width="200"
                        height="150"
                        alt="Coworking Space"
                        className="object-cover w-full h-full"
                        fallback="/images/defaultImg.webp"
                      />
                      {item?.spaceType && (
                        <div
                          className="absolute top-2 left-0 bg-[#f76900] text-white text-sm font-medium px-3 py-1 
              before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
              before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
              after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
              after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
                        >
                          {item?.spaceType}
                        </div>
                      )}
                    </Link>
                    <div className="md:ml-6 space-y-2">
                      <h2 className="text-lg font-semibold text-[#141414]">
                        {item?.spacename}
                      </h2>
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
                        <div className="size-7 flex justify-center items-center border border-[#F76900] text-[#000] text-sm rounded-full">
                          {item?.ratingsAvg}
                        </div>
                        <div className="flex justify-center items-center gap-2 text-base font-medium text-black">
                          <Svg
                            name="checkTic"
                            className="size-[18px] text-[#f76900]"
                          />
                          Yes I would book again
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <p className="text-sm font-normal  text-[#808080]">
                          {item?.Review}
                        </p>
                        <p className="text-xs font-normal  text-[#808080]">
                          {new Date(item?.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>Reviews not found..</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyReview;
