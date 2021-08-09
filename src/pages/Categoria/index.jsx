import React, { useEffect, useState } from "react";
import book from "../../assets/images/book.svg";
import "./styles.css";
import api from "../../services/api";
import { FaTimesCircle, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NovaCategoria(props) {
  const [categorias, setCategorias] = useState([]);
  const [category, setCategory] = useState({
    name: ""
  });

  //GET
  useEffect(() => {
    listCategory().then((response) => {
      console.log('Retorno categoria apos atualizacao ==> ', response)
    });
  }, []);

  async function listCategory() {
    var resp = await api.get("/categories").then((response) => {
      return response.data;
    });
    setCategorias(resp);
    return resp
  }

  //POST
  function createCategory() {
    console.log('Valor category => ', category)
    api.post("/category", JSON.stringify(category))
      .then((response) => {
        setCategory(response.data);
        listCategory();
      })
      .catch((error => {
        console.log('Erro ao salvar ==> ', error)
      }));

  }

  //DELETE
  function deleteCategory(id) {
    console.log('Id recebido pelo parametro ==> ', id)
    api.delete(`/category/${id}`).then((resp) => {return resp});
    listCategory();
  }

  const handleChange = (e) => {
    setCategory({ name: e.target.value })
  }

  return (
    <div className="categoria-container">
      <div className="screen">
        <section className="image">
          <img src={book} alt={"personagem com livro"} />
          <h2>Cadastre suas categorias</h2>
        </section>

        <section className="cadastro">
          <form>
            <h2>API Categoria - Teste</h2>
            <div>
              <label>Categoria</label>
              <input
                type="text"
                name="name"
                value={category.name}
                onChange={(e) => {handleChange(e)}}
              />
            </div>

            <button
              type="button"
              className="btn-cadastro"
              onClick={() => createCategory()}
            >
              Cadastrar
            </button>

            <h2>Lista de categorias</h2>
            <ul className="listagem">
              {categorias.map((categoria) => {
                return (
                  <li key={categoria.id}>
                    {categoria.name}
                    <div className="edit-del-button">
                      <Link to={{ pathname: `/edit-category/${categoria.id}` }}>
                        <FaEdit fontSize="2em" color="black" />
                      </Link>
                      <FaTimesCircle
                        onClick={() => deleteCategory(categoria.id)}
                        fontSize="2em"
                        color="#D2042D"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </form>
        </section>
      </div>
    </div>
  );
}
