import React, { } from 'react';
import book from '../../assets/images/book.svg';
import './styles.css';

export default function EditCategory() {
  

  return(
    <div className="edit-container">
      <div className="screen">
        <section className="image">
          <img src={book} alt={"personagem com livro"}/>
        </section>

        <section>
          <h2>Editar categoria</h2>
        </section>
      </div>

    </div>
  );
};
