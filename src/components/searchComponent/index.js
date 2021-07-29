import React from 'react';
import "./styles.css";
import searchIcon from "../../assets/searchIcon.svg";

export default function Search() {
    return(
      <div className="searchContainer">
        <input 
          className="search"
          type = "text" 
          placeholder = "Search..." 
        />
        <img 
          src={searchIcon} 
          alt="search icon" 
          className="searchIcon" 
        />
      </div>
    );
  };