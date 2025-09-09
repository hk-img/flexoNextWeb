"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

const EmblaAutoScrollCarousel = ({ slides, options }) => {
   const plugins =
    slides.length > 3
      ? [
          AutoScroll({
            playOnInit: true,
            stopOnInteraction: false,
            speed: 0.8, 
          }),
        ]
      : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  useEffect(() => {
    if (!emblaApi) return;
    const plugins = emblaApi?.plugins?.();
    plugins ? plugins.autoScroll : null;
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((s, i) => (
            <div
              key={i}
              className="embla__slide flex-[0_0_auto] basis-auto px-6 flex items-center justify-center"
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={120}
                height={50}
                className="object-contain transition w-[145px] "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaAutoScrollCarousel;
