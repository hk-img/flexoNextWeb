"use client";
import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useRef, useState } from "react";
import { workSpace } from "@/services/Comman";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingItem from "./BookingItem";
import BookingReviewPopup from "../bookingReviewPopup/BookingReviewPopup";

const MyBooking = () => {
  const datePickerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("allBooking");
  const [spaceType, setSpaceType] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [bookingId,setBookingId] = useState("");
  const { token, user } = useAuth();
  const { data: allBooking, isPending } = useQuery({
    queryKey: [
      "booking-data",
      activeTab,
      token,
      user?.id,
      spaceType,
      bookingStatus,
      date
    ],
    queryFn: async () => {
      const endpointMap = {
        allBooking: "user-booking-history",
        pastBooking: "previousBookings",
        upcomingBooking: "upcomingBookings",
      };
      let query = "";
      if (spaceType) {
        query = `&spaceType=${spaceType}`;
      }
      if (bookingStatus) {
        query = `&bookingStatus=${bookingStatus}`;
      }
      if(date?.startDate && date?.endDate) {
        const onlyStartDate = new Date(date.startDate);
        onlyStartDate.setMinutes(onlyStartDate.getMinutes() - onlyStartDate.getTimezoneOffset());
        const onlyStartDateStr = onlyStartDate.toISOString().split("T")[0];

        const onlyEndDate = new Date(date.endDate);
        onlyEndDate.setMinutes(onlyEndDate.getMinutes() - onlyEndDate.getTimezoneOffset());
        const onlyEndDateStr = onlyEndDate.toISOString().split("T")[0];

        query = `&startDate=${onlyStartDateStr}&endDate=${onlyEndDateStr}`;
      }
      const res = await getAPIAuthWithoutBearer(
        `user/${endpointMap[activeTab]}?userId=${user?.id}${query}`,
        token
      );
      return res.data;
    },
    enabled: !!token && !!user?.id,
    keepPreviousData: true,
  });

  const bookingData = useMemo(() => {
    return (
      allBooking?.bookings ||
      allBooking?.previousBookings ||
      allBooking?.upcomingBookings ||
      []
    );
  }, [allBooking]);

  return (
    <>
      <div className="bg-[#f9f9f9]">
        <div className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
          <div className="container mx-auto px-[15px] pt-[50px] ">
            <div className="flex flex-wrap pb-[30px]">
              <div className="md:w-2/5 w-full md:mb-0 mb-6">
                <div className="flex md:flex-row flex-col bg-white px-3 rounded-[15px] overflow-hidden">
                  {/* Tab 1 */}
                  <button
                    onClick={() => setActiveTab("allBooking")}
                    className={`flex-1 text-center py-[15px] text-[#777] text-sm 2xl:text-base cursor-pointer font-medium border-b-2 transition ${
                      activeTab === "allBooking"
                        ? " border-[#f76900]"
                        : " border-transparent"
                    }`}
                  >
                    All Booking
                  </button>

                  {/* Tab 2 */}
                  <button
                    onClick={() => setActiveTab("pastBooking")}
                    className={`flex-1 text-center py-[15px] text-[#777] text-sm 2xl:text-base cursor-pointer font-medium border-b-2 transition ${
                      activeTab === "pastBooking"
                        ? " border-[#f76900]"
                        : " border-transparent"
                    }`}
                  >
                    Past Booking
                  </button>

                  {/* Tab 3 */}
                  <button
                    onClick={() => setActiveTab("upcomingBooking")}
                    className={`flex-1 text-center py-[15px] text-[#777] text-sm 2xl:text-base cursor-pointer font-medium border-b-2 transition ${
                      activeTab === "upcomingBooking"
                        ? " border-[#f76900]"
                        : " border-transparent"
                    }`}
                  >
                    Upcoming Booking
                  </button>
                </div>
              </div>
              <div className="md:w-3/5 w-full md:px-6 px-0">
                <div className="flex md:flex-row flex-col  items-center gap-6">
                  <div className="bg-white rounded-[15px] w-full">
                    <div className="relative md:w-64 w-full">
                      <DatePicker
                        ref={datePickerRef}
                        selected={date?.startDate}
                        onChange={(dates) => {
                          const [start, end] = dates;
                          setDate((prev) => ({
                            ...prev,
                            startDate: start,
                            endDate: end,
                          }));
                        }}
                        startDate={date.startDate}
                        endDate={date.endDate}
                        selectsRange
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Start date — End date"
                        className="w-full h-12 px-3 focus:outline-none text-[#777] placeholder:text-[#777] text-sm font-semibold focus:ring-0 "
                      />
                      <Svg
                        onClick={() => {
                          if (datePickerRef.current) {
                            datePickerRef.current.setOpen(true);
                          } 
                        }}
                        name="calender"
                        className="cursor-pointer absolute size-4 right-3 top-1/2 -translate-y-1/2 text-[#f76900]"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-[15px] px-2 w-full">
                    <select
                      value={spaceType}
                      onChange={(e) => setSpaceType(e.target.value)}
                      className="w-full placeholder:text-[#777] text-black mt-1 text-sm rounded-sm focus:outline-none  h-12"
                    >
                      <option value="">Select space type</option>
                      {workSpace?.map((item, index) => (
                        <option key={index} value={item.workSpaceName}>
                          {item.workSpaceName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="bg-white rounded-[15px] px-2 w-full">
                    <select
                      value={bookingStatus}
                      onChange={(e) => setBookingStatus(e.target.value)}
                      className="w-full placeholder:text-[#777] text-black mt-1 text-sm rounded-sm focus:outline-none  h-12"
                    >
                      <option value="">Select Booking Status</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="pending_Host_Confirmation">
                        Pending Host Confirmation
                      </option>
                      <option value="pending_payment"> Pending payment</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:py-10 py-5 hidden">
              <h3 className="md:text-2xl text-xl font-medium ">
                Booking not found..
              </h3>
            </div>
            <div className="space-y-5">
              {bookingData?.length > 0 ? (
                bookingData?.map((item, index) => (
                  <BookingItem key={index} item={item} setShowReviewPopup={setShowReviewPopup} setBookingId={setBookingId}/>
                ))
              ) : (
                <div className="pt-[30px] pb-[55px]">
                  <p className="text-2xl font-medium text-[#141414]">
                    Booking not found..
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showReviewPopup && <BookingReviewPopup setIsOpen={setShowReviewPopup} isOpen={showReviewPopup} bookingId={bookingId}/>}
    </>
  );
};

export default MyBooking;
