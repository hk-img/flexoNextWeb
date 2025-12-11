import Svg from "@/components/svg";
import Link from "next/link";
import React, { useMemo } from "react";
import {
  convertSlugToCapitalLetter,
  getTypeOfSpaceByWorkSpace,
  slugGenerator,
} from "@/services/Comman";
import ImageWithFallback from "@/components/ImageWithFallback";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { useAuth } from "@/context/useAuth";
import { ShowToast } from "@/utils/ShowToast";

const bookingItem = ({ item, setShowReviewPopup, setBookingId }) => {
  const { token } = useAuth();
  const type = useMemo(() => getTypeOfSpaceByWorkSpace(item?.spaceType || ""), [item]);
  const spaceTypeSlug = useMemo(() => slugGenerator(item?.spaceType), [item]);
  const locationNameSlug = useMemo(() => slugGenerator(item?.location_name || ""), [item]);
  const cityNameSlug = useMemo(() => slugGenerator(item?.contact_city_name || ""), [item]);
  const spaceId = item?.spaceId;
  const handleInvoiceClick = async () => {
    try {
      const res = await getAPIAuthWithoutBearer(
        `user/downloadBookingInvoice/${item?.id}`,
        token
      );
      const data = res.data;
      if (data?.success) {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${data?.pdfFilePath}`;
        window.open(url, "_blank");
      }
    } catch (error) {
      ShowToast(error.message,"error");
    }
  };
  return (
    <>
      <div className=" p-5 rounded-[10px] bg-white flex md:flex-row flex-col md:items-center items-start  justify-between ">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-3 md:space-y-0 w-full">
          <div className="flex  md:flex-row flex-col gap-[15px] items-center w-full">
            <div
              onClick={() => {
                let url = "";
                if (type == "coworking") {
                  url = `/${item?.slug}`;
                } else {
                  url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                }
                window.open(`${url}`, "_blank");
              }}
              className="relative cursor-pointer"
            >
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
                <h2
                  onClick={() => {
                    let url = "";
                    if (type == "coworking") {
                      url = `/${item?.slug}`;
                    } else {
                      url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                    }
                    window.open(`${url}`, "_blank");
                  }}
                  className="cursor-pointer text-black text-lg 2xl:text-xl font-semibold underline"
                >
                  {item?.spaceName}
                </h2>
                <div className="flex items-center gap-1 mb-[10px]">
                  <Svg name="location2" className="size-5 text-[#f76900]" />
                  <h2 className="text-black text-sm 2xl:text-base font-medium ">
                    {convertSlugToCapitalLetter(item?.spaceLocation || "")}
                  </h2>
                </div>
                <div className="flex items-center gap-3 md:pb-[25px] pb-3">
                  {item?.spaceType !== "Coworking Space" && (
                    <>
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
                    </>
                  )}
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
                    {item?.ofDays || item?.dayCount} Day
                  </span>
                  <div className="text-black text-sm 2xl:text-base font-medium">
                    <p className="  ">
                      <span>
                        {item?.spaceType == "Coworking Space"
                          ? item?.noOfGuest || 1
                          : item?.totalHours || 2}{" "}
                      </span>{" "}
                      {item?.spaceType == "Coworking Space" ? "Guest" : "hrs"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 ">
                  <p className="font-medium text-sm 2xl:text-base">
                    Booking Status :{" "}
                  </p>
                  {(item?.bookingStatus === "pending" ||
                    (item?.bookingStatus === "confirmed" &&
                      item?.paymentSuccess === 0)) && (
                    <div className="flex items-center gap-1">
                      <span>
                        <Svg
                          name="warning"
                          className="size-[22px] text-[#0085ff]"
                        />
                      </span>
                      {item?.bookingStatus === "confirmed" &&
                        item?.paymentSuccess === 0 && (
                          <h6 className="text-[#0085ff] text-sm 2xl:text-base font-semibold">
                            Pending Payment
                          </h6>
                        )}
                      {item?.bookingStatus === "pending" &&
                        item?.isInstant === "0" && (
                          <h6 className="text-[#0085ff] text-sm 2xl:text-base font-semibold">
                            Pending Host Confirmation
                          </h6>
                        )}
                      {item?.bookingStatus === "pending" &&
                        item?.isInstant === "1" && (
                          <h6 className="text-[#0085ff] text-sm 2xl:text-base font-semibold">
                            Payment Pending
                          </h6>
                        )}
                    </div>
                  )}
                  {(item?.bookingStatus === "confirmed" ||
                    item?.bookingStatus === "confirm") &&
                    item?.paymentSuccess === 1 && (
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
                  {item?.bookingStatus === "cancelled" && (
                    <div className="flex items-center gap-1">
                      <span>
                        <Svg
                          name="warning"
                          className="size-[22px] text-[#0085ff]"
                        />
                      </span>
                      <h6 className="text-[#0085ff] text-sm 2xl:text-base font-semibold">
                        Cancelled
                      </h6>
                    </div>
                  )}
                  {item?.bookingStatus === "rejected" && (
                    <div className="flex items-center gap-1">
                      <span>
                        <Svg
                          name="cancel"
                          className="size-[22px] text-[#ff0000]"
                        />
                      </span>
                      <h6 className="text-[#ff0000] text-sm 2xl:text-base font-semibold">
                        Rejected
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 md:mt-0 mt-4  max-md:w-full">
          {item?.bookingStatus == "confirmed" && (
            <>
              <button
                onClick={() => {
                  setShowReviewPopup(true);
                  setBookingId(item?.id);
                }}
                className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 text-nowrap uppercase tracking-[1px] px-10"
              >
                LEAVE A REVIEW
              </button>
              <button
                onClick={handleInvoiceClick}
                className="flex items-center justify-center gap-2 cursor-pointer w-full border uppercase tracking-[1px] border-[#000e54] text-[#000e54]
                          min-[1400px]:text-base text-sm font-semibold md:py-[15px] py-[10px] rounded-[15px] text-nowrap"
              >
                <Svg name="cloudDownload" className="size-5 text-[#000e54]" />
                <span>INVOICE</span>
              </button>
            </>
          )}
          <Link
            href={`/booking-detail/${item?.id}`}
            className="flex items-center justify-center cursor-pointer w-full px-7.5 bg-[#2c864f] 2xl:text-[15px] text-sm hover:bg-[#40a667] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-1 uppercase tracking-[1px] text-nowrap"
          >
            BOOKING DETAILS{" "}
            <span>
              <Svg name="rightArrow" className="size-[18px] " />
            </span>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default bookingItem;
