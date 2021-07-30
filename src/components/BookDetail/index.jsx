import "./styles.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import React from "react";

export const BookDetail = ({ book }) => (
  <div className="book-container">
    <ImBooks fontSize="56px" />

    <div className="book-infos">
      <p className="book-title">{book.title}</p>
      <p className="book-description">{book.description}</p>
      <p className="book-author">
        {book.author} | {book.price}
      </p>
      <p></p>
    </div>

    {book.favorite && <AiFillHeart fontSize="24px" color="#F56565" />}
    {!book.favorite && <AiOutlineHeart fontSize="24px" color="#F56565" />}
  </div>
);
