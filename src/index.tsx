import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreContext from "./store-ctx";

ReactDOM.render(
  <React.StrictMode>
    <StoreContext>
      <App />
    </StoreContext>
  </React.StrictMode>,
  document.getElementById("root")
);
