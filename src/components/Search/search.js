import React, { useState, useEffect, useMemo, useRef } from "react";
import Fuse from "fuse.js";
import TestSegmentItem from "../List/TestSegmentItem";
import { TextInput, Card, Box, Text, Button } from "grommet";
import { Search as SearchIcon, FormClose } from "grommet-icons";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import Filters from "./Filters";
import UseUrlParams from "./UseURLParams";
import DefaultTests from "../List/DefaultList";
import Loading from "../loading";
import { Highlight } from "react-highlighter-ts/dist/lib";

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
  const targetRef = useRef();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { search } = useLocation();
  const { query } = queryString.parse(search);

  const searchResultsList = useMemo(
    () =>
      searchResults.map(({ item }) => ({
        label: (
          <Box
            direction="row"
            align="center"
            gap="small"
            pad="small"
            justify="between"
          >
            <Text size="large">
              <Highlight
                search={query}
                matchStyle={{
                  fontWeight: "bold",
                  background: "none",
                  color: "#097de3",
                }}
              >
                {item.full_name}
              </Highlight>
            </Text>
            <Box
              background={item.current ? "status-ok" : "status-warning"}
              round="10px"
              pad="xxsmall"
            >
              <Text weight="bold" color="white" size="small">
                {item.current ? "current" : "outdated"}
              </Text>
            </Box>
          </Box>
        ),
        value: item.id,
      })),
    [searchResults]
  );

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

  const removeQuery = () => {
    setSearchTerm(undefined);
    setSearchValue("");
    const queryParams = queryString.parse(location.search);
    delete queryParams.query;
    console.log("what is left", queryParams);
    history.push({ search: queryString.stringify(queryParams) });
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
        <Card
          background="surface"
          elevation="none"
          round={false}
          width="large"
          direction="row"
          border
          ref={targetRef}
        >
          <TextInput
            plain
            placeholder="search"
            icon={<SearchIcon />}
            value={searchValue}
            onChange={handleSearch}
            width="small"
            suggestions={searchResultsList}
            onSuggestionSelect={handleSelectSuggestion}
            round="10px"
            dropProps={{ stretch: true, target: targetRef.current }}
          />
          {query ? <Button icon={<FormClose />} onClick={removeQuery} /> : ""}
        </Card>
        <Filters />
      </div>
      {query === undefined || query.length === 0 ? (
        <div className="row no-gutters mb-4 mt-4">
          {props.tests.dressage_tests === undefined ? (
            <Loading />
          ) : (
            props.tests.dressage_tests.map((test) => (
              <div className="col-12 col-md-9 mx-auto">
                <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
              </div>
            ))
          )}
        </div>
      ) : searchResults.length === 0 ? (
        `There is nothing found for ${query}`
      ) : (
        <div className="row no-gutter mb-4 mt-4">
          {searchResults.map(({ item, refIndex }) => (
            <div className="col-12 col-md-9 mx-auto">
              <TestSegmentItem key={item.id} {...item}></TestSegmentItem>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
