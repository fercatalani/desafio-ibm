import React, { useEffect, useState } from 'react';
import book from '../../assets/images/book.svg';
import './styles.css';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Link } from "react-router-dom";

export default function EditCategory() {
  const [edit, setEdit] = useState([])
  const [updateCategory, setUpdateCategory] = useState("")

  const params = useParams()
  
  useEffect(() => {
    api.get(`/category/${params.id}`)
    .then((response) => {
      setEdit((response.data))
      console.log(response.data)
    })
  }, []);

   //PUT
   function updateCategories(id, name) {
    api
      .put("/category", JSON.stringify({ id: id, name: name }))
      .then((response) => {
        setUpdateCategory(response.data);
        console.log(JSON.stringify(response.data))
      })
  }

  return(
    <div className="categoria-container">
      <div className="screen">
        <section className="image">
          <img src={book} alt={"personagem com livro"}/>
        </section>

        <section className="cadastro">
          <form>
            <h2>Editar categoria</h2>
            <input 
              type="text"
              value={edit.name}
              onChange={(e) => setEdit({
                ...edit, name: e.target.value
              })}
            />
            <div className="save-button">
              <Link to={{pathname: `/nova-categoria`}}>
                <button className="btn-salvar" onClick={() => updateCategories(edit.id, edit.name)}>Salvar</button>
              </Link>
            </div>
          </form>
        </section>
      </div>

    </div>
  );
};
