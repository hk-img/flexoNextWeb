"use client";

import Svg from "@/components/svg";
import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email").min(1, "Email is required"),
  mobile: z
    .string()
    .min(1, "Mobile is required")
    .regex(/^\d{7,15}$/, "Enter valid mobile"),
  city: z.string().min(1, "Select city"),
  seats: z.string().min(1, "Seats required"),
});

const ExplorePopup = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      city: "",
      seats: "",
    },
  });

  const onSubmit = async (values) => {
    console.log("Quote form data:", values);
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Centered content */}
      <div className="fixed inset-0 flex items-center justify-center px-4">
        <DialogPanel className="w-full max-w-3xl rounded-[11px] bg-white p-6 relative overflow-y-auto h-full [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]">
          <div className="pb-6 flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">Get Quotes</DialogTitle>
            <button onClick={() => setIsOpen(false)} className="text-black cursor-pointer">
              <Svg name="close" className="size-5" />
            </button>
          </div>

          <div className="px-5 py-[10px] bg-[#f4f4f4] mb-6">
            <p className="text-[#000000de] text-[13px]">
              Our workspace advisor will get in touch to help you with your requirement.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  First name <span className="text-[#dc3545]">*</span>
                </label>
                <input
                  {...register("firstName")}
                  placeholder="Enter First Name"
                  className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5"
                />
                {errors.firstName && (
                  <div className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0">
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              {/* Last Name */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  Last name <span className="text-[#dc3545]">*</span>
                </label>
                <input
                  {...register("lastName")}
                  placeholder="Enter Last Name"
                  className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5"
                />
                {errors.lastName && (
                  <div className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0">
                    {errors.lastName.message}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  Email <span className="text-[#dc3545]">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter Email"
                  className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5"
                />
                {errors.email && (
                  <div className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0">
                    {errors.email.message}
                  </div>
                )}
              </div>

              {/* Mobile */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  Mobile <span className="text-[#dc3545]">*</span>
                </label>
                <div className="flex">
                  <span className="px-3 py-3 border border-[#dbdbdb] rounded-l-sm text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    {...register("mobile")}
                    placeholder="Enter Mobile"
                    className="flex-1 rounded-r-sm border border-[#dbdbdb] px-3 py-2.5"
                  />
                </div>
                {errors.mobile && (
                  <div className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0">
                    {errors.mobile.message}
                  </div>
                )}
              </div>

              {/* City */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  City <span className="text-[#dc3545]">*</span>
                </label>
                <select
                  {...register("city")}
                  className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5"
                >
                  <option value="">Select City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
                {errors.city && (
                  <div className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0">
                    {errors.city.message}
                  </div>
                )}
              </div>

              {/* Seats */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">
                  No. of Seats <span className="text-[#dc3545]">*</span>
                </label>
                <select
                  {...register("seats")}
                  className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5"
                >
                  <option value="">Select No. of Seats</option>
                  <option value="1-5">1–5</option>
                  <option value="6-20">6–20</option>
                  <option value="21+">21+</option>
                </select>
                {errors.seats && (
                  <div className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0">
                    {errors.seats.message}
                  </div>
                )}
              </div>
            </div>

            <div className="border-b pb-4 border-[#dbdbdb]">
              <button
                type="submit"
                className="mt-6 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
              >
                {"SUBMIT"}
              </button>
            </div>
          </form>

          <p className="mt-4 pb-5 px-5 text-balance text-[11px] text-[#000000de] text-center">
            After you submit a workspace enquiry to us, we may share your details with workspace
            providers, who may contact you to follow up on your enquiry. Please read our{" "}
            <a href="#" className="text-[#f76900]">
              Privacy Policy
            </a>{" "}
            for details of how we process the information.
          </p>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ExplorePopup;
