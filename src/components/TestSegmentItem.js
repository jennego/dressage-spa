import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Anchor } from "grommet";

const TestSegmentItem = ({ name, full_name, id }) => {
  return (
    <div className="TestSegmentItem">
      <Anchor as={Link} color="brand" to={`/tests/${id}`}>
        {full_name} {name}{" "}
      </Anchor>
    </div>
  );
};

export default TestSegmentItem;
