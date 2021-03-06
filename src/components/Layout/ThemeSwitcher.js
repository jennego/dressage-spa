import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/ThemeToggleProvider";
import { Button, Text } from "grommet";
import Switch from "react-switch";
import { Sun, Moon } from "grommet-icons";

const ThemeSwitcher = (props) => {
  const { setTheme, mode } = useContext(AppContext);
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {/* <Button
        secondary
        onClick={setTheme}
        color="brand"
        label="change theme"
      ></Button> */}
      <div className="example">
        <label>
          <Switch
            onChange={setTheme}
            checked={mode === "light" ? true : false}
            offColor="#555555"
            onColor="#F2F2F2"
            offHandleColor="#6FFFB0"
            onHandleColor="#6FFFB0"
            checkedIcon={
              <Sun
                color="dark-1"
                style={{
                  marginLeft: "4px",
                }}
              />
            }
            uncheckedIcon={<Moon />}
            className="react-switch"
          />
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
