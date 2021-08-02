import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <nav className="container">
      <ul className="nav-links">
        <Link to='/'>
          <li>Início</li>
        </Link>
        <Link to='/new-book'>
          <li>Novo Livro!</li>
        </Link>
      </ul>
    </nav>
  )
};