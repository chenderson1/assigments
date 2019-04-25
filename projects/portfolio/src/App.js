import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />

        <Switch>
          <Route
            exact
            path="/"
            render={rProps => <LandingPage {...rProps} />}
          />
          <Route path="/skills" render={rProps => <Skills {...rProps} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
