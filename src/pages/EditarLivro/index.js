import React, { useEffect, useState } from "react";
import "./styles.css";
import bookImg from "../../assets/images/book.svg";
import api from "../../services/api";
import { useHistory, useParams } from "react-router-dom";

export default function EditBook(props) {
  const [categories, setCategories] = useState([]);
  const [book, setBook] = useState({});
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

  const handleSubmit = () => {};

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
              <input value={book.nome} />
              <br />
            </div>
            <div>
              <label>Descrição</label>
              <input value={book.descricao} />
              <br />
            </div>

            <div>
              <label>Estoque</label>
              <input value={book.estoque} />
              <br />
            </div>
            <div>
              <label>Classificação</label>
              <input value={book.classificacao} />
              <br />
            </div>
            <div>
              <label>SBN</label>
              <input value={book.sbn} />
              <br />
            </div>
            <div>
              <label>Categoria</label>
              <select>
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
