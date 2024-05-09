import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import plusButton from "./img/plus-button.png";

import Navbar from "./components/Navbar";

import CityEntry from "./components/CityEntry";

function App() {
  const [addCity, setAddCity] = useState(false);
  const [budget, setBudget] = useState('');

  return (
    <div className="App">

      <Navbar />
      <div>
      <div className="budget-box">{budget ? budget : 0} €</div>
      </div>

      {/* Component React */}

      {addCity && <CityEntry budget={budget} setBudget={setBudget}/>}

      {!addCity && 
      <img onClick={() => setAddCity(!addCity)}src={plusButton}
      width={'50px'} height={'50px'} style={{marginTop:'2rem'}}
      />
      
      }
      
    </div>
  );
}

export default App;
