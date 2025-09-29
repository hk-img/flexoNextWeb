import Svg from "@/components/svg";
import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import ImageWithFallback from "@/components/ImageWithFallback";

const ProductCard = ({ item = {}, setIsOpen }) => {
  return (
    <>
      <div
        onClick={() => window.open(`/${item?.slug}`, "_blank")}
        className="space-card [&_.emblaarrows]:left-3 [&_.emblaarrows]:right-3 [&_.emblaarrows_button]:w-[30px] [&_.emblaarrows_button]:h-[30px] [&_.emblaarrows_button_Svg]:size-[18px] [&_.emblaarrows_button]:!border-0 [&_.emblaarrows_button]:opacity-50 [&_.emblaarrows_button]:hover:opacity-100 [&_.emblaarrows_button_Svg]:!text-black w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col"
      >
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
                width={399}
                height={320}
                className="w-full aspect-[399/320] object-cover rounded-t-md"
                fallback="/images/default_image.webp"
              />
            </div>
          ))}
        </EmblaCarousel>
        <div className="shortlistIcon absolute top-[16px] z-10 right-[8px] flex p-3">
          <div className="shareBtn relative me-2">
            <div className="flex items-center justify-center rounded-full text-base bg-[#ece8e8] w-[34px] h-[34px] text-[#808080] cursor-pointer">
              <Svg name="heart" className="size-[18px] text-[#808080]" />
            </div>
          </div>
          <div className="shareBtn relative me-2 group">
            <div className="flex items-center justify-center rounded-full text-base bg-[#ece8e8] w-[34px] h-[34px] text-[#808080] cursor-pointer">
              <Svg name="share" className="size-[18px] text-[#808080]" />
            </div>
            <ul className="absolute top-[45px] right-[-6px] flex flex-row">
              <li className="bg-[#3b5998] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px] opacity-0 transition-all duration-500 ms-1 group-hover:opacity-100">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="facebook" className="text-white size-[15px]" />
                </a>
              </li>

              <li className="bg-[#34aaf3] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px] opacity-0 transition-all duration-500 ms-1 group-hover:opacity-100">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="linkedin2" className="text-white size-[15px]" />
                </a>
              </li>

              <li className="bg-[#25D366] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px] opacity-0 transition-all duration-500 ms-1 group-hover:opacity-100">
                <a
                  href="https://api.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button flex items-center justify-center w-full h-full"
                >
                  <Svg name="whatsapp" className="text-white size-[15px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:pt-2 lg:px-6 lg:pb-4 py-[22px] px-[14px] flex flex-col flex-grow">
          <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
            <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
              {item?.name || "WeWork BKC A Reputed Business Address in Mumbai"}
            </h3>
            <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
              <Svg
                name="location2"
                className="text-[#f76900] size-[15px] me-1"
              />
              {item?.location_name || "BKC"},{" "}
              {item?.contact_city_name || "Mumbai"}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
            <div className="flex gap-1 items-center">
              <Svg name="user2" className="size-[12px] text-[#f76900]" />
              <span>{item?.howManyPeopleInYourSpace} people</span>
            </div>
            <div className="flex gap-1 items-center">
              <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
              <span>{item?.spacesqft} sqft</span>
            </div>
          </div>
          <div className="flex justify-between align-items-center lg:flex-nowrap flex-wrap m-0">
            <p className="w-1/2 lg:text-sm text-[13px] text-[#141414] m-0 p-0 font-normal">
              Private Office from
            </p>
            <div className="w-1/2">
              <div className="lg:text-sm text-[13px] text-[#141414] m-0 p-0 font-medium">
                <div className="flex items-center m-0">
                  <div className="flex items-center">
                    <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                    <span className="text-black font-semibold text-sm">
                      {item?.privatecabin_price || "25000"}
                    </span>
                  </div>
                  <span className="ps-1 text-[11px] font-normal !leading-4">
                    per seat/month
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between align-items-center lg:flex-nowrap flex-wrap m-0">
            <p className="w-1/2 lg:text-sm text-[13px] text-[#141414] m-0 p-0 font-normal">
              Desks from
            </p>
            <div className="w-1/2">
              <div className="lg:text-sm text-[13px] text-[#141414] m-0 p-0 font-medium">
                <div className="flex items-center m-0">
                  <div className="flex items-center">
                    <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                    <span className="text-black font-semibold text-sm">
                      {item?.desks_price || "15000"}
                    </span>
                  </div>
                  <span className="ps-1 text-[11px] font-normal !leading-4">
                    per seat/month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 w-full flex items-start">
            <div className="text-sm text-[#141414] !leading-[21px] text-start">
              <input type="checkbox" id="toggle" className="peer hidden" />
              <div className="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]">
                {item?.about ||
                  `One of the most premium coworking spaces in Mumbai, this is
                    the ideal platform for high-growth start-ups, corporates,
                    multinationals and financial services companies that want the
                    best for their teams. Located in the highly energetic location
                    of Bandra Kurla Complex (BKC), this coworking space in BKC has
                    solutions for all your needs. It has improved HVAC standards
                    to keep the air circulation healthy. The facility has a
                    spacious parking lot as well as a bike storage.`}
              </div>

              <label
                htmlFor="toggle"
                className="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
              ></label>
            </div>
          </div>
          <div className="offerBtn flex items-end justify-end">
            <button
              onClick={(e) => {
                e.stopPropagation();  
                setIsOpen(true);
              }}
              className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer"
            >
              Get Offer{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
