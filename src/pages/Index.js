import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import ErrorMessage from "../components/error";
import Search from "../components/Search/search";
import UseUrlParams from "../components/Search/UseURLParams";
import { Box, Spinner, Text } from "grommet";

const DressageIndexPage = () => {
  const [tests, setTests] = useState({ dressage_tests: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    DressageTest.getAll()
      .then((data) => {
        setTests({ dressage_tests: data.dressage_tests });
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  // create loading state

  return (
    <div className="index main">
      {console.log(isLoading)}
      {hasError ? <ErrorMessage /> : ""}

      {isLoading ? (
        <Box
          align="center"
          justify="center"
          direction="row"
          gap="small"
          pad="small"
        >
          <Spinner size="large" message="content is loading" />{" "}
          <Text> Loading...</Text>
        </Box>
      ) : (
        <UseUrlParams tests={tests}> </UseUrlParams>
      )}
      {/* <Search {...tests} /> */}
    </div>
  );
};

export default DressageIndexPage;
