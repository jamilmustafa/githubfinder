import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const myNavbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-toggler">
          <i className={icon} />
          <Link className="navbar-brand " to="/">
            {title}
          </Link>
        </div>
        <ul className="nav">
          <li className="active mr-2">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

myNavbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-lg fa-github mr-2"
};
myNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};
export default myNavbar;
