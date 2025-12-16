import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { ShowToast } from "@/utils/ShowToast";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const LikeDislike = ({ spaceData, setIsAuthOpen, voteData,refetchDetail }) => {
  const { token } = useAuth();
  const { mutate: upVoteMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `spaces/vote/${spaceData?.id}`,
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data?.result?.success) {
        ShowToast(data?.result?.message,"success");
        refetchDetail();
        localStorage.removeItem("voteData");
      } else {
        ShowToast(data.message || data?.result?.message,"error");
      }
    },
    onError: (error) => {
      ShowToast(error.message,"error");
    },
  });
  const handleUpvote = () => {
    if (!token) {
      const payload = {
        spaceId: spaceData?.id,
        voteType: "upvote",
      };
      localStorage.setItem("voteData", JSON.stringify(payload));
      setIsAuthOpen(true);
      return;
    }
    const payload = {
      voteType: "upvote",
    };
    upVoteMutate(payload);
  };
  const { mutate: downVoteMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `spaces/vote/${spaceData?.id}`,
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data?.result?.success) {
        ShowToast(data?.result?.message,"success");
        refetchDetail();
        localStorage.removeItem("voteData");
      } else {
        ShowToast(data?.message || data?.result?.message,"error");
      }
    },
    onError: (error) => {
      ShowToast(error.message,"error");
    },
  });
  const handleDownvote = () => {
    if (!token) {
      const payload = {
        spaceId: spaceData?.id,
        voteType: "downvote",
      };
      localStorage.setItem("voteData", JSON.stringify(payload));
      setIsAuthOpen(true);
      return;
    }
    const payload = {
      voteType: "downvote",
    };
    downVoteMutate(payload);
  };

  useEffect(()=>{
    const voteData = localStorage.getItem("voteData");
    if (voteData && token) {
      const parsedVoteData = JSON.parse(voteData);
      if(parsedVoteData?.voteType == "upvote" && parsedVoteData?.spaceId){
        upVoteMutate(parsedVoteData);
      }else if(parsedVoteData?.voteType == "downvote" && parsedVoteData?.spaceId){
        downVoteMutate(parsedVoteData);
      }
    }
  },[token])

  return (
    <>
      <div className="flex items-center space-x-1 border border-[#ddd] rounded-full w-fit md:px-3.5 px-3 md:py-2 py-1">
        <div
          onClick={handleUpvote}
          className="cursor-pointer flex items-center space-x-1 p-1 pr-3 border-r border-[#ddd]"
        >
          <Svg
            name={voteData?.upvote == 1 ? "thump-up-fill" : "thumbUp"}
            className={`size-3.5 ${
              voteData?.upvote == 1 ? "text-[#f76900]" : "text-black"
            }`}
          />
          {spaceData?.upvote > 0 && (
            <span className="text-[15px]">{spaceData?.upvote}</span>
          )}
        </div>

        <div
          onClick={handleDownvote}
          className="cursor-pointer flex items-center space-x-1 p-1"
        >
          <Svg
            name={voteData?.downvote == 1 ? "thumb-down-fill" : "thumbDown"}
            className={`size-3.5 ${
              voteData?.downvote == 1 ? "text-[#f76900]" : "text-black"
            }`}
          />
          {spaceData?.downvote > 0 && (
            <span className="text-[15px]">{spaceData?.downvote}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default LikeDislike;
