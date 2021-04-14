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
  const { query } = queryString.parse(search);
  const { current } = queryString.parse(search);

  const [filteredTestList, setFilteredTestList] = useState([]);

  console.log(current);
  let tests = props.tests;

  useEffect(() => {
    if (current === "true") {
      console.log("current is true");
      let filteredTests = tests.dressage_tests.filter(
        (test) => test.current === true
      );
      setFilteredTestList({ dressage_tests: filteredTests });
    } else if (current === "false") {
      console.log("current is false");

      let filteredTests = tests.dressage_tests.filter(
        (test) => test.current === false
      );
      setFilteredTestList({ dressage_tests: filteredTests });
    } else if (current === "all") {
      console.log("current is all");

      setFilteredTestList(tests);
    }
  }, [current]);

  return (
    <div>
      {console.log("filtered tests", filteredTestList)}
      {tests === undefined ? (
        "loading"
      ) : (
        <Search tests={filteredTestList}></Search>
      )}
      {/* <Filters></Filters> */}
    </div>
  );
};

export default UseUrlParams;
