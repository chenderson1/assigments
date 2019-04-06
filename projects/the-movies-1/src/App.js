import React, { Component } from "react";
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

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <StyledHeader className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <NavBar />
        </StyledHeader>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/popular"
            render={() => (
              <MovieList
                url={`https://api.themoviedb.org/3/discover/movie?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&`}
              />
            )}
          />

          <Route
            path="/toprated"
            render={() => (
              <MovieList
                url={`https://api.themoviedb.org/3/movie/top_rated?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&page=${
                  this.state.page
                }`}
                handleClick={this.handleClick}
              />
            )}
          />

          <Route
            path="/nowplaying"
            render={() => (
              <MovieList
                url={`https://api.themoviedb.org/3/movie/now_playing?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&page=${
                  this.state.page
                }`}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
