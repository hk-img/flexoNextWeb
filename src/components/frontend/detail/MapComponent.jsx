"use client";
import React from "react";
import { GoogleMap, Circle, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent = ({ spaceData }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const center = {
    lat: spaceData?.latitude || 19.1197,
    lng: spaceData?.longitude || 72.9155,
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Circle
        center={center}
        radius={250} 
        options={{
          strokeColor: "#f6ae79", 
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#f6ae79", // Orange fill
          fillOpacity: 0.5,
        }}
      />
    </GoogleMap>
  );
};

export default MapComponent;
