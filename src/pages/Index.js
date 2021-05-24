import React, { useEffect, useState, useContext } from "react";
import { DressageTest } from "../requests";
import ErrorMessage from "../components/error";
// import UseUrlParams from "../components/Search/UseURLParams";
import { Box, Paragraph, Spinner, Text } from "grommet";
import Loading from "../components/loading";
import { useAuth0 } from "@auth0/auth0-react";

import loadable from "@loadable/component";
import { FavContext } from "../contexts/favouritesProvider";

const UseUrlParams = loadable((props) =>
  import("../components/Search/UseURLParams")
);

const DressageIndexPage = () => {
  const [tests, setTests] = useState({ dressage_tests: [] });
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { user, isLoading, isAuthenticated } = useAuth0();

  const { favId } = useContext(FavContext);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        setIsLoadingData(true);
        DressageTest.getWithUser(user.sub)
          .then((data) => {
            setTests({ dressage_tests: data.dressage_tests });
            setIsLoadingData(false);
          })
          .catch((err) => {
            setHasError(true);
            setIsLoadingData(false);
          });
      } else {
        setIsLoadingData(true);
        DressageTest.getAll()
          .then((data) => {
            setTests({ dressage_tests: data.dressage_tests });
            setIsLoadingData(false);
          })
          .catch((err) => {
            setHasError(true);
            setIsLoadingData(false);
          });
      }
    }
  }, [favId]);

  console.log(tests);
  return (
    <div className="index main">
      {isLoadingData ? (
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
