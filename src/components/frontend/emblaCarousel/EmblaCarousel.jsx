"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel({ children, options }) {
  const plugins = [];

  if (options?.loop) {
    plugins.push(Autoplay({ delay: 3000, stopOnInteraction: false }));
  }

  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">{children}</div>
    </div>
  );
}
