import React from "react";
import "./App.css";
import BountyList from "./components/BountyList";
import AddBountyPage from "./components/AddBountyPage";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <span>home</span>
        </Link>
        <Link to="/addbounty">
          <span>Add Bounty</span>
        </Link>
      </header>
      <Switch>
        <Route exact path={"/"} render={() => <BountyList />} />
        <Route path={"/addbounty"} render={() => <AddBountyPage />} />
        <Route />
      </Switch>
    </div>
  );
};

export default App;
