import React from "react";
import { Link } from "react-router-dom";
import { Main, Box, Heading } from "grommet";

const Roadmap = () => {
  return (
    <Box pad="medium">
      <h1>Roadmap</h1>
      <p>Features eventually planned:</p>
      <ul>
        <li>Save personal notes on test page?</li>
        <li>Basic offline support (Progessive Web App)</li>
        <li> HTML 5 Canvas/Phaser Arena drawing app/game </li>
      </ul>

      <h2> Next Release</h2>
      <ul>
        <li> Context menu on right click and long press </li>
        <li> API/SPA: Favourites list, favourite tests </li>
        <li>API: PDF links / SPA: download PDF </li>
        <li> Look into PWA/Offline</li>
        <li> Nicer preloading screen </li>
      </ul>

      <p>What about iPhone/Android app?</p>
      <p>
        I'm focusing on the web app first, which is accessible to most devices
        with internet access. I will then look into Android/iPhone packaging. I
        may do Android. We will see. Not sure about iOS yet due to the $100 USD
        dev fee...and this will be a free app so that doesn't really add up (I
        don't have other lucrative iOS app plans either).
      </p>
    </Box>
  );
};

export default Roadmap;
