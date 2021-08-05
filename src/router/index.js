import React from "react";
import "./App.css";

import { Header } from "../components/Header";
import Nav from "../components/Menu/Nav";
import Home from "../pages/Home";
import NewBook from "../pages/Livro";
import NovaCategoria from "../pages/Categoria";
import EditBook from "../pages/EditarLivro";
import EditCategory from "../pages/Categoria/edit";

//renomeando para Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/nova-categoria" component={NovaCategoria} />
          <Route path="/edit-book/:id" component={EditBook} />
          <Route path="/edit-category/:id" component={EditCategory} />
        </Switch>
      </div>
    </Router>
  );
}
