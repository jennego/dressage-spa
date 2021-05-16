import React, { useContext, useState, useEffect } from "react";
import { Button, Box, ResponsiveContext, Anchor } from "grommet";
import { Star } from "grommet-icons";
import { Notification } from "../Global/Notice";
import { useAuth0 } from "@auth0/auth0-react";

const FavouriteButton = ({ isFaved, favourite, testId }) => {
  const size = useContext(ResponsiveContext);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("hello");
  const { isAuthenticated, loginWithRedirect, user, getAccessTokenSilently } =
    useAuth0();
  const clientId = process.env.REACT_APP_AUTH0_API_CLIENT_ID;

  const CreateFavourite = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: "https://rails-secure-api",
        clientId: { clientId },
      });
      console.log(token);

      const response = await fetch(
        `http://localhost:3000/api/v1/dressage_tests/${testId}/favourites/?user=${user.sub}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };
  const onClose = () => setOpen(false);

  const handleFavClick = () => {
    CreateFavourite();
    if (!isAuthenticated) {
      setMessage(
        <div>
          You need to
          <Anchor
            onClick={() => loginWithRedirect()}
            label=" log in or sign up "
          />
          to set favourited tests
        </div>
      );
      onOpen();
    }
  };

  return (
    <div>
      <Button
        icon={<Star color={isFaved ? "yellow" : ""} />}
        label={size !== "small" ? "Favourite" : ""}
        pad="none"
        color="brand"
        margin="2px"
        onClick={handleFavClick}
        style={
          size === "small" ? { border: "2px  solid", borderRadius: "10px" } : {}
        }
      />
      <Notification message={message} open={open} onClose={onClose} />
    </div>
  );
};

export default FavouriteButton;
