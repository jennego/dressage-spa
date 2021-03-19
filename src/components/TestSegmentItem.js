import React, { Component } from "react";
import { Link } from "react-router-dom";

const TestSegmentItem = ({ name, full_name, id }) => {
  return (
    <div className="TestSegmentItem">
      <Link to={`/tests/${id}`}>
        {" "}
        {full_name} {name}{" "}
      </Link>
    </div>
  );
};

export default TestSegmentItem;
