import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "grommet";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      color="status-ok"
      label="Log In"
      onClick={() => loginWithRedirect()}
    ></Button>
  );
};

export default LoginButton;
