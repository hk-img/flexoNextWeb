"use client";
import React, { useState, useEffect} from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
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
  const [center,setCenter] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  });
 
useEffect(()=>{
    if(spaces.length > 0){
      const center = calculateCenter(spaces || []);
      setCenter(center);
    }
  },[spaces])
 
  if (!isLoaded) return <div>Loading...</div>;
 
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {spaces.map((space) => {
       const fillColor =
            space.id === hoveredSpaceId ? "%23000000" : "%23ffffff";
 
        let price = 0;
        const type = getTypeOfSpaceByWorkSpace(spaceType || "");
        if (type === "coworking") {
          if (!space.flexible_desk_price) {
            price = space.privatecabin_price;
          } else if (!space.privatecabin_price) {
            price = space.flexible_desk_price;
          } else {
            price =
              space.privatecabin_price > space.flexible_desk_price
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
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="30">
                <rect x='0' y='0' rx='20' ry='20' width="90" height="30" fill="%23ff6600" />
                <text x="50%" y="55%" font-size="16" font-family="Roboto, Arial, sans-serif" font-weight="900" fill="${fillColor}" text-anchor="middle" alignment-baseline="middle">
                   ₹${Number(price).toLocaleString("en-IN")}
                </text>
              </svg>`,
              scaledSize: new window.google.maps.Size(80, 30),
              anchor: new window.google.maps.Point(40, 0),
            }}
          >
            {selectedSpace?.id === space.id && (
              <div>
              <InfoWindow
                position={{ lat: space.lat, lng: space.longi }}
                onCloseClick={() => setSelectedSpace(null)}
              >
                <div className="max-w-70 bg-white rounded-lg shadow-xl overflow-hidden z-50 [&_.emblaarrows]:left-3 [&_.emblaarrows]:right-3 [&_.emblaarrows_button]:w-[30px] [&_.emblaarrows_button]:h-[30px] [&_.emblaarrows_button_Svg]:size-[18px] [&_.emblaarrows_button]:!border-0 [&_.emblaarrows_button]:opacity-50 [&_.emblaarrows_button]:hover:opacity-100 [&_.emblaarrows_button_Svg]:!text-black">
                  <div className="relative">
                    <div>
                      <button
                        className="cursor-pointer absolute top-2 right-12 bg-white rounded-full w-[33px] h-[33px] shadow flex items-center justify-center z-10"
                      >
                        <Svg name="heart" className="size-4 text-[#808080]" />
                      </button>
                      <button
                        onClick={() => setSelectedSpace(null)}
                        className="cursor-pointer absolute top-2 right-2 bg-white rounded-full w-[33px] h-[33px] shadow flex items-center justify-center z-10"
                      >
                        <Svg name="close" className="size-4" />
                      </button>
                    </div>
                    <EmblaCarousel
                      options={{
                        loop: true,
                        autoplay: false,
                        showButton: true,
                        align: "start",
                      }}
                    >
                      {space?.images?.map((image, index) => (
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
                  </div>
                  <div className="p-3">
                    <h2 className="text-lg font-bold">{space.name}</h2>
                    <p className="mt-2 text-orange-600 flex items-center gap-1">
                      <Svg
                        name="scaleRuler"
                        className="size-[12px] text-[#f76900]"
                      />
                      <span className="text-[#777777] text-xs">{space?.spacesqft} sqft</span>
                    </p>
                  </div>
                </div>
              </InfoWindow>
              </div>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  );
}