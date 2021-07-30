import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import Nav from "./Nav";
import Home from "./Home";
import NewBook from "./NewBook";

//renomeando para Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* BrowserRouter: tudo que estiver dentro dele tera a habilidade de roteamento
Route: renderiza um componente com base na URL com path e especificamos qual componente em seguida
Switch: assim que ele identifica um path, ele renderiza o componente

exact: evita renderizar tudo que for identificado, e renderiza apenas aquele path exato
*/

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header>
        <Nav />
        </Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new-book" component={NewBook} />
        </Switch>
      </div>
    </Router>
  );
};
