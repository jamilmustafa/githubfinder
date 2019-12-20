import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <p>
        React app to search github users. This is a part of "Modern React Front
        To Back" Udemy course by @bradtraversy
      </p>
      <a href="https://github.com/wxyjamil/githubfinder">Link to github</a>
    </Fragment>
  );
};
export default About;
