// UserDetailRegistrationForm.jsx
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { postAPI } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/useAuth";
import Svg from "@/components/svg";

const schema = z.object({
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Confirm password does not match",
    path: ["confirmPassword"],
  });

export default function PasswordScreen({email,setIsOpen}) {
  const { setToken } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      newPassword: "",
      confirmPassword: "",
    },
  });
  const values = watch();
  const { mutate: submitPasswordMutation, isPending } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPI(`user/createPassword/${email}`, payload);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        setToken(data?.data?.accessToken);
        setIsOpen(false);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (values) => {
    const payload = {
      password: values.newPassword,
    };
    submitPasswordMutation(payload);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("newPassword")}
            id="newPassword"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer"
            placeholder=" "
          />
          <label
            htmlFor="newPassword"
            className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            password*
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <Svg name={showPassword ? "eyeSlash" : "eye"} className="size-5" />
          </button>
        </div>
        {errors.newPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.newPassword.message}
          </p>
        )}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            id="confirmPassword"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer"
            placeholder=" "
          />
          <label
            htmlFor="confirmPassword"
            className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Confirm Password*
          </label>
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <Svg
              name={showConfirmPassword ? "eyeSlash" : "eye"}
              className="size-5"
            />
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer w-full bg-[#f76900] text-white py-2 rounded-md hover:bg-[#e65d00] transition"
        >
          {isPending ? "Submitting..." : "Continue"}
        </button>
      </form>
    </>
  );
}
