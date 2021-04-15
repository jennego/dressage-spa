import React from "react";
import { Box, Spinner, Text } from "grommet";

const Loading = () => {
  return (
    <Box
      align="center"
      justify="center"
      direction="row"
      gap="small"
      pad="small"
    >
      <Spinner size="large" message="content is loading" />{" "}
      <Text> Loading...</Text>
    </Box>
  );
};

export default Loading;
