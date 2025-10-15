import Svg from "@/components/svg";
import React, { useState } from "react";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
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

const RequestToBookPopup = ({ setIsOpen, spaceData, workingDays,hostHolidays }) => {
  const minHours = spaceData?.minimum_hours / 60;
  const router = useRouter();
  const { token } = useAuth();
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
  console.log(values, "Rthrthrth");

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
        setSuccessScreen(true);
        setTimeout(() => {
          router.push(`/booking-detail/${data?.bookingRecord?.id}`);
        }, 1000);
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
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
        toast.error(
          `Slots on ${startDate} are overlapping. Please fix before submitting.`
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
            <p className=" text-base text-[#212529] text-center">
              Thank You For Your Booking Request!
            </p>
            <div>
              Your booking request has been sent to the host. Once the host
              accepts your booking request, you will receive a payment link via
              email. If your requested date and time cannot be accommodated, you
              will be promptly notified.
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
        <div className="relative w-full xl:max-w-[1000px] md:max-w-[80vw] max-w-full md:mx-[12px] rounded-sm bg-white overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1] animate-scaleIn">
          <div
            className="flex absolute top-4 right-4 items-center justify-end"
            onClick={() => setIsOpen(false)}
          >
            <Svg name="close" className="size-[18px] cursor-pointer" />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 bg-[#fefaf7]">
            {/* LEFT SIDE */}
            <div className="bg-white p-5">
              <div className="mb-[21px] border-b border-[#DBDBDB] pb-[11px]">
                <h2 className="2xl:text-xl text-lg font-medium ">
                  Request To Book
                </h2>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                {fields.map((item, index) => (
                  <div
                    key={item.id}
                    className="border-b border-[#ddd] pb-3 mb-3"
                  >
                    <label className="text-sm font-medium block mb-1">
                      Choose a date
                    </label>
                    <Controller
                      control={control}
                      name={`slots.${index}.date`}
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value}
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
                          placeholderText="Select date"
                          className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                        />
                      )}
                    />
                    {errors?.slots?.[index]?.date && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.slots[index].date.message}
                      </p>
                    )}

                    <div className="flex gap-3 mt-2">
                      <div className="flex-1">
                        <label className="text-sm font-medium block mb-1">
                          Start time
                        </label>
                        <Controller
                          control={control}
                          name={`slots.${index}.startTime`}
                          render={({ field }) => {
                            const options = getTimeDateSlot(
                              watch(`slots.${index}.date`)
                            );
                            return (
                              <select
                                {...field}
                                className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                              >
                                <option value="">Select start time</option>
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
                            );
                          }}
                        />
                        {errors?.slots?.[index]?.startTime && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.slots[index].startTime.message}
                          </p>
                        )}
                      </div>
                      <div className="flex-1">
                        <label className="text-sm font-medium block mb-1">
                          End time
                        </label>
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
                                values?.slots?.[index]?.startTime == "00:00" &&
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
                                return toast.error(
                                  `Time difference must be at least ${minHours} hours.`
                                );
                              }
                              field.onChange(value);
                            };
                            return (
                              <select
                                {...field}
                                className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                                onChange={handleChange}
                              >
                                <option value="">Select end time</option>
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

                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-500 text-xs mt-2 underline"
                      >
                        Remove Slot
                      </button>
                    )}
                  </div>
                ))}

                {errors?.slots?.message && (
                  <p className="text-red-500 text-xs">{errors.slots.message}</p>
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
                        (s) => !(endTime < s.startTime || startTime > s.endTime)
                    );

                    if (isOverlap) {
                        toast.error(
                        `Slots on ${startDate} are overlapping. Please fix before submitting.`
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
                      toast.warning(
                        "You can not overlap the time for the same date."
                      );
                    }
                  }}
                  className="cursor-pointer text-[#f76900] font-semibold text-sm"
                >
                  + Add Another Slot
                </button>

                <button
                  disabled={isSubmitPending}
                  type="submit"
                  className="cursor-pointer bg-[#f76900] hover:bg-[#ff7c52] text-white rounded-[15px] font-semibold uppercase tracking-[1px] py-[10px] mt-4"
                >
                  {isSubmitPending ? "Please wait..." : "Submit Request"}
                </button>

                <p className="text-xs text-[#000000de] mt-2">
                  You will not be charged yet. Your booking request will be sent
                  to the host. Once accepted, you’ll receive a link to make
                  payment.
                </p>
              </form>
            </div>

            {/* RIGHT SIDE - Summary */}
            <div className="bg-[#FFF0E6] p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between rounded-[10px] bg-white p-5">
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    width="180"
                    height="105"
                    src={spaceData?.images?.[0]}
                    alt="image"
                    className="w-[180px] h-[105px] rounded-md"
                    fallback="/images/default_image.webp"
                  />
                  <div>
                    <h3 className="font-medium text-base 2xl:text-lg text-[#141414]">
                      {spaceData?.actual_name || spaceData?.name}
                    </h3>
                    <p className="text-sm 2xl:text-base text-[#000000de] flex items-center">
                      <Svg
                        name="location2"
                        className="size-4 shrink-0 text-black"
                      />
                      {convertSlugToCapitalLetter(
                        spaceData?.location_name || ""
                      )}
                    </p>
                    <p className="text-black  2xl:text-base text-sm font-bold">
                      <Svg
                        name="rupee"
                        className="size-4 text-[#f76900] inline"
                      />{" "}
                      {spaceData?.originalPrice} / hr
                    </p>
                    <p>{minHours} hr minimum</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[10px] p-5">
                <div className="mb-[21px] border-b border-[#DBDBDB] pb-[10px]">
                  <h4 className="font-medium text-[#141414] 2xl:text-lg text-base flex items-center gap-1">
                    <Svg
                      name="calender"
                      className="size-4 shrink-0 text-[#f76900]"
                    />
                    Booking Summary
                  </h4>
                </div>

                <div className="space-y-2">
                  {values?.slots?.map((slot, i) => (
                    <div
                      key={i}
                      className="flex justify-between border-b py-1 border-[#DBDBDB]"
                    >
                      <span className="text-sm 2xl:text-base">
                        {slot?.date
                          ? new Date(slot.date).toLocaleDateString("en-US", {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "No date selected"}
                        <span className="font-semibold flex items-center gap-1">
                          <Svg
                            name="rupee"
                            className="size-[18px] text-[#f76900] inline"
                          />
                          {spaceData?.originalPrice}
                        </span>
                        {getDurationInHours(slot?.startTime, slot?.endTime) !=
                          0 &&
                          `X ${getDurationInHours(
                            slot?.startTime,
                            slot?.endTime
                          )} hours`}{" "}
                      </span>
                      <span className="font-semibold flex items-center gap-1">
                        <Svg
                          name="rupee"
                          className="size-[18px] text-[#f76900] inline"
                        />
                        {(
                          getDurationInHours(slot?.startTime, slot?.endTime) *
                          spaceData?.originalPrice
                        )?.toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}

                  <div className="flex justify-between text-[#f76900] border-b py-1 border-[#DBDBDB]">
                    <span className="text-sm 2xl:text-base">Subtotal</span>
                    <span className="font-semibold">
                      {subtotal?.toLocaleString("en-IN")}{" "}
                      <Svg
                        name="rupee"
                        className="size-[18px] text-[#f76900] inline"
                      />
                    </span>
                  </div>

                  <div className="flex justify-between text-[#f76900] border-b py-1 border-[#DBDBDB]">
                    <span className="text-sm 2xl:text-base">GST (18%)</span>
                    <span className="font-semibold">
                      {gst?.toLocaleString("en-IN")}{" "}
                      <Svg
                        name="rupee"
                        className="size-[18px] text-[#f76900] inline"
                      />
                    </span>
                  </div>

                  <div className="flex justify-between text-[#f76900] font-semibold">
                    <span>Payable Now</span>
                    <span className="font-semibold">
                      {total?.toLocaleString("en-IN")}{" "}
                      <Svg
                        name="rupee"
                        className="size-[18px] text-[#f76900] inline"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestToBookPopup;
