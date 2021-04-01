import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Anchor, Card, Text, Box, ThemeContext } from "grommet";

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
  return (
    <div className="TestSegmentItem container-fluid" style={{ width: "700px" }}>
      <ThemeContext.Extend
        value={{
          anchor: {
            hover: {
              textDecoration: "none",
            },
          },
          global: {
            hover: {
              background: "dark-1",
            },
          },
        }}
      >
        <Anchor
          className="test-card-link"
          as={Link}
          color="brand"
          to={`/tests/${id}`}
        >
          <Card className="test-card" margin="medium">
            <h2 style={{ marginBottom: "4px" }}> {full_name} </h2>
            <Text size="small">
              Organization: {orgname} Level: {level} Test: {name} Year: {year}
              {current ? (
                <Box background="status-ok">Current</Box>
              ) : (
                <Box background="status-warning">Outdated</Box>
              )}
            </Text>
          </Card>
        </Anchor>
      </ThemeContext.Extend>
    </div>
  );
};

export default TestSegmentItem;
