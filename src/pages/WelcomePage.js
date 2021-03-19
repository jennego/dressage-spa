import React from "react";
import { Link } from "react-router-dom";
import { grommet, Button, Main } from "grommet";

function WelcomePage(props) {
  return (
    <div className="WelcomePage">
      <Main pad="large">
        <h2>Dressage Tests</h2>
        <p>Simple directory of dressage tests.</p>

        <Button
          primary
          label="Go to Tests"
          as={Link}
          to="/tests"
          color="brand"
        />
      </Main>
    </div>
  );
}

export default WelcomePage;
