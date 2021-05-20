import React, { useEffect, useState, useContext } from "react";
import { Box, Heading, Button } from "grommet";
import { Favourite } from "../requests";
import { useAuth0 } from "@auth0/auth0-react";
import TestSegmentItem from "../components/List/TestSegmentItem";
import { FavContext } from "../contexts/favouritesProvider";

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
  const [trig, setSetTrig] = useState("");
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
    DeleteFavourite(id);
    // DeleteFavourite(id).then((val) => {
    //   setFavId("delete" + id);
    // });
  };

  const fullName = (org_name, year, level, name) =>
    org_name + " " + year.toString() + " " + level + " " + name;

  return (
    <div className="fill-height container-fluid mb-3">
      <Heading level={2}>Favourited Tests</Heading>
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
