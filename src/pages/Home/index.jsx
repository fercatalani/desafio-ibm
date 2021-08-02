import React, { useState, useEffect } from "react";
import "./styles.css";

import Search from "../../components/Search";
// import { BookDetail } from "../Livro/BookDetail";
import Dropdown from "../../components/Dropdown";
import api from "../../services/api";

import categories from "../../mock/categories.json";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const [value, setValue] = useState(null);

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    api.get("/livros").then(({ data }) => {
      setLivros(data);
      console.log(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="home-container">
      <div className="containerFilter">
        <Search />
        <div style={{ width: 200 }}>
          {/* options: referenciando os dados, prompt: especificando a mensagem */}
          <Dropdown
            options={categories}
            prompt="Categoria"
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>
      </div>

      <section className="list-container">
        {livros?.map((livro) => (
          <a
            href={`edit-book/${livro.id}`}
            className="book-container"
            key={livro.id}
          >
            <div className="book-infos">
              <p className="book-title">Nome: {livro.nome}</p>
              <p className="book-description">Descrição: {livro.descricao}</p>
              <p className="book-author">Estoque:{livro.estoque}</p>
            </div>
            <AiOutlineArrowRight fontSize="24" />
          </a>
        ))}
      </section>
    </div>
  );
}
