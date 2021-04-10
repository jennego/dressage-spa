import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import TestSegmentItem from "../List/TestSegmentItem";
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
import Filters from "./Filters";

const Search = (props) => {
  // const { dressage_tests = [] } = props;

  // const options = {
  //   keys: ["name", "level", "orgname", "full_name"],
  //   threshold: 0.4,
  //   includeScore: true,
  //   includeMatches: true,
  //   minMatchCharLength: 2,
  // };
  // const fuse = new Fuse(dressage_tests, options);

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useLocation();
  const { query } = queryString.parse(search);

  // const setSearchQuery = (query) => {
  //   let results = fuse.search(query);
  //   // set equivalents
  //   setSearchResults(results);
  // };

  // can also try props match?

  useEffect(() => {
    const getParams = (query) => {
      if (query !== undefined) {
        console.log("grab from url", query);
        console.log("search term state: ", searchTerm);
        return setSearchTerm(query);
      } else {
        console.log("we do nothing");
        return;
      }
    };
    getParams(query);
    return console.log("please clean this mess");
  }, [query]);

  useEffect(() => {
    const setSearchQueryfromParams = (query) => {
      const options = {
        keys: ["name", "level", "orgname", "full_name"],
        threshold: 0.4,
        includeScore: true,
        includeMatches: true,
        minMatchCharLength: 2,
      };
      const fuse = new Fuse(props.dressage_tests, options);
      let results = fuse.search(query);
      if (searchTerm !== undefined) {
        setSearchResults(results);
        console.log("searching", results);
      } else {
        console.log("undefined do nothing");
        return;
      }
    };
    setSearchQueryfromParams(searchTerm);
  }, [searchTerm, props.dressage_tests]);

  let location = useLocation();
  let history = useHistory();

  const handleSearch = (e, params) => {
    // console.log(e.target.value);
    setTimeout(() => {
      setSearchTerm(e.target.value);
      history.push({
        pathname: "/search",
        search: `?query=${e.target.value}`,
      });

      // window.history.pushState("null", "null", `/search/q=${e.target.value}`);
    }, 1000);
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
        <Filters />
      </div>
      {query === undefined ? (
        <div className="row no-gutters">
          <h2>All tests default</h2>
          {/* {tests.dressage_tests.map((test) => (
            <div className="col-12 col-sm-6">
              <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
            </div>
          ))} */}
        </div>
      ) : searchResults.length === 0 ? (
        `There is nothing found for ${query}`
      ) : (
        <div className="row no-gutters">
          {searchResults.map(({ item, refIndex }) => (
            <div className="col-12 col-sm-6">
              <TestSegmentItem key={item.id} {...item}></TestSegmentItem>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
