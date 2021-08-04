import React, { useState, useEffect } from "react";
import "./styles.css";

// import { BookDetail } from "../Livro/BookDetail";
import Dropdown from "../../components/Dropdown";
import api from "../../services/api";
import searchIcon from "../../assets/searchIcon.svg";

import categories from "../../mock/categories.json";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const [value, setValue] = useState(null);

  const [livros, setLivros] = useState([]);
  const [repos, setRepos] = useState([])

  useEffect(() => {
    api.get("/books").then(({ data }) => {
      setLivros(data);
      setRepos(data);
      console.log(JSON.stringify(data));
    });
  }, []);


  const handleChange = ({ target }) => {
    if (!target.value) {
      setLivros(repos);
      return
    }
    const filterLivros = repos.filter(({ nome }) => nome.includes(target.value));

    setLivros(filterLivros);
  }


  return (
    <div className="home-container">
      <div className="containerFilter">
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder="Busca..."
            onChange={handleChange}
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="icon"
          />
        </div>
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
              <div className="button">
                <a href={`details-Book/${livro.id}`}><button>Ver detalhes</button> </a>
              </div>
            </div>
            <AiOutlineArrowRight fontSize="24" />


          </a>

        ))}
      </section>
    </div>
  );
}
