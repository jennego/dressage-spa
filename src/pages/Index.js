import React, { useEffect, useState } from "react";
import { DressageTest } from "../requests";
import TestSegmentItem from "../components/TestSegmentItem";
import ErrorMessage from "../components/error";
import Search from "../components/search";

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
      {console.log(tests)}
      <Search {...tests} />
      <div id="testlist">
        {hasError ? <ErrorMessage /> : ""}

        {/* <div className="row no-gutters">
          {tests.dressage_tests.map((test) => (
            <div className="col-12 col-sm-6">
              <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default DressageIndexPage;
