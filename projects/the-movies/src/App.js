import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import logo from "./resources/images/clapper_board_white.png";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <Router>
      <div>
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <NavBar />
        </header>

        <Switch>
          <Route exact path={"/"} component={MovieList} />
          <Route path={"/:id"} component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
