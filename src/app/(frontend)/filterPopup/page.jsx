"use client";
import { useState, useEffect } from "react";
import Svg from "@/components/svg";
import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const filterPopup = () => {
  return (
    <>
      <section className="w-full relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true"></div>
          <div className="fixed inset-0 flex items-center justify-center px-4">
            <div className="w-full h-full max-w-[546px]">
              <div className="block p-6 bg-white text-black shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] rounded-sm overflow-auto outline-0 w-full h-full max-h-full">
                <div className="relative">
                  <div className="flex justify-between items-center -mx-[15px]">
                    <p className="w-1/6 md:w-1/12 px-4 text-sm">Filters</p>
                    <div className="applyBtn w-2/6 md:w-1/4 px-4 text-center">
                      <button className="bg-[#f76900] py-[10px] px-7 text-white font-normal inline-block text-base rounded-sm">Apply</button>
                    </div>
                    <div className="clearBtn w-2/6 md:w-1/4 px-4 text-center">
                      <button className="bg-[#f76900] py-[10px] px-7 text-white font-normal inline-block text-base rounded-sm">Apply</button>
                    </div>
                    <div className="w-1/6 md:w-1/6 text-right cursor-pointer px-4 flex justify-end">
                      <Svg name="close" className="text-[#343a40] size-[20px] me-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
      </section>
    </>
  )
}

export default filterPopup
