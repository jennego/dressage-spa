import React, { useState } from "react";
import Fuse from "fuse.js";
import TestSegmentItem from "./TestSegmentItem";
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
import { Search as SearchIcon } from "grommet-icons";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

const Search = (props) => {
  const { dressage_tests = [] } = props;

  const options = { keys: ["name", "level", "orgname", "full_name"] };
  const fuse = new Fuse(dressage_tests, options);
  const [searchResults, setSearchResults] = useState([]);

  const setSearchQuery = (query) => {
    let results = fuse.search(query);
    // set equivalents
    setSearchResults(results);
  };

  console.log(searchResults);

  let location = useLocation();
  let history = useHistory();
  console.log(location, history);

  const { search } = useLocation();
  const { query } = queryString.parse(search);

  // const searchParams = new URLSearchParams(search);
  // const query = searchParams.get("query");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setTimeout(() => {
      setSearchQuery(e.target.value);
      history.push({
        pathname: "/search",
        search: `?query=${e.target.value}`,
      });

      // window.history.pushState("null", "null", `/search/q=${e.target.value}`);
    }, 500);
  };

  return (
    <div>
      <div className="container-fluid">
        <h2> search query: {query} </h2>
        <Card background="surface" elevation="none" round={false}>
          <TextInput
            placeholder="search"
            icon={<SearchIcon />}
            onChange={handleSearch}
            suggestions={["training", "first"]}
          />
        </Card>
        <Box direction="row">
          <Box>
            Level
            <CheckBoxGroup options={["Intro", "Training", "First"]} />
          </Box>
          <Box>
            Current
            <RadioButtonGroup options={["Current", "Historical", "All"]} />
          </Box>
          <Box>
            <Button label="Display All"></Button>
          </Box>
        </Box>
      </div>

      {searchResults.length === 0 && query !== undefined
        ? `There is nothing found for ${query}`
        : searchResults.map(({ item, refIndex }) => (
            <div>{item.full_name}</div>
          ))}
    </div>
  );
};

export default Search;
