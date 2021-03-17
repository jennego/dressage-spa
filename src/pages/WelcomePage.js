import React from "react";
import { Link } from "react-router-dom";
import { grommet, Button, Main } from "grommet";

function WelcomePage(props) {
  return (
    <div className="WelcomePage">
      <Main pad="large">
        <h2>Dressage Tests</h2>
        <p>Simple directory of dressage tests.</p>

        <Link to={"/tests"}>
          <Button primary label="Go to Tests" />
        </Link>
      </Main>
    </div>
  );
}

export default WelcomePage;
