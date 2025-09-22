"use client";
import Image from "next/image";
import React, { useState } from "react";
import ExplorePopup from "../explorePopup/ExplorePopup";

const BookWorkspace = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="container mx-auto px-[15px]  md:pt-4 ">
        <div>
          <div className="pt-[63px] sm:pb-[76px] pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px] gap-6 items-center">
              <div>
                <h2 className=" leading-[1.6] text-[27px] font-normal lg:mb-[31px] mb-10">
                  Find and <span className="text-[#f76900]">Book</span> Your
                  Perfect Workspace in 4 Easy Steps With{" "}
                  <span className="text-[#f76900] font-bold">Flexo</span>
                </h2>

                <div className="space-y-2">
                  <div className="flex lg:flex-row flex-col items-start max-lg:gap-[10px] rounded-[7px] rounded-br-none px-6 py-4 shadow-[0_0_3px_#7a7a7a]  relative">
                    <div>
                      <span className="lg:absolute -top-[21px] -left-[21px] bg-gradient-to-br from-[rgb(81,49,18)] to-[rgb(247,105,0)] text-white w-10 h-10 flex items-center justify-center rounded-[7px] rounded-br-none font-medium text-[17px] leading-[1.5]">
                        1
                      </span>
                    </div>
                    <div>
                      <h6 className="font-medium leading-[1.6] text-base text-[#f76900]">
                        Share Your Requirements
                      </h6>
                      <p className="text-[#777] leading-[1.5]  text-sm">
                        Tell us your needs and a dedicated advisor will handle
                        the rest.
                      </p>
                    </div>
                  </div>

                  <div className="flex lg:flex-row flex-col items-start max-lg:gap-[10px] rounded-[7px] rounded-br-none px-6 py-4 shadow-[0_0_3px_#7a7a7a]  relative">
                    <div>
                      <span className="lg:absolute -top-[21px] -left-[21px] bg-gradient-to-br from-[rgb(81,49,18)] to-[rgb(247,105,0)] text-white w-10 h-10 flex items-center justify-center rounded-[7px] rounded-br-none font-medium text-[17px] leading-[1.5]">
                        2
                      </span>
                    </div>
                    <div>
                      <h6 className="font-medium leading-[1.6] text-base text-[#f76900]">
                        Get Space Options and Personalised Tours
                      </h6>
                      <p className="text-[#777] leading-[1.5]  text-sm">
                        Shortlist and take guided tours of your favorite
                        options.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col items-start max-lg:gap-[10px] rounded-[7px] rounded-br-none px-6 py-4 shadow-[0_0_3px_#7a7a7a]  relative">
                    <div>
                      <span className="lg:absolute -top-[21px] -left-[21px] bg-gradient-to-br from-[rgb(81,49,18)] to-[rgb(247,105,0)] text-white w-10 h-10 flex items-center justify-center rounded-[7px] rounded-br-none font-medium text-[17px] leading-[1.5]">
                        3
                      </span>
                    </div>
                    <div>
                      <h6 className="font-medium leading-[1.6] text-base text-[#f76900]">
                        We Negotiate, You Save
                      </h6>
                      <p className="text-[#777] leading-[1.5]  text-sm">
                        We leverage our relationships to help you secure the
                        best terms.
                      </p>
                    </div>
                  </div>

                  <div className="flex lg:flex-row flex-col items-start max-lg:gap-[10px] rounded-[7px] rounded-br-none px-6 py-4 shadow-[0_0_3px_#7a7a7a]  relative">
                    <div>
                      <span className="lg:absolute -top-[21px] -left-[21px] bg-gradient-to-br from-[rgb(81,49,18)] to-[rgb(247,105,0)] text-white w-10 h-10 flex items-center justify-center rounded-[7px] rounded-br-none font-medium text-[17px] leading-[1.5]">
                        4
                      </span>
                    </div>
                    <div>
                      <h6 className="font-medium leading-[1.6] text-base text-[#f76900]">
                        Move-In Quickly and Get To Work
                      </h6>
                      <p className="text-[#777] leading-[1.5]  text-sm">
                        Finalize the agreement and move-in, hassle-free.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className="cursor-pointer relative w-full overflow-hidden rounded-sm font-semibold text-white md:hover:text-[#f76900] py-2 z-10 bg-transparent border-2 border-transparent md:hover:border-[#f76900] before:absolute before:inset-0 before:w-full before:bg-[#f76900] before:transition-all transition-all duration-500  before:duration-500 before:origin-right md:hover:before:w-0 before:-z-10 text-base leading-[1.5] "
                  >
                    Connect with a Workspace Expert Today
                  </button>
                </div>
              </div>

              <div>
                <Image
                  width={500}
                  height={500}
                  src="/images/find-work-space-1.webp"
                  alt="Workspace"
                  title="Workspace"
                  className="rounded-[7px] w-full object-cover lg:h-[544px] h-full"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto text-center">
            <div>
              <div>
                <h2 className="md:text-[32px] leading-[1.2] text-2xl font-medium text-center text-[#333]">
                  {" "}
                  India's Premier Marketplace for{" "}
                  <span className="text-[#f76900]">Flexible Workspaces</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[23px] lg:py-[36px] sm:py-[64px] pt-12 pb-4 ">
                <div className="text-center">
                  <h2 className="text-[23px] lg:text-[40px] text-[#f76900] leading-[1.3] font-medium">
                    1800+
                  </h2>
                  <h5 className="text-[#141414] font-medium mt-[5px] 2xl:text-lg leading-[1.3] text-base">
                    Partner Spaces
                  </h5>
                </div>

                <div className="text-center">
                  <h2 className="text-[23px] lg:text-[40px] text-[#f76900] leading-[1.3] font-medium">
                    1000+
                  </h2>
                  <h5 className="text-[#141414] font-medium mt-[5px] 2xl:text-lg leading-[1.3] text-base">
                    Clients Served
                  </h5>
                </div>

                <div className="text-center">
                  <h2 className="text-[23px] lg:text-[40px] text-[#f76900] leading-[1.3] font-medium">
                    20+
                  </h2>
                  <h5 className="text-[#141414] font-medium mt-[5px] 2xl:text-lg leading-[1.3] text-base">
                    Cities Across India
                  </h5>
                </div>

                <div className="text-center">
                  <h2 className="text-[23px] lg:text-[40px] text-[#f76900] leading-[1.3] font-medium">
                    25 million+
                  </h2>
                  <h5 className="text-[#141414] font-medium mt-[5px] 2xl:text-lg leading-[1.3] text-base">
                    Sqft of Office Space Options
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpen && <ExplorePopup isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
export default BookWorkspace;
