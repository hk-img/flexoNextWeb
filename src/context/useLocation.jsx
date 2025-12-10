"use client";
import { createContext, useContext, useState, useEffect } from "react";
const GEO_OPTS = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    // Run only in browser and when geolocation is available
    if (typeof window === "undefined") return;
    if (!("geolocation" in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates({ lat: coords.latitude, lng: coords.longitude });
      },
      (err) => {
        // Silently ignore geolocation errors in production to avoid console noise
        if (process.env.NODE_ENV === "development") {
          console.warn("Location error:", err);
        }
      },
      GEO_OPTS
    );
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
