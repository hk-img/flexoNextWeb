"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

const RegistrationScreenForGoogleRegister = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
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

  const onSubmit = (data) => {
    console.log("Form Submitted ✅", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex gap-4">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="First Name *"
            {...register("firstName")}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Last Name *"
            {...register("lastName")}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>
      <div>
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
          <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <input
          type="text"
          placeholder="Company Name"
          {...register("companyName")}
          className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Register Button */}
      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
      >
        REGISTER
      </button>
    </form>
  );
};

export default RegistrationScreenForGoogleRegister;
