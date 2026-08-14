import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Provider Component
export const AppContextProvider = ({ children }) => {

    const [openLogin, setOpenLogin] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);

  const value = {
    openLogin, setOpenLogin, openDropDown, setOpenDropDown
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }

  return context;
};