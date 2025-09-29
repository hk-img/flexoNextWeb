"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuth } from "@/services/ApiService";
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

//   const getUserDetails = async () => {
//     const response = await getAPIAuth("profile", token);
//     return response.data;
//   };

//   const {
//     data: userData,
//     refetch: refetchUserDetails,
//   } = useQuery({
//     queryKey: ["userDetails", token],
//     queryFn: getUserDetails,
//     enabled: !!token,
//   });
  
//   useEffect(() => {
//     if (!userData?.error) {
//       setUser(userData?.data.user);
//     }
//   }, [userData]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        // getUserDetails: refetchUserDetails
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
