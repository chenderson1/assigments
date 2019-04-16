import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Cover } from "../components";
import { StyledHomeBtn } from "../elements";

export const Home = () => {
  const style = {
    color: "white",
    position: "absolute",
    top: "50vh",
    left: "50vw",
    backgroundColor: "#ffffff1e",
    borderRadius: "10px",
    paddingTop: "30px",
    paddingLeft: "120px",
    paddingRight: "350px"
  };

  return (
    <Fragment>
      <Cover />
      <div style={style}>
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
