/// show useeffect monitor favouriteState
/// show sets these states
/// favourite button modifies them
//  ONE source of truth so they don't clash or get confused

import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const FavContext = createContext();
const baseUrl = process.env.REACT_APP_SERVER_BASE;
const clientId = process.env.REACT_APP_AUTH0_API_CLIENT_ID;

const FavProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [isFaved, setIsFaved] = useState();
  const [favId, setFavId] = useState("no fav set");

  const CreateFavourite = async (testId, user) => {
    setIsFaved(true);

    try {
      const token = await getAccessTokenSilently({
        audience: "https://rails-secure-api",
        clientId: { clientId },
      });
      console.log(token);

      const response = await fetch(
        `${baseUrl}/api/v1/dressage_tests/${testId}/favourites/?user=${user}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      setFavId(responseData.id);

      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const DeleteFavourite = async (favId) => {
    try {
      const token = await getAccessTokenSilently({
        audience: "https://rails-secure-api",
      });
      console.log(token);

      const response = await fetch(`${baseUrl}/api/v1/favourites/${favId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();
      console.log(favId + responseData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setFavId("delete" + favId);
      console.log(favId);
    }
  };

  return (
    <FavContext.Provider
      value={{
        favId,
        isFaved,
        setFavId,
        setIsFaved,
        DeleteFavourite,
        CreateFavourite,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
