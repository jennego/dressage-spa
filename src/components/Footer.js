import React from "react";
import { Footer, Text, Box } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const FooterSection = (props) => (
  <Footer background="brand" pad="medium">
    <Text color="">Made by Jennifer Chow</Text>
    <Box direction="row">
      <FontAwesomeIcon icon={faFacebook} className="sm-icon" />
      <FontAwesomeIcon icon={faInstagram} className="sm-icon" />
    </Box>
  </Footer>
);

export default FooterSection;
