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
      className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-5"
    >
      <h2 className="text-xl font-semibold text-center text-gray-800">
        OTP Verification
      </h2>
      <p className="text-center text-gray-600">
        Enter the OTP sent to <span className="font-medium">+91 {mobile}</span>
      </p>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-3">
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
            className="size-14 text-center text-lg font-semibold border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        ))}
      </div>

      {/* Resend OTP */}
      <button
        type="button"
        onClick={handleResendOtp}
        disabled={isResendDisabled}
        className={`text-sm underline text-center ${
          isResendDisabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-500"
        }`}
      >
        {isResendDisabled ? `Resend in ${timer}s` : "Resend OTP"}
      </button>

      {/* Error */}
      {errorMsg && (
        <div className="text-red-600 text-center text-sm">{errorMsg}</div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-full h-12 w-full font-semibold flex items-center justify-center gap-2"
      >
        {isPending ? "Verifying..." : "Verify OTP"}
        <Svg name="openInView" className="size-5" />
      </button>
    </form>
  );
};

export default VerifyOtp;
