"use client";

import React, { createContext, useState, useEffect } from "react";

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Retrieve token from localStorage if available
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const logoutUser = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ token, setToken, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
