import React, { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"
import dayjs from "dayjs"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
     // get session from local storage
     const session = JSON.parse(localStorage.getItem("session"));

     // if session exists, set authenticated to true
     if (session) {
       // 1. check if refresh token is valid
       const decoded = jwtDecode(session.refresh_token);
       const expiry = dayjs(decoded.exp * 1000);
       const isValid = dayjs().isBefore(expiry);

       if (isValid) {
         setIsAuthenticated(true);
       } else {
         logout();
       }
     }
   });


  const login = (id, accessToken, sessionData) => {
    localStorage.setItem("userId", id);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("session", JSON.stringify(sessionData));
    setUserId(id);
  };

  const adminLogin = (accessToken) => {
    localStorage.setItem("access_token", accessToken);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("session");
    setUserId(null);
  };

  const adminLogout = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userId, login, logout, adminLogin, adminLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
