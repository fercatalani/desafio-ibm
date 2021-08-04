import React, { useEffect, useState } from 'react';
import book from '../../assets/images/book.svg';
import './styles.css';
import api from "../../services/api";
import { FaTimesCircle } from "react-icons/fa";

export default function NovaCategoria() {
  const [categorias, setCategorias] = useState(null);
  const [category, setCategory] = useState("")

  //GET
  useEffect(() => {
    listCategory();
  }, []);
  
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

            <button onClick={createCategory}>Cadastrar</button>
            
          <h2>Lista de categorias</h2>
            {categorias?.map(categoria => {
              return (
              <ul className="listagem">
                <li key={categoria.id}>{categoria.name}</li>
                <div className="delButton">
                  <FaTimesCircle 
                    onClick={() => deleteCategory(categoria.id)}
                    fontSize="35px" 
                    color="#D2042D"
                    />
                </div>
              </ul>
            )})}

          </form>
        </section>
      </div>

    </div>
  );
};
