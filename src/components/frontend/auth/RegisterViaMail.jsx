import React from "react";
import { useForm, Controller } from "react-hook-form";
import { email, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { postAPI } from "@/services/ApiService";
import { toast } from "sonner";

const RegisterSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

const RegisterViaMail = ({setEmail,setIsShowOtp}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
    },
  });

   const { mutate: sendOtpMutationForRegister,isPending } = useMutation({
      mutationFn: async (payload) => {
        const response = await postAPI("user/check-email", payload);
        return response.data;
      },
      onSuccess: (data,payload) => {
        if(data?.newEmail){
          toast.success(data.message);
          setEmail(payload.email);
          setIsShowOtp(true);
        }else{
          toast.error(data.message);
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  const onSubmit = async (values) => {
    const payload = {
      email: values.email,
    }
    sendOtpMutationForRegister(payload);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="mobile" className="block text-sm font-semibold mb-2">
          Email <span className="text-[#f76900]">*</span>
        </label>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`h-12 px-4 border rounded-md w-full focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-orange-500"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-[#f44336]">
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer mt-10 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
        >
          {isPending ? "Sending..." : "GET OTP"}
        </button>
      </form>
    </>
  );
};

export default RegisterViaMail;
