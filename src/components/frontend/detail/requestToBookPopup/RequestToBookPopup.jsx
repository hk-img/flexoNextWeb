import Svg from "@/components/svg";
import React, { useRef, useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageWithFallback from "@/components/ImageWithFallback";
import { convertSlugToCapitalLetter } from "@/services/Comman";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { useAuth } from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { ShowToast } from "@/utils/ShowToast";
const defaultTime = [
  { label: "12:00 AM Midnight", value: "00:00", disabled: false },
  { label: "12:30 AM", value: "00:30", disabled: false },
  { label: "1:00 AM", value: "01:00", disabled: false },
  { label: "1:30 AM", value: "01:30", disabled: false },
  { label: "2:00 AM", value: "02:00", disabled: false },
  { label: "2:30 AM", value: "02:30", disabled: false },
  { label: "3:00 AM", value: "03:00", disabled: false },
  { label: "3:30 AM", value: "03:30", disabled: false },
  { label: "4:00 AM", value: "04:00", disabled: false },
  { label: "4:30 AM", value: "04:30", disabled: false },
  { label: "5:00 AM", value: "05:00", disabled: false },
  { label: "5:30 AM", value: "05:30", disabled: false },
  { label: "6:00 AM", value: "06:00", disabled: false },
  { label: "6:30 AM", value: "06:30", disabled: false },
  { label: "7:00 AM", value: "07:00", disabled: false },
  { label: "7:30 AM", value: "07:30", disabled: false },
  { label: "8:00 AM", value: "08:00", disabled: false },
  { label: "8:30 AM", value: "08:30", disabled: false },
  { label: "9:00 AM", value: "09:00", disabled: false },
  { label: "9:30 AM", value: "09:30", disabled: false },
  { label: "10:00 AM", value: "10:00", disabled: false },
  { label: "10:30 AM", value: "10:30", disabled: false },
  { label: "11:00 AM", value: "11:00", disabled: false },
  { label: "11:30 AM", value: "11:30", disabled: false },
  { label: "12:00 PM", value: "12:00", disabled: false },
  { label: "12:30 PM", value: "12:30", disabled: false },
  { label: "1:00 PM", value: "13:00", disabled: false },
  { label: "1:30 PM", value: "13:30", disabled: false },
  { label: "2:00 PM", value: "14:00", disabled: false },
  { label: "2:30 PM", value: "14:30", disabled: false },
  { label: "3:00 PM", value: "15:00", disabled: false },
  { label: "3:30 PM", value: "15:30", disabled: false },
  { label: "4:00 PM", value: "16:00", disabled: false },
  { label: "4:30 PM", value: "16:30", disabled: false },
  { label: "5:00 PM", value: "17:00", disabled: false },
  { label: "5:30 PM", value: "17:30", disabled: false },
  { label: "6:00 PM", value: "18:00", disabled: false },
  { label: "6:30 PM", value: "18:30", disabled: false },
  { label: "7:00 PM", value: "19:00", disabled: false },
  { label: "7:30 PM", value: "19:30", disabled: false },
  { label: "8:00 PM", value: "20:00", disabled: false },
  { label: "8:30 PM", value: "20:30", disabled: false },
  { label: "9:00 PM", value: "21:00", disabled: false },
  { label: "9:30 PM", value: "21:30", disabled: false },
  { label: "10:00 PM", value: "22:00", disabled: false },
  { label: "10:30 PM", value: "22:30", disabled: false },
  { label: "11:00 PM", value: "23:00", disabled: false },
  { label: "11:30 PM", value: "23:30", disabled: false },
];

const slotSchema = z.object({
  date: z.date({ required_error: "Date is required" }),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
});

const schema = z.object({
  slots: z.array(slotSchema).min(1, "Please add at least one booking slot"),
});

const RequestToBookPopup = ({
  setIsOpen,
  spaceData,
  workingDays,
  hostHolidays,
}) => {
  const datePickerRef = useRef(null);
  const minHours = spaceData?.minimum_hours / 60;
  const router = useRouter();
  const { token, user } = useAuth();
  const [successScreen, setSuccessScreen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    field,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      slots: [{ date: new Date(), startTime: "", endTime: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "slots",
  });

  const values = watch();

  const getTimeDateSlot = (selectedDate) => {
    if (!selectedDate) return [];

    const times = [];
    const now = new Date();
    const dateObj = new Date(selectedDate);
    const dayName = dateObj.toLocaleString("en-US", { weekday: "long" });
    const daySlot = workingDays?.find((d) => d.day === dayName);

    if (!daySlot || daySlot.isClosed) return [];

    let [startHour, startMinute] = daySlot.openingTime.split(":").map(Number);
    let [endHour, endMinute] = daySlot.closingTime.split(":").map(Number);

    if (daySlot.openingTime === "00:00" && daySlot.closingTime === "00:00") {
      startHour = 0;
      startMinute = 0;
      endHour = 23;
      endMinute = 59;
    }

    let start = new Date(dateObj);
    start.setHours(startHour, startMinute, 0, 0);

    const end = new Date(dateObj);
    end.setHours(endHour, endMinute, 0, 0);

    const isToday =
      dateObj.getDate() === now.getDate() &&
      dateObj.getMonth() === now.getMonth() &&
      dateObj.getFullYear() === now.getFullYear();

    while (start <= end) {
      const hours = start.getHours();
      const minutes = start.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 === 0 ? 12 : hours % 12;
      const displayMinutes = minutes.toString().padStart(2, "0");
      let label = `${displayHours}:${displayMinutes} ${period}`;

      if (`${displayHours}:${displayMinutes} ${period}` === "12:00 AM") {
        label = "12:00 AM Midnight";
      }

      const isDisabled = isToday && start <= now;

      times.push({
        label,
        value: `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`,
        disabled: isDisabled,
      });

      start.setMinutes(start.getMinutes() + 30); // 30-min interval
    }

    return times;
  };

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
          setSuccessScreen(true);
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

  const { mutate: submitMutate, isPending: isSubmitPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await postAPIAuthWithoutBearer(
        `user/shortTermCreateBooking/${spaceData?.id}`,
        payload,
        token
      );
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
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
          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          setSuccessScreen(true);
          setTimeout(() => {
            router.push(`/booking-detail/${data?.bookingRecord?.id}`);
          }, 500);
        }
      } else {
        ShowToast(data?.message, "error");
      }
    },
    onError: (error) => {
      ShowToast(error.message, "error");
    },
  });

  const onSubmit = (values) => {
    const slots = values.slots.map((item) => {
      const d = new Date(item?.date);
      d.setMinutes(d.getMinutes() - d.getTimezoneOffset());

      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();

      const formattedDate = `${day}/${month}/${year}`;

      return {
        startDate: formattedDate,
        startTime: item.startTime,
        endTime: item.endTime,
      };
    });
    const dateMap = {};

    for (let slot of slots) {
      const { startDate, startTime, endTime } = slot;
      if (!dateMap[startDate]) {
        dateMap[startDate] = [];
      }
      const isOverlap = dateMap[startDate].some(
        (s) => !(endTime < s.startTime || startTime > s.endTime)
      );

      if (isOverlap) {
        ShowToast(
          `Slots on ${startDate} are overlapping. Please fix before submitting.`,
          "error"
        );
        return;
      }
      dateMap[startDate].push({ startTime, endTime });
    }

    const payload = {
      bookingPeriods: slots,
      spaceLocation: spaceData?.location_name,
    };
    submitMutate(payload);
  };

  function getDurationInHours(startTime, endTime) {
    if (!startTime || !endTime) return 0;
    if (startTime == "00:00" && endTime == "00:00") return 24;
    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);
    const startTotalMinutes = startH * 60 + startM;
    const endTotalMinutes = endH * 60 + endM;
    let durationMinutes = endTotalMinutes - startTotalMinutes;
    if (durationMinutes < 0) durationMinutes += 24 * 60;
    const decimalHours = durationMinutes / 60;
    return Math.round(decimalHours * 100) / 100;
  }

  const isClosedDay = (date) => {
    const dayName = date.toLocaleString("en-US", { weekday: "long" });
    const dayInfo = workingDays.find((d) => d.day === dayName);
    return dayInfo?.isClosed;
  };
  const isDisabledDate = (date) => {
    if (isClosedDay(date)) return true;
    return hostHolidays.some((holiday) => {
      const holidayDate = new Date(holiday.date);
      return (
        holidayDate.getFullYear() === date.getFullYear() &&
        holidayDate.getMonth() === date.getMonth() &&
        holidayDate.getDate() === date.getDate()
      );
    });
  };

  const getHolidayTitle = (date) => {
    const dayName = date.toLocaleString("en-US", { weekday: "long" });
    const dayInfo = workingDays.find((d) => d.day === dayName);
    if (dayInfo?.isClosed) {
      return "Closed";
    }
    const found = hostHolidays.find((holiday) => {
      const holidayDate = new Date(holiday.date);
      return (
        holidayDate.getFullYear() === date.getFullYear() &&
        holidayDate.getMonth() === date.getMonth() &&
        holidayDate.getDate() === date.getDate()
      );
    });

    return found ? found.holidayTitle : "Closed";
  };

  const subtotal = values.slots.reduce((acc, item) => {
    const duration = getDurationInHours(item.startTime, item.endTime);
    return acc + duration * spaceData?.originalPrice;
  }, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center animate-fadeIn p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />

      {successScreen ? (
        <div className="relative w-full max-w-[500px] p-6 mx-[12px] rounded-sm bg-white animate-scaleIn overflow-hidden">
          <div className="flex space-y-5 flex-col items-center justify-center">
            <div className="mt-7">
              <Svg name="checkCircle" className="size-[75px] text-[#05ac34]" />
            </div>
            <p className="text-lg font-medium text-[#212529] text-center">
              {spaceData?.isInstant == 1
                ? "Thank You For Your Booking!"
                : "Thank You For Your Booking Request!"}
            </p>
            <div className="text-center font-normal text-base">
              {spaceData?.isInstant == 1
                ? "Your Booking Is Confirmed! You will receive details about the space via email and whatsapp."
                : "Your booking request has been sent to the host. Once the host accepts your booking request, you will receive a payment link via email. If your requested date and time cannot be accommodated, you will be promptly notified."}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer w-fit px-[35px] mt-1.5 bg-[#f76900] text-lg border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full xl:max-w-[1000px] md:max-w-[80vw] max-w-full md:mx-[12px] rounded-sm bg-white overflow-y-auto h-[93vh] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1] animate-scaleIn">
          <div
            className="flex absolute top-4 right-4 items-center justify-center shadow-[0_0_4px_#000] size-[31px] rounded-full bg-white"
            onClick={() => setIsOpen(false)}
          >
            <Svg name="close" className="size-[18px] cursor-pointer" />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 bg-[#fefaf7]">
            {/* LEFT SIDE */}
            <div className="bg-white p-5">
              <div className="border-b border-[#DBDBDB] pb-[11px]">
                <h2 className="2xl:text-xl text-lg font-medium ">
                  {spaceData?.isInstant == 1
                    ? "Complete Your Booking"
                    : "Request To Book"}
                </h2>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <div className="md:h-[calc(100vh-272px)] md:overflow-y-auto py-2 [&::-webkit-scrollbar]:w-[7px] [&::-webkit-scrollbar-thumb]:bg-[#f76900] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]">
                  {fields.map((item, index) => (
                    <div
                      key={item.id}
                      className=" [&_.react-datepicker-wrapper]:w-full pr-0 md:pr-2 py-2"
                    >
                      {fields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className=" flex justify-end w-full cursor-pointer"
                        >
                          <Svg name="close" className="size-6" />
                        </button>
                      )}
                      <div className="relative">
                        <Controller
                          control={control}
                          name={`slots.${index}.date`}
                          render={({ field }) => (
                            <div className="relative border-b border-[#0000006b] pt-3 pb-1 focus-within:border-[#3f51b5] transition-all duration-200">
                              <DatePicker
                                selected={field.value}
                                ref={datePickerRef}
                                onChange={(date) => field.onChange(date)}
                                filterDate={(date) => !isDisabledDate(date)}
                                dateFormat="dd-MM-yyyy"
                                renderDayContents={(day, date) => {
                                  const title = getHolidayTitle(date);
                                  return (
                                    <span
                                      title={title}
                                      className={title ? "font-semibold" : ""}
                                    >
                                      {day}
                                    </span>
                                  );
                                }}
                                minDate={new Date()}
                                placeholderText=""
                                className="w-full text-sm text-[#111] bg-transparent outline-none border-none focus:ring-0"
                              />

                              <label
                                className={`absolute left-0 bg-white transition-all duration-200 ease-in-out text-gray-500
                                  ${
                                    field.value
                                      ? "text-xs -top-2 text-[#f76900]"
                                      : "text-sm top-[13px] left-1"
                                  }
                                `}
                              >
                                Choose a date
                              </label>
                              <div>
                                <Svg
                                  onClick={() => {
                                    if (datePickerRef.current) {
                                      datePickerRef.current.setOpen(true);
                                    }
                                  }}
                                  name="calender"
                                  className="cursor-pointer text-[#f76900] size-[14px] absolute right-2 top-3 "
                                />
                              </div>
                            </div>
                          )}
                        />

                        {errors?.slots?.[index]?.date && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.slots[index].date.message}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-[30px] mt-5">
                        <div className="flex-1 relative">
                          <Controller
                            control={control}
                            name={`slots.${index}.startTime`}
                            render={({ field }) => {
                              const options = getTimeDateSlot(
                                watch(`slots.${index}.date`)
                              );

                              return (
                                <div className="relative border-b border-[#0000006b] pt-3 pb-1 focus-within:border-[#3f51b5] transition-all duration-200">
                                  <select
                                    {...field}
                                    placeholder=""
                                    className="w-full bg-transparent text-sm text-[#111] outline-none border-none  focus:ring-0"
                                  >
                                    <option value="" disabled hidden></option>
                                    {options?.map((t, i) => (
                                      <option
                                        key={i}
                                        value={t.value}
                                        disabled={t.disabled}
                                      >
                                        {t.label}
                                      </option>
                                    ))}
                                  </select>

                                  <label
                                    className={`absolute left-0 bg-white px-1 transition-all duration-200 ease-in-out text-gray-500 pointer-events-none
                                      ${
                                        field.value
                                          ? "text-xs -top-2 text-[#f76900]"
                                          : "text-sm top-[13px] left-0"
                                      }
                                    `}
                                  >
                                    Start time
                                  </label>

                                  {/* Custom Dropdown Icon */}
                                </div>
                              );
                            }}
                          />

                          {errors?.slots?.[index]?.startTime && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.slots[index].startTime.message}
                            </p>
                          )}
                        </div>

                        <div className="flex-1 relative">
                          <Controller
                            control={control}
                            name={`slots.${index}.endTime`}
                            render={({ field }) => {
                              const options = getTimeDateSlot(
                                watch(`slots.${index}.date`)
                              );

                              const handleChange = (e) => {
                                const value = e.target.value;
                                if (!value) {
                                  field.onChange(value);
                                  return;
                                }

                                const existsDate = values.slots?.filter(
                                  (item) =>
                                    item.time == values.slots?.[index]?.time
                                );
                                if (existsDate?.length > 1) {
                                }

                                if (
                                  values?.slots?.[index]?.startTime ==
                                    "00:00" &&
                                  value == "00:00"
                                ) {
                                  field.onChange(value);
                                  return;
                                }

                                const duration = getDurationInHours(
                                  values?.slots?.[index]?.startTime,
                                  value
                                );
                                if (duration < minHours) {
                                  return ShowToast(
                                    `Time difference must be at least ${minHours} hours.`,
                                    "error"
                                  );
                                }
                                field.onChange(value);
                              };

                              return (
                                <div className="relative border-b border-[#0000006b] pt-3 pb-1 focus-within:border-[#3f51b5] transition-all duration-200">
                                  <select
                                    {...field}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-sm text-[#111] outline-none border-none  focus:ring-0"
                                  >
                                    <option value="" disabled hidden></option>
                                    {options?.map((t, i) => (
                                      <option
                                        key={i}
                                        value={t.value}
                                        disabled={t.disabled}
                                      >
                                        {t.label}
                                      </option>
                                    ))}
                                  </select>

                                  <label
                                    className={`absolute left-3 bg-white px-1 transition-all duration-200 ease-in-out text-gray-500 pointer-events-none
                                      ${
                                        field.value
                                          ? "text-xs -top-2 text-[#f76900]"
                                          : "text-sm top-[13px] left-0"
                                      }
                                    `}
                                  >
                                    End time
                                  </label>
                                </div>
                              );
                            }}
                          />

                          {errors?.slots?.[index]?.endTime && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.slots[index].endTime.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {errors?.slots?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.slots.message}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      const slots = values.slots.map((item) => {
                        const d = new Date(item?.date);
                        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());

                        const day = String(d.getDate()).padStart(2, "0");
                        const month = String(d.getMonth() + 1).padStart(2, "0");
                        const year = d.getFullYear();

                        const formattedDate = `${day}/${month}/${year}`;

                        return {
                          startDate: formattedDate,
                          startTime: item.startTime,
                          endTime: item.endTime,
                        };
                      });
                      const dateMap = {};

                      for (let slot of slots) {
                        const { startDate, startTime, endTime } = slot;
                        if (!dateMap[startDate]) {
                          dateMap[startDate] = [];
                        }
                        const isOverlap = dateMap[startDate].some(
                          (s) =>
                            !(endTime < s.startTime || startTime > s.endTime)
                        );

                        if (isOverlap) {
                          ShowToast(
                            `Slots on ${startDate} are overlapping. Please fix before submitting.`,
                            "error"
                          );
                          return;
                        }
                        dateMap[startDate].push({ startTime, endTime });
                      }
                      const lastSlot =
                        watch("slots")?.[watch("slots").length - 1];
                      if (
                        lastSlot &&
                        lastSlot.date &&
                        lastSlot.startTime &&
                        lastSlot.endTime
                      ) {
                        append({ date: null, startTime: "", endTime: "" });
                      } else {
                        ShowToast(
                          "You can not overlap the time for the same date.",
                          "warning"
                        );
                      }
                    }}
                    className="cursor-pointer text-[#f76900] font-semibold mt-[37px]"
                  >
                    Add Another Slot
                  </button>
                </div>
                <button
                  disabled={isSubmitPending}
                  type="submit"
                  className="md:block hidden cursor-pointer w-fit px-5 bg-[#f76900] hover:bg-[#ff7c52] text-white rounded-[15px] font-semibold uppercase tracking-[1px] py-[10px] mt-4"
                >
                  {isSubmitPending
                    ? "Please wait..."
                    : spaceData?.isInstant == 1
                    ? "Book Now"
                    : "Submit Request"}
                </button>

                <p className="text-xs min-[1400px]:text-sm leading-[1.5] text-[#000000de] mt-2">
                  You will not be charged yet. Your booking request will be sent
                  to the host. Once the host accepts your booking request, you
                  will receive a link to make the payment.
                </p>
              </form>
            </div>

            {/* RIGHT SIDE - Summary */}
            <div className="bg-[#FFF0E6] p-5 flex flex-col gap-3">
              <div className="flex  items-center justify-between rounded-[10px] bg-white md:p-5 p-2">
                <div className="flex md:flex-row flex-col w-full md:items-center gap-3">
                  <ImageWithFallback
                    width="180"
                    height="105"
                    src={spaceData?.images?.[0]}
                    alt="image"
                    className="md:w-[180px] w-full h-[105px] rounded-md"
                    fallback="/images/default_image.webp"
                  />
                  <div>
                    <h3 className="font-medium text-base 2xl:text-lg text-[#141414]">
                      {spaceData?.actual_name || spaceData?.name}
                    </h3>
                    <span className="text-sm 2xl:text-base text-[#000000de] flex items-center">
                      <Svg
                        name="location2"
                        className="size-4 shrink-0 text-black"
                      />
                      {convertSlugToCapitalLetter(
                        spaceData?.location_name || ""
                      )}
                    </span>
                    {spaceData?.rating > 0 && (
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Svg
                            key={i}
                            name={i < spaceData?.rating ? "star" : "emptyStar"}
                            className="size-4 shrink-0 text-[#f76900]"
                          />
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <p className="text-black  text-sm font-bold">
                        <Svg
                          name="rupee"
                          className="size-4 text-[#f76900] inline"
                        />{" "}
                        {Number(spaceData?.originalPrice)?.toLocaleString(
                          "en-IN"
                        )}{" "}
                        / hr
                      </p>
                      <p>{minHours} hr minimum</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[10px] p-5">
                <div className="border-b border-[#DBDBDB] pb-[10px]">
                  <h4 className="font-medium text-[#141414] 2xl:text-lg text-base flex items-center gap-1">
                    <Svg
                      name="calender"
                      className="size-4 shrink-0 text-[#f76900]"
                    />
                    Booking Summary
                  </h4>
                </div>

                <div className="">
                  <div className="space-y-2 border-b py-2  max-h-[200px] overflow-y-auto border-[#DBDBDB] [&::-webkit-scrollbar]:w-[7px] [&::-webkit-scrollbar-thumb]:bg-[#f76900] [&::-webkit-scrollbar-track]:bg-[#f1f1f1] pr-2">
                    {values?.slots?.map((slot, i) => (
                      <div key={i} className="flex justify-between ">
                        <div className="text-sm 2xl:text-base flex items-center gap-1">
                          <span>
                            {slot?.date
                              ? new Date(slot.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    weekday: "short",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )
                              : "No date selected"}
                          </span>
                          <span className="flex items-center gap-1 ">
                            <Svg
                              name="rupee"
                              className="size-3 text-[#f76900] inline"
                            />
                            {Number(spaceData?.originalPrice)?.toLocaleString(
                              "en-IN"
                            )}
                          </span>
                          <span>
                            {getDurationInHours(
                              slot?.startTime,
                              slot?.endTime
                            ) != 0 &&
                              `X ${getDurationInHours(
                                slot?.startTime,
                                slot?.endTime
                              )} hours`}{" "}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 min-[1400px]:text-base text-sm">
                          <Svg
                            name="rupee"
                            className="size-3 text-[#f76900] inline"
                          />
                          {(
                            getDurationInHours(slot?.startTime, slot?.endTime) *
                            spaceData?.originalPrice
                          )?.toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between text-[#f76900] border-b py-1.5 border-[#DBDBDB]">
                    <span className="text-sm 2xl:text-base">Subtotal</span>
                    <span className="">
                      {subtotal?.toLocaleString("en-IN")}{" "}
                      <Svg
                        name="rupee"
                        className="size-3.5 text-[#f76900] inline"
                      />
                    </span>
                  </div>

                  <div className="flex justify-between text-[#f76900] border-b py-1.5 border-[#DBDBDB]">
                    <span className="text-sm 2xl:text-base">GST (18%)</span>
                    <span className="">
                      {gst?.toLocaleString("en-IN")}{" "}
                      <Svg
                        name="rupee"
                        className="size-3.5 text-[#f76900] inline"
                      />
                    </span>
                  </div>

                  <div className="flex justify-between text-[#f76900] py-1.5">
                    <span className="font-medium">Total</span>
                    <span className="">
                      {total?.toLocaleString("en-IN")}{" "}
                      <Svg
                        name="rupee"
                        className="size-3.5 text-[#f76900] inline"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              disabled={isSubmitPending}
              type="submit"
              className="md:hidden block cursor-pointer w-fit px-5 bg-[#f76900] hover:bg-[#ff7c52] text-white rounded-[15px] font-semibold uppercase tracking-[1px] py-[10px] my-4 mx-auto"
            >
              {isSubmitPending
                ? "Please wait..."
                : spaceData?.isInstant == 1
                ? "Book Now"
                : "Submit Request"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestToBookPopup;
