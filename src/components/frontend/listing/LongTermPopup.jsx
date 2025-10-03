"use client";
import Svg from "@/components/svg";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Enter a valid email").min(1, "Email is required"),
    mobile: z.string().min(1, "Mobile number is required"),
    country: z
      .object({
        dialCode: z.string().optional(),
      })
      .nullable()
      .optional(),
  })
  .refine(
    (data) => {
      if (!data.mobile) return false;
      const code = data.country?.dialCode ?? "";
      const numeric = data.mobile.replace(/\D/g, "");
      return numeric.length > code.length;
    },
    {
      message: "Mobile number is required",
      path: ["mobile"],
    }
  );

const LongTermPopup = ({ isOpen, setIsOpen }) => {
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

  const onSubmit = (values) => {
    const country_code = values.country ? `+${values.country.dialCode}` : "";
    const dialCode = values.country ? values.country.dialCode : "";
    const mobile = values.mobile.replace(dialCode, "").replace(/^\+/, "");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
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
                  className={`w-full rounded-sm border-2 px-3 py-2.5
                      border-[#dbdbdb] h-12
                      ${errors.firstName 
                        ? "border-[#f44336] focus:border-[#f44336]" 
                        : "hover:border-black focus:border-[#3f51b5]"}
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
                className={`w-full rounded-sm border-2 px-3 py-2.5
                        border-[#dbdbdb] h-12
                        ${errors.lastName 
                          ? "border-[#f44336] focus:border-[#f44336]" 
                          : "hover:border-black focus:border-[#3f51b5]"}
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
                      ${errors.email 
                        ? "border-[#f44336] focus:border-[#f44336]" 
                        : "hover:border-black focus:border-[#3f51b5]"}
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
              className="mt-6 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LongTermPopup;
