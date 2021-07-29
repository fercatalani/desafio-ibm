import React, { Component } from "react";

import Search from './components/searchComponent';
import Dropdown from "./components/filterComponent";
import { Header } from "./components/Header";

import categories from "./data/categories.json"


import "./App.css";
//import api from './api';

class App extends Component {

  render(){
    return(
      <div className="App">
        <Header />
        <div className="containerFilter">
        <Search />
        <div style={{ width: 200}}>
          <Dropdown options={categories} prompt='Select category...' />
        </div>
        </div>
      </div>
    );
  };
};

export default App;
