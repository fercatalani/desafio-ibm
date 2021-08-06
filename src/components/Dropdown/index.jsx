// import { getByDisplayValue } from '@testing-library/react';
import React, { useState, useRef, useEffect } from 'react';
import "./styles.css";

export default function Dropdown({ options, prompt, value, onChange }) {
/* options: referenciando a opção de categorias 
  prompt: exibe caixa de dialogo com uma mensagem opcional solicitando 
  ao usuario a entrada de um texto 
  value: retorna array com os valores das props de um dado objeto
  onChange: dispara uma ação na opção selecionada
*/
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(""); 
  const ref = useRef(null)

  /* rastreando quando a tela(document) é clicada */
  useEffect(() => {
    ["click", "touchend"].forEach((e) => {
      document.addEventListener(e, toggle);
    })
    return () => ["click", "touchend"].forEach((e) => {
      document.removeEventListener(e, toggle);
    }) 
  }, []);

  /* verificando se há um evento E se a tela foi clicada fora do dropdown */
  function toggle(e) {
    setOpen(e && e.target === ref.current)
  }

  function filter(options) {
    return options.filter(option => 
      option.category.toLowerCase().indexOf(query.toLowerCase()) > -1 //verificando nas opções se bate com o que foi inserido
    );
  }

  function displayValue() {
    if(query.length > 0) return query;
    if(value) return value.category;
    return "";
  }

  function selectOption(option) {
    setQuery("")
    onChange(option)
    setOpen(false)
  }

    return(
      <div className="dropdown">
        <div className="control">
          <div className="selected-value">
            <input
              type="text"
              ref={ref}
              placeholder={value ? value.category : prompt} 
              value={displayValue()}
              onChange={e => {
                setQuery(e.target.value)
                onChange(null)
              }}
              onClick={toggle}
              onTouchEnd={toggle}
            />
          </div>
          <div className={`arrow ${open ? "open" : null}`}/>
        </div>
        <div className={`options ${open ? "open" : null}`}>
          { filter(options).map((option, index) => (
            <div 
              key={index}
              className={`option ${
                value === option ? "selected" : null
              }`}
              onClick={() => selectOption(option)}
              onTouchEnd={() => selectOption(option)}
            >
              {option.category}
            </div> 
          ))}
        </div>
      </div>
    );
  };