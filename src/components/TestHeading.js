import React from "react";
import { Box, Heading } from "grommet";
import {
  Share,
  Download,
  Print,
  Star,
  Favorite,
  DocumentPdf,
} from "grommet-icons";

const TestHeading = (props) => {
  const { full_name } = props;
  return (
    <Box fill="horizontal" margin={{ bottom: "large" }}>
      <Box background="brand" fill="horizontal">
        <Heading level="2" margin="medium">
          {full_name}
        </Heading>
      </Box>
      <Box background="neutral-1">
        <div>
          <Share size="medium" /> <Download size="medium" />{" "}
          <Star size="medium" />
          <div>Current or not</div>
        </div>
      </Box>
    </Box>
  );
};

export default TestHeading;
