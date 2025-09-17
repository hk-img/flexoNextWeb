"use client";
import { useState } from 'react';
import Svg from "@/components/svg";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

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
  const [phone, setPhone] = useState("");
  const [countryName, setCountryName] = useState("");
  const [dialCode, setDialCode] = useState("");

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[600px] rounded-sm bg-white p-6 shadow-xl relative">
          <div className="px-5 py-4 border-b border-[#dbdbdb] flex items-center justify-between">
            <DialogTitle className="text-xl font-medium">
              Register/Create an<span className="text-[#f76900]"> Account</span>
            </DialogTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black cursor-pointer"
            >
              <Svg name="close" className="size-5" />
            </button>
          </div>

          <Formik
            initialValues={{ mobile: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mt-6">
                <label htmlFor="mobile" className="block text-sm font-semibold">
                  Mobile <span className="text-[#f76900]">*</span>
                </label>
                <div>
                 <PhoneInput
                    country={"ua"}
                    value={phone}
                    onChange={(value, countryData) => {
                      setPhone(value);
                      setCountryName(countryData.name);
                      setDialCode(countryData.dialCode);
                    }}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                      placeholder: `${countryName ? countryName + " " : ""} Phone number`
                    }}
                  />
                </div>
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="mt-1 text-sm text-[#f76900]"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" mt-10 w-full bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-4 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                >
                  {isSubmitting ? "Sending..." : "GET OTP"}
                </button>
              </Form>
            )}
          </Formik>

          <div className="my-6 flex items-center">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-sm text-[#000000de]">or Continue with</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex gap-3 px-10">
            <button className="flex items-center justify-center border rounded-md py-0.5 px-0.5 bg-[#1a73e8] hover:bg-[#5194ee] transition duration-300 text-white">
              <div className="bg-white h-full p-1 flex items-center justify-center rounded-l-sm">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
              </div>
              <span className="text-sm px-2">Sign in with Google</span>
            </button>
            <button className="flex-1 border border-[#dbdbdb] rounded-md py-1 flex items-center justify-center gap-2">
              <Svg name="mail" className="size-4 text-black"/>
              <span className='text-sm'> Mail</span>
            </button>
          </div>

          <div className="mt-6 text-center flex items-center justify-center gap-4">
            <span className="text-sm text-black">
              Already have an account?
            </span>
            <button className="bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-3 px-5 rounded-full font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]">
              LOGIN
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Auth;
