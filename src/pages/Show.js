import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import TestInfo from "../components/ShowTest/TestInfo";
import { Box, Button } from "grommet";
import TestHeading from "../components/ShowTest/TestHeading";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";

import loadable from "@loadable/component";
import ScrollToTop from "../components/scrollToTop";
let MovesList = loadable((props) => import("../components/ShowTest/MovesList"));

const DressageShowPage = (params) => {
  const [testData, setTestData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();

  function scroll() {
    return document.body.scrollTo(0, 0);
  }

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
  console.log(id);

  return (
    <div className="show fill-height">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="row mx-auto">
            <TestHeading {...test}></TestHeading>
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
                <Button label="scroll" onClick={scroll}></Button>
              </Box>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DressageShowPage;
