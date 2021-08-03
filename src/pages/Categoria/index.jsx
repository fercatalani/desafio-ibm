import React from 'react';
import book from '../../assets/images/book.svg';
import './styles.css';

export default function NovaCategoria() {
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
        </section>
      </div>

    </div>
  );
};
