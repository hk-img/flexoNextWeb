import Svg from "@/components/svg";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import CoworkingSelectionScreen from "./CoworkingSelectionScreen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ShowToast } from "@/utils/ShowToast";

const defaultTime = [
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
  { label: "6:00 PM", value: "17:00", disabled: false },
  { label: "6:30 PM", value: "17:30", disabled: false },
];

const scheduleSchema = z.object({
  preferedDate: z.date().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
});

const ScheduleVisitPopup = ({ type, setIsOpen, spaceId,workingDays,spaceData,hostHolidays }) => {
  const [timeSlot, setTimeSlot] = useState(defaultTime);
  const [formData, setFormData] = useState({
    spaceType: "",
    howManyPeople: "",
  });
  const [error, setError] = useState({
    spaceType: "",
    howManyPeople: "",
  });
  const [toggleScheduling, setToggleScheduling] = useState(false);
  const [successScreen, setSuccessScreen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      preferedDate: "",
      preferredTime: "",
    },
  });
  const values = watch();
  const getTimeSlot = (selectedDate) => {
    // Agar date nahi hai, defaultTime return karo
    if (!selectedDate) return defaultTime;

    const times = [];
    const now = new Date();
    let start = new Date();
    start.setHours(10, 0, 0, 0);
    let end = new Date();
    end.setHours(18, 30, 0, 0);

    const dateObj = new Date(selectedDate);
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
      const label = `${displayHours}:${displayMinutes} ${period}`;

      // defaultTime me se value lene ke liye
      const defaultSlot = defaultTime.find((t) => t.label === label);

      const value = defaultSlot?.value || label;
      const isDisabled = isToday && start <= now;

      times.push({ label, value, disabled: isDisabled });
      start.setMinutes(start.getMinutes() + 30);
    }

    return times;
  };

  useEffect(() => {
    if (values?.preferedDate) {
      const timeSlot = getTimeSlot(values?.preferedDate);
      setTimeSlot(timeSlot);
    }
  }, [values?.preferedDate]);

  const { mutate: longTermSubmitMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `user/longTermScheduleVisit/${spaceId}`,
        payload
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data?.result?.success) {
        setSuccessScreen(true);
      } else {
        ShowToast(data?.result?.message,"error");
      }
    },
    onError: (err) => {
      ShowToast(err.response?.data?.message || "Something went wrong","error");
    },
  });

  const onSubmit = (values) => {
    if (type == "coworking") {
      setToggleScheduling(true);
    } else if (type == "longterm") {
      const onlyStartDate = new Date(values?.preferedDate);
      onlyStartDate.setMinutes(onlyStartDate.getMinutes() - onlyStartDate.getTimezoneOffset());
      const onlyStartDateStr = onlyStartDate.toISOString().split("T")[0];
      const payload = {
        visitDate: onlyStartDateStr,
        visitTime: values?.preferredTime,
      };
      longTermSubmitMutate(payload);
    }
  };

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


  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center animate-fadeIn px-[1.5px]">
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
              Visit scheduled successfully. Our team will get back to you
              shortly.
            </p>
            <button onClick={() => setIsOpen(false)} className="cursor-pointer w-fit px-[35px] mt-1.5 bg-[#f76900] text-lg border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]">
              OK
            </button>
          </div>
        </div>
      ) : (
        <div className={`relative w-full ${toggleScheduling ? "lg:max-w-[80%]" : "lg:max-w-[65%] max-h-[85vh]"} md:h-auto  h-full  rounded-md bg-white animate-scaleIn overflow-hidden`}>
          <div className="p-5 flex items-center justify-between">
            <h2 className="min-[1400px]:text-xl text-lg font-medium leading-[1.6] text-[#141414]">
              {toggleScheduling ? "Visit Scheduling" : "Schedule Visit"}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black cursor-pointer"
            >
              <Svg name="close" className="size-3" />
            </button>
          </div>
          <div className="h-full">
            <div className="bg-[#F3F3F3] py-[5px]">
              <p className="2xl:text-base text-sm text-[#777] text-center">
                {toggleScheduling
                  ? "Book a tour with one of our experts. It only takes a minute!"
                  : "Schedule a personalised tour with one of our experts"}
              </p>
            </div>
            {toggleScheduling ? (
              <CoworkingSelectionScreen spaceId={spaceId} formData={formData} setFormData={setFormData} error={error} setError={setError} values={values} setToggleScheduling={setToggleScheduling} setSuccessScreen={setSuccessScreen} spaceData={spaceData}/>
            ) : (
              <>
                <div className="overflow-y-auto h-[calc(100%-99px)] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]">
                  <div className="md:max-w-[70%] max-w-full mx-auto text-center pt-5 ">
                    <div>
                      <h2 className="text-[#141414]  font-light text-[26px] text-center">
                        When would you like to visit?
                      </h2>
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="px-5 pb-4 pt-2 space-y-5"
                    >
                        <div className="relative [&_.react-datepicker-wrapper]:!w-full">
                          <Controller
                            name="preferedDate"
                            control={control}
                            rules={{ required: "Preferred view date is required" }}
                            render={({ field }) => (
                              <DatePicker
                                selected={field.value}
                                onChange={(date) => field.onChange(date)}
                                minDate={new Date()}
                                filterDate={(date) => !isDisabledDate(date)} 
                                placeholderText="Prefered View Date*"
                                dateFormat="dd-MM-yyyy"
                                renderDayContents={(day, date) => {
                                  const title = getHolidayTitle(date);
                                  return (
                                    <span
                                      title={title} 
                                      className={
                                        title
                                          ? "font-semibold" 
                                          : ""
                                      }
                                    >
                                      {day}
                                    </span>
                                  );
                                }}
                                className={`block h-[58px] px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border ${
                                  errors.preferedDate
                                    ? "border-red-500"
                                    : "border-gray-300 hover:border-black"
                                } appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer`}
                              />
                              
                            )}
                          />
                          <Svg
                            name="calender"
                            className="absolute size-4 right-3 top-1/2 -translate-y-1/2 text-[#f76900] pointer-events-none"
                          />
                          <label
                            htmlFor="preferedDate"
                            className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:text-[#3f51b5] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                          >
                            Prefered View Date*
                          </label>
                          {errors.preferedDate && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.preferedDate.message}
                            </p>
                          )}
                        </div>
                      <div className="relative">
                        <Controller
                          name="preferredTime"
                          control={control}
                          render={({ field }) => (
                            <select
                              {...field}
                              id="preferredTime"
                              className={`peer block h-[58px] w-full appearance-none rounded-lg border ${
                                errors.preferredTime
                                  ? "border-red-500"
                                  : "border-gray-300 hover:border-black"
                              } bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#3f51b5] focus:outline-none focus:ring-0`}
                            >
                              <option value="" disabled hidden>
                                Select Time
                              </option>
                              {timeSlot.map((t, i) => (
                                <option
                                  key={i}
                                  value={t.value}
                                  disabled={t.disabled}
                                >
                                  {t.label}
                                </option>
                              ))}
                            </select>
                          )}
                        />
                        <label
                          htmlFor="preferredTime"
                          className="absolute text-sm font-semibold text-[#00000099] bg-white px-2 left-2 top-1/2 -translate-y-1/2 duration-300 transform scale-100 origin-[0]
                    peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#3f51b5]
                    peer-valid:top-2 peer-valid:scale-75 peer-valid:-translate-y-4"
                        >
                          Preferred View Time *
                        </label>
                        <Svg
                          name="arrowDropDown"
                          className="absolute text-[#0000008a] size-4 right-2 top-1/2 -translate-y-1/2"
                        />
                        {errors.preferredTime && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.preferredTime.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="border-t m-5 mt-0 pt-4  border-[#0000001a]">
                    <p className="text-[#777] text-[11px]">
                      After you submit a workspace enquiry to us, we may share
                      your details with workspace providers, who may contact you
                      to follow up on your enquiry. Please read our{" "}
                      <span onClick={()=>{
                        window.open("/privacy-policy", "_blank")
                      }} className="text-[#f76900] cursor-pointer">
                        Privacy Policy
                      </span>{" "}
                      for details of how we process the information.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleVisitPopup;
