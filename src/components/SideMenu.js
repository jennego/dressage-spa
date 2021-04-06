import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";

// this is probably going to need context

const sideMenuStyles = {
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenu: {
    background: "brand",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
};

const SlideMenu = () => {
  const handleOnOpen = () => {
    // set to true
  };
  const handleOnClose = () => {
    // set to false \
  };

  // customBurgerIcon={false}
  // onOpen={handleOnOpen}
  // onClose={handleOnClose}
  return (
    <Menu styles={sideMenuStyles} right>
      <p>Hello Arena and settings go here!</p>
    </Menu>
  );
};

export default SlideMenu;
