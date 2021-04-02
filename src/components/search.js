import React, { useState } from "react";
import Fuse from "fuse.js";
import TestSegmentItem from "./TestSegmentItem";
import { TextInput, Card } from "grommet";
import { Search as SearchIcon } from "grommet-icons";

const Search = (props) => {
  const { dressage_tests = [] } = props;

  const options = { keys: ["name", "level", "orgname", "full_name"] };
  const fuse = new Fuse(dressage_tests, options);
  const [searchResults, setSearchResults] = useState([]);

  const setSearchQuery = (query) => {
    let results = fuse.search(query);
    // set equivalents
    console.log(query, results);
    if (results.length === 0) {
      return `nothing found for ${query}`; // figure out how to display this, probably a state
    } else {
      setSearchResults(results);
    }
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setTimeout(() => {
      setSearchQuery(e.target.value);
    }, 1000);
  };

  return (
    <div>
      <div className="container-fluid">
        <Card background="surface" elevation="none" round={false}>
          <TextInput
            placeholder="search"
            icon={<SearchIcon />}
            onChange={handleSearch}
          />
        </Card>
      </div>

      {searchResults.length !== 0
        ? searchResults.map(({ item, refIndex }) => <div>{item.full_name}</div>)
        : ""}
    </div>
  );
};

export default Search;
