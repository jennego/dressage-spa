import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import TestInfo from "../components/TestInfo";
import MovesList from "../components/MovesList.js";
import { Box, Grid } from "grommet";
import TestHeading from "../components/TestHeading";

const DressageShowPage = (params) => {
  const [testData, setTestData] = useState({});
  const id = params.match.params.id;

  useEffect(() => {
    DressageTest.get(id).then((data) => setTestData({ data }));
  }, []);

  const test = testData.data;

  return (
    <div className="show">
      <p> Hi this is the test show page!! </p>
      {console.log(test)}
      <div className="row mx-auto">
        <TestHeading {...test}></TestHeading>
      </div>

      <div className="row mx-auto">
        <div className="col-lg-7 col-12">
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
    </div>
  );
};

export default DressageShowPage;
