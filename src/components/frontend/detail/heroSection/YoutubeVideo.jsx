"use client";
import React from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";
import "lite-youtube-embed";

const YoutubeVideo = ({ youtubeId }) => {
  return (
    <lite-youtube
      videoid={youtubeId}
      className="!w-full !h-full"
      aria-label="Embedded YouTube video: Client testimonial about Flexo workspace"
      role="region"
    ></lite-youtube>
  );
};

export default YoutubeVideo;
