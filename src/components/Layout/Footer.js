import React from "react";
import { Footer, Text, Box, Anchor } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const FooterSection = (props) => (
  <Footer background="brand" pad="medium">
    <Text color="">
      Site by{" "}
      <Anchor
        href="http://jenniferchow.ca"
        target="_open"
        label="Jennifer Chow"
      />
      . Tests copyright of their copyright holders.
    </Text>
    <Box>
      <Text size="small">
        Complain or compliment here. <br />
        Dressage Test Admin <br />
        Site Copy Admin
      </Text>
    </Box>
    <Box direction="row">
      <FontAwesomeIcon icon={faFacebook} className="sm-icon" />
      <FontAwesomeIcon icon={faInstagram} className="sm-icon" />
    </Box>
  </Footer>
);

export default FooterSection;
