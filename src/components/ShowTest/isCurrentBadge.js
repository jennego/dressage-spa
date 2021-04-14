import React from "react";
import { Box, Text } from "grommet";

const IsCurrentBadge = ({ current }) => {
  return (
    <div>
      {current ? (
        <Box alignSelf="center" background="status-ok" pad="xsmall" round="5px">
          <Text>Current</Text>
        </Box>
      ) : (
        <Box
          alignSelf="center"
          background="status-warning"
          pad="xsmall"
          round="5px"
        >
          <Text>Outdated</Text>
        </Box>
      )}
    </div>
  );
};

export default IsCurrentBadge;
