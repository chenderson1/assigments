import React, { Component } from "react";
import FriendsList from "./FriendsList";

class App extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <div className="app">
        <FriendsList />
      </div>
    );
  }
}

export default App;
