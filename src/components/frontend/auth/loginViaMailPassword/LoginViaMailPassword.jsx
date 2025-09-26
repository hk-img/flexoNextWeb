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
        <div className=" pt-6">
          <button
            onClick={() => {
              setValue("isMobileTab", true, {
                shouldValidate: true,
              });
            }}
            className="p-3 cursor-pointer flex items-center text-[#f76900] font-medium"
          >
            <Svg name="leftArrow" className="size-[15px]" />
            Back
          </button>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pb-5 flex flex-col gap-4"
          >
           <div class="relative">
                <input type="text" id="Email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer" placeholder=" " />
                <label for="Email" class="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email*</label>
            </div>
            <div>
              <div class="relative">
                  <input  type={showPassword ? "text" : "password"} {...register("password")} id="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer" placeholder=" " />
                  <label for="password" class="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">password*</label>
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
            {/* <div>
              <input
                type="email"
                placeholder="Email*"
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
            </div> */}
            <div>
              <div className="relative">
                {/* <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  className={`h-12 px-4 border rounded-md w-full focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-orange-500"
                  }`}
                /> */}
                {/* <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  <Svg
                    name={showPassword ? "eyeSlash" : "eye"}
                    className="size-5"
                  />
                </button> */}
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
          </div>
        </>
      ) : (
        <ForgetPassword setIsForgetPassword={setIsForgetPassword}/>
      )}
    </div>
  );
};

export default LoginViaMailPassword;
