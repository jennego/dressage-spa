import React from "react";
import { Link } from "react-router-dom";
import { grommet, Button, Main } from "grommet";
import Search from "../components/search";

function WelcomePage(props) {
  return (
    <div className="WelcomePage main">
      <Main pad="large">
        <h2>Dressage Tests</h2>
        <p>Simple directory of dressage tests.</p>

        <Button
          primary={true}
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
