"use client";
import React, { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { postAPI } from "@/services/ApiService";
// import { LOGIN } from "@/api/urls";
import { toast } from "sonner";
import { useAuth } from "@/context/useAuth";
import Svg from "@/components/svg";

const VerifyOtp = ({ mobile = "", setIsShowOtp }) => {
  const { setToken } = useAuth();
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [errorMsg, setErrorMsg] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  // Handle Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle OTP Change
  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Timer countdown
  useEffect(() => {
    if (isResendDisabled && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setIsResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [isResendDisabled, timer]);

  // Validate OTP API
  const { mutate: validateOtpMutation, isPending } = useMutation({
    mutationFn: async (payload) => {
    //   const response = await postAPI(`${LOGIN}`, payload);
    //   return response.data;
    },
    onSuccess: (data) => {
      if (!data?.success) {
        setErrorMsg(data.message || "Invalid OTP");
      } else {
        setErrorMsg("");
        toast.success(data.message);
        setToken(data.userLoginToken);
        setIsShowOtp(false);
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  // Resend OTP API
  const { mutate: sendOtpMutation } = useMutation({
    mutationFn: async (payload) => {
    //   const response = await postAPI(`${LOGIN}`, payload);
    //   return response.data;
    },
    onSuccess: () => {
      setTimer(30);
      setIsResendDisabled(true);
      setOtp(Array(4).fill(""));
      inputRefs.current[0]?.focus();
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  const handleResendOtp = () => {
    const payload = { loginType: "sendOtp", mobile };
    sendOtpMutation(payload);
  };

  // Submit OTP
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some((digit) => digit === "")) {
      setErrorMsg("Enter complete OTP");
      return;
    }
    setErrorMsg("");
    const payload = {
      loginType: "validateOtp",
      mobile,
      otp: otp.join(""),
    };
    validateOtpMutation(payload);
  };

  // Focus on first OTP box
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full py-7"
    >
      <div className="mb-10">
        <h2 className="text-lg 2xl:text-xl font-medium text-center text-[#141414] mb-1">
          OTP Verification
        </h2>
        <p className="text-center 2xl:text-base text-sm text-[#000000de]">
          Enter the OTP send to <span className="font-semibold text-black">+91 {mobile}</span>
        </p>
      </div>
      {/* OTP Inputs */}
      <div className="flex justify-center gap-5">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            type="tel"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(idx, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => (inputRefs.current[idx] = el)}
            placeholder="0"
            className="p-5 text-center text-sm font-semibold border-b-2 text-[#000000de] outline-none w-[calc(25%-10px)]"
          />
        ))}
      </div>
      {/* Error */}
      {errorMsg && (
        <div className="text-[#f44336] font-medium text-sm pt-3">{errorMsg}</div>
      )}

      {/* Resend OTP */}
      <div className="text-center text-sm 2xl:text-base mb-2">
        Didn't receive the OTP {" "} 
        <button
          type="button"
          onClick={handleResendOtp}
          disabled={isResendDisabled}
          className={`text-sm  text-center py-4 ${
            isResendDisabled
              ? "text-[#d6d6d6] cursor-not-allowed"
              : "text-[#f76900]"
          }`}
        >
          
          <span className="uppercase font-semibold">Resend OTP</span> 
        </button> {" "} 
        {isResendDisabled && ` in ${timer}s` }
      </div>

      

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-[15px] w-full rounded-[15px] font-semibold duration-500 transition text-center uppercase tracking-[1px]"
      >
        {isPending ? "Verifying..." : "Verify OTP"}
      </button>
    </form>
  );
};

export default VerifyOtp;
