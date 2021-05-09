import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "grommet";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      label="log out"
      color="status-critical"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    ></Button>
  );
};

export default LogoutButton;
