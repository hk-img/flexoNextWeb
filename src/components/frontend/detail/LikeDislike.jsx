import Svg from "@/components/svg";
import { useAuth } from "@/context/useAuth";
import { postAPIAuth } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";

const LikeDislike = ({ spaceData, setIsAuthOpen }) => {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);
  const { token } = useAuth();
  const { data: upVoteMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuth(
        `spaces/vote/${spaceData?._id}`,
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
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
  const { data: downVoteMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuth(
        `spaces/vote/${spaceData?._id}`,
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
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
  return (
    <>
      <div className="flex items-center space-x-1 border border-[#ddd] rounded-full w-fit md:px-3.5 px-3 md:py-2 py-1">
        <div
          onClick={handleUpvote}
          className="flex items-center space-x-1 p-1 pr-3 border-r border-[#ddd]"
        >
          <Svg name="thumbUp" className="size-3.5 text-black" />
          {spaceData?.upvote > 0 && (
            <span className="text-[15px]">{spaceData?.upvote}</span>
          )}
        </div>

        <div
          onClick={handleDownvote}
          className="flex items-center space-x-1 p-1"
        >
          <Svg name="thumbDown" className="size-3.5 text-black" />
          {spaceData?.downvote > 0 && (
            <span className="text-[15px]">{spaceData?.downvote}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default LikeDislike;
