import logo from "../../assets/images/logo.png";
import "./styles.css";
import React from "react";

import Nav from "../Menu/Nav";

export const Header = () => (
  <header>
    <img src={logo} alt="logo" className="logo" />
    <Nav />
  </header>
);
