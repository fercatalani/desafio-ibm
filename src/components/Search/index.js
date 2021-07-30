import React from 'react';
import "./styles.css";
import searchIcon from "../../assets/searchIcon.svg";

export default function Search() {
    return(
      <div className="search">
        <input 
          className="input"
          type = "text" 
          placeholder = "Busca..." 
        />
        <img 
          src={searchIcon} 
          alt="search icon" 
          className="icon" 
        />
      </div>
    );
  };