import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <Link className="main-nav-link" to="/skills">
          <li>SKILLS</li>
        </Link>
        <Link className="main-nav-link" to="/projects">
          <li> PROJECTS</li>
        </Link>
        <Link className="main-nav-link" to="/contact">
          <li>CONTACT</li>
        </Link>
        <Link className="main-nav-link" to="#">
          <li>BLOG (COMING SOON)</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
