import React, { useState } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import ImagePopup from "./ImagePopup";

const HeroSection = ({ spaceData }) => {
  const youtubeId = spaceData?.youtube_url?.split("/")?.pop();
  const [viewImagePopup,setViewImagePopup] = useState(false);

  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] ">
        <div className="relative">
          {
            spaceData?.ribbon && (
              <div className="bg-black text-white font-medium text-sm px-[10px] py-2 rounded-sm absolute top-7 left-6  z-10">
                {spaceData?.ribbon}
              </div>
            )
          }
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[2px]">
            <div className="[&_[data-ntpc]]:!h-full [&_[data-title]]:h-full [&_[data-title]]:!max-w-full">
              {/* <iframe
                className="w-full h-full max-md:absolute max-md:inset-0 "
                src="https://www.youtube.com/embed/hxvOFKFqQLk?si=qR2XPRzDJJBua9_k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> */}
              {youtubeId ? (
                <YouTubeEmbed
                  videoId={youtubeId}
                  className="!w-full !h-full  "
                />
              ) : (
                <ImageWithFallback
                  src={spaceData?.images?.[0] || "/images/default_image.webp"}
                  alt="Space Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                  fallback="/images/default_image.webp"
                />
              )}
            </div>
            <div>
              <div className="grid md:grid-cols-2 grid-cols-4 gap-[2px]">
                {spaceData?.images?.slice(1, 5).map((item, index) => (
                  <div key={index}>
                    <div>
                      <ImageWithFallback
                        src={item}
                        alt="Space Image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full object-cover"
                        fallback="/images/default_image.webp"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div onClick={() => setViewImagePopup((prev) => !prev)} className="bg-white cursor-pointer text-[#000e54] font-medium text-xs px-[10px] py-2 rounded-sm absolute md:bottom-7 bottom-20 right-6  z-0">
            View More
          </div>
        </div>
        <div>
          <div className="absolute md:top-7 md:right-[27px] top-3 right-4  flex items-center justify-center gap-2.5">
            <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
              <a href="#">
                <Svg
                  name="heartTransparent"
                  className="size-[18px] text-[#343a40]"
                />
              </a>
            </div>
            <div className="relative group">
              <div className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer shadow">
                <Svg name="share" className="size-[18px] text-[#343a40]" />
              </div>
              <div className="absolute -right-25 -translate-x-1/2 mt-2 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-[#3b5998] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow ">
                  <Svg name="facebook" className="size-[15px] text-[#343a40]" />
                </div>
                <div className="bg-[#34aaf3] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow ">
                  <Svg
                    name="linkedin2"
                    className="size-[15px] text-[#343a40]"
                  />
                </div>
                <div className="bg-[#6ee777] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow ">
                  <Svg name="whatsapp" className="size-[15px] text-[#343a40]" />
                </div>
                <div className="bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,#d6249f_60%,#285AEB_90%)] border w-[30px] h-[30px] flex items-center justify-center rounded-full shadow ">
                  <Svg
                    name="instagram"
                    className="size-[15px] text-[#343a40]"
                  />
                </div>
                <div className="bg-white w-[30px] h-[30px] border  flex items-center justify-center rounded-full shadow ">
                  <Svg name="copy" className="size-[15px] text-[#343a40]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {viewImagePopup && <ImagePopup viewImagePopup={viewImagePopup} setViewImagePopup={setViewImagePopup} images={spaceData?.images} />}
    </>
  );
};

export default HeroSection;
