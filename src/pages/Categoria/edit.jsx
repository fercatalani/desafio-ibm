import React, { useEffect, useState } from "react";
import book from "../../assets/images/book.svg";
import "./styles.css";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function EditCategory() {
  const [edit, setEdit] = useState({ id: 0, name: "", books: [] });
  const params = useParams();
  const history = useHistory();

  

  useEffect(() => {
    function LoadWordEdit(){
      api.get(`/category/${params.id}`).then((response) => {
        setEdit(response.data);
      });
    }

    LoadWordEdit();

  }, [params]);

  //PUT
  async function updateCategories(id, name) {
    await api
      .put("/category", JSON.stringify({ id: id, name: name }))
      .then((response) => {return response});
    history.push("/nova-categoria");
  }

  return (
    <div className="categoria-container">
      <div className="screen">
        <section className="image">
          <img src={book} alt={"personagem com livro"} />
        </section>

        <section className="cadastro">
          <form>
            <h2>Editar categoria</h2>
            <input
              type="text"
              value={edit.name}
              onChange={(e) =>
                setEdit({
                  ...edit,
                  name: e.target.value,
                })
              }
            />
            <div className="save-button">
              <button
                type="button"
                className="btn-salvar"
                onClick={() => updateCategories(edit.id, edit.name)}
              >
                Salvar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
