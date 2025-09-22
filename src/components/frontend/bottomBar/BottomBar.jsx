"use client";
import Svg from "@/components/svg";
import Link from "next/link";
import React, { useState } from "react";
import ExplorePopup from "../explorePopup/ExplorePopup";
import { usePathname } from "next/navigation";

export const BottomBar = () => {
  const pathname = usePathname();
  const routes = ["/detail", "/listing"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {routes.includes(pathname) && (
        <>
          <div className="fixed bottom-0 bg-[#f76900] w-full md:hidden block z-50">
            <div className="flex items-center justify-between p-4">
              <div>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex flex-col items-center"
                >
                  <Svg name="fileProtector" className="size-5 text-white" />
                  <span className="uppercase text-white text-[11px]/normal font-medium ">
                    Quotes
                  </span>
                </div>
              </div>
              <div>
                <Link
                  href="https://api.whatsapp.com/send/?phone=919136153810&text=Hi&type=phone_number&app_absent=0"
                  className="flex flex-col items-center"
                >
                  <Svg name="whatsapp" className="size-5 text-white" />
                  <span className="uppercase text-white text-[11px]/normal font-medium ">
                    Whatsapp
                  </span>
                </Link>
              </div>
              <div>
                <Link href="#" className="flex flex-col items-center">
                  <Svg name="chat" className="size-5 text-white" />
                  <span className="uppercase text-white text-[11px]/normal font-medium ">
                    Chat
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href="tel:95133 92400"
                  className="flex flex-col items-center"
                >
                  <Svg name="phoneCall" className="size-5 text-white" />
                  <span className="uppercase text-white text-[11px]/normal font-medium ">
                    Call
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {isOpen && <ExplorePopup isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
      )}
    </>
  );
};

export default BottomBar;
