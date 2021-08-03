import React, { useEffect, useState } from 'react';
import book from '../../assets/images/book.svg';
import './styles.css';
import api from "../../services/api";


export default function NovaCategoria() {
  const [categorias, setCategorias] = useState(null);

  useEffect(() => {
    api.get("/categories")
      .then((response) => {
        setCategorias(response.data);
        console.log(JSON.stringify(response.data));
      });
  }, []);

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
              <input />
            </div>

            <button>Cadastrar</button>
          </form>

          {categorias?.map(categoria => (

            <ul className="listagem">
              <h2>Lista de categorias</h2>
              <li key={categoria.id}>{categoria.name}</li>
            </ul>
          ))}
        </section>
      </div>

    </div>
  );
};
