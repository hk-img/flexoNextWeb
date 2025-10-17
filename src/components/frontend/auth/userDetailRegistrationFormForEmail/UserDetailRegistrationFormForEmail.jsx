// UserDetailRegistrationForm.jsx
"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { postAPI } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PasswordScreen from "./PasswordScreen";
import Svg from "@/components/svg";

const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    companyName: z.string().optional(),
    mobile: z.string().optional(),
    country: z
      .object({
        dialCode: z.string().optional(),
      })
      .nullable()
      .optional(),
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

export default function UserDetailRegistrationFormForEmail({
  otpVerified = true,
  email,
  setIsOpen,
}) {
  const [isConfirmPasswordScreen, setIsConfirmPasswordScreen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
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
    },
  });
  const values = watch();
  const { mutate: submitUserDetailsMutation, isPending } = useMutation({
    mutationFn: async (payload) => {
      const data = {
        firstName: payload?.firstName,
        lastName: payload?.lastName,
        mobile: payload?.mobile,
        phone_code: payload?.phone_code,
        companyName: payload?.companyName,
        regType: "email",
      }
      const response = await postAPI(`user/newemail/${payload?.email}`, data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        setIsConfirmPasswordScreen(true);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (values) => {
    const country_code = values.country ? `+${values.country.dialCode}` : "";
    const dialCode = values.country ? values.country.dialCode : "";
    const mobile = values.mobile.replace(dialCode, "").replace(/^\+/, "");
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      mobile: mobile,
      phone_code: country_code,
      companyName: values.companyName,
      email: email,
      regType: "email",
    };
    submitUserDetailsMutation(payload);
  };

  return (
    <>
      {isConfirmPasswordScreen ? (
        <PasswordScreen email={email} setIsOpen={setIsOpen}/>
      ) : (
        <>
        <div className="p-5">
          {otpVerified && (
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-3 bg-green-50 border border-[#05ac34] px-6 py-3 rounded-md shadow-sm">
                <div>
                  <Svg name="checkFill" className="size-7 text-[#05ac34]" />
                </div>
                <div className="text-[#141414] text-base font-medium">
                  OTP Verified Successfully
                </div>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-4">
              {/* First Name */}
              <div>
                <div className="relative">
                  <input
                  type="text"
                    {...register("firstName")}
                    id="firstName"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer ${
                        errors.firstName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"
                      }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                  First Name*
                  </label>
              </div>
              {errors.firstName && <p className="text-[#f44336] font-medium text-sm mt-1">{errors.firstName.message}</p>}
            </div>

              {/* Last Name */}
             <div>
            <div className="relative">
              <input
              type="text"
                 {...register("lastName")}
                id="lastName"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer ${
                    errors.lastName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"
                  }`}
                placeholder=" "
              />
              <label
                htmlFor="lastName"
                className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
              Last Name*
              </label>
          </div>
          {errors.lastName && <p className="text-[#f44336] font-medium text-sm mt-1">{errors.lastName.message}</p>}
        </div>
            

            {/* Email */}
            <label className="block">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">
                  Mobile <span className="text-[#f76900]">*</span>
                </span>
              </div>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    country="in"
                    value={field.value}
                    onChange={(value, country) => {
                      setValue("mobile", value, { shouldValidate: true });
                      setValue("country", country);
                    }}
                    enableSearch
                    countryCodeEditable={false} 
                    inputProps={{ name: "mobile" }}
                    className="w-full [&_input]:!w-full [&_input]:!h-full h-12 [&_.country-list]:overflow-x-hidden"
                  />
                )}
              />
              {/* {errors.mobile && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </span>
              )} */}
            </label>

            {/* Company Name */}
            <div>
            <div className="relative">
              <input
             type="text"
               {...register("companyName")}
                id="companyName"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer`}
                placeholder=" "
              />
              <label
                htmlFor="companyName"
                className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
             Company Name
              </label>
          </div>
        </div>
          </div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#f76900] text-white py-2 rounded-md hover:bg-[#e65d00] transition"
            >
              {isPending ? "Submitting..." : "Register"}
            </button>
          </form>
          </div>
        </>
      )}
    </>
  );
}
