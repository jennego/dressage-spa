import React, { Component } from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="AboutPage">
    <div className="container">
      <h2> About </h2>
      <p> Hi From the About Page! </p>
      <p>
        {" "}
        Our goal is quick and easy access to dressage tests on all sorts of
        devices{" "}
      </p>
      <p>Features planned</p>
      <ul>
        <li>Favoriting</li>
        <li>Save personal notes</li>
        <li>Basic offline support</li>
        <li> Canvas/Phaser Arena drawing app/game </li>
      </ul>
    </div>
  </div>
);

export default About;
