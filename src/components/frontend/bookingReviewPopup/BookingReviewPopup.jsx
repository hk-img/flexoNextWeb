import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";
import { set } from "zod";

const BookingReviewPopup = ({ setIsOpen, bookingId }) => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
    bookAgain: true,
  });
  const [errors, setErrors] = useState({
    rating: "",
  });
  console.log({ formData, errors });
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    setErrors((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  const { mutate: submitMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `/ratings/rate/${bookingId}`,
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.result?.success) {
        toast.success(data?.result?.message);
        setIsOpen(false);
      } else {
        toast.error(data?.result?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = () => {
    let error = {};
    if (!formData.rating) {
      error.rating = "Please select a rating";
    }
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }
    const payload = {
      rating: formData.rating,
      additionalComments: formData.comment,
      book_again: formData.bookAgain
    };
    submitMutate(payload);
  };
  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center py-4 animate-fadeIn">
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
        <div className="relative w-full max-w-[600px] mx-3 rounded-sm bg-white p-6 overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn">
          <div className="px-5 pt-[10px] pb-3 flex items-center justify-between border-b border-[#DBDBDB]">
            <h2 className="md:text-[26px] text-[22px] font-medium">
              Write a review
            </h2>
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
                <input
                  type="radio"
                  name="rating"
                  value={"5"}
                  onChange={handleRadioChange}
                  className="accent-green"
                />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={"4"}
                  onChange={handleRadioChange}
                  className="accent-green"
                />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={"3"}
                  onChange={handleRadioChange}
                  className="accent-green"
                />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                </div>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={"2"}
                  onChange={handleRadioChange}
                  className="accent-green"
                />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={"1"}
                  onChange={handleRadioChange}
                  className="accent-green"
                />
                <div className="text-[#f76900] text-xl flex gap-1.5 items-center">
                  <Svg name="star" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                  <Svg name="emptyStar" className="size-[18px]" />
                </div>
              </label>
              {errors.rating && (
                <span className="text-red-600">{errors.rating}</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="comments"
                className="block text-base font-normal text-black mb-2"
              >
                Additional Comments
              </label>
              <textarea
                id="comments"
                rows="3"
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                className="w-full border h-20 md:h-[100px] p-2 outline-none rounded-sm"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                id="book-again"
                className="accent-green"
                checked={formData.bookAgain}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    bookAgain: e.target.checked,
                  }))
                }
              />
              <label htmlFor="book-again" className="text-sm text-[#343a40]">
                Yes I would book again.
              </label>
            </div>

            <div className="flex md:flex-row flex-col justify-between md:gap-5 gap-[10px]">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-base border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px] px-10 "
              >
                NOT NOW
              </button>

              <button
                type="button"
                onClick={handleSubmit}
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
