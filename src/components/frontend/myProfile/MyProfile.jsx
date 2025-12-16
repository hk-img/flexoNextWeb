"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Svg from "@/components/svg";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "@/context/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { components as RSComponents } from "react-select";
import {
  getApi,
  postAPIAuthWithoutBearer,
  postAPIFormDataWithoutBearer,
} from "@/services/ApiService";
import dynamic from "next/dynamic";
import ImageWithFallback from "@/components/ImageWithFallback";
import { ShowToast } from "@/utils/ShowToast";
const Select = dynamic(() => import("react-select"), { ssr: false });

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <RSComponents.DropdownIndicator {...props}>
      <Svg
        name="arrowDropDown"
        className={`size-5 text-[#777] transition-transform duration-200 ${
          menuIsOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </RSComponents.DropdownIndicator>
  );
};

const ClearIndicator = (props) => {
  return (
    <RSComponents.ClearIndicator {...props}>
      <div className="cursor-pointer text-gray-500 hover:text-[#f76900] transition-colors duration-200">
        ×
      </div>
    </RSComponents.ClearIndicator>
  );
};

const customStyles = {
  container: (base) => ({
    ...base,
    width: "260px",
  }),
  control: (base, state) => ({
    ...base,
    borderRadius: "15px",
    backgroundColor: "transparent",
    borderColor: "transparent",
    minHeight: "44px",
    height: "44px",
    width: "100%",
    boxShadow: "none",
    outline: "none",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
  menu: (base) => ({
    ...base,
    marginTop: 0,
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    outline: "none",
    overflow: "hidden",
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "160px",
    overflowY: "auto",
    paddingRight: "4px",
    className:
      " [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "black",
    fontWeight: "600",
    fontSize: "14px",
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: "0.95rem",
    color: "#333",
  }),
  option: (base, state) => ({
    ...base,
    padding: "10px 14px",
    borderRadius: "11px",
    backgroundColor: state.isSelected
      ? "#ebf5ff"
      : state.isFocused
      ? "#f5faff"
      : "#fff",
    color: "#333",
    width: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "14px",
    fontWeight: state.isSelected ? "500" : "normal",
    cursor: "pointer",
    outline: "none",
    boxShadow: "none",
    ":active": {
      backgroundColor: "#ebf5ff",
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#999",
    padding: "0 8px",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    // paddingRight: "4px",
  }),
};

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Pefer not to say" },
];

const profileSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    mobile: z.string().optional(),
    country: z
      .object({
        dialCode: z.union([z.string(), z.number()]).optional(),
      })
      .nullable()
      .optional(),
    companyName: z.string().optional(),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    gender: z.string().optional(),
    dob: z.string().min(1, "Date of birth is required"),
    billingCountry: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    pincode: z.string().optional(),
    gst: z
      .string()
      .optional()
      .refine(
        (val) =>
          !val || /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(val),
        { message: "Invalid GST number format" }
      ),
    pan: z
      .string()
      .optional()
      .refine((val) => !val || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(val), {
        message: "Invalid PAN number format",
      }),
    billingAddress1: z.string().min(1, "Billing address 1 is required"),
    billingAddress2: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const code = data.country?.dialCode ? String(data.country.dialCode) : "";
    const numeric = data.mobile?.replace(/\D/g, "") || "";
    if (!numeric) {
      ctx.addIssue({
        path: ["mobile"],
        message: "Mobile number is required",
        code: z.ZodIssueCode.custom,
      });
      return;
    }
    if (numeric.length <= code.replace(/\D/g, "").length) {
      ctx.addIssue({
        path: ["mobile"],
        message: "Mobile number is required",
        code: z.ZodIssueCode.custom,
      });
      return;
    }
    if (code === "91") {
      if (numeric.length !== 12) {
        ctx.addIssue({
          path: ["mobile"],
          message: "Mobile number must be exactly 10 digits",
          code: z.ZodIssueCode.custom,
        });
      }
    }
    if (code === "91" && data.pincode) {
      const pin = data?.pincode?.replace(/\D/g, "");
      if (pin.length !== 6) {
        ctx.addIssue({
          path: ["pincode"],
          message: "Pincode must be exactly 6 digits",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

const MyProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const { token, user, setUser } = useAuth();
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
  const hasInitialized = useRef(false);
  const prevValues = useRef({
    billingCountry: "",
    state: "",
    city: "",
  });
  const [error, setError] = useState("");
  const billingCountry = watch("billingCountry");
  const state = watch("state");
  const city = watch("city");
  useEffect(() => {
    if (user) {
      Promise.resolve().then(() => {
        reset({
          firstName: user?.firstName || "",
          lastName: user?.lastName || "",
          mobile: user?.mobile ? `${user.phone_code}${user.mobile}` : "",
          country: {
            dialCode: user?.phone_code || "91",
          },
          companyName: user?.companyName || "",
          email: user?.email || "",
          gender: user?.gender || "",
          dob: user?.dateOfBirth ? user.dateOfBirth.split("T")[0] : "",
          billingCountry: user.country_id || "",
          state: user.state_id || "",
          city: user.city_id || "",
          pincode: user?.pincode || "",
          gst: user?.gstNumber || "",
          pan: user?.panNumber || "",
          billingAddress1: user?.billingAddress || "",
          billingAddress2: user?.billingAddress2 || "",
        });
        setProfileImage(user?.picture);
        hasInitialized.current = true;
        prevValues.current = {
          billingCountry: user.country_id || "",
          state: user.state_id || "",
          city: user.city_id || "",
        };
      });
    }
  }, [user, reset, setProfileImage]);

  useEffect(() => {
    if (!hasInitialized.current) return;

    if (
      prevValues.current.billingCountry &&
      prevValues.current.billingCountry !== billingCountry
    ) {
      setValue("state", "");
      setValue("city", "");
      setValue("pincode", "");
    }

    prevValues.current.billingCountry = billingCountry;
  }, [billingCountry]);

  useEffect(() => {
    if (!hasInitialized.current) return;

    if (prevValues.current.state && prevValues.current.state !== state) {
      setValue("city", "");
      setValue("pincode", "");
    }

    prevValues.current.state = state;
  }, [state]);

  useEffect(() => {
    if (!hasInitialized.current) return;

    if (prevValues.current.city && prevValues.current.city !== city) {
      setValue("pincode", "");
    }

    prevValues.current.city = city;
  }, [city]);

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
    queryKey: ["allState", values.billingCountry, countryData],
    queryFn: async () => {
      const countryId = countryData?.find(
        (item) => item.label === values.billingCountry
      )?.value;
      const res = await getApi(`user/getAllStatesById?countryId=${countryId}`);
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
    queryKey: ["allCity", values.state, stateData],
    queryFn: async () => {
      const stateId = stateData?.find(
        (item) => item.label === values.state
      )?.value;
      const res = await getApi(`user/getAllCities?stateId=${stateId}`);
      return res.data;
    },
    enabled: !!values.state,
  });
  const cityData = useMemo(() => {
    return (
      allCity?.map((item) => ({ label: item?.name, value: item?.id })) || []
    );
  }, [allCity]);

  const { mutate: updateProfileMutate, isPending: updateProfileLoading } =
    useMutation({
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
          ShowToast(data.message, "success");
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
    const countryId = countryData?.find(
      (item) => item.label === values.billingCountry
    )?.value;
    const stateId = stateData?.find(
      (item) => item.label === values.state
    )?.value;
    const cityId = cityData?.find((item) => item.label === values.city)?.value;
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
      country_id: countryId,
      state_id: stateId,
      city_id: cityId,
      pincode: values.pincode,
      billingAddress2: values.billingAddress2,
    };
    updateProfileMutate(payload);
  };
  const { mutate: imageUploadMutate, isPending: imageUploadLoading } =
    useMutation({
      mutationFn: async (file) => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await postAPIFormDataWithoutBearer(
            "user/updateProfileImage",
            formData,
            token
          );
          return res.data;
        } catch (err) {
          throw new Error(err?.response?.data?.message || err.message);
        }
      },
      onSuccess: (data) => {
        if (data.success) {
          ShowToast(data?.message, "success");
          setUser(data?.user);
        } else {
          ShowToast(data.message || "Something went wrong", "error");
        }
      },
      onError: (error) => {
        ShowToast(error.message || "Something went wrong", "error");
      },
    });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      ShowToast("Please select an image!", "error");
      return;
    }
    const maxSizeMB = 1; // 1 MB
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    if (file.size > maxSizeBytes) {
      setError(
        `File size exceeds ${maxSizeMB} MB. Please select a smaller file`
      );
      return;
    }

    setError("");
    imageUploadMutate(file);
  };
  return (
    <>
      <div className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
        <div className="container mx-auto px-[15px] py-10">
          <div className="md:w-[55%] w-full mx-auto">
            <div>
              <h2 className="text-[22px] md:text-[26px] pt-[13px] text-[#141414] font-semibold leading-[1.6]">
                Profile Management
              </h2>
              <div className="mt-20">
                <div className=" flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="w-[125px] h-[125px] rounded-full border-1 border-[#000]">
                      <ImageWithFallback
                        width={125}
                        height={125}
                        className="size-full rounded-full object-cover"
                        src={
                          profileImage
                            ? profileImage
                            : "/images/user_image_profile.webp"
                        }
                        alt="User profile"
                        fallback="/images/user_image_profile.webp"
                        title="profile_image"
                      />
                    </div>

                    {imageUploadLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-[#f76900] rounded-full animate-spin"></div>
                      </div>
                    )}
                    <label
                      htmlFor="imageUpload"
                      className="absolute bottom-0 right-0 w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:shadow-[5px_5px_15px_#00000080] hover:scale-[1.2] transition-all duration-300"
                    >
                      <input
                        type="file"
                        id="imageUpload"
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <Svg name="camera" className=" text-white size-[18px] " />
                    </label>
                  </div>
                  {error && (
                    <p className="text-[#dc3545] text-sm min-[1400px]:text-base">
                      {error}
                    </p>
                  )}
                </div>
                <div className="mt-[50px]">
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-10 ">
                    <div className="space-y-[42px]">
                      <div>
                        <h4 className="text-lg font-semibold mb-6">
                          Basic Information
                        </h4>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-[30px]">
                          {/* First Name */}
                          <div className="relative">
                            <label className=" text-sm text-black font-semibold bg-white leading-[1.5]">
                              First name
                              <span className="text-[#dc3545]">*</span>
                            </label>
                            <input
                              {...register("firstName")}
                              type="text"
                              placeholder="Enter first name"
                              onChange={(e) => {
                                e.target.value = e.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                              }}
                              className={`block px-2.5 h-[44px] font-semibold w-full text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none placeholder:text-[#777] placeholder:font-medium ${
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
                            <label className=" text-sm text-black font-semibold">
                              Last name<span className="text-[#dc3545]">*</span>
                            </label>
                            <input
                              {...register("lastName")}
                              type="text"
                              placeholder="Enter last name"
                              onChange={(e) => {
                                e.target.value = e.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                              }}
                              className={`block px-2.5 h-[45px] font-semibold w-full text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none placeholder:text-[#777] placeholder:font-medium ${
                                errors.lastName
                                  ? "border-red-500 focus:ring-red-200"
                                  : "border-[#e0e0e0] focus:ring-indigo-200"
                              }`}
                            />
                            {errors.lastName && (
                              <p className="text-red-500 text-[10px] absolute -bottom-4">
                                {errors.lastName.message}
                              </p>
                            )}
                          </div>

                          {/* Mobile */}
                          <div className="relative">
                            <label className=" text-sm text-black font-semibold">
                              Mobile<span className="text-[#dc3545]">*</span>
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
                                  className="w-full [&_input]:!w-full font-semibold mt-1 border-[#e0e0e0] focus:border-[#3f51b5] rounded-sm focus:outline-none [&_input]:!h-full h-[44px]"
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
                            <label className=" text-sm text-black font-semibold">
                              Company Name
                            </label>
                            <input
                              {...register("companyName")}
                              type="text"
                              placeholder="Enter company name"
                              className="block px-2.5 h-[44px] w-full font-semibold placeholder:text-[#777] placeholder:font-medium border-[#e0e0e0] text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none"
                            />
                          </div>

                          {/* Email */}
                          <div className="relative md:col-span-2">
                            <label className=" text-sm text-black font-semibold">
                              Email<span className="text-[#dc3545]">*</span>
                            </label>
                            <div className="relative">
                              <input
                                {...register("email")}
                                type="email"
                                readOnly={
                                  user?.regType === "social" ||
                                  user?.regType === "email"
                                    ? true
                                    : false
                                }
                                placeholder=" Emter email"
                                className="block px-2.5 h-[44px] font-semibold border-[#e0e0e0] placeholder:text-[#777] placeholder:font-medium w-full text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none"
                              />
                              {(user?.regType === "social" ||
                                user?.regType === "email") && (
                                <span>
                                  <Svg
                                    name="lock"
                                    className="absolute size-[15px] text-[#777] top-[13px] right-4.5"
                                  />
                                </span>
                              )}
                            </div>
                            {errors.email && (
                              <p className="text-red-500 text-[10px] absolute -bottom-4">
                                {errors.email.message}
                              </p>
                            )}
                          </div>

                          {/* Gender */}
                          <div className="relative">
                            <label className="text-sm text-black font-semibold">
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
                                    className="mt-1 text-sm font-semibold rounded-sm !w-full border-[#e0e0e0] border  h-[44px] [&_.css-10a4w4m-control]:!h-[44px] [&_.css-1lvlyd-placeholder]:!text-[#777] [&_.css-vksdqt-singleValue]:!text-[#777]"
                                    styles={customStyles}
                                    components={{
                                      ClearIndicator,
                                      DropdownIndicator,
                                      IndicatorSeparator: null,
                                    }}
                                  />
                                );
                              }}
                            />
                          </div>

                          {/* DOB */}
                          <div className="relative">
                            <label className=" text-sm text-black font-semibold">
                              Date of birth
                              <span className="text-[#dc3545]">*</span>
                            </label>
                            <input
                              {...register("dob")}
                              type="date"
                              max={new Date().toISOString().split("T")[0]}
                              className="border-[#e0e0e0] font-semibold w-full placeholder:text-[#777] placeholder:font-medium text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-[44px]"
                            />
                            {errors.dob && (
                              <p className="text-red-500 text-[10px] absolute -bottom-4">
                                {errors.dob.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Billing Details */}
                      <div className="pt-[25px] border-t border-[#ddd]">
                        <h4 className="text-lg font-semibold mb-[25px]">
                          Billing Details
                        </h4>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-[30px]">
                          <div className="relative">
                            <label className="text-sm text-black font-semibold">
                              Country
                            </label>

                            <Controller
                              name="billingCountry"
                              control={control}
                              render={({ field }) => {
                                const handleChange = (selectedOption) => {
                                  field.onChange(selectedOption?.label || "");
                                };
                                const selectedValue =
                                  countryData?.find(
                                    (option) => option.label === field.value
                                  ) || null;

                                return (
                                  <Select
                                    value={selectedValue}
                                    onChange={handleChange}
                                    options={countryData}
                                    placeholder="Select Country"
                                    classNamePrefix="react-select"
                                    className="mt-1 text-sm font-semibold hover:border-black rounded-sm !w-full border-[#e0e0e0] border  h-[44px] [&_.css-10a4w4m-control]:!h-[44px] [&_.css-1lvlyd-placeholder]:!text-[#777] [&_.css-vksdqt-singleValue]:!text-[#777]"
                                    styles={customStyles}
                                    components={{
                                      ClearIndicator,
                                      DropdownIndicator,
                                      IndicatorSeparator: null,
                                    }}
                                  />
                                );
                              }}
                            />
                          </div>
                          <div className="relative">
                            <label className="text-sm text-black font-semibold">
                              State
                            </label>

                            <Controller
                              name="state"
                              control={control}
                              render={({ field }) => {
                                const handleChange = (selectedOption) => {
                                  field.onChange(selectedOption?.label || "");
                                };
                                const selectedValue =
                                  stateData?.find(
                                    (option) => option.label === field.value
                                  ) || null;

                                return (
                                  <Select
                                    value={selectedValue}
                                    onChange={handleChange}
                                    options={stateData}
                                    placeholder="Select State"
                                    classNamePrefix="react-select"
                                    className="mt-1 text-sm font-semibold hover:border-black rounded-sm !w-full border-[#e0e0e0] border  h-[44px] [&_.css-10a4w4m-control]:!h-[44px]  [&_.css-1lvlyd-placeholder]:!text-[#777] [&_.css-vksdqt-singleValue]:!text-[#777]"
                                    styles={customStyles}
                                    components={{
                                      ClearIndicator,
                                      DropdownIndicator,
                                      IndicatorSeparator: null,
                                    }}
                                  />
                                );
                              }}
                            />
                          </div>

                          <div className="relative">
                            <label className="text-sm text-black font-semibold">
                              City
                            </label>

                            <Controller
                              name="city"
                              control={control}
                              render={({ field }) => {
                                const handleChange = (selectedOption) => {
                                  field.onChange(selectedOption?.label || "");
                                };
                                const selectedValue =
                                  cityData?.find(
                                    (option) => option.label === field.value
                                  ) || null;

                                return (
                                  <Select
                                    value={selectedValue}
                                    onChange={handleChange}
                                    options={cityData}
                                    placeholder="Select City"
                                    classNamePrefix="react-select"
                                    className="mt-1 text-sm font-semibold hover:border-black rounded-sm !w-full border-[#e0e0e0] border  h-[44px] [&_.css-10a4w4m-control]:!h-[44px]  [&_.css-1lvlyd-placeholder]:!text-[#777] [&_.css-vksdqt-singleValue]:!text-[#777]"
                                    styles={customStyles}
                                    components={{
                                      ClearIndicator,
                                      DropdownIndicator,
                                      IndicatorSeparator: null,
                                    }}
                                  />
                                );
                              }}
                            />
                          </div>

                          <div className="relative">
                            <label className=" text-sm text-black font-semibold">
                              Pincode
                            </label>
                            <Controller
                              name="pincode"
                              control={control}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  placeholder="Enter pincode"
                                  onChange={(e) => {
                                    let value = e.target.value.replace(
                                      /[^0-9]/g,
                                      ""
                                    );
                                    field.onChange(value);
                                  }}
                                  value={field.value || ""}
                                  className="border-[#e0e0e0] font-semibold text-[#777] w-full placeholder:text-[#777] placeholder:font-medium mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-[44px]"
                                />
                              )}
                            />
                            {errors.pincode && (
                              <p className="text-red-500 text-[10px] absolute -bottom-4">
                                {errors.pincode.message}
                              </p>
                            )}
                          </div>

                          <div className="relative">
                            <label className=" text-sm text-black font-semibold">
                              GST no.
                            </label>
                            <input
                              {...register("gst")}
                              type="text"
                              placeholder=" Enter GST no."
                              className="border-[#e0e0e0] font-semibold  w-full placeholder:text-[#777] placeholder:font-medium text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-[44px]"
                            />
                            {errors.gst && (
                              <p className="text-red-500 text-[10px] absolute -bottom-4">
                                {errors.gst.message}
                              </p>
                            )}
                          </div>

                          <div className="relative">
                            <label className="text-sm text-black font-semibold">
                              PAN No.
                            </label>
                            <input
                              {...register("pan")}
                              type="text"
                              placeholder="Enter PAN no. "
                              className="border-[#e0e0e0] font-semibold w-full placeholder:text-[#777] placeholder:font-medium text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-[44px]"
                            />
                            {errors.pan && (
                              <p className="text-red-500 text-[10px] absolute -bottom-4">
                                {errors.pan.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="relative mt-6">
                          <label className="text-sm text-black font-semibold">
                            Billing address 1
                            <span className="text-[#dc3545]">*</span>
                          </label>
                          <input
                            {...register("billingAddress1", {
                              required: "Billing address 1 is required",
                            })}
                            type="text"
                            placeholder="Enter Billing address 1"
                            className={`border-[#e0e0e0] font-semibold w-full placeholder:text-[#777] placeholder:font-medium text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-[44px] ${
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
                          <label className="text-sm text-black font-semibold">
                            Billing address 2{" "}
                          </label>
                          <input
                            {...register("billingAddress2")}
                            type="text"
                            placeholder="Enter Billing address 2"
                            className="border-[#e0e0e0] font-semibold w-full placeholder:text-[#777] placeholder:font-medium text-[#777] mt-1 text-sm border focus:border-[#3f51b5] rounded-sm focus:outline-none px-2 h-[44px]"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={updateProfileLoading}
                      className="cursor-pointer w-full mt-[22px] bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                    >
                      {updateProfileLoading ? "Updating..." : "UPDATE"}
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
