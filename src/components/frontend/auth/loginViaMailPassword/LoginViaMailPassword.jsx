"use client";
import Svg from "@/components/svg";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgetPassword from "./ForgetPassword";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginViaMailPassword = ({ setIsOpen, setValue }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="relative w-full max-w-[600px] rounded-sm bg-white p-6 shadow-xl">
      <div className="px-5 py-4 border-b border-[#dbdbdb] flex items-center justify-between">
        <h2 className="text-xl font-medium">Login</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-black cursor-pointer"
        >
          <Svg name="close" className="size-5" />
        </button>
      </div>
      {!isForgetPassword ? (
        <>
          <button
            onClick={() => {
              setValue("isMobileTab", true, {
                shouldValidate: true,
              });
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  className={`h-12 px-4 border rounded-md w-full focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-orange-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  <Svg
                    name={showPassword ? "eyeSlash" : "eye"}
                    className="size-5"
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-between text-sm font-medium">
              <button
                onClick={() => setIsForgetPassword(true)}
                type="button"
                className="cursor-pointer text-[#f76900]"
              >
                Forgot Password
              </button>
            </div>

            <button
              type="submit"
              className="bg-[#f76900] text-white h-12 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Login
            </button>
          </form>
        </>
      ) : (
        <ForgetPassword setIsForgetPassword={setIsForgetPassword}/>
      )}
    </div>
  );
};

export default LoginViaMailPassword;
