import AuthProvider from "@/context/useAuth";
import LocationProvider from "@/context/useLocation";

export default function FrontendProvider({ children }) {
  return (
    <AuthProvider>
      <LocationProvider>
        {children}
      </LocationProvider>
    </AuthProvider>
  );
}
