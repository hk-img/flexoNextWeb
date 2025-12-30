"use client";
import Image from "next/image";
import React from "react";

const RequestCallback = ({ setIsOpen, type }) => {
  return (
    <>
      <section className="w-full relative p-8">
        <Image
          src="/images/banner.png"
          alt="Banner"
          width={1200}
          height={240}
          className="rounded-lg absolute inset-0 object-cover w-full h-full "
        />
        <div className="md:w-4/5 w-full flex flex-col gap-y-3 relative z-30">
          <h2 className="text-xl font-semibold text-[#010101] ">
            Winner of Best Flex Space Aggregator of the Year
          </h2>
          <p className="lg:w-3/5 w-full text-sm pe-4 text-[#272828] lg:mb-4 mb-2 text-balance">
            This recognition reflects our commitment to trust, transparency, and
            results. You get the best office options and the best terms.
          </p>
          { type !== "shortterm" && ( 
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className="w-fit bg-[#141414] text-sm hover:bg-[#ff7c52] text-white py-4 px-6 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer"
          >
            Request call back
          </div>
          )} 
        </div>
      </section>
    </>
  );
};

export default RequestCallback;
