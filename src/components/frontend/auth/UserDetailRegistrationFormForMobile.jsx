// UserDetailRegistrationForm.jsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { postAPI } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/useAuth";
import Svg from "@/components/svg";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  companyName: z.string().optional(),
});

export default function UserDetailRegistrationFormForMobile({ otpVerified = true, mobile,setIsOpen }) {
    const {setToken} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
    },
  });

  const { mutate: submitUserDetailsMutation,isPending } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPI("user/loginWithMobilePopup", payload);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        setToken(data.result.accessToken);
        setIsOpen(false);
      }else{
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (values) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      companyName: values.companyName,
      mobile: mobile.mobile,
      phone_code: mobile.phone_code,
    }
    submitUserDetailsMutation(payload);
  };

  return (
    <>
    <div className="py-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          {/* <label className="block">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700">First Name <span className="text-[#f76900]">*</span></span>
            </div>
            <input
              type="text"
              {...register("firstName")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.firstName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"
              }`}
            />
            {errors.firstName && <p className="text-[#f44336] font-medium text-sm mt-1">{errors.firstName.message}</p>}
          </label> */}
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

          {/* Last Name */}
          {/* <label className="block">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700">Last Name <span className="text-[#f76900]">*</span></span>
            </div>
            <input
              type="text"
              {...register("lastName")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.lastName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"
              }`}
            />
            {errors.lastName && <p className="text-[#f44336] font-medium text-sm mt-1">{errors.lastName.message}</p>}
          </label> */}

           <div>
            <div className="relative">
              <input
              type="email"
                {...register("email")}
                id="email"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer ${
                    errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"
                  }`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
             Email*
              </label>
          </div>
          {errors.email && <p className="text-[#f44336] font-medium text-sm mt-1">{errors.email.message}</p>}
        </div>
       

          {/* Email */}
          {/* <label className="block">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700">Email <span className="text-[#f76900]">*</span></span>
            </div>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"
              }`}
            />
            {errors.email && <p className="text-[#f44336] font-medium text-sm mt-1">{errors.email.message}</p>}
          </label> */}
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
             Company Name*
              </label>
          </div>
        </div>

          {/* Company Name */}
          {/* <label className="block">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700">Company Name</span>
            </div>
            <input
              type="text"
              {...register("companyName")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </label> */}
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
  );
}
