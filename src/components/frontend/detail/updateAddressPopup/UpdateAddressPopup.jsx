import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/useAuth";
import Svg from "@/components/svg";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { ShowToast } from "@/utils/ShowToast";
import { useMutation } from "@tanstack/react-query";

const profileSchema = z.object({
  gst: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val || /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(val),
      { message: "Invalid GST number format" }
    ),
  billingAddress1: z.string().min(1, "Billing address is required"),
  billingAddress2: z.string().optional(),
});

const UpdateAddressPopup = ({ setIsOpen }) => {
  const { token,user,getUserDetails } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      gst: user?.gstNumber || "",
      billingAddress1: user?.billingAddress || "",
      billingAddress2: user?.billingAddress2 || "",
    },
  });

  const { mutate: updateProfileMutate, isPending: updateProfileLoading } =
    useMutation({
      mutationFn: async (payload) => {
        const res = await postAPIAuthWithoutBearer(
          "user/updateProfile",
          payload,
          token
        );
        return res.data;
      },
      onSuccess: (data) => {
        if (data.success) {
          ShowToast(data.message, "success");
          setIsOpen(false);
          getUserDetails();
        } else {
          ShowToast(data.message, "error");
        }
      },
      onError: (error) => {
        ShowToast(error.message, "error");
      },
    });

  const onSubmit = (values) => {
    const payload = {
      gstNumber: values.gst,
      billingAddress: values.billingAddress1,
      billingAddress2: values.billingAddress2,
    };
    updateProfileMutate(payload);
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-6 animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Update Billing Address
          </h2>
          <div
            className="flex absolute top-4 right-4 items-center justify-center shadow-[0_0_4px_#000] size-[31px] rounded-full bg-white"
            onClick={() => setIsOpen(false)}
          >
            <Svg name="close" className="size-[18px] cursor-pointer" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* GST */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              GST Number
            </label>
            <input
              {...register("gst")}
              placeholder="22AAAAA0000A1Z5"
              className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none ${
                errors.gst
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
              }`}
            />
            {errors.gst && (
              <p className="text-xs text-red-500 mt-1">{errors.gst.message}</p>
            )}
          </div>

          {/* Address 1 */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Billing Address 1 <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={2}
              {...register("billingAddress1")}
              className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm resize-none focus:outline-none ${
                errors.billingAddress1
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
              }`}
            />
            {errors.billingAddress1 && (
              <p className="text-xs text-red-500 mt-1">
                {errors.billingAddress1.message}
              </p>
            )}
          </div>

          {/* Address 2 */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Billing Address 2 (Optional)
            </label>
            <textarea
              rows={2}
              {...register("billingAddress2")}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={updateProfileLoading}
              className="cursor-pointer w-full py-2 rounded-lg bg-[#f76900] text-white hover:bg-[#ff7c52] transition"
            >
              {updateProfileLoading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAddressPopup;
