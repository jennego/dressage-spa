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
  const { level } = queryString.parse(search);

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

  // map levels to params
  useEffect(() => {
    //   setLevelChecked({ id: level, checked: true });

    // console.log("level checked", levelChecked);

    let levels = levelChecked
      .filter((item) => item.checked === true)
      .map((item) => item.id);
    console.log("levels", levels);

    if (levels.length === 0) {
      const queryParams = queryString.parse(location.search);
      delete queryParams.level;
      history.push({ search: queryString.stringify(queryParams) });
    } else if (levels !== undefined) {
      let levelParams = levels.toString();
      const queryParams = queryString.parse(location.search);
      console.log("location", queryParams);
      let newQueries = {
        ...queryParams,
        level: levelParams,
      };
      history.push({ search: queryString.stringify(newQueries) });
    }

    return () => {
      // cleanup
    };
  }, [levelChecked]);

  // first load for current
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

    if (level !== undefined) {
      let levelArr = level.split(",");

      let newlevelState = levelChecked.map((level) => {
        if (levelArr.includes(level.id)) {
          return { id: level.id, checked: true };
        } else return { id: level.id, checked: level.checked };
      });

      setLevelChecked(newlevelState);
    }

    return () => {};
  }, []);

  // changes to current
  useEffect(() => {
    const queryParams = queryString.parse(location.search);

    let newQueries = {
      ...queryParams,
      current: isCurrentValue,
    };

    history.push({ search: queryString.stringify(newQueries) });
  }, [isCurrentValue]);

  return (
    <div className="row align-content-center">
      <div className="col">
        Level
        <CheckBoxGroup
          name="LevelsCheckbox"
          valueKey="id"
          options={[
            // { label: "Walk/Trot", id: "intro" },
            { label: "Training", id: "training" },
            { label: "First", id: "first" },
          ]}
          value={levelChecked
            .filter((item) => item.checked === true)
            .map((item) => item.id)}
          onChange={handleLevelCheck}
        />
      </div>
      <div className="col">
        Current
        <RadioButtonGroup
          focusIndicator={true}
          className="current-radio"
          name="isCurrent"
          value={isCurrentValue}
          options={[
            {
              name: "Current",
              label: "Current",
              value: true,
            },
            { name: "Historical", label: "Historical", value: false },
            { name: "All", label: "All", value: "all" },
          ]}
          // checked={isCurrentValue ? 1 : 0}
          onChange={setisCurrent}
        />
      </div>
      <div className="col-md col-12 pt-4">
        <div style={{ float: "right" }}>
          <Button
            label="Display All"
            onClick={handleDisplayAll}
            margin={{ bottom: "xsmall" }}
          ></Button>
          <Button
            label="Reset All"
            margin={{ bottom: "xsmall" }}
            onClick={handleResetAll}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
