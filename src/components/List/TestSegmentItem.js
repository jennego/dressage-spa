import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Trash, Star } from "grommet-icons";
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
  ResponsiveContext,
} from "grommet";
import { useHistory } from "react-router-dom";

// need to figure out how to style card on hover

const TestSegmentItem = (
  {
    name,
    current,
    level,
    org_name,
    year,
    full_name,
    id,
    is_faved,
    deleteButton,
    deleteHandler,
    index,
  },
  props
) => {
  const history = useHistory();
  const size = useContext(ResponsiveContext);

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
              animation={{
                type: "fadeIn",
                delay: index * 200,
              }}
            >
              <CardHeader pad={{ horizontal: "small" }}>
                <Heading level={2} margin="xsmall">
                  {full_name}
                </Heading>

                {is_faved === true ? <Star /> : ""}
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
          {deleteButton && (
            <div className="col-1 flex align-content-center">
              <Tip
                plain
                content={
                  <Box background="background" pad="small" round="small">
                    <Text size="medium">Delete from favourites list</Text>
                  </Box>
                }
              >
                <Card
                  onClick={deleteHandler}
                  a11yTitle={"delete test from favourites"}
                  elevation="none"
                  border={{ color: "status-critical" }}
                  hoverIndicator={true}
                  margin={{ top: "12px" }}
                  pad={size !== "small" ? "small" : "medium"}
                  flex
                  plain
                  className="align-items-center"
                  tip={{ content: "Delete from Favourites List" }}
                >
                  <Trash color="status-critical" />
                  {size === "small" ? (
                    ""
                  ) : (
                    <Text color="status-critical">Delete</Text>
                  )}
                </Card>
              </Tip>
            </div>
          )}
          {/* </Anchor> */}
        </ThemeContext.Extend>
      </div>
    </div>
  );
};

export default TestSegmentItem;
