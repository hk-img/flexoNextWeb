"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { TOKEN_NAME } from "@/constant/constant";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (token) {
      document.cookie = `${TOKEN_NAME}=${token}; path=/;`;
      localStorage.setItem(`${TOKEN_NAME}`, token);
    }
  }, [token]);

  // Defer user profile fetch to reduce initial blocking
  const {
    data: userData,
    refetch: refetchUserDetails,
  } = useQuery({
    queryKey: ["userDetails", token],
    queryFn: async () => {
      const res = await getAPIAuthWithoutBearer("user/viewProfile",token);
      return res.data;
    },
    enabled: !!token,
    // Defer to reduce blocking - staleTime helps prevent immediate fetch
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  
  useEffect(() => {
    if (userData?.success) {
      setUser(userData?.data);
    }
  }, [userData]);

  // Defer token retrieval to reduce initial blocking
  useEffect(() => {
    const loadToken = () => {
      const storedToken = localStorage.getItem(`${TOKEN_NAME}`);
      if (storedToken) setToken(storedToken);
    };

    // Defer to next tick to reduce blocking
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(loadToken, { timeout: 100 });
      } else {
        setTimeout(loadToken, 0);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        getUserDetails: refetchUserDetails
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if (!contextValue) {
    throw new Error("AuthProvider is missing in the component tree");
  }
  return contextValue;
};

export default AuthProvider;
