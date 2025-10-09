"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";

const MyFavourite = () => {
  const { token } = useAuth();
  const { data: allFavorites } = useQuery({
    queryKey: ["all-favourites", token],
    queryFn: async () => {
      const res = await getAPIAuthWithoutBearer(
        "favorite/favoriteSpaceList",
        token
      );
      return res.data;
    },
    keepPreviousData: true,
    enabled: !!token,
  });
  const favouriteData = useMemo(() => {
    return allFavorites || [];
  }, [allFavorites]);
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[#141414] text-[26px]">
              Favorite workspaces
            </h1>
            <div className="flex flex-col gap-y-8">
              {favouriteData?.length > 0 ? (
                favouriteData?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex md:flex-row flex-col items-center gap-y-4 justify-start bg-white p-4 rounded-xl "
                  >
                    <Link
                      href=""
                      className="relative md:w-50 h-40 w-full rounded-lg shrink-0 overflow-hidden"
                    >
                      <Image
                        src="/images/defaultImg.webp"
                        width="200"
                        height="150"
                        alt="Coworking Space"
                        className="object-cover w-full h-full"
                      />

                      <div
                        className="absolute top-2 left-0 bg-[#f76900] text-white text-sm font-medium px-3 py-1 
              before:block before:absolute before:top-0 before:right-[-10px] before:w-[10px] before:h-0 
              before:border-t-[15px] before:!border-t-[#f76900] before:border-transparent before:border-l-0 before:border-r-[10px] 
              after:block after:absolute after:bottom-0 after:right-[-10px] after:w-[10px] after:h-0 
              after:border-b-[15px] after:!border-b-[#f76900] after:border-transparent after:border-l-0 after:border-r-[10px]"
                      >
                        {item?.spaceType}
                      </div>
                    </Link>
                    <div className="md:ml-6 space-y-2">
                      <div className="flex justify-between items-center gap-2">
                        <h2 className="text-lg font-semibold text-[#141414] underline">
                          WeWork
                        </h2>
                        <Link
                          href=""
                          className="size-11 flex justify-center items-center bg-[#f4f4f4]  rounded-full"
                        >
                          <Svg name="heart" className="size-5 text-[#f76900]" />
                        </Link>
                      </div>
                      <div className="text-[#141414] text-sm font-medium flex items-center space-x-1">
                        <span>
                          <Svg
                            name="location2"
                            className="size-4 text-[#f76900]"
                          />
                        </span>
                        <span>Andheri-East</span>
                      </div>

                      <div className="flex items-center space-x-4 font-medium text-sm text-[#141414]">
                        <div className="flex items-center space-x-1">
                          <Svg
                            name="userHalf"
                            className="size-4 text-[#f76900]"
                          />
                          <span>people</span>
                        </div>
                        <span className="size-3 rounded-full bg-[#ddd]"></span>
                        <div className="flex items-center space-x-1">
                          <Svg
                            name="scaleRuler"
                            className="size-4 text-[#f76900]"
                          />
                          <span>sqft</span>
                        </div>
                      </div>
                      <p className="text-sm font-normal line-clamp-3 text-[#808080]">
                        One of the most premium coworking spaces in Mumbai, this
                        is the ideal platform for high-growth start-ups,
                        corporates, multinationals and financial services
                        companies that want the best for their teams. Located in
                        the highly energetic location of Bandra Kurla C...
                      </p>
                      <Link
                        href=""
                        className="text-black text-base font-medium underline hover:text-[#f76900]"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm font-medium text-[#141414]">
                  No favorite spaces found
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyFavourite;
