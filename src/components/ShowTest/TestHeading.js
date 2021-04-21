import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  Button,
  DropButton,
  Tip,
  Text,
  Anchor,
  Drop,
} from "grommet";
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
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  WhatsappShareButton,
  WhatsappIcon,
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
  const targetRef = useRef();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
        <FacebookMessengerShareButton
          url={shareUrl}
          appId="936287190463514"
          className="social-share"
        >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
        <WhatsappShareButton
          className="social-share"
          url={shareUrl}
          title={full_name}
        >
          <WhatsappIcon round size={32} />
        </WhatsappShareButton>
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
        <CopyToClipboard text={shareUrl} onCopy={() => setIsCopy(true)}>
          <Button
            icon={isCopied ? <Copy size="20px" /> : <Link size="20px" />}
            primary
            color={isCopied ? "light-1" : "brand"}
            plain
            style={{ padding: "5px", marginBottom: "10px" }}
            className="social-share"
          ></Button>
        </CopyToClipboard>
      </Box>

      {isCopied ? (
        <Drop
          target={targetRef.current}
          align={{ top: "bottom", left: "right" }}
          margin={{ left: "20px", top: "10px" }}
          background="background"
          onClickOutside={() => setIsCopy(false)}
          onEsc={() => setIsCopy(false)}
        >
          <Box pad="small">
            <Text>Link Copied!</Text>
          </Box>
        </Drop>
      ) : (
        ""
      )}
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
                ref={targetRef}
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
      <Tip content={<Text size="medium"> Go Back to Tests </Text>}>
        <Box
          alignSelf="start"
          pad="xsmall"
          hoverIndicator={{ background: "hoverIndicator" }}
          onClick={() => history.push("/")}
        >
          <Close size="large" />
        </Box>
      </Tip>
    </Box>
  );
};

export default TestHeading;
