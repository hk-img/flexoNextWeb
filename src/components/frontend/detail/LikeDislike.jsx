import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { set } from "zod";

const LikeDislike = ({ spaceData, setIsAuthOpen, existingVote }) => {
  const [upVoteCount, setUpVoteCount] = useState(0);
  const [voteData, setVoteData] = useState(null);
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
        toast.success(data?.result?.message);
        setVoteData(data?.result?.existingVote);
        setUpVoteCount(data?.result?.space?.upvote);
      } else {
        toast.error(data.message || data?.result?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const handleUpvote = () => {
    if (!token) {
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
        toast.success(data?.result?.message);
        setVoteData(data?.result?.existingVote);
        setUpVoteCount(data?.result?.space?.upvote);
      } else {
        toast.error(data?.message || data?.result?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const handleDownvote = () => {
    if (!token) {
      setIsAuthOpen(true);
      return;
    }
    const payload = {
      voteType: "downvote",
    };
    downVoteMutate(payload);
  };

  useEffect(() => {
    if (existingVote) {
      setVoteData(existingVote);
    }
  }, [existingVote]);

  useEffect(() => {
    if (spaceData) {
      setUpVoteCount(spaceData?.upvote);
    }
  }, [spaceData]);

  return (
    <>
      <div className="flex items-center space-x-1 border border-[#ddd] rounded-full w-fit md:px-3.5 px-3 md:py-2 py-1">
        <div
          onClick={handleUpvote}
          className="flex items-center space-x-1 p-1 pr-3 border-r border-[#ddd]"
        >
          <Svg
            name={voteData?.upvote == 1 ? "thump-up-fill" : "thumbUp"}
            className="size-3.5 text-black"
          />
          {spaceData?.upvote > 0 && (
            <span className="text-[15px]">{upVoteCount}</span>
          )}
        </div>

        <div
          onClick={handleDownvote}
          className="flex items-center space-x-1 p-1"
        >
          <Svg
            name={voteData?.downvote == 1 ? "thumb-down-fill" : "thumbDown"}
            className="size-3.5 text-black"
          />
        </div>
      </div>
    </>
  );
};

export default LikeDislike;
