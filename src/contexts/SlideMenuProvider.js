import React, { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
