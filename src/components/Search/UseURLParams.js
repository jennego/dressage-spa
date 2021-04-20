import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Search from "./search";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const UseUrlParams = (props) => {
  const history = useHistory();
  const location = useLocation();

  const { search } = useLocation();
  const { current } = queryString.parse(search);
  const { level } = queryString.parse(search);

  const [filteredTestList, setFilteredTestList] = useState([]);
  const [trainingFilteredList, setTrainingFilteredList] = useState([]);
  const [combinedFilterArr, setCombinedFilterArr] = useState([]);
  let tests = props.tests;

  // filter current based on params
  // combine with the other filters?

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

  // useEffect(() => {
  //   if (current === "true") {
  //     let filteredTests = tests.dressage_tests.filter(
  //       (test) => test.current === true
  //     );
  //     setFilteredTestList({ dressage_tests: filteredTests });
  //   } else if (current === "false") {
  //     let filteredTests = tests.dressage_tests.filter(
  //       (test) => test.current === false
  //     );
  //     setFilteredTestList({ dressage_tests: filteredTests });
  //   } else if (current === "all") {
  //     setFilteredTestList(tests);
  //   }
  // }, [current]);

  // filter levels based on params

  // useEffect(() => {
  //   if (level !== undefined) {
  //     let levelArr = level.split(",");
  //     let results = tests;

  //     let trainingFiltered = results.dressage_tests.filter((item) =>
  //       levelArr.includes(item.level.toLowerCase())
  //     );
  //     setTrainingFilteredList({ dressage_tests: trainingFiltered });
  //   } else if (level === undefined) {
  //     setTrainingFilteredList({ dressage_tests: tests.dressage_tests });
  //   }
  //   return () => {
  //     // cleanup
  //   };
  // }, [level]);

  // use separate arrays to filter
  // then filter again
  // should put filter params into object later

  // useEffect(() => {
  //   if (level === undefined) {
  //     console.log("current only");
  //     setCombinedFilterArr(filteredTestList);
  //   } else if (
  //     filteredTestList.dressage_tests === undefined &&
  //     trainingFilteredList.dressage_tests === undefined
  //   ) {
  //     console.log("nothing return tests");
  //     setCombinedFilterArr({ dressage_tests: tests.dressage_tests });

  //     // console.log("array to combine", filteredTestList, trainingFilteredList);
  //   } else {
  //     let combined = trainingFilteredList.dressage_tests.filter((item) =>
  //       current === "all" ? item : item.current.toString() === current
  //     );
  //     console.log("current param", current);

  //     console.log("combined arrays", combined);
  //     setCombinedFilterArr({ dressage_tests: combined });
  //   }

  //   return () => {
  //     //          cleanup
  //   };
  // }, [filteredTestList, trainingFilteredList]);

  return (
    <div>
      {combinedFilterArr === undefined ? (
        "loading"
      ) : (
        <Search tests={combinedFilterArr}></Search>
      )}
      {/* <Filters></Filters> */}
    </div>
  );
};

export default UseUrlParams;
