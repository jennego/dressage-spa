import React, { useState, useRef, useContext } from "react";
import {
  Box,
  Heading,
  Button,
  DropButton,
  Tip,
  Text,
  Anchor,
  Drop,
  ResponsiveContext,
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
import { BrowserView, MobileView } from "react-device-detect";
import FavouriteButton from "./favourite-button";
import DownloadButton from "./download-button";

const shareUrl = window.location.href;

const TestHeading = (props) => {
  const size = useContext(ResponsiveContext);
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

  const handleMobileFBMessage = () => {
    window.location.href =
      "fb-messenger://share?link=" +
      encodeURIComponent(shareUrl) +
      "&app_id=" +
      encodeURIComponent(936287190463514);
  };

  const DropContent = ({ onClose }) => (
    <Box
      pad="medium"
      background="background"
      border={{ color: "brand", size: "2px", side: "bottom" }}
    >
      <Box
        direction="row"
        justify="around"
        align="center"
        margin={{ top: "6px" }}
      >
        <FacebookShareButton
          url={shareUrl}
          quote={full_name}
          className="social-share"
        >
          <FacebookIcon size={42} round />
        </FacebookShareButton>
        <BrowserView>
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="936287190463514"
            className="social-share"
            onClick={handleMobileFBMessage}
          >
            <FacebookMessengerIcon size={42} round />
          </FacebookMessengerShareButton>
        </BrowserView>
        <MobileView>
          <Box onClick={handleMobileFBMessage} margin={{ bottom: "8px" }}>
            <FacebookMessengerIcon size={42} round className="social-share" />
          </Box>
        </MobileView>
        <WhatsappShareButton
          className="social-share"
          url={shareUrl}
          title={full_name}
        >
          <WhatsappIcon round size={42} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={full_name}
          className="social-share"
        >
          <TwitterIcon size={42} round />
        </TwitterShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={full_name}
          className="social-share"
        >
          <EmailIcon size={42} round />
        </EmailShareButton>
        <CopyToClipboard text={shareUrl} onCopy={() => setIsCopy(true)}>
          <Button
            icon={isCopied ? <Copy size="30px" /> : <Link size="30px" />}
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
            <Box direction="row" margin={{ bottom: "small" }} justify="center">
              <DropButton
                color="brand"
                icon={<Share />}
                label={size !== "small" ? "Share" : ""}
                open={open}
                onOpen={onOpen}
                onClose={onClose}
                dropContent={<DropContent />}
                dropProps={{ align: { top: "bottom" } }}
                ref={targetRef}
                margin="2px"
                style={
                  size === "small"
                    ? { border: "2px  solid", borderRadius: "10px" }
                    : {}
                }
              />

              <DownloadButton />

              <FavouriteButton
                is_faved={props.is_faved}
                favourite={props.favourites}
                testId={props.id}
                setTestData={props.setTestData}
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
          margin={size !== "small" ? "xsmall" : "medium"}
          hoverIndicator={{ background: "hoverIndicator" }}
          onClick={() => history.push("/")}
        >
          <Close size={size !== "small" ? "large" : "32px"} />
        </Box>
      </Tip>
    </Box>
  );
};

export default TestHeading;
