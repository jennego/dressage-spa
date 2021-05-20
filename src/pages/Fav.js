import React, { useEffect, useState, useContext } from "react";
import { Box, Heading, Button } from "grommet";
import { Star, Trash } from "grommet-icons";
import { Favourite } from "../requests";
import { useAuth0 } from "@auth0/auth0-react";
import TestSegmentItem from "../components/List/TestSegmentItem";
import { FavContext } from "../contexts/favouritesProvider";
import { Notification } from "../components/Global/Notice";

const NoFavourites = () => (
  <p>
    You have no favourites. Click on "Favourite" when viewing a test to add
    some.
  </p>
);

const FavouritedTests = () => {
  let baseUrl = process.env.REACT_APP_SERVER_BASE;
  const { user } = useAuth0();
  const [favData, setFavData] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("hello");
  const [noticeIcon, setNoticeIcon] = useState("");
  const {
    isFaved,
    setIsFaved,
    favId,
    setFavId,
    DeleteFavourite,
    CreateFavourite,
  } = useContext(FavContext);

  useEffect(() => {
    Favourite.getAllByUser(user.sub)
      .then((data) => {
        setFavData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [favId]);

  console.log("fav page", favData, favId);

  const handleDelete = (id) => {
    onOpenNotice("Favourite deleting!", <Trash size="large" />);
    DeleteFavourite(id);
  };

  const fullName = (org_name, year, level, name) =>
    org_name + " " + year.toString() + " " + level + " " + name;

  const onOpenNotice = (message, icon) => {
    setOpen(true);
    setMessage(message);
    setNoticeIcon(icon);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const onClose = () => setOpen(false);

  return (
    <div className="fill-height container-fluid mb-3">
      <Notification
        message={message}
        open={open}
        onClose={onClose}
        icon={noticeIcon}
      />
      <Heading level={2}>
        {" "}
        <Star /> Favourited Tests
      </Heading>
      {favData.length === 0 ? (
        <NoFavourites />
      ) : (
        <Box pad={{ horizontal: "medium" }}>
          <p>To add a test, click the star button on a test.</p>
          {favData.map((fav) => (
            <div>
              <TestSegmentItem
                deleteHandler={() => handleDelete(fav.fav_id)}
                key={fav.fav_id}
                full_name={fullName(
                  fav.short_org_name,
                  fav.test.year,
                  fav.test.level,
                  fav.test.name
                )}
                {...fav.test}
                deleteButton={true}
              ></TestSegmentItem>
            </div>
          ))}
        </Box>
      )}
    </div>
  );
};

export default FavouritedTests;
