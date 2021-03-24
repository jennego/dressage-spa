import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
  const setTheme = () => setMode(mode === "dark" ? "light" : "dark");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <AppContext.Provider
      value={{
        mode,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
