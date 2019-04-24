import React from "react";
import "./App.css";
import BountyList from "./components/BountyList";
import AddBountyPage from "./components/AddBountyPage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header" />
      <AddBountyPage />
      <BountyList />
    </div>
  );
};

export default App;
