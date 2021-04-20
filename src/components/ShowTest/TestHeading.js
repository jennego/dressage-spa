import React, { useState } from "react";
import { Box, Heading, Button, DropButton, Tip, Text, Anchor } from "grommet";
import IsCurrentBadge from "./isCurrentBadge";
import {
  Share,
  Download,
  Print,
  Star,
  Favorite,
  DocumentPdf,
  Close,
  Link,
  Copy,
} from "grommet-icons";
import { useLocation, useHistory } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

const shareUrl = window.location.href;

const TestHeading = (props) => {
  const { full_name, current } = props;
  const history = useHistory();

  const [open, setOpen] = useState();
  const [isCopied, setIsCopy] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleCopyLink = (e) => {};

  const DropContent = ({ onClose }) => (
    <Box
      pad="small"
      background="background"
      border={{ color: "brand", size: "2px", side: "bottom" }}
    >
      <Box
        direction="row"
        justify="around"
        align="center"
        pad={{ horizontal: "small" }}
        margin={{ top: "6px" }}
      >
        <FacebookShareButton
          url={shareUrl}
          quote={full_name}
          className="social-share"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={full_name}
          className="social-share"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={full_name}
          className="social-share"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
        <CopyToClipboard text={shareUrl}>
          <Button
            icon={<Link size="20px" />}
            size="small"
            primary
            plain
            style={{ padding: "5px", marginBottom: "10px" }}
            className="social-share"
          />
        </CopyToClipboard>
      </Box>
    </Box>
  );
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
            <Box direction="row" margin={{ bottom: "small" }}>
              <DropButton
                color="brand"
                icon={<Share />}
                label="Share"
                open={open}
                onOpen={onOpen}
                onClose={onClose}
                dropContent={<DropContent onClose={onClose} />}
                dropProps={{ align: { top: "bottom" } }}
              />
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
