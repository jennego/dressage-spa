/// need ONE source of truth for favourites (context?)
/// need to stop clashing together
// need to fetch favourites id on create too

import React, { useContext, useState, useEffect } from "react";
import { Button, Box, ResponsiveContext, Anchor } from "grommet";
import { Star } from "grommet-icons";
import { Notification } from "../Global/Notice";
import { useAuth0 } from "@auth0/auth0-react";
import { DressageTest } from "../../requests";
import Loading from "../loading";

const FavouriteButton = ({ favourite, testId, is_faved }, props) => {
  const size = useContext(ResponsiveContext);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("hello");
  const {
    isAuthenticated,
    loginWithRedirect,
    user,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();
  const clientId = process.env.REACT_APP_AUTH0_API_CLIENT_ID;

  const [isFaved, setIsFaved] = useState(false);
  const [favId, setFavId] = useState(0);
  const [favData, setFavData] = useState({});

  useEffect(() => {
    console.log("is loading", isLoading);
    if (isLoading === false) {
      if (isAuthenticated) {
        DressageTest.getWithUser(testId, user.sub)
          .then((fav_data) => {
            setFavData(fav_data);
            setIsFaved(fav_data.is_faved);
            setFavId(fav_data.favourites.id);
          })
          .catch((err) => {
            setFavId(0);
            console.log(err);
          });
      }
    }
  }, [isLoading, isFaved, favId]);

  console.log(isFaved, favId);

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
      setIsFaved(true);
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
        clientId: { clientId },
      });
      console.log(token);

      const response = await fetch(
        `http://localhost:3000/api/v1/favourites/${favId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      setIsFaved(false);
      setFavId(0);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onOpenNotice = (message) => {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const onClose = () => setOpen(false);

  const handleFavClick = () => {
    if (isAuthenticated) {
      if (isFaved) {
        setIsFaved(false);
        DeleteFavourite(favId);
        onOpenNotice("Favourite deleted!");
      } else {
        setIsFaved(true);
        CreateFavourite();
        onOpenNotice("Favourite added!");
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
      return <Star color="#e6c525" />;
    } else if (!isFaved) {
      return <Star />;
    }
  };

  return (
    <div>
      <h1>{isFaved.toString()}</h1>

      {isLoading ? (
        <Button
          icon={<StarIcon />}
          label={size !== "small" ? "Favourite" : ""}
          pad="none"
          color="brand"
          margin="2px"
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
      <Notification message={message} open={open} onClose={onClose} />
    </div>
  );
};

export default FavouriteButton;
