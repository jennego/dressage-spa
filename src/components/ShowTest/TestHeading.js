import React from "react";
import { Box, Heading, Button, Tip } from "grommet";
import IsCurrentBadge from "./isCurrentBadge";
import {
  Share,
  Download,
  Print,
  Star,
  Favorite,
  DocumentPdf,
  Close,
} from "grommet-icons";
import { useLocation, useHistory } from "react-router-dom";

const TestHeading = (props) => {
  const { full_name, current } = props;
  const history = useHistory();
  return (
    <Box
      fill="horizontal"
      direction="row"
      justify="between"
      margin={{ bottom: "large" }}
    >
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
          <div
            className="col-12 d-flex flex-row justify-content-between"
            style={{ paddingBottom: "0" }}
          >
            <Heading level="1" color="brand" margin="medium">
              {full_name}
            </Heading>
          </div>
          <div className="col-12 test-toolbar d-flex justify-content-start">
            <Box direction="row">
              <Button icon={<Share />} label="share" pad="none" color="brand" />
              <Button
                icon={<Download />}
                label="download"
                pad="none"
                color="brand"
              />
              <Button
                icon={<Star />}
                label="favourite"
                pad="none"
                color="brand"
              />
              <IsCurrentBadge current={current} />
            </Box>
          </div>
        </div>
      </Box>
      <Tip content="Go Back to Tests">
        <Box
          alignSelf="start"
          pad="xsmall"
          hoverIndicator={true}
          onClick={() => history.push("/")}
        >
          <Close size="large" />
        </Box>
      </Tip>
    </Box>
  );
};

export default TestHeading;
