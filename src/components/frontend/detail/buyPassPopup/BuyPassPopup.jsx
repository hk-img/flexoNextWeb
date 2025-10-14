import Svg from "@/components/svg";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/useAuth";
import ImageWithFallback from "@/components/ImageWithFallback";
import { convertSlugToCapitalLetter } from "@/services/Comman";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "sonner";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email").min(1, "Email is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),
  company: z.string().optional(),
  dates: z.array(z.date()).min(1, "Please select at least one date"),
  guests: z.string().min(1, "Please select number of guests"),
  message: z.string().optional(),
});

const BuyPassPopup = ({ setIsOpen, spaceData }) => {
  const { user, token } = useAuth();
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      dates: [],
      guests: "1",
      message: "",
    },
  });
  const values = watch();
  console.log({ values }, "Wefweft");

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("email", user.email);
      setValue("phoneNumber", user.mobile);
      setValue("company", user.companyName);
    }
  }, [user]);

  const { mutate: submitMutate, isPending: isSubmitPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await postAPIAuthWithoutBearer(
        `user/coworkingCreateBooking/${spaceData?.id}`,
        payload,
        token
      );
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (values) => {
    const dates = values.dates.map((date) => {
      const d = new Date(date);
      d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
      return d.toISOString().split("T")[0];
    });
    const payload = {
      startDate: dates,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobile: values.phoneNumber,
      companyName: values.company,
      ofDays: 1,
      estimateArrivalTime: "00.00",
      noOfGuest: values.guests,
      message: values?.message,
      spaceLocation: spaceData?.location_name,
    };
    submitMutate(payload);
  };
  const subtotal = values?.dates?.reduce((acc,item)=> acc + (spaceData?.originalPrice * values?.guests),0)
  const gst = subtotal * 0.18;
  const total = subtotal + gst;
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center animate-fadeIn p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full xl:max-w-[1000px] md:max-w-[80vw] max-w-full md:mx-[12px] rounded-sm bg-white  overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn ">
        <div
          className="flex absolute top-4 right-4 items-center justify-end"
          onClick={() => setIsOpen(false)}
        >
          <Svg name="close" className="size-[18px] cursor-pointer" />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 bg-[#fefaf7]">
          <div className="bg-white p-5">
            <div className="mb-[21px] border-b border-[#DBDBDB] pb-[11px]">
              <h2 className="2xl:text-xl text-lg font-medium ">
                Complete your Day Pass Booking
              </h2>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-[18px] mb-[10px]"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-x-[35px] gap-y-5">
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    {...register("firstName")}
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                  >
                    First Name *
                  </label>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    {...register("lastName")}
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                  >
                    Last Name *
                  </label>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative md:col-span-2">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    {...register("email")}
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                  >
                    Email Address *
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    {...register("phoneNumber")}
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                  >
                    Phone Number *
                  </label>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    placeholder="Company Name"
                    {...register("company")}
                    className="peer w-full border-b text-sm text-[#0000008a] placeholder:text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-1.5 bg-transparent"
                  />
                  <label
                    htmlFor="company"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                  >
                    Company Name
                  </label>
                </div>
                <div className="relative">
                  <Controller
                    name="dates"
                    control={control}
                    render={({ field }) => {
                      const handleDateChange = (date) => {
                        const current = field.value || [];
                        const exists = current.find(
                          (d) => d.toDateString() === date.toDateString()
                        );

                        let updatedDates;
                        if (exists) {
                          updatedDates = current.filter(
                            (d) => d.toDateString() !== date.toDateString()
                          );
                        } else {
                          updatedDates = [...current, date];
                        }

                        field.onChange(updatedDates);

                        // Close calendar after selection
                        setOpen(false);
                      };

                      const removeDate = (dateToRemove) => {
                        field.onChange(
                          field.value.filter(
                            (d) =>
                              d.toDateString() !== dateToRemove.toDateString()
                          )
                        );
                      };

                      return (
                        <>
                          <input
                            readOnly
                            onClick={() => setOpen(true)}
                            value={
                              field.value.length > 0
                                ? field.value
                                    .map((d) => d.toLocaleDateString("en-IN"))
                                    .join(", ")
                                : ""
                            }
                            placeholder="Select Dates"
                            className="border rounded-md px-3 py-2 w-full"
                          />
                          <DatePicker
                            selected={null}
                            onChange={handleDateChange}
                            highlightDates={field.value}
                            open={open}
                            onClickOutside={() => setOpen(false)}
                            minDate={new Date()}
                            calendarClassName="rounded-md border border-[#ddd] shadow-md"
                          />

                          {/* Selected Dates */}
                          {field.value.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {field.value.map((d, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 bg-gray-100 border rounded-full px-3 py-1 text-sm text-gray-700"
                                >
                                  {d.toLocaleDateString("en-IN")}
                                  <button
                                    type="button"
                                    onClick={() => removeDate(d)}
                                    className="text-red-500 hover:text-red-700 font-bold"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}

                          {errors.dates && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.dates.message}
                            </p>
                          )}
                        </>
                      );
                    }}
                  />
                </div>
                {/* Guests */}
                <div className="relative">
                  <select
                    id="guests"
                    {...register("guests")}
                    className="peer w-full border-b text-sm text-[#0000008a] border-[#ddd] focus:border-[#3f51b5] outline-none pt-2 pb-2 bg-transparent"
                  >
                    <option value="">No. of Guest*</option>
                    {Array?.from(
                      { length: spaceData?.dayPassSeat },
                      (_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      )
                    )}
                  </select>
                  {errors.guests && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.guests.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="relative md:col-span-2">
                  <textarea
                    id="message"
                    rows="1"
                    placeholder="Message or additional requirements"
                    {...register("message")}
                    className="peer w-full border-b border-[#ddd] text-sm text-[#0000008a] py-2 outline-none focus:border-[#3f51b5] bg-transparent"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                  >
                    Message or additional requirements
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitPending}
                className="cursor-pointer md:w-fit w-full bg-[#f76900] 2xl:text-[15px] text-base px-5 border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
              >
                {isSubmitPending ? "Loading..." : "CONTINUE"}
              </button>
            </form>
            <p className="text-xs text-[#000000de]">
              You will not be charged until you confirm this booking on the next
              screen
            </p>
          </div>
          <div className="bg-[#FFF0E6] p-5  flex flex-col gap-3">
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
                    {convertSlugToCapitalLetter(spaceData?.location_name || "")}
                  </p>
                  <p className="text-black  2xl:text-base text-sm font-bold">
                    {" "}
                    <Svg
                      name="rupee"
                      className="size-4 text-[#f76900] inline"
                    />{" "}
                    {spaceData?.originalPrice} / Day
                  </p>
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
                {values?.dates?.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b py-1 border-[#DBDBDB]"
                  >
                    <span className="text-sm 2xl:text-base">
                      {new Date(item).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                      , Guest {values?.guests} X
                    </span>
                    <p className="text-black 2xl:text-base text-sm">
                      {" "}
                      <Svg
                        name="rupee"
                        className="size-4 text-[#f76900] inline"
                      />{" "}
                      {spaceData?.originalPrice}
                    </p>
                    <span className="font-semibold">
                      {values?.guests * spaceData?.originalPrice}{" "}
                      <Svg
                        name="rupee"
                        className="size-[18px] text-[#f76900] inline"
                      />
                    </span>
                  </div>
                ))}
                <div className="flex justify-between text-[#f76900] border-b py-1 border-[#DBDBDB]">
                  <span className="text-sm 2xl:text-base">Subtotal</span>
                  <span className="font-semibold">
                    {subtotal?.toFixed(2)} {" "}
                    <Svg
                      name="rupee"
                      className="size-[18px] text-[#f76900] inline"
                    />
                  </span>
                </div>
                <div className="flex justify-between text-[#f76900]  border-b py-1 border-[#DBDBDB]">
                  <span className="text-sm 2xl:text-base">GST(18%)</span>
                  <span className="font-semibold">
                    {gst?.toFixed(2)}{" "}
                    <Svg
                      name="rupee"
                      className="size-[18px] text-[#f76900] inline"
                    />
                  </span>
                </div>
                <div className="flex justify-between text-[#f76900] font-semibold">
                  <span>Payable Now</span>
                  <span className="font-semibold">
                    {total?.toFixed(2)}{" "}
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
    </div>
  );
};

export default BuyPassPopup;
