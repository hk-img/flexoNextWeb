"use client";
import Svg from "@/components/svg";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "@/context/useAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postAPI } from "@/services/ApiService";
import { useEffect, useState } from "react";

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

const LongTermPopup = ({ isOpen, setIsOpen, city }) => {
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
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
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
    let payload = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      userEmail: values?.email,
      phone_code: country_code,
      userMobile: mobile,
      city: [city],
      inquirySpaceCapacity: values?.seats,
      type: "Longterm",
      userId: user?.id || 0,
    };
    submitMutate(payload);
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      {successScreen ? (
        <div className="relative w-full max-w-[500px] p-6 mx-[12px] rounded-sm bg-white animate-scaleIn overflow-hidden">
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
          <div className="pb-6 flex items-center justify-between">
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
              Our workspace advisor will get in touch to help you with your
              requirement.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First Name */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  First name <span className="text-[#dc3545]">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("firstName", { required: true })}
                    placeholder="Enter First Name"
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    }}
                    className={`w-full rounded-sm border-2 px-3 py-2.5
                      border-[#dbdbdb] h-12
                      ${
                        errors.firstName
                          ? "border-[#f44336] focus:border-[#f44336]"
                          : "hover:border-black focus:border-[#3f51b5]"
                      }
                    `}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-[10px] absolute -bottom-4">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  Last name <span className="text-[#dc3545]">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("lastName")}
                    placeholder="Enter Last Name"
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    }}
                    className={`w-full rounded-sm border-2 px-3 py-2.5
                        border-[#dbdbdb] h-12
                        ${
                          errors.lastName
                            ? "border-[#f44336] focus:border-[#f44336]"
                            : "hover:border-black focus:border-[#3f51b5]"
                        }
                      `}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-[10px] absolute -bottom-4">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  Email <span className="text-[#dc3545]">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter Email"
                  className={`w-full rounded-sm border-2 px-3 py-2.5
                      border-[#dbdbdb] h-12
                      ${
                        errors.email
                          ? "border-[#f44336] focus:border-[#f44336]"
                          : "hover:border-black focus:border-[#3f51b5]"
                      }
                    `}
                />
                {errors.email && (
                  <p className="text-red-500 text-[10px] absolute -bottom-4">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
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
                        setValue("mobile", value, { shouldValidate: true });
                        setValue("country", country);
                      }}
                      enableSearch
                      countryCodeEditable={false}
                      inputProps={{ name: "mobile" }}
                      className="w-full [&_input]:!w-full [&_input]:!h-full h-12 [&_.country-list]:overflow-x-hidden"
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

            <div className="border-b pb-4 border-[#dbdbdb]">
              <button
                type="submit"
                disabled={submitLoading}
                className="cursor-pointer mt-6 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
              >
                {submitLoading ? "...Submitting" : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LongTermPopup;
