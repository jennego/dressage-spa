import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import ErrorMessage from "../components/error";
// import UseUrlParams from "../components/Search/UseURLParams";
import { Box, Paragraph, Spinner, Text } from "grommet";
import Loading from "../components/loading";

import loadable from "@loadable/component";

const UseUrlParams = loadable((props) =>
  import("../components/Search/UseURLParams")
);

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
      {isLoading ? (
        <Box justify="center">
          <Loading />
          <Paragraph fill size="large" textAlign="center">
            Please Wait. It may take a few seconds on the first load as the data
            is on a free Heroku account.
          </Paragraph>
        </Box>
      ) : (
        <UseUrlParams tests={tests}> </UseUrlParams>
      )}
      {hasError ? <ErrorMessage /> : ""}
    </div>
  );
};

export default DressageIndexPage;
