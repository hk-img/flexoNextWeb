"use client";

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
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl relative">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ✕
          </button>

          <DialogTitle className="text-2xl font-semibold mb-1">
            Get Quotes
          </DialogTitle>
          <p className="text-gray-600 mb-6 text-sm">
            Our workspace advisor will get in touch to help you with your requirement.
          </p>

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
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="firstName"
                      placeholder="Enter First Name"
                      className="w-full rounded-md border px-3 py-2"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="lastName"
                      placeholder="Enter Last Name"
                      className="w-full rounded-md border px-3 py-2"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      className="w-full rounded-md border px-3 py-2"
                    />
                    <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="px-3 py-2 bg-gray-100 border rounded-l-md text-sm">+91</span>
                      <Field
                        name="mobile"
                        type="tel"
                        placeholder="Enter Mobile"
                        className="flex-1 rounded-r-md border px-3 py-2"
                      />
                    </div>
                    <ErrorMessage name="mobile" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <Field as="select" name="city" className="w-full rounded-md border px-3 py-2">
                      <option value="">Select City</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                    </Field>
                    <ErrorMessage name="city" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      No. of Seats <span className="text-red-500">*</span>
                    </label>
                    <Field as="select" name="seats" className="w-full rounded-md border px-3 py-2">
                      <option value="">Select No. of Seats</option>
                      <option value="1-5">1–5</option>
                      <option value="6-20">6–20</option>
                      <option value="21+">21+</option>
                    </Field>
                    <ErrorMessage name="seats" component="div" className="text-sm text-red-600 mt-1" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT"}
                </button>
              </Form>
            )}
          </Formik>

          <p className="mt-4 text-xs text-gray-500">
            After you submit a workspace enquiry, we may share your details with workspace providers
            to follow up on your enquiry. Please read our{" "}
            <a href="/privacy" className="text-orange-500 underline">
              Privacy Policy
            </a>{" "}
            for details of how we process information.
          </p>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ExplorePopup;
