"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { usePrevNextButtons, PrevButton, NextButton } from "./EmblaCarouselArrowButtons"
import AutoScroll from "embla-carousel-auto-scroll"
import { useDotButton, DotButton } from "./EmblaCarouselDotButton"

export default function EmblaCarousel({ children, options }) {
  const plugins = []

  if(options?.autoplay) {
    plugins.push(Autoplay({ delay: 3000, stopOnInteraction: false }))
  }

  if(options?.autoscroll) {
    plugins.push(AutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        stopOnHover: false,
        speed: 0.8,
    }))
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({...options,loop: options?.loop ?? false}, plugins)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <section className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {/* Buttons */}
      {options?.showButton && (
        <div className="absolute top-1/2 -left-0 -right-0 flex justify-between -translate-y-1/2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}

      {options?.showDots && (
        <div className="flex justify-center mt-4 gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`h-3 w-3 rounded-full ${
                index === selectedIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
