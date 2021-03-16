import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import TestSegmentItem from "../components/TestSegmentItem";
import { Container } from "semantic-ui-react";

const DressageIndexPage = () => {
  const [tests, setTests] = useState({ dressage_tests: [] });

  useEffect(() => {
    DressageTest.getAll().then((data) => {
      setTests({ dressage_tests: data.dressage_tests });
    });
  }, []);

  return (
    <div className="DressageTestsIndexPage">
      <Container text>
        <p> Hi From the DressageIndexPage! </p>
        <div id="testlist">
          <ul>
            <li className="panel-block">
              {tests.dressage_tests.map((test) => (
                <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
              ))}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default DressageIndexPage;