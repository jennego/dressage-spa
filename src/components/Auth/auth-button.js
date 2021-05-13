import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";
import LoggedInMenu from "./logged-in-menu";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  console.log("logged in?", isAuthenticated);

  return isAuthenticated ? <LoggedInMenu /> : <LoginButton />;
};

export default AuthenticationButton;
