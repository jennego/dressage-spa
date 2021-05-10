import React from "react";
import { Menu, Box, Avatar, Text } from "grommet";
import {
  User as UserIcon,
  SettingsOption,
  Logout as LogoutIcon,
} from "grommet-icons";
import { useAuth0 } from "@auth0/auth0-react";

const LoggedInMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <div>
      <Menu
        pad="xsmall"
        label={
          <Box direction="row" justifyContent="center">
            <Avatar src={user.picture} size="35px" margin="xsmall" />
            <div style={{ alignSelf: "center" }}>{user.nickname}</div>
          </Box>
        }
        items={[
          {
            icon: (
              <Box margin="xsmall">
                <UserIcon />
              </Box>
            ),
            label: "Profile",
            href: "/profile",
          },
          {
            icon: (
              <Box margin="xsmall">
                <SettingsOption />
              </Box>
            ),
            label: "Settings",
            href: "/settings",
          },
          {
            icon: (
              <Box margin="xsmall">
                <LogoutIcon />
              </Box>
            ),
            label: "Logout",
            onClick: () =>
              logout({
                returnTo: window.location.origin,
              }),
          },
        ]}
      ></Menu>
    </div>
  );
};

export default LoggedInMenu;
