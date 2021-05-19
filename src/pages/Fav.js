import React, { useEffect, useState } from "react";
import { Box, Heading } from "grommet";
import { Favourite } from "../requests";
import { useAuth0 } from "@auth0/auth0-react";
import TestSegmentItem from "../components/List/TestSegmentItem";

const FavouritedTests = () => {
  let baseUrl = process.env.REACT_APP_API_BASE_URL;
  const { user } = useAuth0();
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    Favourite.getAllByUser(user.sub)
      .then((data) => {
        setFavData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(favData);

  const fullName = (org_name, year, level, name) =>
    org_name + " " + year.toString() + " " + level + " " + name;

  return (
    <div className="fill-height container-fluid mb-3">
      <Box pad={{ horizontal: "medium" }}>
        <Heading level={2}>Favourited Tests</Heading>
        <p>To add a test, click the star button on a test.</p>
        {favData.map((fav) => (
          <div>
            <TestSegmentItem
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
    </div>
  );
};

export default FavouritedTests;
