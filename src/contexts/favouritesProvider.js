/// show useeffect monitor favouriteState
/// show sets these states
/// favourite button modifies them
//  ONE source of truth so they don't clash or get confused

import React, { createContext, useState, useEffect } from "react";
export const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [favTrigger, setFavTrigger] = useState(null);
  const [isFaved, setIsFaved] = useState(false);
  const [favId, setFavId] = useState(0);
  // favouritesId, testId, isFaved

  const addFav = () => {
    setFavTrigger("add fav");
  };

  const deleteFav = () => {
    setFavTrigger("delete fav");
  };

  return (
    <FavContext.Provider
      value={{
        isFaved,
        setIsFaved,
        favId,
        setFavId,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
