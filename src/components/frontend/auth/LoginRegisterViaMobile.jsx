import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

const LoginRegisterViaMobile = ({ isLogin }) => {
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
  const onSubmit = async (values) => {
    console.log({ values }, "dsrgwergwergew");
    const country_code = values.country ? `+${values.country.dialCode}` : "";
    const dialCode = values.country ? values.country.dialCode : "";
    const mobile = values.mobile.replace(dialCode, "").replace(/^\+/, "");
    console.log({ country_code, mobile });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="mobile" className="block text-sm font-semibold mb-2">
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
                  inputProps={{ name: "mobile" }}
                  className="w-full [&_input]:!w-full [&_input]:!h-full h-[42px]"
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
          className="mt-10 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
        >
          {isSubmitting ? "Sending..." : "GET OTP"}
        </button>
      </form>
    </>
  );
};

export default LoginRegisterViaMobile;
