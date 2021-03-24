import React from "react";
import { Link } from "react-router-dom";
import { Main, Box } from "grommet";

const About = () => (
  <div className="AboutPage Main">
    <Main pad="large" background="surface">
      <h2> About </h2>
      <p> Hi From the About Page! </p>
      <p>
        Our goal is quick and easy access to dressage tests on all sorts of
        devices. While there's no getting around the fact that "B", "C" and "E"
        sound shockingly indistinguishable when yelled across the ring, there is
        something to be done about finding the freaking dressage test.
      </p>
      <p>
        We is actually just me. I am web developer who is also an amateur
        dressage rider. I am also looking for a web dev job to fiance my
        dressage habit.
      </p>
      <p>
        This app is made with React and is using Ruby on Rails for the backend.
      </p>
      <p>Features planned</p>
      <ul>
        <li>Sign in/Out via OAuth (FB, Google, maybe Twitter?)</li>
        <li>Favoriting</li>
        <li>Save personal notes on test page</li>
        <li>Basic offline support</li>
        <li>Canvas/Phaser Arena drawing app/game </li>
      </ul>
    </Main>
  </div>
);

export default About;
