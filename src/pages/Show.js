import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import TestInfo from "../components/ShowTest/TestInfo";
import MovesList from "../components/ShowTest/MovesList.js";
import { Box } from "grommet";
import TestHeading from "../components/ShowTest/TestHeading";
import { useParams } from "react-router-dom";

const DressageShowPage = (params) => {
  const [testData, setTestData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    DressageTest.get(id).then((data) => setTestData({ data }));
  }, []);

  const test = testData.data;

  return (
    <div className="show">
      {console.log(test)}

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
          </Box>
        </div>
      </div>
    </div>
  );
};

export default DressageShowPage;
