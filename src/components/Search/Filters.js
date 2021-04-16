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
  const [isCurrentValue, setisCurrentValue] = useState();
  const [isDefaultChecked, setIsDefaultChecked] = useState(true); // use an array of booleans? [{name: 'Current', checked: true}]

  const [levelChecked, setLevelChecked] = useState([
    { id: "intro", checked: false },
    { id: "training", checked: false },
    { id: "first", checked: false },
  ]);

  const history = useHistory();
  const location = useLocation();

  const { search } = useLocation();
  const { current } = queryString.parse(search);

  const handleDisplayAll = (e) => {
    history.push({ search: "?current=all" });
    setisCurrentValue("all");
    setIsDefaultChecked(false);
  };

  const handleResetAll = () => {};

  const setisCurrent = (e) => {
    if (e.target.name === "Current") {
      setIsDefaultChecked(true);
    } else {
      setIsDefaultChecked(false);
    }
    setisCurrentValue(e.target.value);
  };

  const handleLevelCheck = (e, item) => {
    console.log("check", e.target.id, e.target.checked);

    const indexToUpdate = levelChecked.findIndex(
      (item) => item.id === e.target.id
    );
    const updatedArray = [...levelChecked]; // creates a copy of the array
    updatedArray[indexToUpdate].checked = e.target.checked;
    setLevelChecked(updatedArray);
  };

  console.log(levelChecked);

  // map levels to params
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    };
  }, [levelChecked]);

  // first load
  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    let newQueries = {};

    if (current === "false") {
      setisCurrentValue(false);
      newQueries = {
        ...queryParams,
        current: false,
      };
    } else if (current === "all") {
      setisCurrentValue("all");
      newQueries = {
        ...queryParams,
        current: "all",
      };
    } else {
      setisCurrentValue(true);
      newQueries = {
        ...queryParams,
        current: true,
      };
    }
    history.replace({ search: queryString.stringify(newQueries) });

    return () => {};
  }, []);

  useEffect(() => {
    // what if current is false or all  - allow that string too
    const queryParams = queryString.parse(location.search);

    let newQueries = {
      ...queryParams,
      current: isCurrentValue,
    };

    history.push({ search: queryString.stringify(newQueries) });
  }, [isCurrentValue]);

  return (
    <Box direction="row">
      <Box>
        Level
        <CheckBoxGroup
          name="LevelsCheckbox"
          valueKey="id"
          options={[
            { label: "Walk/Trot", id: "intro" },
            { label: "Training", id: "training" },
            { label: "First", id: "first" },
          ]}
          value={levelChecked
            .filter((item) => item.checked === true)
            .map((item) => item.id)}
          onChange={handleLevelCheck}
        />
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
        <Button label="Reset All" onClick={handleResetAll}></Button>
      </Box>
    </Box>
  );
};

export default Filters;
