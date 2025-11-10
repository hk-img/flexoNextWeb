import React from "react";
import EmblaCarousel from "../../emblaCarousel/EmblaCarousel";
import ImageWithFallback from "@/components/ImageWithFallback";

const ImagePopup = ({ viewImagePopup, setViewImagePopup, images = [] }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setViewImagePopup(false)}
      />

      <div className="relative w-full h-auto  sm:h-full lg:max-w-[830] mx-[12px] rounded-[11px] bg-white p-6 overflow-hidden animate-scaleIn">
        <div className="flex items-center justify-between h-full">
          <div className="w-full h-full md:[&_.emblaarrows]:-left-9 md:[&_.emblaarrows]:-right-9 [&_.emblaarrows]:-left-3 [&_.emblaarrows]:-right-3 [&_.emblaarrows_button]:w-[35px] [&_.emblaarrows_button]:h-[35px] [&_.emblaarrows_button_Svg]:size-[18px] [&_section]:h-full sm:p-4 sm:pb-8">
            <EmblaCarousel
              options={{ loop: true, autoplay: false, showButton: true, showDots: true, align: "start" }} >
              {images.map((imgSrc, index) => (
                <div
                  key={index}
                  className="embla__slide shrink-0 h-full basis-full "
                >
                  <div className="relative rounded-sm overflow-hidden shadow-md h-full">
                    <div className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b]" />
                    <ImageWithFallback
                      width={200}
                      height={200}
                      src={imgSrc}
                      alt={`image-${index}`}
                      title={`image-${index}`}
                      className="w-full h-full object-cover"
                      fallback="/images/default_image.webp"
                    />
                  </div>
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
