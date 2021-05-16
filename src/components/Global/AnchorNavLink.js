import React from "react";
import { Anchor, Text } from "grommet";
import { NavLink } from "react-router-dom";

const AnchorNavLink = ({ url, label, color, style }) => (
  <NavLink
    to={url}
    exact
    className={`nav-link ${style}`}
    activeClassName="nav-link-current"
  >
    <Text
      as="span"
      size="24px"
      className="nav-link"
      color="light-1"
      weight="bold"
    >
      {label}
    </Text>
  </NavLink>
);

export default AnchorNavLink;
