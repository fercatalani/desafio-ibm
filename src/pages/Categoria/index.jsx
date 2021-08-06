import React, { useEffect, useState } from 'react';
import book from '../../assets/images/book.svg';
import './styles.css';
import api from "../../services/api";
import { FaTimesCircle, FaEdit } from "react-icons/fa"; 
import { Link } from "react-router-dom";

export default function NovaCategoria() {
  const [categorias, setCategorias] = useState(null);
  const [category, setCategory] = useState("");
  

  //GET
  useEffect(() => {
    listCategory();
  });
  
  function listCategory() {
    api.get("/categories")
      .then((response) => {
        setCategorias(response.data);
        console.log(JSON.stringify(response.data));
      });
  }

  //POST
  function createCategory() {
    api
      .post("/category", category)
      .then((response) => {
        setCategory(response.data);
        console.log(JSON.stringify(response.data));
      });
  }

  //DELETE
  function deleteCategory(id) {
    api
      .delete(`/category/${id}`)
      .then((resp) => {
        console.warn(resp);
        listCategory();
      })
  }

  return(
    <div className="categoria-container">
      <div className="screen">
        <section className="image">
          <img src={book} alt={"personagem com livro"}/>
          <h2>Cadastre suas categorias</h2>
        </section>

        <section className="cadastro">
          <form>
            <h2>API Categoria - Teste</h2>
            <div>
              <label>Categoria</label>
              <input 
              type="text"
              value={category.name}
              onChange={(e) => setCategory({
                ...categorias, name: e.target.value
              })}/>
            </div>

            <button className="btn-cadastro" onClick={createCategory}>Cadastrar</button>
            
            <h2>Lista de categorias</h2>
            <ul className="listagem">
              {categorias?.map(categoria => {
                return (
                  <li key={categoria.id}>{categoria.name}
                    <div className="edit-del-button">
                      <Link to={{pathname: `/edit-category/${categoria.id}`}}>
                      <FaEdit 
                        fontSize="2em"
                        color="black"
                        />
                      </Link>
                      <FaTimesCircle 
                        onClick={() => deleteCategory(categoria.id)}
                        fontSize="2em" 
                        color="#D2042D"
                      />
                    </div>
                  </li>
              )})}
            </ul>
          </form>
        </section>
      </div>
    </div>
  );
};
