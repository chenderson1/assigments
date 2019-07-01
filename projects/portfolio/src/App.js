import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={rProps => <LandingPage {...rProps} />}
          />
          <Route path="/skills" render={rProps => <Skills {...rProps} />} />
          <Route path="/projects" render={rProps => <Projects {...rProps} />} />
          <Route path="/contact" render={rProps => <Contact {...rProps} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
