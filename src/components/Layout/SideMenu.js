import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { MenuContext } from "../../contexts/SlideMenuProvider";
import { Box, Tab, Tabs } from "grommet";

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
    padding: "0",
  },
};

const SlideMenu = () => {
  const { closeMenu, openMenu, isOpen } = useContext(MenuContext);

  const handleOnOpen = () => {
    openMenu();
  };
  const handleOnClose = () => {
    closeMenu();
    // set to false \
  };
  return (
    <Menu
      styles={sideMenuStyles}
      customBurgerIcon={false}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      right
      isOpen={isOpen}
    >
      <Box background="slide" fill="vertical" pad="small">
        <Tabs pad="none">
          <Tab title="Arena">Arena Content</Tab>
          <Tab title="User Settings">Setting content</Tab>
        </Tabs>
        <p>Hello Arena and settings go here!</p>
        {console.log("menu toggle", isOpen)}
      </Box>
    </Menu>
  );
};

export default SlideMenu;
