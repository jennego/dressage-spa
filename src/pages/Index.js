import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import TestSegmentItem from "../components/TestSegmentItem";
import ErrorMessage from "../components/error";

const DressageIndexPage = () => {
  const [tests, setTests] = useState({ dressage_tests: [] });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    DressageTest.getAll()
      .then((data) => {
        setTests({ dressage_tests: data.dressage_tests });
      })
      .catch((err) => setHasError(true));
  }, []);

  return (
    <div className="index main">
      <p> Hi From the DressageIndexPage! </p>
      <div id="testlist">
        {hasError ? <ErrorMessage /> : ""}
        <ul>
          {tests.dressage_tests.map((test) => (
            <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DressageIndexPage;
