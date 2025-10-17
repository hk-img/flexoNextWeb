import Image from "next/image";
import Link from "next/link";
import React from "react";

const RequestCallback = () => {
  return (
    <>
      <section className="w-full relative lg:py-8 md:py-6 py-4">
        <div className="relative w-full h-[280px]">
          <Image
            src="/images/banner.png"
            alt="Banner"
            width={1200}
            height={240}
            className="rounded-lg relative object-cover w-full h-full"
          />
        </div>

        <div className="flex items-center absolute lg:top-[30%] lg:left-10 sm:top-[22%] top-[15%] left-8">
          <div className="md:w-4/5 w-full flex flex-col gap-y-3">
            <h4 className="text-xl font-semibold text-[#010101] ">
              Winner of Best Flex Space Aggregator of the Year
            </h4>
            <p className="lg:w-4/5 w-3/4 text-sm pe-4 text-[#272828] lg:mb-4 mb-2">
              We negotiate, you save. Our strong relationships with operators
              ensure you get the best terms—zero hassle, zero brokerage.
            </p>
            <Link href="/contact" className="w-fit bg-[#141414] text-sm hover:bg-[#ff7c52] text-white py-4 px-6 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">
              Request call back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestCallback;
