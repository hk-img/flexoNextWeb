"use client";
import React, { useMemo } from "react";
import { useAuth } from "@/context/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import BookingRequestItem from "./BookingRequestItem";

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
        <div className="container mx-auto px-[15px] py-10">
          <div className="flex flex-col">
            <div className="pt-[13px]">
              <h1 className="font-semibold text-[#141414] text-[26px]">
                Booking inquiries
              </h1>
            </div>
            <div className="flex flex-col gap-y-8 pt-[30px]">
              {bookingRequestData?.length > 0 ? (
                bookingRequestData?.map((item, index) => (
                 <BookingRequestItem key={index} item={item} />
                ))
              ) : (
                <>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBookingRequests;
