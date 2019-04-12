import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cover } from "../components";
import { StyledBtn } from "../elements";

export const Home = () => {
  return (
    <Fragment>
      <Cover />
      <div
        style={{
          color: "white",
          position: "absolute",
          top: "50vh",
          left: "50vw",
          backgroundColor: "#ffffff4c",
          borderRadius: "10px",
          paddingTop: "30px",
          paddingLeft: "120px",
          paddingRight: "350px"
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem"
          }}
        >
          The Movies
        </h1>
        <Link to="/popular">
          <StyledHomeBtn>Popular Movies</StyledHomeBtn>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;

const StyledHomeBtn = styled(StyledBtn)`
  background-color: #710853;
  padding: 5px;
  color: white;
  &:hover {
    background-color: white;
    color: #710853;
  }
`;
