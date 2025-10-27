import Svg from "@/components/svg";
import Image from "next/image";
import React from "react";

const WorkspaceOptionItem = ({ space,setIsOpen }) => {
  return (
    <>
      <div className="embla__slide shrink-0 px-[5px] basis-[100%] sm:basis-[50%] md:basis-[50%] lg:basis-[25%] xl:basis-[25%]">
        <div className="group relative rounded-[5px] overflow-hidden shadow-lg">
          <Image
            width={268}
            height={400}
            src={space.img}
            alt={space.title}
            title={space.title}
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute bottom-[10px] left-[10px] right-[10px] bg-[#00000080] backdrop-blur-[5px]  text-white px-[15px] py-[10.5px] rounded-[5px] transition-all duration-700 ease-in-out md:group-hover:-translate-y-3">
            <div className="border-b border-[#ffffff1a] pb-1.5">
              <h3 className="text-base min-[1400px]:text-lg text-start font-medium">{space.title}</h3>
            </div>
            <div className="flex items-center justify-between pt-1">
              {space.teamSize && (
                <div className="text-left">
                  <p className="font-bold text-[#b2b2b2] text-xs mb-0.5">
                    For Team Size
                  </p>
                  <p className="font-bold text-white text-sm">
                    {space.teamSize}
                  </p>
                </div>
              )}
              <button
              aria-label="Explore Workspace"
                onClick={() => setIsOpen(true)}
                className="bg-[#00000096] text-[#f76900] px-[13px] py-[7px] rounded-full text-[13px] font-medium transition flex items-center  cursor-pointer"
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
    </>
  );
};

export default WorkspaceOptionItem;
