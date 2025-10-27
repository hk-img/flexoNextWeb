"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Svg from "@/components/svg";
import { postAPI } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import { ShowToast } from "@/utils/ShowToast";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

const ForgetPassword = ({ setIsForgetPassword,setIsShowOtp,setShowForgotPasswordOtp,setEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { mutate: forgetPasswordMutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPI("user/forgotPasswordSendEmail", payload);
      return response.data;
    },
    onSuccess: (data,payload) => {
      if (data.success) {
        ShowToast(data.message, "success");
        setIsShowOtp(true);
        setShowForgotPasswordOtp(true);
        setEmail(payload.email);
      } else {
        ShowToast(data.message, "error");
      }
    },
    onError: (error) => {
      ShowToast(error.message, "error");
    },
  });
  const onSubmit = (values) => {
    const payload = {
      email: values.email,
    };
    forgetPasswordMutate(payload);
  };
  return (
    <>
      <div className="p-5">
        <button
          onClick={() => {
            setIsForgetPassword(false);
          }}
          className="cursor-pointer flex items-center text-[#f76900] font-medium"
        >
          <Svg name="leftArrow" className="size-4" />
          Back
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-5 flex flex-col gap-4"
        >
          {/* <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`h-12 px-4 border rounded-md w-full focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-orange-500"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div> */}
          <div className="relative">
            <input
              {...register("email")}
              type="text"
              id="Email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer"
              placeholder=" "
            />
            <label
              htmlFor="Email"
              className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email*
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="cursor-pointer bg-[#f76900] text-white h-12 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            GET OTP
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
