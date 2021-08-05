import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";



export default function DetailsBook() {

  const [livros, setLivros] = useState([]);
  const params = useParams();


  useEffect(() => {
    api.get(`/book/${params.id}`).then(({ data }) => {
      setLivros(data);
      console.log(JSON.stringify(data));
    });
  }, []);


  return (
    <div className="box-book">
      <section className="book-container1">
        <div className="title-desc"><h2>Descrição livro</h2></div>

        <div className="book-infos">
          <p className="book-title">Nome: {livros.nome}</p>
          <p className="book-description">Descrição: {livros.descricao}</p>
          <p className="book-author">Estoque:{livros.estoque}</p>
          <div className="button-detail"><a href="/"><button>voltar</button></a>
          </div>
        </div>
      </section>
    </div>
  )
}
