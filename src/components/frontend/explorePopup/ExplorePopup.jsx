"use client";

import Svg from "@/components/svg";
import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ExplorePopup = ({ isOpen, setIsOpen }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter 10-digit mobile")
      .required("Mobile is required"),
    city: Yup.string().required("Select city"),
    seats: Yup.string().required("Seats required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Quote form data:", values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      setIsOpen(false);
    }, 800);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Centered content */}
      <div className="fixed inset-0 flex  items-center justify-center px-4">
        <DialogPanel className="w-full max-w-3xl rounded-[11px] bg-white p-6 relative overflow-y-auto h-full [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]">
          <div className="pb-6 flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">
              Get Quotes
            </DialogTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black cursor-pointer"
            >
              <Svg name="close" className="size-5" />
            </button>
          </div>
          <div className="px-5 py-[10px] bg-[#f4f4f4] mb-6">
            <p className="text-[#000000de]  text-[13px]">
              Our workspace advisor will get in touch to help you with your requirement.
            </p>
          </div>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              mobile: "",
              city: "",
              seats: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* Two-column fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-1">
                      First name <span className="text-[#dc3545]">*</span>
                    </label>
                    <Field
                      name="firstName"
                      placeholder="Enter First Name"
                      className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5"
                    />
                    <ErrorMessage name="firstName" component="div" className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0" />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold mb-1">
                      Last name <span className="text-[#dc3545]">*</span>
                    </label>
                    <Field
                      name="lastName"
                      placeholder="Enter Last Name"
                      className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5"
                    />
                    <ErrorMessage name="lastName" component="div" className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0" />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold mb-1">
                      Email <span className="text-[#dc3545]">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5"
                    />
                    <ErrorMessage name="email" component="div" className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0" />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold mb-1">
                      Mobile <span className="text-[#dc3545]">*</span>
                    </label>
                    <div className="flex">
                      <span className="px-3 py-3 border border-[#dbdbdb] rounded-l-sm text-sm">+91</span>
                      <Field
                        name="mobile"
                        type="tel"
                        placeholder="Enter Mobile"
                        className="flex-1 rounded-r-sm border border-[#dbdbdb] px-3 py-2.5"
                      />
                    </div>
                    <ErrorMessage name="mobile" component="div" className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0" />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold mb-1">
                      City <span className="text-[#dc3545]">*</span>
                    </label>
                    <Field as="select" name="city" className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5">
                      <option value="">Select City</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                    </Field>
                    <ErrorMessage name="city" component="div" className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0" />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold mb-1">
                      No. of Seats <span className="text-[#dc3545]">*</span>
                    </label>
                    <Field as="select" name="seats" className="w-full rounded-sm border border-[#dbdbdb] px-3 py-2.5">
                      <option value="">Select No. of Seats</option>
                      <option value="1-5">1–5</option>
                      <option value="6-20">6–20</option>
                      <option value="21+">21+</option>
                    </Field>
                    <ErrorMessage name="seats" component="div" className="font-medium text-[10px] text-[#dc3545] mt-1 absolute -bottom-4 left-0" />
                  </div>
                </div>
                <div className="border-b pb-4 border-[#dbdbdb]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="mt-4 pb-5 px-5 text-balance text-[11px] text-[#000000de] text-center">
            After you submit a workspace enquiry to us, we may share your details with workspace providers, who may contact you to follow up on your enquiry." Please read our
            <a href="#" className="text-[#f76900]">
              Privacy Policy </a> for details of how we process the information.
          </p>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ExplorePopup;
