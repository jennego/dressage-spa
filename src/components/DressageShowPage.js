import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import TestInfo from "./TestInfo.js";
import MovesList from "./MovesList.js";
import { Container } from "semantic-ui-react";

const DressageShowPage = (params) => {
  const [testData, setTestData] = useState({});
  const id = params.match.params.id;

  useEffect(() => {
    DressageTest.get(id).then((data) => setTestData({ data }));
  }, []);

  const test = testData.data;

  return (
    <div className="DressageShowPage">
      <Container text>
        <p> Hi this is the test show page!! </p>
        {console.log("test", test)}

        <TestInfo {...test}></TestInfo>
        <MovesList {...test}></MovesList>
      </Container>
    </div>
  );
};

export default DressageShowPage;
