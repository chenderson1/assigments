import React from "react";
// import { Link } from "react-router-dom";
import { UList, StyledLink } from "../elements";

export const NavBar = () => {
  return (
    <UList>
      <li>
        <StyledLink to="/popular">Popular</StyledLink>
      </li>
      <li>
        <StyledLink to="/toprated">Top Rated</StyledLink>
      </li>
      <li>
        <StyledLink to="/nowplaying">Now Playing</StyledLink>
      </li>
      <li>
        <StyledLink to="/search">Search</StyledLink>
      </li>
    </UList>
  );
};

export default NavBar;
