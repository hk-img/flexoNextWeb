"use client";
import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { convertSlugToCapitalLetter } from "@/services/Comman";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { workSpace } from "@/services/Comman";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyBooking = () => {
  const [activeTab, setActiveTab] = useState("allBooking");
  const [spaceType, setSpaceType] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });
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

  console.log({ bookingData });

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
                    <div className="relative w-64">
                      <DatePicker
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
                        minDate={new Date()}
                        placeholderText="Start date — End date"
                        className="w-full h-12 px-3 focus:outline-none text-[#777] placeholder:text-[#777] text-sm font-semibold focus:ring-0 "
                      />
                      <Svg
                        name="calender"
                        className="absolute size-4 right-3 top-1/2 -translate-y-1/2 text-[#f76900] pointer-events-none"
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
                  <div
                    key={index}
                    className=" p-5 rounded-[10px] bg-white flex md:flex-row flex-col md:items-center items-start  justify-between "
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-3 md:space-y-0">
                      <div className="flex  md:flex-row flex-col gap-[15px] items-center">
                        <div div className="relative">
                          <div>
                            <ImageWithFallback
                              width={200}
                              height={150}
                              src={item?.images?.[0]}
                              alt="booking space image"
                              className="md:w-[200px] w-full h-[150px] rounded-lg object-cover"
                            />
                          </div>
                          <div
                            className="absolute top-0 left-0 bg-[#f76900] text-white text-sm px-2.5 py-0.5
                            before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0
                            before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px]
                            after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0
                            after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
                          >
                            {item?.spaceType}
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col text-gray-500 text-sm space-y-[5px]">
                            <h2 className="text-black text-lg 2xl:text-xl font-semibold underline">
                              {item?.spaceName}
                            </h2>
                            <div className="flex items-center gap-1 mb-[10px]">
                              <Svg
                                name="location2"
                                className="size-5 text-[#f76900]"
                              />
                              <h2 className="text-black text-sm 2xl:text-base font-medium ">
                                {convertSlugToCapitalLetter(
                                  item?.spaceLocation || ""
                                )}
                              </h2>
                            </div>
                            <div className="flex items-center gap-3 pb-[25px]">
                              <div className="flex items-center gap-1">
                                <Svg
                                  name="clock"
                                  className="size-[18px] text-[#f76900]"
                                />
                                <h3 className="text-black text-sm 2xl:text-base font-medium">
                                  {item?.totalHours} hrs min
                                </h3>
                              </div>
                              <span className="size-2.5 rounded-full bg-[#ddd]"></span>
                              <div className="flex items-center gap-1">
                                <Svg
                                  name="scaleRuler"
                                  className="size-[15px] text-[#f76900]"
                                />
                                <h3 className="text-black  text-sm 2xl:text-base font-medium">
                                  {item?.howManyPeopleInYourSpace} sqft
                                </h3>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1 border-r border-[#f76900] pr-4">
                                <Svg
                                  name="calender"
                                  className="size-[18px] text-[#f76900]"
                                />
                                <h3 className="text-black text-sm 2xl:text-base font-medium">
                                  {new Date(item?.startDate)
                                    ?.toLocaleDateString("en-GB")
                                    ?.replace(/\//g, "-")}
                                </h3>
                              </div>
                              <span className="border-r text-black text-sm font-medium border-[#f76900] pr-4">
                                {item?.dayCount} Day
                              </span>
                              <span className=" text-black text-sm 2xl:text-base font-medium">
                                {item?.totalHours} hrs
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="font-medium text-sm 2xl:text-base">
                                Booking Status :{" "}
                              </p>
                              {item?.bookingStatus === "pending" && (
                                <div className="flex items-center gap-1">
                                  <span>
                                    <Svg
                                      name="warning"
                                      className="size-[22px] text-[#0085ff]"
                                    />
                                  </span>
                                  <h6 className="text-[#0085ff] text-sm 2xl:text-base font-semibold">
                                    Pending Host Confirmation
                                  </h6>
                                </div>
                              )}
                              {item?.bookingStatus === "confirmed" && (
                                <div className="flex items-center gap-1">
                                  <span>
                                    <Svg
                                      name="checkFill"
                                      className="size-[22px] text-[#05ac34]"
                                    />
                                  </span>
                                  <h6 className="text-[#05ac34] text-sm 2xl:text-base font-semibold">
                                    confirmed
                                  </h6>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2  max-md:w-full">
                      {item?.bookingStatus == "confirmed" && (
                        <>
                          <button className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 text-nowrap uppercase tracking-[1px] px-10">
                            LEAVE A REVIEW
                          </button>
                          <button
                            className="flex items-center justify-center gap-2 cursor-pointer w-full border uppercase tracking-[1px] border-[#000e54] text-[#000e54]
                    2xl:text-base text-sm font-semibold md:py-[15px] py-[10px] rounded-[15px] text-nowrap"
                          >
                            <Svg
                              name="cloudDownload"
                              className="size-5 text-[#000e54]"
                            />
                            <span>INVOICE</span>
                          </button>
                        </>
                      )}
                      <Link
                        href=""
                        className="flex items-center justify-center cursor-pointer w-full px-7.5 bg-[#2c864f] 2xl:text-[15px] text-sm hover:bg-[#40a667] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-1 uppercase tracking-[1px] text-nowrap"
                      >
                        BOOKING DETAILS{" "}
                        <span>
                          <Svg name="rightArrow" className="size-[18px] " />
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="pt-[30px] pb-[55px]">
                  <p className="text-2xl font-medium text-[#141414]">
                    Booking not found..
                  </p>
                </div>
              )}
            </div>
            <div className="mt-4">
              {activeTab === "upcomingBooking" && (
                <p className="text-gray-700"></p>
              )}
              {activeTab === "pastBooking" && <p className="text-gray-700"></p>}
              {activeTab === "upcomingBooking" && (
                <p className="text-gray-700"></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooking;
