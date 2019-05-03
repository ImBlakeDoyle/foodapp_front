import React, { useState, useEffect } from 'react';
import './App.css';
import { restElement } from '@babel/types';

function App() {
  const [allItems, addItem] = useState([]);
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem([...allItems, item]);
  }

  return (
    <form onSubmit = {handleSubmit}>
      <input 
      value={item}
      onChange={e => setItem(e.target.value)}
      />
      <strong>
        <p>Current item is: {item}</p>
      </strong>
      <strong>
        <ul>
          All items are: {allItems.map((i) => {
            return(
              <li key={i}>
                {i}
              </li>
            );
          })}
        </ul>
      </strong>
    </form>
  );
}

export default App;
