import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./context/DataProvider";
import "./index.css";
import App from "./App";
// =================================PROVIDER NOT USED. WAS JUST PRACTICE=====================================================================================

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
