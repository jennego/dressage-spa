import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Box,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Button,
} from "grommet";
import ThemeSwitcher from "./ThemeSwitcher";
import { MenuContext } from "../../contexts/SlideMenuProvider";

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

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
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === "small" ? (
              <Menu
                label="Menu"
                items={[
                  {
                    label: "About",
                    href: "/about",
                  },
                  {
                    label: "Tests",
                    href: "/tests",
                  },
                  { label: "Home", onClick: () => {} },
                ]}
              />
            ) : (
              <Nav direction="row">
                <Anchor as={Link} to="/about" label="About" color="light-1" />
                <Anchor as={Link} to="/" label="Tests" color="light-1" />
                <Anchor
                  as={Link}
                  to="/settings"
                  label="Settings"
                  color="light-1"
                />
                Help Arena
                <Button onClick={openMenu} label="open slide"></Button>
                <ThemeSwitcher />
              </Nav>
            )
          }
        </ResponsiveContext.Consumer>
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
