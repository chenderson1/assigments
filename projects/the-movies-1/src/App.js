import React from "react";
import logo from "./resources/images/icons8-4k-64.png";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import "./App.css";
import {
  MovieList,
  MovieDetail,
  NavBar,
  Search,
  NotFound,
  Home
} from "./components";
import { StyledHeader } from "./elements";

const API_PATH = "https://api.themoviedb.org/3";

const App = props => {
  const { REACT_APP_API_KEY } = process.env;

  return (
    <div className="App">
      {/* =============================Header=============================== */}
      <StyledHeader className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <NavBar />
      </StyledHeader>

      {/* =============================Main Content(Router Switch)=============================== */}
      <Switch>
        {/* =============================Landing Page Route=============================== */}
        <Route exact path="/" component={Home} />

        {/* =============================Popular Movies Route=============================== */}
        <Route
          path="/popular"
          render={() => (
            <MovieList
              url={`${API_PATH}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&`}
              {...props}
            />
          )}
        />

        {/* =============================Top Rated Movies Route=============================== */}
        <Route
          path="/toprated"
          render={() => (
            <MovieList
              url={`${API_PATH}/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US&`}
              {...props}
            />
          )}
        />

        {/* =============================Now Playing Movies Route=============================== */}
        <Route
          path="/nowplaying"
          render={() => (
            <MovieList
              url={`${API_PATH}/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-US`}
              {...props}
            />
          )}
        />
        {/* =============================Search Movies Route=============================== */}
        <Route path="/search" component={Search} />
        {/* ============================= SIngle Movie Details Route=============================== */}
        <Route path="/movie/:id" component={MovieDetail} />
        {/* ============================= 404 Not Found Route =============================== */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
// gave router props to APP to be able to send down to render components as props
export default withRouter(App);
