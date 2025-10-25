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
import { toast } from "sonner";
import {
  convertSlugToSmallLetter,
} from "@/services/Comman";

const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Enter a valid email").min(1, "Email is required"),
    mobile: z.string().min(1, "Mobile Number is required"),
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
const schemaForProductCard = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Enter a valid email").min(1, "Email is required"),
    mobile: z.string().min(1, "Mobile Number is required"),
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
const schemaForCity = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Enter a valid email").min(1, "Email is required"),
    mobile: z.string().min(1, "Mobile Number is required"),
    country: z
      .object({
        dialCode: z.union([z.string(), z.number()]).optional(),
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
const ExplorePopup = ({
  isOpen,
  setIsOpen,
  selectedSpaceData = null,
  cityName = "",
  type = "",
  selectedSpaceType=""
}) => {
  const selectedSchema = (type == "longterm")
    ? schemaForCity
    : (Object.values(selectedSpaceData || {})?.length > 0)
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

  useEffect(()=>{
    if(selectedSpaceType){
      setValue("spaceType", selectedSpaceType);
    }
  },[selectedSpaceType])

  const { mutate: submitMutate, isPending: submitLoading } = useMutation({
    mutationFn: async (payload) => {
      const res = await postAPI("user/inquiry", payload);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.result?.success) {
        setSuccessScreen(true);
      } else {
        toast.error(data?.result.message);
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
    const city = values?.city;
    const smallLetterCity = convertSlugToSmallLetter(
      city || ""
    );
    const typeWithFirstLetterCapital = type?.charAt(0)?.toUpperCase() + type?.slice(1);
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
    if(selectedSpaceData?.id){
      payload.spaceId = selectedSpaceData?.id
    }
    submitMutate(payload);
  };

  if (!isOpen) return null;

  const { data: allCities } = useQuery({
    queryKey: ["all-spaces-cities"],
    queryFn: async () => {
      const typeWithFirstLetterCapital = type?.charAt(0)?.toUpperCase() + type?.slice(1);
      const res = await getApi(`spaces/getAllSpacesCities?spaceType=${typeWithFirstLetterCapital || 'Longterm'}`);
      return res.data;
    },
  });

  const cityData = useMemo(() => {
    return allCities || [];
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
        <div className="relative w-full lg:max-w-[55vw] mx-[12px] rounded-[11px] bg-white p-6 overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn">
          {/* Header */}
          <div className="pb-[26px] flex items-center justify-between">
            <h2 className="text-lg font-semibold">Get Quotes</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black cursor-pointer"
            >
              <Svg name="close" className="size-5" />
            </button>
          </div>

          <div className="px-5 py-[10px] bg-[#f4f4f4] mb-6">
            <p className="text-[#000000de] text-[13px]">
              Our workspace advisor will get in touch to help you with your requirement.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[18.5px] gap-x-[30px]">
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
                      e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
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
                      e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
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
              <div className="relative">
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
              <div className="relative">
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
              {(!cityName || type != "longterm") && (
                <>
                  {Object?.values(selectedSpaceData || {})?.length > 0 ? (
                    <>
                    {
                      !selectedSpaceType && (
                        <div className="relative">
                          <label className="block text-sm font-semibold mb-1">
                            Space Type<span className="text-[#dc3545]">*</span>
                          </label>
                          <select
                            {...register("spaceType")}
                            className={`w-full rounded-sm placeholder:text-[#0000006B] border px-2 tracking-normal py-2.5
                                border-[#dbdbdb] h-[45px] text-sm font-medium
                                ${
                                  errors.spaceType
                                    ? "border-[#f44336] focus:border-[#f44336]"
                                    : "hover:border-black focus:border-[#3f51b5] active:border-[#3f51b5]"
                                }
                              `}
                          >
                            <option value="">Select Space Type</option>
                            {selectedSpaceData?.privatecabin_price > 0 && (
                              <option value="Private Office">Private Office</option>
                            )}
                            {selectedSpaceData?.customized_space_price > 0 && (
                              <option value="Managed Office">Managed Office</option>
                            )}
                            {selectedSpaceData?.desks_price > 0 && (
                              <option value="Dedicated Desk">Dedicated Desk</option>
                            )}
                            {selectedSpaceData?.flexible_desk_price > 0 && (
                              <option value="Flexible Desk">Flexible Desk</option>
                            )}
                            {selectedSpaceData?.virtual_office_price > 0 && (
                              <option value="Virtual Office">Virtual Office</option>
                            )}
                            <option value="Not Sure">Not Sure</option>
                          </select>
                          {errors.spaceType && (
                            <p className="text-[#f44336] font-medium text-[11px] px-[10px] absolute -bottom-4">
                              {errors.spaceType.message}
                            </p>
                          )}
                        </div>
                      )
                    }
                    </>
                  ) : (
                    <div className="relative">
                      <label className="block text-sm font-semibold mb-1">
                        City<span className="text-[#dc3545]">*</span>
                      </label>
                      <select
                        {...register("city")}
                        className={`w-full rounded-sm placeholder:text-[#0000006B] border px-1 tracking-normal py-2.5
                            border-[#dbdbdb] h-[45px] text-sm font-medium
                            ${
                              errors.city
                                ? "border-[#f44336] focus:border-[#f44336]"
                                : "hover:border-black focus:border-[#3f51b5] active:border-[#3f51b5]"
                            }
                          `}
                      >
                        <option value="">Select City</option>
                        {cityData?.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
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
                      className={`w-full rounded-sm placeholder:text-[#0000006B] border px-1 tracking-normal py-2.5
                            border-[#dbdbdb] h-[45px] text-sm font-medium
                            ${
                              errors.seats
                                ? "border-[#f44336] focus:border-[#f44336]"
                                : "hover:border-black focus:border-[#3f51b5] active:border-[#3f51b5]"
                            }
                          `}
                    >
                      <option value="">Select No. of Seats</option>
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

          <p className="mt-4 pb-5 px-5 text-[11px] text-[#000000de] text-center">
            After you submit a workspace enquiry to us, we may share your
            details with workspace providers, who may contact you to follow up
            on your enquiry." Please  read our{" "}
            <span onClick={()=>{
              window.open("/privacy-policy", "_blank")
            }} className="cursor-pointer text-[#f76900]">
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
