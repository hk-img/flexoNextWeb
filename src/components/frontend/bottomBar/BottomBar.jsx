"use client";
import Svg from "@/components/svg";
import Link from "next/link";
import React, { useState } from "react";
import ExplorePopup from "../explorePopup/ExplorePopup";

export const BottomBar = ({
  type,
  city,
  spaceData = { name: "Dummy Data" },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const loadZohoScript = () => {
    const existingScript = document.getElementById("zoho-salesiq");
    if (existingScript) existingScript.remove();
    setTimeout(() => {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = {
        widgetcode:
          "0fc4dfe126a900d08cd66965a527bbcfebd987ea8870090a53afd7a22440aa53",
        values: {},
        ready: function () {},
      };
      setTimeout(() => {
        if (
          ![
            "event space",
            "Coworking Café/Restaurant",
            "shoot studio",
            "recording studio",
            "podcast studio",
            "activity space",
            "sports turf",
            "sports venue",
            "party space",
            "banquet hall",
            "gallery",
            "classroom",
            "private cabin",
            "meeting room",
            "training room",
          ].includes(spaceData?.spaceType)
        ) {
          clickZohoChatButton();
        }
      }, 1000);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "zsiqscript";
      script.defer = true;
      script.src = "https://salesiq.zoho.in/widget";
      document.body.appendChild(script);
    }, 200);
  };

  const clickZohoChatButton = () => {
    const chatBtn = document.querySelector("#zsiq_float");
    if (chatBtn) chatBtn.click();
  };

  return (
    <>
      <div className="fixed  bg-[#f76900] bottom-0 md:hidden block left-0 right-0 w-full z-50 h-auto  will-change-transform [transform:translateZ(0)] [-webkit-transform:translateZ(0)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
        <div className="flex items-center justify-between p-4">
          <div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col items-center cursor-pointer"
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
            <div
              onClick={loadZohoScript}
              className="flex flex-col items-center cursor-pointer"
            >
              <Svg name="chat" className="size-5 text-white" />
              <span className="uppercase text-white text-[11px]/normal font-medium ">
                Chat
              </span>
            </div>
          </div>
          <div>
            <Link
              href="tel:95133 92400"
              className="flex flex-col items-center cursor-pointer"
            >
              <Svg name="phoneCall" className="size-5 text-white" />
              <span className="uppercase text-white text-[11px]/normal font-medium ">
                Call
              </span>
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <ExplorePopup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedSpaceData={spaceData}
          type={type}
          cityName={city}
        />
      )}
    </>
  );
};

export default BottomBar;
