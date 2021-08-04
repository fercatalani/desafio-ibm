import React from "react";
import "./styles.css";

function Autor() {
  return (
    <div className="container_autor">
      <div className="topbar_autor">
        <div className="titulo"> Listagem de autor </div>
      </div>
      <div className="topbar_autor">
        <div className="form_autor">
          <div className="titulo">Cadastro de autor</div>
          <div>
            Nome:
            <input type="text"></input>
          </div>
          <div>
            Nacionalidade:
            <input type="text"></input>
          </div>
          <div>
            Aniversario:
            <input type="text"></input>
          </div>
          <div>
            Biografia:
            <input type="text"></input>
          </div>
          <div>
            <button type="button">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autor;
