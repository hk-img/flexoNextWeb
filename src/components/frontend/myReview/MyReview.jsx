"use client";
import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { useAuth } from "@/context/useAuth";
import ReviewItem from "./ReviewItem";

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
        <div className="container mx-auto px-[15px] py-10">
          <div className="flex flex-col">
            <div className="pt-[13px]">
              <h1 className="font-medium text-[#141414] text-[26px] leading-[1.6]">
                Reviews {reviewData?.length > 0 && <span className="text-[#A0A0A0]">({reviewData?.length})</span> } 
              </h1>
            </div>
            <div className="flex flex-col gap-y-8 mt-[50px]">
              {reviewData?.length > 0 ? (
                reviewData?.map((item, index) => (
                  <ReviewItem key={index} item={item} />
                ))
              ) : (
                <div className=" pb-[55px]">
                  <p className="text-2xl font-medium text-[#141414] leading-[1.6]">
                    No review found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyReview;
