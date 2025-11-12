import Svg from "@/components/svg";
import React, { memo, useEffect, useState } from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import ImageWithFallback from "@/components/ImageWithFallback";
import AboutText from "./AboutText";
import { convertSlugToCapitalLetter, getTypeOfSpaceByWorkSpace, slugGenerator } from "@/services/Comman";
import { postAPIAuthWithoutBearer, WEBSITE_BASE_URL } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/useAuth";
import { ShowToast } from "@/utils/ShowToast";

const ProductCard = ({ item = {}, setIsOpen,setIsAuthOpen,setSelectedSpaceData }) => {
  const {token} = useAuth();
  const [isFavourite, setIsFavourite] = useState(false);
  const type = getTypeOfSpaceByWorkSpace(item?.spaceType || "");
  const spaceTypeSlug = slugGenerator(item?.spaceType);
  const locationNameSlug = slugGenerator(item?.location_name || "");
  const cityNameSlug = slugGenerator(item?.contact_city_name || "");
  const spaceId = item?.id;

  const {mutate: favouriteMutate} = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(`favorite/addToFavorite/${item?.id}`, payload,token);
      return response.data;
    },
    onSuccess: (data, payload) => {
      ShowToast(data?.message,"success");
      setIsFavourite((prev) => !prev);
      localStorage.removeItem("isFavourite");
    },
    onError: (error) => {
      ShowToast(error.message,"error");
    },
  });

  const handleFavourite = ()=>{
    if(!token){
      localStorage.setItem("isFavourite",item?.id);
      setIsAuthOpen(true);
    }else{
      const payload = {};
      favouriteMutate(payload);
    }
  }
  useEffect(()=>{
    if(item?.existingfavorite?.favourite){
      setIsFavourite(true);
    }else{
      setIsFavourite(false);
    }
  },[item])
  useEffect(()=>{
    const favouriteSpaceId = localStorage.getItem("isFavourite")
    if(favouriteSpaceId == item?.id && token){
      const payload = {}
      favouriteMutate(payload);
    }
  },[token])
  const sharePost = (type,url)=>{ 
    if(type=='facebook'){
      window.open( 
        `https://www.facebook.com/sharer/sharer.php?u=${url}`, 
          "_blank", "width=600, height=450"); 
    }else if(type=='twitter'){
      window.open( 
        `https://twitter.com/intent/tweet?url=${url}`, 
          "_blank", "width=600, height=450"); 
    }else if(type=='linkedin'){
      window.open( 
        `https://www.linkedin.com/shareArticle?mini=true&url=${url}`, 
          "_blank", "width=600, height=450"); 
    }else if(type=='pinterest'){
      window.open( 
        `https://pinterest.com/pin/create/button/?url=${url}`, 
          "_blank", "width=600, height=450"); 
    }
    else if(type=='instagram'){
      window.open( 
        `https://www.instagram.com/flexospaces/?url=${url}`, 
          "_blank", "width=600, height=450"); 
    }
    else if(type=='google'){
      window.open( 
        `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Propira&body=${url}`, 
          "_blank", "width=600, height=450"); 
    }else if(type=='whatsup'){
      window.open( 
        `https://api.whatsapp.com/send?text=${url}`, 
          "_blank", "width=600, height=450"); 
    }
  }
  return (
    <>
      <div
        onClick={() =>{
          let url = "";
          if(type == "coworking"){
            url = `/${item?.slug}`;
          }else{ 
            url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
          }
          window.open(`${url}`, "_blank")
        }}
        className="space-card relative [&_.emblaarrows]:left-3 [&_.emblaarrows]:right-3 [&_.emblaarrows_button]:w-[30px] [&_.emblaarrows_button]:h-[30px] [&_.emblaarrows_button_Svg]:size-[18px] [&_.emblaarrows_button]:!border-0 [&_.emblaarrows_button]:opacity-50 [&_.emblaarrows_button]:hover:opacity-100 [&_.emblaarrows_button_Svg]:!text-black w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col cursor-pointer"
      >
        {item?.ribbon_name && (
          <div
            style={{ backgroundColor: item?.ribbon_color }}
            className="text-white font-medium text-sm px-[10px] py-2 rounded-sm absolute -top-4 -left-2 z-10"
          >
            {item?.ribbon_name}
          </div>
        )}
        <EmblaCarousel
          options={{
            loop: true,
            autoplay: false,
            showButton: true,
            align: "start",
          }}
        >
          {item?.images?.map((image, index) => (
            <div
              key={index}
              className="embla__slide relative shrink-0 basis-full"
            >
              <ImageWithFallback
                src={image || "/images/default_image.webp"}
                alt="product image"
                width={450}
                height={320}
                title="product image" 
                className="w-full aspect-[399/320] object-cover rounded-t-md h-[320px]"
                fallback="/images/default_image.webp"
              />
            </div>
          ))}
        </EmblaCarousel>
        <div className="shortlistIcon absolute top-[3px] z-1 right-[2px] gap-[10px] flex p-[10px]">
          <div
            className="shareBtn relative"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div onClick={handleFavourite} className="flex items-center justify-center rounded-full text-base bg-[#ece8e8] w-[34px] h-[34px] text-[#808080] cursor-pointer">
              <Svg name={isFavourite ? "heart":"heartTransparent"} className={`size-[18px] ${isFavourite ? 'text-[#f76900]':'text-[#808080]'}`} />
            </div>
          </div>
          <div className="shareBtn relative group">
            <div onClick={(e) => { e.stopPropagation()}} tabIndex="0" className="flex relative peer items-center justify-center rounded-full text-base bg-[#ece8e8] w-[34px] h-[34px] text-[#808080] cursor-pointer focus:outline-none">
              <Svg name="share" className="size-[18px] text-[#808080]" />
            </div>
            <ul className="absolute top-[45px] right-[-6px] gap-1.5 hidden md:flex flex-row opacity-0 transition-all duration-500 ms-1 group-hover:opacity-100">
              <li className="bg-[#3b5998] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px] ">
                <div
                  onClick={(e) => {
                    e.stopPropagation();

                    let url = "";
                    if (type === "coworking") {
                      url = `/${item?.slug}`;
                    } else {
                      url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                    }
                    const shareUrl = `${WEBSITE_BASE_URL}${url}`
                    sharePost("facebook",shareUrl)
                    // window.open(
                    //   `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                    //   "_blank"
                    // );
                  }}
                  className="cursor-pointer share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="facebook" className="text-white size-[15px]" />
                </div>
              </li>

              <li className="bg-[#34aaf3] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px]">
                <div
                    onClick={(e) => {
                      e.stopPropagation();

                      let url = "";
                      if (type === "coworking") {
                        url = `/${item?.slug}`;
                      } else {
                        url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                      }

                      const shareUrl = `${WEBSITE_BASE_URL}${url}`;
                      sharePost("linkedin",shareUrl)
                      // window.open(
                      //   `https://www.linkedin.com/feed/?shareActive=false&url=${shareUrl}`,
                      //   "_blank"
                      // );
                    }}
                  className="cursor-pointer share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="linkedin2" className="text-white size-[15px]" />
                </div>
              </li>

              <li className="bg-[#25D366] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px]">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    let url = "";
                    if(type == "coworking"){
                      url = `/${item?.slug}`;
                    }else{ 
                      url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                    }
                    const message = encodeURIComponent(
                      `Checkout this space on FLEXO\n${WEBSITE_BASE_URL}${url}`
                    );
                    sharePost("whatsup",message)
                    // window.open(`https://web.whatsapp.com/send?text=${message}`, "_blank");
                  }}
                  className="cursor-pointer share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="whatsapp" className="text-white size-[15px]" />
                </div>
              </li>
            </ul>
             <ul className="absolute top-[45px] right-[-6px] gap-1.5 md:hidden flex flex-row opacity-0 transition-all duration-300 peer-focus:opacity-100 peer-focus:visible peer-active:opacity-100 z-50">
              <li className="bg-[#3b5998] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px]">
                <div
                  onClick={(e) => {
                    e.stopPropagation();

                    let url = "";
                    if (type === "coworking") {
                      url = `/${item?.slug}`;
                    } else {
                      url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                    }
                    const shareUrl = `${WEBSITE_BASE_URL}${url}`
                    sharePost("facebook",shareUrl)
                    // window.open(
                    //   `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                    //   "_blank"
                    // );
                  }}
                  className="cursor-pointer share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="facebook" className="text-white size-[15px]" />
                </div>
              </li>

              <li className="bg-[#34aaf3] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px]">
                <div
                    onClick={(e) => {
                      e.stopPropagation();

                      let url = "";
                      if (type === "coworking") {
                        url = `/${item?.slug}`;
                      } else {
                        url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                      }

                      const shareUrl = `${WEBSITE_BASE_URL}${url}`;
                      sharePost("linkedin",shareUrl)
                      // window.open(
                      //   `https://www.linkedin.com/feed/?shareActive=false&url=${shareUrl}`,
                      //   "_blank"
                      // );
                    }}
                  className="cursor-pointer share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="linkedin2" className="text-white size-[15px]" />
                </div>
              </li>

              <li className="bg-[#25D366] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px]">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    let url = "";
                    if (type === "coworking") {
                      url = `/${item?.slug}`;
                    } else {
                      url = `/${spaceTypeSlug}/${locationNameSlug}/${cityNameSlug}/${spaceId}`;
                    }
                    const message = encodeURIComponent(
                      `Checkout this space on FLEXO\n${WEBSITE_BASE_URL}${url}`
                    );
                    sharePost("whatsup",message)
                    // const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                    // const whatsappUrl = isMobile
                    //   ? `whatsapp://send?text=${message}`
                    //   : `https://web.whatsapp.com/send?text=${message}`;

                    // window.open(whatsappUrl, "_blank");
                  }}
                  className="cursor-pointer share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="whatsapp" className="text-white size-[15px]" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:pt-2 lg:px-6 lg:pb-4 py-[22px] px-[14px] flex flex-col flex-grow">
          <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
            {type == "coworking" && (
              <h2 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1 break-all">
                {item?.name} 
              </h2>
            )}
            {(type == "shortterm" || type == "longterm") && (
              <h2 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1 break-all">
                {item?.spaceTitle}
              </h2>
            )}
            <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
              <Svg
                name="location2"
                className="text-[#f76900] size-[15px] me-1"
              />
              {convertSlugToCapitalLetter(item?.location_name || "")},{" "}
              {item?.contact_city_name}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
            {(type == "coworking" || type == "shortterm") && (
              <div className="flex gap-1 items-center">
                <Svg name="user" className="size-[12px] text-[#f76900]" />
                <span>{item?.howManyPeopleInYourSpace} people</span>
              </div>
            )}
            {item?.spaceStatus && (
              <div className="flex gap-1 items-center">
                <Svg name="home" className="size-[12px] text-[#f76900]" />
                <span>{item?.spaceStatus}</span>
              </div>
            )}
            <div className="flex gap-1 items-center">
              <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
              <span>{item?.spacesqft} sqft</span>
            </div>
          </div>
          {type == "coworking" && (
            <>
              <div className="flex justify-between align-items-center lg:flex-nowrap flex-wrap m-0">
                <p className="w-1/2 min-[1400px]:text-base text-sm text-[#141414] m-0 p-0 font-normal">
                  Private Office from
                </p>
                <div className="w-1/2">
                {
                  item?.privatecabin_price ? (
                    <div className="lg:text-sm text-[13px] text-[#141414] m-0 p-0 font-medium">
                      <div className="flex items-center m-0">
                        <div className="flex items-center">
                          <Svg
                            name="rupee"
                            className="text-[#7f7f7f] size-[15px]"
                          />
                          <span className="text-black font-semibold min-[1400]:text-[17px] text-sm">
                            {item?.privatecabin_price}
                          </span>
                        </div>
                        <span className="ps-1 min-[1400px]:text-[13px] text-[11px] font-normal !leading-4">
                          per seat/month
                        </span>
                      </div>
                    </div>
                  ):(
                    "N/A"
                  )
                }
                </div>
              </div>
              <div className="flex justify-between align-items-center lg:flex-nowrap flex-wrap m-0">
                <p className="w-1/2 min-[1400px]:text-base text-sm text-[#141414] m-0 p-0 font-normal">
                  Desks from
                </p>
                <div className="w-1/2">
                {
                  (item?.desks_price || item?.flexible_desk_price) ? (
                    <div className="lg:text-sm text-[13px] text-[#141414] m-0 p-0 font-medium">
                      <div className="flex items-center m-0">
                        <div className="flex items-center">
                          <Svg
                            name="rupee"
                            className="text-[#7f7f7f] size-[15px]"
                          />
                          <span className="text-black font-semibold  min-[1400]:text-[17px] text-sm">
                            {item?.desks_price || item?.flexible_desk_price}
                          </span>
                        </div>
                        <span className="ps-1 min-[1400px]:text-[13px] text-[11px] font-normal !leading-4">
                          per seat/month
                        </span>
                      </div>
                    </div>
                  ):(
                    "N/A"
                  )
                }
                </div>
              </div>
            </>
          )}
          <div className="flex gap-[30px] items-center w-full mb-2">
            {(type == "longterm" || type == "shortterm") && (
              <>
              <div className="bg-[#f76900] text-white w-fit flex items-center py-1.5 pr-1.5 m-0">
                <div className="flex items-center">
                  <Svg name="rupee" className="size-[15px]" />
                  <span className="font-semibold text-sm">
                    {item?.originalPrice}
                  </span>
                </div>
                {type == "longterm" ? (
                  <span className="ps-1 text-sm font-normal !leading-4">
                    /month
                  </span>
                ) : (
                  <span className="ps-1 text-sm font-normal !leading-4">
                    /hour
                  </span>
                )}
              </div>
              {
                type == "longterm" && item?.spaceStatus === "Furnished" && (
                <div className="flex gap-2 items-center bg-[#000080] rounded-sm">
                  <span className="bg-[##000080] p-1 text-[13px] text-white ">
                    {item?.spaceStatus}
                  </span>
                </div>
                )
              }
              </>
            )}
            {item?.isInstant == 1 ? (
              <div className="flex items-center m-0">
                <div className="flex gap-2 items-center">
                  <Svg name="bolt" className="size-[15px] text-[#ffbf00]" />
                  <span className="bg-[#ffbf00] p-1 text-xs rounded-sm text-[#343a40]">
                    Instant Book
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {}
          {(type == "coworking" || type == "longterm") && (
            <>
              <AboutText about={item?.about || ""} />
              {
                type != "longterm" && (
                  <div className="offerBtn flex items-end justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(true);
                        setSelectedSpaceData(item);
                      }}
                      className="w-fit bg-[#f76900] text-xs border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase cursor-pointer"
                    >
                      Get Offer{" "}
                    </button>
                  </div>
                )
              }
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(ProductCard);
