import Svg from "@/components/svg";
import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import Image from "next/image";

const ProductCard = () => {
  const cities = [
    {
      name: "wework bkc bkc coworking space 6_681160.webp",
      image: "/images/6_681160.webp",
    },
    {
      name: "wework bkc bkc coworking space 6_970399.webp",
      image: "/images/6_970399.webp",
    },
    {
      name: "wework bkc bkc coworking space 6_110330.webp",
      image: "/images/6_110330.webp",
    },
    {
      name: "wework bkc bkc coworking space 6_816657.webp",
      image: "/images/6_816657.webp",
    },
    {
      name: "wework bkc bkc coworking space 6_857568.webp",
      image: "/images/6_857568.webp",
    },
    {
      name: "wework bkc bkc coworking space 6_220604.webp",
      image: "/images/6_220604.webp",
    },
    {
      name: "wework bkc bkc coworking space 6_477318.webp",
      image: "/images/6_477318.webp",
    },
  ];
  return (
    <>
     
        <div className="space-card [&_.emblaarrows]:left-3 [&_.emblaarrows]:right-3 [&_.emblaarrows_button]:w-[30px] [&_.emblaarrows_button]:h-[30px] [&_.emblaarrows_button_Svg]:size-[18px] [&_.emblaarrows_button]:!border-0 [&_.emblaarrows_button]:opacity-50 [&_.emblaarrows_button]:hover:opacity-100 [&_.emblaarrows_button_Svg]:!text-black w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
          <EmblaCarousel
            options={{
              loop: true,
              autoplay: false,
              showButton: true,
              align: "start",
            }}
          >
            {cities.map((city, index) => (
              <div
                key={index}
                className="embla__slide relative shrink-0 basis-full"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  title={city.name}
                  width={399}
                  height={320}
                  loading="lazy"
                  className="w-full aspect-[399/320] object-cover rounded-t-md"
                />
                
                <div className="shortlistIcon absolute top-[3px] z-30 right-[2px] flex p-3">
                  <div className="shareBtn relative me-2">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-full text-base bg-[#ece8e8] w-[34px] h-[34px] text-[#808080] cursor-pointer"
                    >
                      <Svg name="heart" className="size-[18px] text-[#808080]" />
                    </a>
                  </div>
                  <div className="shareBtn relative me-2">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-full text-base bg-[#ece8e8] w-[34px] h-[34px] text-[#808080] cursor-pointer"
                    >
                      <Svg name="share" className="size-[18px] text-[#808080]" />
                    </a>
                    <ul className="absolute top-[45px] right-[-16px] flex flex-row justify-between gap-2">
                      <li className="bg-[#1877F2] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px] opacity-0 transition-all duration-500 ms-1 ">
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=https://your-url.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="share-button flex items-center justify-center w-full h-full"
                        >
                          <Svg name="facebook" className="text-white w-4 h-4" />
                        </a>
                      </li>

                      <li className="bg-[#0A66C2] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px] opacity-0 transition-all duration-500 ms-1">
                        <a
                          href="https://www.linkedin.com/sharing/share-offsite/?url=https://your-url.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="share-button flex items-center justify-center w-full h-full"
                        >
                          <Svg name="linkedin2" className="text-white w-4 h-4" />
                        </a>
                      </li>

                      <li className="bg-[#25D366] items-center justify-center w-8 h-8 rounded-full inline-block border-1 border-[#000000] text-center text-[15px] opacity-0 transition-all duration-500 ms-1">
                        <a
                          href="https://api.whatsapp.com/send?text=https://your-url.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="share-button flex items-center justify-center w-full h-full"
                        >
                          <Svg name="whatsapp" className="text-white w-5 h-5" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </EmblaCarousel>

          <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
            <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
              <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                WeWork BKC A Reputed Business Address in Mumbai
              </h3>
              <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                <Svg
                  name="location2"
                  className="text-[#f76900] size-[15px] me-1"
                />
                BKC, Mumbai
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
              <div className="flex gap-1 items-center">
                <Svg name="user2" className="size-[12px] text-[#f76900]" />
                <span>people</span>
              </div>
              <div className="flex gap-1 items-center">
                <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                <span>sqft</span>
              </div>
            </div>
            <div className="m-0 flex justify-between items-start">
              <div className="w-full flex flex-col justify-between items-start">
                <span className="text-sm m-0 font-normal text-[#141414]">
                  Private Office from
                </span>
                <span className="text-sm m-0 font-normal text-[#141414]">
                  Desks From
                </span>
              </div>
              <div className="w-full flex flex-col justify-end items-start">
                <div className="flex items-center justify-end">
                  <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                  <span className="text-sm font-semibold text-black">
                    60000
                  </span>
                  <small className="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">
                    per seat/month
                  </small>
                </div>
                <div className="flex items-center justify-end">
                  <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                  <span className="text-sm font-semibold text-black">
                    15000
                  </span>
                  <small className="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">
                    per seat/month
                  </small>
                </div>
              </div>
            </div>

            <div className="mt-2 w-full flex items-start">
              <div className="text-sm text-[#141414] !leading-[21px] text-start">
                <input type="checkbox" id="toggle" className="peer hidden" />
                <div className="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]">
                  One of the most premium coworking spaces in Mumbai, this is
                  the ideal platform for high-growth start-ups, corporates,
                  multinationals and financial services companies that want the
                  best for their teams. Located in the highly energetic location
                  of Bandra Kurla Complex (BKC), this coworking space in BKC has
                  solutions for all your needs. It has improved HVAC standards
                  to keep the air circulation healthy. The facility has a
                  spacious parking lot as well as a bike storage.
                </div>

                <label
                  htmlFor="toggle"
                  className="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                ></label>
              </div>
            </div>
            <div className="offerBtn flex items-end justify-end">
              <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">
                Get Offer{" "}
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProductCard;
