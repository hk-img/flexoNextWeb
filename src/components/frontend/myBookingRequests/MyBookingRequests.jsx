"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import ImageWithFallback from "@/components/ImageWithFallback";

const MyBookingRequests = () => {
  const { token } = useAuth();
  const { data: allBookingRequests, isLoading } = useQuery({
    queryKey: ["all-booking-requests", token],
    queryFn: async () => {
      const res = await getAPIAuthWithoutBearer("user/viewInquiry", token);
      return res.data;
    },
    keepPreviousData: true,
    enabled: !!token,
  });
  const bookingRequestData = useMemo(() => {
    return allBookingRequests?.result?.inquiries || [];
  }, [allBookingRequests]);
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[#141414] text-[26px]">
              Booking inquiries
            </h1>
            <div className="flex flex-col gap-y-8">
              {bookingRequestData?.length > 0 ? (
                bookingRequestData?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-4 rounded-xl "
                  >
                    <Link
                      href=""
                      className="relative shrink-0 md:w-50 h-40 w-full rounded-lg overflow-hidden"
                    >
                      <ImageWithFallback
                        src={item?.images?.[0]}
                        width="200"
                        height="150"
                        alt="Coworking Space"
                        className="object-cover w-full h-full"
                        fallback="/images/default_image.webp"
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
                    <div className="md:ml-6 space-y-2 w-full">
                      <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
                        <span>
                          <Svg
                            name="location2"
                            className="size-4 text-[#f76900]"
                          />
                        </span>
                        <span>{item?.spaceAddress}</span>
                      </div>

                      <div className="flex flex-wrap items-center space-x-3 font-medium text-sm text-[#141414]">
                        <div className="flex items-center space-x-1">
                          <Svg
                            name="userHalf"
                            className="size-4 text-[#f76900]"
                          />
                          <span>1 people</span>
                        </div>
                        <span className="size-[10px] shrink-0 rounded-full bg-[#ddd]"></span>
                        <div className="flex items-center space-x-1">
                          <Svg name="mail" className="size-4 text-[#f76900]" />
                          <span>{item?.userEmail}</span>
                        </div>
                        <span className="size-[10px] shrink-0 rounded-full bg-[#ddd]"></span>
                        <div className="flex items-center space-x-1">
                          <Svg name="call" className="size-4 text-[#f76900]" />
                          <span>{item?.userMobile}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-[#141414] text-sm font-medium">
                  No booking requests found
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBookingRequests;
