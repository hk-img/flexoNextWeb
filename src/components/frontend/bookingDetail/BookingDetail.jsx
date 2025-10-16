"use client";
import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import {
  convertSlugToCapitalLetter,
  getTypeOfSpaceByWorkSpace,
} from "@/services/Comman";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import BookingReviewPopup from "../bookingReviewPopup/BookingReviewPopup";
import { toast } from "sonner";

const BookingDetail = ({ bookingId }) => {
  const { token } = useAuth();
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [showReviewPopup, setShowReviewPopup] = useState(false);

  const { data: bookingDetail } = useQuery({
    queryKey: ["bookingDetail", bookingId],
    queryFn: async () => {
      const res = await getAPIAuthWithoutBearer(
        `user/user-single-booking/${bookingId}`,
        token
      );
      return res.data;
    },
    enabled: !!bookingId && !!token,
  });
  const bookingData = useMemo(() => {
    return bookingDetail?.booking?.booking?.[0] || [];
  }, [bookingDetail]);
  const type = getTypeOfSpaceByWorkSpace(bookingData?.spaceType || "");
  console.log({ bookingData, type });

  function convertTo12Hour(time) {
    if (!time) return "";
    const [hourStr, minuteStr] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr || "00";
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  }

  const handleInvoiceClick = async () => {
    try {
      const res = await getAPIAuthWithoutBearer(
        `user/downloadBookingInvoice/${bookingData?.id}`,
        token
      );
      const data = res.data;
      if (data?.success) {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${data?.pdfFilePath}`;
        window.open(url, "_blank");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  function formatTimestampToDate(timestamp) {
    if (!timestamp || isNaN(timestamp)) return "";

    const date = new Date(timestamp * 1000);

    if (isNaN(date.getTime())) return "";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  function formatTimestampToTime(timestamp) {
    if (!timestamp || isNaN(timestamp)) return "";
    const date = new Date(timestamp * 1000);

    if (isNaN(date.getTime())) return "";

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${ampm}`;
  }

  useEffect(() => {
    if (bookingDetail) {
      const paymentDetails = JSON.parse(bookingData?.payment_detail);
      console.log({ paymentDetails });
      setPaymentDetails(paymentDetails);
    }
  }, [bookingData]);

  function getDurationInHours(startTime, endTime) {
    if (!startTime || !endTime) return 0;
    if (startTime == "00:00" && endTime == "00:00") return 24;
    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);
    const startTotalMinutes = startH * 60 + startM;
    const endTotalMinutes = endH * 60 + endM;
    let durationMinutes = endTotalMinutes - startTotalMinutes;
    if (durationMinutes < 0) durationMinutes += 24 * 60;
    const decimalHours = durationMinutes / 60;
    return Math.round(decimalHours * 100) / 100;
  }
  return (
    <>
      <div className="bg-[#f9f9f9]">
        <div className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
          <div className="container mx-auto px-[15px] py-10">
            <div className="flex flex-wrap">
              <div className="lg:w-2/3 w-full lg:pr-[15px] pr-0 pt-[10px]">
                {bookingData?.bookingStatus === "pending" && (
                  <div className="bg-[#ecf5ef] rounded-[5px] p-5 flex items-center gap-2.5 ">
                    <div className="px-[15px]">
                      <div className=" text-white w-12 h-12 rounded-full  flex items-center justify-center text-2xl">
                        <Svg
                          name="clockFill"
                          className="size-12 shrink-0 text-[#f76900]"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg 2xl:text-xl font-bold text-[#343a40] ">
                        Request Sent. Pending Host Confirmation!
                      </h2>
                      <p className="2xl:text-base text-sm leading-[1.2]">
                        Your booking request has been sent to the host. Once the
                        host accepts your booking request, you will receive a
                        payment link via email. If your requested date and time
                        cannot be accommodated, you will be promptly notified.
                      </p>
                    </div>
                  </div>
                )}
                {bookingData?.bookingStatus === "confirmed" && (
                  <div className="bg-[#ecf5ef] rounded-[5px] p-5 flex items-center gap-2.5 ">
                    <div className="">
                      <div className=" text-white rounded-full  flex items-center justify-center text-2xl">
                        <Svg
                          name="checkTic"
                          className="size-[18px] shrink-0 text-[#05ac34]"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg 2xl:text-xl font-bold text-[#05ac34] ">
                        Booking confirmed !
                      </h2>
                      <p className="2xl:text-base text-sm leading-[1.2]">
                        You will receive details about the space via email and
                        whatsapp.
                      </p>
                    </div>
                  </div>
                )}
                {bookingData?.bookingStatus === "cancel" && (
                  <div className="bg-[#ecf5ef] rounded-[5px] p-5 flex items-center gap-2.5 ">
                    <div className="px-[15px]">
                      <div className=" text-white w-12 h-12 rounded-full  flex items-center justify-center text-2xl">
                        <Svg
                          name="clockFill"
                          className="size-12 shrink-0 text-[#f76900]"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg 2xl:text-xl font-bold text-[#343a40] ">
                        Booking {bookingData?.bookingStatus} !
                      </h2>
                      <p className="2xl:text-base text-sm leading-[1.2]">
                        Your request to update booking has been cancelled
                      </p>
                    </div>
                  </div>
                )}
                {bookingData?.bookingStatus === "rejected" && (
                  <div className="bg-[#ecf5ef] rounded-[5px] p-5 flex items-center gap-2.5 ">
                    <div>
                      <div className=" text-white rounded-full  flex items-center justify-center text-2xl">
                        <Svg
                          name="closeRoundFill"
                          className="size-12 shrink-0 text-red-600"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg 2xl:text-xl font-bold text-red-600 ">
                        Booking {bookingData?.bookingStatus}!
                      </h2>
                      <p className="2xl:text-base text-sm leading-[1.2]">
                        Your request to update booking has been declined.
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex gap-6 mt-4.5 pb-5 border-b border-gray-200">
                  <div className="bg-white rounded-lg p-6 flex items-center w-full">
                    <div className=" flex md:flex-row flex-col gap-4 w-full">
                      <ImageWithFallback
                        width={200}
                        height={150}
                        src={bookingData?.images?.[0]}
                        alt="booking space image"
                        className=" min-w-[165px] min-h-full max-h-[270px] rounded-lg"
                        fallback="/images/default_image.webp"
                      />
                      <div className="flex flex-col space-y-2 justify-center">
                        <h3 className="text-[26px] font-medium text-black">
                          {bookingData?.spaceName}
                        </h3>
                        <p className="text-sm text-[#888888] 2xl:text-base">
                          Booking ID :{" "}
                          <span className="font-medium text-black">
                            {bookingData?.bookingId}
                          </span>
                        </p>

                        <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
                          <span>
                            <Svg
                              name="location2"
                              className="size-4 text-[#f76900] shrink-0"
                            />
                          </span>
                          <span>
                            {convertSlugToCapitalLetter(
                              bookingData?.location_name || ""
                            )}
                          </span>
                        </div>

                        <div className="flex flex-wrap space-y-2 items-center space-x-4 font-medium text-sm text-[#141414]">
                          <div className="flex items-center space-x-1">
                            <Svg
                              name="userHalf"
                              className="size-4 text-[#f76900] shrink-0"
                            />
                            <span>
                              {bookingData?.howManyPeopleInYourSpace} people
                            </span>
                          </div>
                          {bookingData?.spaceType != "Coworking Space" && (
                            <>
                              <span className="size-[10px] rounded-full bg-[#ddd]"></span>
                              <div className="flex items-center space-x-1">
                                <Svg
                                  name="clock"
                                  className="size-4 text-[#f76900] shrink-0"
                                />
                                <span>
                                  {bookingData.minimum_hours == 0 ||
                                  bookingData.minimum_hours == null
                                    ? "2"
                                    : bookingData?.minimum_hours / 60}{" "}
                                  hrs min
                                </span>
                              </div>
                            </>
                          )}
                          <span className="size-[10px] rounded-full bg-[#ddd]"></span>
                          <div className="flex items-center space-x-1">
                            <Svg
                              name="scaleRuler"
                              className="size-4 text-[#f76900] shrink-0"
                            />
                            <span>{bookingData?.spacesqft} sqft</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col space-y-2  max-md:w-full">
                        {bookingData?.bookingStatus == "confirmed" && (
                          <>
                            <button
                              onClick={() => setShowReviewPopup(true)}
                              className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px] px-10"
                            >
                              LEAVE A REVIEW
                            </button>
                            <button
                              className="flex items-center justify-center gap-2 cursor-pointer w-full  uppercase tracking-[1px] hover:bg-[#1d37b5] text-white bg-[#000e54]
                2xl:text-base text-sm font-semibold md:py-[15px] py-[10px] rounded-[15px] text-nowrap"
                              onClick={handleInvoiceClick}
                            >
                              <Svg
                                name="cloudDownload"
                                className="size-5 text-white"
                              />
                              <span>INVOICE</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-[30px]">
                  <h2 className="text-lg 2xl:text-xl mb-6 font-medium">
                    Booking Details
                  </h2>
                  <div className="flex-col flex space-y-[10px] mb-4">
                    <div className="flex flex-wrap items-center gap-2 text-[#777] text-sm 2xl:text-base">
                      <span>Space Category :</span>
                      <span className="font-semibold text-[#000]">
                        {bookingData?.spaceType}
                      </span>
                    </div>
                    {bookingData?.spaceType == "Coworking Space" && (
                      <>
                        <div className="flex flex-wrap items-center gap-2 text-[#777] text-sm 2xl:text-base">
                          <span>No of Days :</span>
                          <span className="font-semibold text-[#000]">
                            {bookingData?.ofDays}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-[#777] text-sm 2xl:text-base">
                          <span>No of Guest :</span>
                          <span className="font-semibold text-[#000]">
                            {bookingData?.noOfGuest}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  {type == "coworking" && (
                    <>
                      {bookingData?.bookingPeriods?.length > 0 ? (
                        <div className="">
                          <div className="flex flex-wrap items-center space-x-4">
                            <label className="block text-[#777] 2xl:text-base text-sm font-medium mb-2">
                              Date :
                            </label>
                            {bookingData?.bookingPeriods?.map((item, index) => (
                              <div
                                key={index}
                                className="bg-white border px-4 border-[#ddd] rounded-[5px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black"
                              >
                                {new Date(item)
                                  ?.toLocaleDateString("en-GB")
                                  ?.replace(/\//g, "-")}
                              </div>
                            ))}
                          </div>
                          <div className="mt-4">
                            <label className="block text-[#777] 2xl:text-base text-sm font-medium mb-2">
                              Custom Message
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[5px] py-[15px] px-[30px] text-sm 2xl:text-base font-medium text-black">
                              {bookingData?.message}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-[15px]">
                          <div>
                            <label className="block text-[#777] 2xl:text-base text-sm font-medium mb-2">
                              Date
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                              {new Date(bookingData?.startDate)
                                ?.toLocaleDateString("en-GB")
                                ?.replace(/\//g, "-")}
                            </div>
                          </div>
                          <div>
                            <label className="block text-[#777] 2xl:text-base  text-sm font-medium mb-2">
                              Start Time
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                              {convertTo12Hour(bookingData?.startTime || "")}
                            </div>
                          </div>
                          <div>
                            <label className="block text-[#777] text-[16px] font-medium mb-2">
                              End Time
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                              {convertTo12Hour(bookingData?.endTime || "")}
                            </div>
                          </div>
                          <div>
                            <label className="block text-[#777] text-[16px] font-medium mb-2">
                              No of Hours
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                              {bookingData?.totalHours}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {type == "shortterm" && (
                    <>
                      {bookingData?.bookingPeriods?.length > 0 ? (
                        <div className="">
                          {bookingData?.bookingPeriods?.map((item, index) => (
                            <div
                              key={index}
                              className="flex max-md:flex-wrap items-center space-x-4 w-full"
                            >
                              <div className="w-full">
                                <label className="block text-[#777] 2xl:text-base text-sm font-medium mb-2">
                                  Date :
                                </label>
                                <div className="bg-white border px-4 border-[#ddd] rounded-[5px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black">
                                  {new Date(item?.startDate)
                                    ?.toLocaleDateString("en-GB")
                                    ?.replace(/\//g, "-")}
                                </div>
                              </div>
                              <div className="w-full">
                                <label className="block text-[#777] 2xl:text-base  text-sm font-medium mb-2">
                                  Start Time
                                </label>
                                <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                                  {convertTo12Hour(item?.startTime || "")}
                                </div>
                              </div>
                              <div className="w-full">
                                <label className="block text-[#777] text-[16px] font-medium mb-2">
                                  End Time
                                </label>
                                <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                                  {convertTo12Hour(item?.endTime || "")}
                                </div>
                              </div>
                              <div className="w-full">
                                <label className="block text-[#777] text-[16px] font-medium mb-2">
                                  No of Hours
                                </label>
                                <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                                  {getDurationInHours(item?.startTime,item?.endTime) == 0 ? 24 : getDurationInHours(item?.startTime,item?.endTime)}
                                </div>
                              </div>
                            </div>
                          ))}
                          {bookingData?.message && (
                            <div className="mt-4">
                              <label className="block text-[#777] 2xl:text-base text-sm font-medium mb-2">
                                Custom Message
                              </label>
                              <div className="bg-white border border-[#ddd] rounded-[5px] py-[15px] px-[30px] text-sm 2xl:text-base font-medium text-black">
                                {bookingData?.message}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-[15px]">
                          <div>
                            <label className="block text-[#777] 2xl:text-base text-sm font-medium mb-2">
                              Date
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                              {new Date(bookingData?.startDate)
                                ?.toLocaleDateString("en-GB")
                                ?.replace(/\//g, "-")}
                            </div>
                          </div>
                          <div>
                            <label className="block text-[#777] 2xl:text-base  text-sm font-medium mb-2">
                              Start Time
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                              {convertTo12Hour(bookingData?.startTime || "")}
                            </div>
                          </div>
                          <div>
                            <label className="block text-[#777] text-[16px] font-medium mb-2">
                              End Time
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                              {convertTo12Hour(bookingData?.endTime || "")}
                            </div>
                          </div>
                          <div>
                            <label className="block text-[#777] text-[16px] font-medium mb-2">
                              No of Hours
                            </label>
                            <div className="bg-white border border-[#ddd] rounded-[10px] py-[15px]  flex items-center justify-center text-sm 2xl:text-base font-medium text-black px-10">
                              {bookingData?.totalHours}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="lg:w-1/3 w-full lg:pl-[15px] pl-0">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg 2xl:text-xl font-medium text-black mb-4">
                    Payment Summary
                  </h3>
                  <div className="border-y border-[#ddd] pt-2">
                    <div className="flex justify-between py-2 text-sm 2xl:text-base">
                      <span className="text-[#777]">Base Price</span>
                      <span className="text-gray-900 font-medium">
                        {bookingData?.subtotal} INR
                      </span>
                    </div>
                    <div className="flex justify-between py-2 text-sm 2xl:text-base">
                      <span className="text-[#777]">GST (18%)</span>
                      <span className="text-gray-900 font-medium">
                        {bookingData?.gst} INR
                      </span>
                    </div>
                    <div className="flex justify-between border-y text-sm 2xl:text-base border-gray-200 mt-2 py-3">
                      <span className="text-black font-semibold">Total</span>
                      <span className="text-black font-semibold">
                        {bookingData?.bookingPrice} INR
                      </span>
                    </div>
                    {paymentDetails && (
                      <>
                        <div className="flex justify-between py-2 text-sm 2xl:text-base">
                          <span className="text-[#777]">Payment Method</span>
                          <span className="text-gray-900 font-medium">
                            {paymentDetails?.method}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 text-sm 2xl:text-base">
                          <span className="text-[#777]">Payment Id</span>
                          <span className="text-gray-900 font-medium">
                            {paymentDetails?.id}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 text-sm 2xl:text-base">
                          <span className="text-[#777]">Txn Date & Time</span>
                          <div>
                            <p className="text-gray-900 font-medium">
                              {formatTimestampToDate(
                                paymentDetails?.created_at || ""
                              )}
                            </p>
                            <p className="text-[#888888] text-xs text-end">
                              {formatTimestampToTime(
                                paymentDetails?.created_at || ""
                              )}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-6 text-sm 2xl:text-base text-black">
                  Need assistance with your booking? Contact us Monday through
                  Saturday, 10 AM to 6:30 PM.
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Svg name="call" className="size-[15px] text-black" />
                      <Link
                        href=""
                        className="text-[#f76900] text-sm font-medium"
                      >
                        {" "}
                        +91-9513392400
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Svg name="mail" className="size-[15px] text-black" />
                      <Link
                        href=""
                        className="text-[#f76900] text-sm font-medium"
                      >
                        {" "}
                        support@flexospaces.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showReviewPopup && (
        <BookingReviewPopup
          setIsOpen={setShowReviewPopup}
          isOpen={showReviewPopup}
          bookingId={bookingId}
        />
      )}
    </>
  );
};

export default BookingDetail;
