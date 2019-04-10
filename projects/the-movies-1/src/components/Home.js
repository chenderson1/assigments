import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Cover } from "../components";

export const Home = () => {
  return (
    <Fragment>
      <Cover />
      <div
        style={{
          color: "white",
          position: "absolute",
          top: "50vh",
          left: "50vw"
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
          <span>Popular Movies</span>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
