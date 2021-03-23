import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import { Button, Text } from "grommet";

const ThemeSwitcher = (props) => {
  const { setTheme, mode } = useContext(AppContext);

  return (
    <div>
      <Button
        secondary
        onClick={setTheme}
        color="brand"
        label="change theme"
      ></Button>
      <p style={{ fontSize: "15px" }}>Current theme is {mode}</p>
    </div>
  );
};

export default ThemeSwitcher;
