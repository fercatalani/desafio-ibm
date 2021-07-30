import React, { useState } from "react";
import Search from "./components/Search";
import { BookDetail } from "./components/BookDetail";
import Dropdown from "./components/Dropdown";

import categories from "./data/categories.json"

import "./App.css";
//import api from './api';

const books = [
  {
    title: "Ensaio sobre a Cegueira",
    description:
      "Ensaio sobre a Cegueira é um romance do escritor português José Saramago, publicado em 1995, e traduzido para diversas línguas. A obra narra a história da epidemia de cegueira branca que se espalha por uma cidade, causando um grande colapso na vida das pessoas e abalando as estruturas sociais.",
    author: "José Saramago",
    price: "R$ 50,00",
    favorite: true,
  },
  {
    title: "Dom Casmurro",
    description:
      "Prometido para o seminário desde o nascimento, o jovem carioca Bentinho precisa encontrar um jeito de fugir da vida na Igreja e realizar seu verdadeiro sonho: casar-se com a vizinha Capitu. Uma história de paixão, obsessão e ciúme se desenrola, em uma narrativa cheia de reviravoltas, que aos poucos constrói um retrato da sociedade brasileira.",
    author: "Machado de Assis",
    price: "R$ 29,90",
    favorite: false,
  },
  {
    title: "Dom Quixote",
    description:
      "Dom Quixote de la Mancha é um livro escrito pelo espanhol Miguel de Cervantes. O título e ortografia originais eram El ingenioso hidalgo Don Quixote de La Mancha, com sua primeira edição publicada em Madrid no ano de 1605.",
    author: "Miguel de Cervantes",
    price: "R$ 45,00",
    favorite: true,
  },
];

export default function App() {
  const [value, setValue] = useState(null)
  
    return (
      <div className="App">

        <div className="containerFilter">
          <Search />
          <div style={{ width: 200}}>
            {/* options: referenciando os dados, prompt: especificando a mensagem */}
            <Dropdown 
              options={categories} 
              prompt='Categoria' 
              value={value}
              onChange={val => setValue(val)}/>
          </div>
        </div>

        <section className="list-container">
          {books.map((book) => (
            <BookDetail book={book} />
          ))}
        </section>

      </div>
    );
};
