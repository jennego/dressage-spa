import React from "react";
import { Link } from "react-router-dom";
import { Main, Box, Heading, Anchor } from "grommet";

const About = () => (
  <div className="AboutPage Main">
    <Heading level="2" margin={{ left: "large" }} pad="large">
      About
    </Heading>
    <Main pad="large" background="surface">
      <p>
        Our goal is quick and easy access to dressage tests on all sorts of
        devices. While there's no getting around the fact that "B", "C" and "E"
        seem to to sound shockingly indistinguishable when yelled across the
        ring, there is something to be done about finding the freaking dressage
        test.
      </p>
      <p>
        We is actually just me. I am web developer who is also an amateur
        dressage rider. I am also looking for a remote web dev job (part-time)
        to fiance my dressage habit.
      </p>
      <p>
        This app is made with React and is using Ruby on Rails for the backend.
        Code is on{" "}
        <Anchor
          href="https://github.com/jennego/dressage-spa"
          target="_blank"
          label="Github"
        />
        .
      </p>
    </Main>
  </div>
);

export default About;
