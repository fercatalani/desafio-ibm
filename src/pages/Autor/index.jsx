import React, {useEffect, useState} from "react";
import "./styles.css";
import { InsertAuthor } from '../../services/api'

function Autor() {
    const [ author, setAuthor] = useState({
        name: '',
        birthdate: '',
        nationality: '',
        biography: ''
    })

    async function SaveAuthor(){
        const data = author;

        console.log('Dados autor ===> ', author);

        const resp = await InsertAuthor(data)

        console.log('Retorno Endpoint cadastro do autor ==> ', resp)
    }


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
            <input type="text" value={author.name} onChange={(e) => setAuthor({...author, name: e.target.value})}></input>
          </div>
          <div>
            Nacionalidade:
            <input type="text" value={author.nationality} onChange={(e) => setAuthor({...author, nationality: e.target.value})}></input>
          </div>
          <div>
            Aniversario:
            <input type="text" value={author.birthdate} onChange={(e) => setAuthor({...author, birthdate: e.target.value})}></input>
          </div>
          <div>
            Biografia:
            <input type="text" value={author.biography} onChange={(e) => setAuthor({...author, biography: e.target.value})} maxLength="255"></input>
          </div>
          <div>
            <button type="button" onClick={() => SaveAuthor()}>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autor;
