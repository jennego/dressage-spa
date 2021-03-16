import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Button } from "semantic-ui-react";

function WelcomePage(props) {
  return (
    <div className="WelcomePage">
      <Container text>
        <Header as="h2">Dressage Tests</Header>
        <p>Simple directory of dressage tests.</p>
        <Button primary as={Link} to="/tests">
          {" "}
          Go to Test Listing!
        </Button>
      </Container>
    </div>
  );
}

export default WelcomePage;
