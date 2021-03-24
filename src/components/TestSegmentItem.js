import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Anchor } from "grommet";

const TestSegmentItem = ({ name, full_name, id }) => {
  return (
    <li className="TestSegmentItem">
      <Anchor as={Link} color="brand" to={`/tests/${id}`}>
        {full_name} {name}{" "}
      </Anchor>
    </li>
  );
};

export default TestSegmentItem;
