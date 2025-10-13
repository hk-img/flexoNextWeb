"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAPIAuthWithoutBearer,
  postAPIAuthWithoutBearer,
} from "@/services/ApiService";
import MyFavoriteItem from "./MyFavoriteItem";
import Svg from "@/components/svg";
import { toast } from "sonner";

const MyFavourite = () => {
  const { token } = useAuth();
  const [favouriteData, setFavouriteData] = useState([]);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false);
  const [spaceId, setSpaceId] = useState("");
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
  useEffect(() => {
    if (allFavorites?.favoriteSpaceList?.length > 0) {
      setFavouriteData(allFavorites?.favoriteSpaceList || []);
    }
  }, [allFavorites]);

  const { mutate: favouriteMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `favorite/addToFavorite/${payload?.spaceId}`,
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      toast.success(data?.message);
      setFavouriteData((prev)=>(prev.filter((item)=>item?.spaceData?.id !== payload?.spaceId)));
      setIsRemovePopupOpen(false);
      setSpaceId("");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleFavourite = () => {
    const payload = {
      spaceId: spaceId,
    };
    favouriteMutate(payload);
  };
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto px-[15px] py-10">
          <div className="flex flex-col">
            <div className="pt-[14px]">
              <h1 className="font-semibold text-[#141414] text-[26px] leading-[1.6]">
                Favorite workspaces
              </h1>
            </div>
            <div className="flex flex-col gap-y-8">
              {favouriteData?.length > 0 ? (
                favouriteData?.map((item, index) => {
                  console.log(item?.spaceData, "Ergyerre");
                  return (
                    <MyFavoriteItem
                      key={index}
                      item={item}
                      setIsRemovePopupOpen={setIsRemovePopupOpen}
                      setSpaceId={setSpaceId}
                    />
                  );
                })
              ) : (
                <div className="pt-[30px] pb-[55px]">
                  <p className="text-2xl font-medium text-[#141414] leading-[1.6]">
                    Favorite Workspaces not found..
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {isRemovePopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => {
              setIsRemovePopupOpen(false);
              setSpaceId("");
            }}
          />
          <div className="relative w-full max-w-md mx-4 rounded-[11px] bg-white p-8 text-center animate-scaleIn shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="border-2 border-orange-500 rounded-full p-4">
                <span className="text-orange-500 text-4xl font-bold">!</span>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Remove this space from favorites?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setIsRemovePopupOpen(false);
                  setSpaceId("");
                }}
                className="cursor-pointer px-6 py-2 bg-[#f36b1c] text-white font-semibold rounded-md hover:bg-[#d75d10] transition"
              >
                NO
              </button>
              <button
                onClick={handleFavourite}
                className="cursor-pointer px-6 py-2 bg-[#f36b1c] text-white font-semibold rounded-md hover:bg-[#d75d10] transition"
              >
                YES
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyFavourite;
