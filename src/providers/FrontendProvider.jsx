import LocationProvider from "@/context/useLocation";

export default function FrontendProvider({ children }) {
  return (
    <LocationProvider>
    {children}
    </LocationProvider>
  );
}
