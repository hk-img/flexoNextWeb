import React, { useEffect, useState } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import ImagePopup from "./ImagePopup";
import { useAuth } from "@/context/useAuth";
import { toast } from "sonner";
import { postAPIAuthWithoutBearer, WEBSITE_BASE_URL } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";

const HeroSection = ({ slug,isFavouriteSpace,spaceData,setIsAuthOpen }) => {
  const {token} = useAuth();
  const [isFavourite,setIsFavourite] = useState(false);
  const youtubeId = spaceData?.youtube_url?.split("/")?.pop();
  const [viewImagePopup,setViewImagePopup] = useState(false);

  const {mutate: favouriteMutate} = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(`favorite/addToFavorite/${spaceData?.id}`, payload,token);
      return response.data;
    },
    onSuccess: (data, payload) => {
      toast.success(data?.message);
      setIsFavourite((prev) => !prev);
      localStorage.removeItem("isFavourite");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleFavourite = ()=>{
    if(!token){
      localStorage.setItem("isFavourite",spaceData?.id);
      setIsAuthOpen(true);
    }else{
      const payload = {};
      favouriteMutate(payload);
    }
  }

  useEffect(()=>{
    if(isFavouriteSpace){
      setIsFavourite(true);
    }
  },[isFavouriteSpace])

  useEffect(()=>{
    const favouriteSpaceId = localStorage.getItem("isFavourite")
    if(favouriteSpaceId == spaceData?.id && token){
      const payload = {}
      favouriteMutate(payload);
    }
  },[token])

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
          <div onClick={() => setViewImagePopup((prev) => !prev)} className="bg-white cursor-pointer text-[#000e54] font-semibold text-xs px-4 py-2.5 rounded-sm absolute md:bottom-7 bottom-20 right-6  z-0">
            View More
          </div>
        </div>
        <div>
          <div className="absolute md:top-7 md:right-[27px] top-3 right-4  flex items-center justify-center gap-2.5">
            <div onClick={handleFavourite} className="cursor-pointer bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
              <div>
                <Svg
                  name={isFavourite ? "heart" : "heartTransparent"}
                  className={`size-[18px] ${isFavourite ? "text-[#f76900]" : "text-[#343a40]"}`}
                />
              </div>
            </div>
            <div className="relative group">
              <div tabIndex="0" className="bg-white peer w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer shadow">
                <Svg name="share" className="size-[18px] text-[#343a40]" />
              </div>
              <ul className="absolute -right-25 -translate-x-1/2 mt-2 md:flex hidden items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <li
                  onClick={() => {
                    const url = slug.join("/")
                    const shareUrl = `${WEBSITE_BASE_URL}/${url}`
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                      "_blank"
                    );
                  }}
                  className="cursor-pointer bg-[#3b5998] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg name="facebook" className="size-[15px] text-[#343a40]" />
                </li>
                <li 
                  onClick={() => {
                    const url = slug.join("/")
                    const shareUrl = `${WEBSITE_BASE_URL}/${url}`
                    window.open(
                      `https://www.linkedin.com/feed/?shareActive=false&url=${shareUrl}`,
                      "_blank"
                    );
                  }}
                  className="cursor-pointer bg-[#34aaf3] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg
                    name="linkedin2"
                    className="size-[15px] text-[#343a40]"
                  />
                </li>
                <li
                  onClick={() => {
                    const url = slug.join("/")
                    const message = encodeURIComponent(
                      `Checkout this space on FLEXO\n${WEBSITE_BASE_URL}/${url}`
                    );
                    window.open(`https://web.whatsapp.com/send?text=${message}`, "_blank");
                  }}
                  className="cursor-pointer bg-[#6ee777] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg name="whatsapp" className="size-[15px] text-[#343a40]" />
                </li>
                <li 
                  onClick={() => {
                    const url = slug.join("/")
                    const message = encodeURIComponent(
                      `${WEBSITE_BASE_URL}/${url}`
                    );
                    window.open(`https://instagram.com?text=${message}`, "_blank");
                  }}
                  className="cursor-pointer bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,#d6249f_60%,#285AEB_90%)] border w-[30px] h-[30px] flex items-center justify-center rounded-full shadow "
                >
                  <Svg
                    name="instagram"
                    className="size-[15px] text-[#343a40]"
                  />
                </li>
                <li
                  onClick={() => {
                    const url = slug.join("/")
                    const message = `${WEBSITE_BASE_URL}/${url}`
                    navigator.clipboard.writeText(message);
                    toast.success("Link copied to clipboard");
                  }}
                  className="cursor-pointer bg-white w-[30px] h-[30px] border  flex items-center justify-center rounded-full shadow"
                >
                  <Svg name="copy" className="size-[15px] text-[#343a40]" />
                </li>
              </ul>
              <ul className="absolute -right-25 -translate-x-1/2 mt-2 md:hidden flex items-center gap-2 opacity-0 transition-all duration-300 peer-focus:opacity-100 peer-focus:visible peer-active:opacity-100 z-50">
                <li
                  onClick={() => {
                    const url = slug.join("/")
                    const shareUrl = `${WEBSITE_BASE_URL}/${url}`
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                      "_blank"
                    );
                  }}
                  className="cursor-pointer bg-[#3b5998] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg name="facebook" className="size-[15px] text-[#343a40]" />
                </li>
                <li 
                  onClick={() => {
                    const url = slug.join("/")
                    const shareUrl = `${WEBSITE_BASE_URL}/${url}`
                    window.open(
                      `https://www.linkedin.com/feed/?shareActive=false&url=${shareUrl}`,
                      "_blank"
                    );
                  }}
                  className="cursor-pointer bg-[#34aaf3] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg
                    name="linkedin2"
                    className="size-[15px] text-[#343a40]"
                  />
                </li>
                <li
                  onClick={() => {
                    const url = slug.join("/")
                    const message = encodeURIComponent(
                      `Checkout this space on FLEXO\n${WEBSITE_BASE_URL}/${url}`
                    );
                    window.open(`https://web.whatsapp.com/send?text=${message}`, "_blank");
                  }}
                  className="cursor-pointer bg-[#6ee777] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg name="whatsapp" className="size-[15px] text-[#343a40]" />
                </li>
                <li 
                  onClick={() => {
                    const url = slug.join("/")
                    const message = encodeURIComponent(
                      `${WEBSITE_BASE_URL}/${url}`
                    );
                    window.open(`https://instagram.com?text=${message}`, "_blank");
                  }}
                  className="cursor-pointer bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,#d6249f_60%,#285AEB_90%)] border w-[30px] h-[30px] flex items-center justify-center rounded-full shadow "
                >
                  <Svg
                    name="instagram"
                    className="size-[15px] text-[#343a40]"
                  />
                </li>
                <li
                  onClick={() => {
                    const url = slug.join("/")
                    const message = `${WEBSITE_BASE_URL}/${url}`
                    navigator.clipboard.writeText(message);
                    toast.success("Link copied to clipboard");
                  }}
                  className="cursor-pointer bg-white w-[30px] h-[30px] border  flex items-center justify-center rounded-full shadow"
                >
                  <Svg name="copy" className="size-[15px] text-[#343a40]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {viewImagePopup && <ImagePopup viewImagePopup={viewImagePopup} setViewImagePopup={setViewImagePopup} images={spaceData?.images} />}
    </>
  );
};

export default HeroSection;
