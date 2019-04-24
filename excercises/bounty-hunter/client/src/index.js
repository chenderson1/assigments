import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import BountyDataProvider from "./context/dataContext";

ReactDOM.render(
  <BrowserRouter>
    <BountyDataProvider>
      <App />
    </BountyDataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
