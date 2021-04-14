import React from "react";
import TestSegmentItem from "./TestSegmentItem";

const DefaultTests = ({ tests }) => {
  console.log(tests);
  return (
    <div className="row no-gutters">
      {/* {tests.dressage_tests.map((test) => (
        <div className="col-12 col-sm-6">
          <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
        </div>
      ))} */}
    </div>
  );
};

export default DefaultTests;
