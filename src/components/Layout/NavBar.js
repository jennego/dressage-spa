import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Anchor,
  Box,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Button,
  Text,
} from "grommet";
import ThemeSwitcher from "./ThemeSwitcher";
import { MenuContext } from "../../contexts/SlideMenuProvider";
import AnchorNavLink from "../../global/AnchorNavLink";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { setIsOpen, openMenu, closeMenu } = useContext(MenuContext);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll, false);
  //   };
  // });

  // Scrolled: remove title/logo, reduce all menu items to a sidebar toggle? Maybe leave Arena out? Add semi transparency. Full opacity on hover.

  return (
    <div className={`navbar ${scrolled ? "sticky-nav" : "heading"}`}>
      <Header
        pad={`${scrolled ? "none" : "medium"}`}
        height={`${scrolled ? "xxsmall" : "xsmall"}`}
        background="brand"
      >
        <Box direction="row" align="center" gap="small">
          <h3>Dressage Tests</h3>
        </Box>

        <Box direction="row">
          <ResponsiveContext.Consumer>
            {(responsive) =>
              responsive === "small" ? (
                <Menu
                  label="Menu"
                  items={[
                    { label: "Arena", onClick: openMenu },
                    { label: "Tests", href: "/" },
                    {
                      label: "About",
                      href: "/about",
                    },
                    {
                      label: "Settings",
                      href: "/settings",
                    },
                  ]}
                />
              ) : (
                <Nav direction="row">
                  <AnchorNavLink color="light-1" label="About" url="/about" />

                  <AnchorNavLink
                    color="light-1"
                    label="Roadmap"
                    url="/roadmap"
                  />

                  <AnchorNavLink
                    color="light-1"
                    label="Settings"
                    url="/settings"
                  />

                  <AnchorNavLink color="light-1" label="Tests" url="/" />
                  <Button onClick={openMenu} label="Arena"></Button>
                </Nav>
              )
            }
          </ResponsiveContext.Consumer>
          <Nav
            direction="row"
            margin={{ left: "medium" }}
            alignContent="center"
          >
            <ThemeSwitcher />
          </Nav>
        </Box>
      </Header>
    </div>
  );
};

export const Collapsable = () => <NavBar />;

export default NavBar;

// const NavBar = () => {
//   // handleItemClick = (e, { name }) =>
//   //     this.setState({ activeItem: name })

//   return <div></div>;
// };
// export default NavBar;
