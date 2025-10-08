"use client";
import React, { useEffect, useMemo } from "react";
import Svg from "@/components/svg";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "@/context/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getApi, postAPIAuthWithoutBearer } from "@/services/ApiService";
import dynamic from "next/dynamic";
import { toast } from "sonner";
const Select = dynamic(() => import("react-select"), { ssr: false });

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Pefer not to say" },
];

const profileSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    mobile: z.string().min(10, "Valid Mobile Number is required"),
    country: z
      .object({
        dialCode: z.union([z.string(), z.number()]).optional(),
      })
      .nullable()
      .optional(),
    companyName: z.string().optional(),
    email: z.string().email("Invalid email").optional(),
    gender: z.string().optional(),
    dob: z.string().optional(),
    billingCountry: z.number().optional(),
    state: z.number().optional(),
    city: z.number().optional(),
    pincode: z.string().optional(),
    gst: z.string().optional(),
    pan: z.string().optional(),
    billingAddress1: z.string().min(1, "Billing address is required"),
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
  const { token, user } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobile: "91",
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
      billingCountry: "",
      state: "",
      city: "",
      pincode: "",
      gst: "",
      pan: "",
      billingAddress1: "",
      billingAddress2: "",
    },
  });
  const values = watch();
  console.log({ values, errors }, "Rthrtyhrtyrty");
  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        mobile: user.mobile ? `${user.phone_code}${user.mobile}` : "",
        country: {
          dialCode: user.phone_code || "91",
        },
        companyName: user.companyName || "",
        email: user.email || "",
        gender: user.gender || "",
        dob: user.dob || "",
        billingCountry: user.billingCountry || "",
        state: user.state || "",
        city: user.city || "",
        pincode: user.pincode || "",
        gst: user.gst || "",
        pan: user.pan || "",
        billingAddress1: user.billingAddress1 || "",
        billingAddress2: user.billingAddress2 || "",
      });
    }
  }, [user, reset]);
  const { data: allCountry } = useQuery({
    queryKey: ["allCountry"],
    queryFn: async () => {
      const res = await getApi("user/getAllCountries");
      return res.data;
    },
  });
  const countryData = useMemo(() => {
    return (
      allCountry?.map((item) => ({
        label: item?.country_name,
        value: item?.id,
      })) || []
    );
  }, [allCountry]);

  const { data: allState } = useQuery({
    queryKey: ["allState"],
    queryFn: async () => {
      const res = await getApi(
        `user/getAllStatesById?countryId=${values.billingCountry}`
      );
      return res.data;
    },
    enabled: !!values.billingCountry,
  });
  const stateData = useMemo(() => {
    return (
      allState?.map((item) => ({ label: item?.name, value: item?.id })) || []
    );
  }, [allState]);

  const { data: allCity } = useQuery({
    queryKey: ["allCity"],
    queryFn: async () => {
      const res = await getApi(`user/getAllCities?stateId=${values?.state}`);
      return res.data;
    },
    enabled: !!values.state,
  });
  const cityData = useMemo(() => {
    return (
      allCity?.map((item) => ({ label: item?.name, value: item?.id })) || []
    );
  }, [allCity]);

  useEffect(() => {
    setValue("state", "");
    setValue("city", "");
    setValue("pincode", "");
  }, [values.billingCountry]);
  useEffect(() => {
    setValue("city", "");
    setValue("pincode", "");
  }, [values.state]);
  useEffect(() => {
    setValue("pincode", "");
  }, [values.city]);

  const { mutate: updateProfileMutate } = useMutation({
    mutationFn: async (payload) => {
      const res = await postAPIAuthWithoutBearer(
        "user/updateProfile",
        payload,
        token
      );
      return res.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (values) => {
    const country_code = values.country ? `+${values.country.dialCode}` : "";
    const dialCode = values.country ? values.country.dialCode : "";
    const mobile = values.mobile.replace(dialCode, "").replace(/^\+/, "");
    const payload = {
      phone_code: country_code,
      mobile: mobile,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      dateOfBirth: values.dob,
      companyName: values.companyName,
      panNumber: values.pan,
      gstNumber: values.gst,
      billingAddress: values.billingAddress1,
      country_id: values.billingCountry,
      state_id: values.state,
      city_id: values.city,
      pincode: values.pincode,
      billingAddress2: values.billingAddress2,
    };
    console.log({ payload }, "rtrtrtrt");
    updateProfileMutate(payload);
  };
  return (
    <>
      <div className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div className="md:w-[55%] w-full mx-auto">
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
                    <label
                      htmlFor="imageUpload"
                      className="absolute bottom-0 right-0 w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:shadow-[5px_5px_15px_#00000080] hover:scale-[1.2] transition-all duration-300"
                    >
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        className="hidden"
                      />
                      <Svg name="camera" className=" text-white size-4 " />
                    </label>
                  </div>
                </div>
                <div className="mt-10">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-10 space-y-10"
                  >
                    <div>
                      <h4 className="text-lg font-semibold mb-5">
                        Basic Information
                      </h4>

                      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {/* First Name */}
                        <div className="relative">
                          <label className=" text-sm text-black font-semibold bg-white px-2">
                            First Name <span className="text-[#dc3545]">*</span>
                          </label>
                          <input
                            {...register("firstName")}
                            type="text"
                            placeholder="Enter first name"
                            className={`block px-2.5 h-12 w-full text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none placeholder:text-[#777] placeholder:font-medium ${
                              errors.firstName
                                ? "border-red-500 focus:ring-red-200"
                                : "border-[#e0e0e0] focus:ring-indigo-200"
                            }`}
                          />

                          {errors.firstName && (
                            <p className="text-red-500 text-[10px] absolute -bottom-4">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                          <label className=" text-sm text-black font-semibold px-2">
                            Last Name <span className="text-[#dc3545]">*</span>
                          </label>
                          <input
                            {...register("lastName")}
                            type="text"
                            placeholder="Enter last name"
                            className={`block px-2.5 h-12 w-full text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none placeholder:text-[#777] placeholder:font-medium ${
                              errors.lastName
                                ? "border-red-500 focus:ring-red-200"
                                : "border-[#e0e0e0] focus:ring-indigo-200"
                            }`}
                          />
                        </div>

                        {/* Mobile */}
                        <div className="relative">
                          <label className=" text-sm text-black font-semibold px-2">
                            Mobile <span className="text-[#dc3545]">*</span>
                          </label>
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
                                className="w-full [&_input]:!w-full mt-1 border-[#e0e0e0] focus:border-[#3f51b5] rounded-sm focus:outline-none [&_input]:!h-full h-12"
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
                          <label className=" text-sm text-black font-semibold px-2">
                            Company Name
                          </label>
                          <input
                            {...register("companyName")}
                            type="text"
                            placeholder="Enter company name"
                            className="block px-2.5 h-12 w-full placeholder:text-[#777] placeholder:font-medium border-[#e0e0e0] text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none"
                          />
                        </div>

                        {/* Email */}
                        <div className="relative md:col-span-2">
                          <label className=" text-sm text-black font-semibold px-2">
                            Enter Email
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            disabled
                            placeholder=" Emter email"
                            className="block px-2.5 h-12 border-[#e0e0e0] placeholder:text-[#777] placeholder:font-medium w-full text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none"
                          />
                        </div>

                        {/* Gender */}
                        <div className="relative">
                          <label className="text-sm text-black font-semibold px-2">
                            Gender
                          </label>

                          <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => {
                              const handleChange = (selectedOption) => {
                                field.onChange(selectedOption?.value || "");
                              };

                              const selectedValue = genderOptions.find(
                                (option) => option.value === field.value
                              );

                              return (
                                <Select
                                  value={selectedValue || null}
                                  onChange={handleChange}
                                  options={genderOptions}
                                  placeholder="Select Gender"
                                  classNamePrefix="react-select"
                                  className="mt-1 text-sm"
                                  styles={{
                                    control: (base, state) => ({
                                      ...base,
                                      borderColor: state.isFocused
                                        ? "#3f51b5"
                                        : "#e0e0e0",
                                      boxShadow: "none",
                                      height: "48px",
                                      borderRadius: "4px",
                                      paddingLeft: "2px",
                                    }),
                                    placeholder: (base) => ({
                                      ...base,
                                      color: "#777",
                                      fontWeight: 500,
                                    }),
                                    singleValue: (base) => ({
                                      ...base,
                                      color: "#000",
                                    }),
                                    menu: (base) => ({
                                      ...base,
                                      zIndex: 50,
                                    }),
                                  }}
                                />
                              );
                            }}
                          />
                        </div>

                        {/* DOB */}
                        <div className="relative">
                          <label className=" text-sm text-black font-semibold px-2">
                            Date of birth
                          </label>
                          <input
                            {...register("dob")}
                            type="date"
                            className="border-[#e0e0e0] w-full placeholder:text-[#777] placeholder:font-medium text-black mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-12"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Billing Details */}
                    <div className="pt-8 border-t border-[#ddd]">
                      <h4 className="text-lg font-semibold mb-5">
                        Billing Details
                      </h4>

                      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="relative">
                          <label className="text-sm text-black font-semibold px-2">
                            Country
                          </label>

                          <Controller
                            name="billingCountry"
                            control={control}
                            render={({ field }) => {
                              const handleChange = (selectedOption) => {
                                field.onChange(selectedOption?.value || ""); // ✅ store only country ID
                              };

                              const selectedValue =
                                countryData?.find(
                                  (option) => option.value === field.value
                                ) || null;

                              return (
                                <Select
                                  value={selectedValue}
                                  onChange={handleChange}
                                  options={countryData}
                                  placeholder="Select Country"
                                  classNamePrefix="react-select"
                                  className="mt-1 text-sm"
                                  styles={{
                                    control: (base, state) => ({
                                      ...base,
                                      borderColor: state.isFocused
                                        ? "#3f51b5"
                                        : "#e0e0e0",
                                      boxShadow: "none",
                                      height: "48px",
                                      borderRadius: "4px",
                                      paddingLeft: "2px",
                                    }),
                                    placeholder: (base) => ({
                                      ...base,
                                      color: "#777",
                                      fontWeight: 500,
                                    }),
                                    singleValue: (base) => ({
                                      ...base,
                                      color: "#000",
                                    }),
                                    menu: (base) => ({
                                      ...base,
                                      zIndex: 50,
                                    }),
                                  }}
                                />
                              );
                            }}
                          />
                        </div>
                        <div className="relative">
                          <label className="text-sm text-black font-semibold px-2">
                            State
                          </label>

                          <Controller
                            name="state"
                            control={control}
                            render={({ field }) => {
                              const handleChange = (selectedOption) => {
                                field.onChange(selectedOption?.value || "");
                              };

                              const selectedValue =
                                stateData?.find(
                                  (option) => option.value === field.value
                                ) || null;

                              return (
                                <Select
                                  value={selectedValue}
                                  onChange={handleChange}
                                  options={stateData}
                                  placeholder="Select State"
                                  classNamePrefix="react-select"
                                  className="mt-1 text-sm"
                                  styles={{
                                    control: (base, state) => ({
                                      ...base,
                                      borderColor: state.isFocused
                                        ? "#3f51b5"
                                        : "#e0e0e0",
                                      boxShadow: "none",
                                      height: "48px",
                                      borderRadius: "4px",
                                      paddingLeft: "2px",
                                    }),
                                    placeholder: (base) => ({
                                      ...base,
                                      color: "#777",
                                      fontWeight: 500,
                                    }),
                                    singleValue: (base) => ({
                                      ...base,
                                      color: "#000",
                                    }),
                                    menu: (base) => ({
                                      ...base,
                                      zIndex: 50, // ✅ keeps dropdown above modals
                                    }),
                                  }}
                                />
                              );
                            }}
                          />
                        </div>

                        <div className="relative">
                          <label className="text-sm text-black font-semibold px-2">
                            City
                          </label>

                          <Controller
                            name="city"
                            control={control}
                            render={({ field }) => {
                              const handleChange = (selectedOption) => {
                                field.onChange(selectedOption?.value || "");
                              };

                              const selectedValue =
                                cityData?.find(
                                  (option) => option.value === field.value
                                ) || null;

                              return (
                                <Select
                                  value={selectedValue}
                                  onChange={handleChange}
                                  options={cityData}
                                  placeholder="Select City"
                                  classNamePrefix="react-select"
                                  className="mt-1 text-sm"
                                  styles={{
                                    control: (base, state) => ({
                                      ...base,
                                      borderColor: state.isFocused
                                        ? "#3f51b5"
                                        : "#e0e0e0",
                                      boxShadow: "none",
                                      height: "48px",
                                      borderRadius: "4px",
                                      paddingLeft: "2px",
                                    }),
                                    placeholder: (base) => ({
                                      ...base,
                                      color: "#777",
                                      fontWeight: 500,
                                    }),
                                    singleValue: (base) => ({
                                      ...base,
                                      color: "#000",
                                    }),
                                    menu: (base) => ({
                                      ...base,
                                      zIndex: 50, // ✅ ensures dropdown shows above modals
                                    }),
                                  }}
                                />
                              );
                            }}
                          />
                        </div>

                        <div className="relative">
                          <label className=" text-sm text-black font-semibold px-2">
                            Pincode
                          </label>
                          <input
                            {...register("pincode")}
                            type="text"
                            placeholder="Enter pincode "
                            className="border-[#e0e0e0] w-full placeholder:text-[#777] placeholder:font-medium text-black mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-12"
                          />
                        </div>

                        <div className="relative">
                          <label className=" text-sm text-black font-semibold px-2">
                            GST no.
                          </label>
                          <input
                            {...register("gst")}
                            type="text"
                            placeholder=" Enter GST no."
                            className="border-[#e0e0e0] w-full placeholder:text-[#777] placeholder:font-medium text-black mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-12"
                          />
                        </div>

                        <div className="relative">
                          <label className="text-sm text-black font-semibold px-2">
                            PAN No.
                          </label>
                          <input
                            {...register("pan")}
                            type="text"
                            placeholder="Enter PAN no. "
                            className="border-[#e0e0e0] w-full placeholder:text-[#777] placeholder:font-medium text-black mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-12"
                          />
                        </div>
                      </div>
                      <div className="relative mt-6">
                        <label className="text-sm text-black font-semibold px-2">
                          Billing address 1{" "}
                          <span className="text-[#dc3545]">*</span>
                        </label>
                        <input
                          {...register("billingAddress1", {
                            required: "Billing address 1 is required",
                          })}
                          type="text"
                          placeholder="Enter Billing address "
                          className={`border-[#e0e0e0] w-full placeholder:text-[#777] placeholder:font-medium text-black mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-12 ${
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
                        <label className="text-sm text-black font-semibold px-2">
                          Billing address{" "}
                        </label>
                        <input
                          {...register("billingAddress2")}
                          type="text"
                          placeholder="Enter Billing address 2"
                          className="border-[#e0e0e0] w-full placeholder:text-[#777] placeholder:font-medium text-black mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-12"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
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
