import React, { useContext } from "react";
import { Box, Main, Heading, Header } from "grommet";
import ThemeSwitcher from "../components/Layout/ThemeSwitcher";
import { AppContext } from "../contexts/ThemeToggleProvider";

const Settings = () => {
  const { mode } = useContext(AppContext);

  return (
    <div className="fill-height">
      <Heading margin={{ left: "medium" }}>Settings</Heading>
      <Main background="surface" pad="large">
        <div className="row">
          <Box
            pad="small"
            border={{ side: "bottom", style: "dotted" }}
            direction="row"
            fill
          >
            <div className="col-3">Theme Mode</div>

            <div className="col">Current Mode: {mode}</div>
            <div className="col">
              <ThemeSwitcher />
            </div>
          </Box>
        </div>
        <p>Default Arena Size</p>
        Clear local storage
      </Main>
    </div>
  );
};

export default Settings;
