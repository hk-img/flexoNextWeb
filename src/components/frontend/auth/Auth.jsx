"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Auth = ({ isOpen, setIsOpen }) => {
  const validationSchema = Yup.object({
    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Must be exactly 10 digits"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Data:", values);
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            ✕
          </button>

          <DialogTitle className="text-xl font-semibold text-center">
            Register/<span className="text-orange-500">Create an Account</span>
          </DialogTitle>

          <Formik
            initialValues={{ mobile: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mt-6">
                <label htmlFor="mobile" className="block text-sm font-medium">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <div className="flex mt-1">
                  <span className="px-3 py-2 bg-gray-100 border rounded-l-md text-sm">
                    +91
                  </span>
                  <Field
                    id="mobile"
                    name="mobile"
                    type="tel"
                    className="flex-1 border rounded-r-md px-3 py-2 outline-none"
                    placeholder="Enter mobile number"
                  />
                </div>
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "GET OTP"}
                </button>
              </Form>
            )}
          </Formik>

          <div className="my-6 flex items-center">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-sm text-gray-500">or Continue with</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 border rounded-md py-2 hover:bg-gray-50">
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="inline w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
            <button className="flex-1 border rounded-md py-2 hover:bg-gray-50">
              📧 Mail
            </button>
          </div>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
            </span>
            <button className="text-orange-500 font-semibold hover:underline">
              LOGIN
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Auth;
