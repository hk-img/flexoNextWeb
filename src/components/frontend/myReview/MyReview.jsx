import React from "react";
import Image from "next/image";
import Link from "next/link";
import Svg from "@/components/svg";

const MyReview = () => {
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[#141414] text-[26px]">
              Reviews <span>(1)</span>
            </h1>
            <div className="flex flex-col gap-y-8">
              <div className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-4 rounded-xl ">
                <Link
                  href=""
                  className="relative md:w-50 h-40 w-full rounded-lg shrink-0 overflow-hidden"
                >
                  <Image
                    src="/images/defaultImg.webp"
                    width="200"
                    height="150"
                    alt="Coworking Space"
                    className="object-cover w-full h-full"
                  />

                  <div
                    className="absolute top-2 left-0 bg-[#f76900] text-white text-sm font-medium px-3 py-1 
              before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
              before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
              after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
              after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
                  >
                    Coworking Space
                  </div>
                </Link>
                <div className="md:ml-6 space-y-2">
                  <h2 className="text-lg font-semibold text-[#141414]">
                    The Matchbox Cowork
                  </h2>
                  <div className="flex items-center gap-3">
                    <ul className="flex items-center gap-1">
                      <li>
                        <Svg
                          name="star"
                          className="size-[18px] text-[#f76900]"
                        />
                      </li>
                      <li>
                        <Svg
                          name="star"
                          className="size-[18px] text-[#f76900]"
                        />
                      </li>
                      <li>
                        <Svg
                          name="star"
                          className="size-[18px] text-[#f76900]"
                        />
                      </li>
                      <li>
                        <Svg
                          name="star"
                          className="size-[18px] text-[#f76900]"
                        />
                      </li>
                      <li>
                        <Svg
                          name="star"
                          className="size-[18px] text-[#f76900]"
                        />
                      </li>
                    </ul>
                    <div className="size-7 flex justify-center items-center border border-[#F76900] text-[#000] text-sm rounded-full">
                      0
                    </div>
                    <div className="flex justify-center items-center gap-2 text-base font-medium text-black">
                      <Svg
                        name="checkTic"
                        className="size-[18px] text-[#f76900]"
                      />
                      Yes I would book again
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-sm font-normal  text-[#808080]">
                      testing review
                    </p>
                    <p className="text-xs font-normal  text-[#808080]">
                      June 02,2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyReview;
