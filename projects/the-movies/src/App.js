import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import logo from "./resources/images/icons8-4k-64.png";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { StyledHeader } from "./elements";
import { TopRated, NowPlaying, NotFound } from "./components";

const App = () => {
  return (
    <Fragment>
      <StyledHeader className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>

        <NavBar />
      </StyledHeader>

      <Switch>
        <Route exact path={"/"} component={MovieList} />} />
        <Route path={"/movie/:id"} component={MovieDetail} />
        <Route path={"/toprated"} component={TopRated} />
        <Route path={"/nowplaying"} component={NowPlaying} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default App;
