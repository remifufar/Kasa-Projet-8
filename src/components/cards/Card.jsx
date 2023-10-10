import React from 'react';
 
import data from '../data/data.json';
import { Link } from 'react-router-dom';

function Carte({ carte }) {
    return (
      <div className="carte">
        <img src={carte.cover} alt="photo" />
        <p>{carte.title}</p>
      </div>
    );
  }
  
  function App() {
    return (
      <div className="Cards-conteneur">
        {data.map((carte) => (
            <Link to ='' >
          <Carte key={carte.id} carte={carte} />
          </Link>
        ))}
      </div>
    );
  }
  
  export default App;
  