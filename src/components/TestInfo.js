import React from "react";

const TestInfo = (props) => {
  const {
    org_name,
    name,
    level,
    year,
    created_at,
    updated_at,
    note,
    links = [],
    subtitle,
    introduce,
    purpose,
    current,
    full_name,
  } = props;
  console.log(props);

  return (
    <div className="TestInfo">
      <h2>{full_name}</h2>
      <p> {subtitle} </p>
      <p> Purpose: {purpose} </p>
      <p> Introduce: {introduce} </p>
      <p> Note: {note} </p>
    </div>
  );
};

export default TestInfo;
