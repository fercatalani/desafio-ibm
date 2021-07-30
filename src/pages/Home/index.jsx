import React, { useState } from "react";
import Search from "../../components/Search";
import { BookDetail } from "../../components/BookDetail";
import Dropdown from "../../components/Dropdown";

import categories from "../../data/categories.json";
import books from "../../data/books.json";

import "./styles.css";
//import api from './api'

export function Home() {
  const [value, setValue] = useState(null);

  return (
    <>
      <div className="containerFilter">
        <Search />
        <div style={{ width: 200 }}>
          {/* options: referenciando os dados, prompt: especificando a mensagem */}
          <Dropdown
            options={categories}
            prompt="Categoria"
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>
      </div>

      <section className="list-container">
        {books.map((book) => (
          <BookDetail book={book} />
        ))}
      </section>
    </>
  );
}
