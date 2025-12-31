"use client";
import React from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";
import "lite-youtube-embed";

const YoutubeVideo = ({ youtubeId,type,spaceData }) => {
  return (
    <lite-youtube
      videoid={youtubeId}
      className="!w-full !h-full"
      aria-label={type == "coworking" ? `${spaceData?.actual_name || spaceData?.name} ${spaceData?.location_name}` : `${spaceData?.spaceTitle}`}
      role="region"
    ></lite-youtube>
  );
};

export default YoutubeVideo;
