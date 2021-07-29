import React, { Component } from "react";
import Search from './components/searchComponent';

import "./App.css";
//import api from './api';

class App extends Component {

  render(){
    return(
      <div className="App">
        <Search />
      </div>
    );
  };
};

export default App;
