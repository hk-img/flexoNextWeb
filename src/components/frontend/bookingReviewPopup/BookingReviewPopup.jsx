import Svg from "@/components/svg";
import React from "react";

const BookingReviewPopup = ({setIsOpen,bookingId}) => {
  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center py-4 animate-fadeIn">
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
        <div className="relative w-full max-w-[600px] mx-3 rounded-sm bg-white p-6 overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn">
          <div className="px-5 pt-[10px] pb-3 flex items-center justify-between border-b border-[#DBDBDB]">
            <h2 className="md:text-[26px] text-[22px] font-medium">Write a review</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black cursor-pointer"
            >
              <Svg name="close" className="size-5" />
            </button>
          </div>
          <div className="p-5">
            <div className="space-y-[15px] mb-[30px] ">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="rating" className="accent-green" />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="rating" className="accent-green" />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="rating" className="accent-green" />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                </div>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="rating" className="accent-green" />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="rating" className="accent-green" />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label for="comments" className="block text-base font-normal text-black mb-2">Additional Comments</label>
              <textarea
                id="comments"
                rows="3"
                className="w-full border h-20 md:h-[100px] p-2 outline-none rounded-sm"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="book-again" className="accent-green" />
              <label for="book-again" className="text-sm text-[#343a40]">Yes I would book again.</label>
            </div>

            <div className="flex md:flex-row flex-col justify-between md:gap-5 gap-[10px]">
              <button
                type="button"
                className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-base border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px] px-10 "
              >
                NOT NOW
              </button>

              <button
                type="button"
                className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-base border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px] px-10 "
              >
                SUBMIT REVIEW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingReviewPopup;
