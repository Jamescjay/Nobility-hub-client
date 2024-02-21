import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const login = (id, accessToken) => {
    localStorage.setItem("userId", id);
    localStorage.setItem("accessToken", accessToken);
    setUserId(id);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
