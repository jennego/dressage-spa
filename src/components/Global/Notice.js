import React from "react";

import { Add, FormClose } from "grommet-icons";

import { Box, Button, Layer, Text } from "grommet";

export const Notification = ({ message, open, onClose, icon }) => {
  // const onOpen = () => {
  //   setOpen(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 3000);
  // };
  // const onClose = () => open(false);

  return (
    <div>
      <Box fill align="center" justify="center"></Box>
      {open && (
        <Layer
          position="top"
          modal={false}
          margin={{ vertical: "medium", horizontal: "small" }}
          onEsc={onClose}
          onClickOutside={onClose}
          responsive={false}
          plain
        >
          <Box
            align="center"
            direction="row"
            gap="small"
            justify="between"
            background="surface"
            round="small"
            elevation="medium"
            margin={{ top: "10rem" }}
            pad={{ vertical: "small", horizontal: "medium" }}
          >
            {icon}
            <Box align="center" direction="row" gap="xsmall">
              <Text>{message}</Text>
            </Box>
            <Button icon={<FormClose />} onClick={onClose} plain />
          </Box>
        </Layer>
      )}
    </div>
  );
};
