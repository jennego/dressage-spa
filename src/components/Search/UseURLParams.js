import React, { useEffect, useState } from "react";
import Search from "./search";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

const UseUrlParams = (props) => {
  // const history = useHistory();
  // const location = useLocation();

  const { search } = useLocation();
  const { current } = queryString.parse(search);
  const { level } = queryString.parse(search);

  const [combinedFilterArr, setCombinedFilterArr] = useState([]);
  let tests = props.tests;

  // filter based on params
  useEffect(() => {
    let levelArr = level ? level.split(",") : [];
    const filters = (test) => filterCurrent(test) && filterLevels(test);

    let filterCurrent = (test) =>
      current === "all" ? test : test.current.toString() === current;

    let filterLevels = (test) =>
      levelArr.length === 0
        ? test
        : levelArr.includes(test.level.toLowerCase());

    let filtered = tests.dressage_tests.filter(filters);
    console.log("filter", filtered);
    setCombinedFilterArr({ dressage_tests: filtered });

    return () => {
      //
    };
  }, [level, current]);

  return (
    <div>
      {combinedFilterArr === undefined ? (
        "loading"
      ) : (
        <Search tests={combinedFilterArr}></Search>
      )}
    </div>
  );
};

export default UseUrlParams;
