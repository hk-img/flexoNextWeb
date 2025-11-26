import Svg from "@/components/svg";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "@/context/useAuth";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getApi, postAPI } from "@/services/ApiService";
import { convertSlugToSmallLetter } from "@/services/Comman";
import { ShowToast } from "@/utils/ShowToast";
import { components as RSComponents } from "react-select";
import dynamic from "next/dynamic";
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

const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Enter a valid email").min(1, "Email is required"),
    mobile: z.string().optional(),
    country: z
      .object({
        dialCode: z.union([z.string(), z.number()]).optional(),
      })
      .nullable()
      .optional(),
    city: z.string().min(1, "City is required"),
    seats: z.string().min(1, "Seats is required"),
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
  });
const schemaForProductCard = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Enter a valid email").min(1, "Email is required"),
    mobile: z.string().optional(),
    country: z
      .object({
        dialCode: z.union([z.string(), z.number()]).optional(),
      })
      .nullable()
      .optional(),
    spaceType: z.string().min(1, "Space Type is required"),
    seats: z.string().min(1, "Seats is required"),
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
  });
const schemaForCity = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Enter a valid email").min(1, "Email is required"),
    mobile: z.string().optional(),
    country: z
      .object({
        dialCode: z.union([z.string(), z.number()]).optional(),
      })
      .nullable()
      .optional(),
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
  });
const ExplorePopup = ({
  isOpen,
  setIsOpen,
  selectedSpaceData = null,
  cityName = "",
  type = "",
  selectedSpaceType = "",
}) => {
  const selectedSchema =
    type == "longterm"
      ? schemaForCity
      : Object.values(selectedSpaceData || {})?.length > 0
      ? schemaForProductCard
      : schema;
  const { user } = useAuth();
  const [successScreen, setSuccessScreen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(selectedSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      city: "",
      spaceType: "",
      seats: "",
      country: {
        name: "India",
        dialCode: "91",
        countryCode: "in",
        format: "+.. .....-.....",
      },
    },
  });
  const values = watch();

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName || "");
      setValue("lastName", user.lastName || "");
      setValue("email", user.email || "");
      setValue(
        "mobile",
        user?.mobile ? `${user.phone_code}${user.mobile}` : ""
      );
      setValue("country", { dialCode: user?.phone_code || "91" });
    }
  }, [user]);

  useEffect(() => {
    if (selectedSpaceType) {
      setValue("spaceType", selectedSpaceType);
    }
  }, [selectedSpaceType]);

  const { mutate: submitMutate, isPending: submitLoading } = useMutation({
    mutationFn: async (payload) => {
      const res = await postAPI("user/inquiry", payload);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.result?.success) {
        setSuccessScreen(true);
      } else {
        ShowToast(data?.result.message, "error");
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
    const city = values?.city;
    const smallLetterCity = convertSlugToSmallLetter(city || "");
    const typeWithFirstLetterCapital =
      type?.charAt(0)?.toUpperCase() + type?.slice(1);
    let payload = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      userEmail: values?.email,
      phone_code: country_code,
      userMobile: mobile,
      city: [smallLetterCity],
      inquirySpaceCapacity: values?.seats,
      type: typeWithFirstLetterCapital || "Longterm",
      userId: user?.id || 0,
    };
    if (Object?.values(selectedSpaceData || {})?.length > 0) {
      const smallLetterCity = convertSlugToSmallLetter(
        selectedSpaceData?.contact_city_name || cityName
      );
      payload.city = [smallLetterCity];
      payload.spaceType = values?.spaceType;
    }
    if (selectedSpaceData?.id) {
      payload.spaceId = selectedSpaceData?.id;
    }
    submitMutate(payload);
  };

  if (!isOpen) return null;

  const { data: allCities } = useQuery({
    queryKey: ["all-spaces-cities"],
    queryFn: async () => {
      const typeWithFirstLetterCapital =
        type?.charAt(0)?.toUpperCase() + type?.slice(1);
      const res = await getApi(
        `spaces/getAllSpacesCities?spaceType=${
          typeWithFirstLetterCapital || "Longterm"
        }`
      );
      return res.data;
    },
  });

  const cityData = useMemo(() => {
    return (
      allCities?.map((item) => ({ label: item?.name, value: item?.id })) || []
    );
  }, [allCities]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      {successScreen ? (
        <div className="relative w-full max-w-[500px] p-6 mx-[12px] rounded-sm placeholder:text-[#0000006B] bg-white animate-scaleIn overflow-hidden">
          <div className="flex space-y-5 flex-col items-center justify-center">
            <div className="mt-7 ">
              <Svg name="checkCircle" className="size-[75px] text-[#05ac34]" />
            </div>
            <p className=" text-base text-[#212529] text-center">
              Inquiry sent successfully. Our team will get back to you shortly.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer w-fit px-[35px] mt-1.5 bg-[#f76900] text-lg border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full lg:max-w-[55vw] mx-[12px] rounded-[11px] bg-white p-6 overflow-y-auto h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn">
          {/* Header */}
          <div className="md:pb-[26px] pb-[40px] flex items-center justify-center">
            <h2 className="text-lg font-semibold uppercase">Get Quotes</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black cursor-pointer absolute top-6 right-6"
            >
              <Svg name="close" className="size-5" />
            </button>
          </div>

          <div className="px-5 py-[10px] bg-[#f4f4f4] mb-6 md:block hidden">
            <p className="text-[#000000de] text-[13px]">
              Our workspace advisor will get in touch to help you with your
              requirement.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-[18.5px] md:gap-x-[30px] gap-[12px]">
              {(!cityName || type != "longterm") && (
                <>
                  {Object?.values(selectedSpaceData || {})?.length > 0 ? (
                    <>
                      {!selectedSpaceType && (
                        <div className="relative">
                          <label className="block text-sm font-semibold mb-1">
                            Space Type<span className="text-[#dc3545]">*</span>
                          </label>
                          <select
                            {...register("spaceType")}
                            className={`select-custom w-full rounded-sm placeholder:text-[#0000006B] border px-2 tracking-normal py-2.5
                                border-[#dbdbdb] h-[45px] text-sm font-medium
                                ${
                                  errors.spaceType
                                    ? "border-[#f44336] focus:border-[#f44336]"
                                    : "hover:border-black focus:border-[#3f51b5] active:border-[#3f51b5]"
                                }
                              `}
                          >
                            <option value="" disabled selected hidden>
                              Select
                            </option>
                            {selectedSpaceData?.privatecabin_price > 0 && (
                              <option value="Private Office">
                                Private Office
                              </option>
                            )}
                            {selectedSpaceData?.customized_space_price > 0 && (
                              <option value="Managed Office">
                                Managed Office
                              </option>
                            )}
                            {selectedSpaceData?.desks_price > 0 && (
                              <option value="Dedicated Desk">
                                Dedicated Desk
                              </option>
                            )}
                            {selectedSpaceData?.flexible_desk_price > 0 && (
                              <option value="Flexible Desk">
                                Flexible Desk
                              </option>
                            )}
                            {selectedSpaceData?.virtual_office_price > 0 && (
                              <option value="Virtual Office">
                                Virtual Office
                              </option>
                            )}
                            <option value="Not Sure">Not Sure</option>
                          </select>
                          {errors.spaceType && (
                            <p className="text-[#f44336] font-medium text-[11px] px-[10px] absolute -bottom-4">
                              {errors.spaceType.message}
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="relative">
                      <label className="block text-sm font-semibold mb-1">
                        City<span className="text-[#dc3545]">*</span>
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
                              placeholder="Select"
                              classNamePrefix="react-select"
                              className="mt-1 text-sm font-semibold hover:border-black rounded-sm !w-full border-[#e0e0e0] border h-[45px] [&_.css-10a4w4m-control]:!h-[45px] [&_.css-1lvlyd-placeholder]:!text-[#0000006B] [&_.css-vksdqt-singleValue]:!text-[#0000006B] [&_.css-10a4w4m-control]:!h-[45px] [&_.css-1lvlyd-placeholder]:!font-medium [&_.css-vksdqt-singleValue]:!font-medium"
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
                      {errors.city && (
                        <p className="text-[#f44336] font-medium text-[11px] px-[10px] absolute -bottom-4">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-1">
                      No. of Seats<span className="text-[#dc3545]">*</span>
                    </label>
                    <select
                      {...register("seats")}
                      className={`select-custom w-full rounded-sm placeholder:text-[#0000006B] border px-1 tracking-normal py-2.5
                            border-[#dbdbdb] h-[45px] text-sm font-medium
                            ${
                              errors.seats
                                ? "border-[#f44336] focus:border-[#f44336]"
                                : "hover:border-black focus:border-[#3f51b5] active:border-[#3f51b5]"
                            }
                          `}
                    >
                      <option value="" disabled selected hidden>
                        Select
                      </option>
                      <option value="1-5">1–5</option>
                      <option value="6-10">6–10</option>
                      <option value="11-20">11-20</option>
                      <option value="21-50">21-50</option>
                      <option value="21-50">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                    {errors.seats && (
                      <p className="text-[#f44336] font-medium text-[11px] px-[10px] absolute -bottom-4">
                        {errors.seats.message}
                      </p>
                    )}
                  </div>
                </>
              )}
              {/* First Name */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  First name<span className="text-[#dc3545]">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("firstName", { required: true })}
                    placeholder="Enter First Name"
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(
                        /[^A-Za-z\s]/g,
                        ""
                      );
                    }}
                    className={`w-full rounded-sm placeholder:text-[#0000006B] border px-2 tracking-normal py-2.5
                            border-[#dbdbdb] h-[45px] text-sm font-medium
                            ${
                              errors.firstName
                                ? "border-[#f44336] focus:border-[#f44336]"
                                : "hover:border-black focus:border-[#3f51b5] active:border-[#3f51b5]"
                            }
                          `}
                  />
                  {errors.firstName && (
                    <p className="text-[#f44336] font-medium text-[11px] px-[10px] absolute -bottom-4">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Last Name */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  Last name<span className="text-[#dc3545]">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("lastName")}
                    placeholder="Enter Last Name"
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(
                        /[^A-Za-z\s]/g,
                        ""
                      );
                    }}
                    className={`w-full rounded-sm placeholder:text-[#0000006B] border px-2 py-2.5
                              border-[#dbdbdb] h-[45px]  text-sm font-medium
                              ${
                                errors.lastName
                                  ? "border-[#f44336] focus:border-[#f44336]"
                                  : "hover:border-black focus:border-[#3f51b5] active:border-[#3f51b5]"
                              }
                            `}
                  />
                  {errors.lastName && (
                    <p className="text-[#f44336] font-medium text-[11px] px-[10px] absolute -bottom-4">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="relative md:col-span-1 col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Email<span className="text-[#dc3545]">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter Email"
                  className={`w-full rounded-sm placeholder:text-[#0000006B] border px-2 tracking-normal py-2.5
                            border-[#dbdbdb] h-[45px] text-sm font-medium
                            ${
                              errors.email
                                ? "border-[#f44336] focus:border-[#f44336]"
                                : "hover:border-black focus:border-[#3f51b5] active:border-[#3f51b5]"
                            }
                          `}
                />
                {errors.email && (
                  <p className="text-[#f44336] font-medium text-[11px] px-[10px] absolute -bottom-4">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div className="relative md:col-span-1 col-span-2">
                <label className="block text-sm font-semibold mb-1">
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
                        setValue("mobile", value, { shouldValidate: true });
                        setValue("country", country);
                      }}
                      countryCodeEditable={false}
                      enableSearch
                      inputProps={{ name: "mobile" }}
                      className="w-full [&_input]:!w-full [&_input]:!h-full h-12 [&_.country-list]:overflow-x-hidden"
                    />
                  )}
                />
                {/* {values?.country?.name} */}
                {errors.mobile && (
                  <p className="text-[#f44336] font-medium text-[11px] px-[10px] absolute -bottom-4">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
            </div>

            <div className="border-b pb-4 border-[#dbdbdb]">
              <button
                type="submit"
                disabled={submitLoading}
                className="cursor-pointer mt-5 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
              >
                {submitLoading ? "...Submitting" : "SUBMIT"}
              </button>
            </div>
          </form>

          <p className="mt-4 pb-5 text-[10px] text-[#000000de]  text-start text-justify">
            After you submit a workspace enquiry to us, we may share your
            details with workspace providers, who may contact you to follow up
            on your enquiry. Please read our{" "}
            <span
              onClick={() => {
                window.open("/privacy-policy", "_blank");
              }}
              className="cursor-pointer text-[#f76900]"
            >
              Privacy Policy
            </span>{" "}
            for details of how we process the information.
          </p>
        </div>
      )}
    </div>
  );
};

export default ExplorePopup;
