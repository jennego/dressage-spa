import React from "react";
import { Footer, Text, Box, Anchor } from "grommet";
import { Facebook, Instagram, Linkedin, Github } from "grommet-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const FooterSection = (props) => (
  <Footer background="brand" pad="medium">
    <div className="row mx-auto">
      <div className="col-lg-6 col-12">
        <Box margin="medium">
          <Text color="">
            Site by{" "}
            <Anchor
              href="http://jenniferchow.ca"
              target="_open"
              label="Jennifer Chow"
            />
            . Tests copyright of their copyright holders.
          </Text>
        </Box>
      </div>
      <div className="col-lg-4 col-6">
        <Box margin="medium">
          <Text size="small">
            Complain or compliment here. <br />
            Dressage Test Admin <br />
            Site Copy Admin
          </Text>
        </Box>
      </div>
      <div className="col-lg-2 col-6">
        <Box direction="row" justify="end" margin="medium">
          <a
            href="https://www.facebook.com/jennego"
            rel="noreferrer"
            target="_blank"
            className="social-share m-1"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/thejennego"
            rel="noreferrer"
            target="_blank"
            className="social-share m-1"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/jennego/"
            rel="noreferrer"
            target="_blank"
            className="social-share m-1"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/jennego/dressage-spa"
            rel="noreferrer"
            target="_blank"
            className="social-share m-1"
          >
            <Github />
          </a>
        </Box>
      </div>
    </div>
  </Footer>
);

export default FooterSection;
