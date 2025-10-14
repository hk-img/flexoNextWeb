import React from "react";
import { useForm, Controller } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postAPI } from "@/services/ApiService";

const loginRegisterSchema = z
  .object({
    mobile: z.string().optional(),
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

const LoginRegisterViaMobile = ({ isLogin, setMobile, setIsShowOtp }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(loginRegisterSchema),
    defaultValues: {
      mobile: "+91",
      country: {
        name: "India",
        dialCode: "91",
        countryCode: "in",
        format: "+.. .....-.....",
      },
    },
  });
  const values = watch();
  const { mutate: sendOtpMutationForRegister } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPI("user/loginWithMobile", payload);
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data.success) {
        toast.success(data.message);
        setMobile(payload);
        setIsShowOtp(true);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: sendOtpMutationForLogin } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPI("user/login-Mobile-New", payload);
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data?.success) {
        toast.success(data.message);
        setMobile(payload);
        setIsShowOtp(true);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (values) => {
    const country_code = values.country ? `+${values.country.dialCode}` : "";
    const dialCode = values.country ? values.country.dialCode : "";
    const mobile = values.mobile.replace(dialCode, "").replace(/^\+/, "");
    const payload = { phone_code: country_code, mobile: mobile };
    if (isLogin) {
      sendOtpMutationForLogin(payload);
    } else {
      sendOtpMutationForRegister(payload);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-[15px]">
          <label htmlFor="mobile" className="block min-[1400px]:text-base text-sm font-semibold mb-2">
            Mobile <span className="text-[#f76900]">*</span>
          </label>
          <div>
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
            {/* {values?.country?.name} */}
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-500">
                {errors.mobile.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer mt-10 w-full bg-[#f76900] min-[1400px]:text-base text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
        >
          {isSubmitting ? "Sending..." : "GET OTP"}
        </button>
      </form>
    </>
  );
};

export default LoginRegisterViaMobile;
