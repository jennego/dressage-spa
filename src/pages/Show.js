import React, { useEffect, useState, useContext } from "react";
import { DressageTest } from "../requests";
import TestInfo from "../components/ShowTest/TestInfo";
import { Box, Button } from "grommet";
import TestHeading from "../components/ShowTest/TestHeading";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import { useAuth0 } from "@auth0/auth0-react";
import FavProvider from "../contexts/favouritesProvider";
import { FavContext } from "../contexts/favouritesProvider";
import { Notification } from "../components/Global/Notice";

import loadable from "@loadable/component";
let MovesList = loadable((props) => import("../components/ShowTest/MovesList"));

const Show = (params) => {
  const [testData, setTestData] = useState({});
  const [favData, setFavData] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth0();
  // const { favTrigger, setFavTrigger, setIsFaved, isFaved, favId } =
  //   useContext(FavContext);

  useEffect(() => {
    setIsLoading(true);

    DressageTest.get(id)
      .then((data) => {
        setTestData({ data });
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  const test = testData.data;

  return (
    <div className="show fill-height">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="row mx-auto">
            {/* Put in layout and use context? */}
            <Notification message={"hi"} open={false} />

            <TestHeading setTestData={setTestData} {...test}></TestHeading>
          </div>
          <div className="row mx-auto d-flex justify-content-center">
            <div className="col-lg-7 col-12 d-flex">
              <Box>
                <MovesList {...test}></MovesList>
              </Box>
            </div>
            <div className="col-lg-4 col-12">
              <Box background="surface" pad="small">
                <TestInfo {...test}></TestInfo>
              </Box>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const DressageShowPage = () => (
  <FavProvider>
    <Show />
  </FavProvider>
);

export default DressageShowPage;
