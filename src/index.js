import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import AppProvider from "./contexts/ThemeToggleProvider";
import MenuProvider from "./contexts/SlideMenuProvider";
import Auth0ProviderWithHistory from "./auth/auth-provider-with-history";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import FavProvider from "./contexts/favouritesProvider";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <MenuProvider>
        <FavProvider>
          <Router>
            <ScrollToTop />
            <App />
          </Router>
        </FavProvider>
      </MenuProvider>
    </AppProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
