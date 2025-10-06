import Svg from "@/components/svg";
import Image from "next/image";
import React from "react";

const ReviewSection = ({reviewData,rating=0,avgRating="5.0"}) => {
  return (
    <>
      <div id="reviews" className="py-6">
        <div className="flex flex-wrap md:items-center  md:gap-7 gap-3">
          <h2 className="text-xl font-medium text-[#141414] mb-2">
            Reviews & Ratings{" "}
            {
              reviewData?.length > 0 && (
                <span>({reviewData?.length})</span>
              )
            }
          </h2>
          <div>
            <button className="bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white px-5.5 py-2.5 rounded-[15px] font-semibold duration-500 transition flex items-center gap-2 uppercase tracking-[1px]">
              <Svg name="pencil" className="size-5" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>
        {reviewData?.length > 0 ? (
          <div>
            <div className="space-y-6 pt-5 md:pt-8 ">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[#f76900]">
                {[...Array(5)].map((_, i) => (
                    <Svg
                        key={i}
                        name={i < rating ? "star" : "emptyStar"}
                        className="size-5"
                    />
                ))}
                </div>
                <div className="border border-[#f76900] text-[#777] text-sm px-3 py-0.5 rounded-full">
                  {avgRating}
                </div>
              </div>
              {
                reviewData?.map((item,index)=>(
                    <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <Image
                            width={50}
                            height={50}
                            src={item?.profile_image || "/images/user_image.webp"}
                            alt=""
                        />
                        </div>

                        <div className="flex-1 space-y-1">
                        <div className="">
                            <h3 className="font-medium text-[#141414]">{item?.userName}</h3>
                            <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-1">
                            <div className="flex text-[#f76900] gap-1 text-sm">
                                {[...Array(5)].map((_, i) => (
                                    <Svg
                                        key={i}
                                        name={i < item?.rating ? "star" : "emptyStar"}
                                        className="size-5"
                                    />
                                ))}
                            </div>
                            <p className="mt-1 text-base font-medium text-black flex items-center gap-1">
                                <Svg
                                name="checkTic"
                                className="size-3 text-[#7f7f7f]"
                                />
                                Yes I would book again
                            </p>
                            </div>
                        </div>

                        <p className="text-[#777] text-sm">{item?.Review}</p>
                        <p className="text-[#777] text-xs">{new Date(item?.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                        </p>
                        </div>
                    </div>
                ))
              }
            </div>
          </div>
        ) : (
          <div className="pt-5 md:pt-10">
            <h3 className="text-[#343a40] text-lg">No Reviews Yet</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewSection;
