"use client";
import React from 'react'
import Svg from '@/components/svg'
import Image from 'next/image'
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
      },
    });
  return (
    <>
      <div className='relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]'>
        <div className='container mx-auto md:px-0 px-[15px] py-10'>
          <div className='w-[55%] mx-auto'>
            <div>
              <h2 className='text-[22px] md:text-[26px] font-semibold leading-[1.6]'>Profile Management</h2>
              <div className='mt-5'>
                <div className=' flex items-center justify-center'>
                  <div className='relative'>
                    <Image width={125} height={125} className='w-[125px] h-[125px] rounded-full' src="/images/user_image_profile.webp" alt="" />
                    <div className='w-10 h-10 rounded-full bg-black  flex items-center justify-center absolute right-0 bottom-0'>
                    <Svg name="camera" className=" text-white size-4 " />
                  </div>
                  </div>
                </div>
                <div className='mt-10'>
                  <div>
                    <h4 className='text-lg font-semibold 2xl:text-xl mb-5'> Basic Information </h4>
                  </div>
                  <div className='grid md:grid-cols-2 grid-cols-1 gap-6 '>
                    <div>
                      <label htmlFor="first-name" className='text-sm 2xl:text-base font-semibold'>First name <span className='text-[#dc3545]'>*</span> </label>
                      <input
                        type="first-name"
                        placeholder="Enter First Name"
                        className={`h-12 mt-1 px-4 border-2 border-[#e0e0e0] hover:border-black placeholder:text-sm rounded-[5px] w-full focus:outline-none focus:border-[#001740]`}
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className='text-sm 2xl:text-base font-semibold'>last name <span className='text-[#dc3545]'>*</span> </label>
                      <input
                        type="last-name"
                        placeholder="Enter last Name"
                        className={`h-12 mt-1 px-4 border-2 border-[#e0e0e0] hover:border-black placeholder:text-sm rounded-[5px] w-full focus:outline-none focus:border-[#001740]`}
                      />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfile
