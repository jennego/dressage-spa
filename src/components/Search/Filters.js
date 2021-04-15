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

  const { search } = useLocation();
  const { current } = queryString.parse(search);

  const handleDisplayAll = (e) => {
    history.push({ search: "?current=all" });
    setisCurrentValue("all");
    setIsDefaultChecked(false);
  };

  const setisCurrent = (e) => {
    if (e.target.name === "Current") {
      setIsDefaultChecked(true);
    } else {
      setIsDefaultChecked(false);
    }
    setisCurrentValue(e.target.value);
  };

  console.log("history", history.location.search);

  useEffect(() => {
    // what if current is false or all  - allow that string too
    const queryParams = queryString.parse(location.search);
    let newQueries = {};

    if (current === "false" || current === "all") {
      newQueries = {
        ...queryParams,
        current: current,
      };
    } else {
      newQueries = {
        ...queryParams,
        current: isCurrentValue,
      };
    }

    if (history.location.search.length === 0) {
      history.replace({ search: queryString.stringify(newQueries) });
    } else {
      history.push({ search: queryString.stringify(newQueries) });
    }
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
          focusIndicator={true}
          className="current-radio"
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
        <Button label="Display All" onClick={handleDisplayAll}></Button>
        <Button label="Reset All"></Button>
      </Box>
    </Box>
  );
};

export default Filters;
