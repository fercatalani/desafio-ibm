import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import bookImg from "../../assets/images/book.svg";

export default function EditBook() {
  const [categories, setCategories] = useState([]);
  const [book, setBook] = useState({
    categoria_id: "",
    nome: "",
    descricao: "",
    estoque: 0,
    classificacao: 0,
    sbn: "",
  });
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/livro/${params.id}`).then((response) => setBook(response.data));
  }, [params]);

  useEffect(() => {
    api.get("/categories").then((response) => setCategories(response.data));
  }, []);

  const bookDelete = () => {
    if (window.confirm("Você tem certeza que deseja deletar?")) {
      api.delete(`/livro/${params.id}`).then(() => {
        history.goBack();
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api.put(`/livro/${params.id}`, book).then(() => {
      history.goBack();
    });
  };

  return (
    <div className="newbook-container">
      <div className="screen">
        <section className="image">
          <img src={bookImg} alt={"logo"} />
          <h2>Edite seus livros</h2>
        </section>

        <section className="FormS">
          <form onSubmit={handleSubmit}>
            <h2>Edite seu livro</h2>
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
                value={book.estoque}
                onChange={(e) => setBook({ ...book, estoque: e.target.value })}
              />
              <br />
            </div>
            <div>
              <label>Classificação</label>
              <input
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
                value={book.category?.id}
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
            <div className="actions-form">
              <button type="button" onClick={bookDelete}>
                Deletar
              </button>
              <button type="submit">Atualizar</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
