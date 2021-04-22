import React from "react";
import { Box, Text } from "grommet";
import { Alert } from "grommet-icons";

const IsCurrentBadge = ({ current }) => {
  return (
    <>
      {current ? (
        ""
      ) : (
        // <Box
        //   alignSelf="center"
        //   margin={{ left: "medium" }}
        //   background="status-ok"
        //   pad="xsmall"
        //   round="5px"
        // >
        //   <Text>Current</Text>
        // </Box>
        <Box
          alignSelf="center"
          margin={{ left: "medium" }}
          background="status-warning"
          pad="xsmall"
          round="5px"
          direction="row"
        >
          <Alert />
          <Text>Outdated</Text>
        </Box>
      )}
    </>
  );
};

export default IsCurrentBadge;
