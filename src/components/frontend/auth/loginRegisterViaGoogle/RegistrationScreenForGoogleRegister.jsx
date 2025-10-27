"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useMutation } from "@tanstack/react-query";
import { postAPI } from "@/services/ApiService";
import { useAuth } from "@/context/useAuth";
import { ShowToast } from "@/utils/ShowToast";

const registerSchema = z
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

const RegistrationScreenForGoogleRegister = ({ googleDetails,setIsOpen }) => {
  const {setToken} = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: googleDetails?.first_name,
      lastName: googleDetails?.last_name,
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

  const { mutate: submitMutate,isPending } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPI(
        `/user/newemail/${googleDetails?.email}`,
        payload
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data.success) {
        ShowToast(data.message, "success");
        setToken(data.result.accessToken);
        setIsOpen(false);
      } else {
        ShowToast(data.message, "error");
      }
    },
    onError: (error) => {
      ShowToast(error.message, "error");
    },
  });

  const onSubmit = (values) => {
    const country_code = values.country ? `+${values.country.dialCode}` : "";
    const dialCode = values.country ? values.country.dialCode : "";
    const mobile = values.mobile.replace(dialCode, "").replace(/^\+/, "");
    const payload = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      mobile: mobile,
      phone_code: country_code,
      email: googleDetails?.email,
      companyName: values?.companyName,
      regType: "google",
    };
    submitMutate(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="relative">
          <input
            {...register("firstName")}
            type="text"
            id="first-name"
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
            }}
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border border-[#0000001f] rounded-md p-3  focus:outline-none focus:ring-1 focus:border-[#3f51b5] peer ${
              errors.firstName
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-indigo-200"
            }`}
            placeholder=" "
            disabled
          />
          <label
            for="first-name"
            className="absolute text-xs text-[#00000099] font-semibold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            First Name *
          </label>
          {errors.firstName && (
            <p className="text-red-500 text-[10px] absolute -bottom-4">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            {...register("lastName")}
            type="text"
            id="last-name"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border border-[#0000001f] rounded-md p-3  focus:outline-none focus:ring-1 focus:border-[#3f51b5] peer ${
              errors.lastName
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-indigo-200"
            }`}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
            }}
            placeholder=" "
            disabled={googleDetails?.last_name ? true : false}
          />
          <label
            for="last-name"
            className="absolute text-xs text-[#00000099] font-semibold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            last Name *
          </label>
          {errors.lastName && (
            <p className="text-red-500 text-[10px] absolute -bottom-4">
              {errors.lastName.message}
            </p>
          )}
        </div>

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
                className="w-full [&_input]:!w-full [&_input]:!h-full h-[42px] [&_.country-list]:overflow-x-hidden"
              />
            )}
          />
          {errors.mobile && (
            <p className="text-red-500 text-[10px] absolute -bottom-4">
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            {...register("companyName")}
            type="text"
            id="company-name"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border border-[#0000001f] rounded-md p-3  focus:outline-none focus:ring-1 focus:border-[#3f51b5] peer ${
              errors.companyName
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-indigo-200"
            }`}
            placeholder=" "
          />
          <label
            for="company-name"
            className="absolute text-xs text-[#00000099] font-semibold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Company Name
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer w-full bg-orange-500 text-white mt-4 font-semibold py-3 rounded-md hover:bg-orange-600 transition"
      >
        {isPending ? "Submitting..." : "REGISTER"}
      </button>
    </form>
  );
};

export default RegistrationScreenForGoogleRegister;
