/// show useeffect monitor favouriteState
/// show sets these states
/// favourite button modifies them
//  ONE source of truth so they don't clash or get confused

import React, { createContext, useState, useEffect } from "react";
export const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [isFaved, setIsFaved] = useState(false);
  const [favId, setFavId] = useState(0);

  return <FavContext.Provider value={{}}>{children}</FavContext.Provider>;
};

export default FavProvider;
