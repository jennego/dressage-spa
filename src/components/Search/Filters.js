// filters for test will go here once I figure the logic from a single prop level
import React, { useState } from "react";
import {
  TextInput,
  Card,
  CheckBox,
  RadioButtonGroup,
  Box,
  CheckBoxGroup,
  FormField,
  Button,
} from "grommet";

const Filters = (props) => {
  const [isCurrentValue, setisCurrentValue] = useState(true);

  const setisCurrent = (e) => {
    console.log(e.target.value);
    setisCurrentValue(e.target.label);
  };

  return (
    <Box direction="row">
      <Box>
        Level
        <CheckBoxGroup options={["Intro", "Training", "First"]} />
      </Box>
      <Box>
        Current
        <RadioButtonGroup
          options={[
            { name: "Current", label: "Current", value: true },
            { name: "Not Current", label: "Historical", value: false },
            { name: "All", label: "All", value: "all" },
          ]}
          checked={isCurrentValue}
          value={isCurrentValue}
          onChange={setisCurrent}
        />
      </Box>
      <Box>
        <Button label="Display All"></Button>
        <Button label="Reset All"></Button>
      </Box>
    </Box>
  );
};

export default Filters;
