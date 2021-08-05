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

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0)


  const pages = Math.ceil(livros.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = livros.slice(startIndex, endIndex)


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
    <div className="home-container" id="inicio">
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
        
      </div>

      <section className="list-container">

        {currentItems?.map((livro) => (
          <a
            href={`edit-book/${livro.id}`}
            className="book-container"
            key={livro.id}
          >
            <div className="book-infos">
              <p className="book-title">Nome: {livro.nome}</p>
              <p className="book-description">Descrição: {livro.descricao}</p>
              <div className="button">
                <a href={`details-Book/${livro.id}`}><button>Ver detalhes</button> </a>
              </div>
            </div>
            <AiOutlineArrowRight fontSize="24" />


          </a>
        ))}
      </section>
      <div className="pagination">
        {Array.from(Array(pages), (livros, index) => {
          return <button  value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
        })}
      </div>

    </div>

  );
}

