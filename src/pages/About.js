import React from "react";
import { Link } from "react-router-dom";
import { Main, Box } from "grommet";

const About = () => (
  <div className="AboutPage Main">
    <Main pad="large" background="surface">
      <h2> About </h2>
      <p>
        Our goal is quick and easy access to dressage tests on all sorts of
        devices. While there's no getting around the fact that "B", "C" and "E"
        seem to to sound shockingly indistinguishable when yelled across the
        ring, there is something to be done about finding the freaking dressage
        test.
      </p>
      <p>
        We is actually just me. I am web developer who is also an amateur
        dressage rider. I am also looking for a web dev job to fiance my
        dressage habit.
      </p>
      <p>
        This app is made with React and is using Ruby on Rails for the backend.
        Code is on Github.
      </p>
      <p>Features planned for next release</p>
      <ul>
        <li>Sign in/Out via OAuth (FB, Google, maybe Twitter?)</li>
        <li>Favoriting</li>
        <li>Save personal notes on test page</li>
        <li>Basic offline support (Progessive Web App)</li>
        <li>Canvas/Phaser Arena drawing app/game </li>
      </ul>

      <p>What about iPhone/Android app?</p>
      <p>
        I'm focusing on the web app first, which is accessible to most devices
        with internet access. I will then look into Android/iPhone packaging. I
        may do Android. We will see. Not sure about iOS yet due to the $100 USD
        dev fee...and this will be a free app so that doesn't really add up (I
        don't have other lucrative iOS app plans either).
      </p>
    </Main>
  </div>
);

export default About;
