"use client";
import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { useAuth } from "@/context/useAuth";
import ReviewItem from "./ReviewItem";

const MyReview = () => {
  const { token } = useAuth();
  const [visibleCount, setVisibleCount] = useState(5);
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
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleReviews = reviewData?.slice(0, visibleCount) || [];
  const hasMore = reviewData?.length > visibleCount;
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto px-[15px] py-10">
          <div className="flex flex-col">
            <div className="pt-[13px]">
              <h1 className="font-medium text-[#141414] text-[26px] leading-[1.6]">
                Reviews{" "}
                {reviewData?.length > 0 && (
                  <span className="text-[#A0A0A0]">({reviewData?.length})</span>
                )}
              </h1>
            </div>
            <div className="flex flex-col gap-y-8 mt-[50px]">
              {reviewData?.length > 0 ? (
                <>
                  {visibleReviews?.map((item, index) => (
                    <ReviewItem key={index} item={item} />
                  ))}
                  {hasMore && (
                    <div className="pt-4 text-center">
                      <button
                        onClick={handleLoadMore}
                        className="text-[#f76900] hover:text-[#ff7c52] text-sm font-semibold underline transition"
                      >
                        Load more reviews
                      </button>
                    </div>
                  )}
                </>
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
