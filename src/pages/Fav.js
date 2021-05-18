import React, { useEffect, useState } from "react";
import { Box, Heading } from "grommet";

const FavouritedTests = () => {
  let baseUrl = process.env.REACT_APP_API_BASE_URL;
  console.log(baseUrl);

  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div className="fill-height">
      <Box pad={{ horizontal: "medium" }}>
        <Heading size={2}>Favourited Tests</Heading>
        Hello
      </Box>
    </div>
  );
};

export default FavouritedTests;
