"use client";
import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import ImageWithFallback from "@/components/ImageWithFallback";
import { getTypeOfSpaceByWorkSpace } from "@/services/Comman";
import Svg from "@/components/svg";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const calculateCenter = (markers) => {
  if (markers.length === 0) return { lat: 0, lng: 0 };
  let totalLat = 0;
  let totalLng = 0;
  let numMarkers = markers.length;

  markers.forEach((marker) => {
    totalLat += marker.lat;
    totalLng += marker.longi;
  });

  const centerLat = totalLat / numMarkers;
  const centerLng = totalLng / numMarkers;

  return { lat: centerLat, lng: centerLng };
};

export default function MapWithPrices({ spaceType, spaces, hoveredSpaceId }) {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  });

  const center = calculateCenter(spaces || []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {spaces.map((space) => {
          const fillColor =
            space.id === hoveredSpaceId ? "%23000000" : "%23ff6600";
          let price = 0;
          const type = getTypeOfSpaceByWorkSpace(spaceType || "");
          if (type === "coworking") {
            if (
              space.flexible_desk_price === null ||
              space.flexible_desk_price === 0
            ) {
              price = space.privatecabin_price;
            } else if (
              space.privatecabin_price === null ||
              space.privatecabin_price === 0
            ) {
              price = space.flexible_desk_price;
            } else {
              price =
                space?.privatecabin_price > space.flexible_desk_price
                  ? space.flexible_desk_price
                  : space.privatecabin_price;
            }
          } else {
            price = space.originalPrice;
          }
          return (
            <Marker
              key={space.id}
              onClick={() => setSelectedSpace(space)}
              position={{ lat: space.lat, lng: space.longi }}
              icon={{
                url: `data:image/svg+xml;charset=UTF-8,
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" >
                  <rect x="0" y="0" rx="12" ry="12" width="80" height="40" fill="${fillColor}" />
                  <text x="50%" y="55%" font-size="16" font-weight="bold" fill="white" text-anchor="middle" alignment-baseline="middle">
                    ₹${price}
                  </text>
                </svg>`,
                className: "rounded-full",
                scaledSize: new window.google.maps.Size(80, 40),
                anchor: new window.google.maps.Point(40, 20),
              }}
            />
          );
        })}
      </GoogleMap>
      {selectedSpace && (
        <div className="absolute [&_.emblaarrows]:left-3 [&_.emblaarrows]:right-3 [&_.emblaarrows_button]:w-[30px] [&_.emblaarrows_button]:h-[30px] [&_.emblaarrows_button_Svg]:size-[18px] [&_.emblaarrows_button]:!border-0 [&_.emblaarrows_button]:opacity-50 [&_.emblaarrows_button]:hover:opacity-100 [&_.emblaarrows_button_Svg]:!text-black  top-4 right-4 w-70 bg-white rounded-xl shadow-xl overflow-hidden z-50">
          <EmblaCarousel
            options={{
              loop: true,
              autoplay: false,
              showButton: true,
              align: "start",
            }}
          >
            {selectedSpace?.images?.map((image, index) => (
              <div
                key={index}
                className="embla__slide relative shrink-0 basis-full"
              >
                <ImageWithFallback
                  src={image || "/images/default_image.webp"}
                  alt="product image"
                  width={399}
                  height={320}
                  className="w-full aspect-[399/320] object-cover rounded-t-md"
                  fallback="/images/default_image.webp"
                />
              </div>
            ))}
          </EmblaCarousel>
          <div className="p-3">
            <h2 className="text-base text-[#141414] font-medium">{selectedSpace.name}</h2>
            <p className="mt-2 gap-2 flex items-center">
              <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
              <span className="text-[#777777] text-xs ">{selectedSpace?.spacesqft} sqft</span>
            </p>
          </div>
          <button
            className="cursor-pointer absolute top-2 right-12 bg-white rounded-full w-[33px] h-[33px] shadow flex items-center justify-center"
          >
            <Svg name="heart" className="size-4 text-[#808080]" />
          </button>
          <button
            onClick={() => setSelectedSpace(null)}
            className="cursor-pointer absolute top-2 right-2 bg-white rounded-full w-[33px] h-[33px] shadow flex items-center justify-center"
          >
            <Svg name="close" className="size-4" />
          </button>
        </div>
      )}
    </>
  );
}
