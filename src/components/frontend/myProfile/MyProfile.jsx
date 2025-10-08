"use client";
import React from "react";
import Svg from "@/components/svg";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const profileSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    mobile: z.string().min(10, "Valid Mobile Number is required"),
    country: z
      .object({
        dialCode: z.string().optional(),
      })
      .nullable()
      .optional(),
    companyName: z.string().optional(),
    email: z.string().email("Invalid email").optional(),
    gender: z.string().optional(),
    dob: z.string().optional(),
    billingCountry: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    pincode: z.string().optional(),
    gst: z.string().optional(),
    pan: z.string().optional(),
    billingAddress1: z.string().optional(),
    billingAddress2: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.mobile) {
      ctx.addIssue({
        path: ["mobile"],
        message: "Mobile number is required",
        code: z.ZodIssueCode.custom,
      });
    } else {
      const code = data.country?.dialCode ?? "";
      const numeric = data.mobile.replace(/\D/g, "");
      if (numeric.length <= code.length) {
        ctx.addIssue({
          path: ["mobile"],
          message: "Mobile number is required",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobile: "+91",
      country: {
        name: "India",
        dialCode: "91",
        countryCode: "in",
        format: "+.. .....-.....",
      },
      companyName: "",
      email: "",
      gender: "",
      dob: "",
      billingCountry: "India",
      state: "",
      city: "",
      pincode: "",
      gst: "",
      pan: "",
      billingAddress1: "",
      billingAddress2: "",
    },
  });
  const onSubmit = (values) => {};
  return (
    <>
      <div className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div className="w-[55%] mx-auto">
            <div>
              <h2 className="text-[22px] md:text-[26px] font-semibold leading-[1.6]">
                Profile Management
              </h2>
              <div className="mt-5">
                <div className=" flex items-center justify-center">
                  <div className="relative">
                    <Image
                      width={125}
                      height={125}
                      className="w-[125px] h-[125px] rounded-full"
                      src="/images/user_image_profile.webp"
                      alt=""
                    />
                    <div className="w-10 h-10 rounded-full bg-black  flex items-center justify-center absolute right-0 bottom-0">
                      <Svg name="camera" className=" text-white size-4 " />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-10 space-y-6"
                  >
                    {/* Basic Information */}
                    <div>
                      <h4 className="text-lg font-semibold mb-5">
                        Basic Information
                      </h4>

                      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {/* First Name */}
                        <div className="relative">
                          <input
                            {...register("firstName")}
                            type="text"
                            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border rounded-md focus:outline-none ${
                              errors.firstName
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-indigo-200"
                            }`}
                            placeholder=" "
                          />
                          <label className="absolute text-xs text-[#00000099] font-semibold top-2 left-2 bg-white px-2">
                            First Name *
                          </label>
                          {errors.firstName && (
                            <p className="text-red-500 text-[10px] absolute -bottom-4">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                          <input
                            {...register("lastName")}
                            type="text"
                            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border rounded-md focus:outline-none ${
                              errors.lastName
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-indigo-200"
                            }`}
                            placeholder=" "
                          />
                          <label className="absolute text-xs text-[#00000099] font-semibold top-2 left-2 bg-white px-2">
                            Last Name *
                          </label>
                        </div>

                        {/* Mobile */}
                        <div className="relative">
                          <Controller
                            name="mobile"
                            control={control}
                            render={({ field }) => (
                              <PhoneInput
                                country="in"
                                value={field.value}
                                onChange={(value, country) => {
                                  setValue("mobile", value, {
                                    shouldValidate: true,
                                  });
                                  setValue("country", country);
                                }}
                                enableSearch
                                countryCodeEditable={false}
                                inputProps={{ name: "mobile" }}
                                className="w-full [&_input]:!w-full [&_input]:!h-full h-[42px]"
                              />
                            )}
                          />
                          {errors.mobile && (
                            <p className="text-red-500 text-[10px] absolute -bottom-4">
                              {errors.mobile.message}
                            </p>
                          )}
                        </div>

                        {/* Company Name */}
                        <div className="relative">
                          <input
                            {...register("companyName")}
                            type="text"
                            placeholder=" "
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm border border-gray-300 rounded-md"
                          />
                          <label className="absolute text-xs text-[#00000099] font-semibold top-2 left-2 bg-white px-2">
                            Company Name
                          </label>
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <input
                            {...register("email")}
                            type="email"
                            disabled
                            placeholder=" "
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm border border-gray-300 rounded-md"
                          />
                          <label className="absolute text-xs text-[#00000099] font-semibold top-2 left-2 bg-white px-2">
                            Email
                          </label>
                        </div>

                        {/* Gender */}
                        <div className="relative">
                          <select
                            {...register("gender")}
                            className="block w-full text-sm border border-gray-300 rounded-md p-3"
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* DOB */}
                        <div className="relative">
                          <input
                            {...register("dob")}
                            type="date"
                            className="block w-full text-sm border border-gray-300 rounded-md p-3"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Billing Details */}
                    <div className="pt-4 border-t">
                      <h4 className="text-lg font-semibold mb-5">
                        Billing Details
                      </h4>

                      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="relative">
                          <input
                            {...register("billingCountry")}
                            type="text"
                            value="India"
                            disabled
                            className="block w-full text-sm border border-gray-300 rounded-md p-3 bg-gray-100"
                          />
                        </div>

                        <div className="relative">
                          <input
                            {...register("state")}
                            type="text"
                            placeholder=" "
                            className="block w-full text-sm border border-gray-300 rounded-md p-3"
                          />
                        </div>

                        <div className="relative">
                          <input
                            {...register("city")}
                            type="text"
                            placeholder=" "
                            className="block w-full text-sm border border-gray-300 rounded-md p-3"
                          />
                          <label className="absolute text-xs text-[#00000099] font-semibold top-2 left-2 bg-white px-2">
                            City
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            {...register("pincode")}
                            type="text"
                            placeholder=" "
                            className="block w-full text-sm border border-gray-300 rounded-md p-3"
                          />
                          <label className="absolute text-xs text-[#00000099] font-semibold top-2 left-2 bg-white px-2">
                            Pin Code
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            {...register("gst")}
                            type="text"
                            placeholder=" "
                            className="block w-full text-sm border border-gray-300 rounded-md p-3"
                          />
                          <label className="absolute text-xs text-[#00000099] font-semibold top-2 left-2 bg-white px-2">
                            GST No.
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            {...register("pan")}
                            type="text"
                            placeholder=" "
                            className="block w-full text-sm border border-gray-300 rounded-md p-3"
                          />
                          <label className="absolute text-xs text-[#00000099] font-semibold top-2 left-2 bg-white px-2">
                            PAN No.
                          </label>
                        </div>
                      </div>
                      <div className="relative mt-6">
                        <input
                          {...register("billingAddress1", {
                            required: "Billing address 1 is required",
                          })}
                          type="text"
                          placeholder="Enter Billing address"
                          className={`block w-full text-sm border rounded-md p-3 ${
                            errors.billingAddress1
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-300 focus:ring-indigo-200"
                          }`}
                        />
                        {errors.billingAddress1 && (
                          <p className="text-red-500 text-[10px] absolute -bottom-4">
                            {errors.billingAddress1.message}
                          </p>
                        )}
                      </div>

                      {/* Billing Address 2 */}
                      <div className="relative mt-6">
                        <input
                          {...register("billingAddress2")}
                          type="text"
                          placeholder="Enter Billing address 2"
                          className="block w-full text-sm border border-gray-300 rounded-md p-3"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer w-full bg-orange-500 text-white mt-6 font-semibold py-3 rounded-md hover:bg-orange-600 transition"
                    >
                      UPDATE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
