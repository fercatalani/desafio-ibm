import React from "react";
import "./Nav.css";
import { Container } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Container>
        <RouterLink to="/">Início</RouterLink>

        <RouterLink to="/new-book">Novo Livro</RouterLink>

        <RouterLink to="/nova-categoria">Nova Categoria</RouterLink>

        <RouterLink to="/novo-autor">Nova Autor</RouterLink>
      </Container>
    </>
  );
}
