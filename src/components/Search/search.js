import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import TestSegmentItem from "../List/TestSegmentItem";
import { TextInput, Card } from "grommet";
import { Search as SearchIcon } from "grommet-icons";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import Filters from "./Filters";
import UseUrlParams from "./UseURLParams";
import DefaultTests from "../List/DefaultList";

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
  const [searchValue, setSearchValue] = useState("");
  const { search } = useLocation();
  const { query } = queryString.parse(search);
  const searchResultsList = searchResults.map(({ item }) => ({
    label: item.full_name,
    value: item.id,
  }));

  useEffect(() => {
    const getParams = (query) => {
      if (query !== undefined) {
        console.log("grab from url", query);
        console.log("search term state: ", searchTerm);
        setSearchTerm(query);
        setSearchValue(query);
      } else {
        setSearchValue("");
        console.log("we do nothing");
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
      if (
        searchTerm !== undefined &&
        props.tests.dressage_tests !== undefined
      ) {
        const fuse = new Fuse(props.tests.dressage_tests, options);
        let results = fuse.search(query);
        setSearchResults(results);
        console.log("searching", results);
      } else {
        console.log("undefined do not send to search");
        return;
      }
    };
    setSearchQueryfromParams(searchTerm);
  }, [searchTerm, props.tests.dressage_tests]);

  console.log("array to search", props.tests);

  const handleSelectSuggestion = (e) => {
    history.push(`/tests/${e.suggestion.value}`);
  };

  let location = useLocation();
  let history = useHistory();

  const handleSearch = (e, params) => {
    // console.log(e.target.value);
    setSearchValue(e.target.value);
    setTimeout(() => {
      setSearchTerm(e.target.value);

      const queryParams = queryString.parse(location.search);
      const newQueries = {
        ...queryParams,
        query: e.target.value,
      };
      history.push({ search: queryString.stringify(newQueries) });

      // history.push({
      //   pathname: "/search",
      //   search: `?query=${e.target.value}`,
      // });

      // window.history.pushState("null", "null", `/search/q=${e.target.value}`);
    }, 1000);
  };

  console.log("filtered tests", props);

  return (
    <div>
      <div className="container-fluid d-flex align-items-center flex-column">
        {query ? (
          <h2> Searching for: "{query}" </h2>
        ) : (
          <h2>Search for tests</h2>
        )}
        <Card background="surface" elevation="none" round={false} width="large">
          <TextInput
            placeholder="search"
            icon={<SearchIcon />}
            value={searchValue}
            onChange={handleSearch}
            width="small"
            suggestions={searchResultsList}
            onSuggestionSelect={handleSelectSuggestion}
            round="10px"
          />
        </Card>
        <Filters />
      </div>
      {query === undefined || query.length === 0 ? (
        <div className="row no-gutters">
          {props.tests.dressage_tests === undefined
            ? "loading"
            : props.tests.dressage_tests.map((test) => (
                <div className="col-12 col-sm-6">
                  <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
                </div>
              ))}
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
