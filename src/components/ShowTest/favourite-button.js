/// need ONE source of truth for favourites (context?)
/// need to stop clashing together
// need to fetch favourites id on create too

import React, { useContext, useState, useEffect } from "react";
import { Button, Box, ResponsiveContext, Anchor, Text } from "grommet";
import { Star, Trash } from "grommet-icons";
import { Notification } from "../Global/Notice";
import { useAuth0 } from "@auth0/auth0-react";
import { DressageTest } from "../../requests";
import Loading from "../loading";
import { FavContext } from "../../contexts/favouritesProvider";

const baseUrl = process.env.REACT_APP_SERVER_BASE;
const clientId = process.env.REACT_APP_AUTH0_API_CLIENT_ID;

const FavouriteButton = ({ testId }, props) => {
  const size = useContext(ResponsiveContext);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("hello");
  const [noticeIcon, setNoticeIcon] = useState("");
  const [favAni, setFavAni] = useState("");
  const [unFavAni, setUnFavAni] = useState("");

  const {
    isAuthenticated,
    loginWithRedirect,
    user,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();

  // const [isFaved, setIsFaved] = useState(false);
  // const [favId, setFavId] = useState(0);

  const {
    isFaved,
    setIsFaved,
    favId,
    setFavId,
    DeleteFavourite,
    CreateFavourite,
  } = useContext(FavContext);

  useEffect(() => {
    if (isLoading === false) {
      if (isAuthenticated) {
        DressageTest.getWithUser(testId, user.sub)
          .then((fav_data) => {
            console.log(fav_data);
            setIsFaved(fav_data.is_faved);
            setFavId(fav_data.favourites.id);
          })
          .catch((err) => {
            setFavId(0);
            console.log(err);
          });
      }
    }
  }, [isLoading, favId]);
  console.log(isFaved, favId);

  const onOpenNotice = (message, icon) => {
    setOpen(true);
    setMessage(message);
    setNoticeIcon(icon);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const onClose = () => setOpen(false);

  const handleFavClick = () => {
    if (isAuthenticated) {
      if (isFaved) {
        DeleteFavourite(favId);
        onOpenNotice("Favourite deleted!", <Trash size="large" />);
      } else {
        CreateFavourite(testId, user.sub);
        onOpenNotice("Favourite added!", <Star size="large" />);
      }
    }

    if (!isAuthenticated) {
      onOpenNotice(
        <div>
          You need to
          <Anchor
            onClick={() => loginWithRedirect()}
            label=" log in or sign up "
          />
          to set favourited tests
        </div>
      );
    }
  };

  const StarIcon = () => {
    if (isFaved) {
      return (
        <Box animation={favAni}>
          <Star color="#e6c525" />
        </Box>
      );
    } else if (!isFaved) {
      return (
        <Box animation={unFavAni}>
          <Star />
        </Box>
      );
    }
  };

  return (
    <div>
      {/* <h1>{isFaved.toString()}</h1> */}

      {isLoading ? (
        <Button
          icon={<StarIcon />}
          label={size !== "small" ? "Favourite" : ""}
          pad="none"
          color="brand"
          margin="2px"
          focusIndicator={false}
          disabled
          style={
            size === "small"
              ? { border: "2px  solid", borderRadius: "10px" }
              : {}
          }
        />
      ) : (
        <Button
          icon={<StarIcon />}
          label={size !== "small" ? "Favourite" : ""}
          className="fav-active"
          pad="none"
          color="brand"
          margin="2px"
          onClick={() => handleFavClick()}
          style={
            size === "small"
              ? { border: "2px  solid", borderRadius: "10px" }
              : {}
          }
        />
      )}
      <Notification
        message={message}
        open={open}
        onClose={onClose}
        icon={noticeIcon}
      />
    </div>
  );
};

export default FavouriteButton;
