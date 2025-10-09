import Svg from "@/components/svg";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { toast } from "sonner";

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
  preferedDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
});

const ScheduleVisitPopup = ({ type, setIsOpen, spaceId }) => {
  const [timeSlot, setTimeSlot] = useState(defaultTime);
  const [toggleScheduling, setToggleScheduling] = useState(false);
  const [successScreen, setSuccessScreen] = useState(false);
  const [formData, setFormData] = useState({
    spaceType: "",
    visitTime: "",
  });
  const [error, setError] = useState({
    spaceType: "",
    visitTime: "",
  });
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
  console.log({values},"Rtghrhrhrtrt")
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const { mutate: coworkingSubmitMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `user/coworkingScheduleVisit/${spaceId}`,
        payload
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data?.result?.success) {
        toast.success(data?.result?.message);
        setSuccessScreen(true);
      } else {
        toast.error(data?.result?.message);
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

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
        toast.success(data?.result?.message);
        setSuccessScreen(true);
      } else {
        toast.error(data?.result?.message);
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });


  const onSubmit = (values) => {
    if (type == "coworking") {
      setToggleScheduling(true);
    } else if (type == "longterm") {
      const payload = {
        visitDate: values.preferedDate,
        visitTime: values?.preferredTime,
      };
      longTermSubmitMutate(payload);
    }
  };
  const handleCoworkingSubmit = () => {
    let error = {};
    if (!formData.spaceType) {
      error.spaceType = "Please select a space type";
    }
    if (!formData.visitTime) {
      error.visitTime = "Please select a visit time";
    }
    setError(error);
    if (Object.keys(error).length === 0) {
      const payload = {
        visitDate: values?.preferedDate,
        visitTime: values?.preferredTime,
        spaceType: formData?.spaceType,
        howManyPeople: values?.preferredTime,
      };
      coworkingSubmitMutate(payload);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center animate-fadeIn p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full max-w-[500px] p-6 mx-[12px] rounded-sm bg-white animate-scaleIn overflow-hidden">
        {successScreen ? (
          <>
          <div className="flex space-y-5 flex-col items-center justify-center">
            <div className="mt-7 ">
              <Svg name="checkCircle" className="size-[75px] text-[#05ac34]" />
            </div>
            <p className=" text-base text-[#212529] text-center">Visit scheduled successfully. Our team will get back to you shortly.</p>
            <button className="cursor-pointer w-fit px-[35px] mt-1.5 bg-[#f76900] text-lg border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]">OK</button>
          </div>
          </>
        ) : (
          <>
            <div className="p-6 flex items-center justify-between">
              <h2 className="2xl:text-xl text-lg font-medium text-[#141414]">
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
                <>
                  <div className="overflow-y-auto h-[calc(100%-90px)] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1] p-5">
                    <div className="md:max-w-[80%] max-w-full mx-auto text-center py-8 ">
                      <h2 className="text-[#141414] font-thin mb-3 text-lg">
                        What type of space are you looking for?
                      </h2>
                      {/* <button
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            spaceType: "Not sure",
                          }));
                          setError((prev) => ({ ...prev, spaceType: "" }));
                        }}
                        className="cursor-pointer border border-[#DBDBDB] hover:shadow-[5px_5px_15px_#0000004d] rounded-md px-5 py-2 text-sm text-[#141414] transition"
                      >
                        Not sure
                      </button> */}
                      <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="spaceType"
                            value="notsure"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="rounded-[5px] px-5 py-2 border peer-checked:border-2 peer-checked:border-[#F76900] text-sm text-[#141414] border-gray-300  
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            Not sure
                          </span>
                        </label>
                      {error?.spaceType && (
                        <span className="text-red-500">{error.spaceType}</span>
                      )}
                      <h2 className="text-[#141414] font-thin mt-10 mb-3 text-lg">
                        For How Many People?
                      </h2>

                      <div className="flex flex-wrap justify-center md:gap-5 gap-3 mb-6">
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="1"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            1
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="2"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            2
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="3"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            3
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="4"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            4
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="5"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            5
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="6"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            6
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="7"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            7
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="8"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            8
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="9"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            9
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="10"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            10
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="11"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            11
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="12"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            12
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="13"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            13
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="14"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            14
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="15"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            15
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="16"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            16
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="17"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            17
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="18"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            18
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="19"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            19
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="20"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            20
                          </span>
                        </label>
                      </div>

                      <div className="flex justify-center gap-5 mb-10">
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="21-50"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-20 h-20 flex items-center justify-center border text-sm text-[#141414] border-gray-300 rounded-full  peer-checked:bg-[#F76900] peer-checked:text-white
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            21-50
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="51-100"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-20 h-20 flex items-center justify-center border text-sm text-[#141414] border-gray-300 rounded-full  peer-checked:bg-[#F76900] peer-checked:text-white
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            51-100
                          </span>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="visitTime"
                            value="100+"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <span
                            className="w-20 h-20 flex items-center justify-center border text-sm text-[#141414] border-gray-300 rounded-full peer-checked:bg-[#F76900] peer-checked:text-white
                              peer-checked:shadow-[5px_5px_15px_#0000004d]  
                              hover:shadow-[5px_5px_15px_#0000004d] transition"
                          >
                            100+
                          </span>
                        </label>
                      </div>
                      {error.visitTime && (
                        <span className="text-red-500">{error.visitTime}</span>
                      )}
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => setToggleScheduling(false)}
                          className="cursor-pointer border border-black text-black px-6 py-2 text-sm rounded-[5px]"
                        >
                          PREVIOUS
                        </button>
                        <button
                          onClick={handleCoworkingSubmit}
                          className="cursor-pointer w-fit px-10 bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                        >
                          SUBMIT
                        </button>
                      </div>
                    </div>
                    <div className="p-5 border-t border-[#0000001a]">
                      <p className="text-[#141414]  font-light text-[11px] text-center py-3">
                        After you submit a workspace enquiry to us, we may share
                        your enquiry details (including contact details) with
                        workspace providers and our commercial broker partners,
                        who may contact you to follow up on your enquiry. Please
                        read our{" "}
                        <a href="" className="text-[#f76900]">
                          Privacy and Cookies Policy
                        </a>{" "}
                        for details of how we process the information you
                        provide.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="overflow-y-auto h-[calc(100%-90px)] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1] p-5">
                    <div className="md:max-w-[80%] max-w-full mx-auto text-center py-8 ">
                      <div>
                        <h2 className="text-[#141414]  font-light text-[26px] text-center py-3">
                          When would you like to visit?
                        </h2>
                      </div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-5 space-y-5"
                      >
                        <div className="relative">
                          <input
                            type="date"
                            id="preferedDate"
                            {...register("preferedDate")}
                            min={new Date().toISOString().split("T")[0]}
                            className={`block h-[58px] px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border ${
                              errors.preferedDate
                                ? "border-red-500"
                                : "border-gray-300 hover:border-black"
                            } appearance-none focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer`}
                            placeholder="Prefered View Date*"
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
                    <div className="border-t py-5 border-[#0000001a]">
                      <p className="text-[#777] text-[11px] text-center">
                        After you submit a workspace enquiry to us, we may share
                        your details with workspace providers, who may contact
                        you to follow up on your enquiry. Please read our{" "}
                        <span className="text-[#f76900] cursor-pointer">
                          Privacy Policy
                        </span>{" "}
                        for details of how we process the information.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleVisitPopup;
