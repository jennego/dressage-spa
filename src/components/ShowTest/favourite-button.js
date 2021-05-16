import React, { useContext, useState, useEffect } from "react";
import { Button, Box, ResponsiveContext, Anchor } from "grommet";
import { Star } from "grommet-icons";
import { Notification } from "../Global/Notice";
import { useAuth0 } from "@auth0/auth0-react";

const FavouriteButton = ({ isFaved, favourite }) => {
  const size = useContext(ResponsiveContext);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("hello");
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  const onOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };
  const onClose = () => setOpen(false);

  const handleFavClick = () => {
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
