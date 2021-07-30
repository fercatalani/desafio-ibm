import logo from "../../assets/images/logo.png";
import "./styles.css";
import React from "react";

import Nav from "../../Nav";

export const Header = () => (
  <header>
    <img src={logo} alt="logo" class="logo" />
    <Nav />
  </header>
);
