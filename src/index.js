import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import App from "./App";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
