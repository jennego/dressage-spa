import React, { useContext, useState, useRef } from "react";
import { Download, DocumentPdf } from "grommet-icons";
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
const DownloadButton = () => {
  const size = useContext(ResponsiveContext);
  const [open, setOpen] = useState();
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
      <Button
        icon={<DocumentPdf />}
        label="pdf download"
        color="blue"
        margin="xsmall"
      />
      <Button
        icon={<DocumentPdf />}
        label="pdf download"
        color="blue"
        margin="xsmall"
      />
    </Box>
  );

  return (
    <DropButton
      color="brand"
      icon={<Download></Download>}
      label={size !== "small" ? "Download" : ""}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      dropContent={<DropContent />}
      dropProps={{ align: { top: "bottom" } }}
      ref={targetRef}
      margin="2px"
      style={
        size === "small" ? { border: "2px  solid", borderRadius: "10px" } : {}
      }
    />
  );
};

export default DownloadButton;
