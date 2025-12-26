import React, { useEffect, useState } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import ImageWithFallback from "@/components/ImageWithFallback";
import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import {
  IMAGE_BASE_URL,
  postAPIAuthWithoutBearer,
  WEBSITE_BASE_URL,
} from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import { ShowToast } from "@/utils/ShowToast";
import dynamic from "next/dynamic";
const YoutubeVideo = dynamic(() => import("./YoutubeVideo"), {
  ssr: false,
});
const ImagePopup = dynamic(() => import("./ImagePopup"),{ 
  ssr: false
});

const HeroSection = ({
  slug,
  isFavouriteSpace,
  spaceData,
  setIsAuthOpen,
  refetchDetail,
}) => {
  const { token } = useAuth();
  const [isFavourite, setIsFavourite] = useState(false);
  const youtubeUrl = spaceData?.youtube_url || "";
  const lastPart = youtubeUrl.split("/").pop();
  const youtubeId = lastPart.split("?")[0];  
  const [viewImagePopup, setViewImagePopup] = useState(false);
  const defaultImage = "/images/default_image.webp";
  const formattedImages = spaceData?.images?.map((img) =>
    img.startsWith("http") || img.startsWith("/")
      ? img
      : `${IMAGE_BASE_URL}/${img}`
  );
  const displayedImages = [...formattedImages.slice(0, 5)];
  while (displayedImages.length < 5) {
    displayedImages.push(defaultImage);
  }

  const { mutate: favouriteMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `favorite/addToFavorite/${spaceData?.id}`,
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      ShowToast(data?.message, "success");
      // setIsFavourite((prev) => !prev);
      refetchDetail();
      localStorage.removeItem("isFavourite");
    },
    onError: (error) => {
      ShowToast(error.message, "error");
    },
  });

  const handleFavourite = () => {
    if (!token) {
      localStorage.setItem("isFavourite", spaceData?.id);
      setIsAuthOpen(true);
    } else {
      const payload = {};
      favouriteMutate(payload);
    }
  };

  useEffect(() => {
    if (isFavouriteSpace) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [isFavouriteSpace]);

  useEffect(() => {
    const favouriteSpaceId = localStorage.getItem("isFavourite");
    if (favouriteSpaceId == spaceData?.id && token) {
      const payload = {};
      favouriteMutate(payload);
    }
  }, [token]);

  const sharePost = async(type, url) => {
    if (type == "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank",
        "width=600, height=450"
      );
    } else if (type == "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${url}`,
        "_blank",
        "width=600, height=450"
      );
    } else if (type == "linkedin") {
      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
        "_blank",
        "width=600, height=450"
      );
    } else if (type == "pinterest") {
      window.open(
        `https://pinterest.com/pin/create/button/?url=${url}`,
        "_blank",
        "width=600, height=450"
      );
    } else if (type == "instagram") {
      // window.open(
      //   `https://www.instagram.com/flexospaces/?url=${url}`,
      //   "_blank",
      //   "width=600, height=450"
      // );
      if (navigator.share) {
        await navigator.share({
          title: "Check this space",
          url,
        });
      } else {
        navigator.clipboard.writeText(url);
        alert("Link copied! Paste it in Instagram");
      }
    } else if (type == "google") {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Propira&body=${url}`,
        "_blank",
        "width=600, height=450"
      );
    } else if (type == "whatsup") {
      window.open(
        `https://api.whatsapp.com/send?text=${url}`,
        "_blank",
        "width=600, height=450"
      );
    }
  };

  return (
    <>
      <section className="relative w-full lg:mt-[82px]  sm:mt-[62px] mt-[63px] ">
        <div className="relative">
          {/* {spaceData?.ribbon && (
            <div className="bg-black text-white font-medium text-sm px-[10px] py-2 rounded-sm absolute top-7 left-6  z-10">
              {spaceData?.ribbon}
            </div>
          )} */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[2px]">
            <div className="[&_[data-ntpc]]:!h-full [&_[data-title]]:h-full [&_[data-title]]:!max-w-full">
              {youtubeId ? (
                <>
                {/* <YouTubeEmbed
                  videoId={youtubeId}
                  className="!w-full !h-full"
                  aria-label="Embedded YouTube video: Client testimonial about Flexo workspace"
                  role="region"
                  aria-roledescription="video player"
                /> */}
                <YoutubeVideo youtubeId={youtubeId} />
                </>
              ) : (
                <div className="relative w-full aspect-[634/423]">
                  <ImageWithFallback
                    src={displayedImages?.[0] || "/images/default_image.webp"}
                    alt="Space Image"
                    width={634}
                    height={436}
                    className="object-cover size-full"
                    fallback="/images/default_image.webp"
                    watermark = {spaceData?.spaceType == "Private Office" ? true : false}
                    priority
                  />
                </div>
              )}
            </div>
            <div>
              <div className="grid md:grid-cols-2 grid-cols-4 gap-[2px]">
                {(youtubeId
                  ? displayedImages?.slice(0, 4)
                  : displayedImages?.slice(1, 5)
                )?.map((item, index) => (
                  <div key={index}>
                    <div className="relative w-full aspect-[316/211]">
                      <ImageWithFallback
                        src={item}
                        alt="Space Image"
                        width={316}
                        height={210}
                        className="object-cover size-full"
                        fallback="/images/default_image.webp"
                        watermark = {spaceData?.spaceType == "Private Office" ? true : false}
                        priority={index === 0 && !youtubeId}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={() => setViewImagePopup((prev) => !prev)}
            className="bg-white cursor-pointer text-[#000e54] font-semibold text-xs px-4 py-2.5 rounded-sm absolute md:bottom-7 bottom-20 right-6  z-0"
          >
            View More
          </div>
        </div>
        <div>
          <div className="absolute md:top-7 md:right-[27px] top-3 right-4  flex items-center justify-center gap-2.5">
            <div
              onClick={handleFavourite}
              className="cursor-pointer bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full"
            >
              <div>
                <Svg
                  name={isFavourite ? "heart" : "heartTransparent"}
                  className={`size-[18px] ${
                    isFavourite ? "text-[#f76900]" : "text-[#343a40]"
                  }`}
                />
              </div>
            </div>
            <div className="relative group">
              <div
                tabIndex="0"
                className="bg-white peer w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer shadow"
              >
                <Svg name="share" className="size-[18px] text-[#343a40]" />
              </div>
              <ul className="absolute -right-25 -translate-x-1/2 mt-2 md:flex hidden items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <li
                  onClick={() => {
                    const url = slug.join("/");
                    const shareUrl = `${WEBSITE_BASE_URL}/${url}`;
                    sharePost("facebook", shareUrl);
                  }}
                  className="cursor-pointer bg-[#3b5998] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg name="facebook" className="size-[15px] text-[#343a40]" />
                </li>
                <li
                  onClick={() => {
                    const url = slug.join("/");
                    const shareUrl = `${WEBSITE_BASE_URL}/${url}`;
                    sharePost("linkedin", shareUrl);
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
                    const url = slug.join("/");
                    const message = encodeURIComponent(
                      `Checkout this space on FLEXO\n${WEBSITE_BASE_URL}/${url}`
                    );
                    sharePost("whatsup", message);
                  }}
                  className="cursor-pointer bg-[#6ee777] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg name="whatsapp" className="size-[15px] text-[#343a40]" />
                </li>
                <li
                  onClick={() => {
                    const url = slug.join("/");
                    const message = encodeURIComponent(
                      `${WEBSITE_BASE_URL}/${url}`
                    );
                    sharePost("instagram", message);
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
                    const url = slug.join("/");
                    const message = `${WEBSITE_BASE_URL}/${url}`;
                    navigator.clipboard.writeText(message);
                    ShowToast("Link copied to clipboard", "success");
                  }}
                  className="cursor-pointer bg-white w-[30px] h-[30px] border  flex items-center justify-center rounded-full shadow"
                >
                  <Svg name="copy" className="size-[15px] text-[#343a40]" />
                </li>
              </ul>
              <ul className="absolute -right-25 -translate-x-1/2 mt-2 md:hidden flex items-center gap-2 opacity-0 transition-all duration-300 peer-focus:opacity-100 peer-focus:visible peer-active:opacity-100 z-50">
                <li
                  onClick={() => {
                    const url = slug.join("/");
                    const shareUrl = `${WEBSITE_BASE_URL}/${url}`;
                    sharePost("facebook", shareUrl);
                  }}
                  className="cursor-pointer bg-[#3b5998] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg name="facebook" className="size-[15px] text-[#343a40]" />
                </li>
                <li
                  onClick={() => {
                    const url = slug.join("/");
                    const shareUrl = `${WEBSITE_BASE_URL}/${url}`;
                    sharePost("linkedin", shareUrl);
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
                    const url = slug.join("/");
                    const message = encodeURIComponent(
                      `Checkout this space on FLEXO\n${WEBSITE_BASE_URL}/${url}`
                    );
                    sharePost("whatsup", message);
                  }}
                  className="cursor-pointer bg-[#6ee777] w-[30px] h-[30px] flex border items-center justify-center rounded-full shadow"
                >
                  <Svg name="whatsapp" className="size-[15px] text-[#343a40]" />
                </li>
                <li
                  onClick={() => {
                    const url = slug.join("/");
                    const message = encodeURIComponent(
                      `${WEBSITE_BASE_URL}/${url}`
                    );
                    sharePost("instagram", message);
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
                    const url = slug.join("/");
                    const message = `${WEBSITE_BASE_URL}/${url}`;
                    navigator.clipboard.writeText(message);
                    ShowToast("Link copied to clipboard", "success");
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
      {viewImagePopup && (
        <ImagePopup
          viewImagePopup={viewImagePopup}
          setViewImagePopup={setViewImagePopup}
          images={formattedImages}
          spaceData = {spaceData}
        />
      )}
    </>
  );
};

export default HeroSection;
