import React, { useCallback, useEffect, useState } from 'react'
import Svg from '@/components/svg'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="flex items-center justify-center rounded-full border-2 border-[#d0c2c2] bg-white text-[#d0c2c2] hover:border-[#f76900] hover:text-[#f76900] transition-all duration-300 ease-in-out cursor-pointer"
      type="button"
      {...restProps}
    >
      <Svg name="leftArrow" className="size-[20px] ms-2 flex items-center justify-center" />
      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="flex items-center justify-center rounded-full border-2 border-[#d0c2c2] bg-white text-[#d0c2c2] hover:border-[#f76900] hover:text-[#f76900] transition-all duration-300 ease-in-out cursor-pointer"
      type="button"
      {...restProps}
    >
      <Svg name="rightArrow" className="size-[20px] flex items-center justify-center" />
      {children}
    </button>
  )
}

