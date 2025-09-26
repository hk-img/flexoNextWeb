"use client";
import { useEffect, useState } from "react";
import Svg from "@/components/svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleLoginButton from "./GoogleLoginButton";
import VerifyOtp from "./VerifyOtp";
import LoginViaMailPassword from "./loginViaMailPassword/LoginViaMailPassword";

const authSchema = z
  .object({
    mobile: z.string().optional(),
    email: z.string().optional(),
    country: z
      .object({
        dialCode: z.string().optional(),
      })
      .nullable()
      .optional(),
    isMobileTab: z.boolean(), // dynamically pass
  })
  .superRefine((data, ctx) => {
    console.log({ data }, "ergtegregher");
    if (data.isMobileTab) {
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
    } else {
      if (!data.email) {
        ctx.addIssue({
          path: ["email"],
          message: "Email is required",
          code: z.ZodIssueCode.custom,
        });
      } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(data.email)
      ) {
        ctx.addIssue({
          path: ["email"],
          message: "Enter a valid email",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

const Auth = ({ isOpen, setIsOpen }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isShowOtp, setIsShowOtp] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      mobile: "+91",
      country: {
        name: "India",
        dialCode: "91",
        countryCode: "in",
        format: "+.. .....-.....",
      },
      isMobileTab: true,
    },
  });
  const values = watch();
  console.log({ values }, "Rtyryrtyrt");

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsOpen]);

  if (!isOpen) return null;

  const handleIsLoginToggle = () => {
    setIsLogin((prev) => !prev);
    reset();
  };

  const onSubmit = async (values) => {
    console.log({ values }, "dsrgwergwergew");
    const country_code = values.country ? `+${values.country.dialCode}` : "";
    const dialCode = values.country ? values.country.dialCode : "";
    const mobile = values.mobile.replace(dialCode, "").replace(/^\+/, "");
    console.log({ country_code, mobile });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      {isLogin && !values?.isMobileTab ? (
        <LoginViaMailPassword setIsOpen={setIsOpen} setValue={setValue}/>
      ) : (
        <div className="relative w-full max-w-[600px] rounded-sm bg-white p-6 shadow-xl">
          <div className="px-5 py-4 border-b border-[#dbdbdb] flex items-center justify-between">
            {!isLogin ? (
              <h2 className="text-xl font-medium">
                Register/Create an
                <span className="text-[#f76900]"> Account</span>
              </h2>
            ) : (
              <h2 className="text-xl font-medium">Login</h2>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="text-black cursor-pointer"
            >
              <Svg name="close" className="size-5" />
            </button>
          </div>
          {!isShowOtp ? (
            <div className="py-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                {values?.isMobileTab ? (
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-semibold mb-2"
                    >
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
                ) : (
                  <div className="">
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-semibold mb-2"
                    >
                      Email <span className="text-[#f76900]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                          message: "Enter a valid email",
                        },
                      })}
                      className={`w-full rounded-sm border-2 px-3 py-2.5
                          border-[#dbdbdb] h-[42px]
                          ${
                            errors.email
                              ? "border-[#f44336] focus:border-[#f44336]"
                              : "hover:border-black focus:border-[#3f51b5]"
                          }
                        `}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[#f44336]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-10 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                >
                  {isSubmitting ? "Sending..." : "GET OTP"}
                </button>
              </form>
              <div className="my-6 flex items-center">
                <hr className="flex-1 border-gray-300" />
                <span className="px-2 text-sm text-[#000000de]">
                  or Continue with
                </span>
                <hr className="flex-1 border-gray-300" />
              </div>
              <div className="flex gap-3 px-10">
                <GoogleOAuthProvider
                  clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
                >
                  <GoogleLoginButton />
                </GoogleOAuthProvider>
                {values?.isMobileTab ? (
                  <button
                    onClick={() => {
                      setValue("isMobileTab", false, {
                        shouldValidate: true,
                      });
                    }}
                    className="cursor-pointer flex-1 border border-[#dbdbdb] rounded-md py-1 flex items-center justify-center gap-2"
                  >
                    <Svg name="mail" className="size-4 text-black" />
                    <span> Mail</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setValue("isMobileTab", true, { shouldValidate: true });
                    }}
                    className="cursor-pointer flex-1 border border-[#dbdbdb] rounded-md py-1 flex items-center justify-center gap-2"
                  >
                    <Svg name="call" className="size-4 text-black" />
                    <span> Mobile</span>
                  </button>
                )}
              </div>
              <div className="mt-6 text-center flex items-center justify-center gap-4">
                <span className="text-sm text-black">
                  {!isLogin
                    ? "Already have an account ?"
                    : "Don't have an account ?"}
                </span>
                <button
                  onClick={handleIsLoginToggle}
                  className="cursor-pointer bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-3 px-5 rounded-full font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                >
                  {!isLogin ? "LOGIN" : "REGISTER"}
                </button>
              </div>
            </div>
          ) : (
            <VerifyOtp mobile="8949461957" setIsShowOtp={setIsShowOtp} />
          )}
        </div>
      )}
    </div>
  );
};

export default Auth;
