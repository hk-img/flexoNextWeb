"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Svg from "@/components/svg";
import { toast } from "sonner";
import { postAPI } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  mobile: z.string().min(1, "Mobile Number is required"),
  message: z.string().min(5, "Message should be at least 5 characters."),
});

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });
  const { mutate: submitMutate, isLoading: submitLoading } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPI("queries/add", payload);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        reset();
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (values) => {
    const payload = {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      message: values.message,
    };
    submitMutate(payload);
  };
  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <div className="border border-[#eee] bg-[#f9f9f9] rounded-[6px] flex items-center gap-4 px-[19px] py-[15px]">
            <Svg name="user2" className="size-[18px] text-[#ff6600] shrink-0" />
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Your Name*"
                  className="w-full text-[13px] text-[#74746F] font-medium placeholder:text-[#74746F] focus:outline-none"
                />
              )}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="border border-[#eee] bg-[#f9f9f9] rounded-[6px] flex items-center gap-4 px-[19px] py-[15px]">
            <Svg name="mail" className="size-[18px] text-[#ff6600] shrink-0" />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email Address*"
                  className="w-full text-[13px] text-[#74746F] font-medium placeholder:text-[#74746F] focus:outline-none"
                />
              )}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <div className="border border-[#eee] bg-[#f9f9f9] rounded-[6px] flex items-center gap-4 px-[19px] py-[15px]">
            <Svg name="phone" className="size-[18px] text-[#ff6600] shrink-0" />
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  inputMode="numeric"
                  maxLength={10}
                  onChange={(e) => {
                    let value = e.target.value.replace(/[^0-9]/g, "");
                    if (value.length > 10) value = value.slice(0, 10);
                    field.onChange(value);
                  }}
                  placeholder="Mobile*"
                  className="w-full text-[13px] text-[#74746F] font-medium placeholder:text-[#74746F] focus:outline-none"
                />
              )}
            />
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                className="w-full h-[200px] resize-none border border-[#eee] font-medium bg-[#f9f9f9] rounded-[6px] py-[25px] px-[19px] text-sm focus:outline-none text-[13px] text-[#74746F] placeholder:text-[#74746F]"
                placeholder="Your Message :"
              />
            )}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitLoading}
          className="cursor-pointer w-fit min-w-[180px] bg-[#ff6600] hover:bg-[#2C3B5A] text-white rounded-[5px] p-[15px] text-lg font-medium transition"
        >
          {submitLoading ? (
            "Sending..."
          ) : (
            <>
              Send <Svg name="rightLongArrow" className="size-[22px] inline" />
            </>
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
