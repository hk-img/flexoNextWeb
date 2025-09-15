"use client";
import Svg from "@/components/svg";
import Image from "next/image";
import React, { useState } from "react";
import ExplorePopup from "../../explorePopup/ExplorePopup";

const WorkspaceOptionItem = ({ space }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="embla__slide shrink-0 px-[3px] basis-[100%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[25%]">
        <div className="group relative rounded-xl overflow-hidden shadow-lg">
          <Image
            width={405}
            height={400}
            src={space.img}
            alt={space.title}
            title={space.title}
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute bottom-[10px] left-[10px] right-[10px] bg-[#00000080] backdrop-blur-[5px]  text-white px-[15px] py-[10px] rounded-[5px] transition-all duration-700 ease-in-out group-hover:-translate-y-3">
            <div className="border-b border-[#ffffff1a] pb-2">
              <h3 className="text-base font-medium">{space.title}</h3>
            </div>
            <div className="flex items-center justify-between">
              {space.teamSize && (
                <div>
                  <p className="font-bold text-[#b2b2b2] text-xs mb-1">
                    For Team Size
                  </p>
                  <p className="font-bold text-white text-sm">
                    {space.teamSize}
                  </p>
                </div>
              )}
              <button
                onClick={() => setIsOpen(true)}
                className="mt-3 bg-[#00000096] text-[#f76900] px-3 py-1.5 rounded-full text-[13px] font-medium transition flex items-center gap-1  cursor-pointer"
              >
                Explore{" "}
                <span>
                  <Svg
                    name="rightLongArrow"
                    className="size-5 text-[#f76900]"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ExplorePopup isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default WorkspaceOptionItem;
