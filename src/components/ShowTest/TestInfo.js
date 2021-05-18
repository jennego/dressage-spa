import React from "react";

const TestInfo = (props) => {
  const {
    orgname,
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

  return (
    <div className="TestInfo">
      <p>{full_name}</p>
      <div className="test-info-box">
        <ul>
          <li>
            <span className="info"> Year: </span>
            {year}
          </li>
          <li>
            <span className="info"> Level: </span>
            {level}
          </li>
          <li>
            <span className="info"> Test: </span>
            {name}
          </li>
          <li>
            <span className="info"> Organization: </span>
            {orgname}
          </li>
        </ul>
      </div>

      <p> {subtitle} </p>
      <p> Purpose: {purpose} </p>
      <p> Introduce: {introduce} </p>
      <p> Note: {note} </p>
    </div>
  );
};

export default TestInfo;
