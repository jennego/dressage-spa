import React from "react";
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

const NavBar = () => {
  return (
    <Header pad="medium">
      <Box direction="row" align="center" gap="small">
        <h3>Dressage Tests</h3>
      </Box>
      <Box direction="row" align="end" gap="small">
        <ThemeSwitcher />
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
              <Anchor as={Link} to="/about" label="About" color="brand" />
              <Anchor as={Link} to="/tests" label="Tests" color="brand" />
              <Anchor as={Link} to="/" label="Home" color="brand" />
              Arena
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
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
