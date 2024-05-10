import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import plusButton from "./img/plus-button.png";

import Navbar from "./components/Navbar";

import CityEntry from "./components/CityEntry";

function App() {
  const [addCity, setAddCity] = useState(false);
  const [mainBudget, setMainBudget] = useState('');

  return (
    <div className="App">

      <Navbar />
      <div>
      <div className="budget-box">{mainBudget ? mainBudget : 0} €</div>
      </div>

      {addCity && <CityEntry mainBudget={mainBudget} setMainBudget={setMainBudget}/>}

      {!addCity && 
      <img onClick={() => setAddCity(!addCity)}src={plusButton}
      width={'50px'} height={'50px'} style={{marginTop:'2rem'}}
      />
      
      }
      
    </div>
  );
}

export default App;
