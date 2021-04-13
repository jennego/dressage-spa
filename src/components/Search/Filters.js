// filters for test will go here once I figure the logic from a single prop level
import React, { useState, useEffect } from "react";
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
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

const Filters = (props) => {
  const [isCurrentValue, setisCurrentValue] = useState(true);
  const [isDefaultChecked, setIsDefaultChecked] = useState(true);

  const history = useHistory();
  const location = useLocation();

  const setisCurrent = (e) => {
    setisCurrentValue(e.target.value);
    if (e.target.name === "Current") {
      setIsDefaultChecked(true);
    } else {
      setIsDefaultChecked(false);
    }
  };

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    const newQueries = {
      ...queryParams,
      current: isCurrentValue,
    };
    history.push({ search: queryString.stringify(newQueries) });
  }, [isCurrentValue]);

  return (
    <Box direction="row">
      <Box>
        Level
        <CheckBoxGroup options={["Intro", "Training", "First"]} />
      </Box>
      <Box>
        Current
        <RadioButtonGroup
          name="isCurrent"
          options={[
            {
              name: "Current",
              label: "Current",
              value: true,
              checked: isDefaultChecked,
            },
            { name: "Historical", label: "Historical", value: false },
            { name: "All", label: "All", value: "all" },
          ]}
          // checked={isCurrentValue ? 1 : 0}
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
