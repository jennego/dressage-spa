import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Card,
  Text,
  Box,
  ThemeContext,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "grommet";
import { useHistory } from "react-router-dom";

// need to figure out how to style card on hover

const TestSegmentItem = ({
  name,
  current,
  level,
  orgname,
  year,
  full_name,
  id,
}) => {
  const history = useHistory();

  const handleTestClick = (id) => {
    history.push(`/tests/${id}`);
  };
  return (
    <div className="TestSegmentItem">
      <ThemeContext.Extend
        value={{
          anchor: {
            hover: {
              textDecoration: "none",
            },
          },
        }}
      >
        {/* <Anchor
          className="test-card-link"
          as={Link}
          color="brand"
          to={`/tests/${id}`}
        > */}
        <Card
          className="test-card"
          background="surface"
          margin="medium"
          a11yTitle={full_name}
          onClick={() => handleTestClick(id)}
          hoverIndicator={true}
        >
          <CardHeader>
            <Heading level={2} margin="xsmall">
              {full_name}{" "}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text size="small">
              Organization: {orgname} Level: {level} Test: {name} Year: {year}
            </Text>
          </CardBody>

          {current ? (
            <Box background="status-ok">
              {" "}
              <Text size="small">Current</Text>
            </Box>
          ) : (
            <Box background="status-warning">
              {" "}
              <Text size="small">Outdated</Text>
            </Box>
          )}
        </Card>
        {/* </Anchor> */}
      </ThemeContext.Extend>
    </div>
  );
};

export default TestSegmentItem;
