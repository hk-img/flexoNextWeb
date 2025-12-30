"use client";
import { useAuth } from "@/context/useAuth";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { ShowToast } from "@/utils/ShowToast";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import Auth from "../auth/Auth";
import Script from "next/script";
import { useRouter } from "next/navigation";

const Payments = ({ spaceId, timeStamp }) => {
  const { token, user } = useAuth();
  const router = useRouter();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  const formattedDate = convertTimestamp(timeStamp);

  const extractTime = (dateString) => {
    const date = new Date(dateString);
    let hour = date.getHours();
    const minute = date.getMinutes();
    const period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return { hour, minute, period };
  };

  const { mutate: rejectBookingMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `user/rejectBookingOnPaymentExpiry`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        ShowToast(data.message, "success");
      } else {
        ShowToast(data.message, "error");
      }
    },

    onError: (err) => {
      ShowToast(err.response?.data?.message || "Something went wrong", "error");
    },
  });

  const { mutate: paymentStatusMutate, isPending: isPaymentStatusPending } =
    useMutation({
      mutationFn: async (payload) => {
        const res = await postAPIAuthWithoutBearer(
          `user/payment-status`,
          payload,
          token
        );
        return res.data;
      },
      onSuccess: (data) => {
        if (data?.success) {
          setTimeout(() => {
            router.push(`/booking-detail/${data?.bookingId}`);
          }, 500);
        } else {
          ShowToast(data?.message, "error");
        }
      },
      onError: (error) => {
        ShowToast(error?.message, "error");
      },
    });

  const { mutate: bookShorttermMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `user/shortTermBookingPayment/${spaceId}`,
        {}
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        console.log(data.razorpayOrder, "Rgtrtyrtyrty");
        if (Object?.values(data?.razorpayOrder || {})?.length > 0) {
          const options = {
            key: data.razorpayOrder.key_id,
            amount: data.razorpayOrder.amount_paid * 100,
            currency: "INR",
            name: data.razorpayOrder.product_name || "Booking Payment",
            description: data.razorpayOrder.description || "Payment",
            order_id: data.razorpayOrder.order_id,
            prefill: {
              name: user?.name,
              email: user.email,
              contact: user?.mobile || user.contact,
            },
            handler: function (response) {
              const payload = {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                amount: data.razorpayOrder.amount_paid,
                id: data?.bookingRecord?.id,
              };
              paymentStatusMutate(payload);
            },
            modal: {
              ondismiss: function () {
                ShowToast("Payment Failed!", "error");
              },
            },
            theme: { color: "#f76900" },
          };
          console.log({ options }, "options");
          const rzp = new window.Razorpay(options);
          rzp.open();
        }
      } else {
        ShowToast(data.message, "error");
      }
    },
    onError: (err) => {
      ShowToast(err.response?.data?.message || "Something went wrong", "error");
    },
  });
  const checkExpiryTime = (date) => {
    const { hour, minute, period } = extractTime(date);
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentDate = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const formattedDate = new Date(date);
    const formattedDay = formattedDate.getDate();
    const formattedMonth = formattedDate.getMonth();
    const formattedYear = formattedDate.getFullYear();

    let extractedHour = hour;
    const extractedMinute = minute;

    if (period === "PM" && extractedHour !== 12) {
      extractedHour += 12;
    }
    if (period === "AM" && extractedHour === 12) {
      extractedHour = 0;
    }
    if (
      currentYear === formattedYear &&
      currentMonth === formattedMonth &&
      currentDate === formattedDay
    ) {
      // If today's date and formattedDate are the same, proceed to check the time
      if (
        currentHour > extractedHour ||
        (currentHour === extractedHour && currentMinute > extractedMinute)
      ) {
        ShowToast("Link expired", "error");
        rejectBookingMutate({ bookingId: spaceId });
      } else {
        if (!token) {
          ShowToast("Please login to continue booking", "error");
          setIsAuthOpen(true);
          return;
        } else {
          bookShorttermMutate({ bookingId: spaceId });
        }
      }
    } else {
      console.log("rtdddgrgtrtgr", token);
      // If the dates don't match (either expired or a future date), you can handle the logic here
      if (!token) {
        ShowToast("Please login to continue booking", "error");
        setIsAuthOpen(true);
        return;
      } else {
        bookShorttermMutate({ bookingId: spaceId });
      }
    }
  };
  useEffect(() => {
    if (token == null) {
      return;
    }
    checkExpiryTime(formattedDate);
  }, [token, formattedDate]);

  return (
    <>
      {isAuthOpen && <Auth isOpen={isAuthOpen} setIsOpen={setIsAuthOpen} />}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Payments;
