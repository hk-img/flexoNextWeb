"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { usePrevNextButtons, PrevButton, NextButton } from "./EmblaCarouselArrowButtons"
import AutoScroll from "embla-carousel-auto-scroll"

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

  return (
    <section className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-1">{children}</div>
      </div>

      {/* Buttons */}
      {options?.showButton && (
        <div className="absolute top-1/2 -left-5 -right-5 flex justify-between -translate-y-1/2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}
    </section>
  )
}
