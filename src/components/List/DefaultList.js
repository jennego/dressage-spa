import React from "react";
import TestSegmentItem from "./TestSegmentItem";

const DefaultTests = (...props) => {
  return (
    <div className="row no-gutters">
      {props.tests.dressage_tests.map((test) => (
        <div className="col-12">
          <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
        </div>
      ))}
    </div>
  );
};

export default DefaultTests;
