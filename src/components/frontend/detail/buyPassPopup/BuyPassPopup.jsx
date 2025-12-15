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
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ShowToast } from "@/utils/ShowToast";

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
  const router = useRouter();
  const { user, token } = useAuth();
  const [open, setOpen] = useState(false);
  const [successScreen, setSuccessScreen] = useState(false);
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

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("email", user.email);
      setValue("phoneNumber", user.mobile);
      setValue("company", user.companyName);
    }
  }, [user]);

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
          ShowToast(data?.message,"error");
        }
      },
      onError: (error) => {
        ShowToast(error?.message,"error");
      },
    });

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
      if (data?.success) {
        const options = {
          key: data.razorpayOrder.key_id,
          amount: data.razorpayOrder.amount_paid * 100,
          currency: "INR",
          name: data.razorpayOrder.product_name || "Booking Payment",
          description: data.razorpayOrder.description || "Payment",
          order_id: data.razorpayOrder.order_id,
          prefill: {
            name: data.userData?.name,
            email: data.userData?.email,
            contact: data.userData?.mobile || data.razorpayOrder.contact,
          },
          handler: function (response) {
            const payload = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              amount: data.razorpayOrder.amount_paid,
            };
            paymentStatusMutate(payload);
          },
          modal: {
            ondismiss: function () {
              ShowToast("Payment Failed!","error");
            },
          },
          theme: { color: "#f76900" },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        ShowToast(data?.message,"error");
      }
    },
    onError: (error) => {
      ShowToast(error.message,"error");
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
  const subtotal = values?.dates?.reduce(
    (acc, item) => acc + spaceData?.originalPrice * values?.guests,
    0
  );
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
            <div className="mt-7 ">
              <Svg name="checkCircle" className="size-[75px] text-[#05ac34]" />
            </div>
            <p className=" text-base text-[#212529] text-center">
              Booking complete
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer w-fit px-[35px] mt-1.5 bg-[#f76900] text-lg border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
            >
              OK
            </button>
          </div>
        </div>
      ) : (
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
                <div className="grid md:grid-cols-2 gap-x-[35px] gap-y-[22px]">
                  {/* First Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      {...register("firstName")}
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                      }}
                      className="peer w-full border-b text-sm text-black placeholder:text-[#0000008a] border-[#0000006b] focus:border-[#3f51b5] outline-none pt-2.5 pb-1.5 bg-transparent"
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                    >
                      First Name *
                    </label>
                    {errors.firstName && (
                      <p className="text-[#f44336] text-[11px] mt-1 absolute -bottom-4.5">
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
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                      }}
                      className="peer w-full border-b text-sm text-black placeholder:text-[#0000008a] border-[#0000006b] focus:border-[#3f51b5] outline-none pt-2.5 pb-1.5 bg-transparent"
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                    >
                      Last Name *
                    </label>
                    {errors.lastName && (
                      <p className="text-[#f44336] text-[11px] mt-1 absolute -bottom-4.5">
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
                      className="peer w-full border-b text-sm text-black placeholder:text-[#0000008a] border-[#0000006b] focus:border-[#3f51b5] outline-none pt-2.5 pb-1.5 bg-transparent"
                    />
                    <label
                      htmlFor="email"
                      className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                    >
                      Email Address *
                    </label>
                    {errors.email && (
                      <p className="text-[#f44336] text-[11px] mt-1 absolute -bottom-4.5">
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
                      className="peer w-full border-b text-sm text-black placeholder:text-[#0000008a] border-[#0000006b] focus:border-[#3f51b5] outline-none pt-2.5 pb-1.5 bg-transparent"
                    />
                    <label
                      htmlFor="phoneNumber"
                      className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-0"
                    >
                      Phone Number *
                    </label>
                    {errors.phoneNumber && (
                      <p className="text-[#f44336] text-[11px] mt-1 absolute -bottom-4.5">
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
                      className="peer w-full border-b text-sm text-black placeholder:text-[#0000008a] border-[#0000006b] focus:border-[#3f51b5] outline-none pt-2.5 pb-1.5 bg-transparent"
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
                            <div className="flex items-center border-b border-[#0000006b] ">
                              <span><Svg name="calender" className="size-4 text-[#f76900]" /></span>
                            
                              <div
                                className=" px-3 py-2 w-full cursor-pointer text-sm flex flex-wrap items-center gap-2 min-h-[39px]"
                                onClick={() => setOpen(true)}
                              >
                                
                                {field.value.length === 0 ? (
                                  <span className="text-[#0000008a] text-[10px]">Choose one and more dates</span>
                                ) : (
                                  field.value.map((d, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-2 bg-[#e0e0e0] hover:bg-[#c5c5c5]  px-3 py-1.5 rounded-full text-xs shadow-sm"
                                    >
                                      {d.toLocaleDateString("en-IN")}
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          removeDate(d);
                                        }}
                                        className="text-white bg-black/40 size-4 flex items-center justify-center rounded-full text-xs"
                                      >
                                        <Svg name="close" className="size-3 text-white"/>
                                      </button>
                                    </div>
                                  ))
                                )}
                              </div>
                            </div>
                            {open && (
                              <div className="absolute bottom-2 mt-2 z-50">
                                <DatePicker
                                  selected={null}
                                  onChange={handleDateChange}
                                  highlightDates={field.value}
                                  inline
                                  minDate={new Date()}
                                  calendarClassName="rounded-md border border-[#0000006b] shadow-md"
                                  onClickOutside={() => setOpen(false)}
                                />
                              </div>
                            )}

                            {errors.dates && (
                              <p className="text-[#f44336] text-[11px] mt-1 absolute -bottom-4.5">{errors.dates.message}</p>
                            )}
                          </>

                        );
                      }}
                    />
                  </div>
                  {/* Guests */}
                  <div>
                    <div className="relative flex items-end">
                      <select
                        id="guests"
                        {...register("guests")}
                        className="peer w-full border-b text-sm text-black border-[#0000006b] focus:border-[#3f51b5] outline-none pt-2 pb-2 bg-transparent"
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
                    
                    </div>
                    {errors.guests && (
                        <p className="text-[#f44336] text-[11px] mt-1 absolute -bottom-4.5">
                          {errors.guests.message}
                        </p>
                      )}
                    </div>

                  {/* Message */}
                  <div className="relative md:col-span-2 py-2">
                    <textarea
                      id="message"
                      rows="2"
                      placeholder="Message or additional requirements"
                      {...register("message")}
                      className="peer w-full border-b border-[#0000006b] text-sm text-black outline-none focus:border-[#3f51b5] bg-transparent"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute duration-300 text-sm transform text-[#0000008a] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:text-[#3f51b5] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 start-0"
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
                You will not be charged until you confirm this booking on the
                next screen
              </p>
            </div>
            <div className="bg-[#FFF0E6] px-5  py-10 flex flex-col gap-3">
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
                        {(values?.guests * spaceData?.originalPrice)?.toLocaleString("en-IN")}{" "}
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
                      {subtotal?.toLocaleString("en-IN")}{" "}
                      <Svg
                        name="rupee"
                        className="size-[18px] text-[#f76900] inline"
                      />
                    </span>
                  </div>
                  <div className="flex justify-between text-[#f76900]  border-b py-1 border-[#DBDBDB]">
                    <span className="text-sm 2xl:text-base">GST(18%)</span>
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

export default BuyPassPopup;
