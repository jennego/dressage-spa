import React, { useContext, useState, useEffect } from "react";
import { Button, Box, ResponsiveContext } from "grommet";
import { Star } from "grommet-icons";

const FavouriteButton = ({ isFaved, favourite }) => {
  const size = useContext(ResponsiveContext);

  return (
    <div>
      <Button
        icon={<Star color={isFaved ? "yellow" : ""} />}
        label={size !== "small" ? "Favourite" : ""}
        pad="none"
        color="brand"
        margin="2px"
        style={
          size === "small" ? { border: "2px  solid", borderRadius: "10px" } : {}
        }
      />
    </div>
  );
};

export default FavouriteButton;
