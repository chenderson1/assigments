import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const styleDiv = {
    margin: "auto",
    paddingTop: "6vh",
    paddingBottom: "7vh",
    width: "30vw",
    fontWeight: "bold",
    fontSize: "1.2rem",
    fontFamily: "Open Sans Condensed"
  };
  const styleList = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    color: "white"
  };

  const styleLink = {
    textDecoration: "none"
  };

  return (
    <div style={styleDiv}>
      <ul style={styleList}>
        <Link style={styleLink} to="/skills">
          <li style={styleList}>SKILLS</li>
        </Link>
        <Link style={styleLink} to="/projects">
          <li style={styleList}> PROJECTS</li>
        </Link>
        <Link style={styleLink} to="/contact">
          <li style={styleList}>CONTACT</li>
        </Link>
        <Link style={styleLink} to="#">
          <li style={styleList}>BLOG (COMING SOON)</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
