import React, { useEffect, useState } from "react";
import { createBook, getCategories } from "../../services/api";
import "./styles.css";
import bookImg from "../../assets/images/book.svg";

export default function NewBook() {
  const [categories, setCategories] = useState([]);
  const [book, setBook] = useState({
    categoria_id: "",
    nome: "",
    descricao: "",
    estoque: 0,
    classificacao: 0,
    sbn: "",
  });

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    createBook({
      ...book,
      classificacao: Number(book.classificacao),
      estoque: Number(book.estoque),
    }).then(() => {
      window.alert("Seu livro foi cadastrado com sucesso!");
      setBook({
        categoria_id: "",
        nome: "",
        descricao: "",
        estoque: 0,
        classificacao: 0,
        sbn: "",
      });
    });
  };

  return (
    <div className="newbook-container">
      <div className="screen">
        <section className="image">
          <img src={bookImg} alt={"logo"} />
          <h2>Cadastre seus livros</h2>
        </section>
        <section className="FormS">
          <form onSubmit={handleSubmit}>
            <h2>Cadastre seu livro</h2>
            <div>
              <label>Nome</label>
              <input
                value={book.nome}
                onChange={(e) => setBook({ ...book, nome: e.target.value })}
              />
              <br />
            </div>
            <div>
              <label>Descrição</label>
              <input
                value={book.descricao}
                onChange={(e) =>
                  setBook({ ...book, descricao: e.target.value })
                }
              />
              <br />
            </div>

            <div>
              <label>Estoque</label>
              <input
                type="number"
                value={book.estoque}
                onChange={(e) => setBook({ ...book, estoque: e.target.value })}
              />
              <br />
            </div>
            <div>
              <label>Classificação</label>
              <input
                type="number"
                value={book.classificacao}
                onChange={(e) =>
                  setBook({ ...book, classificacao: e.target.value })
                }
              />
              <br />
            </div>
            <div>
              <label>SBN</label>
              <input
                value={book.sbn}
                onChange={(e) => setBook({ ...book, sbn: e.target.value })}
              />
              <br />
            </div>
            <div>
              <label>Categoria</label>
              <select
                value={book.categoria_id}
                onChange={(e) =>
                  setBook({ ...book, categoria_id: e.target.value })
                }
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <br />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </section>
      </div>
    </div>
  );
}
