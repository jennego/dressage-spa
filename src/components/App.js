import React, { useContext } from "react";
import "bootstrap-4-grid/css/grid.css";

import "./App.css";
import Routes from "./routes.js";
import NavBar from "./Layout/NavBar.js";
import FooterSection from "./Layout/Footer";
import { Grommet } from "grommet";
import { AppContext } from "../contexts/ThemeToggleProvider";

import SlideMenu from "./Layout/SideMenu";
import { theme } from "./theme/theme";
import Auth0ProviderWithHistory from "../auth/auth-provider-with-history";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import Loading from "./loading";

const App = () => {
  const { mode } = useContext(AppContext);

  const { isLoading, error } = useAuth0();

  const { user } = useAuth0();

  console.log("auth is loading", isLoading);
  console.log("user", user);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Grommet theme={theme} themeMode={mode}>
      <Auth0ProviderWithHistory>
        <div className="App">
          <SlideMenu />
          <NavBar></NavBar>
          <Routes></Routes>
        </div>
        <FooterSection></FooterSection>
      </Auth0ProviderWithHistory>
    </Grommet>
  );
};

export default App;
