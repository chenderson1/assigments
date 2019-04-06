import React from "react";
import { Link } from "react-router-dom";
import { UList, StyledLink } from "../elements";

const NavBar = () => {
  return (
    <UList>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/toprated">Top Rated</StyledLink>
      </li>
      <li>
        <StyledLink to="/nowplaying">Now Playing</StyledLink>
      </li>
    </UList>
  );
};

export default NavBar;
