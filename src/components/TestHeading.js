import React from "react";
import { Box, Heading, Button } from "grommet";
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
    <Box fill="horizontal" direction="row" margin={{ bottom: "large" }}>
      <Box
        direction="row"
        border={{
          color: "brand",
          size: "medium",
          style: "solid",
          side: "bottom",
        }}
      >
        <div className="row">
          <div className="col-12" style={{ paddingBottom: "0" }}>
            <Heading level="1" color="brand" margin="medium">
              {full_name}
            </Heading>
          </div>

          <div className="col-12 test-toolbar" x>
            <Button icon={<Share />} label="share" pad="none" />
            <Button icon={<Download />} label="download" pad="none" />
            <Button icon={<Star />} label="favourite" pad="none" />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default TestHeading;
