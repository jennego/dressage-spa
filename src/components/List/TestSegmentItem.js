import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Trash } from "grommet-icons";
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
  Tip,
} from "grommet";
import { useHistory } from "react-router-dom";

// need to figure out how to style card on hover

const TestSegmentItem = ({
  name,
  current,
  level,
  org_name,
  year,
  full_name,
  id,
  deleteButton,
  deleteHandler,
}) => {
  const history = useHistory();

  const handleTestClick = (id) => {
    history.push(`/tests/${id}`);
  };
  return (
    <div className="TestSegmentItem" key={id}>
      <div className="row no-gutters">
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
          <div className="col">
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
                  Organization: {org_name} Level: {level} Test: {name} Year:{" "}
                  {year}
                </Text>
              </CardBody>

              {current ? (
                <Box background="status-ok">
                  <Text
                    textAlign="end"
                    margin={{ right: "small" }}
                    size="small"
                  >
                    Current
                  </Text>
                </Box>
              ) : (
                <Box background="status-warning">
                  <Text
                    textAlign="end"
                    margin={{ right: "small" }}
                    size="small"
                  >
                    Outdated
                  </Text>
                </Box>
              )}
            </Card>
          </div>
          <div className="col-1">
            <Tip content="Delete from favourites list" background="black">
              <Card
                background="surface"
                a11yTitle={"delete test from favourites"}
                hoverIndicator={true}
                margin={{ top: "12px" }}
                pad={{ horizontal: "xsmall", vertical: "small" }}
                flex
                plain
                onClick={() => {}}
                className="align-items-center"
                tip={{ content: "Delete from Favourites List" }}
              >
                <Trash />
                Delete
              </Card>
            </Tip>
          </div>
          {/* </Anchor> */}
        </ThemeContext.Extend>
      </div>
    </div>
  );
};

export default TestSegmentItem;
