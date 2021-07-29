import React, { useState } from 'react';
import "./styles.css";

export default function Dropdown({ options, prompt, value, onChange }) {
  const [open, setOpen] = useState(false)


    return(
      <div className="dropdown">
        <div 
          className="control" 
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="selected-value">{prompt}</div>
          <div className={`arrow ${open ? "open" : null}`}/>
        </div>
        <div className={`options ${open ? "open" : null}`}>
          { options.map((option) => (
              <div className="option">{option.category}</div> 
          ))}
          
        </div>
      </div>
    );
  };