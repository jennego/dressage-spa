import React from "react";

const TestHeading = (props) => {
  const { full_name } = props;
  return (
    <div>
      <h2>{full_name}</h2>
      <div>Action bar: Share, Save, Print Test, Search</div>
    </div>
  );
};

export default TestHeading;
