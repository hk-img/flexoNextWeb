"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Svg from "@/components/svg";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

const ForgetPassword = ({setIsForgetPassword}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ✅ Submit handler
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  return (
    <>
      <button
        onClick={() => {
          setIsForgetPassword(false);
        }}
        className="py-5 cursor-pointer flex items-center text-[#f76900] font-medium"
      >
        <Svg name="leftArrow" className="size-4" />
        Back
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-5 flex flex-col gap-4"
      >
        <div>
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
        </div>
        <button
          type="submit"
          className="bg-[#f76900] text-white h-12 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          GET OTP
        </button>
      </form>
    </>
  );
};

export default ForgetPassword;
