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
    <div className="TestSegmentItem" key={id}>
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
          margin="small"
          a11yTitle={full_name}
          onClick={() => handleTestClick(id)}
          hoverIndicator={true}
        >
          <CardHeader pad={{ horizontal: "small" }}>
            <Heading level={2} margin="xsmall">
              {full_name}
            </Heading>
          </CardHeader>
          <CardBody pad={{ horizontal: "medium" }}>
            <Text size="small">
              Organization: {orgname} Level: {level} Test: {name} Year: {year}
            </Text>
          </CardBody>

          {current ? (
            <Box background="status-ok">
              <Text textAlign="end" margin={{ right: "small" }} size="small">
                Current
              </Text>
            </Box>
          ) : (
            <Box background="status-warning">
              <Text textAlign="end" margin={{ right: "small" }} size="small">
                Outdated
              </Text>
            </Box>
          )}
        </Card>
        {/* </Anchor> */}
      </ThemeContext.Extend>
    </div>
  );
};

export default TestSegmentItem;
