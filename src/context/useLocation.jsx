"use client";
import { createContext, useContext, useState, useEffect } from "react";
const GEO_OPTS = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(null);
  console.log({ coordinates });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setCoordinates({ lat: coords.latitude, lng: coords.longitude });
        },
        (err) => {
          console.error("Location error:", err);
        },
        GEO_OPTS
      );
    }
  }, []);
  return (
    <LocationContext.Provider
      value={{
        coordinates,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const contextValue = useContext(LocationContext);
  if (!contextValue) {
    throw new Error("LocationProvider is missing in the component tree");
  }
  return contextValue;
};

export default LocationProvider;
